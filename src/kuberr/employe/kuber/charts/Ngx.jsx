import React from "react"
import Drop from "../../../../Drop";

export default function Ngx (){
    return(
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
        <app-ngxchart _nghost-oko-c467 className="ng-star-inserted">
          <section _ngcontent-oko-c467 className="content">
            <div _ngcontent-oko-c467 className="content-block">
              <div _ngcontent-oko-c467 className="block-header">
                <app-breadcrumb _ngcontent-oko-c467 _nghost-oko-c141>
                  <div _ngcontent-oko-c141 className="breadcrumb-main">
                    <div _ngcontent-oko-c141 className="row">
                      <div _ngcontent-oko-c141 className="col-6">
                        <div _ngcontent-oko-c141 className="breadcrumb-title">
                          <h4 _ngcontent-oko-c141 className="page-title">
                            NgxChart
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
                            NgxChart
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </app-breadcrumb>
              </div>
              <div _ngcontent-oko-c467 className="row clearfix">
                <div _ngcontent-oko-c467 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div _ngcontent-oko-c467 className="card">
                    <div _ngcontent-oko-c467 className="header">
                      <h2 _ngcontent-oko-c467>BAR CHART</h2>
                    </div>
                    <div _ngcontent-oko-c467 className="card-body">
                      <div _ngcontent-oko-c467 style={{"height":"400px"}}>
                        <ngx-charts-bar-vertical _ngcontent-oko-c467>
                          <ngx-charts-chart>
                            <div className="ngx-charts-outer" style={{"width":"922px","height":"400px"}}>
                              <svg className="ngx-charts" height={400} width={922}>
                                <g className="bar-chart chart" transform="translate(111 , 10)">
                                  <g className="ng-star-inserted" ngx-charts-x-axis>
                                    <g className="x axis" transform="translate(0,336)">
                                      <g className="ng-star-inserted" ngx-charts-x-axis-ticks>
                                        <g>
                                          <g className="tick ng-star-inserted" transform="translate(63,20)">
                                            <title>China</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              China
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(197,20)">
                                            <title>USA</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              USA
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(331,20)">
                                            <title>India</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              India
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(465,20)">
                                            <title>Japan</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              Japan
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(599,20)">
                                            <title>Germany</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              Germany
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(733,20)">
                                            <title>France</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              France
                                            </text>
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(63,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(197,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(331,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(465,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(599,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(733,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                      </g>
                                      {/* */}
                                      <g className="ng-star-inserted" ngx-charts-axis-label>
                                        <text strokeWidth="0.01" textAnchor="middle" transform x={398} y={44}>
                                          Country
                                        </text>
                                      </g>
                                      {/* */}
                                    </g>
                                  </g>
                                  {/* */}
                                  <g className="ng-star-inserted" ngx-charts-y-axis>
                                    <g className="y axis" transform="translate(-5 , 0)">
                                      <g className="ng-star-inserted" ngx-charts-y-axis-ticks>
                                        <g>
                                          <g className="tick ng-star-inserted" transform="translate(0,331)">
                                            <title>0</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              0
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,257.24027753265483)">
                                            <title>500,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              500,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,183.48055506530966)">
                                            <title>1,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              1,000,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,109.72083259796449)">
                                            <title>1,500,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              1,500,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,35.96111013061933)">
                                            <title>2,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              2,000,000
                                            </text>
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                        <g className="ng-star-inserted" transform="translate(0,331)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={796} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,257.24027753265483)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={796} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,183.48055506530966)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={796} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,109.72083259796449)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={796} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,35.96111013061933)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={796} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                        {/* */}
                                      </g>
                                      {/* */}
                                      <g className="ng-star-inserted" ngx-charts-axis-label>
                                        <text strokeWidth="0.01" textAnchor="middle" transform="rotate(270)" x="-165.5" y={-81}>
                                          Sales
                                        </text>
                                      </g>
                                      {/* */}
                                    </g>
                                  </g>
                                  {/* */}
                                  <g className="ng-tns-c292-484 ng-star-inserted" ngx-charts-series-vertical>
                                    <g className="ng-tns-c292-484 ng-star-inserted">
                                      <g className="ng-tns-c292-484 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                        {/* */}
                                        <path aria-label="China 2,243,772" className="bar" d="M5,0h116a5,5 0 0 1 5,5v321v5h-5h-116h-5v-5v-321a5,5 0 0 1 5,-5z" fill="#9370DB" role="img" stroke="none" tabIndex={-1} />
                                      </g>
                                      {/* */}
                                      <g className="ng-tns-c292-484 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                        {/* */}
                                        <path aria-label="USA 1,826,000" className="bar" d="M139,61.62949354925544h116a5,5 0 0 1 5,5v259v5h-5h-116h-5v-5v-259a5,5 0 0 1 5,-5z" fill="#87CEFA" role="img" stroke="none" tabIndex={-1} />
                                      </g>
                                      {/* */}
                                      <g className="ng-tns-c292-484 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                        {/* */}
                                        <path aria-label="India 1,173,657" className="bar" d="M273,157.86277081628614h116a5,5 0 0 1 5,5v163v5h-5h-116h-5v-5v-163a5,5 0 0 1 5,-5z" fill="#FA8072" role="img" stroke="none" tabIndex={-1} />
                                      </g>
                                      {/* */}
                                      <g className="ng-tns-c292-484 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                        {/* */}
                                        <path aria-label="Japan 857,363" className="bar" d="M407,204.52228613245907h116a5,5 0 0 1 5,5v116v5h-5h-116h-5v-5v-116a5,5 0 0 1 5,-5z" fill="#FF7F50" role="img" stroke="none" tabIndex={-1} />
                                      </g>
                                      {/* */}
                                      <g className="ng-tns-c292-484 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                        {/* */}
                                        <path aria-label="Germany 496,750" className="bar" d="M541,257.71971572869256h116a5,5 0 0 1 5,5v63v5h-5h-116h-5v-5v-63a5,5 0 0 1 5,-5z" fill="#90EE90" role="img" stroke="none" tabIndex={-1} />
                                      </g>
                                      {/* */}
                                      <g className="ng-tns-c292-484 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                        {/* */}
                                        <path aria-label="France 204,617" className="bar" d="M675,300.81501373579846h116a5,5 0 0 1 5,5v20v5h-5h-116h-5v-5v-20a5,5 0 0 1 5,-5z" fill="#9370DB" role="img" stroke="none" tabIndex={-1} />
                                      </g>
                                      {/* */}
                                      {/* */}
                                    </g>
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                  </g>
                                </g>
                              </svg>
                              {/* */}
                              {/* */}
                            </div>
                          </ngx-charts-chart>
                        </ngx-charts-bar-vertical>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div _ngcontent-oko-c467 className="row clearfix">
                <div _ngcontent-oko-c467 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div _ngcontent-oko-c467 className="card">
                    <div _ngcontent-oko-c467 className="header">
                      <h2 _ngcontent-oko-c467>HORIZONTAL BAR CHART</h2>
                    </div>
                    <div _ngcontent-oko-c467 className="body">
                      <div _ngcontent-oko-c467 style={{"height":"400px"}}>
                        <ngx-charts-bar-horizontal _ngcontent-oko-c467>
                          <ngx-charts-chart>
                            <div className="ngx-charts-outer" style={{"width":"920px","height":"400px"}}>
                              <svg className="ngx-charts" height={400} width={920}>
                                <g className="bar-chart chart" transform="translate(108 , 10)">
                                  <g className="ng-star-inserted" ngx-charts-x-axis>
                                    <g className="x axis" transform="translate(0,336)">
                                      <g className="ng-star-inserted" ngx-charts-x-axis-ticks>
                                        <g>
                                          <g className="tick ng-star-inserted" transform="translate(0,20)">
                                            <title>0</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              0
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(177.60271542741418,20)">
                                            <title>500,000</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              500,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(355.20543085482836,20)">
                                            <title>1,000,000</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              1,000,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(532.8081462822427,20)">
                                            <title>1,500,000</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              1,500,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(710.4108617096567,20)">
                                            <title>2,000,000</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              2,000,000
                                            </text>
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(177.60271542741418,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(355.20543085482836,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(532.8081462822427,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(710.4108617096567,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                      </g>
                                      {/* */}
                                      <g className="ng-star-inserted" ngx-charts-axis-label>
                                        <text strokeWidth="0.01" textAnchor="middle" transform x="398.5" y={44}>
                                          Sales
                                        </text>
                                      </g>
                                      {/* */}
                                    </g>
                                  </g>
                                  {/* */}
                                  <g className="ng-star-inserted" ngx-charts-y-axis>
                                    <g className="y axis" transform="translate(-5 , 0)">
                                      <g className="ng-star-inserted" ngx-charts-y-axis-ticks>
                                        <g>
                                          <g className="tick ng-star-inserted" transform="translate(0,25)">
                                            <title>China</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              China
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,81)">
                                            <title>USA</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              USA
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,137)">
                                            <title>India</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              India
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,193)">
                                            <title>Japan</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              Japan
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,249)">
                                            <title>Germany</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              Germany
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,305)">
                                            <title>France</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              France
                                            </text>
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                        <g className="ng-star-inserted" transform="translate(0,25)">
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,81)">
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,137)">
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,193)">
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,249)">
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,305)">
                                          {/* */}
                                        </g>
                                        {/* */}
                                        {/* */}
                                      </g>
                                      {/* */}
                                      <g className="ng-star-inserted" ngx-charts-axis-label>
                                        <text strokeWidth="0.01" textAnchor="middle" transform="rotate(270)" x="-165.5" y={-78}>
                                          Country
                                        </text>
                                      </g>
                                      {/* */}
                                    </g>
                                  </g>
                                  {/* */}
                                  <g className="ng-tns-c290-485 ng-star-inserted" ngx-charts-series-horizontal>
                                    <g className="ng-tns-c290-485 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                      {/* */}
                                      <path aria-label="China 2,243,772" className="bar" d="M5,1h787a5,5 0 0 1 5,5v38a5,5 0 0 1 -5,5h-787h-5v-5v-38v-5h5z" fill="#9370DB" role="img" stroke="none" tabIndex={-1} />
                                    </g>
                                    {/* */}
                                    <g className="ng-tns-c290-485 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                      {/* */}
                                      <path aria-label="USA 1,826,000" className="bar" d="M5,57h638a5,5 0 0 1 5,5v38a5,5 0 0 1 -5,5h-638h-5v-5v-38v-5h5z" fill="#87CEFA" role="img" stroke="none" tabIndex={-1} />
                                    </g>
                                    {/* */}
                                    <g className="ng-tns-c290-485 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                      {/* */}
                                      <path aria-label="India 1,173,657" className="bar" d="M5,113h406a5,5 0 0 1 5,5v38a5,5 0 0 1 -5,5h-406h-5v-5v-38v-5h5z" fill="#FA8072" role="img" stroke="none" tabIndex={-1} />
                                    </g>
                                    {/* */}
                                    <g className="ng-tns-c290-485 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                      {/* */}
                                      <path aria-label="Japan 857,363" className="bar" d="M5,169h294a5,5 0 0 1 5,5v38a5,5 0 0 1 -5,5h-294h-5v-5v-38v-5h5z" fill="#FF7F50" role="img" stroke="none" tabIndex={-1} />
                                    </g>
                                    {/* */}
                                    <g className="ng-tns-c290-485 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                      {/* */}
                                      <path aria-label="Germany 496,750" className="bar" d="M5,225h166a5,5 0 0 1 5,5v38a5,5 0 0 1 -5,5h-166h-5v-5v-38v-5h5z" fill="#90EE90" role="img" stroke="none" tabIndex={-1} />
                                    </g>
                                    {/* */}
                                    <g className="ng-tns-c290-485 ng-trigger ng-trigger-animationState ng-star-inserted" ngx-charts-bar ngx-tooltip>
                                      {/* */}
                                      <path aria-label="France 204,617" className="bar" d="M5,281h62a5,5 0 0 1 5,5v38a5,5 0 0 1 -5,5h-62h-5v-5v-38v-5h5z" fill="#9370DB" role="img" stroke="none" tabIndex={-1} />
                                    </g>
                                    {/* */}
                                    {/* */}
                                    {/* */}
                                  </g>
                                </g>
                              </svg>
                              {/* */}
                              {/* */}
                            </div>
                          </ngx-charts-chart>
                        </ngx-charts-bar-horizontal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div _ngcontent-oko-c467 className="row clearfix">
                <div _ngcontent-oko-c467 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div _ngcontent-oko-c467 className="card">
                    <div _ngcontent-oko-c467 className="header">
                      <h2 _ngcontent-oko-c467>LINE CHART</h2>
                    </div>
                    <div _ngcontent-oko-c467 className="body">
                      <div _ngcontent-oko-c467 style={{"height":"400px"}}>
                        <ngx-charts-line-chart _ngcontent-oko-c467 className="ng-tns-c296-483 ng-star-inserted">
                          <ngx-charts-chart className="ng-tns-c296-483">
                            <div className="ngx-charts-outer" style={{"width":"920px","height":"400px"}}>
                              <svg className="ngx-charts" height={400} width={920}>
                                <defs>
                                  <clipPath className="ng-tns-c296-483" id="clipa3nfw">
                                    <rect className="ng-tns-c296-483" height={271} transform="translate(-5, -5)" width={804} />
                                  </clipPath>
                                </defs>
                                <g className="line-chart chart" transform="translate(111 , 10)">
                                  <g className="ng-tns-c296-483 ng-star-inserted" ngx-charts-x-axis>
                                    <g className="x axis" transform="translate(0,266)">
                                      <g className="ng-star-inserted" ngx-charts-x-axis-ticks>
                                        <g>
                                          <g className="tick ng-star-inserted" transform="translate(24.8125,20)">
                                            <title>2010</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              2010
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(272.9375,20)">
                                            <title>2011</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              2011
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(521.0625,20)">
                                            <title>2012</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              2012
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(769.1875,20)">
                                            <title>2013</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              2013
                                            </text>
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(24.8125,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-261} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(272.9375,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-261} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(521.0625,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-261} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(769.1875,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-261} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                      </g>
                                      {/* */}
                                      <g className="ng-star-inserted" ngx-charts-axis-label>
                                        <text strokeWidth="0.01" textAnchor="middle" transform x={397} y={44}>
                                          Year
                                        </text>
                                      </g>
                                      {/* */}
                                    </g>
                                  </g>
                                  {/* */}
                                  <g className="ng-tns-c296-483 ng-star-inserted" ngx-charts-y-axis>
                                    <g className="y axis" transform="translate(-5 , 0)">
                                      <g className="ng-star-inserted" ngx-charts-y-axis-ticks>
                                        <g>
                                          <g className="tick ng-star-inserted" transform="translate(0,237.62686567164178)">
                                            <title>5,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              5,000,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,181.97654584221746)">
                                            <title>6,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              6,000,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,126.32622601279317)">
                                            <title>7,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              7,000,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,70.67590618336888)">
                                            <title>8,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              8,000,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,15.025586353944565)">
                                            <title>9,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              9,000,000
                                            </text>
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                        <g className="ng-star-inserted" transform="translate(0,237.62686567164178)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={794} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,181.97654584221746)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={794} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,126.32622601279317)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={794} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,70.67590618336888)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={794} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,15.025586353944565)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={794} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                        {/* */}
                                      </g>
                                      {/* */}
                                      <g className="ng-star-inserted" ngx-charts-axis-label>
                                        <text strokeWidth="0.01" textAnchor="middle" transform="rotate(270)" x="-130.5" y={-81}>
                                          Sales
                                        </text>
                                      </g>
                                      {/* */}
                                    </g>
                                  </g>
                                  {/* */}
                                  <g className="ng-tns-c296-483" clipPath="url(#clipa3nfw)">
                                    <g className="ng-tns-c296-483 ng-star-inserted">
                                      <g className="ng-tns-c296-483 ng-trigger ng-trigger-animationState ng-star-inserted">
                                        <g className="ng-tns-c296-483" ngx-charts-line-series>
                                          <g>
                                            <defs>
                                              {/* */}
                                            </defs>
                                            <g className="line-highlight" ngx-charts-area>
                                              <defs className="ng-star-inserted" style={{}}>
                                                <g ngx-charts-svg-linear-gradient>
                                                  <linearGradient id="gradazxwe" x1="0%" x2="0%" y1="100%" y2="0%">
                                                    <stop className="ng-star-inserted" offset="0%" style={{"stop-color":"rgb(                                                            147,                                                            112,                                                            219                                                          )","stop-opacity":"0"}} />
                                                    <stop className="ng-star-inserted" offset="100%" style={{"stop-color":"rgb(                                                            147,                                                            112,                                                            219                                                          )","stop-opacity":"1"}} />
                                                    {/* */}
                                                  </linearGradient>
                                                </g>
                                              </defs>
                                              {/* */}
                                              <path className="area" d="M24.8125,109.6311300639659L66.16666666666667,123.17270788912582C107.52083333333333,136.71428571428572,190.22916666666666,163.79744136460553,272.9375,161.20042643923242C355.6458333333333,158.60341151385927,438.3541666666667,126.32622601279316,521.0625,107.03411513859275C603.7708333333334,87.74200426439232,686.4791666666666,81.43496801705757,727.8333333333334,78.28144989339019L769.1875,75.12793176972282L769.1875,261L727.8333333333334,261C686.4791666666666,261,603.7708333333334,261,521.0625,261C438.3541666666667,261,355.6458333333333,261,272.9375,261C190.22916666666666,261,107.52083333333333,261,66.16666666666667,261L24.8125,261Z" fill="url(#gradazxwe)" style={{"opacity":"0.25"}} />
                                            </g>
                                            <g className="line-series ng-tns-c294-487 ng-star-inserted" ngx-charts-line style={{}}>
                                              <g className="ng-tns-c294-487 ng-star-inserted">
                                                <path className="line ng-tns-c294-487 ng-trigger ng-trigger-animationState" d="M24.8125,109.6311300639659L66.16666666666667,123.17270788912582C107.52083333333333,136.71428571428572,190.22916666666666,163.79744136460553,272.9375,161.20042643923242C355.6458333333333,158.60341151385927,438.3541666666667,126.32622601279316,521.0625,107.03411513859275C603.7708333333334,87.74200426439232,686.4791666666666,81.43496801705757,727.8333333333334,78.28144989339019L769.1875,75.12793176972282" fill="none" stroke="#9370DB" strokeWidth="1.5px" />
                                              </g>
                                              {/* */}
                                              {/* */}
                                            </g>
                                            {/* */}
                                          </g>
                                        </g>
                                      </g>
                                      <g className="ng-tns-c296-483 ng-trigger ng-trigger-animationState ng-star-inserted">
                                        <g className="ng-tns-c296-483" ngx-charts-line-series>
                                          <g>
                                            <defs>
                                              {/* */}
                                            </defs>
                                            <g className="line-highlight" ngx-charts-area>
                                              <defs className="ng-star-inserted" style={{}}>
                                                <g ngx-charts-svg-linear-gradient>
                                                  <linearGradient id="gradalxqj" x1="0%" x2="0%" y1="100%" y2="0%">
                                                    <stop className="ng-star-inserted" offset="0%" style={{"stop-color":"rgb(                                                            135,                                                            206,                                                            250                                                          )","stop-opacity":"0"}} />
                                                    <stop className="ng-star-inserted" offset="100%" style={{"stop-color":"rgb(                                                            135,                                                            206,                                                            250                                                          )","stop-opacity":"1"}} />
                                                    {/* */}
                                                  </linearGradient>
                                                </g>
                                              </defs>
                                              {/* */}
                                              <path className="area" d="M24.8125,211.47121535181236L66.16666666666667,176.22601279317698C107.52083333333333,140.98081023454156,190.22916666666666,70.49040511727078,272.9375,72.25266524520255C355.6458333333333,74.01492537313433,438.3541666666667,148.02985074626866,521.0625,154.42963752665244C603.7708333333334,160.82942430703625,686.4791666666666,99.61407249466951,727.8333333333334,69.00639658848614L769.1875,38.39872068230278L769.1875,261L727.8333333333334,261C686.4791666666666,261,603.7708333333334,261,521.0625,261C438.3541666666667,261,355.6458333333333,261,272.9375,261C190.22916666666666,261,107.52083333333333,261,66.16666666666667,261L24.8125,261Z" fill="url(#gradalxqj)" style={{"opacity":"0.25"}} />
                                            </g>
                                            <g className="line-series ng-tns-c294-488 ng-star-inserted" ngx-charts-line style={{}}>
                                              <g className="ng-tns-c294-488 ng-star-inserted">
                                                <path className="line ng-tns-c294-488 ng-trigger ng-trigger-animationState" d="M24.8125,211.47121535181236L66.16666666666667,176.22601279317698C107.52083333333333,140.98081023454156,190.22916666666666,70.49040511727078,272.9375,72.25266524520255C355.6458333333333,74.01492537313433,438.3541666666667,148.02985074626866,521.0625,154.42963752665244C603.7708333333334,160.82942430703625,686.4791666666666,99.61407249466951,727.8333333333334,69.00639658848614L769.1875,38.39872068230278" fill="none" stroke="#87CEFA" strokeWidth="1.5px" />
                                              </g>
                                              {/* */}
                                              {/* */}
                                            </g>
                                            {/* */}
                                          </g>
                                        </g>
                                      </g>
                                      <g className="ng-tns-c296-483 ng-trigger ng-trigger-animationState ng-star-inserted">
                                        <g className="ng-tns-c296-483" ngx-charts-line-series>
                                          <g>
                                            <defs>
                                              {/* */}
                                            </defs>
                                            <g className="line-highlight" ngx-charts-area>
                                              <defs className="ng-star-inserted" style={{}}>
                                                <g ngx-charts-svg-linear-gradient>
                                                  <linearGradient id="gradaku0j" x1="0%" x2="0%" y1="100%" y2="0%">
                                                    <stop className="ng-star-inserted" offset="0%" style={{"stop-color":"rgb(                                                            250,                                                            128,                                                            114                                                          )","stop-opacity":"0"}} />
                                                    <stop className="ng-star-inserted" offset="100%" style={{"stop-color":"rgb(                                                            250,                                                            128,                                                            114                                                          )","stop-opacity":"1"}} />
                                                    {/* */}
                                                  </linearGradient>
                                                </g>
                                              </defs>
                                              {/* */}
                                              <path className="area" d="M24.8125,237.62675437100214L66.16666666666667,230.20673027718553C107.52083333333333,222.78670618336886,190.22916666666666,207.9466579957356,272.9375,211.84219893390193C355.6458333333333,215.73773987206823,438.3541666666667,238.36886993603412,521.0625,218.70575692963754C603.7708333333334,199.04264392324095,686.4791666666666,137.08528784648186,727.8333333333334,106.10660980810235L769.1875,75.12793176972282L769.1875,261L727.8333333333334,261C686.4791666666666,261,603.7708333333334,261,521.0625,261C438.3541666666667,261,355.6458333333333,261,272.9375,261C190.22916666666666,261,107.52083333333333,261,66.16666666666667,261L24.8125,261Z" fill="url(#gradaku0j)" style={{"opacity":"0.25"}} />
                                            </g>
                                            <g className="line-series ng-tns-c294-489 ng-star-inserted" ngx-charts-line style={{}}>
                                              <g className="ng-tns-c294-489 ng-star-inserted">
                                                <path className="line ng-tns-c294-489 ng-trigger ng-trigger-animationState" d="M24.8125,237.62675437100214L66.16666666666667,230.20673027718553C107.52083333333333,222.78670618336886,190.22916666666666,207.9466579957356,272.9375,211.84219893390193C355.6458333333333,215.73773987206823,438.3541666666667,238.36886993603412,521.0625,218.70575692963754C603.7708333333334,199.04264392324095,686.4791666666666,137.08528784648186,727.8333333333334,106.10660980810235L769.1875,75.12793176972282" fill="none" stroke="#FA8072" strokeWidth="1.5px" />
                                              </g>
                                              {/* */}
                                              {/* */}
                                            </g>
                                            {/* */}
                                          </g>
                                        </g>
                                      </g>
                                      {/* */}
                                    </g>
                                    {/* */}
                                    {/* */}
                                    <g className="ng-tns-c296-483 ng-star-inserted">
                                      <g className="ng-tns-c296-483 ng-tns-c284-486 ng-star-inserted" ngx-charts-tooltip-area>
                                        <g className="ng-tns-c284-486">
                                          <rect className="tooltip-area ng-tns-c284-486" height={261} style={{"opacity":"0","cursor":"auto"}} width={794} x={0} y={0} />
                                          {/* */}
                                          <rect className="tooltip-anchor ng-tns-c284-486 ng-trigger ng-trigger-animationState" height={261} ngx-tooltip style={{"opacity":"0","pointer-events":"none"}} width={1} x={-1} y={0} />
                                          {/* */}
                                        </g>
                                      </g>
                                      <g className="ng-tns-c296-483 ng-star-inserted">
                                        <g className="ng-tns-c296-483 ng-tns-c280-506 ng-star-inserted" ngx-charts-circle-series>
                                          {/* */}
                                        </g>
                                      </g>
                                      <g className="ng-tns-c296-483 ng-star-inserted">
                                        <g className="ng-tns-c296-483 ng-tns-c280-507 ng-star-inserted" ngx-charts-circle-series>
                                          {/* */}
                                        </g>
                                      </g>
                                      <g className="ng-tns-c296-483 ng-star-inserted">
                                        <g className="ng-tns-c296-483 ng-tns-c280-508 ng-star-inserted" ngx-charts-circle-series>
                                          {/* */}
                                        </g>
                                      </g>
                                      {/* */}
                                    </g>
                                    {/* */}
                                  </g>
                                </g>
                                {/* */}
                              </svg>
                              {/* */}
                              {/* */}
                            </div>
                          </ngx-charts-chart>
                        </ngx-charts-line-chart>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div _ngcontent-oko-c467 className="row clearfix">
                <div _ngcontent-oko-c467 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div _ngcontent-oko-c467 className="card">
                    <div _ngcontent-oko-c467 className="header">
                      <h2 _ngcontent-oko-c467>AREA CHART</h2>
                    </div>
                    <div _ngcontent-oko-c467 className="body">
                      <div _ngcontent-oko-c467 style={{"height":"400px"}}>
                        <ngx-charts-area-chart _ngcontent-oko-c467>
                          <ngx-charts-chart>
                            <div className="ngx-charts-outer" style={{"width":"920px","height":"400px"}}>
                              <svg className="ngx-charts" height={400} width={920}>
                                <defs>
                                  <clipPath id="clipasn5k">
                                    <rect height={341} transform="translate(-5, -5)" width={804} />
                                  </clipPath>
                                </defs>
                                <g className="area-chart chart" transform="translate(111, 10)">
                                  <g className="ng-star-inserted" ngx-charts-x-axis>
                                    <g className="x axis" transform="translate(0,336)">
                                      <g className="ng-star-inserted" ngx-charts-x-axis-ticks>
                                        <g>
                                          <g className="tick ng-star-inserted" transform="translate(24.8125,20)">
                                            <title>2010</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              2010
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(272.9375,20)">
                                            <title>2011</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              2011
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(521.0625,20)">
                                            <title>2012</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              2012
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(769.1875,20)">
                                            <title>2013</title>
                                            <text strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="middle" transform>
                                              2013
                                            </text>
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(24.8125,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(272.9375,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(521.0625,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(769.1875,20)">
                                          <g className="ng-star-inserted" transform="translate(0,-25)">
                                            <line className="gridline-path gridline-path-vertical" y1={-331} y2={0} />
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                      </g>
                                      {/* */}
                                      <g className="ng-star-inserted" ngx-charts-axis-label>
                                        <text strokeWidth="0.01" textAnchor="middle" transform x={397} y={44}>
                                          Year
                                        </text>
                                      </g>
                                      {/* */}
                                    </g>
                                  </g>
                                  {/* */}
                                  <g className="ng-star-inserted" ngx-charts-y-axis>
                                    <g className="y axis" transform="translate(-5 , 0)">
                                      <g className="ng-star-inserted" ngx-charts-y-axis-ticks>
                                        <g>
                                          <g className="tick ng-star-inserted" transform="translate(0,301.35820895522386)">
                                            <title>5,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              5,000,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,230.7825159914712)">
                                            <title>6,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              6,000,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,160.20682302771854)">
                                            <title>7,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              7,000,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,89.6311300639659)">
                                            <title>8,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              8,000,000
                                            </text>
                                          </g>
                                          <g className="tick ng-star-inserted" transform="translate(0,19.055437100213222)">
                                            <title>9,000,000</title>
                                            <text dy=".32em" strokeWidth="0.01" style={{"font-size":"12px"}} textAnchor="end" x={-9}>
                                              9,000,000
                                            </text>
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                        <g className="ng-star-inserted" transform="translate(0,301.35820895522386)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={794} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,230.7825159914712)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={794} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,160.20682302771854)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={794} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,89.6311300639659)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={794} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        <g className="ng-star-inserted" transform="translate(0,19.055437100213222)">
                                          <g className="ng-star-inserted" transform="translate(5,0)">
                                            <line className="gridline-path gridline-path-horizontal ng-star-inserted" x1={0} x2={794} />
                                            {/* */}
                                            {/* */}
                                          </g>
                                          {/* */}
                                        </g>
                                        {/* */}
                                        {/* */}
                                      </g>
                                      {/* */}
                                      <g className="ng-star-inserted" ngx-charts-axis-label>
                                        <text strokeWidth="0.01" textAnchor="middle" transform="rotate(270)" x="-165.5" y={-81}>
                                          Sales
                                        </text>
                                      </g>
                                      {/* */}
                                    </g>
                                  </g>
                                  {/* */}
                                  <g clipPath="url(#clipasn5k)">
                                    <g className="ng-star-inserted">
                                      <g ngx-charts-area-series>
                                        <g className="area-series" ngx-charts-area>
                                          {/* */}
                                          <path className="area" d="M24.8125,139.03411513859277L66.16666666666667,156.2075337597726C107.52083333333333,173.38095238095238,190.22916666666666,207.727789623312,272.9375,204.43425728500355C355.6458333333333,201.1407249466951,438.3541666666667,160.20682302771854,521.0625,135.74058280028427C603.7708333333334,111.27434257285005,686.4791666666666,103.27576403695808,727.8333333333334,99.2764747690121L769.1875,95.27718550106611L769.1875,331L727.8333333333334,331C686.4791666666666,331,603.7708333333334,331,521.0625,331C438.3541666666667,331,355.6458333333333,331,272.9375,331C190.22916666666666,331,107.52083333333333,331,66.16666666666667,331L24.8125,331Z" fill="#9370DB" style={{"opacity":"0.8"}} />
                                        </g>
                                      </g>
                                    </g>
                                    <g className="ng-star-inserted">
                                      <g ngx-charts-area-series>
                                        <g className="area-series" ngx-charts-area>
                                          {/* */}
                                          <path className="area" d="M24.8125,268.18763326226014L66.16666666666667,223.48969438521678C107.52083333333333,178.79175550817342,190.22916666666666,89.39587775408671,272.9375,91.63077469793888C355.6458333333333,93.86567164179104,438.3541666666667,187.73134328358208,521.0625,195.84754797441363C603.7708333333334,203.9637526652452,686.4791666666666,126.33049040511726,727.8333333333334,87.51385927505332L769.1875,48.69722814498935L769.1875,331L727.8333333333334,331C686.4791666666666,331,603.7708333333334,331,521.0625,331C438.3541666666667,331,355.6458333333333,331,272.9375,331C190.22916666666666,331,107.52083333333333,331,66.16666666666667,331L24.8125,331Z" fill="#87CEFA" style={{"opacity":"0.8"}} />
                                        </g>
                                      </g>
                                    </g>
                                    <g className="ng-star-inserted">
                                      <g ngx-charts-area-series>
                                        <g className="area-series" ngx-charts-area>
                                          {/* */}
                                          <path className="area" d="M24.8125,301.35806780383797L66.16666666666667,291.94799893390194C107.52083333333333,282.5379300639659,190.22916666666666,263.7177923240938,272.9375,268.6581143567875C355.6458333333333,273.59843638948115,438.3541666666667,302.2992181947406,521.0625,277.36247334754796C603.7708333333334,252.42572850035538,686.4791666666666,173.85145700071075,727.8333333333334,134.56432125088844L769.1875,95.27718550106611L769.1875,331L727.8333333333334,331C686.4791666666666,331,603.7708333333334,331,521.0625,331C438.3541666666667,331,355.6458333333333,331,272.9375,331C190.22916666666666,331,107.52083333333333,331,66.16666666666667,331L24.8125,331Z" fill="#FA8072" style={{"opacity":"0.8"}} />
                                        </g>
                                      </g>
                                    </g>
                                    {/* */}
                                    <g className="ng-star-inserted">
                                      <g className="ng-tns-c284-493 ng-star-inserted" ngx-charts-tooltip-area>
                                        <g className="ng-tns-c284-493">
                                          <rect className="tooltip-area ng-tns-c284-493" height={331} style={{"opacity":"0","cursor":"auto"}} width={794} x={0} y={0} />
                                          {/* */}
                                          <rect className="tooltip-anchor ng-tns-c284-493 ng-trigger ng-trigger-animationState" height={331} ngx-tooltip style={{"opacity":"0","pointer-events":"none"}} width={1} x={-1} y={0} />
                                          {/* */}
                                        </g>
                                      </g>
                                      <g className="ng-star-inserted">
                                        <g className="ng-tns-c280-512 ng-star-inserted" ngx-charts-circle-series>
                                          {/* */}
                                        </g>
                                      </g>
                                      <g className="ng-star-inserted">
                                        <g className="ng-tns-c280-513 ng-star-inserted" ngx-charts-circle-series>
                                          {/* */}
                                        </g>
                                      </g>
                                      <g className="ng-star-inserted">
                                        <g className="ng-tns-c280-514 ng-star-inserted" ngx-charts-circle-series>
                                          {/* */}
                                        </g>
                                      </g>
                                      {/* */}
                                    </g>
                                    {/* */}
                                  </g>
                                </g>
                                {/* */}
                              </svg>
                              {/* */}
                              {/* */}
                            </div>
                          </ngx-charts-chart>
                        </ngx-charts-area-chart>
                      </div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-oko-c467 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div _ngcontent-oko-c467 className="card">
                    <div _ngcontent-oko-c467 className="header">
                      <h2 _ngcontent-oko-c467>PIE CHART</h2>
                    </div>
                    <div _ngcontent-oko-c467 className="body">
                      <div _ngcontent-oko-c467 style={{"height":"400px"}}>
                        <ngx-charts-pie-chart _ngcontent-oko-c467>
                          <ngx-charts-chart>
                            <div className="ngx-charts-outer" style={{"width":"920px","height":"400px"}}>
                              <svg className="ngx-charts" height={400} width={920}>
                                <g className="pie-chart chart" transform="translate(460, 200)">
                                  <g ngx-charts-pie-series>
                                    <g className="ng-star-inserted">
                                      <g className="ng-star-inserted" ngx-charts-pie-label>
                                        <title>China</title>
                                        <g style={{"-webkit-transform":"translate3d(                                                170px,                                                -86.6006px,                                                0px                                              )","-ms-transform":"translate3d(                                                170px,                                                -86.6006px,                                                0px                                              )","transform":"translate3d(                                                170px,                                                -86.6006px,                                                0px                                              )","-webkit-transition":"transform 0.75s ease                                                0s","transition":"transform 0.75s ease                                                0s"}}>
                                          <text className="pie-label animation" dy=".35em" style={{"-webkit-text-anchor":"start","text-anchor":"start","shape-rendering":"crispedges"}}>
                                            China
                                          </text>
                                        </g>
                                        <path className="pie-label-line line animation" d="M97.5256951425675,-57.733726983483656L146.28854271385126,-86.60059047522549L170,-86.60059047522549" fill="none" stroke="#9370DB" />
                                      </g>
                                      {/* */}
                                      <g ngx-charts-pie-arc ngx-tooltip>
                                        <g className="arc-group">
                                          {/* */}
                                          <path className="arc" d="M6.9396651951683345e-15,-113.33333333333333A113.33333333333333,113.33333333333333,0,0,1,99.36215042180207,54.512452779155154L0,0Z" fill="#9370DB" style={{"pointer-events":"auto"}} />
                                        </g>
                                      </g>
                                      {/* */}
                                    </g>
                                    <g className="ng-star-inserted">
                                      <g className="ng-star-inserted" ngx-charts-pie-label>
                                        <title>USA</title>
                                        <g style={{"-webkit-transform":"translate3d(                                                170px,                                                165.69px,                                                0px                                              )","-ms-transform":"translate3d(                                                170px,                                                165.69px,                                                0px                                              )","transform":"translate3d(                                                170px,                                                165.69px,                                                0px                                              )","-webkit-transition":"transform 0.75s ease                                                0s","transition":"transform 0.75s ease                                                0s"}}>
                                          <text className="pie-label animation" dy=".35em" style={{"-webkit-text-anchor":"start","text-anchor":"start","shape-rendering":"crispedges"}}>
                                            USA
                                          </text>
                                        </g>
                                        <path className="pie-label-line line animation" d="M25.359175232263937,110.45975138476356L38.03876284839591,165.68962707714536L170,165.68962707714536" fill="none" stroke="#87CEFA" />
                                      </g>
                                      {/* */}
                                      <g ngx-charts-pie-arc ngx-tooltip>
                                        <g className="arc-group">
                                          {/* */}
                                          <path className="arc" d="M99.36215042180207,54.512452779155154A113.33333333333333,113.33333333333333,0,0,1,-65.63595334329179,92.3924567979533L0,0Z" fill="#87CEFA" style={{"pointer-events":"auto"}} />
                                        </g>
                                      </g>
                                      {/* */}
                                    </g>
                                    <g className="ng-star-inserted">
                                      <g className="ng-star-inserted" ngx-charts-pie-label>
                                        <title>India</title>
                                        <g style={{"-webkit-transform":"translate3d(                                                -170px,                                                67.9297px,                                                0px                                              )","-ms-transform":"translate3d(                                                -170px,                                                67.9297px,                                                0px                                              )","transform":"translate3d(                                                -170px,                                                67.9297px,                                                0px                                              )","-webkit-transition":"transform 0.75s ease                                                0s","transition":"transform 0.75s ease                                                0s"}}>
                                          <text className="pie-label animation" dy=".35em" style={{"-webkit-text-anchor":"end","text-anchor":"end","shape-rendering":"crispedges"}}>
                                            India
                                          </text>
                                        </g>
                                        <path className="pie-label-line line animation" d="M-103.89215034141809,45.28648299305902L-155.83822551212714,67.92972448958852L-170,67.92972448958852" fill="none" stroke="#FA8072" />
                                      </g>
                                      {/* */}
                                      <g ngx-charts-pie-arc ngx-tooltip>
                                        <g className="arc-group">
                                          {/* */}
                                          <path className="arc" d="M-65.63595334329179,92.3924567979533A113.33333333333333,113.33333333333333,0,0,1,-112.36240996639405,-14.803150711535515L0,0Z" fill="#FA8072" style={{"pointer-events":"auto"}} />
                                        </g>
                                      </g>
                                      {/* */}
                                    </g>
                                    <g className="ng-star-inserted">
                                      <g className="ng-star-inserted" ngx-charts-pie-label>
                                        <title>Japan</title>
                                        <g style={{"-webkit-transform":"translate3d(                                                -170px,                                                -85.4952px,                                                0px                                              )","-ms-transform":"translate3d(                                                -170px,                                                -85.4952px,                                                0px                                              )","transform":"translate3d(                                                -170px,                                                -85.4952px,                                                0px                                              )","-webkit-transition":"transform 0.75s ease                                                0s","transition":"transform 0.75s ease                                                0s"}}>
                                          <text className="pie-label animation" dy=".35em" style={{"-webkit-text-anchor":"end","text-anchor":"end","shape-rendering":"crispedges"}}>
                                            Japan
                                          </text>
                                        </g>
                                        <path className="pie-label-line line animation" d="M-97.958216181696,-56.9967747065091L-146.93732427254398,-85.49516205976364L-170,-85.49516205976364" fill="none" stroke="#FF7F50" />
                                      </g>
                                      {/* */}
                                      <g ngx-charts-pie-arc ngx-tooltip>
                                        <g className="arc-group">
                                          {/* */}
                                          <path className="arc" d="M-112.36240996639405,-14.803150711535515A113.33333333333333,113.33333333333333,0,0,1,-68.3941882193762,-90.36968220734754L0,0Z" fill="#FF7F50" style={{"pointer-events":"auto"}} />
                                        </g>
                                      </g>
                                      {/* */}
                                    </g>
                                    <g className="ng-star-inserted">
                                      <g className="ng-star-inserted" ngx-charts-pie-label>
                                        <title>Germany</title>
                                        <g style={{"-webkit-transform":"translate3d(                                                -170px,                                                -155.334px,                                                0px                                              )","-ms-transform":"translate3d(                                                -170px,                                                -155.334px,                                                0px                                              )","transform":"translate3d(                                                -170px,                                                -155.334px,                                                0px                                              )","-webkit-transition":"transform 0.75s ease                                                0s","transition":"transform 0.75s ease                                                0s"}}>
                                          <text className="pie-label animation" dy=".35em" style={{"-webkit-text-anchor":"end","text-anchor":"end","shape-rendering":"crispedges"}}>
                                            Germany
                                          </text>
                                        </g>
                                        <path className="pie-label-line line animation" d="M-46.050406008585625,-103.55580404250098L-69.07560901287845,-155.3337060637515L-170,-155.3337060637515" fill="none" stroke="#90EE90" />
                                      </g>
                                      {/* */}
                                      <g ngx-charts-pie-arc ngx-tooltip>
                                        <g className="arc-group">
                                          {/* */}
                                          <path className="arc" d="M-68.3941882193762,-90.36968220734754A113.33333333333333,113.33333333333333,0,0,1,-21.293333264043238,-111.315041225123L0,0Z" fill="#90EE90" style={{"pointer-events":"auto"}} />
                                        </g>
                                      </g>
                                      {/* */}
                                    </g>
                                    <g className="ng-star-inserted">
                                      <g className="ng-star-inserted" ngx-charts-pie-label>
                                        <title>France</title>
                                        <g style={{"-webkit-transform":"translate3d(                                                -170px,                                                -169.241px,                                                0px                                              )","-ms-transform":"translate3d(                                                -170px,                                                -169.241px,                                                0px                                              )","transform":"translate3d(                                                -170px,                                                -169.241px,                                                0px                                              )","-webkit-transition":"transform 0.75s ease                                                0s","transition":"transform 0.75s ease                                                0s"}}>
                                          <text className="pie-label animation" dy=".35em" style={{"-webkit-text-anchor":"end","text-anchor":"end","shape-rendering":"crispedges"}}>
                                            France
                                          </text>
                                        </g>
                                        <path className="pie-label-line line animation" d="M-10.694385729527427,-112.82763206906596L-16.041578594291142,-169.24144810359894L-170,-169.24144810359894" fill="none" stroke="#9370DB" />
                                      </g>
                                      {/* */}
                                      <g ngx-charts-pie-arc ngx-tooltip>
                                        <g className="arc-group">
                                          {/* */}
                                          <path className="arc" d="M-21.293333264043238,-111.315041225123A113.33333333333333,113.33333333333333,0,0,1,-1.214792164848525e-13,-113.33333333333333L0,0Z" fill="#9370DB" style={{"pointer-events":"auto"}} />
                                        </g>
                                      </g>
                                      {/* */}
                                    </g>
                                    {/* */}
                                  </g>
                                </g>
                              </svg>
                              {/* */}
                              {/* */}
                            </div>
                          </ngx-charts-chart>
                        </ngx-charts-pie-chart>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </app-ngxchart>
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