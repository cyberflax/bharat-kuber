import React from "react"
import Drop from "../../../../Drop";

export default function Apex (){
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
                <app-apexchart _nghost-oko-c466 className="ng-star-inserted">
                  <section _ngcontent-oko-c466 className="content">
                    <div _ngcontent-oko-c466 className="content-block">
                      <div _ngcontent-oko-c466 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c466 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Apexchart
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
                                    Charts
                                  </li>
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Apexchart
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c466 className="row clearfix">
                        <div _ngcontent-oko-c466 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c466 className="card">
                            <div _ngcontent-oko-c466 className="header">
                              <h2 _ngcontent-oko-c466>Bar chart</h2>
                            </div>
                            <div _ngcontent-oko-c466 className="body">
                              <div _ngcontent-oko-c466 style={{textAlign: 'center'}}>
                                <apx-chart _ngcontent-oko-c466 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{minHeight: '365px'}}>
                                    <div className="apexcharts-canvas apexchartsznodqd82 apexcharts-theme-light" id="apexchartsznodqd82" style={{width: '434px', height: '350px'}}>
                                      <svg className="apexcharts-svg" height={350} id="SvgjsSvg3680" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={434} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <foreignObject height={350} width={434} x={0} y={0}>
                                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" style={{inset: 'auto 0px 1px', position: 'absolute', maxHeight: '175px'}} xmlns="http://www.w3.org/1999/xhtml">
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="NetxProfit" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{background: 'rgb(0,143,251) !important', color: 'rgb(0, 143, 251)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '2px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Net%20Profit" i={0} rel={1} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                Net Profit
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="Revenue" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{background: 'rgb(0,227,150) !important', color: 'rgb(0, 227, 150)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '2px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Revenue" i={1} rel={2} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                Revenue
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={3} seriesname="FreexCashxFlow" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={3} style={{background: 'rgb(254,176,25) !important', color: 'rgb(254, 176, 25)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '2px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Free%20Cash%20Flow" i={2} rel={3} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                Free Cash Flow
                                              </span>
                                            </div>
                                          </div>
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                      .apexcharts-legend {\n                                        display: flex;\n                                        overflow: auto;\n                                        padding: 0 10px;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom,\n                                      .apexcharts-legend.apx-legend-position-top {\n                                        flex-wrap: wrap;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        flex-direction: column;\n                                        bottom: 0;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        justify-content: flex-start;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                        justify-content: center;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                        justify-content: flex-end;\n                                      }\n                                      .apexcharts-legend-series {\n                                        cursor: pointer;\n                                        line-height: normal;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apx-legend-position-top\n                                        .apexcharts-legend-series {\n                                        display: flex;\n                                        align-items: center;\n                                      }\n                                      .apexcharts-legend-text {\n                                        position: relative;\n                                        font-size: 14px;\n                                      }\n                                      .apexcharts-legend-text *,\n                                      .apexcharts-legend-marker * {\n                                        pointer-events: none;\n                                      }\n                                      .apexcharts-legend-marker {\n                                        position: relative;\n                                        display: inline-block;\n                                        cursor: pointer;\n                                        margin-right: 3px;\n                                        border-style: solid;\n                                      }\n\n                                      .apexcharts-legend.apexcharts-align-right\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apexcharts-align-left\n                                        .apexcharts-legend-series {\n                                        display: inline-block;\n                                      }\n                                      .apexcharts-legend-series.apexcharts-no-click {\n                                        cursor: auto;\n                                      }\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-zero-series,\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-null-series {\n                                        display: none !important;\n                                      }\n                                      .apexcharts-inactive-legend {\n                                        opacity: 0.45;\n                                      }\n                                    " }} />
                                        </foreignObject>
                                        <g className="apexcharts-annotations" id="SvgjsG3683" />
                                        <g className="apexcharts-yaxis" id="SvgjsG3824" rel={0} transform="translate(22.354167938232422, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG3825">
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3827" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="31.4">
                                              <tspan id="SvgjsTspan3828">120</tspan>
                                              <title>120</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3830" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="97.7566664094925">
                                              <tspan id="SvgjsTspan3831">90</tspan>
                                              <title>90</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3833" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="164.113332818985">
                                              <tspan id="SvgjsTspan3834">60</tspan>
                                              <title>60</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3836" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="230.46999922847746">
                                              <tspan id="SvgjsTspan3837">30</tspan>
                                              <title>30</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3839" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="296.82666563796994">
                                              <tspan id="SvgjsTspan3840">0</tspan>
                                              <title>0</title>
                                            </text>
                                          </g>
                                          <g className="apexcharts-yaxis-title" id="SvgjsG3841">
                                            <text className="apexcharts-text apexcharts-yaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={900} id="SvgjsText3842" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" transform="rotate(-90 -13.354164123535156 158.38001537322998)" x="27.604167938232422" y="162.71333281898498">
                                              $ (thousands)
                                            </text>
                                          </g>
                                        </g>
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG3682" transform="translate(52.35416793823242, 30)">
                                          <defs id="SvgjsDefs3681">
                                            <linearGradient id="SvgjsLinearGradient3687" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop3688" offset={0} stopColor="rgba(216,227,240,0.4)" stopOpacity="0.4" />
                                              <stop id="SvgjsStop3689" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop3690" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                            <clipPath id="gridRectMaskznodqd82">
                                              <rect fill="#fff" height="267.42666563796996" id="SvgjsRect3692" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="377.6458320617676" x={-3} y={-1} />
                                            </clipPath>
                                            <clipPath id="forecastMaskznodqd82" />
                                            <clipPath id="nonForecastMaskznodqd82" />
                                            <clipPath id="gridRectMarkerMaskznodqd82">
                                              <rect fill="#fff" height="269.42666563796996" id="SvgjsRect3693" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="375.6458320617676" x={-2} y={-2} />
                                            </clipPath>
                                          </defs>
                                          <rect className="apexcharts-xcrosshairs" fill="url(#SvgjsLinearGradient3687)" fillOpacity="0.9" filter="none" height="265.42666563796996" id="SvgjsRect3691" opacity={1} rx={0} ry={0} strokeDasharray={3} strokeWidth={0} width="7.5705632457026715" x={0} y={0} y2="265.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3763" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3765" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="41.293981340196396" x2="41.293981340196396" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3767" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="82.58796268039279" x2="82.58796268039279" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3769" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="123.88194402058919" x2="123.88194402058919" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3771" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="165.17592536078558" x2="165.17592536078558" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3773" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="206.469906700982" x2="206.469906700982" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3775" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="247.7638880411784" x2="247.7638880411784" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3777" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="289.0578693813748" x2="289.0578693813748" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3779" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="330.3518507215712" x2="330.3518507215712" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3781" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="371.64583206176763" x2="371.64583206176763" y1="266.42666563796996" y2="272.42666563796996" />
                                          <g className="apexcharts-grid" id="SvgjsG3758">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG3759">
                                              <line className="apexcharts-gridline" id="SvgjsLine3783" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="371.6458320617676" y1="66.35666640949249" y2="66.35666640949249" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3784" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="371.6458320617676" y1="132.71333281898498" y2="132.71333281898498" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3785" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="371.6458320617676" y1="199.06999922847746" y2="199.06999922847746" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG3760">
                                              <line className="apexcharts-gridline" id="SvgjsLine3762" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3764" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="41.293981340196396" x2="41.293981340196396" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3766" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="82.58796268039279" x2="82.58796268039279" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3768" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="123.88194402058919" x2="123.88194402058919" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3770" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="165.17592536078558" x2="165.17592536078558" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3772" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="206.469906700982" x2="206.469906700982" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3774" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="247.7638880411784" x2="247.7638880411784" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3776" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="289.0578693813748" x2="289.0578693813748" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3778" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="330.3518507215712" x2="330.3518507215712" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3780" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="371.64583206176763" x2="371.64583206176763" y1={0} y2="265.42666563796996" />
                                            </g>
                                            <line id="SvgjsLine3788" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="371.6458320617676" y1="265.42666563796996" y2="265.42666563796996" />
                                            <line id="SvgjsLine3787" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="265.42666563796996" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG3761">
                                            <line className="apexcharts-gridline" id="SvgjsLine3782" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="371.6458320617676" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine3786" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="371.6458320617676" y1="265.42666563796996" y2="265.42666563796996" />
                                            <line id="SvgjsLine3823" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="371.6458320617676" y1="266.42666563796996" y2="266.42666563796996" />
                                          </g>
                                          <g className="apexcharts-bar-series apexcharts-plot-series" id="SvgjsG3694">
                                            <g className="apexcharts-series" data-realindex={0} id="SvgjsG3695" rel={1} seriesname="NetxProfit">
                                              <path barheight="97.32311073392232" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="49.585127141740585" cy="168.10355490404766" d="M9.291145801544191 260.42766563796994L9.291145801544191 173.10455490404766C9.291145801544191 170.60455490404766 11.791145801544191 168.10455490404766 14.291145801544191 168.10455490404766L14.291145801544191 168.10455490404766C14.576427424395526 168.10455490404766 14.861709047246862 170.60455490404766 14.861709047246862 173.10455490404766L14.861709047246862 260.42766563796994C14.861709047246862 262.92766563796994 12.361709047246862 265.42766563796994 9.861709047246862 265.42766563796994L9.861709047246862 265.42766563796994C9.576427424395526 265.42766563796994 9.291145801544191 262.92766563796994 9.291145801544191 260.42766563796994C9.291145801544191 260.42766563796994 9.291145801544191 260.42766563796994 9.291145801544191 260.42766563796994 " fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath3699" index={0} j={0} pathfrom="M 9.291145801544191 265.42766563796994 L 9.291145801544191 265.42766563796994 L 14.861709047246862 265.42766563796994 L 14.861709047246862 265.42766563796994 L 14.861709047246862 265.42766563796994 L 14.861709047246862 265.42766563796994 L 14.861709047246862 265.42766563796994 L 9.291145801544191 265.42766563796994 Z" pathto="M 9.291145801544191 260.42766563796994 L 9.291145801544191 173.10455490404766 C 9.291145801544191 170.60455490404766 11.791145801544191 168.10455490404766 14.291145801544191 168.10455490404766 L 14.291145801544191 168.10455490404766 C 14.576427424395526 168.10455490404766 14.861709047246862 170.60455490404766 14.861709047246862 173.10455490404766 L 14.861709047246862 260.42766563796994 C 14.861709047246862 262.92766563796994 12.361709047246862 265.42766563796994 9.861709047246862 265.42766563796994 L 9.861709047246862 265.42766563796994 C 9.576427424395526 265.42766563796994 9.291145801544191 262.92766563796994 9.291145801544191 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={44} />
                                              <path barheight="121.6538884174029" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="90.87910848193698" cy="143.77277722056706" d="M50.585127141740585 260.42766563796994L50.585127141740585 148.77377722056707C50.585127141740585 146.27377722056707 53.085127141740585 143.77377722056707 55.585127141740585 143.77377722056707L55.585127141740585 143.77377722056707C55.87040876459192 143.77377722056707 56.15569038744326 146.27377722056707 56.15569038744326 148.77377722056707L56.15569038744326 260.42766563796994C56.15569038744326 262.92766563796994 53.65569038744326 265.42766563796994 51.15569038744326 265.42766563796994L51.15569038744326 265.42766563796994C50.87040876459192 265.42766563796994 50.585127141740585 262.92766563796994 50.585127141740585 260.42766563796994C50.585127141740585 260.42766563796994 50.585127141740585 260.42766563796994 50.585127141740585 260.42766563796994 " fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath3701" index={0} j={1} pathfrom="M 50.585127141740585 265.42766563796994 L 50.585127141740585 265.42766563796994 L 56.15569038744326 265.42766563796994 L 56.15569038744326 265.42766563796994 L 56.15569038744326 265.42766563796994 L 56.15569038744326 265.42766563796994 L 56.15569038744326 265.42766563796994 L 50.585127141740585 265.42766563796994 Z" pathto="M 50.585127141740585 260.42766563796994 L 50.585127141740585 148.77377722056707 C 50.585127141740585 146.27377722056707 53.085127141740585 143.77377722056707 55.585127141740585 143.77377722056707 L 55.585127141740585 143.77377722056707 C 55.87040876459192 143.77377722056707 56.15569038744326 146.27377722056707 56.15569038744326 148.77377722056707 L 56.15569038744326 260.42766563796994 C 56.15569038744326 262.92766563796994 53.65569038744326 265.42766563796994 51.15569038744326 265.42766563796994 L 51.15569038744326 265.42766563796994 C 50.87040876459192 265.42766563796994 50.585127141740585 262.92766563796994 50.585127141740585 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={55} />
                                              <path barheight="126.07766617803573" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="132.17308982213336" cy="139.34899945993425" d="M91.87910848193698 260.42766563796994L91.87910848193698 144.34999945993425C91.87910848193698 141.84999945993425 94.37910848193698 139.34999945993425 96.87910848193698 139.34999945993425L96.87910848193698 139.34999945993425C97.16439010478831 139.34999945993425 97.44967172763965 141.84999945993425 97.44967172763965 144.34999945993425L97.44967172763965 260.42766563796994C97.44967172763965 262.92766563796994 94.94967172763965 265.42766563796994 92.44967172763965 265.42766563796994L92.44967172763965 265.42766563796994C92.16439010478831 265.42766563796994 91.87910848193698 262.92766563796994 91.87910848193698 260.42766563796994C91.87910848193698 260.42766563796994 91.87910848193698 260.42766563796994 91.87910848193698 260.42766563796994 " fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath3703" index={0} j={2} pathfrom="M 91.87910848193698 265.42766563796994 L 91.87910848193698 265.42766563796994 L 97.44967172763965 265.42766563796994 L 97.44967172763965 265.42766563796994 L 97.44967172763965 265.42766563796994 L 97.44967172763965 265.42766563796994 L 97.44967172763965 265.42766563796994 L 91.87910848193698 265.42766563796994 Z" pathto="M 91.87910848193698 260.42766563796994 L 91.87910848193698 144.34999945993425 C 91.87910848193698 141.84999945993425 94.37910848193698 139.34999945993425 96.87910848193698 139.34999945993425 L 96.87910848193698 139.34999945993425 C 97.16439010478831 139.34999945993425 97.44967172763965 141.84999945993425 97.44967172763965 144.34999945993425 L 97.44967172763965 260.42766563796994 C 97.44967172763965 262.92766563796994 94.94967172763965 265.42766563796994 92.44967172763965 265.42766563796994 L 92.44967172763965 265.42766563796994 C 92.16439010478831 265.42766563796994 91.87910848193698 262.92766563796994 91.87910848193698 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={57} />
                                              <path barheight="123.8657772977193" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="173.46707116232977" cy="141.56088834025064" d="M133.17308982213336 260.42766563796994L133.17308982213336 146.56188834025065C133.17308982213336 144.06188834025065 135.67308982213336 141.56188834025065 138.17308982213336 141.56188834025065L138.17308982213336 141.56188834025065C138.4583714449847 141.56188834025065 138.74365306783602 144.06188834025065 138.74365306783602 146.56188834025065L138.74365306783602 260.42766563796994C138.74365306783602 262.92766563796994 136.24365306783602 265.42766563796994 133.74365306783602 265.42766563796994L133.74365306783602 265.42766563796994C133.4583714449847 265.42766563796994 133.17308982213336 262.92766563796994 133.17308982213336 260.42766563796994C133.17308982213336 260.42766563796994 133.17308982213336 260.42766563796994 133.17308982213336 260.42766563796994 " fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath3705" index={0} j={3} pathfrom="M 133.17308982213336 265.42766563796994 L 133.17308982213336 265.42766563796994 L 138.74365306783602 265.42766563796994 L 138.74365306783602 265.42766563796994 L 138.74365306783602 265.42766563796994 L 138.74365306783602 265.42766563796994 L 138.74365306783602 265.42766563796994 L 133.17308982213336 265.42766563796994 Z" pathto="M 133.17308982213336 260.42766563796994 L 133.17308982213336 146.56188834025065 C 133.17308982213336 144.06188834025065 135.67308982213336 141.56188834025065 138.17308982213336 141.56188834025065 L 138.17308982213336 141.56188834025065 C 138.4583714449847 141.56188834025065 138.74365306783602 144.06188834025065 138.74365306783602 146.56188834025065 L 138.74365306783602 260.42766563796994 C 138.74365306783602 262.92766563796994 136.24365306783602 265.42766563796994 133.74365306783602 265.42766563796994 L 133.74365306783602 265.42766563796994 C 133.4583714449847 265.42766563796994 133.17308982213336 262.92766563796994 133.17308982213336 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={56} />
                                              <path barheight="134.9252216993014" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="214.76105250252618" cy="130.50144393866856" d="M174.46707116232977 260.42766563796994L174.46707116232977 135.50244393866856C174.46707116232977 133.00244393866856 176.96707116232977 130.50244393866856 179.46707116232977 130.50244393866856L179.46707116232977 130.50244393866856C179.7523527851811 130.50244393866856 180.03763440803243 133.00244393866856 180.03763440803243 135.50244393866856L180.03763440803243 260.42766563796994C180.03763440803243 262.92766563796994 177.53763440803243 265.42766563796994 175.03763440803243 265.42766563796994L175.03763440803243 265.42766563796994C174.7523527851811 265.42766563796994 174.46707116232977 262.92766563796994 174.46707116232977 260.42766563796994C174.46707116232977 260.42766563796994 174.46707116232977 260.42766563796994 174.46707116232977 260.42766563796994 " fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath3707" index={0} j={4} pathfrom="M 174.46707116232977 265.42766563796994 L 174.46707116232977 265.42766563796994 L 180.03763440803243 265.42766563796994 L 180.03763440803243 265.42766563796994 L 180.03763440803243 265.42766563796994 L 180.03763440803243 265.42766563796994 L 180.03763440803243 265.42766563796994 L 174.46707116232977 265.42766563796994 Z" pathto="M 174.46707116232977 260.42766563796994 L 174.46707116232977 135.50244393866856 C 174.46707116232977 133.00244393866856 176.96707116232977 130.50244393866856 179.46707116232977 130.50244393866856 L 179.46707116232977 130.50244393866856 C 179.7523527851811 130.50244393866856 180.03763440803243 133.00244393866856 180.03763440803243 135.50244393866856 L 180.03763440803243 260.42766563796994 C 180.03763440803243 262.92766563796994 177.53763440803243 265.42766563796994 175.03763440803243 265.42766563796994 L 175.03763440803243 265.42766563796994 C 174.7523527851811 265.42766563796994 174.46707116232977 262.92766563796994 174.46707116232977 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={61} />
                                              <path barheight="128.28955505835214" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="256.0550338427226" cy="137.13711057961783" d="M215.76105250252618 260.42766563796994L215.76105250252618 142.13811057961783C215.76105250252618 139.63811057961783 218.26105250252618 137.13811057961783 220.76105250252618 137.13811057961783L220.76105250252618 137.13811057961783C221.0463341253775 137.13811057961783 221.33161574822884 139.63811057961783 221.33161574822884 142.13811057961783L221.33161574822884 260.42766563796994C221.33161574822884 262.92766563796994 218.83161574822884 265.42766563796994 216.33161574822884 265.42766563796994L216.33161574822884 265.42766563796994C216.0463341253775 265.42766563796994 215.76105250252618 262.92766563796994 215.76105250252618 260.42766563796994C215.76105250252618 260.42766563796994 215.76105250252618 260.42766563796994 215.76105250252618 260.42766563796994 " fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath3709" index={0} j={5} pathfrom="M 215.76105250252618 265.42766563796994 L 215.76105250252618 265.42766563796994 L 221.33161574822884 265.42766563796994 L 221.33161574822884 265.42766563796994 L 221.33161574822884 265.42766563796994 L 221.33161574822884 265.42766563796994 L 221.33161574822884 265.42766563796994 L 215.76105250252618 265.42766563796994 Z" pathto="M 215.76105250252618 260.42766563796994 L 215.76105250252618 142.13811057961783 C 215.76105250252618 139.63811057961783 218.26105250252618 137.13811057961783 220.76105250252618 137.13811057961783 L 220.76105250252618 137.13811057961783 C 221.0463341253775 137.13811057961783 221.33161574822884 139.63811057961783 221.33161574822884 142.13811057961783 L 221.33161574822884 260.42766563796994 C 221.33161574822884 262.92766563796994 218.83161574822884 265.42766563796994 216.33161574822884 265.42766563796994 L 216.33161574822884 265.42766563796994 C 216.0463341253775 265.42766563796994 215.76105250252618 262.92766563796994 215.76105250252618 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={58} />
                                              <path barheight="139.34899945993422" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="297.349015182919" cy="126.07766617803574" d="M257.0550338427226 260.42766563796994L257.0550338427226 131.07866617803575C257.0550338427226 128.57866617803575 259.5550338427226 126.07866617803575 262.0550338427226 126.07866617803575L262.0550338427226 126.07866617803575C262.3403154655739 126.07866617803575 262.62559708842525 128.57866617803575 262.62559708842525 131.07866617803575L262.62559708842525 260.42766563796994C262.62559708842525 262.92766563796994 260.12559708842525 265.42766563796994 257.62559708842525 265.42766563796994L257.62559708842525 265.42766563796994C257.3403154655739 265.42766563796994 257.0550338427226 262.92766563796994 257.0550338427226 260.42766563796994C257.0550338427226 260.42766563796994 257.0550338427226 260.42766563796994 257.0550338427226 260.42766563796994 " fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath3711" index={0} j={6} pathfrom="M 257.0550338427226 265.42766563796994 L 257.0550338427226 265.42766563796994 L 262.62559708842525 265.42766563796994 L 262.62559708842525 265.42766563796994 L 262.62559708842525 265.42766563796994 L 262.62559708842525 265.42766563796994 L 262.62559708842525 265.42766563796994 L 257.0550338427226 265.42766563796994 Z" pathto="M 257.0550338427226 260.42766563796994 L 257.0550338427226 131.07866617803575 C 257.0550338427226 128.57866617803575 259.5550338427226 126.07866617803575 262.0550338427226 126.07866617803575 L 262.0550338427226 126.07866617803575 C 262.3403154655739 126.07866617803575 262.62559708842525 128.57866617803575 262.62559708842525 131.07866617803575 L 262.62559708842525 260.42766563796994 C 262.62559708842525 262.92766563796994 260.12559708842525 265.42766563796994 257.62559708842525 265.42766563796994 L 257.62559708842525 265.42766563796994 C 257.3403154655739 265.42766563796994 257.0550338427226 262.92766563796994 257.0550338427226 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={63} />
                                              <path barheight="132.71333281898498" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="338.6429965231154" cy="132.71333281898498" d="M298.349015182919 260.42766563796994L298.349015182919 137.71433281898499C298.349015182919 135.21433281898499 300.849015182919 132.71433281898499 303.349015182919 132.71433281898499L303.349015182919 132.71433281898499C303.6342968057703 132.71433281898499 303.91957842862166 135.21433281898499 303.91957842862166 137.71433281898499L303.91957842862166 260.42766563796994C303.91957842862166 262.92766563796994 301.41957842862166 265.42766563796994 298.91957842862166 265.42766563796994L298.91957842862166 265.42766563796994C298.6342968057703 265.42766563796994 298.349015182919 262.92766563796994 298.349015182919 260.42766563796994C298.349015182919 260.42766563796994 298.349015182919 260.42766563796994 298.349015182919 260.42766563796994 " fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath3713" index={0} j={7} pathfrom="M 298.349015182919 265.42766563796994 L 298.349015182919 265.42766563796994 L 303.91957842862166 265.42766563796994 L 303.91957842862166 265.42766563796994 L 303.91957842862166 265.42766563796994 L 303.91957842862166 265.42766563796994 L 303.91957842862166 265.42766563796994 L 298.349015182919 265.42766563796994 Z" pathto="M 298.349015182919 260.42766563796994 L 298.349015182919 137.71433281898499 C 298.349015182919 135.21433281898499 300.849015182919 132.71433281898499 303.349015182919 132.71433281898499 L 303.349015182919 132.71433281898499 C 303.6342968057703 132.71433281898499 303.91957842862166 135.21433281898499 303.91957842862166 137.71433281898499 L 303.91957842862166 260.42766563796994 C 303.91957842862166 262.92766563796994 301.41957842862166 265.42766563796994 298.91957842862166 265.42766563796994 L 298.91957842862166 265.42766563796994 C 298.6342968057703 265.42766563796994 298.349015182919 262.92766563796994 298.349015182919 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={60} />
                                              <path barheight="145.98466610088346" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="379.9369778633118" cy="119.4419995370865" d="M339.6429965231154 260.42766563796994L339.6429965231154 124.44299953708651C339.6429965231154 121.94299953708651 342.1429965231154 119.44299953708651 344.6429965231154 119.44299953708651L344.6429965231154 119.44299953708651C344.9282781459667 119.44299953708651 345.2135597688181 121.94299953708651 345.2135597688181 124.44299953708651L345.2135597688181 260.42766563796994C345.2135597688181 262.92766563796994 342.7135597688181 265.42766563796994 340.2135597688181 265.42766563796994L340.2135597688181 265.42766563796994C339.9282781459667 265.42766563796994 339.6429965231154 262.92766563796994 339.6429965231154 260.42766563796994C339.6429965231154 260.42766563796994 339.6429965231154 260.42766563796994 339.6429965231154 260.42766563796994 " fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath3715" index={0} j={8} pathfrom="M 339.6429965231154 265.42766563796994 L 339.6429965231154 265.42766563796994 L 345.2135597688181 265.42766563796994 L 345.2135597688181 265.42766563796994 L 345.2135597688181 265.42766563796994 L 345.2135597688181 265.42766563796994 L 345.2135597688181 265.42766563796994 L 339.6429965231154 265.42766563796994 Z" pathto="M 339.6429965231154 260.42766563796994 L 339.6429965231154 124.44299953708651 C 339.6429965231154 121.94299953708651 342.1429965231154 119.44299953708651 344.6429965231154 119.44299953708651 L 344.6429965231154 119.44299953708651 C 344.9282781459667 119.44299953708651 345.2135597688181 121.94299953708651 345.2135597688181 124.44299953708651 L 345.2135597688181 260.42766563796994 C 345.2135597688181 262.92766563796994 342.7135597688181 265.42766563796994 340.2135597688181 265.42766563796994 L 340.2135597688181 265.42766563796994 C 339.9282781459667 265.42766563796994 339.6429965231154 262.92766563796994 339.6429965231154 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={66} />
                                              <g className="apexcharts-bar-goals-markers" id="SvgjsG3697" style={{pointerEvents: 'none'}}>
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3698" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3700" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3702" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3704" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3706" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3708" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3710" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3712" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3714" />
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-realindex={1} id="SvgjsG3716" rel={2} seriesname="Revenue">
                                              <path barheight="168.10355490404763" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="57.15569038744326" cy="97.32311073392233" d="M16.861709047246862 260.42766563796994L16.861709047246862 102.32411073392234C16.861709047246862 99.82411073392234 19.361709047246862 97.32411073392234 21.861709047246862 97.32411073392234L21.861709047246862 97.32411073392234C22.146990670098198 97.32411073392234 22.432272292949534 99.82411073392234 22.432272292949534 102.32411073392234L22.432272292949534 260.42766563796994C22.432272292949534 262.92766563796994 19.932272292949534 265.42766563796994 17.432272292949534 265.42766563796994L17.432272292949534 265.42766563796994C17.146990670098198 265.42766563796994 16.861709047246862 262.92766563796994 16.861709047246862 260.42766563796994C16.861709047246862 260.42766563796994 16.861709047246862 260.42766563796994 16.861709047246862 260.42766563796994 " fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath3720" index={1} j={0} pathfrom="M 16.861709047246862 265.42766563796994 L 16.861709047246862 265.42766563796994 L 22.432272292949534 265.42766563796994 L 22.432272292949534 265.42766563796994 L 22.432272292949534 265.42766563796994 L 22.432272292949534 265.42766563796994 L 22.432272292949534 265.42766563796994 L 16.861709047246862 265.42766563796994 Z" pathto="M 16.861709047246862 260.42766563796994 L 16.861709047246862 102.32411073392234 C 16.861709047246862 99.82411073392234 19.361709047246862 97.32411073392234 21.861709047246862 97.32411073392234 L 21.861709047246862 97.32411073392234 C 22.146990670098198 97.32411073392234 22.432272292949534 99.82411073392234 22.432272292949534 102.32411073392234 L 22.432272292949534 260.42766563796994 C 22.432272292949534 262.92766563796994 19.932272292949534 265.42766563796994 17.432272292949534 265.42766563796994 L 17.432272292949534 265.42766563796994 C 17.146990670098198 265.42766563796994 16.861709047246862 262.92766563796994 16.861709047246862 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={76} />
                                              <path barheight="188.01055482689537" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="98.44967172763965" cy="77.41611081107459" d="M58.15569038744326 260.42766563796994L58.15569038744326 82.4171108110746C58.15569038744326 79.9171108110746 60.65569038744326 77.4171108110746 63.15569038744326 77.4171108110746L63.15569038744326 77.4171108110746C63.440972010294594 77.4171108110746 63.72625363314593 79.9171108110746 63.72625363314593 82.4171108110746L63.72625363314593 260.42766563796994C63.72625363314593 262.92766563796994 61.22625363314593 265.42766563796994 58.72625363314593 265.42766563796994L58.72625363314593 265.42766563796994C58.440972010294594 265.42766563796994 58.15569038744326 262.92766563796994 58.15569038744326 260.42766563796994C58.15569038744326 260.42766563796994 58.15569038744326 260.42766563796994 58.15569038744326 260.42766563796994 " fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath3722" index={1} j={1} pathfrom="M 58.15569038744326 265.42766563796994 L 58.15569038744326 265.42766563796994 L 63.72625363314593 265.42766563796994 L 63.72625363314593 265.42766563796994 L 63.72625363314593 265.42766563796994 L 63.72625363314593 265.42766563796994 L 63.72625363314593 265.42766563796994 L 58.15569038744326 265.42766563796994 Z" pathto="M 58.15569038744326 260.42766563796994 L 58.15569038744326 82.4171108110746 C 58.15569038744326 79.9171108110746 60.65569038744326 77.4171108110746 63.15569038744326 77.4171108110746 L 63.15569038744326 77.4171108110746 C 63.440972010294594 77.4171108110746 63.72625363314593 79.9171108110746 63.72625363314593 82.4171108110746 L 63.72625363314593 260.42766563796994 C 63.72625363314593 262.92766563796994 61.22625363314593 265.42766563796994 58.72625363314593 265.42766563796994 L 58.72625363314593 265.42766563796994 C 58.440972010294594 265.42766563796994 58.15569038744326 262.92766563796994 58.15569038744326 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={85} />
                                              <path barheight="223.40077691195805" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="139.74365306783602" cy="42.025888726011914" d="M99.44967172763965 260.42766563796994L99.44967172763965 47.02688872601192C99.44967172763965 44.52688872601192 101.94967172763965 42.02688872601192 104.44967172763965 42.02688872601192L104.44967172763965 42.02688872601192C104.734953350491 42.02688872601192 105.02023497334233 44.52688872601192 105.02023497334233 47.02688872601192L105.02023497334233 260.42766563796994C105.02023497334233 262.92766563796994 102.52023497334233 265.42766563796994 100.02023497334233 265.42766563796994L100.02023497334233 265.42766563796994C99.734953350491 265.42766563796994 99.44967172763965 262.92766563796994 99.44967172763965 260.42766563796994C99.44967172763965 260.42766563796994 99.44967172763965 260.42766563796994 99.44967172763965 260.42766563796994 " fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath3724" index={1} j={2} pathfrom="M 99.44967172763965 265.42766563796994 L 99.44967172763965 265.42766563796994 L 105.02023497334233 265.42766563796994 L 105.02023497334233 265.42766563796994 L 105.02023497334233 265.42766563796994 L 105.02023497334233 265.42766563796994 L 105.02023497334233 265.42766563796994 L 99.44967172763965 265.42766563796994 Z" pathto="M 99.44967172763965 260.42766563796994 L 99.44967172763965 47.02688872601191 C 99.44967172763965 44.52688872601191 101.94967172763965 42.02688872601191 104.44967172763965 42.02688872601191 L 104.44967172763965 42.02688872601191 C 104.734953350491 42.02688872601191 105.02023497334233 44.52688872601191 105.02023497334233 47.02688872601191 L 105.02023497334233 260.42766563796994 C 105.02023497334233 262.92766563796994 102.52023497334233 265.42766563796994 100.02023497334233 265.42766563796994 L 100.02023497334233 265.42766563796994 C 99.734953350491 265.42766563796994 99.44967172763965 262.92766563796994 99.44967172763965 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={101} />
                                              <path barheight="216.76511027100878" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="181.03763440803243" cy="48.66155536696118" d="M140.74365306783602 260.42766563796994L140.74365306783602 53.662555366961186C140.74365306783602 51.162555366961186 143.24365306783602 48.662555366961186 145.74365306783602 48.662555366961186L145.74365306783602 48.662555366961186C146.02893469068735 48.662555366961186 146.31421631353868 51.162555366961186 146.31421631353868 53.662555366961186L146.31421631353868 260.42766563796994C146.31421631353868 262.92766563796994 143.81421631353868 265.42766563796994 141.31421631353868 265.42766563796994L141.31421631353868 265.42766563796994C141.02893469068735 265.42766563796994 140.74365306783602 262.92766563796994 140.74365306783602 260.42766563796994C140.74365306783602 260.42766563796994 140.74365306783602 260.42766563796994 140.74365306783602 260.42766563796994 " fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath3726" index={1} j={3} pathfrom="M 140.74365306783602 265.42766563796994 L 140.74365306783602 265.42766563796994 L 146.31421631353868 265.42766563796994 L 146.31421631353868 265.42766563796994 L 146.31421631353868 265.42766563796994 L 146.31421631353868 265.42766563796994 L 146.31421631353868 265.42766563796994 L 140.74365306783602 265.42766563796994 Z" pathto="M 140.74365306783602 260.42766563796994 L 140.74365306783602 53.66255536696118 C 140.74365306783602 51.16255536696118 143.24365306783602 48.66255536696118 145.74365306783602 48.66255536696118 L 145.74365306783602 48.66255536696118 C 146.02893469068735 48.66255536696118 146.31421631353868 51.16255536696118 146.31421631353868 53.66255536696118 L 146.31421631353868 260.42766563796994 C 146.31421631353868 262.92766563796994 143.81421631353868 265.42766563796994 141.31421631353868 265.42766563796994 L 141.31421631353868 265.42766563796994 C 141.02893469068735 265.42766563796994 140.74365306783602 262.92766563796994 140.74365306783602 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={98} />
                                              <path barheight="192.43433258752822" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="222.33161574822884" cy="72.99233305044174" d="M182.03763440803243 260.42766563796994L182.03763440803243 77.99333305044175C182.03763440803243 75.49333305044175 184.53763440803243 72.99333305044175 187.03763440803243 72.99333305044175L187.03763440803243 72.99333305044175C187.32291603088376 72.99333305044175 187.6081976537351 75.49333305044175 187.6081976537351 77.99333305044175L187.6081976537351 260.42766563796994C187.6081976537351 262.92766563796994 185.1081976537351 265.42766563796994 182.6081976537351 265.42766563796994L182.6081976537351 265.42766563796994C182.32291603088376 265.42766563796994 182.03763440803243 262.92766563796994 182.03763440803243 260.42766563796994C182.03763440803243 260.42766563796994 182.03763440803243 260.42766563796994 182.03763440803243 260.42766563796994 " fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath3728" index={1} j={4} pathfrom="M 182.03763440803243 265.42766563796994 L 182.03763440803243 265.42766563796994 L 187.6081976537351 265.42766563796994 L 187.6081976537351 265.42766563796994 L 187.6081976537351 265.42766563796994 L 187.6081976537351 265.42766563796994 L 187.6081976537351 265.42766563796994 L 182.03763440803243 265.42766563796994 Z" pathto="M 182.03763440803243 260.42766563796994 L 182.03763440803243 77.99333305044175 C 182.03763440803243 75.49333305044175 184.53763440803243 72.99333305044175 187.03763440803243 72.99333305044175 L 187.03763440803243 72.99333305044175 C 187.32291603088376 72.99333305044175 187.6081976537351 75.49333305044175 187.6081976537351 77.99333305044175 L 187.6081976537351 260.42766563796994 C 187.6081976537351 262.92766563796994 185.1081976537351 265.42766563796994 182.6081976537351 265.42766563796994 L 182.6081976537351 265.42766563796994 C 182.32291603088376 265.42766563796994 182.03763440803243 262.92766563796994 182.03763440803243 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={87} />
                                              <path barheight="232.2483324332237" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="263.62559708842525" cy="33.17833320474625" d="M223.33161574822884 260.42766563796994L223.33161574822884 38.17933320474626C223.33161574822884 35.67933320474626 225.83161574822884 33.17933320474626 228.33161574822884 33.17933320474626L228.33161574822884 33.17933320474626C228.61689737108017 33.17933320474626 228.9021789939315 35.67933320474626 228.9021789939315 38.17933320474626L228.9021789939315 260.42766563796994C228.9021789939315 262.92766563796994 226.4021789939315 265.42766563796994 223.9021789939315 265.42766563796994L223.9021789939315 265.42766563796994C223.61689737108017 265.42766563796994 223.33161574822884 262.92766563796994 223.33161574822884 260.42766563796994C223.33161574822884 260.42766563796994 223.33161574822884 260.42766563796994 223.33161574822884 260.42766563796994 " fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath3730" index={1} j={5} pathfrom="M 223.33161574822884 265.42766563796994 L 223.33161574822884 265.42766563796994 L 228.9021789939315 265.42766563796994 L 228.9021789939315 265.42766563796994 L 228.9021789939315 265.42766563796994 L 228.9021789939315 265.42766563796994 L 228.9021789939315 265.42766563796994 L 223.33161574822884 265.42766563796994 Z" pathto="M 223.33161574822884 260.42766563796994 L 223.33161574822884 38.17933320474625 C 223.33161574822884 35.67933320474625 225.83161574822884 33.17933320474625 228.33161574822884 33.17933320474625 L 228.33161574822884 33.17933320474625 C 228.61689737108017 33.17933320474625 228.9021789939315 35.67933320474625 228.9021789939315 38.17933320474625 L 228.9021789939315 260.42766563796994 C 228.9021789939315 262.92766563796994 226.4021789939315 265.42766563796994 223.9021789939315 265.42766563796994 L 223.9021789939315 265.42766563796994 C 223.61689737108017 265.42766563796994 223.33161574822884 262.92766563796994 223.33161574822884 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={105} />
                                              <path barheight="201.28188810879388" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="304.91957842862166" cy="64.14477752917608" d="M264.62559708842525 260.42766563796994L264.62559708842525 69.14577752917609C264.62559708842525 66.64577752917609 267.12559708842525 64.14577752917609 269.62559708842525 64.14577752917609L269.62559708842525 64.14577752917609C269.9108787112766 64.14577752917609 270.1961603341279 66.64577752917609 270.1961603341279 69.14577752917609L270.1961603341279 260.42766563796994C270.1961603341279 262.92766563796994 267.6961603341279 265.42766563796994 265.1961603341279 265.42766563796994L265.1961603341279 265.42766563796994C264.9108787112766 265.42766563796994 264.62559708842525 262.92766563796994 264.62559708842525 260.42766563796994C264.62559708842525 260.42766563796994 264.62559708842525 260.42766563796994 264.62559708842525 260.42766563796994 " fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath3732" index={1} j={6} pathfrom="M 264.62559708842525 265.42766563796994 L 264.62559708842525 265.42766563796994 L 270.1961603341279 265.42766563796994 L 270.1961603341279 265.42766563796994 L 270.1961603341279 265.42766563796994 L 270.1961603341279 265.42766563796994 L 270.1961603341279 265.42766563796994 L 264.62559708842525 265.42766563796994 Z" pathto="M 264.62559708842525 260.42766563796994 L 264.62559708842525 69.14577752917609 C 264.62559708842525 66.64577752917609 267.12559708842525 64.14577752917609 269.62559708842525 64.14577752917609 L 269.62559708842525 64.14577752917609 C 269.9108787112766 64.14577752917609 270.1961603341279 66.64577752917609 270.1961603341279 69.14577752917609 L 270.1961603341279 260.42766563796994 C 270.1961603341279 262.92766563796994 267.6961603341279 265.42766563796994 265.1961603341279 265.42766563796994 L 265.1961603341279 265.42766563796994 C 264.9108787112766 265.42766563796994 264.62559708842525 262.92766563796994 264.62559708842525 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={91} />
                                              <path barheight="252.15533235607145" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="346.2135597688181" cy="13.271333281898507" d="M305.91957842862166 260.42766563796994L305.91957842862166 18.27233328189851C305.91957842862166 15.772333281898511 308.41957842862166 13.272333281898511 310.91957842862166 13.272333281898511L310.91957842862166 13.272333281898511C311.204860051473 13.272333281898511 311.4901416743243 15.772333281898511 311.4901416743243 18.27233328189851L311.4901416743243 260.42766563796994C311.4901416743243 262.92766563796994 308.9901416743243 265.42766563796994 306.4901416743243 265.42766563796994L306.4901416743243 265.42766563796994C306.204860051473 265.42766563796994 305.91957842862166 262.92766563796994 305.91957842862166 260.42766563796994C305.91957842862166 260.42766563796994 305.91957842862166 260.42766563796994 305.91957842862166 260.42766563796994 " fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath3734" index={1} j={7} pathfrom="M 305.91957842862166 265.42766563796994 L 305.91957842862166 265.42766563796994 L 311.4901416743243 265.42766563796994 L 311.4901416743243 265.42766563796994 L 311.4901416743243 265.42766563796994 L 311.4901416743243 265.42766563796994 L 311.4901416743243 265.42766563796994 L 305.91957842862166 265.42766563796994 Z" pathto="M 305.91957842862166 260.42766563796994 L 305.91957842862166 18.272333281898504 C 305.91957842862166 15.772333281898504 308.41957842862166 13.272333281898506 310.91957842862166 13.272333281898506 L 310.91957842862166 13.272333281898506 C 311.204860051473 13.272333281898506 311.4901416743243 15.772333281898504 311.4901416743243 18.272333281898504 L 311.4901416743243 260.42766563796994 C 311.4901416743243 262.92766563796994 308.9901416743243 265.42766563796994 306.4901416743243 265.42766563796994 L 306.4901416743243 265.42766563796994 C 306.204860051473 265.42766563796994 305.91957842862166 262.92766563796994 305.91957842862166 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={114} />
                                              <path barheight="207.91755474974312" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="387.5075411090145" cy="57.50911088822684" d="M347.2135597688181 260.42766563796994L347.2135597688181 62.51011088822685C347.2135597688181 60.01011088822685 349.7135597688181 57.51011088822685 352.2135597688181 57.51011088822685L352.2135597688181 57.51011088822685C352.49884139166943 57.51011088822685 352.78412301452073 60.01011088822685 352.78412301452073 62.51011088822685L352.78412301452073 260.42766563796994C352.78412301452073 262.92766563796994 350.28412301452073 265.42766563796994 347.78412301452073 265.42766563796994L347.78412301452073 265.42766563796994C347.49884139166943 265.42766563796994 347.2135597688181 262.92766563796994 347.2135597688181 260.42766563796994C347.2135597688181 260.42766563796994 347.2135597688181 260.42766563796994 347.2135597688181 260.42766563796994 " fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath3736" index={1} j={8} pathfrom="M 347.2135597688181 265.42766563796994 L 347.2135597688181 265.42766563796994 L 352.78412301452073 265.42766563796994 L 352.78412301452073 265.42766563796994 L 352.78412301452073 265.42766563796994 L 352.78412301452073 265.42766563796994 L 352.78412301452073 265.42766563796994 L 347.2135597688181 265.42766563796994 Z" pathto="M 347.2135597688181 260.42766563796994 L 347.2135597688181 62.51011088822684 C 347.2135597688181 60.01011088822684 349.7135597688181 57.51011088822684 352.2135597688181 57.51011088822684 L 352.2135597688181 57.51011088822684 C 352.49884139166943 57.51011088822684 352.78412301452073 60.01011088822684 352.78412301452073 62.51011088822684 L 352.78412301452073 260.42766563796994 C 352.78412301452073 262.92766563796994 350.28412301452073 265.42766563796994 347.78412301452073 265.42766563796994 L 347.78412301452073 265.42766563796994 C 347.49884139166943 265.42766563796994 347.2135597688181 262.92766563796994 347.2135597688181 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={94} />
                                              <g className="apexcharts-bar-goals-markers" id="SvgjsG3718" style={{pointerEvents: 'none'}}>
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3719" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3721" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3723" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3725" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3727" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3729" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3731" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3733" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3735" />
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-realindex={2} id="SvgjsG3737" rel={3} seriesname="FreexCashxFlow">
                                              <path barheight="77.41611081107457" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="64.72625363314593" cy="188.01055482689537" d="M24.432272292949534 260.42766563796994L24.432272292949534 193.01155482689538C24.432272292949534 190.51155482689538 26.932272292949534 188.01155482689538 29.432272292949534 188.01155482689538L29.432272292949534 188.01155482689538C29.71755391580087 188.01155482689538 30.002835538652207 190.51155482689538 30.002835538652207 193.01155482689538L30.002835538652207 260.42766563796994C30.002835538652207 262.92766563796994 27.502835538652207 265.42766563796994 25.002835538652207 265.42766563796994L25.002835538652207 265.42766563796994C24.71755391580087 265.42766563796994 24.432272292949534 262.92766563796994 24.432272292949534 260.42766563796994C24.432272292949534 260.42766563796994 24.432272292949534 260.42766563796994 24.432272292949534 260.42766563796994 " fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath3741" index={2} j={0} pathfrom="M 24.432272292949534 265.42766563796994 L 24.432272292949534 265.42766563796994 L 30.002835538652207 265.42766563796994 L 30.002835538652207 265.42766563796994 L 30.002835538652207 265.42766563796994 L 30.002835538652207 265.42766563796994 L 30.002835538652207 265.42766563796994 L 24.432272292949534 265.42766563796994 Z" pathto="M 24.432272292949534 260.42766563796994 L 24.432272292949534 193.01155482689538 C 24.432272292949534 190.51155482689538 26.932272292949534 188.01155482689538 29.432272292949534 188.01155482689538 L 29.432272292949534 188.01155482689538 C 29.71755391580087 188.01155482689538 30.002835538652207 190.51155482689538 30.002835538652207 193.01155482689538 L 30.002835538652207 260.42766563796994 C 30.002835538652207 262.92766563796994 27.502835538652207 265.42766563796994 25.002835538652207 265.42766563796994 L 25.002835538652207 265.42766563796994 C 24.71755391580087 265.42766563796994 24.432272292949534 262.92766563796994 24.432272292949534 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={35} />
                                              <path barheight="90.68744409297307" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="106.02023497334233" cy="174.7392215449969" d="M65.72625363314593 260.42766563796994L65.72625363314593 179.7402215449969C65.72625363314593 177.2402215449969 68.22625363314593 174.7402215449969 70.72625363314593 174.7402215449969L70.72625363314593 174.7402215449969C71.01153525599727 174.7402215449969 71.2968168788486 177.2402215449969 71.2968168788486 179.7402215449969L71.2968168788486 260.42766563796994C71.2968168788486 262.92766563796994 68.7968168788486 265.42766563796994 66.2968168788486 265.42766563796994L66.2968168788486 265.42766563796994C66.01153525599727 265.42766563796994 65.72625363314593 262.92766563796994 65.72625363314593 260.42766563796994C65.72625363314593 260.42766563796994 65.72625363314593 260.42766563796994 65.72625363314593 260.42766563796994 " fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath3743" index={2} j={1} pathfrom="M 65.72625363314593 265.42766563796994 L 65.72625363314593 265.42766563796994 L 71.2968168788486 265.42766563796994 L 71.2968168788486 265.42766563796994 L 71.2968168788486 265.42766563796994 L 71.2968168788486 265.42766563796994 L 71.2968168788486 265.42766563796994 L 65.72625363314593 265.42766563796994 Z" pathto="M 65.72625363314593 260.42766563796994 L 65.72625363314593 179.7402215449969 C 65.72625363314593 177.2402215449969 68.22625363314593 174.7402215449969 70.72625363314593 174.7402215449969 L 70.72625363314593 174.7402215449969 C 71.01153525599727 174.7402215449969 71.2968168788486 177.2402215449969 71.2968168788486 179.7402215449969 L 71.2968168788486 260.42766563796994 C 71.2968168788486 262.92766563796994 68.7968168788486 265.42766563796994 66.2968168788486 265.42766563796994 L 66.2968168788486 265.42766563796994 C 66.01153525599727 265.42766563796994 65.72625363314593 262.92766563796994 65.72625363314593 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={41} />
                                              <path barheight="79.62799969139098" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="147.3142163135387" cy="185.79866594657898" d="M107.02023497334233 260.42766563796994L107.02023497334233 190.79966594657898C107.02023497334233 188.29966594657898 109.52023497334233 185.79966594657898 112.02023497334233 185.79966594657898L112.02023497334233 185.79966594657898C112.30551659619366 185.79966594657898 112.590798219045 188.29966594657898 112.590798219045 190.79966594657898L112.590798219045 260.42766563796994C112.590798219045 262.92766563796994 110.090798219045 265.42766563796994 107.590798219045 265.42766563796994L107.590798219045 265.42766563796994C107.30551659619366 265.42766563796994 107.02023497334233 262.92766563796994 107.02023497334233 260.42766563796994C107.02023497334233 260.42766563796994 107.02023497334233 260.42766563796994 107.02023497334233 260.42766563796994 " fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath3745" index={2} j={2} pathfrom="M 107.02023497334233 265.42766563796994 L 107.02023497334233 265.42766563796994 L 112.590798219045 265.42766563796994 L 112.590798219045 265.42766563796994 L 112.590798219045 265.42766563796994 L 112.590798219045 265.42766563796994 L 112.590798219045 265.42766563796994 L 107.02023497334233 265.42766563796994 Z" pathto="M 107.02023497334233 260.42766563796994 L 107.02023497334233 190.79966594657898 C 107.02023497334233 188.29966594657898 109.52023497334233 185.79966594657898 112.02023497334233 185.79966594657898 L 112.02023497334233 185.79966594657898 C 112.30551659619366 185.79966594657898 112.590798219045 188.29966594657898 112.590798219045 190.79966594657898 L 112.590798219045 260.42766563796994 C 112.590798219045 262.92766563796994 110.090798219045 265.42766563796994 107.590798219045 265.42766563796994 L 107.590798219045 265.42766563796994 C 107.30551659619366 265.42766563796994 107.02023497334233 262.92766563796994 107.02023497334233 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={36} />
                                              <path barheight="57.50911088822682" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="188.60819765373512" cy="207.91755474974315" d="M148.3142163135387 260.42766563796994L148.3142163135387 212.91855474974315C148.3142163135387 210.41855474974315 150.8142163135387 207.91855474974315 153.3142163135387 207.91855474974315L153.3142163135387 207.91855474974315C153.59949793639004 207.91855474974315 153.88477955924137 210.41855474974315 153.88477955924137 212.91855474974315L153.88477955924137 260.42766563796994C153.88477955924137 262.92766563796994 151.38477955924137 265.42766563796994 148.88477955924137 265.42766563796994L148.88477955924137 265.42766563796994C148.59949793639004 265.42766563796994 148.3142163135387 262.92766563796994 148.3142163135387 260.42766563796994C148.3142163135387 260.42766563796994 148.3142163135387 260.42766563796994 148.3142163135387 260.42766563796994 " fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath3747" index={2} j={3} pathfrom="M 148.3142163135387 265.42766563796994 L 148.3142163135387 265.42766563796994 L 153.88477955924137 265.42766563796994 L 153.88477955924137 265.42766563796994 L 153.88477955924137 265.42766563796994 L 153.88477955924137 265.42766563796994 L 153.88477955924137 265.42766563796994 L 148.3142163135387 265.42766563796994 Z" pathto="M 148.3142163135387 260.42766563796994 L 148.3142163135387 212.91855474974315 C 148.3142163135387 210.41855474974315 150.8142163135387 207.91855474974315 153.3142163135387 207.91855474974315 L 153.3142163135387 207.91855474974315 C 153.59949793639004 207.91855474974315 153.88477955924137 210.41855474974315 153.88477955924137 212.91855474974315 L 153.88477955924137 260.42766563796994 C 153.88477955924137 262.92766563796994 151.38477955924137 265.42766563796994 148.88477955924137 265.42766563796994 L 148.88477955924137 265.42766563796994 C 148.59949793639004 265.42766563796994 148.3142163135387 262.92766563796994 148.3142163135387 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={26} />
                                              <path barheight="99.53499961423873" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="229.90217899393153" cy="165.89166602373123" d="M189.60819765373512 260.42766563796994L189.60819765373512 170.89266602373124C189.60819765373512 168.39266602373124 192.10819765373512 165.89266602373124 194.60819765373512 165.89266602373124L194.60819765373512 165.89266602373124C194.89347927658645 165.89266602373124 195.17876089943778 168.39266602373124 195.17876089943778 170.89266602373124L195.17876089943778 260.42766563796994C195.17876089943778 262.92766563796994 192.67876089943778 265.42766563796994 190.17876089943778 265.42766563796994L190.17876089943778 265.42766563796994C189.89347927658645 265.42766563796994 189.60819765373512 262.92766563796994 189.60819765373512 260.42766563796994C189.60819765373512 260.42766563796994 189.60819765373512 260.42766563796994 189.60819765373512 260.42766563796994 " fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath3749" index={2} j={4} pathfrom="M 189.60819765373512 265.42766563796994 L 189.60819765373512 265.42766563796994 L 195.17876089943778 265.42766563796994 L 195.17876089943778 265.42766563796994 L 195.17876089943778 265.42766563796994 L 195.17876089943778 265.42766563796994 L 195.17876089943778 265.42766563796994 L 189.60819765373512 265.42766563796994 Z" pathto="M 189.60819765373512 260.42766563796994 L 189.60819765373512 170.89266602373124 C 189.60819765373512 168.39266602373124 192.10819765373512 165.89266602373124 194.60819765373512 165.89266602373124 L 194.60819765373512 165.89266602373124 C 194.89347927658645 165.89266602373124 195.17876089943778 168.39266602373124 195.17876089943778 170.89266602373124 L 195.17876089943778 260.42766563796994 C 195.17876089943778 262.92766563796994 192.67876089943778 265.42766563796994 190.17876089943778 265.42766563796994 L 190.17876089943778 265.42766563796994 C 189.89347927658645 265.42766563796994 189.60819765373512 262.92766563796994 189.60819765373512 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={45} />
                                              <path barheight="106.17066625518798" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="271.1961603341279" cy="159.25599938278197" d="M230.90217899393153 260.42766563796994L230.90217899393153 164.25699938278197C230.90217899393153 161.75699938278197 233.40217899393153 159.25699938278197 235.90217899393153 159.25699938278197L235.90217899393153 159.25699938278197C236.18746061678286 159.25699938278197 236.4727422396342 161.75699938278197 236.4727422396342 164.25699938278197L236.4727422396342 260.42766563796994C236.4727422396342 262.92766563796994 233.9727422396342 265.42766563796994 231.4727422396342 265.42766563796994L231.4727422396342 265.42766563796994C231.18746061678286 265.42766563796994 230.90217899393153 262.92766563796994 230.90217899393153 260.42766563796994C230.90217899393153 260.42766563796994 230.90217899393153 260.42766563796994 230.90217899393153 260.42766563796994 " fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath3751" index={2} j={5} pathfrom="M 230.90217899393153 265.42766563796994 L 230.90217899393153 265.42766563796994 L 236.4727422396342 265.42766563796994 L 236.4727422396342 265.42766563796994 L 236.4727422396342 265.42766563796994 L 236.4727422396342 265.42766563796994 L 236.4727422396342 265.42766563796994 L 230.90217899393153 265.42766563796994 Z" pathto="M 230.90217899393153 260.42766563796994 L 230.90217899393153 164.25699938278197 C 230.90217899393153 161.75699938278197 233.40217899393153 159.25699938278197 235.90217899393153 159.25699938278197 L 235.90217899393153 159.25699938278197 C 236.18746061678286 159.25699938278197 236.4727422396342 161.75699938278197 236.4727422396342 164.25699938278197 L 236.4727422396342 260.42766563796994 C 236.4727422396342 262.92766563796994 233.9727422396342 265.42766563796994 231.4727422396342 265.42766563796994 L 231.4727422396342 265.42766563796994 C 231.18746061678286 265.42766563796994 230.90217899393153 262.92766563796994 230.90217899393153 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={48} />
                                              <path barheight="115.01822177645364" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="312.4901416743243" cy="150.40844386151633" d="M272.1961603341279 260.42766563796994L272.1961603341279 155.40944386151634C272.1961603341279 152.90944386151634 274.6961603341279 150.40944386151634 277.1961603341279 150.40944386151634L277.1961603341279 150.40944386151634C277.4814419569792 150.40944386151634 277.76672357983057 152.90944386151634 277.76672357983057 155.40944386151634L277.76672357983057 260.42766563796994C277.76672357983057 262.92766563796994 275.26672357983057 265.42766563796994 272.76672357983057 265.42766563796994L272.76672357983057 265.42766563796994C272.4814419569792 265.42766563796994 272.1961603341279 262.92766563796994 272.1961603341279 260.42766563796994C272.1961603341279 260.42766563796994 272.1961603341279 260.42766563796994 272.1961603341279 260.42766563796994 " fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath3753" index={2} j={6} pathfrom="M 272.1961603341279 265.42766563796994 L 272.1961603341279 265.42766563796994 L 277.76672357983057 265.42766563796994 L 277.76672357983057 265.42766563796994 L 277.76672357983057 265.42766563796994 L 277.76672357983057 265.42766563796994 L 277.76672357983057 265.42766563796994 L 272.1961603341279 265.42766563796994 Z" pathto="M 272.1961603341279 260.42766563796994 L 272.1961603341279 155.40944386151634 C 272.1961603341279 152.90944386151634 274.6961603341279 150.40944386151634 277.1961603341279 150.40944386151634 L 277.1961603341279 150.40944386151634 C 277.4814419569792 150.40944386151634 277.76672357983057 152.90944386151634 277.76672357983057 155.40944386151634 L 277.76672357983057 260.42766563796994 C 277.76672357983057 262.92766563796994 275.26672357983057 265.42766563796994 272.76672357983057 265.42766563796994 L 272.76672357983057 265.42766563796994 C 272.4814419569792 265.42766563796994 272.1961603341279 262.92766563796994 272.1961603341279 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={52} />
                                              <path barheight="117.23011065677007" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="353.78412301452073" cy="148.19655498119988" d="M313.4901416743243 260.42766563796994L313.4901416743243 153.1975549811999C313.4901416743243 150.6975549811999 315.9901416743243 148.1975549811999 318.4901416743243 148.1975549811999L318.4901416743243 148.1975549811999C318.7754232971756 148.1975549811999 319.060704920027 150.6975549811999 319.060704920027 153.1975549811999L319.060704920027 260.42766563796994C319.060704920027 262.92766563796994 316.560704920027 265.42766563796994 314.060704920027 265.42766563796994L314.060704920027 265.42766563796994C313.7754232971756 265.42766563796994 313.4901416743243 262.92766563796994 313.4901416743243 260.42766563796994C313.4901416743243 260.42766563796994 313.4901416743243 260.42766563796994 313.4901416743243 260.42766563796994 " fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath3755" index={2} j={7} pathfrom="M 313.4901416743243 265.42766563796994 L 313.4901416743243 265.42766563796994 L 319.060704920027 265.42766563796994 L 319.060704920027 265.42766563796994 L 319.060704920027 265.42766563796994 L 319.060704920027 265.42766563796994 L 319.060704920027 265.42766563796994 L 313.4901416743243 265.42766563796994 Z" pathto="M 313.4901416743243 260.42766563796994 L 313.4901416743243 153.1975549811999 C 313.4901416743243 150.6975549811999 315.9901416743243 148.1975549811999 318.4901416743243 148.1975549811999 L 318.4901416743243 148.1975549811999 C 318.7754232971756 148.1975549811999 319.060704920027 150.6975549811999 319.060704920027 153.1975549811999 L 319.060704920027 260.42766563796994 C 319.060704920027 262.92766563796994 316.560704920027 265.42766563796994 314.060704920027 265.42766563796994 L 314.060704920027 265.42766563796994 C 313.7754232971756 265.42766563796994 313.4901416743243 262.92766563796994 313.4901416743243 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={53} />
                                              <path barheight="90.68744409297307" barwidth="7.5705632457026715" className="apexcharts-bar-area" clipPath="url(#gridRectMaskznodqd82)" cx="395.07810435471714" cy="174.7392215449969" d="M354.78412301452073 260.42766563796994L354.78412301452073 179.7402215449969C354.78412301452073 177.2402215449969 357.28412301452073 174.7402215449969 359.78412301452073 174.7402215449969L359.78412301452073 174.7402215449969C360.06940463737203 174.7402215449969 360.3546862602234 177.2402215449969 360.3546862602234 179.7402215449969L360.3546862602234 260.42766563796994C360.3546862602234 262.92766563796994 357.8546862602234 265.42766563796994 355.3546862602234 265.42766563796994L355.3546862602234 265.42766563796994C355.06940463737203 265.42766563796994 354.78412301452073 262.92766563796994 354.78412301452073 260.42766563796994C354.78412301452073 260.42766563796994 354.78412301452073 260.42766563796994 354.78412301452073 260.42766563796994 " fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath3757" index={2} j={8} pathfrom="M 354.78412301452073 265.42766563796994 L 354.78412301452073 265.42766563796994 L 360.3546862602234 265.42766563796994 L 360.3546862602234 265.42766563796994 L 360.3546862602234 265.42766563796994 L 360.3546862602234 265.42766563796994 L 360.3546862602234 265.42766563796994 L 354.78412301452073 265.42766563796994 Z" pathto="M 354.78412301452073 260.42766563796994 L 354.78412301452073 179.7402215449969 C 354.78412301452073 177.2402215449969 357.28412301452073 174.7402215449969 359.78412301452073 174.7402215449969 L 359.78412301452073 174.7402215449969 C 360.06940463737203 174.7402215449969 360.3546862602234 177.2402215449969 360.3546862602234 179.7402215449969 L 360.3546862602234 260.42766563796994 C 360.3546862602234 262.92766563796994 357.8546862602234 265.42766563796994 355.3546862602234 265.42766563796994 L 355.3546862602234 265.42766563796994 C 355.06940463737203 265.42766563796994 354.78412301452073 262.92766563796994 354.78412301452073 260.42766563796994 Z " stroke="transparent" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={2} val={41} />
                                              <g className="apexcharts-bar-goals-markers" id="SvgjsG3739" style={{pointerEvents: 'none'}}>
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3740" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3742" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3744" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3746" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3748" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3750" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3752" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3754" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3756" />
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG3696" />
                                            <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG3717" />
                                            <g className="apexcharts-datalabels" data-realindex={2} id="SvgjsG3738" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine3789" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="371.6458320617676" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine3790" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="371.6458320617676" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG3791" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG3792" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG3793" />
                                          <g className="apexcharts-xaxis" id="SvgjsG3794" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG3795" transform="translate(0, -4)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3797" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="20.646990670098198" y="294.42666563796996">
                                                <tspan id="SvgjsTspan3798">Feb</tspan>
                                                <title>Feb</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3800" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="61.940972010294594" y="294.42666563796996">
                                                <tspan id="SvgjsTspan3801">Mar</tspan>
                                                <title>Mar</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3803" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="103.234953350491" y="294.42666563796996">
                                                <tspan id="SvgjsTspan3804">Apr</tspan>
                                                <title>Apr</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3806" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="144.52893469068738" y="294.42666563796996">
                                                <tspan id="SvgjsTspan3807">May</tspan>
                                                <title>May</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3809" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="185.8229160308838" y="294.42666563796996">
                                                <tspan id="SvgjsTspan3810">Jun</tspan>
                                                <title>Jun</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3812" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="227.1168973710802" y="294.42666563796996">
                                                <tspan id="SvgjsTspan3813">Jul</tspan>
                                                <title>Jul</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3815" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="268.4108787112766" y="294.42666563796996">
                                                <tspan id="SvgjsTspan3816">Aug</tspan>
                                                <title>Aug</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3818" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="309.704860051473" y="294.42666563796996">
                                                <tspan id="SvgjsTspan3819">Sep</tspan>
                                                <title>Sep</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3821" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="350.99884139166943" y="294.42666563796996">
                                                <tspan id="SvgjsTspan3822">Oct</tspan>
                                                <title>Oct</title>
                                              </text>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
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
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                      <div className="apexcharts-toolbar" style={{top: '0px', right: '3px'}}>
                                        <div className="apexcharts-menu-icon" title="Menu">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-menu">
                                          <div className="apexcharts-menu-item exportSVG" title="Download SVG">
                                            Download SVG
                                          </div>
                                          <div className="apexcharts-menu-item exportPNG" title="Download PNG">
                                            Download PNG
                                          </div>
                                          <div className="apexcharts-menu-item exportCSV" title="Download CSV">
                                            Download CSV
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c466 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c466 className="card">
                            <div _ngcontent-oko-c466 className="header">
                              <h2 _ngcontent-oko-c466>Bar Chart</h2>
                            </div>
                            <div _ngcontent-oko-c466 className="body">
                              <div _ngcontent-oko-c466 style={{textAlign: 'center'}}>
                                <apx-chart _ngcontent-oko-c466 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{minHeight: '365px'}}>
                                    <div className="apexcharts-canvas apexchartsw4ukrc8bl apexcharts-theme-light" id="apexchartsw4ukrc8bl" style={{width: '434px', height: '350px'}}>
                                      <svg className="apexcharts-svg" height={350} id="SvgjsSvg3843" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={434} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG3845" transform="translate(22, 65.57333436203004)">
                                          <defs id="SvgjsDefs3844">
                                            <linearGradient id="SvgjsLinearGradient3849" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop3850" offset={0} stopColor="rgba(216,227,240,0.4)" stopOpacity="0.4" />
                                              <stop id="SvgjsStop3851" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop3852" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                            <clipPath id="gridRectMaskw4ukrc8bl">
                                              <rect fill="#fff" height="258.42666563796996" id="SvgjsRect3854" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={406} x={-2} y={0} />
                                            </clipPath>
                                            <clipPath id="forecastMaskw4ukrc8bl" />
                                            <clipPath id="nonForecastMaskw4ukrc8bl" />
                                            <clipPath id="gridRectMarkerMaskw4ukrc8bl">
                                              <rect fill="#fff" height="262.42666563796996" id="SvgjsRect3855" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={406} x={-2} y={-2} />
                                            </clipPath>
                                            <linearGradient id="SvgjsLinearGradient3861" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3862" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3863" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3864" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3865" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3872" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3873" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3874" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3875" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3876" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3883" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3884" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3885" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3886" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3887" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3894" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3895" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3896" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3897" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3898" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3905" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3906" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3907" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3908" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3909" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3916" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3917" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3918" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3919" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3920" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3927" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3928" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3929" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3930" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3931" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3938" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3939" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3940" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3941" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3942" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3949" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3950" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3951" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3952" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3953" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3960" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3961" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3962" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3963" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3964" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3971" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3972" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3973" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3974" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3975" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3982" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3983" offset="0.5" stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3984" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3985" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3986" offset={1} stopColor="rgba(64,171,252,1)" stopOpacity={1} />
                                            </linearGradient>
                                          </defs>
                                          <rect className="apexcharts-xcrosshairs" fill="url(#SvgjsLinearGradient3849)" fillOpacity="0.9" filter="none" height="258.42666563796996" id="SvgjsRect3853" opacity={1} rx={0} ry={0} strokeDasharray={3} strokeWidth={0} width="23.45" x={0} y={0} y2="258.42666563796996" />
                                          <g className="apexcharts-grid" id="SvgjsG3992">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG3993">
                                              <line className="apexcharts-gridline" id="SvgjsLine4010" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={402} y1="64.60666640949249" y2="64.60666640949249" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4011" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={402} y1="129.21333281898498" y2="129.21333281898498" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4012" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={402} y1="193.81999922847746" y2="193.81999922847746" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG3994">
                                              <line className="apexcharts-gridline" id="SvgjsLine3996" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3997" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="33.5" x2="33.5" y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3998" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={67} x2={67} y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3999" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="100.5" x2="100.5" y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4000" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={134} x2={134} y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4001" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="167.5" x2="167.5" y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4002" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={201} x2={201} y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4003" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="234.5" x2="234.5" y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4004" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={268} x2={268} y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4005" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="301.5" x2="301.5" y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4006" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={335} x2={335} y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4007" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="368.5" x2="368.5" y1={0} y2="258.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4008" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={402} x2={402} y1={0} y2="258.42666563796996" />
                                            </g>
                                            <line id="SvgjsLine4015" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={402} y1="258.42666563796996" y2="258.42666563796996" />
                                            <line id="SvgjsLine4014" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="258.42666563796996" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG3995">
                                            <line className="apexcharts-gridline" id="SvgjsLine4009" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={402} y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine4013" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={402} y1="258.42666563796996" y2="258.42666563796996" />
                                          </g>
                                          <g className="apexcharts-bar-series apexcharts-plot-series" id="SvgjsG3856">
                                            <g className="apexcharts-series" data-realindex={0} id="SvgjsG3857" rel={1} seriesname="Inflation">
                                              <path barheight="49.5317775806109" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="38.525" cy="208.89488805735905" d="M5.025 258.42766563796994L5.025 208.89588805735906L28.475 208.89588805735906L28.475 258.42766563796994L5.024999999999999 258.42766563796994C5.024999999999999 258.42766563796994 5.024999999999999 258.42766563796994 5.024999999999999 258.42766563796994C5.024999999999999 258.42766563796994 5.024999999999999 258.42766563796994 5.024999999999999 258.42766563796994C5.024999999999999 258.42766563796994 5.025 258.42766563796994 5.025 258.42766563796994C5.025 258.42766563796994 5.025 258.42766563796994 5.025 258.42766563796994 " fill="url(#SvgjsLinearGradient3861)" fillOpacity={1} id="SvgjsPath3866" index={0} j={0} pathfrom="M 5.025 258.42766563796994 L 5.025 258.42766563796994 L 28.475 258.42766563796994 L 28.475 258.42766563796994 L 28.475 258.42766563796994 L 28.475 258.42766563796994 L 28.475 258.42766563796994 L 5.025 258.42766563796994 Z" pathto="M 5.025 258.42766563796994 L 5.025 208.89588805735906 L 28.475 208.89588805735906 L 28.475 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="2.3" />
                                              <path barheight="66.76022195647558" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="72.025" cy="191.6664436814944" d="M38.525 258.42766563796994L38.525 191.6674436814944L61.974999999999994 191.6674436814944L61.974999999999994 258.42766563796994L38.525 258.42766563796994C38.525 258.42766563796994 38.525 258.42766563796994 38.525 258.42766563796994C38.525 258.42766563796994 38.525 258.42766563796994 38.525 258.42766563796994C38.525 258.42766563796994 38.525 258.42766563796994 38.525 258.42766563796994C38.525 258.42766563796994 38.525 258.42766563796994 38.525 258.42766563796994 " fill="url(#SvgjsLinearGradient3872)" fillOpacity={1} id="SvgjsPath3877" index={0} j={1} pathfrom="M 38.525 258.42766563796994 L 38.525 258.42766563796994 L 61.974999999999994 258.42766563796994 L 61.974999999999994 258.42766563796994 L 61.974999999999994 258.42766563796994 L 61.974999999999994 258.42766563796994 L 61.974999999999994 258.42766563796994 L 38.525 258.42766563796994 Z" pathto="M 38.525 258.42766563796994 L 38.525 191.6674436814944 L 61.974999999999994 191.6674436814944 L 61.974999999999994 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="3.1" />
                                              <path barheight="86.14222187932332" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="105.525" cy="172.28444375864666" d="M72.025 258.42766563796994L72.025 172.28544375864666L95.47500000000001 172.28544375864666L95.47500000000001 258.42766563796994L72.025 258.42766563796994C72.025 258.42766563796994 72.025 258.42766563796994 72.025 258.42766563796994C72.025 258.42766563796994 72.025 258.42766563796994 72.025 258.42766563796994C72.025 258.42766563796994 72.025 258.42766563796994 72.025 258.42766563796994C72.025 258.42766563796994 72.025 258.42766563796994 72.025 258.42766563796994 " fill="url(#SvgjsLinearGradient3883)" fillOpacity={1} id="SvgjsPath3888" index={0} j={2} pathfrom="M 72.025 258.42766563796994 L 72.025 258.42766563796994 L 95.47500000000001 258.42766563796994 L 95.47500000000001 258.42766563796994 L 95.47500000000001 258.42766563796994 L 95.47500000000001 258.42766563796994 L 95.47500000000001 258.42766563796994 L 72.025 258.42766563796994 Z" pathto="M 72.025 258.42766563796994 L 72.025 172.28544375864666 L 95.47500000000001 172.28544375864666 L 95.47500000000001 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={4} />
                                              <path barheight="217.50911024529137" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="139.025" cy="40.917555392678594" d="M105.525 258.42766563796994L105.525 40.9185553926786L128.975 40.9185553926786L128.975 258.42766563796994L105.525 258.42766563796994C105.525 258.42766563796994 105.525 258.42766563796994 105.525 258.42766563796994C105.525 258.42766563796994 105.525 258.42766563796994 105.525 258.42766563796994C105.525 258.42766563796994 105.525 258.42766563796994 105.525 258.42766563796994C105.525 258.42766563796994 105.525 258.42766563796994 105.525 258.42766563796994 " fill="url(#SvgjsLinearGradient3894)" fillOpacity={1} id="SvgjsPath3899" index={0} j={3} pathfrom="M 105.525 258.42766563796994 L 105.525 258.42766563796994 L 128.975 258.42766563796994 L 128.975 258.42766563796994 L 128.975 258.42766563796994 L 128.975 258.42766563796994 L 128.975 258.42766563796994 L 105.525 258.42766563796994 Z" pathto="M 105.525 258.42766563796994 L 105.525 40.91855539267859 L 128.975 40.91855539267859 L 128.975 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="10.1" />
                                              <path barheight="86.14222187932332" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="172.525" cy="172.28444375864666" d="M139.025 258.42766563796994L139.025 172.28544375864666L162.475 172.28544375864666L162.475 258.42766563796994L139.025 258.42766563796994C139.025 258.42766563796994 139.025 258.42766563796994 139.025 258.42766563796994C139.025 258.42766563796994 139.025 258.42766563796994 139.025 258.42766563796994C139.025 258.42766563796994 139.025 258.42766563796994 139.025 258.42766563796994C139.025 258.42766563796994 139.025 258.42766563796994 139.025 258.42766563796994 " fill="url(#SvgjsLinearGradient3905)" fillOpacity={1} id="SvgjsPath3910" index={0} j={4} pathfrom="M 139.025 258.42766563796994 L 139.025 258.42766563796994 L 162.475 258.42766563796994 L 162.475 258.42766563796994 L 162.475 258.42766563796994 L 162.475 258.42766563796994 L 162.475 258.42766563796994 L 139.025 258.42766563796994 Z" pathto="M 139.025 258.42766563796994 L 139.025 172.28544375864666 L 162.475 172.28544375864666 L 162.475 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={4} />
                                              <path barheight="77.52799969139099" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="206.025" cy="180.89866594657897" d="M172.525 258.42766563796994L172.525 180.89966594657898L195.975 180.89966594657898L195.975 258.42766563796994L172.525 258.42766563796994C172.525 258.42766563796994 172.525 258.42766563796994 172.525 258.42766563796994C172.525 258.42766563796994 172.525 258.42766563796994 172.525 258.42766563796994C172.525 258.42766563796994 172.525 258.42766563796994 172.525 258.42766563796994C172.525 258.42766563796994 172.525 258.42766563796994 172.525 258.42766563796994 " fill="url(#SvgjsLinearGradient3916)" fillOpacity={1} id="SvgjsPath3921" index={0} j={5} pathfrom="M 172.525 258.42766563796994 L 172.525 258.42766563796994 L 195.975 258.42766563796994 L 195.975 258.42766563796994 L 195.975 258.42766563796994 L 195.975 258.42766563796994 L 195.975 258.42766563796994 L 172.525 258.42766563796994 Z" pathto="M 172.525 258.42766563796994 L 172.525 180.89966594657898 L 195.975 180.89966594657898 L 195.975 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="3.6" />
                                              <path barheight="68.91377750345866" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="239.525" cy="189.5128881345113" d="M206.025 258.42766563796994L206.025 189.5138881345113L229.475 189.5138881345113L229.475 258.42766563796994L206.025 258.42766563796994C206.025 258.42766563796994 206.025 258.42766563796994 206.025 258.42766563796994C206.025 258.42766563796994 206.025 258.42766563796994 206.025 258.42766563796994C206.025 258.42766563796994 206.025 258.42766563796994 206.025 258.42766563796994C206.025 258.42766563796994 206.025 258.42766563796994 206.025 258.42766563796994 " fill="url(#SvgjsLinearGradient3927)" fillOpacity={1} id="SvgjsPath3932" index={0} j={6} pathfrom="M 206.025 258.42766563796994 L 206.025 258.42766563796994 L 229.475 258.42766563796994 L 229.475 258.42766563796994 L 229.475 258.42766563796994 L 229.475 258.42766563796994 L 229.475 258.42766563796994 L 206.025 258.42766563796994 Z" pathto="M 206.025 258.42766563796994 L 206.025 189.5138881345113 L 229.475 189.5138881345113 L 229.475 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="3.2" />
                                              <path barheight="49.5317775806109" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="273.025" cy="208.89488805735905" d="M239.525 258.42766563796994L239.525 208.89588805735906L262.975 208.89588805735906L262.975 258.42766563796994L239.525 258.42766563796994C239.525 258.42766563796994 239.525 258.42766563796994 239.525 258.42766563796994C239.525 258.42766563796994 239.525 258.42766563796994 239.525 258.42766563796994C239.525 258.42766563796994 239.525 258.42766563796994 239.525 258.42766563796994C239.525 258.42766563796994 239.525 258.42766563796994 239.525 258.42766563796994 " fill="url(#SvgjsLinearGradient3938)" fillOpacity={1} id="SvgjsPath3943" index={0} j={7} pathfrom="M 239.525 258.42766563796994 L 239.525 258.42766563796994 L 262.975 258.42766563796994 L 262.975 258.42766563796994 L 262.975 258.42766563796994 L 262.975 258.42766563796994 L 262.975 258.42766563796994 L 239.525 258.42766563796994 Z" pathto="M 239.525 258.42766563796994 L 239.525 208.89588805735906 L 262.975 208.89588805735906 L 262.975 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="2.3" />
                                              <path barheight="30.14977765776316" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="306.525" cy="228.2768879802068" d="M273.025 258.42766563796994L273.025 228.2778879802068L296.47499999999997 228.2778879802068L296.47499999999997 258.42766563796994L273.025 258.42766563796994C273.025 258.42766563796994 273.025 258.42766563796994 273.025 258.42766563796994C273.025 258.42766563796994 273.025 258.42766563796994 273.025 258.42766563796994C273.025 258.42766563796994 273.025 258.42766563796994 273.025 258.42766563796994C273.025 258.42766563796994 273.025 258.42766563796994 273.025 258.42766563796994 " fill="url(#SvgjsLinearGradient3949)" fillOpacity={1} id="SvgjsPath3954" index={0} j={8} pathfrom="M 273.025 258.42766563796994 L 273.025 258.42766563796994 L 296.47499999999997 258.42766563796994 L 296.47499999999997 258.42766563796994 L 296.47499999999997 258.42766563796994 L 296.47499999999997 258.42766563796994 L 296.47499999999997 258.42766563796994 L 273.025 258.42766563796994 Z" pathto="M 273.025 258.42766563796994 L 273.025 228.2778879802068 L 296.47499999999997 228.2778879802068 L 296.47499999999997 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="1.4" />
                                              <path barheight="17.228444375864665" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="340.025" cy="241.1982212621053" d="M306.525 258.42766563796994L306.525 241.1992212621053L329.97499999999997 241.1992212621053L329.97499999999997 258.42766563796994L306.525 258.42766563796994C306.525 258.42766563796994 306.525 258.42766563796994 306.525 258.42766563796994C306.525 258.42766563796994 306.525 258.42766563796994 306.525 258.42766563796994C306.525 258.42766563796994 306.525 258.42766563796994 306.525 258.42766563796994C306.525 258.42766563796994 306.525 258.42766563796994 306.525 258.42766563796994 " fill="url(#SvgjsLinearGradient3960)" fillOpacity={1} id="SvgjsPath3965" index={0} j={9} pathfrom="M 306.525 258.42766563796994 L 306.525 258.42766563796994 L 329.97499999999997 258.42766563796994 L 329.97499999999997 258.42766563796994 L 329.97499999999997 258.42766563796994 L 329.97499999999997 258.42766563796994 L 329.97499999999997 258.42766563796994 L 306.525 258.42766563796994 Z" pathto="M 306.525 258.42766563796994 L 306.525 241.1992212621053 L 329.97499999999997 241.1992212621053 L 329.97499999999997 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="0.8" />
                                              <path barheight="10.767777734915414" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="373.525" cy="247.65888790305453" d="M340.025 258.42766563796994L340.025 247.65988790305454L363.47499999999997 247.65988790305454L363.47499999999997 258.42766563796994L340.025 258.42766563796994C340.025 258.42766563796994 340.025 258.42766563796994 340.025 258.42766563796994C340.025 258.42766563796994 340.025 258.42766563796994 340.025 258.42766563796994C340.025 258.42766563796994 340.025 258.42766563796994 340.025 258.42766563796994C340.025 258.42766563796994 340.025 258.42766563796994 340.025 258.42766563796994 " fill="url(#SvgjsLinearGradient3971)" fillOpacity={1} id="SvgjsPath3976" index={0} j={10} pathfrom="M 340.025 258.42766563796994 L 340.025 258.42766563796994 L 363.47499999999997 258.42766563796994 L 363.47499999999997 258.42766563796994 L 363.47499999999997 258.42766563796994 L 363.47499999999997 258.42766563796994 L 363.47499999999997 258.42766563796994 L 340.025 258.42766563796994 Z" pathto="M 340.025 258.42766563796994 L 340.025 247.65988790305454 L 363.47499999999997 247.65988790305454 L 363.47499999999997 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="0.5" />
                                              <path barheight="4.307111093966166" barwidth="23.45" className="apexcharts-bar-area" clipPath="url(#gridRectMaskw4ukrc8bl)" cx="407.025" cy="254.1195545440038" d="M373.525 258.42766563796994L373.525 254.1205545440038L396.97499999999997 254.1205545440038L396.97499999999997 258.42766563796994L373.525 258.42766563796994C373.525 258.42766563796994 373.525 258.42766563796994 373.525 258.42766563796994C373.525 258.42766563796994 373.525 258.42766563796994 373.525 258.42766563796994C373.525 258.42766563796994 373.525 258.42766563796994 373.525 258.42766563796994C373.525 258.42766563796994 373.525 258.42766563796994 373.525 258.42766563796994 " fill="url(#SvgjsLinearGradient3982)" fillOpacity={1} id="SvgjsPath3987" index={0} j={11} pathfrom="M 373.525 258.42766563796994 L 373.525 258.42766563796994 L 396.97499999999997 258.42766563796994 L 396.97499999999997 258.42766563796994 L 396.97499999999997 258.42766563796994 L 396.97499999999997 258.42766563796994 L 396.97499999999997 258.42766563796994 L 373.525 258.42766563796994 Z" pathto="M 373.525 258.42766563796994 L 373.525 254.1205545440038 L 396.97499999999997 254.1205545440038 L 396.97499999999997 258.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="0.2" />
                                              <g className="apexcharts-bar-goals-markers" id="SvgjsG3859" style={{pointerEvents: 'none'}}>
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3860" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3871" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3882" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3893" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3904" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3915" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3926" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3937" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3948" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3959" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3970" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG3981" />
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG3858">
                                              <g className="apexcharts-data-labels" id="SvgjsG3868" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="16.75" cy="202.22822202647527" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3870" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="16.75" y="202.22822202647527">
                                                  2.3%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3879" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="50.25000000000001" cy="184.9997776506106" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3881" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="50.25000000000001" y="184.9997776506106">
                                                  3.1%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3890" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="83.75" cy="165.61777772776287" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3892" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="83.75" y="165.61777772776287">
                                                  4%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3901" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="117.25" cy="34.250889361794805" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3903" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="117.25" y="34.250889361794805">
                                                  10.1%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3912" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="150.75" cy="165.61777772776287" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3914" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="150.75" y="165.61777772776287">
                                                  4%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3923" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="184.25" cy="174.23199991569518" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3925" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="184.25" y="174.23199991569518">
                                                  3.6%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3934" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="217.75" cy="182.8462221036275" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3936" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="217.75" y="182.8462221036275">
                                                  3.2%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3945" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="251.24999999999997" cy="202.22822202647527" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3947" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="251.24999999999997" y="202.22822202647527">
                                                  2.3%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3956" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="284.75" cy="221.610221949323" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3958" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="284.75" y="221.610221949323">
                                                  1.4%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3967" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="318.25" cy="234.53155523122152" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3969" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="318.25" y="234.53155523122152">
                                                  0.8%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3978" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="351.75" cy="240.99222187217072" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3980" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="351.75" y="240.99222187217072">
                                                  0.5%
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG3989" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="385.25" cy="247.45288851312" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText3991" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="385.25" y="247.45288851312">
                                                  0.2%
                                                </text>
                                              </g>
                                            </g>
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine4016" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={402} y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine4017" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={402} y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG4018" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG4019" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG4020" />
                                          <g className="apexcharts-xaxis" id="SvgjsG4021" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG4022" transform="translate(0, -22)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4024" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="16.75" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4025">Jan</tspan>
                                                <title>Jan</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4027" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="50.25" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4028">Feb</tspan>
                                                <title>Feb</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4030" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="83.75" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4031">Mar</tspan>
                                                <title>Mar</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4033" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="117.25" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4034">Apr</tspan>
                                                <title>Apr</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4036" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="150.75" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4037">May</tspan>
                                                <title>May</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4039" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="184.25" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4040">Jun</tspan>
                                                <title>Jun</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4042" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="217.75" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4043">Jul</tspan>
                                                <title>Jul</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4045" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="251.25" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4046">Aug</tspan>
                                                <title>Aug</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4048" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="284.75" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4049">Sep</tspan>
                                                <title>Sep</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4051" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="318.25" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4052">Oct</tspan>
                                                <title>Oct</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4054" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="351.75" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4055">Nov</tspan>
                                                <title>Nov</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4057" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="385.25" y="-25.57333436203003">
                                                <tspan id="SvgjsTspan4058">Dec</tspan>
                                                <title>Dec</title>
                                              </text>
                                            </g>
                                          </g>
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG3846" />
                                        <g className="apexcharts-yaxis" id="SvgjsG4059" rel={0} transform="translate(-8, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG4060" />
                                        </g>
                                        <text className="apexcharts-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="14px" fontWeight={900} id="SvgjsText3847" style={{fontFamily: 'Helvetica, Arial, sans-serif', opacity: 1}} textAnchor="middle" x={217} y="336.5">
                                          Monthly Inflation in Argentina, 2002
                                        </text>
                                      </svg>
                                      <div className="apexcharts-legend" style={{maxHeight: '175px'}} />
                                      <div className="apexcharts-tooltip apexcharts-theme-light">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
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
                                      </div>
                                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-top apexcharts-theme-light">
                                        <div className="apexcharts-xaxistooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                      <div className="apexcharts-toolbar" style={{top: '0px', right: '3px'}}>
                                        <div className="apexcharts-menu-icon" title="Menu">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-menu">
                                          <div className="apexcharts-menu-item exportSVG" title="Download SVG">
                                            Download SVG
                                          </div>
                                          <div className="apexcharts-menu-item exportPNG" title="Download PNG">
                                            Download PNG
                                          </div>
                                          <div className="apexcharts-menu-item exportCSV" title="Download CSV">
                                            Download CSV
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c466 className="row clearfix">
                        <div _ngcontent-oko-c466 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c466 className="card">
                            <div _ngcontent-oko-c466 className="header">
                              <h2 _ngcontent-oko-c466>Line Chart</h2>
                            </div>
                            <div _ngcontent-oko-c466 className="body">
                              <div _ngcontent-oko-c466 style={{textAlign: 'center'}}>
                                <apx-chart _ngcontent-oko-c466 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{minHeight: '365px'}}>
                                    <div className="apexcharts-canvas apexchartsnapbl5fi apexcharts-theme-light" id="apexchartsnapbl5fi" style={{width: '434px', height: '350px'}}>
                                      <svg className="apexcharts-svg apexcharts-zoomable" height={350} id="SvgjsSvg4061" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={434} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <foreignObject height={350} width={434} x={0} y={0}>
                                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" style={{inset: 'auto 0px 1px', position: 'absolute', maxHeight: '175px'}} xmlns="http://www.w3.org/1999/xhtml">
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="Highx-x2013" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{background: 'rgb(0,143,251) !important', color: 'rgb(0, 143, 251)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="High%20-%202013" i={0} rel={1} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                High - 2013
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="Lowx-x2013" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{background: 'rgb(0,227,150) !important', color: 'rgb(0, 227, 150)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Low%20-%202013" i={1} rel={2} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                Low - 2013
                                              </span>
                                            </div>
                                          </div>
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                      .apexcharts-legend {\n                                        display: flex;\n                                        overflow: auto;\n                                        padding: 0 10px;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom,\n                                      .apexcharts-legend.apx-legend-position-top {\n                                        flex-wrap: wrap;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        flex-direction: column;\n                                        bottom: 0;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        justify-content: flex-start;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                        justify-content: center;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                        justify-content: flex-end;\n                                      }\n                                      .apexcharts-legend-series {\n                                        cursor: pointer;\n                                        line-height: normal;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apx-legend-position-top\n                                        .apexcharts-legend-series {\n                                        display: flex;\n                                        align-items: center;\n                                      }\n                                      .apexcharts-legend-text {\n                                        position: relative;\n                                        font-size: 14px;\n                                      }\n                                      .apexcharts-legend-text *,\n                                      .apexcharts-legend-marker * {\n                                        pointer-events: none;\n                                      }\n                                      .apexcharts-legend-marker {\n                                        position: relative;\n                                        display: inline-block;\n                                        cursor: pointer;\n                                        margin-right: 3px;\n                                        border-style: solid;\n                                      }\n\n                                      .apexcharts-legend.apexcharts-align-right\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apexcharts-align-left\n                                        .apexcharts-legend-series {\n                                        display: inline-block;\n                                      }\n                                      .apexcharts-legend-series.apexcharts-no-click {\n                                        cursor: auto;\n                                      }\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-zero-series,\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-null-series {\n                                        display: none !important;\n                                      }\n                                      .apexcharts-inactive-legend {\n                                        opacity: 0.45;\n                                      }\n                                    " }} />
                                        </foreignObject>
                                        <text className="apexcharts-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="14px" fontWeight={900} id="SvgjsText4065" style={{fontFamily: 'Helvetica, Arial, sans-serif', opacity: 1}} textAnchor="start" x={10} y="16.5">
                                          Average High &amp; Low Temperature
                                        </text>
                                        <rect fill="#fefefe" height={0} id="SvgjsRect4069" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        <g className="apexcharts-annotations" id="SvgjsG4064" />
                                        <g className="apexcharts-yaxis" id="SvgjsG4157" rel={0} transform="translate(9.239583969116211, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG4158">
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4160" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="56.5">
                                              <tspan id="SvgjsTspan4161">42</tspan>
                                              <title>42</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4163" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="100.27066625518799">
                                              <tspan id="SvgjsTspan4164">35</tspan>
                                              <title>35</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4166" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="144.04133251037598">
                                              <tspan id="SvgjsTspan4167">28</tspan>
                                              <title>28</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4169" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="187.81199876556397">
                                              <tspan id="SvgjsTspan4170">21</tspan>
                                              <title>21</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4172" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="231.58266502075196">
                                              <tspan id="SvgjsTspan4173">14</tspan>
                                              <title>14</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4175" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="275.3533312759399">
                                              <tspan id="SvgjsTspan4176">7</tspan>
                                              <title>7</title>
                                            </text>
                                          </g>
                                        </g>
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG4063" transform="translate(39.23958396911621, 55)">
                                          <defs id="SvgjsDefs4062">
                                            <clipPath id="gridRectMasknapbl5fi">
                                              <rect fill="#fff" height="223.85333127593992" id="SvgjsRect4071" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="393.7604160308838" x="-4.5" y="-2.5" />
                                            </clipPath>
                                            <clipPath id="forecastMasknapbl5fi" />
                                            <clipPath id="nonForecastMasknapbl5fi" />
                                            <clipPath id="gridRectMarkerMasknapbl5fi">
                                              <rect fill="#fff" height="222.85333127593992" id="SvgjsRect4072" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="388.7604160308838" x={-2} y={-2} />
                                            </clipPath>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter4078" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity={1} id="SvgjsFeFlood4079" in="SourceGraphic" result="SvgjsFeFlood4079Out" />
                                              <feComposite id="SvgjsFeComposite4080" in="SvgjsFeFlood4079Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite4080Out" />
                                              <feOffset dx={7} dy={18} id="SvgjsFeOffset4081" in="SvgjsFeComposite4080Out" result="SvgjsFeOffset4081Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur4082" in="SvgjsFeOffset4081Out" result="SvgjsFeGaussianBlur4082Out" stdDeviation={10 } />
                                              <feMerge id="SvgjsFeMerge4083" in="SourceGraphic" result="SvgjsFeMerge4083Out">
                                                <feMergeNode id="SvgjsFeMergeNode4084" in="SvgjsFeGaussianBlur4082Out" />
                                                <feMergeNode id="SvgjsFeMergeNode4085" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend4086" in="SourceGraphic" in2="SvgjsFeMerge4083Out" mode="normal" result="SvgjsFeBlend4086Out" />
                                            </filter>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter4091" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity={1} id="SvgjsFeFlood4092" in="SourceGraphic" result="SvgjsFeFlood4092Out" />
                                              <feComposite id="SvgjsFeComposite4093" in="SvgjsFeFlood4092Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite4093Out" />
                                              <feOffset dx={7} dy={18} id="SvgjsFeOffset4094" in="SvgjsFeComposite4093Out" result="SvgjsFeOffset4094Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur4095" in="SvgjsFeOffset4094Out" result="SvgjsFeGaussianBlur4095Out" stdDeviation={10 } />
                                              <feMerge id="SvgjsFeMerge4096" in="SourceGraphic" result="SvgjsFeMerge4096Out">
                                                <feMergeNode id="SvgjsFeMergeNode4097" in="SvgjsFeGaussianBlur4095Out" />
                                                <feMergeNode id="SvgjsFeMergeNode4098" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend4099" in="SourceGraphic" in2="SvgjsFeMerge4096Out" mode="normal" result="SvgjsFeBlend4099Out" />
                                            </filter>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="218.85333127593992" id="SvgjsLine4070" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="218.85333127593992" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4105" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="219.85333127593992" y2="225.85333127593992" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4107" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="64.1267360051473" x2="64.1267360051473" y1="219.85333127593992" y2="225.85333127593992" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4109" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="128.2534720102946" x2="128.2534720102946" y1="219.85333127593992" y2="225.85333127593992" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4111" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="192.3802080154419" x2="192.3802080154419" y1="219.85333127593992" y2="225.85333127593992" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4113" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="256.5069440205892" x2="256.5069440205892" y1="219.85333127593992" y2="225.85333127593992" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4115" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="320.63368002573645" x2="320.63368002573645" y1="219.85333127593992" y2="225.85333127593992" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4117" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="384.76041603088373" x2="384.76041603088373" y1="219.85333127593992" y2="225.85333127593992" />
                                          <g className="apexcharts-grid" id="SvgjsG4100">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG4101">
                                              <line className="apexcharts-gridline" id="SvgjsLine4119" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="43.77066625518798" y2="43.77066625518798" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4120" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="87.54133251037597" y2="87.54133251037597" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4121" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="131.31199876556394" y2="131.31199876556394" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4122" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="175.08266502075193" y2="175.08266502075193" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG4102">
                                              <line className="apexcharts-gridline" id="SvgjsLine4104" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="218.85333127593992" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4106" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="64.1267360051473" x2="64.1267360051473" y1={0} y2="218.85333127593992" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4108" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="128.2534720102946" x2="128.2534720102946" y1={0} y2="218.85333127593992" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4110" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="192.3802080154419" x2="192.3802080154419" y1={0} y2="218.85333127593992" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4112" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="256.5069440205892" x2="256.5069440205892" y1={0} y2="218.85333127593992" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4114" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="320.63368002573645" x2="320.63368002573645" y1={0} y2="218.85333127593992" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4116" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="384.76041603088373" x2="384.76041603088373" y1={0} y2="218.85333127593992" />
                                            </g>
                                            <line id="SvgjsLine4125" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="218.85333127593992" y2="218.85333127593992" />
                                            <line id="SvgjsLine4124" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="218.85333127593992" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG4103">
                                            <line className="apexcharts-gridline" id="SvgjsLine4118" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine4123" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="218.85333127593992" y2="218.85333127593992" />
                                            <line id="SvgjsLine4156" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="384.7604160308838" y1="219.85333127593992" y2="219.85333127593992" />
                                          </g>
                                          <g className="apexcharts-line-series apexcharts-plot-series" id="SvgjsG4073">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG4074" rel={1} seriesname="Highx-x2013">
                                              <path className="apexcharts-line" clipPath="url(#gridRectMasknapbl5fi)" d="M0 87.54133251037595L64.12673600514731 81.28838018820622L128.25347201029462 56.27657089952737L192.3802080154419 37.51771393301826L256.50694402058923 62.529523221697104L320.6336800257365 62.529523221697104L384.7604160308838 56.27657089952737C384.7604160308838 56.27657089952737 384.7604160308838 56.27657089952737 384.7604160308838 56.27657089952737 " fill="none" fillOpacity={1} fillRule="evenodd" filter="url(#SvgjsFilter4078)" id="SvgjsPath4077" index={0} pathfrom="M -1 262.6239975311279 L -1 262.6239975311279 L 64.12673600514731 262.6239975311279 L 128.25347201029462 262.6239975311279 L 192.3802080154419 262.6239975311279 L 256.50694402058923 262.6239975311279 L 320.6336800257365 262.6239975311279 L 384.7604160308838 262.6239975311279" pathto="M 0 87.54133251037595 L 64.12673600514731 81.28838018820622 L 128.25347201029462 56.27657089952737 L 192.3802080154419 37.51771393301826 L 256.50694402058923 62.529523221697104 L 320.6336800257365 62.529523221697104 L 384.7604160308838 56.27657089952737" stroke="rgba(0,143,251,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG4075">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker wf2r9ng4d no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle4177" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={1} id="SvgjsG4087" rel={2} seriesname="Lowx-x2013">
                                              <path className="apexcharts-line" clipPath="url(#gridRectMasknapbl5fi)" d="M0 187.58856966509134L64.12673600514731 193.84152198726105L128.25347201029462 175.0826650207519L192.3802080154419 150.07085573207308L256.50694402058923 156.32380805424276L320.6336800257365 181.33561734292164L384.7604160308838 181.33561734292164C384.7604160308838 181.33561734292164 384.7604160308838 181.33561734292164 384.7604160308838 181.33561734292164 " fill="none" fillOpacity={1} fillRule="evenodd" filter="url(#SvgjsFilter4091)" id="SvgjsPath4090" index={1} pathfrom="M -1 262.6239975311279 L -1 262.6239975311279 L 64.12673600514731 262.6239975311279 L 128.25347201029462 262.6239975311279 L 192.3802080154419 262.6239975311279 L 256.50694402058923 262.6239975311279 L 320.6336800257365 262.6239975311279 L 384.7604160308838 262.6239975311279" pathto="M 0 187.58856966509134 L 64.12673600514731 193.84152198726105 L 128.25347201029462 175.0826650207519 L 192.3802080154419 150.07085573207308 L 256.50694402058923 156.32380805424276 L 320.6336800257365 181.33561734292164 L 384.7604160308838 181.33561734292164" stroke="rgba(0,227,150,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={1} id="SvgjsG4088">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker wnn19qnng no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#00e396" fillOpacity={1} id="SvgjsCircle4178" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG4076" />
                                            <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG4089" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine4126" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="384.7604160308838" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine4127" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="384.7604160308838" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG4128" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG4129" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG4130" />
                                          <g className="apexcharts-xaxis" id="SvgjsG4131" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG4132" transform="translate(0, -4)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4134" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x={0} y="247.85333127593992">
                                                <tspan id="SvgjsTspan4135">Jan</tspan>
                                                <title>Jan</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4137" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="64.12673600514731" y="247.85333127593992">
                                                <tspan id="SvgjsTspan4138">Feb</tspan>
                                                <title>Feb</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4140" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="128.2534720102946" y="247.85333127593992">
                                                <tspan id="SvgjsTspan4141">Mar</tspan>
                                                <title>Mar</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4143" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="192.38020801544187" y="247.85333127593992">
                                                <tspan id="SvgjsTspan4144">Apr</tspan>
                                                <title>Apr</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4146" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="256.5069440205891" y="247.85333127593992">
                                                <tspan id="SvgjsTspan4147">May</tspan>
                                                <title>May</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4149" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="320.6336800257364" y="247.85333127593992">
                                                <tspan id="SvgjsTspan4150">Jun</tspan>
                                                <title>Jun</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4152" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="384.7604160308837" y="247.85333127593992">
                                                <tspan id="SvgjsTspan4153">Jul</tspan>
                                                <title>Jul</title>
                                              </text>
                                            </g>
                                            <g className="apexcharts-xaxis-title" id="SvgjsG4154">
                                              <text className="apexcharts-text apexcharts-xaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={900} id="SvgjsText4155" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="192.3802080154419" y="271.6666660308838">
                                                Month
                                              </text>
                                            </g>
                                          </g>
                                          <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect4179" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                          <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect4180" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        </g>
                                      </svg>
                                      <div className="apexcharts-tooltip apexcharts-theme-light">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
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
                                      </div>
                                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                        <div className="apexcharts-xaxistooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c466 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c466 className="card">
                            <div _ngcontent-oko-c466 className="header">
                              <h2 _ngcontent-oko-c466>Line Chart</h2>
                            </div>
                            <div _ngcontent-oko-c466 className="body">
                              <div _ngcontent-oko-c466 style={{textAlign: 'center'}}>
                                <apx-chart _ngcontent-oko-c466 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{minHeight: '365px'}}>
                                    <div className="apexcharts-canvas apexchartsse221u5df apexcharts-theme-light" id="apexchartsse221u5df" style={{width: '434px', height: '350px'}}>
                                      <svg className="apexcharts-svg apexcharts-zoomable" height={350} id="SvgjsSvg4181" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={434} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG4183" transform="translate(39.23958396911621, 57)">
                                          <defs id="SvgjsDefs4182">
                                            <clipPath id="gridRectMaskse221u5df">
                                              <rect fill="#fff" height="266.99999923706054" id="SvgjsRect4210" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="393.7604160308838" x="-4.5" y="-2.5" />
                                            </clipPath>
                                            <clipPath id="forecastMaskse221u5df" />
                                            <clipPath id="nonForecastMaskse221u5df" />
                                            <clipPath id="gridRectMarkerMaskse221u5df">
                                              <rect fill="#fff" height="265.99999923706054" id="SvgjsRect4211" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="388.7604160308838" x={-2} y={-2} />
                                            </clipPath>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="261.99999923706054" id="SvgjsLine4190" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="261.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4222" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="16.372783660888672" x2="16.372783660888672" y1="262.99999923706054" y2="268.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4224" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="83.35235318270595" x2="83.35235318270595" y1="262.99999923706054" y2="268.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4226" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="151.82035758278585" x2="151.82035758278585" y1="262.99999923706054" y2="268.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4228" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="220.28836198286575" x2="220.28836198286575" y1="262.99999923706054" y2="268.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4230" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="288.75636638294566" x2="288.75636638294566" y1="262.99999923706054" y2="268.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4232" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="354.9917184656316" x2="354.9917184656316" y1="262.99999923706054" y2="268.99999923706054" />
                                          <g className="apexcharts-grid" id="SvgjsG4217">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG4218">
                                              <line className="apexcharts-gridline" id="SvgjsLine4234" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="52.399999847412104" y2="52.399999847412104" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4235" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="104.79999969482421" y2="104.79999969482421" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4236" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="157.1999995422363" y2="157.1999995422363" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4237" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="209.59999938964842" y2="209.59999938964842" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG4219">
                                              <line className="apexcharts-gridline" id="SvgjsLine4221" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="16.372783660888672" x2="16.372783660888672" y1={0} y2="261.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4223" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="83.35235318270595" x2="83.35235318270595" y1={0} y2="261.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4225" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="151.82035758278585" x2="151.82035758278585" y1={0} y2="261.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4227" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="220.28836198286575" x2="220.28836198286575" y1={0} y2="261.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4229" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="288.75636638294566" x2="288.75636638294566" y1={0} y2="261.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4231" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="354.9917184656316" x2="354.9917184656316" y1={0} y2="261.99999923706054" />
                                            </g>
                                            <line id="SvgjsLine4240" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="261.99999923706054" y2="261.99999923706054" />
                                            <line id="SvgjsLine4239" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="261.99999923706054" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG4220">
                                            <line className="apexcharts-gridline" id="SvgjsLine4233" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine4238" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="384.7604160308838" y1="261.99999923706054" y2="261.99999923706054" />
                                            <line id="SvgjsLine4266" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="384.7604160308838" y1="262.99999923706054" y2="262.99999923706054" />
                                          </g>
                                          <g className="apexcharts-line-series apexcharts-plot-series" id="SvgjsG4212">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG4213" rel={1} seriesname="Likes">
                                              <path className="apexcharts-line" clipPath="url(#gridRectMaskse221u5df)" d="M0 232.05714218139647L23.0707406130704 239.54285644531248L44.653046347878195 187.1428565979004L67.72378696094859 194.6285708618164L90.0503101348877 44.91428558349611L113.1210507479581 119.77142822265625L135.44757392189717 97.3142854309082L158.51831453496757 194.6285708618164L181.589055148038 172.17142807006837L203.91557832197708 209.59999938964842L226.98631893504748 119.77142822265625L249.3128421089866 224.57142791748046L272.383582722057 164.68571380615234L295.45432333512736 194.6285708618164L316.2924116308039 134.74285675048827L339.36315224387425 247.02857070922852L361.68967541781336 209.59999938964842L384.7604160308838 224.57142791748046C384.7604160308838 224.57142791748046 384.7604160308838 224.57142791748046 384.7604160308838 224.57142791748046 " fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath4216" index={0} pathfrom="M -1 261.99999923706054 L -1 261.99999923706054 L 23.0707406130704 261.99999923706054 L 44.653046347878195 261.99999923706054 L 67.72378696094859 261.99999923706054 L 90.0503101348877 261.99999923706054 L 113.1210507479581 261.99999923706054 L 135.44757392189717 261.99999923706054 L 158.51831453496757 261.99999923706054 L 181.589055148038 261.99999923706054 L 203.91557832197708 261.99999923706054 L 226.98631893504748 261.99999923706054 L 249.3128421089866 261.99999923706054 L 272.383582722057 261.99999923706054 L 295.45432333512736 261.99999923706054 L 316.2924116308039 261.99999923706054 L 339.36315224387425 261.99999923706054 L 361.68967541781336 261.99999923706054 L 384.7604160308838 261.99999923706054" pathto="M 0 232.05714218139647 L 23.0707406130704 239.54285644531248 L 44.653046347878195 187.1428565979004 L 67.72378696094859 194.6285708618164 L 90.0503101348877 44.91428558349611 L 113.1210507479581 119.77142822265625 L 135.44757392189717 97.3142854309082 L 158.51831453496757 194.6285708618164 L 181.589055148038 172.17142807006837 L 203.91557832197708 209.59999938964842 L 226.98631893504748 119.77142822265625 L 249.3128421089866 224.57142791748046 L 272.383582722057 164.68571380615234 L 295.45432333512736 194.6285708618164 L 316.2924116308039 134.74285675048827 L 339.36315224387425 247.02857070922852 L 361.68967541781336 209.59999938964842 L 384.7604160308838 224.57142791748046" stroke="rgba(0,143,251,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG4214">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker w2c5au2dl no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle4287" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG4215" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine4241" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="384.7604160308838" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine4242" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="384.7604160308838" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG4243" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG4244" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG4245" />
                                          <g className="apexcharts-xaxis" id="SvgjsG4246" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG4247" transform="translate(0, -4)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4249" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="16.372783660888672" y="290.99999923706054">
                                                <tspan id="SvgjsTspan4250">
                                                  Feb '00
                                                </tspan>
                                                <title>Feb '00</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4252" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="83.35235318270595" y="290.99999923706054">
                                                <tspan id="SvgjsTspan4253">
                                                  May '00
                                                </tspan>
                                                <title>May '00</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4255" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="151.82035758278585" y="290.99999923706054">
                                                <tspan id="SvgjsTspan4256">
                                                  Aug '00
                                                </tspan>
                                                <title>Aug '00</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4258" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="220.28836198286575" y="290.99999923706054">
                                                <tspan id="SvgjsTspan4259">
                                                  Nov '00
                                                </tspan>
                                                <title>Nov '00</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4261" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="288.75636638294566" y="290.99999923706054">
                                                <tspan id="SvgjsTspan4262">
                                                  Feb '01
                                                </tspan>
                                                <title>Feb '01</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4264" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="354.9917184656316" y="290.99999923706054">
                                                <tspan id="SvgjsTspan4265">
                                                  May '01
                                                </tspan>
                                                <title>May '01</title>
                                              </text>
                                            </g>
                                          </g>
                                          <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect4288" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                          <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect4289" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        </g>
                                        <rect fill="#fefefe" height={0} id="SvgjsRect4189" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        <g className="apexcharts-annotations" id="SvgjsG4184" />
                                        <g className="apexcharts-yaxis" id="SvgjsG4267" rel={0} transform="translate(9.239583969116211, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG4268">
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4270" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="58.5">
                                              <tspan id="SvgjsTspan4271">35</tspan>
                                              <title>35</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4273" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="110.8999998474121">
                                              <tspan id="SvgjsTspan4274">28</tspan>
                                              <title>28</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4276" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="163.2999996948242">
                                              <tspan id="SvgjsTspan4277">21</tspan>
                                              <title>21</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4279" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="215.6999995422363">
                                              <tspan id="SvgjsTspan4280">14</tspan>
                                              <title>14</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4282" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="268.0999993896484">
                                              <tspan id="SvgjsTspan4283">7</tspan>
                                              <title>7</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4285" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="320.49999923706054">
                                              <tspan id="SvgjsTspan4286">0</tspan>
                                              <title>0</title>
                                            </text>
                                          </g>
                                        </g>
                                        <text className="apexcharts-title-text" dominantBaseline="auto" fill="#666666" fontFamily="Helvetica, Arial, sans-serif" fontSize="16px" fontWeight={900} id="SvgjsText4185" style={{fontFamily: 'Helvetica, Arial, sans-serif', opacity: 1}} textAnchor="start" x={10} y="18.5">
                                          Social Media
                                        </text>
                                      </svg>
                                      <div className="apexcharts-legend" style={{maxHeight: '175px'}} />
                                      <div className="apexcharts-tooltip apexcharts-theme-light">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
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
                                      </div>
                                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                        <div className="apexcharts-xaxistooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                      <div className="apexcharts-toolbar" style={{top: '0px', right: '3px'}}>
                                        <div className="apexcharts-zoomin-icon" title="Zoom In">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-zoomout-icon" title="Zoom Out">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-zoom-icon apexcharts-selected" title="Selection Zoom">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-pan-icon" title="Panning">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <defs>
                                              <path d="M0 0h24v24H0z" id="a" />
                                            </defs>
                                            <clipPath id="b">
                                              <use overflow="visible" xlinkHref="#a" />
                                            </clipPath>
                                            <path clipPath="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-reset-icon" title="Reset Zoom">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                            <path d="M0 0h24v24H0z" fill="none" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-menu-icon" title="Menu">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-menu">
                                          <div className="apexcharts-menu-item exportSVG" title="Download SVG">
                                            Download SVG
                                          </div>
                                          <div className="apexcharts-menu-item exportPNG" title="Download PNG">
                                            Download PNG
                                          </div>
                                          <div className="apexcharts-menu-item exportCSV" title="Download CSV">
                                            Download CSV
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c466 className="row clearfix">
                        <div _ngcontent-oko-c466 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c466 className="card">
                            <div _ngcontent-oko-c466 className="header">
                              <h2 _ngcontent-oko-c466>Scatter Chart</h2>
                            </div>
                            <div _ngcontent-oko-c466 className="body">
                              <div _ngcontent-oko-c466 style={{textAlign: 'center'}}>
                                <apx-chart _ngcontent-oko-c466 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{minHeight: '365px'}}>
                                    <div className="apexcharts-canvas apexchartsbgkxg1y9 apexcharts-theme-light" id="apexchartsbgkxg1y9" style={{width: '434px', height: '350px'}}>
                                      <svg className="apexcharts-svg apexcharts-zoomable" height={350} id="SvgjsSvg4290" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={434} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <foreignObject height={350} width={434} x={0} y={0}>
                                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" style={{inset: 'auto 0px 1px', position: 'absolute', maxHeight: '175px'}} xmlns="http://www.w3.org/1999/xhtml">
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="SAMPLExA" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{background: 'rgb(0,143,251) !important', color: 'rgb(0, 143, 251)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="SAMPLE%20A" i={0} rel={1} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                SAMPLE A
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="SAMPLExB" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{background: 'rgb(0,227,150) !important', color: 'rgb(0, 227, 150)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="SAMPLE%20B" i={1} rel={2} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                SAMPLE B
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={3} seriesname="SAMPLExC" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={3} style={{background: 'rgb(254,176,25) !important', color: 'rgb(254, 176, 25)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="SAMPLE%20C" i={2} rel={3} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                SAMPLE C
                                              </span>
                                            </div>
                                          </div>
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                      .apexcharts-legend {\n                                        display: flex;\n                                        overflow: auto;\n                                        padding: 0 10px;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom,\n                                      .apexcharts-legend.apx-legend-position-top {\n                                        flex-wrap: wrap;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        flex-direction: column;\n                                        bottom: 0;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        justify-content: flex-start;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                        justify-content: center;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                        justify-content: flex-end;\n                                      }\n                                      .apexcharts-legend-series {\n                                        cursor: pointer;\n                                        line-height: normal;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apx-legend-position-top\n                                        .apexcharts-legend-series {\n                                        display: flex;\n                                        align-items: center;\n                                      }\n                                      .apexcharts-legend-text {\n                                        position: relative;\n                                        font-size: 14px;\n                                      }\n                                      .apexcharts-legend-text *,\n                                      .apexcharts-legend-marker * {\n                                        pointer-events: none;\n                                      }\n                                      .apexcharts-legend-marker {\n                                        position: relative;\n                                        display: inline-block;\n                                        cursor: pointer;\n                                        margin-right: 3px;\n                                        border-style: solid;\n                                      }\n\n                                      .apexcharts-legend.apexcharts-align-right\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apexcharts-align-left\n                                        .apexcharts-legend-series {\n                                        display: inline-block;\n                                      }\n                                      .apexcharts-legend-series.apexcharts-no-click {\n                                        cursor: auto;\n                                      }\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-zero-series,\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-null-series {\n                                        display: none !important;\n                                      }\n                                      .apexcharts-inactive-legend {\n                                        opacity: 0.45;\n                                      }\n                                    " }} />
                                        </foreignObject>
                                        <rect fill="#fefefe" height={0} id="SvgjsRect4296" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        <g className="apexcharts-annotations" id="SvgjsG4293" />
                                        <g className="apexcharts-yaxis" id="SvgjsG4568" rel={0} transform="translate(18.416667938232422, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG4569">
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4571" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="31.5">
                                              <tspan id="SvgjsTspan4572">25.0</tspan>
                                              <title>25.0</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4574" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="84.585333127594">
                                              <tspan id="SvgjsTspan4575">20.0</tspan>
                                              <title>20.0</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4577" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="137.670666255188">
                                              <tspan id="SvgjsTspan4578">15.0</tspan>
                                              <title>15.0</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4580" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="190.755999382782">
                                              <tspan id="SvgjsTspan4581">10.0</tspan>
                                              <title>10.0</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4583" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="243.841332510376">
                                              <tspan id="SvgjsTspan4584">5.0</tspan>
                                              <title>5.0</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4586" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="296.92666563796996">
                                              <tspan id="SvgjsTspan4587">0.0</tspan>
                                              <title>0.0</title>
                                            </text>
                                          </g>
                                        </g>
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG4292" transform="translate(48.41666793823242, 30)">
                                          <defs id="SvgjsDefs4291">
                                            <clipPath id="gridRectMaskbgkxg1y9">
                                              <rect fill="#fff" height="267.42666563796996" id="SvgjsRect4298" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="368.9010400772095" x={-3} y={-1} />
                                            </clipPath>
                                            <clipPath id="forecastMaskbgkxg1y9" />
                                            <clipPath id="nonForecastMaskbgkxg1y9" />
                                            <clipPath id="gridRectMarkerMaskbgkxg1y9">
                                              <rect fill="#fff" height="305.42666563796996" id="SvgjsRect4299" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="402.9010400772095" x={-20} y={-20} />
                                            </clipPath>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="265.42666563796996" id="SvgjsLine4297" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="265.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4498" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4500" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="36.29010400772095" x2="36.29010400772095" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4502" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="72.5802080154419" x2="72.5802080154419" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4504" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="108.87031202316285" x2="108.87031202316285" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4506" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="145.1604160308838" x2="145.1604160308838" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4508" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="181.45052003860474" x2="181.45052003860474" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4510" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="217.74062404632568" x2="217.74062404632568" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4512" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="254.03072805404662" x2="254.03072805404662" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4514" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="290.3208320617676" x2="290.3208320617676" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4516" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="326.61093606948856" x2="326.61093606948856" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4518" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="362.90104007720953" x2="362.90104007720953" y1="266.42666563796996" y2="272.42666563796996" />
                                          <g className="apexcharts-grid" id="SvgjsG4493">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG4494">
                                              <line className="apexcharts-gridline" id="SvgjsLine4520" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="362.9010400772095" y1="53.08533312759399" y2="53.08533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4521" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="362.9010400772095" y1="106.17066625518798" y2="106.17066625518798" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4522" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="362.9010400772095" y1="159.25599938278197" y2="159.25599938278197" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4523" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="362.9010400772095" y1="212.34133251037596" y2="212.34133251037596" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG4495">
                                              <line className="apexcharts-gridline" id="SvgjsLine4497" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4499" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="36.29010400772095" x2="36.29010400772095" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4501" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="72.5802080154419" x2="72.5802080154419" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4503" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="108.87031202316285" x2="108.87031202316285" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4505" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="145.1604160308838" x2="145.1604160308838" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4507" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="181.45052003860474" x2="181.45052003860474" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4509" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="217.74062404632568" x2="217.74062404632568" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4511" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="254.03072805404662" x2="254.03072805404662" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4513" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="290.3208320617676" x2="290.3208320617676" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4515" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="326.61093606948856" x2="326.61093606948856" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4517" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="362.90104007720953" x2="362.90104007720953" y1={0} y2="265.42666563796996" />
                                            </g>
                                            <line id="SvgjsLine4526" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="362.9010400772095" y1="265.42666563796996" y2="265.42666563796996" />
                                            <line id="SvgjsLine4525" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="265.42666563796996" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG4496">
                                            <line className="apexcharts-gridline" id="SvgjsLine4519" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="362.9010400772095" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine4524" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="362.9010400772095" y1="265.42666563796996" y2="265.42666563796996" />
                                            <line id="SvgjsLine4567" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="362.9010400772095" y1="266.42666563796996" y2="266.42666563796996" />
                                          </g>
                                          <g className="apexcharts-scatter-series apexcharts-plot-series" id="SvgjsG4300">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG4301" rel={1} seriesname="SAMPLExA">
                                              <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG4302">
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4304">
                                                  <circle className="apexcharts-marker" cx="162.95556345064776" cy="208.09450586016845" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4305" index={0} j={0} r={6} rel={0} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="158.45556345064776" y="203.59450586016845" />
                                                  <circle className="apexcharts-marker" cx="215.9411147566866" cy="244.19253238693236" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4306" index={0} j={1} r={6} rel={1} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="211.4411147566866" y="239.69253238693236" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4307">
                                                  <circle className="apexcharts-marker" cx="252.93102793260053" cy="233.57546576141357" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4308" index={0} j={2} r={6} rel={2} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="248.43102793260053" y="229.07546576141357" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4309">
                                                  <circle className="apexcharts-marker" cx="188.94847541210078" cy="244.19253238693236" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4310" index={0} j={3} r={6} rel={3} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="184.44847541210078" y="239.69253238693236" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4311">
                                                  <circle className="apexcharts-marker" cx="107.97055737834333" cy="254.80959901245117" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4312" index={0} j={4} r={6} rel={4} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="103.47055737834333" y="250.30959901245117" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4313">
                                                  <circle className="apexcharts-marker" cx="134.96319672292915" cy="231.4520524363098" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4314" index={0} j={5} r={6} rel={5} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="130.46319672292915" y="226.9520524363098" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4315">
                                                  <circle className="apexcharts-marker" cx="107.97055737834333" cy="186.86037260913085" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4316" index={0} j={6} r={6} rel={6} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="103.47055737834333" y="182.36037260913085" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4317">
                                                  <circle className="apexcharts-marker" cx="107.97055737834333" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4318" index={0} j={7} r={6} rel={7} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="103.47055737834333" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4319">
                                                  <circle className="apexcharts-marker" cx="107.97055737834333" cy="178.36671930871583" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4320" index={0} j={8} r={6} rel={8} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="103.47055737834333" y="173.86671930871583" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4321">
                                                  <circle className="apexcharts-marker" cx="162.95556345064776" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4322" index={0} j={9} r={6} rel={9} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="158.45556345064776" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4323">
                                                  <circle className="apexcharts-marker" cx="162.95556345064776" cy="246.31594571203613" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4324" index={0} j={10} r={6} rel={10} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="158.45556345064776" y="241.81594571203613" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4325">
                                                  <circle className="apexcharts-marker" cx="134.96319672292915" cy="262.2415456503143" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4326" index={0} j={11} r={6} rel={11} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="130.46319672292915" y="257.7415456503143" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4327">
                                                  <circle className="apexcharts-marker" cx="134.96319672292915" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4328" index={0} j={12} r={6} rel={12} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="130.46319672292915" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4329">
                                                  <circle className="apexcharts-marker" cx="297.9187601735769" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4330" index={0} j={13} r={6} rel={13} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="293.4187601735769" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4331">
                                                  <circle className="apexcharts-marker" cx="269.9263934458583" cy="241.00741239927672" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4332" index={0} j={14} r={6} rel={14} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="265.4263934458583" y="236.50741239927672" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4333">
                                                  <circle className="apexcharts-marker" cx="162.95556345064776" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4334" index={0} j={15} r={6} rel={15} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="158.45556345064776" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4335">
                                                  <circle className="apexcharts-marker" cx="134.96319672292915" cy="226.1435191235504" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4336" index={0} j={16} r={6} rel={16} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="130.46319672292915" y="221.6435191235504" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4337">
                                                  <circle className="apexcharts-marker" cx="107.97055737834333" cy="210.2179191852722" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4338" index={0} j={17} r={6} rel={17} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="103.47055737834333" y="205.7179191852722" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4339">
                                                  <circle className="apexcharts-marker" cx="162.95556345064776" cy="196.4157325720978" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4340" index={0} j={18} r={6} rel={18} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="158.45556345064776" y="191.9157325720978" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4341">
                                                  <circle className="apexcharts-marker" cx="107.97055737834333" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4342" index={0} j={19} r={6} rel={19} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="103.47055737834333" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4343">
                                                  <circle className="apexcharts-marker" cx="243.93348148440526" cy="190.04549259678652" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4344" index={0} j={20} r={6} rel={20} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="239.43348148440526" y="185.54549259678652" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4345">
                                                  <circle className="apexcharts-marker" cx="107.97055737834333" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4346" index={0} j={21} r={6} rel={21} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="103.47055737834333" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4347">
                                                  <circle className="apexcharts-marker" cx="79.97819065062468" cy="215.5264524980316" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4348" index={0} j={22} r={6} rel={22} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="75.47819065062468" y="211.0264524980316" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4349">
                                                  <circle className="apexcharts-marker" cx="188.94847541210078" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4350" index={0} j={23} r={6} rel={23} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="184.44847541210078" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4351">
                                                  <circle className="apexcharts-marker" cx="215.9411147566866" cy="246.31594571203613" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4352" index={0} j={24} r={6} rel={24} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="211.4411147566866" y="241.81594571203613" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4353">
                                                  <circle className="apexcharts-marker" cx="269.9263934458583" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4354" index={0} j={25} r={6} rel={25} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="265.4263934458583" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4355">
                                                  <circle className="apexcharts-marker" cx="243.93348148440526" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4356" index={0} j={26} r={6} rel={26} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="239.43348148440526" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4357">
                                                  <circle className="apexcharts-marker" cx="269.9263934458583" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4358" index={0} j={27} r={6} rel={27} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="265.4263934458583" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4359">
                                                  <circle className="apexcharts-marker" cx="297.9187601735769" cy="249.50106569969176" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4360" index={0} j={28} r={6} rel={28} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="293.4187601735769" y="245.00106569969176" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4361">
                                                  <circle className="apexcharts-marker" cx="269.9263934458583" cy="256.93301233755494" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4362" index={0} j={29} r={6} rel={29} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="265.4263934458583" y="252.43301233755494" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4363">
                                                  <circle className="apexcharts-marker" cx="219.94002428921786" cy="244.19253238693236" default-marker-size={6} fill="rgba(0,143,251,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4364" index={0} j={30} r={6} rel={30} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="215.44002428921786" y="239.69253238693236" />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={1} id="SvgjsG4365" rel={2} seriesname="SAMPLExB">
                                              <g className="apexcharts-series-markers-wrap" data-realindex={1} id="SvgjsG4366">
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4368">
                                                  <circle className="apexcharts-marker" cx="362.9010400772095" cy="123.15797285601806" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4369" index={1} j={0} r={6} rel={0} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="358.4010400772095" y="118.65797285601806" />
                                                  <circle className="apexcharts-marker" cx="15.995638130124934" cy="148.6389327572632" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4370" index={1} j={1} r={6} rel={1} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="11.495638130124934" y="144.1389327572632" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4371">
                                                  <circle className="apexcharts-marker" cx="52.98555130603886" cy="180.4901326338196" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4372" index={1} j={2} r={6} rel={2} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="48.48555130603886" y="175.9901326338196" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4373">
                                                  <circle className="apexcharts-marker" cx="88.97573709881996" cy="84.93653300415039" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4374" index={1} j={3} r={6} rel={3} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="84.47573709881996" y="80.43653300415039" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4375">
                                                  <circle className="apexcharts-marker" cx="17.995092896390553" cy="222.95839913589478" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4376" index={1} j={4} r={6} rel={4} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="13.495092896390553" y="218.45839913589478" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4377">
                                                  <circle className="apexcharts-marker" cx="34.9904584096483" cy="135.89845280664065" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4378" index={1} j={5} r={6} rel={5} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="30.490458409648298" y="131.39845280664065" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4379">
                                                  <circle className="apexcharts-marker" cx="17.995092896390553" cy="112.54090623049927" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4380" index={1} j={6} r={6} rel={6} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="13.495092896390553" y="108.04090623049927" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4381">
                                                  <circle className="apexcharts-marker" cx="17.995092896390553" cy="169.87306600830078" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4382" index={1} j={7} r={6} rel={7} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="13.495092896390553" y="165.37306600830078" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4383">
                                                  <circle className="apexcharts-marker" cx="17.995092896390553" cy="125.28138618112183" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4384" index={1} j={8} r={6} rel={8} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="13.495092896390553" y="120.78138618112183" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4385">
                                                  <circle className="apexcharts-marker" cx="12.996455980726509" cy="191.10719925933836" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4386" index={1} j={9} r={6} rel={9} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="8.496455980726509" y="186.60719925933836" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4387">
                                                  <circle className="apexcharts-marker" cx="62.982825137366945" cy="171.99647933340452" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4388" index={1} j={10} r={6} rel={10} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="58.482825137366945" y="167.49647933340452" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4389">
                                                  <circle className="apexcharts-marker" cx="34.9904584096483" cy="219.77327914823914" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4390" index={1} j={11} r={6} rel={11} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="30.490458409648298" y="215.27327914823914" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4391">
                                                  <circle className="apexcharts-marker" cx="14.995910746992127" cy="159.25599938278197" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4392" index={1} j={12} r={6} rel={12} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="10.495910746992127" y="154.75599938278197" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4393">
                                                  <circle className="apexcharts-marker" cx="97.97328354701524" cy="244.19253238693236" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4394" index={1} j={13} r={6} rel={13} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="93.47328354701524" y="239.69253238693236" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4395">
                                                  <circle className="apexcharts-marker" cx="69.9809168192966" cy="106.170666255188" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4396" index={1} j={14} r={6} rel={14} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="65.4809168192966" y="101.670666255188" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4397">
                                                  <circle className="apexcharts-marker" cx="12.996455980726509" cy="265.42666563796996" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4398" index={1} j={15} r={6} rel={15} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="8.496455980726509" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4399">
                                                  <circle className="apexcharts-marker" cx="34.9904584096483" cy="119.97285286836245" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4400" index={1} j={16} r={6} rel={16} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="30.490458409648298" y="115.47285286836245" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4401">
                                                  <circle className="apexcharts-marker" cx="17.995092896390553" cy="104.04725293008426" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4402" index={1} j={17} r={6} rel={17} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="13.495092896390553" y="99.54725293008426" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4403">
                                                  <circle className="apexcharts-marker" cx="62.982825137366945" cy="90.2450663169098" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4404" index={1} j={18} r={6} rel={18} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="58.482825137366945" y="85.7450663169098" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4405">
                                                  <circle className="apexcharts-marker" cx="7.997819065062468" cy="159.25599938278197" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4406" index={1} j={19} r={6} rel={19} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="3.497819065062468" y="154.75599938278197" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4407">
                                                  <circle className="apexcharts-marker" cx="43.98800485784358" cy="83.87482634159849" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4408" index={1} j={20} r={6} rel={20} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="39.48800485784358" y="79.37482634159849" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4409">
                                                  <circle className="apexcharts-marker" cx="107.97055737834333" cy="159.25599938278197" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4410" index={1} j={21} r={6} rel={21} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="103.47055737834333" y="154.75599938278197" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4411">
                                                  <circle className="apexcharts-marker" cx={0} cy="109.35578624284364" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4412" index={1} j={22} r={6} rel={22} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="-4.5" y="104.85578624284364" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4413">
                                                  <circle className="apexcharts-marker" cx="88.97573709881996" cy="159.25599938278197" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4414" index={1} j={23} r={6} rel={23} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="84.47573709881996" y="154.75599938278197" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4415">
                                                  <circle className="apexcharts-marker" cx="125.96565027473386" cy="140.14527945684813" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4416" index={1} j={24} r={6} rel={24} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="121.46565027473386" y="135.64527945684813" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4417">
                                                  <circle className="apexcharts-marker" cx="19.99454766265617" cy="159.25599938278197" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4418" index={1} j={25} r={6} rel={25} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="15.49454766265617" y="154.75599938278197" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4419">
                                                  <circle className="apexcharts-marker" cx="23.993457195187403" cy="159.25599938278197" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4420" index={1} j={26} r={6} rel={26} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="19.493457195187403" y="154.75599938278197" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4421">
                                                  <circle className="apexcharts-marker" cx="269.9263934458583" cy="159.25599938278197" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4422" index={1} j={27} r={6} rel={27} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="265.4263934458583" y="154.75599938278197" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4423">
                                                  <circle className="apexcharts-marker" cx="27.992366727718636" cy="143.33039944450377" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4424" index={1} j={28} r={6} rel={28} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="23.492366727718636" y="138.83039944450377" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4425">
                                                  <circle className="apexcharts-marker" cx="69.9809168192966" cy="150.76234608236695" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4426" index={1} j={29} r={6} rel={29} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="65.4809168192966" y="146.26234608236695" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4427">
                                                  <circle className="apexcharts-marker" cx="19.99454766265617" cy="138.0218661317444" default-marker-size={6} fill="rgba(0,227,150,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4428" index={1} j={30} r={6} rel={30} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="15.49454766265617" y="133.5218661317444" />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={2} id="SvgjsG4429" rel={3} seriesname="SAMPLExC">
                                              <g className="apexcharts-series-markers-wrap" data-realindex={2} id="SvgjsG4430">
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4432">
                                                  <circle className="apexcharts-marker" cx="215.9411147566866" cy="233.57546576141357" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4433" index={2} j={0} r={6} rel={0} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="211.4411147566866" y="229.07546576141357" />
                                                  <circle className="apexcharts-marker" cx="234.93593503621" cy="228.26693244865416" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4434" index={2} j={1} r={6} rel={1} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="230.43593503621" y="223.76693244865416" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4435">
                                                  <circle className="apexcharts-marker" cx="244.93320886753807" cy="233.57546576141357" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4436" index={2} j={2} r={6} rel={2} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="240.43320886753807" y="229.07546576141357" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4437">
                                                  <circle className="apexcharts-marker" cx="297.9187601735769" cy="233.57546576141357" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4438" index={2} j={3} r={6} rel={3} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="293.4187601735769" y="229.07546576141357" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4439">
                                                  <circle className="apexcharts-marker" cx="215.9411147566866" cy="53.085333127594" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4440" index={2} j={4} r={6} rel={4} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="211.4411147566866" y="48.585333127594" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4441">
                                                  <circle className="apexcharts-marker" cx="228.93757073741313" cy="244.19253238693236" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4442" index={2} j={5} r={6} rel={5} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="224.43757073741313" y="239.69253238693236" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4443">
                                                  <circle className="apexcharts-marker" cx="107.97055737834333" cy="233.57546576141357" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4444" index={2} j={6} r={6} rel={6} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="103.47055737834333" y="229.07546576141357" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4445">
                                                  <circle className="apexcharts-marker" cx="278.92393989405355" cy="222.95839913589478" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4446" index={2} j={7} r={6} rel={7} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="274.42393989405355" y="218.45839913589478" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4447">
                                                  <circle className="apexcharts-marker" cx="269.9263934458583" cy="262.2415456503143" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4448" index={2} j={8} r={6} rel={8} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="265.4263934458583" y="257.7415456503143" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4449">
                                                  <circle className="apexcharts-marker" cx="162.95556345064776" cy="222.95839913589478" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4450" index={2} j={9} r={6} rel={9} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="158.45556345064776" y="218.45839913589478" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4451">
                                                  <circle className="apexcharts-marker" cx="134.96319672292915" cy="265.42666563796996" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4452" index={2} j={10} r={6} rel={10} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="130.46319672292915" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4453">
                                                  <circle className="apexcharts-marker" cx="188.94847541210078" cy="212.34133251037596" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4454" index={2} j={11} r={6} rel={11} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="184.44847541210078" y="207.84133251037596" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4455">
                                                  <circle className="apexcharts-marker" cx="222.93920643861625" cy="233.57546576141357" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4456" index={2} j={12} r={6} rel={12} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="218.43920643861625" y="229.07546576141357" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4457">
                                                  <circle className="apexcharts-marker" cx="243.93348148440526" cy="233.57546576141357" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4458" index={2} j={13} r={6} rel={13} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="239.43348148440526" y="229.07546576141357" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4459">
                                                  <circle className="apexcharts-marker" cx="324.91139951816274" cy="233.57546576141357" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4460" index={2} j={14} r={6} rel={14} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="320.41139951816274" y="229.07546576141357" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4461">
                                                  <circle className="apexcharts-marker" cx="269.9263934458583" cy="222.95839913589478" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4462" index={2} j={15} r={6} rel={15} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="265.4263934458583" y="218.45839913589478" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4463">
                                                  <circle className="apexcharts-marker" cx="294.9195780241785" cy="201.72426588485718" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4464" index={2} j={16} r={6} rel={16} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="290.4195780241785" y="197.22426588485718" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4465">
                                                  <circle className="apexcharts-marker" cx="314.91412568683467" cy="180.4901326338196" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4466" index={2} j={17} r={6} rel={17} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="310.41412568683467" y="175.9901326338196" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4467">
                                                  <circle className="apexcharts-marker" cx="214.94138737355382" cy="212.34133251037596" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4468" index={2} j={18} r={6} rel={18} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="210.44138737355382" y="207.84133251037596" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4469">
                                                  <circle className="apexcharts-marker" cx="207.94329569162414" cy="222.95839913589478" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4470" index={2} j={19} r={6} rel={19} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="203.44329569162414" y="218.45839913589478" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4471">
                                                  <circle className="apexcharts-marker" cx="222.93920643861625" cy="265.42666563796996" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4472" index={2} j={20} r={6} rel={20} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="218.43920643861625" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4473">
                                                  <circle className="apexcharts-marker" cx="324.91139951816274" cy="156.07087939512633" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4474" index={2} j={21} r={6} rel={21} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="320.41139951816274" y="151.57087939512633" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4475">
                                                  <circle className="apexcharts-marker" cx="295.9193054073113" cy="44.59167982717895" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4476" index={2} j={22} r={6} rel={22} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="291.4193054073113" y="40.09167982717895" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4477">
                                                  <circle className="apexcharts-marker" cx="243.93348148440526" cy="256.93301233755494" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4478" index={2} j={23} r={6} rel={23} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="239.43348148440526" y="252.43301233755494" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4479">
                                                  <circle className="apexcharts-marker" cx="212.94193260728818" cy="265.42666563796996" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4480" index={2} j={24} r={6} rel={24} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="208.44193260728818" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4481">
                                                  <circle className="apexcharts-marker" cx="215.9411147566866" cy="192.16890592189026" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4482" index={2} j={25} r={6} rel={25} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="211.4411147566866" y="187.66890592189026" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4483">
                                                  <circle className="apexcharts-marker" cx="284.92230419285045" cy="183.67525262147524" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4484" index={2} j={26} r={6} rel={26} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="280.42230419285045" y="179.17525262147524" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4485">
                                                  <circle className="apexcharts-marker" cx="152.95828961931971" cy="265.42666563796996" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4486" index={2} j={27} r={6} rel={27} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="148.45828961931971" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4487">
                                                  <circle className="apexcharts-marker" cx="179.95092896390554" cy="265.42666563796996" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4488" index={2} j={28} r={6} rel={28} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="175.45092896390554" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4489">
                                                  <circle className="apexcharts-marker" cx="332.9092185832252" cy="265.42666563796996" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4490" index={2} j={29} r={6} rel={29} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="328.4092185832252" y="260.92666563796996" />
                                                </g>
                                                <g className="apexcharts-series-markers apexcharts-series-scatter" clipPath="url(#gridRectMarkerMaskbgkxg1y9)" id="SvgjsG4491">
                                                  <circle className="apexcharts-marker" cx="162.95556345064776" cy="265.42666563796996" default-marker-size={6} fill="rgba(254,176,25,0.85)" fillOpacity={1} height={0} id="SvgjsCircle4492" index={2} j={30} r={6} rel={30} stroke="#ffffff" strokeDasharray={0} strokeOpacity="0.9" strokeWidth={1} width={0} x="158.45556345064776" y="260.92666563796996" />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG4303" />
                                            <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG4367" />
                                            <g className="apexcharts-datalabels" data-realindex={2} id="SvgjsG4431" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine4527" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="362.9010400772095" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine4528" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="362.9010400772095" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG4529" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG4530" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG4531" />
                                          <g className="apexcharts-xaxis" id="SvgjsG4532" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG4533" transform="translate(0, -4)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4535" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x={0} y="294.42666563796996">
                                                <tspan id="SvgjsTspan4536">0.1</tspan>
                                                <title>0.1</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4538" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="36.290104007720956" y="294.42666563796996">
                                                <tspan id="SvgjsTspan4539">3.7</tspan>
                                                <title>3.7</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4541" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="72.5802080154419" y="294.42666563796996">
                                                <tspan id="SvgjsTspan4542">7.4</tspan>
                                                <title>7.4</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4544" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="108.87031202316284" y="294.42666563796996">
                                                <tspan id="SvgjsTspan4545">
                                                  11.0
                                                </tspan>
                                                <title>11.0</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4547" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="145.16041603088377" y="294.42666563796996">
                                                <tspan id="SvgjsTspan4548">
                                                  14.6
                                                </tspan>
                                                <title>14.6</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4550" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="181.4505200386047" y="294.42666563796996">
                                                <tspan id="SvgjsTspan4551">
                                                  18.2
                                                </tspan>
                                                <title>18.2</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4553" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="217.74062404632565" y="294.42666563796996">
                                                <tspan id="SvgjsTspan4554">
                                                  21.9
                                                </tspan>
                                                <title>21.9</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4556" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="254.03072805404662" y="294.42666563796996">
                                                <tspan id="SvgjsTspan4557">
                                                  25.5
                                                </tspan>
                                                <title>25.5</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4559" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="290.3208320617676" y="294.42666563796996">
                                                <tspan id="SvgjsTspan4560">
                                                  29.1
                                                </tspan>
                                                <title>29.1</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4562" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="326.61093606948856" y="294.42666563796996">
                                                <tspan id="SvgjsTspan4563">
                                                  32.8
                                                </tspan>
                                                <title>32.8</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4565" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="362.90104007720953" y="294.42666563796996">
                                                <tspan id="SvgjsTspan4566">
                                                  36.4
                                                </tspan>
                                                <title>36.4</title>
                                              </text>
                                            </g>
                                          </g>
                                          <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect4588" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                          <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect4589" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        </g>
                                      </svg>
                                      <div className="apexcharts-tooltip apexcharts-theme-light">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
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
                                      </div>
                                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                        <div className="apexcharts-xaxistooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                      <div className="apexcharts-toolbar" style={{top: '0px', right: '3px'}}>
                                        <div className="apexcharts-zoomin-icon" title="Zoom In">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-zoomout-icon" title="Zoom Out">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-zoom-icon apexcharts-selected" title="Selection Zoom">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-pan-icon" title="Panning">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <defs>
                                              <path d="M0 0h24v24H0z" id="a" />
                                            </defs>
                                            <clipPath id="b">
                                              <use overflow="visible" xlinkHref="#a" />
                                            </clipPath>
                                            <path clipPath="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-reset-icon" title="Reset Zoom">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                            <path d="M0 0h24v24H0z" fill="none" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-menu-icon" title="Menu">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-menu">
                                          <div className="apexcharts-menu-item exportSVG" title="Download SVG">
                                            Download SVG
                                          </div>
                                          <div className="apexcharts-menu-item exportPNG" title="Download PNG">
                                            Download PNG
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c466 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c466 className="card">
                            <div _ngcontent-oko-c466 className="header">
                              <h2 _ngcontent-oko-c466>Area Chart</h2>
                            </div>
                            <div _ngcontent-oko-c466 className="body">
                              <div _ngcontent-oko-c466 style={{textAlign: 'center'}}>
                                <apx-chart _ngcontent-oko-c466 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{minHeight: '365px'}}>
                                    <div className="apexcharts-canvas apexcharts3nkwlaxs apexcharts-theme-light" id="apexcharts3nkwlaxs" style={{width: '434px', height: '350px'}}>
                                      <svg className="apexcharts-svg apexcharts-zoomable" height={350} id="SvgjsSvg4590" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={434} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <foreignObject height={350} width={434} x={0} y={0}>
                                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" style={{inset: 'auto 0px 1px', position: 'absolute', maxHeight: '175px'}} xmlns="http://www.w3.org/1999/xhtml">
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="series1" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{background: 'rgb(0,143,251) !important', color: 'rgb(0, 143, 251)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="series1" i={0} rel={1} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                series1
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="series2" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{background: 'rgb(0,227,150) !important', color: 'rgb(0, 227, 150)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="series2" i={1} rel={2} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                series2
                                              </span>
                                            </div>
                                          </div>
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                      .apexcharts-legend {\n                                        display: flex;\n                                        overflow: auto;\n                                        padding: 0 10px;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom,\n                                      .apexcharts-legend.apx-legend-position-top {\n                                        flex-wrap: wrap;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        flex-direction: column;\n                                        bottom: 0;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        justify-content: flex-start;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                        justify-content: center;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                        justify-content: flex-end;\n                                      }\n                                      .apexcharts-legend-series {\n                                        cursor: pointer;\n                                        line-height: normal;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apx-legend-position-top\n                                        .apexcharts-legend-series {\n                                        display: flex;\n                                        align-items: center;\n                                      }\n                                      .apexcharts-legend-text {\n                                        position: relative;\n                                        font-size: 14px;\n                                      }\n                                      .apexcharts-legend-text *,\n                                      .apexcharts-legend-marker * {\n                                        pointer-events: none;\n                                      }\n                                      .apexcharts-legend-marker {\n                                        position: relative;\n                                        display: inline-block;\n                                        cursor: pointer;\n                                        margin-right: 3px;\n                                        border-style: solid;\n                                      }\n\n                                      .apexcharts-legend.apexcharts-align-right\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apexcharts-align-left\n                                        .apexcharts-legend-series {\n                                        display: inline-block;\n                                      }\n                                      .apexcharts-legend-series.apexcharts-no-click {\n                                        cursor: auto;\n                                      }\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-zero-series,\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-null-series {\n                                        display: none !important;\n                                      }\n                                      .apexcharts-inactive-legend {\n                                        opacity: 0.45;\n                                      }\n                                    " }} />
                                        </foreignObject>
                                        <rect fill="#fefefe" height={0} id="SvgjsRect4597" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        <g className="apexcharts-annotations" id="SvgjsG4593" />
                                        <g className="apexcharts-yaxis" id="SvgjsG4734" rel={0} transform="translate(15.354167938232422, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG4735">
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4737" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="31.4">
                                              <tspan id="SvgjsTspan4738">120</tspan>
                                              <title>120</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4740" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="99.14999980926514">
                                              <tspan id="SvgjsTspan4741">90</tspan>
                                              <title>90</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4743" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="166.89999961853027">
                                              <tspan id="SvgjsTspan4744">60</tspan>
                                              <title>60</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4746" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="234.6499994277954">
                                              <tspan id="SvgjsTspan4747">30</tspan>
                                              <title>30</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText4749" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="302.3999992370605">
                                              <tspan id="SvgjsTspan4750">0</tspan>
                                              <title>0</title>
                                            </text>
                                          </g>
                                        </g>
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG4592" transform="translate(45.35416793823242, 30)">
                                          <defs id="SvgjsDefs4591">
                                            <clipPath id="gridRectMask3nkwlaxs">
                                              <rect fill="#fff" height="274.99999923706054" id="SvgjsRect4607" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="386.6458320617676" x={-4} y={-2} />
                                            </clipPath>
                                            <clipPath id="forecastMask3nkwlaxs" />
                                            <clipPath id="nonForecastMask3nkwlaxs" />
                                            <clipPath id="gridRectMarkerMask3nkwlaxs">
                                              <rect fill="#fff" height="274.99999923706054" id="SvgjsRect4608" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="382.6458320617676" x={-2} y={-2} />
                                            </clipPath>
                                            <linearGradient id="SvgjsLinearGradient4633" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop4634" offset={0} stopColor="rgba(0,143,251,0.65)" stopOpacity="0.65" />
                                              <stop id="SvgjsStop4635" offset={1} stopColor="rgba(128,199,253,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop4636" offset={1} stopColor="rgba(128,199,253,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient4662" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop4663" offset={0} stopColor="rgba(0,227,150,0.65)" stopOpacity="0.65" />
                                              <stop id="SvgjsStop4664" offset={1} stopColor="rgba(128,241,203,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop4665" offset={1} stopColor="rgba(128,241,203,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="270.99999923706054" id="SvgjsLine4598" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="270.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4687" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="29.126602466289814" x2="29.126602466289814" y1="271.99999923706054" y2="277.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4689" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="87.37980739886945" x2="87.37980739886945" y1="271.99999923706054" y2="277.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4691" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="145.63301233144907" x2="145.63301233144907" y1="271.99999923706054" y2="277.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4693" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="203.8862172640287" x2="203.8862172640287" y1="271.99999923706054" y2="277.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4695" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="262.13942219660834" x2="262.13942219660834" y1="271.99999923706054" y2="277.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine4697" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="320.392627129188" x2="320.392627129188" y1="271.99999923706054" y2="277.99999923706054" />
                                          <g className="apexcharts-grid" id="SvgjsG4682">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG4683">
                                              <line className="apexcharts-gridline" id="SvgjsLine4699" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="67.74999980926513" y2="67.74999980926513" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4700" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="135.49999961853027" y2="135.49999961853027" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4701" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="203.2499994277954" y2="203.2499994277954" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG4684">
                                              <line className="apexcharts-gridline" id="SvgjsLine4686" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="29.126602466289814" x2="29.126602466289814" y1={0} y2="270.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4688" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="87.37980739886945" x2="87.37980739886945" y1={0} y2="270.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4690" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="145.63301233144907" x2="145.63301233144907" y1={0} y2="270.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4692" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="203.8862172640287" x2="203.8862172640287" y1={0} y2="270.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4694" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="262.13942219660834" x2="262.13942219660834" y1={0} y2="270.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine4696" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="320.392627129188" x2="320.392627129188" y1={0} y2="270.99999923706054" />
                                            </g>
                                            <line id="SvgjsLine4704" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="270.99999923706054" y2="270.99999923706054" />
                                            <line id="SvgjsLine4703" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="270.99999923706054" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG4685">
                                            <line className="apexcharts-gridline" id="SvgjsLine4698" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine4702" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="378.6458320617676" y1="270.99999923706054" y2="270.99999923706054" />
                                            <line id="SvgjsLine4733" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="378.6458320617676" y1="271.99999923706054" y2="271.99999923706054" />
                                          </g>
                                          <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG4609">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG4610" rel={1} seriesname="series1">
                                              <path className="apexcharts-area" clipPath="url(#gridRectMask3nkwlaxs)" d="M0 270.99999923706054L0 200.99166610081988C30.582932589604304 200.99166610081988 56.79687480926514 180.66666615804036 87.37980739886945 180.66666615804036C107.76842912527232 180.66666615804036 125.24439060504619 207.7666660817464 145.63301233144907 207.7666660817464C166.02163405785194 207.7666660817464 183.49759553762584 155.82499956130982 203.88621726402872 155.82499956130982C224.2748389904316 155.82499956130982 241.75080047020546 176.14999950408935 262.13942219660834 176.14999950408935C282.5280439230112 176.14999950408935 300.0040054027851 24.841666596730562 320.392627129188 24.841666596730562C340.78124885559083 24.841666596730562 358.25721033536473 45.16666653951009 378.6458320617676 45.16666653951009C378.6458320617676 45.16666653951009 378.6458320617676 45.16666653951009 378.6458320617676 270.99999923706054M378.6458320617676 45.16666653951009C378.6458320617676 45.16666653951009 378.6458320617676 45.16666653951009 378.6458320617676 45.16666653951009 " fill="url(#SvgjsLinearGradient4633)" fillOpacity={1} id="SvgjsPath4637" index={0} pathfrom="M -1 270.99999923706054 L -1 270.99999923706054 L 87.37980739886945 270.99999923706054 L 145.63301233144907 270.99999923706054 L 203.88621726402872 270.99999923706054 L 262.13942219660834 270.99999923706054 L 320.392627129188 270.99999923706054 L 378.6458320617676 270.99999923706054" pathto="M 0 270.99999923706054 L 0 200.99166610081988C 30.582932589604304 200.99166610081988 56.79687480926514 180.66666615804036 87.37980739886945 180.66666615804036C 107.76842912527232 180.66666615804036 125.24439060504619 207.7666660817464 145.63301233144907 207.7666660817464C 166.02163405785194 207.7666660817464 183.49759553762584 155.82499956130982 203.88621726402872 155.82499956130982C 224.2748389904316 155.82499956130982 241.75080047020546 176.14999950408935 262.13942219660834 176.14999950408935C 282.5280439230112 176.14999950408935 300.0040054027851 24.841666596730562 320.392627129188 24.841666596730562C 340.78124885559083 24.841666596730562 358.25721033536473 45.16666653951009 378.6458320617676 45.16666653951009C 378.6458320617676 45.16666653951009 378.6458320617676 45.16666653951009 378.6458320617676 270.99999923706054M 378.6458320617676 45.16666653951009z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-area" clipPath="url(#gridRectMask3nkwlaxs)" d="M0 200.99166610081988C30.582932589604304 200.99166610081988 56.79687480926514 180.66666615804036 87.37980739886945 180.66666615804036C107.76842912527232 180.66666615804036 125.24439060504619 207.7666660817464 145.63301233144907 207.7666660817464C166.02163405785194 207.7666660817464 183.49759553762584 155.82499956130982 203.88621726402872 155.82499956130982C224.2748389904316 155.82499956130982 241.75080047020546 176.14999950408935 262.13942219660834 176.14999950408935C282.5280439230112 176.14999950408935 300.0040054027851 24.841666596730562 320.392627129188 24.841666596730562C340.78124885559083 24.841666596730562 358.25721033536473 45.16666653951009 378.6458320617676 45.16666653951009C378.6458320617676 45.16666653951009 378.6458320617676 45.16666653951009 378.6458320617676 45.16666653951009 " fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath4638" index={0} pathfrom="M -1 270.99999923706054 L -1 270.99999923706054 L 87.37980739886945 270.99999923706054 L 145.63301233144907 270.99999923706054 L 203.88621726402872 270.99999923706054 L 262.13942219660834 270.99999923706054 L 320.392627129188 270.99999923706054 L 378.6458320617676 270.99999923706054" pathto="M 0 200.99166610081988C 30.582932589604304 200.99166610081988 56.79687480926514 180.66666615804036 87.37980739886945 180.66666615804036C 107.76842912527232 180.66666615804036 125.24439060504619 207.7666660817464 145.63301233144907 207.7666660817464C 166.02163405785194 207.7666660817464 183.49759553762584 155.82499956130982 203.88621726402872 155.82499956130982C 224.2748389904316 155.82499956130982 241.75080047020546 176.14999950408935 262.13942219660834 176.14999950408935C 282.5280439230112 176.14999950408935 300.0040054027851 24.841666596730562 320.392627129188 24.841666596730562C 340.78124885559083 24.841666596730562 358.25721033536473 45.16666653951009 378.6458320617676 45.16666653951009" stroke="#008ffb" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG4611">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker w8xovenyb no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle4751" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={1} id="SvgjsG4639" rel={2} seriesname="series2">
                                              <path className="apexcharts-area" clipPath="url(#gridRectMask3nkwlaxs)" d="M0 270.99999923706054L0 246.15833264033C30.582932589604304 246.15833264033 56.79687480926514 198.73333277384438 87.37980739886945 198.73333277384438C107.76842912527232 198.73333277384438 125.24439060504619 169.37499952316284 145.63301233144907 169.37499952316284C166.02163405785194 169.37499952316284 183.49759553762584 198.73333277384438 203.88621726402872 198.73333277384438C224.2748389904316 198.73333277384438 241.75080047020546 194.21666611989338 262.13942219660834 194.21666611989338C282.5280439230112 194.21666611989338 300.0040054027851 153.56666623433432 320.392627129188 153.56666623433432C340.78124885559083 153.56666623433432 358.25721033536473 178.40833283106485 378.6458320617676 178.40833283106485C378.6458320617676 178.40833283106485 378.6458320617676 178.40833283106485 378.6458320617676 270.99999923706054M378.6458320617676 178.40833283106485C378.6458320617676 178.40833283106485 378.6458320617676 178.40833283106485 378.6458320617676 178.40833283106485 " fill="url(#SvgjsLinearGradient4662)" fillOpacity={1} id="SvgjsPath4666" index={1} pathfrom="M -1 270.99999923706054 L -1 270.99999923706054 L 87.37980739886945 270.99999923706054 L 145.63301233144907 270.99999923706054 L 203.88621726402872 270.99999923706054 L 262.13942219660834 270.99999923706054 L 320.392627129188 270.99999923706054 L 378.6458320617676 270.99999923706054" pathto="M 0 270.99999923706054 L 0 246.15833264033C 30.582932589604304 246.15833264033 56.79687480926514 198.73333277384438 87.37980739886945 198.73333277384438C 107.76842912527232 198.73333277384438 125.24439060504619 169.37499952316284 145.63301233144907 169.37499952316284C 166.02163405785194 169.37499952316284 183.49759553762584 198.73333277384438 203.88621726402872 198.73333277384438C 224.2748389904316 198.73333277384438 241.75080047020546 194.21666611989338 262.13942219660834 194.21666611989338C 282.5280439230112 194.21666611989338 300.0040054027851 153.56666623433432 320.392627129188 153.56666623433432C 340.78124885559083 153.56666623433432 358.25721033536473 178.40833283106485 378.6458320617676 178.40833283106485C 378.6458320617676 178.40833283106485 378.6458320617676 178.40833283106485 378.6458320617676 270.99999923706054M 378.6458320617676 178.40833283106485z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-area" clipPath="url(#gridRectMask3nkwlaxs)" d="M0 246.15833264033C30.582932589604304 246.15833264033 56.79687480926514 198.73333277384438 87.37980739886945 198.73333277384438C107.76842912527232 198.73333277384438 125.24439060504619 169.37499952316284 145.63301233144907 169.37499952316284C166.02163405785194 169.37499952316284 183.49759553762584 198.73333277384438 203.88621726402872 198.73333277384438C224.2748389904316 198.73333277384438 241.75080047020546 194.21666611989338 262.13942219660834 194.21666611989338C282.5280439230112 194.21666611989338 300.0040054027851 153.56666623433432 320.392627129188 153.56666623433432C340.78124885559083 153.56666623433432 358.25721033536473 178.40833283106485 378.6458320617676 178.40833283106485C378.6458320617676 178.40833283106485 378.6458320617676 178.40833283106485 378.6458320617676 178.40833283106485 " fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath4667" index={1} pathfrom="M -1 270.99999923706054 L -1 270.99999923706054 L 87.37980739886945 270.99999923706054 L 145.63301233144907 270.99999923706054 L 203.88621726402872 270.99999923706054 L 262.13942219660834 270.99999923706054 L 320.392627129188 270.99999923706054 L 378.6458320617676 270.99999923706054" pathto="M 0 246.15833264033C 30.582932589604304 246.15833264033 56.79687480926514 198.73333277384438 87.37980739886945 198.73333277384438C 107.76842912527232 198.73333277384438 125.24439060504619 169.37499952316284 145.63301233144907 169.37499952316284C 166.02163405785194 169.37499952316284 183.49759553762584 198.73333277384438 203.88621726402872 198.73333277384438C 224.2748389904316 198.73333277384438 241.75080047020546 194.21666611989338 262.13942219660834 194.21666611989338C 282.5280439230112 194.21666611989338 300.0040054027851 153.56666623433432 320.392627129188 153.56666623433432C 340.78124885559083 153.56666623433432 358.25721033536473 178.40833283106485 378.6458320617676 178.40833283106485" stroke="#00e396" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                              <g className="apexcharts-series-markers-wrap" data-realindex={1} id="SvgjsG4640">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker wr7yxzliwl no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#00e396" fillOpacity={1} id="SvgjsCircle4752" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG4612">
                                              <g className="apexcharts-data-labels" id="SvgjsG4613">
                                                <rect fill="#008ffb" height="15.333333969116211" id="SvgjsRect4668" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="-10.677083492279053" y="191.3249969482422" />
                                                <text className="apexcharts-datalabel" cx={0} cy="202.99166610081988" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4615" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x={0} y="202.99166610081988">
                                                  31
                                                </text>
                                                <rect fill="#008ffb" height="15.333333969116211" id="SvgjsRect4669" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="76.70272064208984" y={171} />
                                                <text className="apexcharts-datalabel" cx="87.37980739886945" cy="182.66666615804036" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4617" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="87.37980739886945" y="182.66666615804036">
                                                  40
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4618">
                                                <rect fill="#008ffb" height="15.333333969116211" id="SvgjsRect4670" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="134.9559326171875" y="198.10000610351562" />
                                                <text className="apexcharts-datalabel" cx="145.63301233144907" cy="209.7666660817464" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4620" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="145.63301233144907" y="209.7666660817464">
                                                  28
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4621">
                                                <rect fill="#008ffb" height="15.333333969116211" id="SvgjsRect4671" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="193.20913696289062" y="146.1583251953125" />
                                                <text className="apexcharts-datalabel" cx="203.88621726402872" cy="157.82499956130982" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4623" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="203.88621726402872" y="157.82499956130982">
                                                  51
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4624">
                                                <rect fill="#008ffb" height="15.333333969116211" id="SvgjsRect4672" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="251.46237182617188" y="166.4833221435547" />
                                                <text className="apexcharts-datalabel" cx="262.13942219660834" cy="178.14999950408935" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4626" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="262.13942219660834" y="178.14999950408935">
                                                  42
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4627">
                                                <rect fill="#008ffb" height="15.333333969116211" id="SvgjsRect4673" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="306.37701416015625" y="15.17500114440918" />
                                                <text className="apexcharts-datalabel" cx="320.392627129188" cy="26.841666596730562" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4629" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="320.392627129188" y="26.841666596730562">
                                                  109
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4630">
                                                <rect fill="#008ffb" height="15.333333969116211" id="SvgjsRect4674" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="364.6302185058594" y="35.5" />
                                                <text className="apexcharts-datalabel" cx="378.6458320617676" cy="47.16666653951009" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4632" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="378.6458320617676" y="47.16666653951009">
                                                  100
                                                </text>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG4641">
                                              <g className="apexcharts-data-labels" id="SvgjsG4642">
                                                <rect fill="#00e396" height="15.333333969116211" id="SvgjsRect4675" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="20.6875" x="-10.34375" y="236.49166870117188" />
                                                <text className="apexcharts-datalabel" cx={0} cy="248.15833264033" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4644" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x={0} y="248.15833264033">
                                                  11
                                                </text>
                                                <rect fill="#00e396" height="15.333333969116211" id="SvgjsRect4676" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="76.70272064208984" y="189.06668090820312" />
                                                <text className="apexcharts-datalabel" cx="87.37980739886945" cy="200.73333277384438" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4646" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="87.37980739886945" y="200.73333277384438">
                                                  32
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4647">
                                                <rect fill="#00e396" height="15.333333969116211" id="SvgjsRect4677" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="134.9559326171875" y="159.70834350585938" />
                                                <text className="apexcharts-datalabel" cx="145.63301233144907" cy="171.37499952316284" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4649" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="145.63301233144907" y="171.37499952316284">
                                                  45
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4650">
                                                <rect fill="#00e396" height="15.333333969116211" id="SvgjsRect4678" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="193.20913696289062" y="189.06668090820312" />
                                                <text className="apexcharts-datalabel" cx="203.88621726402872" cy="200.73333277384438" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4652" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="203.88621726402872" y="200.73333277384438">
                                                  32
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4653">
                                                <rect fill="#00e396" height="15.333333969116211" id="SvgjsRect4679" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="251.46237182617188" y="184.54998779296875" />
                                                <text className="apexcharts-datalabel" cx="262.13942219660834" cy="196.21666611989338" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4655" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="262.13942219660834" y="196.21666611989338">
                                                  34
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4656">
                                                <rect fill="#00e396" height="15.333333969116211" id="SvgjsRect4680" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="309.715576171875" y="143.90000915527344" />
                                                <text className="apexcharts-datalabel" cx="320.392627129188" cy="155.56666623433432" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4658" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="320.392627129188" y="155.56666623433432">
                                                  52
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4659">
                                                <rect fill="#00e396" height="15.333333969116211" id="SvgjsRect4681" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="367.96875" y="168.74168395996094" />
                                                <text className="apexcharts-datalabel" cx="378.6458320617676" cy="180.40833283106485" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4661" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="378.6458320617676" y="180.40833283106485">
                                                  41
                                                </text>
                                              </g>
                                            </g>
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine4705" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="378.6458320617676" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine4706" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="378.6458320617676" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG4707" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG4708" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG4709" />
                                          <g className="apexcharts-xaxis" id="SvgjsG4710" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG4711" transform="translate(0, -4)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4713" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="29.126602466289814" y="299.99999923706054">
                                                <tspan id="SvgjsTspan4714">
                                                  19:00
                                                </tspan>
                                                <title>19:00</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4716" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="87.37980739886945" y="299.99999923706054">
                                                <tspan id="SvgjsTspan4717">
                                                  20:00
                                                </tspan>
                                                <title>20:00</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4719" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="145.63301233144907" y="299.99999923706054">
                                                <tspan id="SvgjsTspan4720">
                                                  21:00
                                                </tspan>
                                                <title>21:00</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4722" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="203.8862172640287" y="299.99999923706054">
                                                <tspan id="SvgjsTspan4723">
                                                  22:00
                                                </tspan>
                                                <title>22:00</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4725" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="262.13942219660834" y="299.99999923706054">
                                                <tspan id="SvgjsTspan4726">
                                                  23:00
                                                </tspan>
                                                <title>23:00</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4728" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="320.392627129188" y="299.99999923706054">
                                                <tspan id="SvgjsTspan4729">
                                                  19 Sep
                                                </tspan>
                                                <title>19 Sep</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText4731" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="378.64583206176763" y="299.99999923706054">
                                                <tspan id="SvgjsTspan4732" />
                                                <title />
                                              </text>
                                            </g>
                                          </g>
                                          <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect4753" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                          <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect4754" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        </g>
                                      </svg>
                                      <div className="apexcharts-tooltip apexcharts-theme-light">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
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
                                      </div>
                                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                        <div className="apexcharts-xaxistooltip-text" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                      <div className="apexcharts-toolbar" style={{top: '0px', right: '3px'}}>
                                        <div className="apexcharts-zoomin-icon" title="Zoom In">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-zoomout-icon" title="Zoom Out">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-zoom-icon apexcharts-selected" title="Selection Zoom">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-pan-icon" title="Panning">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <defs>
                                              <path d="M0 0h24v24H0z" id="a" />
                                            </defs>
                                            <clipPath id="b">
                                              <use overflow="visible" xlinkHref="#a" />
                                            </clipPath>
                                            <path clipPath="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-reset-icon" title="Reset Zoom">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                            <path d="M0 0h24v24H0z" fill="none" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-menu-icon" title="Menu">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-menu">
                                          <div className="apexcharts-menu-item exportSVG" title="Download SVG">
                                            Download SVG
                                          </div>
                                          <div className="apexcharts-menu-item exportPNG" title="Download PNG">
                                            Download PNG
                                          </div>
                                          <div className="apexcharts-menu-item exportCSV" title="Download CSV">
                                            Download CSV
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c466 className="row clearfix">
                        <div _ngcontent-oko-c466 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c466 className="card">
                            <div _ngcontent-oko-c466 className="header">
                              <h2 _ngcontent-oko-c466>Pie Chart</h2>
                            </div>
                            <div _ngcontent-oko-c466 className="body">
                              <div _ngcontent-oko-c466 style={{textAlign: 'center'}}>
                                <apx-chart _ngcontent-oko-c466 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{minHeight: '220.7px'}}>
                                    <div className="apexcharts-canvas apexchartsjuvk5zsp apexcharts-theme-light" id="apexchartsjuvk5zsp" style={{width: '360px', height: '220.7px'}}>
                                      <svg className="apexcharts-svg" height="220.70000000000002" id="SvgjsSvg4755" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={360} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <foreignObject height="220.70000000000002" width={360} x={0} y={0}>
                                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-right" style={{position: 'absolute', left: 'auto', top: '24px', right: '5px'}} xmlns="http://www.w3.org/1999/xhtml">
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="series-1" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{background: 'rgb(0,143,251) !important', color: 'rgb(0, 143, 251)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="series-1" i={0} rel={1} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                series-1
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="series-2" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{background: 'rgb(0,227,150) !important', color: 'rgb(0, 227, 150)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="series-2" i={1} rel={2} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                series-2
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={3} seriesname="series-3" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={3} style={{background: 'rgb(254,176,25) !important', color: 'rgb(254, 176, 25)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="series-3" i={2} rel={3} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                series-3
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={4} seriesname="series-4" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={4} style={{background: 'rgb(255,69,96) !important', color: 'rgb(255, 69, 96)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="series-4" i={3} rel={4} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                series-4
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={5} seriesname="series-5" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={5} style={{background: 'rgb(119,93,208) !important', color: 'rgb(119, 93, 208)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="series-5" i={4} rel={5} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                series-5
                                              </span>
                                            </div>
                                          </div>
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                      .apexcharts-legend {\n                                        display: flex;\n                                        overflow: auto;\n                                        padding: 0 10px;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom,\n                                      .apexcharts-legend.apx-legend-position-top {\n                                        flex-wrap: wrap;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        flex-direction: column;\n                                        bottom: 0;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        justify-content: flex-start;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                        justify-content: center;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                        justify-content: flex-end;\n                                      }\n                                      .apexcharts-legend-series {\n                                        cursor: pointer;\n                                        line-height: normal;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apx-legend-position-top\n                                        .apexcharts-legend-series {\n                                        display: flex;\n                                        align-items: center;\n                                      }\n                                      .apexcharts-legend-text {\n                                        position: relative;\n                                        font-size: 14px;\n                                      }\n                                      .apexcharts-legend-text *,\n                                      .apexcharts-legend-marker * {\n                                        pointer-events: none;\n                                      }\n                                      .apexcharts-legend-marker {\n                                        position: relative;\n                                        display: inline-block;\n                                        cursor: pointer;\n                                        margin-right: 3px;\n                                        border-style: solid;\n                                      }\n\n                                      .apexcharts-legend.apexcharts-align-right\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apexcharts-align-left\n                                        .apexcharts-legend-series {\n                                        display: inline-block;\n                                      }\n                                      .apexcharts-legend-series.apexcharts-no-click {\n                                        cursor: auto;\n                                      }\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-zero-series,\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-null-series {\n                                        display: none !important;\n                                      }\n                                      .apexcharts-inactive-legend {\n                                        opacity: 0.45;\n                                      }\n                                    " }} />
                                        </foreignObject>
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG4757" transform="translate(22, 0)">
                                          <defs id="SvgjsDefs4756">
                                            <clipPath id="gridRectMaskjuvk5zsp">
                                              <rect fill="#fff" height={242} id="SvgjsRect4759" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={224} x={-3} y={-1} />
                                            </clipPath>
                                            <clipPath id="forecastMaskjuvk5zsp" />
                                            <clipPath id="nonForecastMaskjuvk5zsp" />
                                            <clipPath id="gridRectMarkerMaskjuvk5zsp">
                                              <rect fill="#fff" height={244} id="SvgjsRect4760" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={222} x={-2} y={-2} />
                                            </clipPath>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter4768" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.45" id="SvgjsFeFlood4769" in="SourceGraphic" result="SvgjsFeFlood4769Out" />
                                              <feComposite id="SvgjsFeComposite4770" in="SvgjsFeFlood4769Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite4770Out" />
                                              <feOffset dx={1} dy={1} id="SvgjsFeOffset4771" in="SvgjsFeComposite4770Out" result="SvgjsFeOffset4771Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur4772" in="SvgjsFeOffset4771Out" result="SvgjsFeGaussianBlur4772Out" stdDeviation={1 } />
                                              <feMerge id="SvgjsFeMerge4773" in="SourceGraphic" result="SvgjsFeMerge4773Out">
                                                <feMergeNode id="SvgjsFeMergeNode4774" in="SvgjsFeGaussianBlur4772Out" />
                                                <feMergeNode id="SvgjsFeMergeNode4775" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend4776" in="SourceGraphic" in2="SvgjsFeMerge4773Out" mode="normal" result="SvgjsFeBlend4776Out" />
                                            </filter>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter4781" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.45" id="SvgjsFeFlood4782" in="SourceGraphic" result="SvgjsFeFlood4782Out" />
                                              <feComposite id="SvgjsFeComposite4783" in="SvgjsFeFlood4782Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite4783Out" />
                                              <feOffset dx={1} dy={1} id="SvgjsFeOffset4784" in="SvgjsFeComposite4783Out" result="SvgjsFeOffset4784Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur4785" in="SvgjsFeOffset4784Out" result="SvgjsFeGaussianBlur4785Out" stdDeviation={1 } />
                                              <feMerge id="SvgjsFeMerge4786" in="SourceGraphic" result="SvgjsFeMerge4786Out">
                                                <feMergeNode id="SvgjsFeMergeNode4787" in="SvgjsFeGaussianBlur4785Out" />
                                                <feMergeNode id="SvgjsFeMergeNode4788" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend4789" in="SourceGraphic" in2="SvgjsFeMerge4786Out" mode="normal" result="SvgjsFeBlend4789Out" />
                                            </filter>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter4794" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.45" id="SvgjsFeFlood4795" in="SourceGraphic" result="SvgjsFeFlood4795Out" />
                                              <feComposite id="SvgjsFeComposite4796" in="SvgjsFeFlood4795Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite4796Out" />
                                              <feOffset dx={1} dy={1} id="SvgjsFeOffset4797" in="SvgjsFeComposite4796Out" result="SvgjsFeOffset4797Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur4798" in="SvgjsFeOffset4797Out" result="SvgjsFeGaussianBlur4798Out" stdDeviation={1 } />
                                              <feMerge id="SvgjsFeMerge4799" in="SourceGraphic" result="SvgjsFeMerge4799Out">
                                                <feMergeNode id="SvgjsFeMergeNode4800" in="SvgjsFeGaussianBlur4798Out" />
                                                <feMergeNode id="SvgjsFeMergeNode4801" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend4802" in="SourceGraphic" in2="SvgjsFeMerge4799Out" mode="normal" result="SvgjsFeBlend4802Out" />
                                            </filter>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter4807" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.45" id="SvgjsFeFlood4808" in="SourceGraphic" result="SvgjsFeFlood4808Out" />
                                              <feComposite id="SvgjsFeComposite4809" in="SvgjsFeFlood4808Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite4809Out" />
                                              <feOffset dx={1} dy={1} id="SvgjsFeOffset4810" in="SvgjsFeComposite4809Out" result="SvgjsFeOffset4810Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur4811" in="SvgjsFeOffset4810Out" result="SvgjsFeGaussianBlur4811Out" stdDeviation={1 } />
                                              <feMerge id="SvgjsFeMerge4812" in="SourceGraphic" result="SvgjsFeMerge4812Out">
                                                <feMergeNode id="SvgjsFeMergeNode4813" in="SvgjsFeGaussianBlur4811Out" />
                                                <feMergeNode id="SvgjsFeMergeNode4814" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend4815" in="SourceGraphic" in2="SvgjsFeMerge4812Out" mode="normal" result="SvgjsFeBlend4815Out" />
                                            </filter>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter4820" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.45" id="SvgjsFeFlood4821" in="SourceGraphic" result="SvgjsFeFlood4821Out" />
                                              <feComposite id="SvgjsFeComposite4822" in="SvgjsFeFlood4821Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite4822Out" />
                                              <feOffset dx={1} dy={1} id="SvgjsFeOffset4823" in="SvgjsFeComposite4822Out" result="SvgjsFeOffset4823Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur4824" in="SvgjsFeOffset4823Out" result="SvgjsFeGaussianBlur4824Out" stdDeviation={1 } />
                                              <feMerge id="SvgjsFeMerge4825" in="SourceGraphic" result="SvgjsFeMerge4825Out">
                                                <feMergeNode id="SvgjsFeMergeNode4826" in="SvgjsFeGaussianBlur4824Out" />
                                                <feMergeNode id="SvgjsFeMergeNode4827" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend4828" in="SourceGraphic" in2="SvgjsFeMerge4825Out" mode="normal" result="SvgjsFeBlend4828Out" />
                                            </filter>
                                          </defs>
                                          <g className="apexcharts-pie" id="SvgjsG4761">
                                            <g id="SvgjsG4762" transform="translate(0, 0) scale(1)">
                                              <g className="apexcharts-slices" id="SvgjsG4763">
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={0} id="SvgjsG4764" rel={1} seriesname="series-1">
                                                  <path className="apexcharts-pie-area apexcharts-pie-slice-0" d="M 109 8.658536585365837 A 100.34146341463416 100.34146341463416 0 0 1 209.33751210734195 108.10952580083706 L 109 109 L 109 8.658536585365837" data-angle="89.49152542372882" data-pathorig="M 109 8.658536585365837 A 100.34146341463416 100.34146341463416 0 0 1 209.33751210734195 108.10952580083706 L 109 109 L 109 8.658536585365837" data-startangle={0} data-strokewidth={2} data-value={44} fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath4765" index={0} j={0} stroke="#ffffff" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={1} id="SvgjsG4777" rel={2} seriesname="series-2">
                                                  <path className="apexcharts-pie-area apexcharts-pie-slice-1" d="M 209.33751210734195 108.10952580083706 A 100.34146341463416 100.34146341463416 0 0 1 72.4595949612168 202.45163497655903 L 109 109 L 209.33751210734195 108.10952580083706" data-angle="111.86440677966102" data-pathorig="M 209.33751210734195 108.10952580083706 A 100.34146341463416 100.34146341463416 0 0 1 72.4595949612168 202.45163497655903 L 109 109 L 209.33751210734195 108.10952580083706" data-startangle="89.49152542372882" data-strokewidth={2} data-value={55} fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath4778" index={0} j={1} stroke="#ffffff" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={2} id="SvgjsG4790" rel={3} seriesname="series-3">
                                                  <path className="apexcharts-pie-area apexcharts-pie-slice-2" d="M 72.4595949612168 202.45163497655903 A 100.34146341463416 100.34146341463416 0 0 1 34.67057055243015 176.40582466070055 L 109 109 L 72.4595949612168 202.45163497655903" data-angle="26.440677966101703" data-pathorig="M 72.4595949612168 202.45163497655903 A 100.34146341463416 100.34146341463416 0 0 1 34.67057055243015 176.40582466070055 L 109 109 L 72.4595949612168 202.45163497655903" data-startangle="201.35593220338984" data-strokewidth={2} data-value={13} fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath4791" index={0} j={2} stroke="#ffffff" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={3} id="SvgjsG4803" rel={4} seriesname="series-4">
                                                  <path className="apexcharts-pie-area apexcharts-pie-slice-3" d="M 34.67057055243015 176.40582466070055 A 100.34146341463416 100.34146341463416 0 0 1 38.3634025596031 37.73373601602452 L 109 109 L 34.67057055243015 176.40582466070055" data-angle="87.4576271186441" data-pathorig="M 34.67057055243015 176.40582466070055 A 100.34146341463416 100.34146341463416 0 0 1 38.3634025596031 37.73373601602452 L 109 109 L 34.67057055243015 176.40582466070055" data-startangle="227.79661016949154" data-strokewidth={2} data-value={43} fill="rgba(255,69,96,1)" fillOpacity={1} id="SvgjsPath4804" index={0} j={3} stroke="#ffffff" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={4} id="SvgjsG4816" rel={5} seriesname="series-5">
                                                  <path className="apexcharts-pie-area apexcharts-pie-slice-4" d="M 38.3634025596031 37.73373601602452 A 100.34146341463416 100.34146341463416 0 0 1 108.98248711096035 8.65853811365372 L 109 109 L 38.3634025596031 37.73373601602452" data-angle="44.745762711864415" data-pathorig="M 38.3634025596031 37.73373601602452 A 100.34146341463416 100.34146341463416 0 0 1 108.98248711096035 8.65853811365372 L 109 109 L 38.3634025596031 37.73373601602452" data-startangle="315.25423728813564" data-strokewidth={2} data-value={22} fill="rgba(119,93,208,1)" fillOpacity={1} id="SvgjsPath4817" index={0} j={4} stroke="#ffffff" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-datalabels" id="SvgjsG4766">
                                                  <text className="apexcharts-text apexcharts-pie-label" dominantBaseline="auto" fill="#ffffff" filter="url(#SvgjsFilter4768)" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4767" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="165.50927795231755" y="51.986988812819654">
                                                    24.9%
                                                  </text>
                                                </g>
                                                <g className="apexcharts-datalabels" id="SvgjsG4779">
                                                  <text className="apexcharts-text apexcharts-pie-label" dominantBaseline="auto" fill="#ffffff" filter="url(#SvgjsFilter4781)" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4780" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="154.5552489779889" y="175.09463843516565">
                                                    31.1%
                                                  </text>
                                                </g>
                                                <g className="apexcharts-datalabels" id="SvgjsG4792">
                                                  <text className="apexcharts-text apexcharts-pie-label" dominantBaseline="auto" fill="#ffffff" filter="url(#SvgjsFilter4794)" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4793" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="63.444751022011076" y="175.09463843516562">
                                                    7.3%
                                                  </text>
                                                </g>
                                                <g className="apexcharts-datalabels" id="SvgjsG4805">
                                                  <text className="apexcharts-text apexcharts-pie-label" dominantBaseline="auto" fill="#ffffff" filter="url(#SvgjsFilter4807)" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4806" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="28.755277187085184" y="106.86308633765836">
                                                    24.3%
                                                  </text>
                                                </g>
                                                <g className="apexcharts-datalabels" id="SvgjsG4818">
                                                  <text className="apexcharts-text apexcharts-pie-label" dominantBaseline="auto" fill="#ffffff" filter="url(#SvgjsFilter4820)" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4819" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="78.44540330519357" y="34.76928829561476">
                                                    12.4%
                                                  </text>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine4829" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={218} y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine4830" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={218} y1={0} y2={0} />
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG4758" />
                                      </svg>
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
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c466 className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c466 className="card">
                            <div _ngcontent-oko-c466 className="header">
                              <h2 _ngcontent-oko-c466>Column Chart</h2>
                            </div>
                            <div _ngcontent-oko-c466 className="body">
                              <div _ngcontent-oko-c466 style={{textAlign: 'center'}}>
                                <apx-chart _ngcontent-oko-c466 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{minHeight: '365px'}}>
                                    <div className="apexcharts-canvas apexchartsk7cn71hp apexcharts-theme-light" id="apexchartsk7cn71hp" style={{width: '434px', height: '350px'}}>
                                      <svg className="apexcharts-svg apexcharts-zoomable" height={350} id="SvgjsSvg4831" style={{background: 'transparent'}} transform="translate(0, 0)" version="1.1" width={434} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <foreignObject height={350} width={434} x={0} y={0}>
                                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" style={{inset: 'auto 0px 1px', position: 'absolute', maxHeight: '175px'}} xmlns="http://www.w3.org/1999/xhtml">
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="PRODUCTxA" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{background: 'rgb(0,143,251) !important', color: 'rgb(0, 143, 251)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '2px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="PRODUCT%20A" i={0} rel={1} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                PRODUCT A
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="PRODUCTxB" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{background: 'rgb(0,227,150) !important', color: 'rgb(0, 227, 150)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '2px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="PRODUCT%20B" i={1} rel={2} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                PRODUCT B
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={3} seriesname="PRODUCTxC" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={3} style={{background: 'rgb(254,176,25) !important', color: 'rgb(254, 176, 25)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '2px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="PRODUCT%20C" i={2} rel={3} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                PRODUCT C
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={4} seriesname="PRODUCTxD" style={{margin: '2px 5px'}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={4} style={{background: 'rgb(255,69,96) !important', color: 'rgb(255, 69, 96)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '2px'}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="PRODUCT%20D" i={3} rel={4} style={{color: 'rgb(154, 160, 172)', fontSize: '12px', fontWeight: 400, fontFamily: 'Helvetica, Arial,sans-serif'}}>
                                                PRODUCT D
                                              </span>
                                            </div>
                                          </div>
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                      .apexcharts-legend {\n                                        display: flex;\n                                        overflow: auto;\n                                        padding: 0 10px;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom,\n                                      .apexcharts-legend.apx-legend-position-top {\n                                        flex-wrap: wrap;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        flex-direction: column;\n                                        bottom: 0;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        justify-content: flex-start;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                        justify-content: center;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                        justify-content: flex-end;\n                                      }\n                                      .apexcharts-legend-series {\n                                        cursor: pointer;\n                                        line-height: normal;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apx-legend-position-top\n                                        .apexcharts-legend-series {\n                                        display: flex;\n                                        align-items: center;\n                                      }\n                                      .apexcharts-legend-text {\n                                        position: relative;\n                                        font-size: 14px;\n                                      }\n                                      .apexcharts-legend-text *,\n                                      .apexcharts-legend-marker * {\n                                        pointer-events: none;\n                                      }\n                                      .apexcharts-legend-marker {\n                                        position: relative;\n                                        display: inline-block;\n                                        cursor: pointer;\n                                        margin-right: 3px;\n                                        border-style: solid;\n                                      }\n\n                                      .apexcharts-legend.apexcharts-align-right\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apexcharts-align-left\n                                        .apexcharts-legend-series {\n                                        display: inline-block;\n                                      }\n                                      .apexcharts-legend-series.apexcharts-no-click {\n                                        cursor: auto;\n                                      }\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-zero-series,\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-null-series {\n                                        display: none !important;\n                                      }\n                                      .apexcharts-inactive-legend {\n                                        opacity: 0.45;\n                                      }\n                                    " }} />
                                        </foreignObject>
                                        <g className="apexcharts-annotations" id="SvgjsG4834" />
                                        <g className="apexcharts-yaxis" id="SvgjsG5050" rel={0} transform="translate(15.354167938232422, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG5051">
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText5053" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="31.4">
                                              <tspan id="SvgjsTspan5054">120</tspan>
                                              <title>120</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText5056" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="97.7566664094925">
                                              <tspan id="SvgjsTspan5057">90</tspan>
                                              <title>90</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText5059" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="164.113332818985">
                                              <tspan id="SvgjsTspan5060">60</tspan>
                                              <title>60</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText5062" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="230.46999922847746">
                                              <tspan id="SvgjsTspan5063">30</tspan>
                                              <title>30</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText5065" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="end" x={20} y="296.82666563796994">
                                              <tspan id="SvgjsTspan5066">0</tspan>
                                              <title>0</title>
                                            </text>
                                          </g>
                                        </g>
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG4833" transform="translate(89.69444559733071, 30)">
                                          <defs id="SvgjsDefs4832">
                                            <linearGradient id="SvgjsLinearGradient4837" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop4838" offset={0} stopColor="rgba(216,227,240,0.4)" stopOpacity="0.4" />
                                              <stop id="SvgjsStop4839" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop4840" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                            <clipPath id="gridRectMaskk7cn71hp">
                                              <rect fill="#fff" height="265.42666563796996" id="SvgjsRect4842" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="382.64583206176763" x="-42.3402776590983" y={0} />
                                            </clipPath>
                                            <clipPath id="forecastMaskk7cn71hp" />
                                            <clipPath id="nonForecastMaskk7cn71hp" />
                                            <clipPath id="gridRectMarkerMaskk7cn71hp">
                                              <rect fill="#fff" height="269.42666563796996" id="SvgjsRect4843" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="301.965276743571" x={-2} y={-2} />
                                            </clipPath>
                                          </defs>
                                          <rect className="apexcharts-xcrosshairs" fill="url(#SvgjsLinearGradient4837)" fillOpacity="0.9" filter="none" height="265.42666563796996" id="SvgjsRect4841" opacity={1} rx={0} ry={0} strokeDasharray={3} strokeWidth={0} width="41.71513874409994" x={0} y={0} y2="265.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine5006" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine5008" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="59.5930553487142" x2="59.5930553487142" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine5010" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="119.1861106974284" x2="119.1861106974284" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine5012" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="178.77916604614262" x2="178.77916604614262" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine5014" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="238.3722213948568" x2="238.3722213948568" y1="266.42666563796996" y2="272.42666563796996" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine5016" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="297.965276743571" x2="297.965276743571" y1="266.42666563796996" y2="272.42666563796996" />
                                          <g className="apexcharts-grid" id="SvgjsG5001">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG5002">
                                              <line className="apexcharts-gridline" id="SvgjsLine5018" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="-40.3402776590983" x2="338.3055544026693" y1="66.35666640949249" y2="66.35666640949249" />
                                              <line className="apexcharts-gridline" id="SvgjsLine5019" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="-40.3402776590983" x2="338.3055544026693" y1="132.71333281898498" y2="132.71333281898498" />
                                              <line className="apexcharts-gridline" id="SvgjsLine5020" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="-40.3402776590983" x2="338.3055544026693" y1="199.06999922847746" y2="199.06999922847746" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG5003">
                                              <line className="apexcharts-gridline" id="SvgjsLine5005" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine5007" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="59.5930553487142" x2="59.5930553487142" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine5009" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="119.1861106974284" x2="119.1861106974284" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine5011" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="178.77916604614262" x2="178.77916604614262" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine5013" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="238.3722213948568" x2="238.3722213948568" y1={0} y2="265.42666563796996" />
                                              <line className="apexcharts-gridline" id="SvgjsLine5015" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="297.965276743571" x2="297.965276743571" y1={0} y2="265.42666563796996" />
                                            </g>
                                            <line id="SvgjsLine5023" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="297.965276743571" y1="265.42666563796996" y2="265.42666563796996" />
                                            <line id="SvgjsLine5022" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="265.42666563796996" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG5004">
                                            <line className="apexcharts-gridline" id="SvgjsLine5017" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="-40.3402776590983" x2="338.3055544026693" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine5021" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="-40.3402776590983" x2="338.3055544026693" y1="265.42666563796996" y2="265.42666563796996" />
                                            <line id="SvgjsLine5049" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1="-40.3402776590983" x2="338.3055544026693" y1="266.42666563796996" y2="266.42666563796996" />
                                          </g>
                                          <g className="apexcharts-bar-series apexcharts-plot-series" id="SvgjsG4844">
                                            <g className="apexcharts-series" data-realindex={0} id="SvgjsG4845" rel={1} seriesname="PRODUCTxA">
                                              <path barheight="97.32311073392232" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="20.857569372049966" cy="168.10355490404766" d="M-20.85756937204997 265.42766563796994L-20.85756937204997 168.10455490404766L20.85756937204997 168.10455490404766L20.85756937204997 265.42766563796994L-20.85756937204997 265.42766563796994C-20.85756937204997 265.42766563796994 -20.85756937204997 265.42766563796994 -20.85756937204997 265.42766563796994C-20.85756937204997 265.42766563796994 -20.85756937204997 265.42766563796994 -20.85756937204997 265.42766563796994C-20.85756937204997 265.42766563796994 -20.85756937204997 265.42766563796994 -20.85756937204997 265.42766563796994C-20.85756937204997 265.42766563796994 -20.85756937204997 265.42766563796994 -20.85756937204997 265.42766563796994 " fill="rgba(0,143,251,0.85)" fillOpacity={1} id="SvgjsPath4849" index={0} j={0} pathfrom="M -20.85756937204997 265.42766563796994 L -20.85756937204997 265.42766563796994 L 20.85756937204997 265.42766563796994 L 20.85756937204997 265.42766563796994 L 20.85756937204997 265.42766563796994 L 20.85756937204997 265.42766563796994 L 20.85756937204997 265.42766563796994 L -20.85756937204997 265.42766563796994 Z" pathto="M -20.85756937204997 265.42766563796994 L -20.85756937204997 168.10455490404766 L 20.85756937204997 168.10455490404766 L 20.85756937204997 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={44} />
                                              <path barheight="121.6538884174029" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="80.45062472076415" cy="143.77277722056706" d="M38.73548597666422 265.42766563796994L38.73548597666422 143.77377722056707L80.45062472076415 143.77377722056707L80.45062472076415 265.42766563796994L38.73548597666422 265.42766563796994C38.73548597666422 265.42766563796994 38.73548597666422 265.42766563796994 38.73548597666422 265.42766563796994C38.73548597666422 265.42766563796994 38.73548597666422 265.42766563796994 38.73548597666422 265.42766563796994C38.73548597666422 265.42766563796994 38.73548597666422 265.42766563796994 38.73548597666422 265.42766563796994C38.73548597666422 265.42766563796994 38.73548597666422 265.42766563796994 38.73548597666422 265.42766563796994 " fill="rgba(0,143,251,0.85)" fillOpacity={1} id="SvgjsPath4855" index={0} j={1} pathfrom="M 38.73548597666422 265.42766563796994 L 38.73548597666422 265.42766563796994 L 80.45062472076415 265.42766563796994 L 80.45062472076415 265.42766563796994 L 80.45062472076415 265.42766563796994 L 80.45062472076415 265.42766563796994 L 80.45062472076415 265.42766563796994 L 38.73548597666422 265.42766563796994 Z" pathto="M 38.73548597666422 265.42766563796994 L 38.73548597666422 143.77377722056707 L 80.45062472076415 143.77377722056707 L 80.45062472076415 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={55} />
                                              <path barheight="90.68744409297307" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="140.04368006947837" cy="174.7392215449969" d="M98.32854132537842 265.42766563796994L98.32854132537842 174.7402215449969L140.04368006947837 174.7402215449969L140.04368006947837 265.42766563796994L98.32854132537842 265.42766563796994C98.32854132537842 265.42766563796994 98.32854132537842 265.42766563796994 98.32854132537842 265.42766563796994C98.32854132537842 265.42766563796994 98.32854132537842 265.42766563796994 98.32854132537842 265.42766563796994C98.32854132537842 265.42766563796994 98.32854132537842 265.42766563796994 98.32854132537842 265.42766563796994C98.32854132537842 265.42766563796994 98.32854132537842 265.42766563796994 98.32854132537842 265.42766563796994 " fill="rgba(0,143,251,0.85)" fillOpacity={1} id="SvgjsPath4861" index={0} j={2} pathfrom="M 98.32854132537842 265.42766563796994 L 98.32854132537842 265.42766563796994 L 140.04368006947837 265.42766563796994 L 140.04368006947837 265.42766563796994 L 140.04368006947837 265.42766563796994 L 140.04368006947837 265.42766563796994 L 140.04368006947837 265.42766563796994 L 98.32854132537842 265.42766563796994 Z" pathto="M 98.32854132537842 265.42766563796994 L 98.32854132537842 174.7402215449969 L 140.04368006947837 174.7402215449969 L 140.04368006947837 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={41} />
                                              <path barheight="148.19655498119988" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="199.63673541819256" cy="117.23011065677008" d="M157.92159667409263 265.42766563796994L157.92159667409263 117.23111065677008L199.63673541819256 117.23111065677008L199.63673541819256 265.42766563796994L157.92159667409263 265.42766563796994C157.92159667409263 265.42766563796994 157.92159667409263 265.42766563796994 157.92159667409263 265.42766563796994C157.92159667409263 265.42766563796994 157.92159667409263 265.42766563796994 157.92159667409263 265.42766563796994C157.92159667409263 265.42766563796994 157.92159667409263 265.42766563796994 157.92159667409263 265.42766563796994C157.92159667409263 265.42766563796994 157.92159667409263 265.42766563796994 157.92159667409263 265.42766563796994 " fill="rgba(0,143,251,0.85)" fillOpacity={1} id="SvgjsPath4867" index={0} j={3} pathfrom="M 157.92159667409263 265.42766563796994 L 157.92159667409263 265.42766563796994 L 199.63673541819256 265.42766563796994 L 199.63673541819256 265.42766563796994 L 199.63673541819256 265.42766563796994 L 199.63673541819256 265.42766563796994 L 199.63673541819256 265.42766563796994 L 157.92159667409263 265.42766563796994 Z" pathto="M 157.92159667409263 265.42766563796994 L 157.92159667409263 117.23111065677008 L 199.63673541819256 117.23111065677008 L 199.63673541819256 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={67} />
                                              <path barheight="48.66155536696116" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="259.2297907669068" cy="216.7651102710088" d="M217.5146520228068 265.42766563796994L217.5146520228068 216.7661102710088L259.2297907669068 216.7661102710088L259.2297907669068 265.42766563796994L217.5146520228068 265.42766563796994C217.5146520228068 265.42766563796994 217.5146520228068 265.42766563796994 217.5146520228068 265.42766563796994C217.5146520228068 265.42766563796994 217.5146520228068 265.42766563796994 217.5146520228068 265.42766563796994C217.5146520228068 265.42766563796994 217.5146520228068 265.42766563796994 217.5146520228068 265.42766563796994C217.5146520228068 265.42766563796994 217.5146520228068 265.42766563796994 217.5146520228068 265.42766563796994 " fill="rgba(0,143,251,0.85)" fillOpacity={1} id="SvgjsPath4873" index={0} j={4} pathfrom="M 217.5146520228068 265.42766563796994 L 217.5146520228068 265.42766563796994 L 259.2297907669068 265.42766563796994 L 259.2297907669068 265.42766563796994 L 259.2297907669068 265.42766563796994 L 259.2297907669068 265.42766563796994 L 259.2297907669068 265.42766563796994 L 217.5146520228068 265.42766563796994 Z" pathto="M 217.5146520228068 265.42766563796994 L 217.5146520228068 216.7661102710088 L 259.2297907669068 216.7661102710088 L 259.2297907669068 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={22} />
                                              <path barheight="95.1112218536059" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="318.82284611562096" cy="170.31544378436405" d="M277.10770737152103 265.42766563796994L277.10770737152103 170.31644378436405L318.82284611562096 170.31644378436405L318.82284611562096 265.42766563796994L277.10770737152103 265.42766563796994C277.10770737152103 265.42766563796994 277.10770737152103 265.42766563796994 277.10770737152103 265.42766563796994C277.10770737152103 265.42766563796994 277.10770737152103 265.42766563796994 277.10770737152103 265.42766563796994C277.10770737152103 265.42766563796994 277.10770737152103 265.42766563796994 277.10770737152103 265.42766563796994C277.10770737152103 265.42766563796994 277.10770737152103 265.42766563796994 277.10770737152103 265.42766563796994 " fill="rgba(0,143,251,0.85)" fillOpacity={1} id="SvgjsPath4879" index={0} j={5} pathfrom="M 277.10770737152103 265.42766563796994 L 277.10770737152103 265.42766563796994 L 318.82284611562096 265.42766563796994 L 318.82284611562096 265.42766563796994 L 318.82284611562096 265.42766563796994 L 318.82284611562096 265.42766563796994 L 318.82284611562096 265.42766563796994 L 277.10770737152103 265.42766563796994 Z" pathto="M 277.10770737152103 265.42766563796994 L 277.10770737152103 170.31644378436405 L 318.82284611562096 170.31644378436405 L 318.82284611562096 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={43} />
                                              <g className="apexcharts-bar-goals-markers" id="SvgjsG4847" style={{pointerEvents: 'none'}}>
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4848" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4854" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4860" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4866" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4872" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4878" />
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-realindex={1} id="SvgjsG4884" rel={2} seriesname="PRODUCTxB">
                                              <path barheight="28.75455544411341" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="20.857569372049966" cy="139.34999945993425" d="M-20.85756937204997 168.10555490404766L-20.85756937204997 139.35099945993426L20.85756937204997 139.35099945993426L20.85756937204997 168.10555490404766L-20.85756937204997 168.10555490404766C-20.85756937204997 168.10555490404766 -20.85756937204997 168.10555490404766 -20.85756937204997 168.10555490404766C-20.85756937204997 168.10555490404766 -20.85756937204997 168.10555490404766 -20.85756937204997 168.10555490404766C-20.85756937204997 168.10555490404766 -20.85756937204997 168.10555490404766 -20.85756937204997 168.10555490404766C-20.85756937204997 168.10555490404766 -20.85756937204997 168.10555490404766 -20.85756937204997 168.10555490404766 " fill="rgba(0,227,150,0.85)" fillOpacity={1} id="SvgjsPath4888" index={1} j={0} pathfrom="M -20.85756937204997 168.10555490404766 L -20.85756937204997 168.10555490404766 L 20.85756937204997 168.10555490404766 L 20.85756937204997 168.10555490404766 L 20.85756937204997 168.10555490404766 L 20.85756937204997 168.10555490404766 L 20.85756937204997 168.10555490404766 L -20.85756937204997 168.10555490404766 Z" pathto="M -20.85756937204997 168.10555490404766 L -20.85756937204997 139.35099945993426 L 20.85756937204997 139.35099945993426 L 20.85756937204997 168.10555490404766 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={13} />
                                              <path barheight="50.873444247277575" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="80.45062472076415" cy="92.9003329732895" d="M38.73548597666422 143.77477722056707L38.73548597666422 92.9013329732895L80.45062472076415 92.9013329732895L80.45062472076415 143.77477722056707L38.73548597666422 143.77477722056707C38.73548597666422 143.77477722056707 38.73548597666422 143.77477722056707 38.73548597666422 143.77477722056707C38.73548597666422 143.77477722056707 38.73548597666422 143.77477722056707 38.73548597666422 143.77477722056707C38.73548597666422 143.77477722056707 38.73548597666422 143.77477722056707 38.73548597666422 143.77477722056707C38.73548597666422 143.77477722056707 38.73548597666422 143.77477722056707 38.73548597666422 143.77477722056707 " fill="rgba(0,227,150,0.85)" fillOpacity={1} id="SvgjsPath4894" index={1} j={1} pathfrom="M 38.73548597666422 143.77477722056707 L 38.73548597666422 143.77477722056707 L 80.45062472076415 143.77477722056707 L 80.45062472076415 143.77477722056707 L 80.45062472076415 143.77477722056707 L 80.45062472076415 143.77477722056707 L 80.45062472076415 143.77477722056707 L 38.73548597666422 143.77477722056707 Z" pathto="M 38.73548597666422 143.77477722056707 L 38.73548597666422 92.9013329732895 L 80.45062472076415 92.9013329732895 L 80.45062472076415 143.77477722056707 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={23} />
                                              <path barheight="44.23777760632832" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="140.04368006947837" cy="130.5024439386686" d="M98.32854132537842 174.7412215449969L98.32854132537842 130.5034439386686L140.04368006947837 130.5034439386686L140.04368006947837 174.7412215449969L98.32854132537842 174.7412215449969C98.32854132537842 174.7412215449969 98.32854132537842 174.7412215449969 98.32854132537842 174.7412215449969C98.32854132537842 174.7412215449969 98.32854132537842 174.7412215449969 98.32854132537842 174.7412215449969C98.32854132537842 174.7412215449969 98.32854132537842 174.7412215449969 98.32854132537842 174.7412215449969C98.32854132537842 174.7412215449969 98.32854132537842 174.7412215449969 98.32854132537842 174.7412215449969 " fill="rgba(0,227,150,0.85)" fillOpacity={1} id="SvgjsPath4900" index={1} j={2} pathfrom="M 98.32854132537842 174.7412215449969 L 98.32854132537842 174.7412215449969 L 140.04368006947837 174.7412215449969 L 140.04368006947837 174.7412215449969 L 140.04368006947837 174.7412215449969 L 140.04368006947837 174.7412215449969 L 140.04368006947837 174.7412215449969 L 98.32854132537842 174.7412215449969 Z" pathto="M 98.32854132537842 174.7412215449969 L 98.32854132537842 130.5034439386686 L 140.04368006947837 130.5034439386686 L 140.04368006947837 174.7412215449969 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={20} />
                                              <path barheight="17.69511104253133" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="199.63673541819256" cy="99.53599961423876" d="M157.92159667409263 117.23211065677009L157.92159667409263 99.53699961423877L199.63673541819256 99.53699961423877L199.63673541819256 117.23211065677009L157.92159667409263 117.23211065677009C157.92159667409263 117.23211065677009 157.92159667409263 117.23211065677009 157.92159667409263 117.23211065677009C157.92159667409263 117.23211065677009 157.92159667409263 117.23211065677009 157.92159667409263 117.23211065677009C157.92159667409263 117.23211065677009 157.92159667409263 117.23211065677009 157.92159667409263 117.23211065677009C157.92159667409263 117.23211065677009 157.92159667409263 117.23211065677009 157.92159667409263 117.23211065677009 " fill="rgba(0,227,150,0.85)" fillOpacity={1} id="SvgjsPath4906" index={1} j={3} pathfrom="M 157.92159667409263 117.23211065677009 L 157.92159667409263 117.23211065677009 L 199.63673541819256 117.23211065677009 L 199.63673541819256 117.23211065677009 L 199.63673541819256 117.23211065677009 L 199.63673541819256 117.23211065677009 L 199.63673541819256 117.23211065677009 L 157.92159667409263 117.23211065677009 Z" pathto="M 157.92159667409263 117.23211065677009 L 157.92159667409263 99.53699961423877 L 199.63673541819256 99.53699961423877 L 199.63673541819256 117.23211065677009 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={8} />
                                              <path barheight="28.75455544411341" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="259.2297907669068" cy="188.0115548268954" d="M217.5146520228068 216.76711027100882L217.5146520228068 188.0125548268954L259.2297907669068 188.0125548268954L259.2297907669068 216.76711027100882L217.5146520228068 216.76711027100882C217.5146520228068 216.76711027100882 217.5146520228068 216.76711027100882 217.5146520228068 216.76711027100882C217.5146520228068 216.76711027100882 217.5146520228068 216.76711027100882 217.5146520228068 216.76711027100882C217.5146520228068 216.76711027100882 217.5146520228068 216.76711027100882 217.5146520228068 216.76711027100882C217.5146520228068 216.76711027100882 217.5146520228068 216.76711027100882 217.5146520228068 216.76711027100882 " fill="rgba(0,227,150,0.85)" fillOpacity={1} id="SvgjsPath4912" index={1} j={4} pathfrom="M 217.5146520228068 216.76711027100882 L 217.5146520228068 216.76711027100882 L 259.2297907669068 216.76711027100882 L 259.2297907669068 216.76711027100882 L 259.2297907669068 216.76711027100882 L 259.2297907669068 216.76711027100882 L 259.2297907669068 216.76711027100882 L 217.5146520228068 216.76711027100882 Z" pathto="M 217.5146520228068 216.76711027100882 L 217.5146520228068 188.0125548268954 L 259.2297907669068 188.0125548268954 L 259.2297907669068 216.76711027100882 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={13} />
                                              <path barheight="59.72099976854324" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="318.82284611562096" cy="110.59544401582082" d="M277.10770737152103 170.31744378436406L277.10770737152103 110.59644401582082L318.82284611562096 110.59644401582082L318.82284611562096 170.31744378436406L277.10770737152103 170.31744378436406C277.10770737152103 170.31744378436406 277.10770737152103 170.31744378436406 277.10770737152103 170.31744378436406C277.10770737152103 170.31744378436406 277.10770737152103 170.31744378436406 277.10770737152103 170.31744378436406C277.10770737152103 170.31744378436406 277.10770737152103 170.31744378436406 277.10770737152103 170.31744378436406C277.10770737152103 170.31744378436406 277.10770737152103 170.31744378436406 277.10770737152103 170.31744378436406 " fill="rgba(0,227,150,0.85)" fillOpacity={1} id="SvgjsPath4918" index={1} j={5} pathfrom="M 277.10770737152103 170.31744378436406 L 277.10770737152103 170.31744378436406 L 318.82284611562096 170.31744378436406 L 318.82284611562096 170.31744378436406 L 318.82284611562096 170.31744378436406 L 318.82284611562096 170.31744378436406 L 318.82284611562096 170.31744378436406 L 277.10770737152103 170.31744378436406 Z" pathto="M 277.10770737152103 170.31744378436406 L 277.10770737152103 110.59644401582082 L 318.82284611562096 110.59644401582082 L 318.82284611562096 170.31744378436406 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={27} />
                                              <g className="apexcharts-bar-goals-markers" id="SvgjsG4886" style={{pointerEvents: 'none'}}>
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4887" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4893" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4899" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4905" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4911" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4917" />
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-realindex={2} id="SvgjsG4923" rel={3} seriesname="PRODUCTxC">
                                              <path barheight="24.33077768348058" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="20.857569372049966" cy="115.02022177645368" d="M-20.85756937204997 139.35199945993426L-20.85756937204997 115.02122177645369L20.85756937204997 115.02122177645369L20.85756937204997 139.35199945993426L-20.85756937204997 139.35199945993426C-20.85756937204997 139.35199945993426 -20.85756937204997 139.35199945993426 -20.85756937204997 139.35199945993426C-20.85756937204997 139.35199945993426 -20.85756937204997 139.35199945993426 -20.85756937204997 139.35199945993426C-20.85756937204997 139.35199945993426 -20.85756937204997 139.35199945993426 -20.85756937204997 139.35199945993426C-20.85756937204997 139.35199945993426 -20.85756937204997 139.35199945993426 -20.85756937204997 139.35199945993426 " fill="rgba(254,176,25,0.85)" fillOpacity={1} id="SvgjsPath4927" index={2} j={0} pathfrom="M -20.85756937204997 139.35199945993426 L -20.85756937204997 139.35199945993426 L 20.85756937204997 139.35199945993426 L 20.85756937204997 139.35199945993426 L 20.85756937204997 139.35199945993426 L 20.85756937204997 139.35199945993426 L 20.85756937204997 139.35199945993426 L -20.85756937204997 139.35199945993426 Z" pathto="M -20.85756937204997 139.35199945993426 L -20.85756937204997 115.02122177645369 L 20.85756937204997 115.02122177645369 L 20.85756937204997 139.35199945993426 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={11} />
                                              <path barheight="37.602110965379076" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="80.45062472076415" cy="55.29922200791042" d="M38.73548597666422 92.9023329732895L38.73548597666422 55.30022200791042L80.45062472076415 55.30022200791042L80.45062472076415 92.9023329732895L38.73548597666422 92.9023329732895C38.73548597666422 92.9023329732895 38.73548597666422 92.9023329732895 38.73548597666422 92.9023329732895C38.73548597666422 92.9023329732895 38.73548597666422 92.9023329732895 38.73548597666422 92.9023329732895C38.73548597666422 92.9023329732895 38.73548597666422 92.9023329732895 38.73548597666422 92.9023329732895C38.73548597666422 92.9023329732895 38.73548597666422 92.9023329732895 38.73548597666422 92.9023329732895 " fill="rgba(254,176,25,0.85)" fillOpacity={1} id="SvgjsPath4933" index={2} j={1} pathfrom="M 38.73548597666422 92.9023329732895 L 38.73548597666422 92.9023329732895 L 80.45062472076415 92.9023329732895 L 80.45062472076415 92.9023329732895 L 80.45062472076415 92.9023329732895 L 80.45062472076415 92.9023329732895 L 80.45062472076415 92.9023329732895 L 38.73548597666422 92.9023329732895 Z" pathto="M 38.73548597666422 92.9023329732895 L 38.73548597666422 55.30022200791042 L 80.45062472076415 55.30022200791042 L 80.45062472076415 92.9023329732895 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={17} />
                                              <path barheight="33.178333204746245" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="140.04368006947837" cy="97.32511073392234" d="M98.32854132537842 130.5044439386686L98.32854132537842 97.32611073392235L140.04368006947837 97.32611073392235L140.04368006947837 130.5044439386686L98.32854132537842 130.5044439386686C98.32854132537842 130.5044439386686 98.32854132537842 130.5044439386686 98.32854132537842 130.5044439386686C98.32854132537842 130.5044439386686 98.32854132537842 130.5044439386686 98.32854132537842 130.5044439386686C98.32854132537842 130.5044439386686 98.32854132537842 130.5044439386686 98.32854132537842 130.5044439386686C98.32854132537842 130.5044439386686 98.32854132537842 130.5044439386686 98.32854132537842 130.5044439386686 " fill="rgba(254,176,25,0.85)" fillOpacity={1} id="SvgjsPath4939" index={2} j={2} pathfrom="M 98.32854132537842 130.5044439386686 L 98.32854132537842 130.5044439386686 L 140.04368006947837 130.5044439386686 L 140.04368006947837 130.5044439386686 L 140.04368006947837 130.5044439386686 L 140.04368006947837 130.5044439386686 L 140.04368006947837 130.5044439386686 L 98.32854132537842 130.5044439386686 Z" pathto="M 98.32854132537842 130.5044439386686 L 98.32854132537842 97.32611073392235 L 140.04368006947837 97.32611073392235 L 140.04368006947837 130.5044439386686 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={15} />
                                              <path barheight="33.178333204746245" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="199.63673541819256" cy="66.35866640949251" d="M157.92159667409263 99.53799961423877L157.92159667409263 66.35966640949252L199.63673541819256 66.35966640949252L199.63673541819256 99.53799961423877L157.92159667409263 99.53799961423877C157.92159667409263 99.53799961423877 157.92159667409263 99.53799961423877 157.92159667409263 99.53799961423877C157.92159667409263 99.53799961423877 157.92159667409263 99.53799961423877 157.92159667409263 99.53799961423877C157.92159667409263 99.53799961423877 157.92159667409263 99.53799961423877 157.92159667409263 99.53799961423877C157.92159667409263 99.53799961423877 157.92159667409263 99.53799961423877 157.92159667409263 99.53799961423877 " fill="rgba(254,176,25,0.85)" fillOpacity={1} id="SvgjsPath4945" index={2} j={3} pathfrom="M 157.92159667409263 99.53799961423877 L 157.92159667409263 99.53799961423877 L 199.63673541819256 99.53799961423877 L 199.63673541819256 99.53799961423877 L 199.63673541819256 99.53799961423877 L 199.63673541819256 99.53799961423877 L 199.63673541819256 99.53799961423877 L 157.92159667409263 99.53799961423877 Z" pathto="M 157.92159667409263 99.53799961423877 L 157.92159667409263 66.35966640949252 L 199.63673541819256 66.35966640949252 L 199.63673541819256 99.53799961423877 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={15} />
                                              <path barheight="46.449666486644745" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="259.2297907669068" cy="141.56288834025065" d="M217.5146520228068 188.01355482689542L217.5146520228068 141.56388834025066L259.2297907669068 141.56388834025066L259.2297907669068 188.01355482689542L217.5146520228068 188.01355482689542C217.5146520228068 188.01355482689542 217.5146520228068 188.01355482689542 217.5146520228068 188.01355482689542C217.5146520228068 188.01355482689542 217.5146520228068 188.01355482689542 217.5146520228068 188.01355482689542C217.5146520228068 188.01355482689542 217.5146520228068 188.01355482689542 217.5146520228068 188.01355482689542C217.5146520228068 188.01355482689542 217.5146520228068 188.01355482689542 217.5146520228068 188.01355482689542 " fill="rgba(254,176,25,0.85)" fillOpacity={1} id="SvgjsPath4951" index={2} j={4} pathfrom="M 217.5146520228068 188.01355482689542 L 217.5146520228068 188.01355482689542 L 259.2297907669068 188.01355482689542 L 259.2297907669068 188.01355482689542 L 259.2297907669068 188.01355482689542 L 259.2297907669068 188.01355482689542 L 259.2297907669068 188.01355482689542 L 217.5146520228068 188.01355482689542 Z" pathto="M 217.5146520228068 188.01355482689542 L 217.5146520228068 141.56388834025066 L 259.2297907669068 141.56388834025066 L 259.2297907669068 188.01355482689542 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={21} />
                                              <path barheight="30.966444324429826" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="318.82284611562096" cy="79.62999969139099" d="M277.10770737152103 110.59744401582083L277.10770737152103 79.630999691391L318.82284611562096 79.630999691391L318.82284611562096 110.59744401582083L277.10770737152103 110.59744401582083C277.10770737152103 110.59744401582083 277.10770737152103 110.59744401582083 277.10770737152103 110.59744401582083C277.10770737152103 110.59744401582083 277.10770737152103 110.59744401582083 277.10770737152103 110.59744401582083C277.10770737152103 110.59744401582083 277.10770737152103 110.59744401582083 277.10770737152103 110.59744401582083C277.10770737152103 110.59744401582083 277.10770737152103 110.59744401582083 277.10770737152103 110.59744401582083 " fill="rgba(254,176,25,0.85)" fillOpacity={1} id="SvgjsPath4957" index={2} j={5} pathfrom="M 277.10770737152103 110.59744401582083 L 277.10770737152103 110.59744401582083 L 318.82284611562096 110.59744401582083 L 318.82284611562096 110.59744401582083 L 318.82284611562096 110.59744401582083 L 318.82284611562096 110.59744401582083 L 318.82284611562096 110.59744401582083 L 277.10770737152103 110.59744401582083 Z" pathto="M 277.10770737152103 110.59744401582083 L 277.10770737152103 79.630999691391 L 318.82284611562096 79.630999691391 L 318.82284611562096 110.59744401582083 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={14} />
                                              <g className="apexcharts-bar-goals-markers" id="SvgjsG4925" style={{pointerEvents: 'none'}}>
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4926" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4932" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4938" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4944" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4950" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4956" />
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-realindex={3} id="SvgjsG4962" rel={4} seriesname="PRODUCTxD">
                                              <path barheight="46.449666486644745" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="20.857569372049966" cy="68.57155528980894" d="M-20.85756937204997 115.02222177645369L-20.85756937204997 68.57255528980895L20.85756937204997 68.57255528980895L20.85756937204997 115.02222177645369L-20.85756937204997 115.02222177645369C-20.85756937204997 115.02222177645369 -20.85756937204997 115.02222177645369 -20.85756937204997 115.02222177645369C-20.85756937204997 115.02222177645369 -20.85756937204997 115.02222177645369 -20.85756937204997 115.02222177645369C-20.85756937204997 115.02222177645369 -20.85756937204997 115.02222177645369 -20.85756937204997 115.02222177645369C-20.85756937204997 115.02222177645369 -20.85756937204997 115.02222177645369 -20.85756937204997 115.02222177645369 " fill="rgba(255,69,96,0.85)" fillOpacity={1} id="SvgjsPath4966" index={3} j={0} pathfrom="M -20.85756937204997 115.02222177645369 L -20.85756937204997 115.02222177645369 L 20.85756937204997 115.02222177645369 L 20.85756937204997 115.02222177645369 L 20.85756937204997 115.02222177645369 L 20.85756937204997 115.02222177645369 L 20.85756937204997 115.02222177645369 L -20.85756937204997 115.02222177645369 Z" pathto="M -20.85756937204997 115.02222177645369 L -20.85756937204997 68.57255528980895 L 20.85756937204997 68.57255528980895 L 20.85756937204997 115.02222177645369 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={21} />
                                              <path barheight="15.483222162214913" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="80.45062472076415" cy="39.816999845695506" d="M38.73548597666422 55.30122200791042L38.73548597666422 39.8179998456955L80.45062472076415 39.8179998456955L80.45062472076415 55.30122200791042L38.73548597666422 55.30122200791042C38.73548597666422 55.30122200791042 38.73548597666422 55.30122200791042 38.73548597666422 55.30122200791042C38.73548597666422 55.30122200791042 38.73548597666422 55.30122200791042 38.73548597666422 55.30122200791042C38.73548597666422 55.30122200791042 38.73548597666422 55.30122200791042 38.73548597666422 55.30122200791042C38.73548597666422 55.30122200791042 38.73548597666422 55.30122200791042 38.73548597666422 55.30122200791042 " fill="rgba(255,69,96,0.85)" fillOpacity={1} id="SvgjsPath4972" index={3} j={1} pathfrom="M 38.73548597666422 55.30122200791042 L 38.73548597666422 55.30122200791042 L 80.45062472076415 55.30122200791042 L 80.45062472076415 55.30122200791042 L 80.45062472076415 55.30122200791042 L 80.45062472076415 55.30122200791042 L 80.45062472076415 55.30122200791042 L 38.73548597666422 55.30122200791042 Z" pathto="M 38.73548597666422 55.30122200791042 L 38.73548597666422 39.8179998456955 L 80.45062472076415 39.8179998456955 L 80.45062472076415 55.30122200791042 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={7} />
                                              <path barheight="55.297222007910406" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="140.04368006947837" cy="42.02888872601194" d="M98.32854132537842 97.32711073392235L98.32854132537842 42.02988872601194L140.04368006947837 42.02988872601194L140.04368006947837 97.32711073392235L98.32854132537842 97.32711073392235C98.32854132537842 97.32711073392235 98.32854132537842 97.32711073392235 98.32854132537842 97.32711073392235C98.32854132537842 97.32711073392235 98.32854132537842 97.32711073392235 98.32854132537842 97.32711073392235C98.32854132537842 97.32711073392235 98.32854132537842 97.32711073392235 98.32854132537842 97.32711073392235C98.32854132537842 97.32711073392235 98.32854132537842 97.32711073392235 98.32854132537842 97.32711073392235 " fill="rgba(255,69,96,0.85)" fillOpacity={1} id="SvgjsPath4978" index={3} j={2} pathfrom="M 98.32854132537842 97.32711073392235 L 98.32854132537842 97.32711073392235 L 140.04368006947837 97.32711073392235 L 140.04368006947837 97.32711073392235 L 140.04368006947837 97.32711073392235 L 140.04368006947837 97.32711073392235 L 140.04368006947837 97.32711073392235 L 98.32854132537842 97.32711073392235 Z" pathto="M 98.32854132537842 97.32711073392235 L 98.32854132537842 42.02988872601194 L 140.04368006947837 42.02988872601194 L 140.04368006947837 97.32711073392235 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={25} />
                                              <path barheight="28.75455544411341" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="199.63673541819256" cy="37.60511096537911" d="M157.92159667409263 66.36066640949252L157.92159667409263 37.60611096537911L199.63673541819256 37.60611096537911L199.63673541819256 66.36066640949252L157.92159667409263 66.36066640949252C157.92159667409263 66.36066640949252 157.92159667409263 66.36066640949252 157.92159667409263 66.36066640949252C157.92159667409263 66.36066640949252 157.92159667409263 66.36066640949252 157.92159667409263 66.36066640949252C157.92159667409263 66.36066640949252 157.92159667409263 66.36066640949252 157.92159667409263 66.36066640949252C157.92159667409263 66.36066640949252 157.92159667409263 66.36066640949252 157.92159667409263 66.36066640949252 " fill="rgba(255,69,96,0.85)" fillOpacity={1} id="SvgjsPath4984" index={3} j={3} pathfrom="M 157.92159667409263 66.36066640949252 L 157.92159667409263 66.36066640949252 L 199.63673541819256 66.36066640949252 L 199.63673541819256 66.36066640949252 L 199.63673541819256 66.36066640949252 L 199.63673541819256 66.36066640949252 L 199.63673541819256 66.36066640949252 L 157.92159667409263 66.36066640949252 Z" pathto="M 157.92159667409263 66.36066640949252 L 157.92159667409263 37.60611096537911 L 199.63673541819256 37.60611096537911 L 199.63673541819256 66.36066640949252 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={13} />
                                              <path barheight="48.66155536696116" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="259.2297907669068" cy="92.9023329732895" d="M217.5146520228068 141.56488834025066L217.5146520228068 92.90333297328951L259.2297907669068 92.90333297328951L259.2297907669068 141.56488834025066L217.5146520228068 141.56488834025066C217.5146520228068 141.56488834025066 217.5146520228068 141.56488834025066 217.5146520228068 141.56488834025066C217.5146520228068 141.56488834025066 217.5146520228068 141.56488834025066 217.5146520228068 141.56488834025066C217.5146520228068 141.56488834025066 217.5146520228068 141.56488834025066 217.5146520228068 141.56488834025066C217.5146520228068 141.56488834025066 217.5146520228068 141.56488834025066 217.5146520228068 141.56488834025066 " fill="rgba(255,69,96,0.85)" fillOpacity={1} id="SvgjsPath4990" index={3} j={4} pathfrom="M 217.5146520228068 141.56488834025066 L 217.5146520228068 141.56488834025066 L 259.2297907669068 141.56488834025066 L 259.2297907669068 141.56488834025066 L 259.2297907669068 141.56488834025066 L 259.2297907669068 141.56488834025066 L 259.2297907669068 141.56488834025066 L 217.5146520228068 141.56488834025066 Z" pathto="M 217.5146520228068 141.56488834025066 L 217.5146520228068 92.90333297328951 L 259.2297907669068 92.90333297328951 L 259.2297907669068 141.56488834025066 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={22} />
                                              <path barheight="17.69511104253133" barwidth="41.71513874409994" className="apexcharts-bar-area" clipPath="url(#gridRectMaskk7cn71hp)" cx="318.82284611562096" cy="61.93588864885967" d="M277.10770737152103 79.631999691391L277.10770737152103 61.936888648859664L318.82284611562096 61.936888648859664L318.82284611562096 79.631999691391L277.10770737152103 79.631999691391C277.10770737152103 79.631999691391 277.10770737152103 79.631999691391 277.10770737152103 79.631999691391C277.10770737152103 79.631999691391 277.10770737152103 79.631999691391 277.10770737152103 79.631999691391C277.10770737152103 79.631999691391 277.10770737152103 79.631999691391 277.10770737152103 79.631999691391C277.10770737152103 79.631999691391 277.10770737152103 79.631999691391 277.10770737152103 79.631999691391 " fill="rgba(255,69,96,0.85)" fillOpacity={1} id="SvgjsPath4996" index={3} j={5} pathfrom="M 277.10770737152103 79.631999691391 L 277.10770737152103 79.631999691391 L 318.82284611562096 79.631999691391 L 318.82284611562096 79.631999691391 L 318.82284611562096 79.631999691391 L 318.82284611562096 79.631999691391 L 318.82284611562096 79.631999691391 L 277.10770737152103 79.631999691391 Z" pathto="M 277.10770737152103 79.631999691391 L 277.10770737152103 61.936888648859664 L 318.82284611562096 61.936888648859664 L 318.82284611562096 79.631999691391 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={8} />
                                              <g className="apexcharts-bar-goals-markers" id="SvgjsG4964" style={{pointerEvents: 'none'}}>
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4965" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4971" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4977" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4983" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4989" />
                                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG4995" />
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG4846">
                                              <g className="apexcharts-data-labels" id="SvgjsG4851" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="-3.552713678800501e-15" cy="223.4317772555669" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4853" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="-3.552713678800501e-15" y="223.4317772555669">
                                                  44
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4857" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="59.59305534871419" cy="211.26638841382663" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4859" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="59.59305534871419" y="211.26638841382663">
                                                  55
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4863" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="119.1861106974284" cy="226.74961057604153" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4865" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="119.1861106974284" y="226.74961057604153">
                                                  41
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4869" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="178.7791660461426" cy="197.99505513192813" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4871" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="178.7791660461426" y="197.99505513192813">
                                                  67
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4875" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="238.3722213948568" cy="247.7625549390475" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4877" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="238.3722213948568" y="247.7625549390475">
                                                  22
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4881" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="297.965276743571" cy="224.5377216957251" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4883" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="297.965276743571" y="224.5377216957251">
                                                  43
                                                </text>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG4885">
                                              <g className="apexcharts-data-labels" id="SvgjsG4890" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="-3.552713678800501e-15" cy="160.39394416654906" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4892" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="-3.552713678800501e-15" y="160.39394416654906">
                                                  13
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4896" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="59.59305534871419" cy="125.00372208148639" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4898" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="59.59305534871419" y="125.00372208148639">
                                                  23
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4902" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="119.1861106974284" cy="159.28799972639086" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4904" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="119.1861106974284" y="159.28799972639086">
                                                  20
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4908" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="178.7791660461426" cy="115.05022212006253" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4910" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="178.7791660461426" y="115.05022212006253">
                                                  8
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4914" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="238.3722213948568" cy="209.05549953351021" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4916" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="238.3722213948568" y="209.05549953351021">
                                                  13
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4920" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="297.965276743571" cy="147.12261088465056" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4922" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="297.965276743571" y="147.12261088465056">
                                                  27
                                                </text>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={2} id="SvgjsG4924">
                                              <g className="apexcharts-data-labels" id="SvgjsG4929" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="-3.552713678800501e-15" cy="133.85227760275208" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4931" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="-3.552713678800501e-15" y="133.85227760275208">
                                                  11
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4935" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="59.59305534871419" cy="80.76694447515807" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4937" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="59.59305534871419" y="80.76694447515807">
                                                  17
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4941" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="119.1861106974284" cy="120.58094432085358" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4943" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="119.1861106974284" y="120.58094432085358">
                                                  15
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4947" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="178.7791660461426" cy="89.61449999642375" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4949" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="178.7791660461426" y="89.61449999642375">
                                                  15
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4953" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="238.3722213948568" cy="171.45438856813112" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4955" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="238.3722213948568" y="171.45438856813112">
                                                  21
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4959" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="297.965276743571" cy="101.77988883816401" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4961" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="297.965276743571" y="101.77988883816401">
                                                  14
                                                </text>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={3} id="SvgjsG4963">
                                              <g className="apexcharts-data-labels" id="SvgjsG4968" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="-3.552713678800501e-15" cy="98.46305551768941" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4970" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="-3.552713678800501e-15" y="98.46305551768941">
                                                  21
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4974" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="59.59305534871419" cy="54.22527791136107" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4976" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="59.59305534871419" y="54.22527791136107">
                                                  7
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4980" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="119.1861106974284" cy="76.34416671452524" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4982" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="119.1861106974284" y="76.34416671452524">
                                                  25
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4986" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="178.7791660461426" cy="58.64905567199392" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4988" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="178.7791660461426" y="58.64905567199392">
                                                  13
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4992" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="238.3722213948568" cy="123.89977764132819" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText4994" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="238.3722213948568" y="123.89977764132819">
                                                  22
                                                </text>
                                              </g>
                                              <g className="apexcharts-data-labels" id="SvgjsG4998" transform="rotate(0)">
                                                <text className="apexcharts-datalabel" cx="297.965276743571" cy="77.45011115468344" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText5000" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="297.965276743571" y="77.45011115468344">
                                                  8
                                                </text>
                                              </g>
                                            </g>
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine5024" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1="-40.3402776590983" x2="338.3055544026693" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine5025" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1="-40.3402776590983" x2="338.3055544026693" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations" id="SvgjsG5026" />
                                          <g className="apexcharts-xaxis-annotations" id="SvgjsG5027" />
                                          <g className="apexcharts-point-annotations" id="SvgjsG5028" />
                                          <g className="apexcharts-xaxis" id="SvgjsG5029" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG5030" transform="translate(0, -4)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText5032" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x={0} y="294.42666563796996">
                                                <tspan id="SvgjsTspan5033">1</tspan>
                                                <title>1</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText5035" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="59.59305534871421" y="294.42666563796996">
                                                <tspan id="SvgjsTspan5036">2</tspan>
                                                <title>2</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText5038" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="119.18611069742843" y="294.42666563796996">
                                                <tspan id="SvgjsTspan5039">3</tspan>
                                                <title>3</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText5041" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="178.77916604614262" y="294.42666563796996">
                                                <tspan id="SvgjsTspan5042">4</tspan>
                                                <title>4</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText5044" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="238.3722213948568" y="294.42666563796996">
                                                <tspan id="SvgjsTspan5045">5</tspan>
                                                <title>5</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText5047" style={{fontFamily: 'Helvetica, Arial,sans-serif'}} textAnchor="middle" x="297.965276743571" y="294.42666563796996">
                                                <tspan id="SvgjsTspan5048">6</tspan>
                                                <title>6</title>
                                              </text>
                                            </g>
                                          </g>
                                          <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect5067" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                          <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect5068" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        </g>
                                      </svg>
                                      <div className="apexcharts-tooltip apexcharts-theme-light">
                                        <div className="apexcharts-tooltip-title" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}} />
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
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                      <div className="apexcharts-toolbar" style={{top: '0px', right: '3px'}}>
                                        <div className="apexcharts-zoomin-icon" title="Zoom In">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-zoomout-icon" title="Zoom Out">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-zoom-icon apexcharts-selected" title="Selection Zoom">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-pan-icon" title="Panning">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <defs>
                                              <path d="M0 0h24v24H0z" id="a" />
                                            </defs>
                                            <clipPath id="b">
                                              <use overflow="visible" xlinkHref="#a" />
                                            </clipPath>
                                            <path clipPath="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-reset-icon" title="Reset Zoom">
                                          <svg fill="#000000" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                            <path d="M0 0h24v24H0z" fill="none" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-menu-icon" title="Menu">
                                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                          </svg>
                                        </div>
                                        <div className="apexcharts-menu">
                                          <div className="apexcharts-menu-item exportSVG" title="Download SVG">
                                            Download SVG
                                          </div>
                                          <div className="apexcharts-menu-item exportPNG" title="Download PNG">
                                            Download PNG
                                          </div>
                                          <div className="apexcharts-menu-item exportCSV" title="Download CSV">
                                            Download CSV
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </app-apexchart>
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
            <path d="M-1 270.99999923706054L-1 270.99999923706054C-1 270.99999923706054 87.37980739886945 270.99999923706054 87.37980739886945 270.99999923706054C87.37980739886945 270.99999923706054 145.63301233144907 270.99999923706054 145.63301233144907 270.99999923706054C145.63301233144907 270.99999923706054 203.88621726402872 270.99999923706054 203.88621726402872 270.99999923706054C203.88621726402872 270.99999923706054 262.13942219660834 270.99999923706054 262.13942219660834 270.99999923706054C262.13942219660834 270.99999923706054 320.392627129188 270.99999923706054 320.392627129188 270.99999923706054C320.392627129188 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054C378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 378.6458320617676 270.99999923706054 " id="SvgjsPath1854" />
          </svg>
          <div aria-atomic="true" aria-live="polite" className="cdk-live-announcer-element cdk-visually-hidden" id="cdk-live-announcer-0" />
          <div className="cdk-describedby-message-container cdk-visually-hidden" style={{visibility: 'hidden'}}>
            <div id="cdk-describedby-message-oko-1-8">Sort</div>
          </div>
        </div>
      );
    }
  