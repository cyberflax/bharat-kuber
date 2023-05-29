import React, { useState } from "react";
// import "../mainsection/dashdash.css"
import "../../kuber/madhav/Madhav.css"
import "../../../main.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/esm/Accordion';
import a2 from "../img/a2.png";
import a4 from "../img/a4.jpg";
import a5 from "../img/a5.png";
import a6 from "../img/contct.png";
import a9 from "../img/a9.png";
import a12 from "../img/a12.png";
import a13 from "../img/a13.png";
import a15 from "../img/a15.png";
import a21 from "../img/a21.png";
import a30 from "../img/pc.png"
import a31 from "../img/logout.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
 
} from "@fortawesome/free-solid-svg-icons";


export function EmployeDashBord() {
  const [isOpen, setIsOpen] = useState(true);
  // const [isShow, setIsShow] = useState(false);


  function handleTrigger() {
    setIsOpen(!isOpen);
  }
  // const handleTrigger = () => setIsShow(!isShow);

  return (
    <>
      <div className="App">
        <div className="page">
          <div className="content1">
            <app-header _nghost-hni-c131>
              <nav _ngcontent-hni-c131 className="navbar active">
                <div _ngcontent-hni-c131 className="container-fluid">
                 
                  <div _ngcontent-hni-c131 className="collapse navbar-collapse">
                    <ul _ngcontent-hni-c131 className="float-start collapse-menu-icon">
                     
                    </ul>
                    <ul _ngcontent-hni-c131 className="nav navbar-nav navbar-right">
                      <li _ngcontent-hni-c131 className="fullscreen">
                        <button _ngcontent-hni-c131 className="nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                          </span>
                          <span className="mdc-button__label">
                            <app-feather-icons _ngcontent-hni-c131 _nghost-hni-c130>
                              <i-feather _ngcontent-hni-c130 _nghost-hni-c112 className="header-icon">
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
                      <li _ngcontent-hni-c131 className="nav-item">
                        <button _ngcontent-hni-c131 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger dropdown-btn nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                          </span>
                          <span className="mdc-button__label">
                            {/* */}
                            <img _ngcontent-hni-c131 className="ng-star-inserted" alt="flag" height={16} src="../../assets/images/flags/us.jpg" />
                            {/* */}
                          </span>
                          <span className="mat-mdc-focus-indicator"> </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target"> </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-hni-c131 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                      <li _ngcontent-hni-c131 className="nav-item btnNotification" ngbdropdown>
                        <button _ngcontent-hni-c131 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger nav-notification-icons mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">

                          </span>

                          <span className="mdc-button__label">
                            <app-feather-icons _ngcontent-hni-c131 _nghost-hni-c130>
                              <i-feather _ngcontent-hni-c130 _nghost-hni-c112 className="header-icon">
                                <svg className="feather feather-bell" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                              </i-feather>
                            </app-feather-icons>
                            <span _ngcontent-hni-c131 className="label-count bg-orange">
                            </span>
                          </span>
                          <span className="mat-mdc-focus-indicator"> </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target"> </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-hni-c131 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                      <li _ngcontent-hni-c131 className="nav-item user_profile">
                        <button _ngcontent-hni-c131 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base" mat-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                          </span>
                          <span className="mdc-button__label">
                            <div className="dropdown">
                              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span _ngcontent-hni-c131 style={{color:"black"}}> Ella Jones </span>
                                <img _ngcontent-hni-c131 alt="User" className="user_img" height={32} src="../../assets/images/user/admin.jpg" width={32} />
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" href="#">Account</Link>
                                <Link className="dropdown-item" href="#">Inbox</Link>
                                <Link className="dropdown-item" href="#">Settings</Link>
                                <Link className="dropdown-item" href="#">Logout</Link>
                              </div>
                            </div>
                          </span>
                          <span className="mat-mdc-focus-indicator"> </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target"> </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-hni-c131 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </app-header>
          </div>

          <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>


            <Link to="/dashboard" className="sidebar-position">

              <img _ngcontent-hni-c131 alt="logo" src="../../assets/images/logo.png" />
              <h3><span style={{ color: "black" }} >   Cyber-Instant </span></h3>
            </Link>
            <div className="trigger" onClick={handleTrigger}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            <div className={`  disp ${isOpen ? "disp--open " : ""}`}>
              <div _ngcontent-sas-c132="" class="user-panel">
                <div _ngcontent-sas-c132="" class="image">
                  <img className="image-admin"
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
                // style={{color:"white"}}
                >
                  Sarah Smith
                </div>
                <div
                  _ngcontent-sas-c132=""
                  class="profile-usertitle-job"
                // style={{color:"white"}}
                >
                Employe
                </div>
              </div>
            </div>


            <div classname="Accord">
              <div className="dash-item mt-4">
                <Link to="/"><img className='img11' src={a30} alt="dash" /></Link><Link to="/" className="adash">Dashboad</Link>
              </div>
              <div className="dash-item">
                <Link to="/Attendance"><img className='img11' src={a12} alt="dash" /></Link> <Link to="/Attendance" className="adash">Attendance</Link>
              </div>
              <div className="dash-item">
                <Link to="/leaves"> <img className='img11' src={a5} alt="dash" /></Link> <Link to="/leaves" className="adash">My Leaves</Link>
              </div>
              <div className="dash-item">
                <Link to="/Team"> <img className='img11' src={a9} alt="dash" /></Link><Link to="/Team" className="adash">My Team</Link>
              </div>
              <div className="dash-item">
                <Link to="/project"> <img className='img11' src={a2} alt="dash" /></Link><Link to="/project" className="adash">My Projects</Link>
              </div>
              <div className="dash-item">
                <Link to="/task"> <img className='img11' src={a13} alt="dash" /></Link> <Link to="/task" className="adash">My Tasks</Link>
              </div>
              <div className="dash-item">
                <Link to="/setting"><img className='img11' src={a4} alt="dash" /></Link><Link to="/setting" className="adash">Settings</Link>
              </div>
              <div className="dash-item">
                <Link to="/chat"> <img className='img11' src={a21} alt="dash" /></Link><Link to="/chat" className="adash">Chat</Link>
              </div>
              <div className="dash-item">
                <Link to="/calender" ><img className='img11' src={a12} alt="dash" /></Link><Link to="/calender" className="adash">Calendar</Link>
              </div>  <div className="dash-item">
                <Link to="/contact"> <img className='img11' src={a6} alt="dash" /></Link><Link to="/contact" className="adash">Contact</Link>
              </div>




              <Accordion defaultActiveKey="0" className="mb-2 Accordmain" style={{  width: "90%",
      margin: "auto" ,overflow:"hidden"}} >
                <Accordion.Item eventKey="1" className="accordion-item">
                  <Accordion.Header  ><img className='img2' src={a15} alt="dash" /><p className="adash">Email</p></Accordion.Header>
                  <Accordion.Body>

                    <Dropdown.Item ><Link to="/compose" className='text-center link1'> Compose</Link ></Dropdown.Item>
                    <Dropdown.Item ><Link to="/inbox" className='link1'>Inbox</Link ></Dropdown.Item>
                    <Dropdown.Item ><Link to="/readmail" className='link1'>ReadMail</Link ></Dropdown.Item>

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>  <div className="dash-item">
              <img className='img11' src={a31} alt="dash" /><Link to="/logout" className="adash">Logout</Link>
            </div>



          </div>
        </div>
      </div>

      <div _ngcontent-hni-c142 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>
        <div _ngcontent-pgy-c226 className="block-header">
          <app-breadcrumb _ngcontent-pgy-c226 _nghost-pgy-c225>
            <div _ngcontent-pgy-c225 className="breadcrumb-main">
              <div _ngcontent-pgy-c225 className="row">
                <div _ngcontent-pgy-c225 className="col-6">
                  <div _ngcontent-pgy-c225 className="breadcrumb-title">
                    <h4 _ngcontent-pgy-c225 className="page-title">
                      Dashboard
                    </h4>
                  </div>
                </div>
                <div _ngcontent-pgy-c225 className="col-6">
                  <ul _ngcontent-pgy-c225 className="breadcrumb-list">
                    <li _ngcontent-pgy-c225 className="breadcrumb-item bcrumb-1">
                      <a _ngcontent-pgy-c225 href="/#">
                        <app-feather-icons _ngcontent-pgy-c225 _nghost-pgy-c130>
                          <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="breadcrumb-icon">
                            <svg className="feather feather-home" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                              </path>
                              <polyline points="9 22 9 12 15 12 15 22">
                              </polyline>
                            </svg>
                          </i-feather>
                        </app-feather-icons>
                      </a>
                    </li>
                    <li _ngcontent-pgy-c225 className="breadcrumb-item ng-star-inserted">
                      Home
                    </li>

                    <li _ngcontent-pgy-c225 className="breadcrumb-item active">
                      Dashboard
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </app-breadcrumb>
        </div>
        <div _ngcontent-pgy-c226 className="row">
          <div _ngcontent-pgy-c226 className="col-lg-3 col-sm-6">
            <div _ngcontent-pgy-c226 className="info-box7 bg-c-purple order-info-box7">
              <div _ngcontent-pgy-c226 className="info-box7-block">
                <h4 _ngcontent-pgy-c226 className="m-b-20">
                  New Tickets
                </h4>
                <h2 _ngcontent-pgy-c226 className="text-end">
                  <span _ngcontent-pgy-c226 className="float-start">
                    23
                  </span>
                  <i _ngcontent-pgy-c226 className="fas fa-ticket-alt">
                  </i>
                </h2>
                <p _ngcontent-pgy-c226 className="m-b-0">
                  18% Higher Then Last Month
                </p>
              </div>
            </div>
          </div>
          <div _ngcontent-pgy-c226 className="col-lg-3 col-sm-6">
            <div _ngcontent-pgy-c226 className="info-box7 bg-c-green order-info-box7">
              <div _ngcontent-pgy-c226 className="info-box7-block">
                <h4 _ngcontent-pgy-c226 className="m-b-20">
                  Ticket Resolved
                </h4>
                <h2 _ngcontent-pgy-c226 className="text-end">
                  <span _ngcontent-pgy-c226 className="float-start">
                    20
                  </span>
                  <i _ngcontent-pgy-c226 className="far fa-check-circle">
                  </i>
                </h2>
                <p _ngcontent-pgy-c226 className="m-b-0">
                  21% Higher Then Last Month
                </p>
              </div>
            </div>
          </div>
          <div _ngcontent-pgy-c226 className="col-lg-3 col-sm-6">
            <div _ngcontent-pgy-c226 className="info-box7 bg-c-orange order-info-box7">
              <div _ngcontent-pgy-c226 className="info-box7-block">
                <h4 _ngcontent-pgy-c226 className="m-b-20">
                  Project Assigned
                </h4>
                <h2 _ngcontent-pgy-c226 className="text-end">
                  <span _ngcontent-pgy-c226 className="float-start">
                    13
                  </span>
                  <i _ngcontent-pgy-c226 className="fas fa-briefcase">
                  </i>
                </h2>
                <p _ngcontent-pgy-c226 className="m-b-0">
                  37% Higher Then Last Month
                </p>
              </div>
            </div>
          </div>
          <div _ngcontent-pgy-c226 className="col-lg-3 col-sm-6">
            <div _ngcontent-pgy-c226 className="info-box7 bg-c-blue order-info-box7">
              <div _ngcontent-pgy-c226 className="info-box7-block">
                <h4 _ngcontent-pgy-c226 className="m-b-20">
                  Available Leaves
                </h4>
                <h2 _ngcontent-pgy-c226 className="text-end">
                  <span _ngcontent-pgy-c226 className="float-start">
                    34
                  </span>
                  <i _ngcontent-pgy-c226 className="fas fa-umbrella-beach">
                  </i>
                </h2>
                <p _ngcontent-pgy-c226 className="m-b-0">
                  10% Higher Then Last Month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div _ngcontent-pgy-c226 className="row">
          <div _ngcontent-pgy-c226 className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div _ngcontent-pgy-c226 className="card">
              <div _ngcontent-pgy-c226 className="header">
                <h2 _ngcontent-pgy-c226>
                  Weekly Working Hours
                </h2>
              </div>
              <div _ngcontent-pgy-c226 className="body">
                <apx-chart _ngcontent-pgy-c226 _nghost-pgy-c147>
                  <div _ngcontent-pgy-c147 style={{ "min-height": "365px" }}>
                    <div className="apexcharts-canvas apexchartso56jfq9b apexcharts-theme-light" id="apexchartso56jfq9b" style={{ "width": "596px", "height": "350px", "margin": "auto" }}>
                      <svg className="apexcharts-svg" height={350} id="SvgjsSvg1385" style={{ "background": "transparent" }} transform="translate(0, 0)" version="1.1" width={596} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <foreignObject height={350} width={596} x={0} y={0}>
                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" style={{ "inset": "auto 0px 5px 20px", "position": "absolute", "max-height": "175px" }} xmlns="http://www.w3.org/1999/xhtml">
                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="WorkxHours" style={{ "margin": "2px 5px" }}>
                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{ "background": "rgb(103, 78, 201) !important", "color": "rgb(103, 78, 201)", "height": "12px", "width": "12px", "left": "0px", "top": "0px", "border-width": "0px", "border-color": "rgb(255, 255, 255)", "border-radius": "2px" }}>
                              </span>
                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Work%20Hours" i={0} rel={1} style={{ "color": "rgb(154, 160, 172)", "font-size": "12px", "font-weight": "400", "font-family": "Helvetica, Arial, sans-serif" }}>
                                Work Hours
                              </span>
                            </div>
                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="BreakxHours" style={{ "margin": "2px 5px" }}>
                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{ "background": "rgb(193, 193, 193) !important", "color": "rgb(193, 193, 193)", "height": "12px", "width": "12px", "left": "0px", "top": "0px", "border-width": "0px", "border-color": "rgb(255, 255, 255)", "border-radius": "2px" }}>
                              </span>
                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Break%20Hours" i={1} rel={2} style={{ "color": "rgb(154, 160, 172)", "font-size": "12px", "font-weight": "400", "font-family": "Helvetica, Arial, sans-serif" }}>
                                Break Hours
                              </span>
                            </div>
                          </div>
                          <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                  .apexcharts-legend {\n                                    display: flex;\n                                    overflow: auto;\n                                    padding: 0 10px;\n                                  }\n\n                                  .apexcharts-legend.apx-legend-position-bottom,\n                                  .apexcharts-legend.apx-legend-position-top {\n                                    flex-wrap: wrap\n                                  }\n\n                                  .apexcharts-legend.apx-legend-position-right,\n                                  .apexcharts-legend.apx-legend-position-left {\n                                    flex-direction: column;\n                                    bottom: 0;\n                                  }\n\n                                  .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                  .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                  .apexcharts-legend.apx-legend-position-right,\n                                  .apexcharts-legend.apx-legend-position-left {\n                                    justify-content: flex-start;\n                                  }\n\n                                  .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                  .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                    justify-content: center;\n                                  }\n\n                                  .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                  .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                    justify-content: flex-end;\n                                  }\n\n                                  .apexcharts-legend-series {\n                                    cursor: pointer;\n                                    line-height: normal;\n                                  }\n\n                                  .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series,\n                                  .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {\n                                    display: flex;\n                                    align-items: center;\n                                  }\n\n                                  .apexcharts-legend-text {\n                                    position: relative;\n                                    font-size: 14px;\n                                  }\n\n                                  .apexcharts-legend-text *,\n                                  .apexcharts-legend-marker * {\n                                    pointer-events: none;\n                                  }\n\n                                  .apexcharts-legend-marker {\n                                    position: relative;\n                                    display: inline-block;\n                                    cursor: pointer;\n                                    margin-right: 3px;\n                                    border-style: solid;\n                                  }\n\n                                  .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series,\n                                  .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {\n                                    display: inline-block;\n                                  }\n\n                                  .apexcharts-legend-series.apexcharts-no-click {\n                                    cursor: auto;\n                                  }\n\n                                  .apexcharts-legend .apexcharts-hidden-zero-series,\n                                  .apexcharts-legend .apexcharts-hidden-null-series {\n                                    display: none !important;\n                                  }\n\n                                  .apexcharts-inactive-legend {\n                                    opacity: 0.45;\n                                  }\n                                " }} />
                        </foreignObject>
                        <g className="apexcharts-annotations" id="SvgjsG1388">
                        </g>
                        <g className="apexcharts-yaxis" id="SvgjsG1534" rel={0} transform="translate(24.53125, 0)">
                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG1535">
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1537" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y={32}>
                              <tspan id="SvgjsTspan1538">
                                100.0
                              </tspan>
                              <title>
                                100.0
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1540" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="58.542666563797">
                              <tspan id="SvgjsTspan1541">
                                90.0
                              </tspan>
                              <title>
                                90.0
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1543" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="85.085333127594">
                              <tspan id="SvgjsTspan1544">
                                80.0
                              </tspan>
                              <title>
                                80.0
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1546" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="111.627999691391">
                              <tspan id="SvgjsTspan1547">
                                70.0
                              </tspan>
                              <title>
                                70.0
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1549" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="138.170666255188">
                              <tspan id="SvgjsTspan1550">
                                60.0
                              </tspan>
                              <title>
                                60.0
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1552" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="164.71333281898498">
                              <tspan id="SvgjsTspan1553">
                                50.0
                              </tspan>
                              <title>
                                50.0
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1555" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="191.25599938278197">
                              <tspan id="SvgjsTspan1556">
                                40.0
                              </tspan>
                              <title>
                                40.0
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1558" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="217.79866594657895">
                              <tspan id="SvgjsTspan1559">
                                30.0
                              </tspan>
                              <title>
                                30.0
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1561" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="244.34133251037593">
                              <tspan id="SvgjsTspan1562">
                                20.0
                              </tspan>
                              <title>
                                20.0
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1564" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="270.88399907417295">
                              <tspan id="SvgjsTspan1565">
                                10.0
                              </tspan>
                              <title>
                                10.0
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1567" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="297.42666563796996">
                              <tspan id="SvgjsTspan1568">
                                0.0
                              </tspan>
                              <title>
                                0.0
                              </title>
                            </text>
                          </g>
                        </g>
                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG1387" transform="translate(54.53125, 30)">
                          <defs id="SvgjsDefs1386">
                            <linearGradient id="SvgjsLinearGradient1391" x1={0} x2={0} y1={0} y2={1}>
                              <stop id="SvgjsStop1392" offset={0} stopColor="rgba(216,227,240,0.4)" stopOpacity="0.4">
                              </stop>
                              <stop id="SvgjsStop1393" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5">
                              </stop>
                              <stop id="SvgjsStop1394" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5">
                              </stop>
                            </linearGradient>
                            <clipPath id="gridRectMasko56jfq9b">
                              <rect fill="#fff" height="265.42666563796996" id="SvgjsRect1396" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="535.46875" x={-2} y={0}>
                              </rect>
                            </clipPath>
                            <clipPath id="forecastMasko56jfq9b">
                            </clipPath>
                            <clipPath id="nonForecastMasko56jfq9b">
                            </clipPath>
                            <clipPath id="gridRectMarkerMasko56jfq9b">
                              <rect fill="#fff" height="269.42666563796996" id="SvgjsRect1397" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="535.46875" x={-2} y={-2}>
                              </rect>
                            </clipPath>
                          </defs>
                          <rect className="apexcharts-xcrosshairs" fill="url(#SvgjsLinearGradient1391)" fillOpacity="0.9" filter="none" height="265.42666563796996" id="SvgjsRect1395" opacity={1} rx={0} ry={0} strokeDasharray={3} strokeWidth={0} width="31.00234375" x={0} y={0} y2="265.42666563796996">
                          </rect>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1482" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="266.42666563796996" y2="272.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1484" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="88.578125" x2="88.578125" y1="266.42666563796996" y2="272.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1486" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="177.15625" x2="177.15625" y1="266.42666563796996" y2="272.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1488" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="265.734375" x2="265.734375" y1="266.42666563796996" y2="272.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1490" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="354.3125" x2="354.3125" y1="266.42666563796996" y2="272.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1492" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="442.890625" x2="442.890625" y1="266.42666563796996" y2="272.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1494" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="531.46875" x2="531.46875" y1="266.42666563796996" y2="272.42666563796996">
                          </line>
                          <g className="apexcharts-grid" id="SvgjsG1477">
                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG1478">
                              <line className="apexcharts-gridline" id="SvgjsLine1496" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1="26.542666563796995" y2="26.542666563796995">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1497" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1="53.08533312759399" y2="53.08533312759399">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1498" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1="79.62799969139098" y2="79.62799969139098">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1499" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1="106.17066625518798" y2="106.17066625518798">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1500" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1="132.71333281898498" y2="132.71333281898498">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1501" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1="159.25599938278197" y2="159.25599938278197">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1502" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1="185.79866594657895" y2="185.79866594657895">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1503" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1="212.34133251037593" y2="212.34133251037593">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1504" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1="238.88399907417292" y2="238.88399907417292">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1505" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1="265.4266656379699" y2="265.4266656379699">
                              </line>
                            </g>
                            <g className="apexcharts-gridlines-vertical" id="SvgjsG1479">
                              <line className="apexcharts-gridline" id="SvgjsLine1481" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="265.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1483" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="88.578125" x2="88.578125" y1={0} y2="265.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1485" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="177.15625" x2="177.15625" y1={0} y2="265.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1487" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="265.734375" x2="265.734375" y1={0} y2="265.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1489" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="354.3125" x2="354.3125" y1={0} y2="265.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1491" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="442.890625" x2="442.890625" y1={0} y2="265.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1493" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="531.46875" x2="531.46875" y1={0} y2="265.42666563796996">
                              </line>
                            </g>
                            <line id="SvgjsLine1507" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="531.46875" y1="265.42666563796996" y2="265.42666563796996">
                            </line>
                            <line id="SvgjsLine1506" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="265.42666563796996">
                            </line>
                          </g>
                          <g className="apexcharts-grid-borders" id="SvgjsG1480">
                            <line className="apexcharts-gridline" id="SvgjsLine1495" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="531.46875" y1={0} y2={0}>
                            </line>
                            <line id="SvgjsLine1533" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="531.46875" y1="266.42666563796996" y2="266.42666563796996">
                            </line>
                          </g>
                          <g className="apexcharts-bar-series apexcharts-plot-series" id="SvgjsG1398">
                            <g className="apexcharts-series" data-realindex={0} id="SvgjsG1399" rel={1} seriesname="WorkxHours">
                              <path barheight="220.02473598936982" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="117.366015625" cy="45.401929648600145" d="M 28.787890625 265.42766563796994 L 28.787890625 45.40292964860014 L 59.790234375 45.40292964860014 L 59.790234375 265.42766563796994 Z" fill="rgba(103,78,201,1)" fillOpacity={1} id="SvgjsPath1403" index={0} j={0} pathfrom="M 28.787890625 265.42766563796994 L 28.787890625 265.42766563796994 L 59.790234375 265.42766563796994 L 59.790234375 265.42766563796994 L 59.790234375 265.42766563796994 L 59.790234375 265.42766563796994 L 59.790234375 265.42766563796994 L 28.787890625 265.42766563796994 Z" pathto="M 28.787890625 265.42766563796994 L 28.787890625 45.40292964860014 L 59.790234375 45.40292964860014 L 59.790234375 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="82.89473684210526">
                              </path>
                              <path barheight="187.15982833446597" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="205.944140625" cy="78.26683730350399" d="M 117.366015625 265.42766563796994 L 117.366015625 78.267837303504 L 148.368359375 78.267837303504 L 148.368359375 265.42766563796994 Z" fill="rgba(103,78,201,1)" fillOpacity={1} id="SvgjsPath1409" index={0} j={1} pathfrom="M 117.366015625 265.42766563796994 L 117.366015625 265.42766563796994 L 148.368359375 265.42766563796994 L 148.368359375 265.42766563796994 L 148.368359375 265.42766563796994 L 148.368359375 265.42766563796994 L 148.368359375 265.42766563796994 L 117.366015625 265.42766563796994 Z" pathto="M 117.366015625 265.42766563796994 L 117.366015625 78.267837303504 L 148.368359375 78.267837303504 L 148.368359375 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="70.51282051282051">
                              </path>
                              <path barheight="178.40152936322568" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="294.522265625" cy="87.02513627474428" d="M 205.944140625 265.42766563796994 L 205.944140625 87.02613627474429 L 236.94648437499998 87.02613627474429 L 236.94648437499998 265.42766563796994 Z" fill="rgba(103,78,201,1)" fillOpacity={1} id="SvgjsPath1415" index={0} j={2} pathfrom="M 205.944140625 265.42766563796994 L 205.944140625 265.42766563796994 L 236.94648437499998 265.42766563796994 L 236.94648437499998 265.42766563796994 L 236.94648437499998 265.42766563796994 L 236.94648437499998 265.42766563796994 L 236.94648437499998 265.42766563796994 L 205.944140625 265.42766563796994 Z" pathto="M 205.944140625 265.42766563796994 L 205.944140625 87.02613627474429 L 236.94648437499998 87.02613627474429 L 236.94648437499998 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="67.21311475409836">
                              </path>
                              <path barheight="237.1144879699198" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="383.100390625" cy="28.312177668050168" d="M 294.522265625 265.42766563796994 L 294.522265625 28.31317766805017 L 325.524609375 28.31317766805017 L 325.524609375 265.42766563796994 Z" fill="rgba(103,78,201,1)" fillOpacity={1} id="SvgjsPath1421" index={0} j={3} pathfrom="M 294.522265625 265.42766563796994 L 294.522265625 265.42766563796994 L 325.524609375 265.42766563796994 L 325.524609375 265.42766563796994 L 325.524609375 265.42766563796994 L 325.524609375 265.42766563796994 L 325.524609375 265.42766563796994 L 294.522265625 265.42766563796994 Z" pathto="M 294.522265625 265.42766563796994 L 294.522265625 28.31317766805017 L 325.524609375 28.31317766805017 L 325.524609375 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="89.33333333333333">
                              </path>
                              <path barheight="166.83961840100972" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="471.678515625" cy="98.58704723696025" d="M 383.100390625 265.42766563796994 L 383.100390625 98.58804723696025 L 414.102734375 98.58804723696025 L 414.102734375 265.42766563796994 Z" fill="rgba(103,78,201,1)" fillOpacity={1} id="SvgjsPath1427" index={0} j={4} pathfrom="M 383.100390625 265.42766563796994 L 383.100390625 265.42766563796994 L 414.102734375 265.42766563796994 L 414.102734375 265.42766563796994 L 414.102734375 265.42766563796994 L 414.102734375 265.42766563796994 L 414.102734375 265.42766563796994 L 383.100390625 265.42766563796994 Z" pathto="M 383.100390625 265.42766563796994 L 383.100390625 98.58804723696025 L 414.102734375 98.58804723696025 L 414.102734375 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="62.85714285714287">
                              </path>
                              <path barheight="163.04780889189584" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="560.256640625" cy="102.37885674607412" d="M 471.678515625 265.42766563796994 L 471.678515625 102.37985674607413 L 502.680859375 102.37985674607413 L 502.680859375 265.42766563796994 Z" fill="rgba(103,78,201,1)" fillOpacity={1} id="SvgjsPath1433" index={0} j={5} pathfrom="M 471.678515625 265.42766563796994 L 471.678515625 265.42766563796994 L 502.680859375 265.42766563796994 L 502.680859375 265.42766563796994 L 502.680859375 265.42766563796994 L 502.680859375 265.42766563796994 L 502.680859375 265.42766563796994 L 471.678515625 265.42766563796994 Z" pathto="M 471.678515625 265.42766563796994 L 471.678515625 102.37985674607413 L 502.680859375 102.37985674607413 L 502.680859375 265.42766563796994 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="61.42857142857143">
                              </path>
                              <g className="apexcharts-bar-goals-markers" id="SvgjsG1401" style={{ "pointer-events": "none" }}>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1402">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1408">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1414">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1420">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1426">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1432">
                                </g>
                              </g>
                            </g>
                            <g className="apexcharts-series" data-realindex={1} id="SvgjsG1438" rel={2} seriesname="BreakxHours">
                              <path barheight="45.401929648600124" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="117.366015625" cy="0.0010000000000189857" d="M 28.787890625 45.40392964860014 L 28.787890625 0.0020000000000189857 L 59.790234375 0.0020000000000189857 L 59.790234375 45.40392964860014 Z" fill="rgba(193,193,193,1)" fillOpacity={1} id="SvgjsPath1442" index={1} j={0} pathfrom="M 28.787890625 45.40392964860014 L 28.787890625 45.40392964860014 L 59.790234375 45.40392964860014 L 59.790234375 45.40392964860014 L 59.790234375 45.40392964860014 L 59.790234375 45.40392964860014 L 59.790234375 45.40392964860014 L 28.787890625 45.40392964860014 Z" pathto="M 28.787890625 45.40392964860014 L 28.787890625 0.0020000000000189857 L 59.790234375 0.0020000000000189857 L 59.790234375 45.40392964860014 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="17.105263157894736">
                              </path>
                              <path barheight="78.26683730350395" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="205.944140625" cy="0.0010000000000474074" d="M 117.366015625 78.268837303504 L 117.366015625 0.0020000000000474074 L 148.368359375 0.0020000000000474074 L 148.368359375 78.268837303504 Z" fill="rgba(193,193,193,1)" fillOpacity={1} id="SvgjsPath1448" index={1} j={1} pathfrom="M 117.366015625 78.268837303504 L 117.366015625 78.268837303504 L 148.368359375 78.268837303504 L 148.368359375 78.268837303504 L 148.368359375 78.268837303504 L 148.368359375 78.268837303504 L 148.368359375 78.268837303504 L 117.366015625 78.268837303504 Z" pathto="M 117.366015625 78.268837303504 L 117.366015625 0.0020000000000474074 L 148.368359375 0.0020000000000474074 L 148.368359375 78.268837303504 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="29.487179487179485">
                              </path>
                              <path barheight="87.02513627474426" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="294.522265625" cy="0.0010000000000331966" d="M 205.944140625 87.0271362747443 L 205.944140625 0.0020000000000331966 L 236.94648437499998 0.0020000000000331966 L 236.94648437499998 87.0271362747443 Z" fill="rgba(193,193,193,1)" fillOpacity={1} id="SvgjsPath1454" index={1} j={2} pathfrom="M 205.944140625 87.0271362747443 L 205.944140625 87.0271362747443 L 236.94648437499998 87.0271362747443 L 236.94648437499998 87.0271362747443 L 236.94648437499998 87.0271362747443 L 236.94648437499998 87.0271362747443 L 236.94648437499998 87.0271362747443 L 205.944140625 87.0271362747443 Z" pathto="M 205.944140625 87.0271362747443 L 205.944140625 0.0020000000000331966 L 236.94648437499998 0.0020000000000331966 L 236.94648437499998 87.0271362747443 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="32.786885245901644">
                              </path>
                              <path barheight="28.312177668050126" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="383.100390625" cy="0.0010000000000438547" d="M 294.522265625 28.31417766805017 L 294.522265625 0.0020000000000438547 L 325.524609375 0.0020000000000438547 L 325.524609375 28.31417766805017 Z" fill="rgba(193,193,193,1)" fillOpacity={1} id="SvgjsPath1460" index={1} j={3} pathfrom="M 294.522265625 28.31417766805017 L 294.522265625 28.31417766805017 L 325.524609375 28.31417766805017 L 325.524609375 28.31417766805017 L 325.524609375 28.31417766805017 L 325.524609375 28.31417766805017 L 325.524609375 28.31417766805017 L 294.522265625 28.31417766805017 Z" pathto="M 294.522265625 28.31417766805017 L 294.522265625 0.0020000000000438547 L 325.524609375 0.0020000000000438547 L 325.524609375 28.31417766805017 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="10.666666666666666">
                              </path>
                              <path barheight="98.58704723696027" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="471.678515625" cy="0.0009999999999763531" d="M 383.100390625 98.58904723696025 L 383.100390625 0.001999999999976353 L 414.102734375 0.001999999999976353 L 414.102734375 98.58904723696025 Z" fill="rgba(193,193,193,1)" fillOpacity={1} id="SvgjsPath1466" index={1} j={4} pathfrom="M 383.100390625 98.58904723696025 L 383.100390625 98.58904723696025 L 414.102734375 98.58904723696025 L 414.102734375 98.58904723696025 L 414.102734375 98.58904723696025 L 414.102734375 98.58904723696025 L 414.102734375 98.58904723696025 L 383.100390625 98.58904723696025 Z" pathto="M 383.100390625 98.58904723696025 L 383.100390625 0.001999999999976353 L 414.102734375 0.001999999999976353 L 414.102734375 98.58904723696025 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="37.142857142857146">
                              </path>
                              <path barheight="102.37885674607412" barwidth="31.00234375" className="apexcharts-bar-area" clipPath="url(#gridRectMasko56jfq9b)" cx="560.256640625" cy="0.0010000000000047748" d="M 471.678515625 102.38085674607413 L 471.678515625 0.002000000000004775 L 502.680859375 0.002000000000004775 L 502.680859375 102.38085674607413 Z" fill="rgba(193,193,193,1)" fillOpacity={1} id="SvgjsPath1472" index={1} j={5} pathfrom="M 471.678515625 102.38085674607413 L 471.678515625 102.38085674607413 L 502.680859375 102.38085674607413 L 502.680859375 102.38085674607413 L 502.680859375 102.38085674607413 L 502.680859375 102.38085674607413 L 502.680859375 102.38085674607413 L 471.678515625 102.38085674607413 Z" pathto="M 471.678515625 102.38085674607413 L 471.678515625 0.002000000000004775 L 502.680859375 0.002000000000004775 L 502.680859375 102.38085674607413 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val="38.57142857142857">
                              </path>
                              <g className="apexcharts-bar-goals-markers" id="SvgjsG1440" style={{ "pointer-events": "none" }}>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1441">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1447">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1453">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1459">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1465">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1471">
                                </g>
                              </g>
                            </g>
                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG1400">
                              <g className="apexcharts-data-labels" id="SvgjsG1405" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="44.2890625" cy="162.08096462784317" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1407" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="44.2890625" y="162.08096462784317">
                                  83%
                                </text>
                              </g>
                              <g className="apexcharts-data-labels" id="SvgjsG1411" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="132.8671875" cy="178.5134184552951" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1413" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="132.8671875" y="178.5134184552951">
                                  71%
                                </text>
                              </g>
                              <g className="apexcharts-data-labels" id="SvgjsG1417" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="221.4453125" cy="182.89256794091523" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1419" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="221.4453125" y="182.89256794091523">
                                  67%
                                </text>
                              </g>
                              <g className="apexcharts-data-labels" id="SvgjsG1423" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="310.0234375" cy="153.53608863756818" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1425" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="310.0234375" y="153.53608863756818">
                                  89%
                                </text>
                              </g>
                              <g className="apexcharts-data-labels" id="SvgjsG1429" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="398.6015625" cy="188.6735234220232" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1431" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="398.6015625" y="188.6735234220232">
                                  63%
                                </text>
                              </g>
                              <g className="apexcharts-data-labels" id="SvgjsG1435" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="487.17968750000006" cy="190.56942817658015" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1437" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="487.17968750000006" y="190.56942817658015">
                                  61%
                                </text>
                              </g>
                            </g>
                            <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG1439">
                              <g className="apexcharts-data-labels" id="SvgjsG1444" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="44.2890625" cy="29.368631808858186" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1446" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="44.2890625" y="29.368631808858186">
                                  17%
                                </text>
                              </g>
                              <g className="apexcharts-data-labels" id="SvgjsG1450" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="132.8671875" cy="45.80108563631013" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1452" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="132.8671875" y="45.80108563631013">
                                  29%
                                </text>
                              </g>
                              <g className="apexcharts-data-labels" id="SvgjsG1456" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="221.4453125" cy="50.18023512193027" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1458" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="221.4453125" y="50.18023512193027">
                                  33%
                                </text>
                              </g>
                              <g className="apexcharts-data-labels" id="SvgjsG1462" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="310.0234375" cy="20.823755818583212" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1464" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="310.0234375" y="20.823755818583212">
                                  11%
                                </text>
                              </g>
                              <g className="apexcharts-data-labels" id="SvgjsG1468" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="398.6015625" cy="55.96119060303822" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1470" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="398.6015625" y="55.96119060303822">
                                  37%
                                </text>
                              </g>
                              <g className="apexcharts-data-labels" id="SvgjsG1474" transform="rotate(0)">
                                <text className="apexcharts-datalabel" cx="487.17968750000006" cy="57.85709535759517" dominantBaseline="auto" fill="#ffffff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1476" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="487.17968750000006" y="57.85709535759517">
                                  39%
                                </text>
                              </g>
                            </g>
                          </g>
                          <line className="apexcharts-ycrosshairs" id="SvgjsLine1508" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="531.46875" y1={0} y2={0}>
                          </line>
                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine1509" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="531.46875" y1={0} y2={0}>
                          </line>
                          <g className="apexcharts-yaxis-annotations" id="SvgjsG1510">
                          </g>
                          <g className="apexcharts-xaxis-annotations" id="SvgjsG1511">
                          </g>
                          <g className="apexcharts-point-annotations" id="SvgjsG1512">
                          </g>
                          <g className="apexcharts-xaxis" id="SvgjsG1513" transform="translate(0, 0)">
                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG1514" transform="translate(0, -4)">
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1516" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="44.2890625" y="294.42666563796996">
                                <tspan id="SvgjsTspan1517">
                                  Monday
                                </tspan>
                                <title>
                                  Monday
                                </title>
                              </text>
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1519" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="132.8671875" y="294.42666563796996">
                                <tspan id="SvgjsTspan1520">
                                  Tuesday
                                </tspan>
                                <title>
                                  Tuesday
                                </title>
                              </text>
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1522" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="221.4453125" y="294.42666563796996">
                                <tspan id="SvgjsTspan1523">
                                  Wednesday
                                </tspan>
                                <title>
                                  Wednesday
                                </title>
                              </text>
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1525" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="310.0234375" y="294.42666563796996">
                                <tspan id="SvgjsTspan1526">
                                  Thursday
                                </tspan>
                                <title>
                                  Thursday
                                </title>
                              </text>
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1528" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="398.6015625" y="294.42666563796996">
                                <tspan id="SvgjsTspan1529">
                                  Friday
                                </tspan>
                                <title>
                                  Friday
                                </title>
                              </text>
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1531" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="487.1796875" y="294.42666563796996">
                                <tspan id="SvgjsTspan1532">
                                  Saturday
                                </tspan>
                                <title>
                                  Saturday
                                </title>
                              </text>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                        <div className="apexcharts-tooltip-title" style={{ "font-family": "Helvetica, Arial, sans-serif", "font-size": "12px" }}>
                        </div>
                        <div className="apexcharts-tooltip-series-group" style={{ "-webkit-order": "1", "-ms-flex-order": "1", "order": "1" }}>
                          <span className="apexcharts-tooltip-marker" style={{ "background-color": "rgb(103, 78, 201)" }}>
                          </span>
                          <div className="apexcharts-tooltip-text" style={{ "font-family": "Helvetica, Arial, sans-serif", "font-size": "12px" }}>
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
                        <div className="apexcharts-tooltip-series-group" style={{ "-webkit-order": "2", "-ms-flex-order": "2", "order": "2" }}>
                          <span className="apexcharts-tooltip-marker" style={{ "background-color": "rgb(193, 193, 193)" }}>
                          </span>
                          <div className="apexcharts-tooltip-text" style={{ "font-family": "Helvetica, Arial, sans-serif", "font-size": "12px" }}>
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
                        <div className="apexcharts-yaxistooltip-text">
                        </div>
                      </div>
                      <div className="apexcharts-toolbar" style={{ "top": "0px", "right": "3px" }}>
                        <div className="apexcharts-menu-icon" title="Menu">
                          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0V0z" fill="none">
                            </path>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
                            </path>
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
          <div _ngcontent-pgy-c226 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div _ngcontent-pgy-c226 className="card">
              <div _ngcontent-pgy-c226 className="header">
                <h2 _ngcontent-pgy-c226>
                  Running Project Review
                </h2>
              </div>
              <div _ngcontent-pgy-c226 className="body">
                <apx-chart _ngcontent-pgy-c226 _nghost-pgy-c147>
                  <div _ngcontent-pgy-c147 style={{ "min-height": "268.7px" }}>
                    <div className="apexcharts-canvas apexchartsopqrh16j apexcharts-theme-light" id="apexchartsopqrh16j" style={{ "width": "272px", "height": "268.7px", "margin": "auto" }}>
                      <svg className="apexcharts-svg" height="268.70000000000005" id="SvgjsSvg1569" style={{ "background": "transparent" }} transform="translate(0, 0)" version="1.1" width={272} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG1571" transform="translate(4, 0)">
                          <defs id="SvgjsDefs1570">
                            <clipPath id="gridRectMaskopqrh16j">
                              <rect fill="#fff" height={290} id="SvgjsRect1573" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={272} x={-3} y={-1}>
                              </rect>
                            </clipPath>
                            <clipPath id="forecastMaskopqrh16j">
                            </clipPath>
                            <clipPath id="nonForecastMaskopqrh16j">
                            </clipPath>
                            <clipPath id="gridRectMarkerMaskopqrh16j">
                              <rect fill="#fff" height={292} id="SvgjsRect1574" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={270} x={-2} y={-2}>
                              </rect>
                            </clipPath>
                          </defs>
                          <g className="apexcharts-radialbar" id="SvgjsG1575">
                            <g id="SvgjsG1576">
                              <g className="apexcharts-tracks" id="SvgjsG1577" style={{margin:"auto"}}>
                                <g className="apexcharts-radialbar-track apexcharts-track" id="SvgjsG1578" rel={1}>
                                  <path className="apexcharts-radialbar-area" d="M 133 29.948170731707293 A 103.0518292682927 103.0518292682927 0 1 1 132.98201406288194 29.9481723012764" data-pathorig="M 133 29.948170731707293 A 103.0518292682927 103.0518292682927 0 1 1 132.98201406288194 29.9481723012764" fill="none" fillOpacity={1} id="apexcharts-radialbarTrack-0" stroke="rgba(242,242,242,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="10.155426829268295">
                                  </path>
                                </g>
                                <g className="apexcharts-radialbar-track apexcharts-track" id="SvgjsG1580" rel={2}>
                                  <path className="apexcharts-radialbar-area" d="M 133 45.417682926829244 A 87.58231707317076 87.58231707317076 0 1 1 132.98471400208308 45.41768426078421" data-pathorig="M 133 45.417682926829244 A 87.58231707317076 87.58231707317076 0 1 1 132.98471400208308 45.41768426078421" fill="none" fillOpacity={1} id="apexcharts-radialbarTrack-1" stroke="rgba(242,242,242,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="10.155426829268295">
                                  </path>
                                </g>
                                <g className="apexcharts-radialbar-track apexcharts-track" id="SvgjsG1582" rel={3}>
                                  <path className="apexcharts-radialbar-area" d="M 133 60.887195121951194 A 72.1128048780488 72.1128048780488 0 1 1 132.9874139412842 60.88719622029201" data-pathorig="M 133 60.887195121951194 A 72.1128048780488 72.1128048780488 0 1 1 132.9874139412842 60.88719622029201" fill="none" fillOpacity={1} id="apexcharts-radialbarTrack-2" stroke="rgba(242,242,242,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="10.155426829268295">
                                  </path>
                                </g>
                              </g>
                              <g id="SvgjsG1584">
                                <g className="apexcharts-series apexcharts-radial-series" data-realindex={0} id="SvgjsG1589" rel={1} seriesname="Projectx1">
                                  <path className="apexcharts-radialbar-area apexcharts-radialbar-slice-0" d="M 133 29.948170731707293 A 103.0518292682927 103.0518292682927 0 0 1 171.6038947074733 228.5479922811341" data-angle={158} data-pathorig="M 133 29.948170731707293 A 103.0518292682927 103.0518292682927 0 0 1 171.6038947074733 228.5479922811341" data-value={44} fill="none" fillOpacity="0.85" id="SvgjsPath1590" index={0} j={0} stroke="rgba(0,143,251,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="10.469512195121954">
                                  </path>
                                </g>
                                <g className="apexcharts-series apexcharts-radial-series" data-realindex={1} id="SvgjsG1591" rel={2} seriesname="Projectx2">
                                  <path className="apexcharts-radialbar-area apexcharts-radialbar-slice-1" d="M 133 45.417682926829244 A 87.58231707317076 87.58231707317076 0 1 1 105.93557561765513 216.29573336466734" data-angle={198} data-pathorig="M 133 45.417682926829244 A 87.58231707317076 87.58231707317076 0 1 1 105.93557561765513 216.29573336466734" data-value={55} fill="none" fillOpacity="0.85" id="SvgjsPath1592" index={0} j={1} stroke="rgba(0,227,150,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="10.469512195121954">
                                  </path>
                                </g>
                                <g className="apexcharts-series apexcharts-radial-series" data-realindex={2} id="SvgjsG1593" rel={3} seriesname="Projectx3">
                                  <path className="apexcharts-radialbar-area apexcharts-radialbar-slice-2" d="M 133 60.887195121951194 A 72.1128048780488 72.1128048780488 0 1 1 69.92871971656056 167.96098154782504" data-angle={241} data-pathorig="M 133 60.887195121951194 A 72.1128048780488 72.1128048780488 0 1 1 69.92871971656056 167.96098154782504" data-value={67} fill="none" fillOpacity="0.85" id="SvgjsPath1594" index={0} j={2} stroke="rgba(254,176,25,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="10.469512195121954">
                                  </path>
                                </g>
                                <circle className="apexcharts-radialbar-hollow" cx={133} cy={133} fill="transparent" id="SvgjsCircle1585" r="62.035091463414645">
                                </circle>
                                <g className="apexcharts-datalabels-group" id="SvgjsG1586" style={{ "opacity": "1" }} transform="translate(0, 0) scale(1)">
                                  <text className="apexcharts-text apexcharts-datalabel-label" dominantBaseline="auto" fill="#373d3f" fontFamily="Helvetica, Arial, sans-serif" fontSize="16px" fontWeight={600} id="SvgjsText1587" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x={133} y={133}>
                                    Total
                                  </text>
                                  <text className="apexcharts-text apexcharts-datalabel-value" dominantBaseline="auto" fill="#373d3f" fontFamily="Helvetica, Arial, sans-serif" fontSize="16px" fontWeight={400} id="SvgjsText1588" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x={133} y={165}>
                                    52%
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                          <line className="apexcharts-ycrosshairs" id="SvgjsLine1595" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={266} y1={0} y2={0}>
                          </line>
                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine1596" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={266} y1={0} y2={0}>
                          </line>
                        </g>
                        <g className="apexcharts-annotations" id="SvgjsG1572">
                        </g>
                      </svg>
                      <div className="apexcharts-legend">
                      </div>
                    </div>
                  </div>
                </apx-chart>
                <div _ngcontent-pgy-c226 className="text-center p-t-20">
                  <div _ngcontent-pgy-c226 className="chart-note">
                    <span _ngcontent-pgy-c226 className="dot bg-orange">
                    </span>
                    <span _ngcontent-pgy-c226>
                      Project 1
                    </span>
                  </div>
                  <div _ngcontent-pgy-c226 className="chart-note">
                    <span _ngcontent-pgy-c226 className="dot bg-indigo">
                    </span>
                    <span _ngcontent-pgy-c226>
                      Project 2
                    </span>
                  </div>
                  <div _ngcontent-pgy-c226 className="chart-note msr-0">
                    <span _ngcontent-pgy-c226 className="dot bg-green">
                    </span>
                    <span _ngcontent-pgy-c226>
                      Project 3
                    </span>
                  </div>
                </div>
                <div _ngcontent-pgy-c226 className="text-center p-t-20">
                  <button _ngcontent-pgy-c226 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                    </span>
                    <span className="mdc-button__label">
                      More Details
                    </span>
                    <span className="mat-mdc-focus-indicator">
                    </span>
                    <span className="mat-ripple mat-mdc-button-ripple" matripple>
                    </span>
                    <span className="mat-mdc-button-touch-target">
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div _ngcontent-pgy-c226 className="row">
          <div _ngcontent-pgy-c226 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div _ngcontent-pgy-c226 className="card">
              <div _ngcontent-pgy-c226 className="header">
                <h2 _ngcontent-pgy-c226>
                  My Team
                </h2>
              </div>
              <div _ngcontent-pgy-c226 className="tableBody">
                <div _ngcontent-pgy-c226 className="responsive_table">
                  <table _ngcontent-pgy-c226 className="table table-hover">
                    <thead _ngcontent-pgy-c226>
                      <tr _ngcontent-pgy-c226>
                        <th _ngcontent-pgy-c226>
                          #
                        </th>
                        <th _ngcontent-pgy-c226>
                          Employee Name
                        </th>
                        <th _ngcontent-pgy-c226>
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody _ngcontent-pgy-c226>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user5" src="assets/images/user/user5.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="media-title">
                            <a _ngcontent-pgy-c226 href="mailto:test@gmail.com">
                              Jay Soni
                            </a>
                          </div>
                          <div _ngcontent-pgy-c226 className="text-job font-11">
                            Manager
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="badge col-green">
                            Available
                          </div>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user5" src="assets/images/user/user6.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="media-title">
                            <a _ngcontent-pgy-c226 href="mailto:test@gmail.com">
                              Sarah Smith
                            </a>
                          </div>
                          <div _ngcontent-pgy-c226 className="text-job font-11">
                            Developer
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="badge col-red">
                            Absend
                          </div>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user3" src="assets/images/user/user3.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="media-title">
                            <a _ngcontent-pgy-c226 href="mailto:test@gmail.com">
                              Dr.Megha Trivedi
                            </a>
                          </div>
                          <div _ngcontent-pgy-c226 className="text-job font-11">
                            Tester
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="badge col-green">
                            Available
                          </div>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user2" src="assets/images/user/user2.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="media-title">
                            <a _ngcontent-pgy-c226 href="mailto:test@gmail.com">
                              John Deo
                            </a>
                          </div>
                          <div _ngcontent-pgy-c226 className="text-job font-11">
                            Designer
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="badge col-green">
                            Available
                          </div>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user1" src="assets/images/user/user1.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="media-title">
                            <a _ngcontent-pgy-c226 href="mailto:test@gmail.com">
                              Jacob Ryan
                            </a>
                          </div>
                          <div _ngcontent-pgy-c226 className="text-job font-11">
                            Developer
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="badge col-red">
                            Absend
                          </div>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user8" src="assets/images/user/user8.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="media-title">
                            <a _ngcontent-pgy-c226 href="mailto:test@gmail.com">
                              Jay Soni
                            </a>
                          </div>
                          <div _ngcontent-pgy-c226 className="text-job font-11">
                            Team Leader
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="badge col-green">
                            Available
                          </div>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user4" src="assets/images/user/user4.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="media-title">
                            <a _ngcontent-pgy-c226 href="mailto:test@gmail.com">
                              John Deo
                            </a>
                          </div>
                          <div _ngcontent-pgy-c226 className="text-job font-11">
                            Director
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="badge col-green">
                            Available
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div _ngcontent-pgy-c226 className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <div _ngcontent-pgy-c226 className="card">
              <div _ngcontent-pgy-c226 className="header">
                <h2 _ngcontent-pgy-c226>
                  My Task
                </h2>
              </div>
              <div _ngcontent-pgy-c226 className="tableBody">
                <div _ngcontent-pgy-c226 className="responsive_table">
                  <table _ngcontent-pgy-c226 className="table table-hover dashboard-task-infos text-center">
                    <thead _ngcontent-pgy-c226>
                      <tr _ngcontent-pgy-c226>
                        <th _ngcontent-pgy-c226>
                          User
                        </th>
                        <th _ngcontent-pgy-c226>
                          Task
                        </th>
                        <th _ngcontent-pgy-c226>
                          Status
                        </th>
                        <th _ngcontent-pgy-c226>
                          Manager
                        </th>
                        <th _ngcontent-pgy-c226>
                          Progress
                        </th>
                        <th _ngcontent-pgy-c226>
                          Documents
                        </th>
                        <th _ngcontent-pgy-c226>
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody _ngcontent-pgy-c226>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user1" src="assets/images/user/user1.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          Task A
                        </td>
                        <td _ngcontent-pgy-c226>
                          <span _ngcontent-pgy-c226 className="label l-bg-green shadow-style">
                            Working
                          </span>
                        </td>
                        <td _ngcontent-pgy-c226>
                          Jay Soni
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="progress shadow-style">
                            <div _ngcontent-pgy-c226 aria-valuemax={100} aria-valuemin={0} aria-valuenow={62} className="progress-bar l-bg-green width-per-62" role="progressbar">
                            </div>
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <i _ngcontent-pgy-c226 className="far fa-file-pdf tbl-pdf">
                          </i>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <button _ngcontent-pgy-c226 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              Details
                            </span>
                            <span className="mat-mdc-focus-indicator">
                            </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target">
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user2" src="assets/images/user/user2.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          Task B
                        </td>
                        <td _ngcontent-pgy-c226>
                          <span _ngcontent-pgy-c226 className="label l-bg-purple shadow-style">
                            Completed
                          </span>
                        </td>
                        <td _ngcontent-pgy-c226>
                          Sarah Smith
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="progress shadow-style">
                            <div _ngcontent-pgy-c226 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="progress-bar l-bg-purple width-per-40" role="progressbar">
                            </div>
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <i _ngcontent-pgy-c226 className="far fa-file-pdf tbl-pdf">
                          </i>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <button _ngcontent-pgy-c226 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              Details
                            </span>
                            <span className="mat-mdc-focus-indicator">
                            </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target">
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user3" src="assets/images/user/user3.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          Task C
                        </td>
                        <td _ngcontent-pgy-c226>
                          <span _ngcontent-pgy-c226 className="label l-bg-orange shadow-style">
                            On Hold
                          </span>
                        </td>
                        <td _ngcontent-pgy-c226>
                          Megha Trivedi
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="progress shadow-style">
                            <div _ngcontent-pgy-c226 aria-valuemax={100} aria-valuemin={0} aria-valuenow={72} className="progress-bar l-bg-orange width-per-72" role="progressbar">
                            </div>
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <i _ngcontent-pgy-c226 className="far fa-file-pdf tbl-pdf">
                          </i>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <button _ngcontent-pgy-c226 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              Details
                            </span>
                            <span className="mat-mdc-focus-indicator">
                            </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target">
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user4" src="assets/images/user/user4.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          Task D
                        </td>
                        <td _ngcontent-pgy-c226>
                          <span _ngcontent-pgy-c226 className="label l-bg-cyan shadow-style">
                            Wait Approvel
                          </span>
                        </td>
                        <td _ngcontent-pgy-c226>
                          Jacob Ryan
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="progress shadow-style">
                            <div _ngcontent-pgy-c226 aria-valuemax={100} aria-valuemin={0} aria-valuenow={95} className="progress-bar l-bg-cyan width-per-95" role="progressbar">
                            </div>
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <i _ngcontent-pgy-c226 className="far fa-file-pdf tbl-pdf">
                          </i>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <button _ngcontent-pgy-c226 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              Details
                            </span>
                            <span className="mat-mdc-focus-indicator">
                            </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target">
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user5" src="assets/images/user/user5.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          Task E
                        </td>
                        <td _ngcontent-pgy-c226>
                          <span _ngcontent-pgy-c226 className="label bg-green shadow-style">
                            Suspended
                          </span>
                        </td>
                        <td _ngcontent-pgy-c226>
                          Airi Satou
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="progress shadow-style">
                            <div _ngcontent-pgy-c226 aria-valuemax={100} aria-valuemin={0} aria-valuenow={87} className="progress-bar l-bg-green width-per-87" role="progressbar">
                            </div>
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <i _ngcontent-pgy-c226 className="far fa-file-pdf tbl-pdf">
                          </i>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <button _ngcontent-pgy-c226 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              Details
                            </span>
                            <span className="mat-mdc-focus-indicator">
                            </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target">
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user1" src="assets/images/user/user1.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          Task A
                        </td>
                        <td _ngcontent-pgy-c226>
                          <span _ngcontent-pgy-c226 className="label l-bg-green shadow-style">
                            Working
                          </span>
                        </td>
                        <td _ngcontent-pgy-c226>
                          Angelica Ramos
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="progress shadow-style">
                            <div _ngcontent-pgy-c226 aria-valuemax={100} aria-valuemin={0} aria-valuenow={62} className="progress-bar l-bg-green width-per-62" role="progressbar">
                            </div>
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <i _ngcontent-pgy-c226 className="far fa-file-pdf tbl-pdf">
                          </i>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <button _ngcontent-pgy-c226 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              Details
                            </span>
                            <span className="mat-mdc-focus-indicator">
                            </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target">
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr _ngcontent-pgy-c226>
                        <td _ngcontent-pgy-c226 className="table-img">
                          <img _ngcontent-pgy-c226 alt="user2" src="assets/images/user/user2.jpg" />
                        </td>
                        <td _ngcontent-pgy-c226>
                          Task B
                        </td>
                        <td _ngcontent-pgy-c226>
                          <span _ngcontent-pgy-c226 className="label l-bg-purple shadow-style">
                            Completed
                          </span>
                        </td>
                        <td _ngcontent-pgy-c226>
                          Ashton Cox
                        </td>
                        <td _ngcontent-pgy-c226>
                          <div _ngcontent-pgy-c226 className="progress shadow-style">
                            <div _ngcontent-pgy-c226 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="progress-bar l-bg-purple width-per-40" role="progressbar">
                            </div>
                          </div>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <i _ngcontent-pgy-c226 className="far fa-file-pdf tbl-pdf">
                          </i>
                        </td>
                        <td _ngcontent-pgy-c226>
                          <button _ngcontent-pgy-c226 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              Details
                            </span>
                            <span className="mat-mdc-focus-indicator">
                            </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target">
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div _ngcontent-pgy-c226 className="row">
          <div _ngcontent-pgy-c226 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div _ngcontent-pgy-c226 className="card">
              <div _ngcontent-pgy-c226 className="header">
                <h2 _ngcontent-pgy-c226>
                  Todo List
                </h2>
              </div>
              <div _ngcontent-pgy-c226 className="body">
                <ng-scrollbar _ngcontent-pgy-c226 _nghost-pgy-c129 className="ng-scrollbar" style={{ "height": "375px" }} visibility="hover">
                  <div _ngcontent-pgy-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                    <div _ngcontent-pgy-c129 className="ng-scroll-viewport-wrapper">
                      <div _ngcontent-pgy-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{ "--native-scrollbar-size": "0px" }}>
                        <div _ngcontent-pgy-c129 className="ng-scroll-content">
                          <div _ngcontent-pgy-c226 cdkdroplist className="cdk-drop-list task-list" id="cdk-drop-list-0">
                            <div _ngcontent-pgy-c226 cdkdrag className="cdk-drag task-box ng-star-inserted">
                              <div _ngcontent-pgy-c226>
                                <div _ngcontent-pgy-c226 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{ "touch-action": "none", "-webkit-user-drag": "none", "-webkit-tap-highlight-color": "transparent", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }}>
                                  <mat-icon _ngcontent-pgy-c226 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    drag_indicator
                                  </mat-icon>
                                </div>
                              </div>
                              <mat-checkbox _ngcontent-pgy-c226 className="mat-mdc-checkbox m-r-15 mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-1">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target">
                                    </div>
                                    <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-1-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple">
                                    </div>
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                        </path>
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark">
                                      </div>
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                    </div>
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-1-input">
                                  </label>
                                </div>
                              </mat-checkbox>

                              <div _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-2" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger done" mattooltip="Title">
                                Check client report
                              </div>

                              <div _ngcontent-pgy-c226 className="task-high">

                                <mat-icon _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-3" aria-hidden="false" cdk-describedby-host="pgy-1" className="mat-icon notranslate mat-mdc-tooltip-trigger lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                  arrow_upward
                                </mat-icon>



                                High
                              </div>
                            </div>

                            <div _ngcontent-pgy-c226 cdkdrag className="cdk-drag task-box ng-star-inserted">
                              <div _ngcontent-pgy-c226>
                                <div _ngcontent-pgy-c226 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{ "touch-action": "none", "-webkit-user-drag": "none", "-webkit-tap-highlight-color": "transparent", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }}>
                                  <mat-icon _ngcontent-pgy-c226 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    drag_indicator
                                  </mat-icon>
                                </div>
                              </div>
                              <mat-checkbox _ngcontent-pgy-c226 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-2">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target">
                                    </div>
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-2-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple">
                                    </div>
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                        </path>
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark">
                                      </div>
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                    </div>
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-2-input">
                                  </label>
                                </div>
                              </mat-checkbox>

                              <div _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-2" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger" mattooltip="Title">
                                Request for festivle holiday
                              </div>

                              <div _ngcontent-pgy-c226 className="task-high">

                                <mat-icon _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-3" aria-hidden="false" cdk-describedby-host="pgy-1" className="mat-icon notranslate mat-mdc-tooltip-trigger lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                  arrow_upward
                                </mat-icon>



                                High
                              </div>
                            </div>

                            <div _ngcontent-pgy-c226 cdkdrag className="cdk-drag task-box ng-star-inserted">
                              <div _ngcontent-pgy-c226>
                                <div _ngcontent-pgy-c226 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{ "touch-action": "none", "-webkit-user-drag": "none", "-webkit-tap-highlight-color": "transparent", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }}>
                                  <mat-icon _ngcontent-pgy-c226 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    drag_indicator
                                  </mat-icon>
                                </div>
                              </div>
                              <mat-checkbox _ngcontent-pgy-c226 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-3">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target">
                                    </div>
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-3-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple">
                                    </div>
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                        </path>
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark">
                                      </div>
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                    </div>
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-3-input">
                                  </label>
                                </div>
                              </mat-checkbox>

                              <div _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-2" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger" mattooltip="Title">
                                Order new medicine stock
                              </div>

                              <div _ngcontent-pgy-c226 className="task-low">
                                <mat-icon _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-4" aria-hidden="false" cdk-describedby-host="pgy-1" className="mat-icon notranslate mat-mdc-tooltip-trigger lbl-low material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="Low" role="img">
                                  arrow_downward
                                </mat-icon>




                                Low
                              </div>
                            </div>

                            <div _ngcontent-pgy-c226 cdkdrag className="cdk-drag task-box ng-star-inserted">
                              <div _ngcontent-pgy-c226>
                                <div _ngcontent-pgy-c226 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{ "touch-action": "none", "-webkit-user-drag": "none", "-webkit-tap-highlight-color": "transparent", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }}>
                                  <mat-icon _ngcontent-pgy-c226 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    drag_indicator
                                  </mat-icon>
                                </div>
                              </div>
                              <mat-checkbox _ngcontent-pgy-c226 className="mat-mdc-checkbox m-r-15 mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-4">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target">
                                    </div>
                                    <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-4-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple">
                                    </div>
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                        </path>
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark">
                                      </div>
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                    </div>
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-4-input">
                                  </label>
                                </div>
                              </mat-checkbox>

                              <div _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-2" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger done" mattooltip="Title">
                                Remind for lunch in hotel
                              </div>

                              <div _ngcontent-pgy-c226 className="task-normal">


                                <mat-icon _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-5" aria-hidden="false" cdk-describedby-host="pgy-1" className="mat-icon notranslate mat-mdc-tooltip-trigger lbl-normal material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="Normal" role="img">
                                  remove
                                </mat-icon>


                                Normal
                              </div>
                            </div>

                            <div _ngcontent-pgy-c226 cdkdrag className="cdk-drag task-box ng-star-inserted">
                              <div _ngcontent-pgy-c226>
                                <div _ngcontent-pgy-c226 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{ "touch-action": "none", "-webkit-user-drag": "none", "-webkit-tap-highlight-color": "transparent", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }}>
                                  <mat-icon _ngcontent-pgy-c226 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    drag_indicator
                                  </mat-icon>
                                </div>
                              </div>
                              <mat-checkbox _ngcontent-pgy-c226 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-5">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target">
                                    </div>
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-5-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple">
                                    </div>
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                        </path>
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark">
                                      </div>
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                    </div>
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-5-input">
                                  </label>
                                </div>
                              </mat-checkbox>

                              <div _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-2" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger" mattooltip="Title">
                                Conference in london
                              </div>

                              <div _ngcontent-pgy-c226 className="task-high">

                                <mat-icon _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-3" aria-hidden="false" cdk-describedby-host="pgy-1" className="mat-icon notranslate mat-mdc-tooltip-trigger lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                  arrow_upward
                                </mat-icon>



                                High
                              </div>
                            </div>

                            <div _ngcontent-pgy-c226 cdkdrag className="cdk-drag task-box ng-star-inserted">
                              <div _ngcontent-pgy-c226>
                                <div _ngcontent-pgy-c226 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{ "touch-action": "none", "-webkit-user-drag": "none", "-webkit-tap-highlight-color": "transparent", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }}>
                                  <mat-icon _ngcontent-pgy-c226 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    drag_indicator
                                  </mat-icon>
                                </div>
                              </div>
                              <mat-checkbox _ngcontent-pgy-c226 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-6">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target">
                                    </div>
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-6-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple">
                                    </div>
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                        </path>
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark">
                                      </div>
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                    </div>
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-6-input">
                                  </label>
                                </div>
                              </mat-checkbox>

                              <div _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-2" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger" mattooltip="Title">
                                Announcement for
                              </div>

                              <div _ngcontent-pgy-c226 className="task-normal">


                                <mat-icon _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-5" aria-hidden="false" cdk-describedby-host="pgy-1" className="mat-icon notranslate mat-mdc-tooltip-trigger lbl-normal material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="Normal" role="img">
                                  remove
                                </mat-icon>


                                Normal
                              </div>
                            </div>

                            <div _ngcontent-pgy-c226 cdkdrag className="cdk-drag task-box ng-star-inserted">
                              <div _ngcontent-pgy-c226>
                                <div _ngcontent-pgy-c226 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{ "touch-action": "none", "-webkit-user-drag": "none", "-webkit-tap-highlight-color": "transparent", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }}>
                                  <mat-icon _ngcontent-pgy-c226 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    drag_indicator
                                  </mat-icon>
                                </div>
                              </div>
                              <mat-checkbox _ngcontent-pgy-c226 className="mat-mdc-checkbox m-r-15 mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-7">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target">
                                    </div>
                                    <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-7-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple">
                                    </div>
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                        </path>
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark">
                                      </div>
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                    </div>
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-7-input">
                                  </label>
                                </div>
                              </mat-checkbox>

                              <div _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-2" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger done" mattooltip="Title">
                                call bus driver
                              </div>

                              <div _ngcontent-pgy-c226 className="task-high">

                                <mat-icon _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-3" aria-hidden="false" cdk-describedby-host="pgy-1" className="mat-icon notranslate mat-mdc-tooltip-trigger lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                  arrow_upward
                                </mat-icon>



                                High
                              </div>
                            </div>

                            <div _ngcontent-pgy-c226 cdkdrag className="cdk-drag task-box ng-star-inserted">
                              <div _ngcontent-pgy-c226>
                                <div _ngcontent-pgy-c226 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{ "touch-action": "none", "-webkit-user-drag": "none", "-webkit-tap-highlight-color": "transparent", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }}>
                                  <mat-icon _ngcontent-pgy-c226 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    drag_indicator
                                  </mat-icon>
                                </div>
                              </div>
                              <mat-checkbox _ngcontent-pgy-c226 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-8">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target">
                                    </div>
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-8-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple">
                                    </div>
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                        </path>
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark">
                                      </div>
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                    </div>
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-8-input">
                                  </label>
                                </div>
                              </mat-checkbox>

                              <div _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-2" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger" mattooltip="Title">
                                Web service data load issue
                              </div>

                              <div _ngcontent-pgy-c226 className="task-high">

                                <mat-icon _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-3" aria-hidden="false" cdk-describedby-host="pgy-1" className="mat-icon notranslate mat-mdc-tooltip-trigger lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                  arrow_upward
                                </mat-icon>



                                High
                              </div>
                            </div>

                            <div _ngcontent-pgy-c226 cdkdrag className="cdk-drag task-box ng-star-inserted">
                              <div _ngcontent-pgy-c226>
                                <div _ngcontent-pgy-c226 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{ "touch-action": "none", "-webkit-user-drag": "none", "-webkit-tap-highlight-color": "transparent", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }}>
                                  <mat-icon _ngcontent-pgy-c226 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    drag_indicator
                                  </mat-icon>
                                </div>
                              </div>
                              <mat-checkbox _ngcontent-pgy-c226 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-9">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target">
                                    </div>
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-9-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple">
                                    </div>
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                        </path>
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark">
                                      </div>
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                    </div>
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-9-input">
                                  </label>
                                </div>
                              </mat-checkbox>

                              <div _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-2" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger" mattooltip="Title">
                                Java compile error
                              </div>

                              <div _ngcontent-pgy-c226 className="task-low">
                                <mat-icon _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-4" aria-hidden="false" cdk-describedby-host="pgy-1" className="mat-icon notranslate mat-mdc-tooltip-trigger lbl-low material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="Low" role="img">
                                  arrow_downward
                                </mat-icon>




                                Low
                              </div>
                            </div>

                            <div _ngcontent-pgy-c226 cdkdrag className="cdk-drag task-box ng-star-inserted">
                              <div _ngcontent-pgy-c226>
                                <div _ngcontent-pgy-c226 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{ "touch-action": "none", "-webkit-user-drag": "none", "-webkit-tap-highlight-color": "transparent", "-webkit-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none" }}>
                                  <mat-icon _ngcontent-pgy-c226 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    drag_indicator
                                  </mat-icon>
                                </div>
                              </div>
                              <mat-checkbox _ngcontent-pgy-c226 className="mat-mdc-checkbox m-r-15 mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-10">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target">
                                    </div>
                                    <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-10-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple">
                                    </div>
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                        </path>
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark">
                                      </div>
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                    </div>
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-10-input">
                                  </label>
                                </div>
                              </mat-checkbox>

                              <div _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-2" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger done" mattooltip="Title">
                                Integrate project with spring boot
                              </div>

                              <div _ngcontent-pgy-c226 className="task-high">

                                <mat-icon _ngcontent-pgy-c226 aria-describedby="cdk-describedby-message-pgy-1-3" aria-hidden="false" cdk-describedby-host="pgy-1" className="mat-icon notranslate mat-mdc-tooltip-trigger lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                  arrow_upward
                                </mat-icon>



                                High
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>

                    <scrollbar-y _ngcontent-pgy-c129 _nghost-pgy-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                      <div _ngcontent-pgy-c127 className="ng-scrollbar-track" scrollbartracky>
                        <div _ngcontent-pgy-c127 className="ng-scrollbar-thumb" scrollbarthumby style={{ "height": "204px", "-webkit-transform": "translate3d(0px, 0px, 0px)", "-ms-transform": "translate3d(0px, 0px, 0px)", "transform": "translate3d(0px, 0px, 0px)" }}>
                        </div>
                      </div>
                    </scrollbar-y>



                  </div>
                </ng-scrollbar>
              </div>
            </div>
          </div>
          <div _ngcontent-pgy-c226 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div _ngcontent-pgy-c226 className="card">
              <div _ngcontent-pgy-c226 className="header">
                <h2 _ngcontent-pgy-c226>
                  Ticket Status
                </h2>
              </div>
              <div _ngcontent-pgy-c226 className="body">
                <div _ngcontent-pgy-c226 id="chart">
                  <apx-chart _ngcontent-pgy-c226 _nghost-pgy-c147>
                    <div _ngcontent-pgy-c147 style={{ "min-height": "281.775px" }}>
                      <div className="apexcharts-canvas apexchartsnpluhfvz apexcharts-theme-light" id="apexchartsnpluhfvz" style={{ "width": "272px", "height": "281.775px", "width": "auto","margin" :"auto"}}>
                        <svg className="apexcharts-svg" height="281.77500000000003" id="SvgjsSvg1597" style={{ "background": "transparent", "margin": "auto" }} transform="translate(0, -10)" version="1.1" width={272} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG1599" transform="translate(-6, 0)">
                            <defs id="SvgjsDefs1598">
                              <clipPath id="gridRectMasknpluhfvz">
                                <rect fill="#fff" height={310} id="SvgjsRect1601" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={292} x={-3} y={-1}>
                                </rect>
                              </clipPath>
                              <clipPath id="forecastMasknpluhfvz">
                              </clipPath>
                              <clipPath id="nonForecastMasknpluhfvz">
                              </clipPath>
                              <clipPath id="gridRectMarkerMasknpluhfvz">
                                <rect fill="#fff" height={312} id="SvgjsRect1602" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={290} x={-2} y={-2}>
                                </rect>
                              </clipPath>
                              <linearGradient id="SvgjsLinearGradient1607" x1={1} x2={0} y1={0} y2={1}>
                                <stop id="SvgjsStop1608" offset={0} stopColor="rgba(242,242,242,1)" stopOpacity={1}>
                                </stop>
                                <stop id="SvgjsStop1609" offset="0.5" stopColor="rgba(206,206,206,1)" stopOpacity={1}>
                                </stop>
                                <stop id="SvgjsStop1610" offset="0.65" stopColor="rgba(206,206,206,1)" stopOpacity={1}>
                                </stop>
                                <stop id="SvgjsStop1611" offset="0.91" stopColor="rgba(242,242,242,1)" stopOpacity={1}>
                                </stop>
                              </linearGradient>
                              <linearGradient id="SvgjsLinearGradient1619" x1={1} x2={0} y1={0} y2={1}>
                                <stop id="SvgjsStop1620" offset={0} stopColor="rgba(0,143,251,1)" stopOpacity={1}>
                                </stop>
                                <stop id="SvgjsStop1621" offset="0.5" stopColor="rgba(0,122,213,1)" stopOpacity={1}>
                                </stop>
                                <stop id="SvgjsStop1622" offset="0.65" stopColor="rgba(0,122,213,1)" stopOpacity={1}>
                                </stop>
                                <stop id="SvgjsStop1623" offset="0.91" stopColor="rgba(0,143,251,1)" stopOpacity={1}>
                                </stop>
                              </linearGradient>
                            </defs>
                            <g className="apexcharts-radialbar" id="SvgjsG1603" >
                              <g id="SvgjsG1604">
                                <g className="apexcharts-tracks" id="SvgjsG1605">
                                  <g className="apexcharts-radialbar-track apexcharts-track" id="SvgjsG1606" rel={1}>
                                    <path className="apexcharts-radialbar-area" d="M 82.22762145838786 203.7723785416121 A 85.94512195121953 85.94512195121953 0 1 1 203.77237854161214 203.7723785416121" data-pathorig="M 82.22762145838786 203.7723785416121 A 85.94512195121953 85.94512195121953 0 1 1 203.77237854161214 203.7723785416121" fill="none" fillOpacity={1} id="apexcharts-radialbarTrack-0" stroke="rgba(242,242,242,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="27.526707317073175">
                                    </path>
                                  </g>
                                </g>
                                <g id="SvgjsG1613">
                                  <g className="apexcharts-series apexcharts-radial-series" data-realindex={0} id="SvgjsG1618" rel={1} seriesname="ClosedxTicket">
                                    <path className="apexcharts-radialbar-area apexcharts-radialbar-slice-0" d="M 82.22762145838786 203.7723785416121 A 85.94512195121953 85.94512195121953 0 1 1 216.6693481914407 98.73498984233404" data-angle={194} data-pathorig="M 82.22762145838786 203.7723785416121 A 85.94512195121953 85.94512195121953 0 1 1 216.6693481914407 98.73498984233404" data-value={72} fill="none" fillOpacity="0.85" id="SvgjsPath1624" index={0} j={0} stroke="url(#SvgjsLinearGradient1619)" strokeDasharray={4} strokeLinecap="butt" strokeOpacity={1} strokeWidth="28.37804878048781">
                                    </path>
                                  </g>
                                  <circle className="apexcharts-radialbar-hollow" cx={143} cy={143} fill="transparent" id="SvgjsCircle1614" r="67.18176829268295">
                                  </circle>
                                  <g className="apexcharts-datalabels-group" id="SvgjsG1615" style={{ "opacity": "1" }} transform="translate(0, 0) scale(1)">
                                    <text className="apexcharts-text apexcharts-datalabel-label" dominantBaseline="auto" fill="#6777ef" fontFamily="Helvetica, Arial, sans-serif" fontSize="22px" fontWeight={600} id="SvgjsText1616" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x={143} y={263}>
                                      Closed Ticket
                                    </text>
                                    <text className="apexcharts-text apexcharts-datalabel-value" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="22px" fontWeight={400} id="SvgjsText1617" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x={143} y={235}>
                                      72%
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <line className="apexcharts-ycrosshairs" id="SvgjsLine1625" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={286} y1={0} y2={0}>
                            </line>
                            <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine1626" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={286} y1={0} y2={0}>
                            </line>
                          </g>
                          <g className="apexcharts-annotations" id="SvgjsG1600">
                          </g>
                        </svg>
                        <div className="apexcharts-legend">
                        </div>
                      </div>
                    </div>
                  </apx-chart>
                </div>
                <div _ngcontent-pgy-c226 className="m-t-40 mb-2">
                  <div _ngcontent-pgy-c226 className="row text-center">
                    <div _ngcontent-pgy-c226 className="col-4 border-right">
                      <h4 _ngcontent-pgy-c226 className="m-b-0">
                        67%
                      </h4>
                      <span _ngcontent-pgy-c226 className="font-14 text-muted">
                        New Ticket
                      </span>
                    </div>
                    <div _ngcontent-pgy-c226 className="col-4 border-right">
                      <h4 _ngcontent-pgy-c226 className="m-b-0">
                        33%
                      </h4>
                      <span _ngcontent-pgy-c226 className="font-14 text-muted">
                        Repeat Ticket
                      </span>
                    </div>
                    <div _ngcontent-pgy-c226 className="col-4">
                      <h4 _ngcontent-pgy-c226 className="m-b-0">
                        1 Day
                      </h4>
                      <span _ngcontent-pgy-c226 className="font-14 text-muted">
                        Duration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div _ngcontent-pgy-c226 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div _ngcontent-pgy-c226 className="card">
              <div _ngcontent-pgy-c226 className="header">
                <h2 _ngcontent-pgy-c226>
                  Ticket Resolved
                </h2>
              </div>
              <div _ngcontent-pgy-c226 className="body">
                <apx-chart _ngcontent-pgy-c226 _nghost-pgy-c147>
                  <div _ngcontent-pgy-c147 style={{ "min-height": "315px" }}>
                    <div className="apexcharts-canvas apexcharts3cq70tg6 apexcharts-theme-light" id="apexcharts3cq70tg6" style={{ "width": "272px", "height": "300px","margin":"auto" }}>
                      <svg className="apexcharts-svg" height={300} id="SvgjsSvg1627" style={{ "background": "transparent" }} transform="translate(0, 0)" version="1.1" width={272} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG1629" transform="translate(45.35416793823242, 30)">
                          <defs id="SvgjsDefs1628">
                            <linearGradient id="SvgjsLinearGradient1633" x1={0} x2={0} y1={0} y2={1}>
                              <stop id="SvgjsStop1634" offset={0} stopColor="rgba(216,227,240,0.4)" stopOpacity="0.4">
                              </stop>
                              <stop id="SvgjsStop1635" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5">
                              </stop>
                              <stop id="SvgjsStop1636" offset={1} stopColor="rgba(190,209,230,0.5)" stopOpacity="0.5">
                              </stop>
                            </linearGradient>
                            <clipPath id="gridRectMask3cq70tg6">
                              <rect fill="#fff" height="233.42666563796996" id="SvgjsRect1638" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="220.64583206176758" x={-2} y={0}>
                              </rect>
                            </clipPath>
                            <clipPath id="forecastMask3cq70tg6">
                            </clipPath>
                            <clipPath id="nonForecastMask3cq70tg6">
                            </clipPath>
                            <clipPath id="gridRectMarkerMask3cq70tg6">
                              <rect fill="#fff" height="237.42666563796996" id="SvgjsRect1639" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="220.64583206176758" x={-2} y={-2}>
                              </rect>
                            </clipPath>
                          </defs>
                          <rect className="apexcharts-xcrosshairs" fill="url(#SvgjsLinearGradient1633)" fillOpacity="0.9" filter="none" height="233.42666563796996" id="SvgjsRect1637" opacity={1} rx={0} ry={0} strokeDasharray={3} strokeWidth={0} width="10.832291603088379" x={0} y={0} y2="233.42666563796996">
                          </rect>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1706" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="234.42666563796996" y2="240.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1708" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="36.107638676961265" x2="36.107638676961265" y1="234.42666563796996" y2="240.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1710" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="72.21527735392253" x2="72.21527735392253" y1="234.42666563796996" y2="240.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1712" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="108.32291603088379" x2="108.32291603088379" y1="234.42666563796996" y2="240.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1714" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="144.43055470784506" x2="144.43055470784506" y1="234.42666563796996" y2="240.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1716" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="180.53819338480633" x2="180.53819338480633" y1="234.42666563796996" y2="240.42666563796996">
                          </line>
                          <line className="apexcharts-xaxis-tick" id="SvgjsLine1718" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="216.6458320617676" x2="216.6458320617676" y1="234.42666563796996" y2="240.42666563796996">
                          </line>
                          <g className="apexcharts-grid" id="SvgjsG1701">
                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG1702">
                              <line className="apexcharts-gridline" id="SvgjsLine1720" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="216.64583206176758" y1="58.35666640949249" y2="58.35666640949249">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1721" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="216.64583206176758" y1="116.71333281898498" y2="116.71333281898498">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1722" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="216.64583206176758" y1="175.06999922847746" y2="175.06999922847746">
                              </line>
                            </g>
                            <g className="apexcharts-gridlines-vertical" id="SvgjsG1703">
                              <line className="apexcharts-gridline" id="SvgjsLine1705" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="233.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1707" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="36.107638676961265" x2="36.107638676961265" y1={0} y2="233.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1709" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="72.21527735392253" x2="72.21527735392253" y1={0} y2="233.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1711" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="108.32291603088379" x2="108.32291603088379" y1={0} y2="233.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1713" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="144.43055470784506" x2="144.43055470784506" y1={0} y2="233.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1715" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="180.53819338480633" x2="180.53819338480633" y1={0} y2="233.42666563796996">
                              </line>
                              <line className="apexcharts-gridline" id="SvgjsLine1717" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="216.6458320617676" x2="216.6458320617676" y1={0} y2="233.42666563796996">
                              </line>
                            </g>
                            <line id="SvgjsLine1725" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="216.64583206176758" y1="233.42666563796996" y2="233.42666563796996">
                            </line>
                            <line id="SvgjsLine1724" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="233.42666563796996">
                            </line>
                          </g>
                          <g className="apexcharts-grid-borders" id="SvgjsG1704">
                            <line className="apexcharts-gridline" id="SvgjsLine1719" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="216.64583206176758" y1={0} y2={0}>
                            </line>
                            <line className="apexcharts-gridline" id="SvgjsLine1723" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="216.64583206176758" y1="233.42666563796996" y2="233.42666563796996">
                            </line>
                            <line id="SvgjsLine1751" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="216.64583206176758" y1="234.42666563796996" y2="234.42666563796996">
                            </line>
                          </g>
                          <g className="apexcharts-bar-series apexcharts-plot-series" id="SvgjsG1640">
                            <g className="apexcharts-series" data-realindex={0} id="SvgjsG1641" rel={1} seriesname="Projectx1">
                              <path barheight="85.58977740058899" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="48.745312213897705" cy="147.83688823738098" d="M 12.637673536936443 233.42766563796997 L 12.637673536936443 147.83788823738098 L 23.469965140024822 147.83788823738098 L 23.469965140024822 233.42766563796997 Z" fill="rgba(240,69,125,1)" fillOpacity={1} id="SvgjsPath1645" index={0} j={0} pathfrom="M 12.637673536936443 233.42766563796997 L 12.637673536936443 233.42766563796997 L 23.469965140024822 233.42766563796997 L 23.469965140024822 233.42766563796997 L 23.469965140024822 233.42766563796997 L 23.469965140024822 233.42766563796997 L 23.469965140024822 233.42766563796997 L 12.637673536936443 233.42766563796997 Z" pathto="M 12.637673536936443 233.42766563796997 L 12.637673536936443 147.83788823738098 L 23.469965140024822 147.83788823738098 L 23.469965140024822 233.42766563796997 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={44}>
                              </path>
                              <path barheight="106.98722175073624" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="84.85295089085898" cy="126.43944388723372" d="M 48.745312213897705 233.42766563796997 L 48.745312213897705 126.44044388723373 L 59.577603816986084 126.44044388723373 L 59.577603816986084 233.42766563796997 Z" fill="rgba(240,69,125,1)" fillOpacity={1} id="SvgjsPath1647" index={0} j={1} pathfrom="M 48.745312213897705 233.42766563796997 L 48.745312213897705 233.42766563796997 L 59.577603816986084 233.42766563796997 L 59.577603816986084 233.42766563796997 L 59.577603816986084 233.42766563796997 L 59.577603816986084 233.42766563796997 L 59.577603816986084 233.42766563796997 L 48.745312213897705 233.42766563796997 Z" pathto="M 48.745312213897705 233.42766563796997 L 48.745312213897705 126.44044388723373 L 59.577603816986084 126.44044388723373 L 59.577603816986084 233.42766563796997 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={55}>
                              </path>
                              <path barheight="79.75411075963974" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="120.96058956782025" cy="153.67255487833023" d="M 84.85295089085898 233.42766563796997 L 84.85295089085898 153.67355487833024 L 95.68524249394736 153.67355487833024 L 95.68524249394736 233.42766563796997 Z" fill="rgba(240,69,125,1)" fillOpacity={1} id="SvgjsPath1649" index={0} j={2} pathfrom="M 84.85295089085898 233.42766563796997 L 84.85295089085898 233.42766563796997 L 95.68524249394736 233.42766563796997 L 95.68524249394736 233.42766563796997 L 95.68524249394736 233.42766563796997 L 95.68524249394736 233.42766563796997 L 95.68524249394736 233.42766563796997 L 84.85295089085898 233.42766563796997 Z" pathto="M 84.85295089085898 233.42766563796997 L 84.85295089085898 153.67355487833024 L 95.68524249394736 153.67355487833024 L 95.68524249394736 233.42766563796997 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={41}>
                              </path>
                              <path barheight="130.32988831453324" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="157.06822824478152" cy="103.09677732343673" d="M 120.96058956782025 233.42766563796997 L 120.96058956782025 103.09777732343673 L 131.79288117090863 103.09777732343673 L 131.79288117090863 233.42766563796997 Z" fill="rgba(240,69,125,1)" fillOpacity={1} id="SvgjsPath1651" index={0} j={3} pathfrom="M 120.96058956782025 233.42766563796997 L 120.96058956782025 233.42766563796997 L 131.79288117090863 233.42766563796997 L 131.79288117090863 233.42766563796997 L 131.79288117090863 233.42766563796997 L 131.79288117090863 233.42766563796997 L 131.79288117090863 233.42766563796997 L 120.96058956782025 233.42766563796997 Z" pathto="M 120.96058956782025 233.42766563796997 L 120.96058956782025 103.09777732343673 L 131.79288117090863 103.09777732343673 L 131.79288117090863 233.42766563796997 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={67}>
                              </path>
                              <path barheight="42.79488870029449" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="193.1758669217428" cy="190.63177693767545" d="M 157.06822824478152 233.42766563796997 L 157.06822824478152 190.63277693767546 L 167.9005198478699 190.63277693767546 L 167.9005198478699 233.42766563796997 Z" fill="rgba(240,69,125,1)" fillOpacity={1} id="SvgjsPath1653" index={0} j={4} pathfrom="M 157.06822824478152 233.42766563796997 L 157.06822824478152 233.42766563796997 L 167.9005198478699 233.42766563796997 L 167.9005198478699 233.42766563796997 L 167.9005198478699 233.42766563796997 L 167.9005198478699 233.42766563796997 L 167.9005198478699 233.42766563796997 L 157.06822824478152 233.42766563796997 Z" pathto="M 157.06822824478152 233.42766563796997 L 157.06822824478152 190.63277693767546 L 167.9005198478699 190.63277693767546 L 167.9005198478699 233.42766563796997 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={22}>
                              </path>
                              <path barheight="83.64455518693924" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="229.28350559870407" cy="149.78211045103072" d="M 193.1758669217428 233.42766563796997 L 193.1758669217428 149.78311045103072 L 204.00815852483117 149.78311045103072 L 204.00815852483117 233.42766563796997 Z" fill="rgba(240,69,125,1)" fillOpacity={1} id="SvgjsPath1655" index={0} j={5} pathfrom="M 193.1758669217428 233.42766563796997 L 193.1758669217428 233.42766563796997 L 204.00815852483117 233.42766563796997 L 204.00815852483117 233.42766563796997 L 204.00815852483117 233.42766563796997 L 204.00815852483117 233.42766563796997 L 204.00815852483117 233.42766563796997 L 193.1758669217428 233.42766563796997 Z" pathto="M 193.1758669217428 233.42766563796997 L 193.1758669217428 149.78311045103072 L 204.00815852483117 149.78311045103072 L 204.00815852483117 233.42766563796997 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={43}>
                              </path>
                              <g className="apexcharts-bar-goals-markers" id="SvgjsG1643" style={{ "pointer-events": "none" }}>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1644">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1646">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1648">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1650">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1652">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1654">
                                </g>
                              </g>
                            </g>
                            <g className="apexcharts-series" data-realindex={1} id="SvgjsG1656" rel={2} seriesname="Projectx2">
                              <path barheight="25.28788877744675" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="48.745312213897705" cy="122.54999945993423" d="M 12.637673536936443 147.83888823738098 L 12.637673536936443 122.55099945993423 L 23.469965140024822 122.55099945993423 L 23.469965140024822 147.83888823738098 Z" fill="rgba(112,77,173,1)" fillOpacity={1} id="SvgjsPath1660" index={1} j={0} pathfrom="M 12.637673536936443 147.83888823738098 L 12.637673536936443 147.83888823738098 L 23.469965140024822 147.83888823738098 L 23.469965140024822 147.83888823738098 L 23.469965140024822 147.83888823738098 L 23.469965140024822 147.83888823738098 L 23.469965140024822 147.83888823738098 L 12.637673536936443 147.83888823738098 Z" pathto="M 12.637673536936443 147.83888823738098 L 12.637673536936443 122.55099945993423 L 23.469965140024822 122.55099945993423 L 23.469965140024822 147.83888823738098 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={13}>
                              </path>
                              <path barheight="44.74011091394424" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="84.85295089085898" cy="81.70033297328948" d="M 48.745312213897705 126.44144388723373 L 48.745312213897705 81.70133297328948 L 59.577603816986084 81.70133297328948 L 59.577603816986084 126.44144388723373 Z" fill="rgba(112,77,173,1)" fillOpacity={1} id="SvgjsPath1662" index={1} j={1} pathfrom="M 48.745312213897705 126.44144388723373 L 48.745312213897705 126.44144388723373 L 59.577603816986084 126.44144388723373 L 59.577603816986084 126.44144388723373 L 59.577603816986084 126.44144388723373 L 59.577603816986084 126.44144388723373 L 59.577603816986084 126.44144388723373 L 48.745312213897705 126.44144388723373 Z" pathto="M 48.745312213897705 126.44144388723373 L 48.745312213897705 81.70133297328948 L 59.577603816986084 81.70133297328948 L 59.577603816986084 126.44144388723373 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={23}>
                              </path>
                              <path barheight="38.90444427299499" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="120.96058956782025" cy="114.76911060533524" d="M 84.85295089085898 153.67455487833024 L 84.85295089085898 114.77011060533525 L 95.68524249394736 114.77011060533525 L 95.68524249394736 153.67455487833024 Z" fill="rgba(112,77,173,1)" fillOpacity={1} id="SvgjsPath1664" index={1} j={2} pathfrom="M 84.85295089085898 153.67455487833024 L 84.85295089085898 153.67455487833024 L 95.68524249394736 153.67455487833024 L 95.68524249394736 153.67455487833024 L 95.68524249394736 153.67455487833024 L 95.68524249394736 153.67455487833024 L 95.68524249394736 153.67455487833024 L 84.85295089085898 153.67455487833024 Z" pathto="M 84.85295089085898 153.67455487833024 L 84.85295089085898 114.77011060533525 L 95.68524249394736 114.77011060533525 L 95.68524249394736 153.67455487833024 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={20}>
                              </path>
                              <path barheight="15.561777709198" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="157.06822824478152" cy="87.53599961423873" d="M 120.96058956782025 103.09877732343674 L 120.96058956782025 87.53699961423874 L 131.79288117090863 87.53699961423874 L 131.79288117090863 103.09877732343674 Z" fill="rgba(112,77,173,1)" fillOpacity={1} id="SvgjsPath1666" index={1} j={3} pathfrom="M 120.96058956782025 103.09877732343674 L 120.96058956782025 103.09877732343674 L 131.79288117090863 103.09877732343674 L 131.79288117090863 103.09877732343674 L 131.79288117090863 103.09877732343674 L 131.79288117090863 103.09877732343674 L 131.79288117090863 103.09877732343674 L 120.96058956782025 103.09877732343674 Z" pathto="M 120.96058956782025 103.09877732343674 L 120.96058956782025 87.53699961423874 L 131.79288117090863 87.53699961423874 L 131.79288117090863 103.09877732343674 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={8}>
                              </path>
                              <path barheight="25.28788877744675" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="193.1758669217428" cy="165.34488816022872" d="M 157.06822824478152 190.63377693767546 L 157.06822824478152 165.34588816022872 L 167.9005198478699 165.34588816022872 L 167.9005198478699 190.63377693767546 Z" fill="rgba(112,77,173,1)" fillOpacity={1} id="SvgjsPath1668" index={1} j={4} pathfrom="M 157.06822824478152 190.63377693767546 L 157.06822824478152 190.63377693767546 L 167.9005198478699 190.63377693767546 L 167.9005198478699 190.63377693767546 L 167.9005198478699 190.63377693767546 L 167.9005198478699 190.63377693767546 L 167.9005198478699 190.63377693767546 L 157.06822824478152 190.63377693767546 Z" pathto="M 157.06822824478152 190.63377693767546 L 157.06822824478152 165.34588816022872 L 167.9005198478699 165.34588816022872 L 167.9005198478699 190.63377693767546 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={13}>
                              </path>
                              <path barheight="52.52099976854325" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="229.28350559870407" cy="97.26211068248747" d="M 193.1758669217428 149.78411045103073 L 193.1758669217428 97.26311068248748 L 204.00815852483117 97.26311068248748 L 204.00815852483117 149.78411045103073 Z" fill="rgba(112,77,173,1)" fillOpacity={1} id="SvgjsPath1670" index={1} j={5} pathfrom="M 193.1758669217428 149.78411045103073 L 193.1758669217428 149.78411045103073 L 204.00815852483117 149.78411045103073 L 204.00815852483117 149.78411045103073 L 204.00815852483117 149.78411045103073 L 204.00815852483117 149.78411045103073 L 204.00815852483117 149.78411045103073 L 193.1758669217428 149.78411045103073 Z" pathto="M 193.1758669217428 149.78411045103073 L 193.1758669217428 97.26311068248748 L 204.00815852483117 97.26311068248748 L 204.00815852483117 149.78411045103073 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={27}>
                              </path>
                              <g className="apexcharts-bar-goals-markers" id="SvgjsG1658" style={{ "pointer-events": "none" }}>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1659">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1661">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1663">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1665">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1667">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1669">
                                </g>
                              </g>
                            </g>
                            <g className="apexcharts-series" data-realindex={2} id="SvgjsG1671" rel={3} seriesname="Projectx3">
                              <path barheight="21.397444350147246" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="48.745312213897705" cy="101.15355510978699" d="M 12.637673536936443 122.55199945993424 L 12.637673536936443 101.154555109787 L 23.469965140024822 101.154555109787 L 23.469965140024822 122.55199945993424 Z" fill="rgba(255,193,7,1)" fillOpacity={1} id="SvgjsPath1675" index={2} j={0} pathfrom="M 12.637673536936443 122.55199945993424 L 12.637673536936443 122.55199945993424 L 23.469965140024822 122.55199945993424 L 23.469965140024822 122.55199945993424 L 23.469965140024822 122.55199945993424 L 23.469965140024822 122.55199945993424 L 23.469965140024822 122.55199945993424 L 12.637673536936443 122.55199945993424 Z" pathto="M 12.637673536936443 122.55199945993424 L 12.637673536936443 101.154555109787 L 23.469965140024822 101.154555109787 L 23.469965140024822 122.55199945993424 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={11}>
                              </path>
                              <path barheight="33.068777632045744" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="84.85295089085898" cy="48.63255534124374" d="M 48.745312213897705 81.70233297328949 L 48.745312213897705 48.633555341243735 L 59.577603816986084 48.633555341243735 L 59.577603816986084 81.70233297328949 Z" fill="rgba(255,193,7,1)" fillOpacity={1} id="SvgjsPath1677" index={2} j={1} pathfrom="M 48.745312213897705 81.70233297328949 L 48.745312213897705 81.70233297328949 L 59.577603816986084 81.70233297328949 L 59.577603816986084 81.70233297328949 L 59.577603816986084 81.70233297328949 L 59.577603816986084 81.70233297328949 L 59.577603816986084 81.70233297328949 L 48.745312213897705 81.70233297328949 Z" pathto="M 48.745312213897705 81.70233297328949 L 48.745312213897705 48.633555341243735 L 59.577603816986084 48.633555341243735 L 59.577603816986084 81.70233297328949 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={17}>
                              </path>
                              <path barheight="29.17833320474625" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="120.96058956782025" cy="85.591777400589" d="M 84.85295089085898 114.77111060533525 L 84.85295089085898 85.592777400589 L 95.68524249394736 85.592777400589 L 95.68524249394736 114.77111060533525 Z" fill="rgba(255,193,7,1)" fillOpacity={1} id="SvgjsPath1679" index={2} j={2} pathfrom="M 84.85295089085898 114.77111060533525 L 84.85295089085898 114.77111060533525 L 95.68524249394736 114.77111060533525 L 95.68524249394736 114.77111060533525 L 95.68524249394736 114.77111060533525 L 95.68524249394736 114.77111060533525 L 95.68524249394736 114.77111060533525 L 84.85295089085898 114.77111060533525 Z" pathto="M 84.85295089085898 114.77111060533525 L 84.85295089085898 85.592777400589 L 95.68524249394736 85.592777400589 L 95.68524249394736 114.77111060533525 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={15}>
                              </path>
                              <path barheight="29.17833320474625" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="157.06822824478152" cy="58.358666409492486" d="M 120.96058956782025 87.53799961423874 L 120.96058956782025 58.35966640949248 L 131.79288117090863 58.35966640949248 L 131.79288117090863 87.53799961423874 Z" fill="rgba(255,193,7,1)" fillOpacity={1} id="SvgjsPath1681" index={2} j={3} pathfrom="M 120.96058956782025 87.53799961423874 L 120.96058956782025 87.53799961423874 L 131.79288117090863 87.53799961423874 L 131.79288117090863 87.53799961423874 L 131.79288117090863 87.53799961423874 L 131.79288117090863 87.53799961423874 L 131.79288117090863 87.53799961423874 L 120.96058956782025 87.53799961423874 Z" pathto="M 120.96058956782025 87.53799961423874 L 120.96058956782025 58.35966640949248 L 131.79288117090863 58.35966640949248 L 131.79288117090863 87.53799961423874 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={15}>
                              </path>
                              <path barheight="40.84966648664474" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="193.1758669217428" cy="124.49622167358399" d="M 157.06822824478152 165.34688816022873 L 157.06822824478152 124.497221673584 L 167.9005198478699 124.497221673584 L 167.9005198478699 165.34688816022873 Z" fill="rgba(255,193,7,1)" fillOpacity={1} id="SvgjsPath1683" index={2} j={4} pathfrom="M 157.06822824478152 165.34688816022873 L 157.06822824478152 165.34688816022873 L 167.9005198478699 165.34688816022873 L 167.9005198478699 165.34688816022873 L 167.9005198478699 165.34688816022873 L 167.9005198478699 165.34688816022873 L 167.9005198478699 165.34688816022873 L 157.06822824478152 165.34688816022873 Z" pathto="M 157.06822824478152 165.34688816022873 L 157.06822824478152 124.497221673584 L 167.9005198478699 124.497221673584 L 167.9005198478699 165.34688816022873 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={21}>
                              </path>
                              <path barheight="27.2331109910965" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="229.28350559870407" cy="70.02999969139098" d="M 193.1758669217428 97.26411068248748 L 193.1758669217428 70.03099969139099 L 204.00815852483117 70.03099969139099 L 204.00815852483117 97.26411068248748 Z" fill="rgba(255,193,7,1)" fillOpacity={1} id="SvgjsPath1685" index={2} j={5} pathfrom="M 193.1758669217428 97.26411068248748 L 193.1758669217428 97.26411068248748 L 204.00815852483117 97.26411068248748 L 204.00815852483117 97.26411068248748 L 204.00815852483117 97.26411068248748 L 204.00815852483117 97.26411068248748 L 204.00815852483117 97.26411068248748 L 193.1758669217428 97.26411068248748 Z" pathto="M 193.1758669217428 97.26411068248748 L 193.1758669217428 70.03099969139099 L 204.00815852483117 70.03099969139099 L 204.00815852483117 97.26411068248748 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={14}>
                              </path>
                              <g className="apexcharts-bar-goals-markers" id="SvgjsG1673" style={{ "pointer-events": "none" }}>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1674">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1676">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1678">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1680">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1682">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1684">
                                </g>
                              </g>
                            </g>
                            <g className="apexcharts-series" data-realindex={3} id="SvgjsG1686" rel={4} seriesname="Projectx4">
                              <path barheight="40.84966648664474" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="48.745312213897705" cy="60.304888623142254" d="M 12.637673536936443 101.155555109787 L 12.637673536936443 60.30588862314225 L 23.469965140024822 60.30588862314225 L 23.469965140024822 101.155555109787 Z" fill="rgba(165,165,165,1)" fillOpacity={1} id="SvgjsPath1690" index={3} j={0} pathfrom="M 12.637673536936443 101.155555109787 L 12.637673536936443 101.155555109787 L 23.469965140024822 101.155555109787 L 23.469965140024822 101.155555109787 L 23.469965140024822 101.155555109787 L 23.469965140024822 101.155555109787 L 23.469965140024822 101.155555109787 L 12.637673536936443 101.155555109787 Z" pathto="M 12.637673536936443 101.155555109787 L 12.637673536936443 60.30588862314225 L 23.469965140024822 60.30588862314225 L 23.469965140024822 101.155555109787 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={21}>
                              </path>
                              <path barheight="13.61655549554825" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="84.85295089085898" cy="35.01699984569549" d="M 48.745312213897705 48.63455534124373 L 48.745312213897705 35.017999845695485 L 59.577603816986084 35.017999845695485 L 59.577603816986084 48.63455534124373 Z" fill="rgba(165,165,165,1)" fillOpacity={1} id="SvgjsPath1692" index={3} j={1} pathfrom="M 48.745312213897705 48.63455534124373 L 48.745312213897705 48.63455534124373 L 59.577603816986084 48.63455534124373 L 59.577603816986084 48.63455534124373 L 59.577603816986084 48.63455534124373 L 59.577603816986084 48.63455534124373 L 59.577603816986084 48.63455534124373 L 48.745312213897705 48.63455534124373 Z" pathto="M 48.745312213897705 48.63455534124373 L 48.745312213897705 35.017999845695485 L 59.577603816986084 35.017999845695485 L 59.577603816986084 48.63455534124373 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={7}>
                              </path>
                              <path barheight="48.63055534124374" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="120.96058956782025" cy="36.96222205934526" d="M 84.85295089085898 85.593777400589 L 84.85295089085898 36.963222059345256 L 95.68524249394736 36.963222059345256 L 95.68524249394736 85.593777400589 Z" fill="rgba(165,165,165,1)" fillOpacity={1} id="SvgjsPath1694" index={3} j={2} pathfrom="M 84.85295089085898 85.593777400589 L 84.85295089085898 85.593777400589 L 95.68524249394736 85.593777400589 L 95.68524249394736 85.593777400589 L 95.68524249394736 85.593777400589 L 95.68524249394736 85.593777400589 L 95.68524249394736 85.593777400589 L 84.85295089085898 85.593777400589 Z" pathto="M 84.85295089085898 85.593777400589 L 84.85295089085898 36.963222059345256 L 95.68524249394736 36.963222059345256 L 95.68524249394736 85.593777400589 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={25}>
                              </path>
                              <path barheight="25.28788877744675" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="157.06822824478152" cy="33.07177763204574" d="M 120.96058956782025 58.36066640949248 L 120.96058956782025 33.072777632045735 L 131.79288117090863 33.072777632045735 L 131.79288117090863 58.36066640949248 Z" fill="rgba(165,165,165,1)" fillOpacity={1} id="SvgjsPath1696" index={3} j={3} pathfrom="M 120.96058956782025 58.36066640949248 L 120.96058956782025 58.36066640949248 L 131.79288117090863 58.36066640949248 L 131.79288117090863 58.36066640949248 L 131.79288117090863 58.36066640949248 L 131.79288117090863 58.36066640949248 L 131.79288117090863 58.36066640949248 L 120.96058956782025 58.36066640949248 Z" pathto="M 120.96058956782025 58.36066640949248 L 120.96058956782025 33.072777632045735 L 131.79288117090863 33.072777632045735 L 131.79288117090863 58.36066640949248 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={13}>
                              </path>
                              <path barheight="42.79488870029449" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="193.1758669217428" cy="81.7023329732895" d="M 157.06822824478152 124.498221673584 L 157.06822824478152 81.7033329732895 L 167.9005198478699 81.7033329732895 L 167.9005198478699 124.498221673584 Z" fill="rgba(165,165,165,1)" fillOpacity={1} id="SvgjsPath1698" index={3} j={4} pathfrom="M 157.06822824478152 124.498221673584 L 157.06822824478152 124.498221673584 L 167.9005198478699 124.498221673584 L 167.9005198478699 124.498221673584 L 167.9005198478699 124.498221673584 L 167.9005198478699 124.498221673584 L 167.9005198478699 124.498221673584 L 157.06822824478152 124.498221673584 Z" pathto="M 157.06822824478152 124.498221673584 L 157.06822824478152 81.7033329732895 L 167.9005198478699 81.7033329732895 L 167.9005198478699 124.498221673584 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={22}>
                              </path>
                              <path barheight="15.561777709198" barwidth="10.832291603088379" className="apexcharts-bar-area" clipPath="url(#gridRectMask3cq70tg6)" cx="229.28350559870407" cy="54.46922198219299" d="M 193.1758669217428 70.031999691391 L 193.1758669217428 54.47022198219299 L 204.00815852483117 54.47022198219299 L 204.00815852483117 70.031999691391 Z" fill="rgba(165,165,165,1)" fillOpacity={1} id="SvgjsPath1700" index={3} j={5} pathfrom="M 193.1758669217428 70.031999691391 L 193.1758669217428 70.031999691391 L 204.00815852483117 70.031999691391 L 204.00815852483117 70.031999691391 L 204.00815852483117 70.031999691391 L 204.00815852483117 70.031999691391 L 204.00815852483117 70.031999691391 L 193.1758669217428 70.031999691391 Z" pathto="M 193.1758669217428 70.031999691391 L 193.1758669217428 54.47022198219299 L 204.00815852483117 54.47022198219299 L 204.00815852483117 70.031999691391 Z" strokeDasharray={0} strokeLinecap="round" strokeOpacity={1} strokeWidth={0} val={8}>
                              </path>
                              <g className="apexcharts-bar-goals-markers" id="SvgjsG1688" style={{ "pointer-events": "none" }}>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1689">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1691">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1693">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1695">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1697">
                                </g>
                                <g classname="apexcharts-bar-goals-groups" id="SvgjsG1699">
                                </g>
                              </g>
                            </g>
                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG1642">
                            </g>
                            <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG1657">
                            </g>
                            <g className="apexcharts-datalabels" data-realindex={2} id="SvgjsG1672">
                            </g>
                            <g className="apexcharts-datalabels" data-realindex={3} id="SvgjsG1687">
                            </g>
                          </g>
                          <line className="apexcharts-ycrosshairs" id="SvgjsLine1726" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="216.64583206176758" y1={0} y2={0}>
                          </line>
                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine1727" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="216.64583206176758" y1={0} y2={0}>
                          </line>
                          <g className="apexcharts-yaxis-annotations" id="SvgjsG1728">
                          </g>
                          <g className="apexcharts-xaxis-annotations" id="SvgjsG1729">
                          </g>
                          <g className="apexcharts-point-annotations" id="SvgjsG1730">
                          </g>
                          <g className="apexcharts-xaxis" id="SvgjsG1731" transform="translate(0, 0)">
                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG1732" transform="translate(0, -4)">
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1734" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="18.053819338480633" y="262.42666563796996">
                                <tspan id="SvgjsTspan1735">
                                  Mon
                                </tspan>
                                <title>
                                  Mon
                                </title>
                              </text>
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1737" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="54.161458015441895" y="262.42666563796996">
                                <tspan id="SvgjsTspan1738">
                                  Tue
                                </tspan>
                                <title>
                                  Tue
                                </title>
                              </text>
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1740" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="90.26909669240315" y="262.42666563796996">
                                <tspan id="SvgjsTspan1741">
                                  Wed
                                </tspan>
                                <title>
                                  Wed
                                </title>
                              </text>
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1743" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="126.37673536936443" y="262.42666563796996">
                                <tspan id="SvgjsTspan1744">
                                  Thu
                                </tspan>
                                <title>
                                  Thu
                                </title>
                              </text>
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1746" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="162.4843740463257" y="262.42666563796996">
                                <tspan id="SvgjsTspan1747">
                                  Fri
                                </tspan>
                                <title>
                                  Fri
                                </title>
                              </text>
                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1749" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="middle" x="198.59201272328698" y="262.42666563796996">
                                <tspan id="SvgjsTspan1750">
                                  Sat
                                </tspan>
                                <title>
                                  Sat
                                </title>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="apexcharts-yaxis" id="SvgjsG1752" rel={0} transform="translate(15.354167938232422, 0)">
                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG1753">
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1755" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="31.4">
                              <tspan id="SvgjsTspan1756">
                                120
                              </tspan>
                              <title>
                                120
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1758" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="89.7566664094925">
                              <tspan id="SvgjsTspan1759">
                                90
                              </tspan>
                              <title>
                                90
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1761" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="148.113332818985">
                              <tspan id="SvgjsTspan1762">
                                60
                              </tspan>
                              <title>
                                60
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1764" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="206.46999922847746">
                              <tspan id="SvgjsTspan1765">
                                30
                              </tspan>
                              <title>
                                30
                              </title>
                            </text>
                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1767" style={{ "font-family": "Helvetica, Arial, sans-serif" }} textAnchor="end" x={20} y="264.82666563796994">
                              <tspan id="SvgjsTspan1768">
                                0
                              </tspan>
                              <title>
                                0
                              </title>
                            </text>
                          </g>
                        </g>
                        <g className="apexcharts-annotations" id="SvgjsG1630">
                        </g>
                      </svg>
                      <div className="apexcharts-legend" style={{ "max-height": "150px" }}>
                      </div>
                      <div className="apexcharts-tooltip apexcharts-theme-light">
                        <div className="apexcharts-tooltip-title" style={{ "font-family": "Helvetica, Arial, sans-serif", "font-size": "12px" }}>
                        </div>
                        <div className="apexcharts-tooltip-series-group" style={{ "-webkit-order": "1", "-ms-flex-order": "1", "order": "1" }}>
                          <span className="apexcharts-tooltip-marker" style={{ "background-color": "rgb(0, 143, 251)" }}>
                          </span>
                          <div className="apexcharts-tooltip-text" style={{ "font-family": "Helvetica, Arial, sans-serif", "font-size": "12px" }}>
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
                        <div className="apexcharts-tooltip-series-group" style={{ "-webkit-order": "2", "-ms-flex-order": "2", "order": "2" }}>
                          <span className="apexcharts-tooltip-marker" style={{ "background-color": "rgb(0, 227, 150)" }}>
                          </span>
                          <div className="apexcharts-tooltip-text" style={{ "font-family": "Helvetica, Arial, sans-serif", "font-size": "12px" }}>
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
                        <div className="apexcharts-tooltip-series-group" style={{ "-webkit-order": "3", "-ms-flex-order": "3", "order": "3" }}>
                          <span className="apexcharts-tooltip-marker" style={{ "background-color": "rgb(254, 176, 25)" }}>
                          </span>
                          <div className="apexcharts-tooltip-text" style={{ "font-family": "Helvetica, Arial, sans-serif", "font-size": "12px" }}>
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
                        <div className="apexcharts-tooltip-series-group" style={{ "-webkit-order": "4", "-ms-flex-order": "4", "order": "4" }}>
                          <span className="apexcharts-tooltip-marker" style={{ "background-color": "rgb(255, 69, 96)" }}>
                          </span>
                          <div className="apexcharts-tooltip-text" style={{ "font-family": "Helvetica, Arial, sans-serif", "font-size": "12px" }}>
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
                        <div className="apexcharts-yaxistooltip-text">
                        </div>
                      </div>
                    </div>
                  </div>
                </apx-chart>
                <div _ngcontent-pgy-c226 className="row text-center ml-0 msr-0 pb-3">
                  <div _ngcontent-pgy-c226 className="col-6 border-right">
                    <div _ngcontent-pgy-c226 className="h4 fw-bold mb-0">
                      30%
                    </div>
                    <span _ngcontent-pgy-c226 className="small text-gray">
                      Last week
                    </span>
                  </div>
                  <div _ngcontent-pgy-c226 className="col-6">
                    <div _ngcontent-pgy-c226 className="h4 fw-bold mb-0">
                      70%
                    </div>
                    <span _ngcontent-pgy-c226 className="small text-gray">
                      Last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}


