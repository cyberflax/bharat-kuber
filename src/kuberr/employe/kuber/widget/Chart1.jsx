import React, { useState } from "react";
import "../../kuber/madhav/Madhav.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import a3 from "../img/a3.png"
import a1 from "../img/a1.png";
import a2 from "../img/a2.png";
import a4 from "../img/a4.jpg";
import a5 from "../img/a5.png";
import a6 from "../img/a6.png";
import a7 from "../img/a7.png";
import a8 from "../img/a8.png";
import a9 from "../img/a9.png";
import a10 from "../img/a10.png";
import a11 from "../img/a11.png";
import a12 from "../img/a12.png";
import a13 from "../img/a13.png";
import a14 from "../img/a14.png";
import a15 from "../img/a15.png";
import a16 from "../img/a16.png";
import a18 from "../img/a18.png";
import a26 from "../img/a26.png";
import a31 from "../../dashboard/img/logout.png"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  
} from "@fortawesome/free-solid-svg-icons";


export default function Chart1() {
  const [isOpen, setIsOpen] = useState(true);
  // const [isShow, setIsShow] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);
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
                              <div _ngcontent-hni-c131 ngbdropdowntoggle>
                                <span _ngcontent-hni-c131> Ella Jones </span>
                                <img _ngcontent-hni-c131 alt="User" className="user_img" height={32} src="../../assets/images/user/admin.jpg" width={32} />
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
          
    
                                <div className="sidebar-position">

                        <img _ngcontent-hni-c131 alt="logo" src="../../assets/images/logo.png" />
                        <h3><span style={{color:"black"}} > Cyber-Instant </span></h3>                     
                    </div>
                    <div className="trigger" onClick={handleTrigger}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>
                    <div className={`  disp ${isOpen ? "disp--open " : ""}`}>
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
                                  // style={{color:"white"}}
                                >
                                  Sarah Smith
                                </div>
                                <div
                                  _ngcontent-sas-c132=""
                                  class="profile-usertitle-job"
                                  // style={{color:"white"}}
                                >
                                  Admin
                                </div>
                              </div>
                              </div>
                             
         
            <Accordion   >
              <Accordion.Item eventKey="0" style={{ margin: "auto", overflow: "hidden", width: "92%" }} >
                <Accordion.Header  ><img className='img1' alt="a1" src={a1} /><p className="accord-p">Dashboard</p></Accordion.Header>
                <Accordion.Body>

                  <Dropdown.Item ><Link to="/Main" className='text-center link1'> Dashboard1</Link ></Dropdown.Item>
                  {/* <Dropdown.Item ><Link to="/Dashboard2"className='link1'>Dashboard2</Link ></Dropdown.Item> */}


                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="1" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a2" src={a2} /><p className="accord-p">Project</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Addproject" className='link1'>Add-project</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Allproject" className='link1'>All-project</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Estimate" className='link1'>Estimate</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/ProjectDetail" className='link1'>Project-Details</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="2" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a3" src={a3} /><p className="accord-p">Employees</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Addemploye" className='link1'>Add-Employe</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Allemploye" className='link1'>All-Employe</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Editemploye" className='link1'>Edite-Employe</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Employeprofile" className='link1'>Employe-Profile</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="3" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a4" src={a4} /><p className="accord-p">Leave Management</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/LeaveRequest" className='link1'>All Leave Requests</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Leavesbalance" className='link1'>Leave Balance</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Leavetype" className='link1'>Leave Types</Link ></Dropdown.Item>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a5" src={a5} /><p className="accord-p">Holidays</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Allholiday" className='link1'>All Holidays</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Addholiday" className='link1'>Add Holiday</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Editholiday" className='link1'>Edit Holiday</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a6" src={a6} /><p className="accord-p">Attendance</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Today" className='link1'>Today's Attendance</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Employ" className='link1'>Employee Attendance</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Atttendance" className='link1'>Attendance Sheet</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a7" src={a7} /><p className="accord-p">Clients</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Allclient" className='link1'>All Clients</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Addclient" className='link1'>Add Client</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Editclient" className='link1'>Edit Client</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a8" src={a8} /><p className="accord-p">Accounts</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Allpayment" className='link1'>All Payments</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Addpayment" className='link1'>Add Payment</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Invoice" className='link1'>Invoice</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a9" src={a9} /><p className="accord-p">Payroll</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Employsalary" className='link1'>Employee Salary</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Payslip" className='link1'>Payslip</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a10" src={a10} /><p className="accord-p">Leaders</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Leads" className='link1'> Leaders</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a11" src={a11} /><p className="accord-p">Jobs</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Job" className='link1'>Jobs List</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Resumes" className='link1'>Resumes</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Candidate" className='link1'>Candidates</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Shortlist" className='link1'>Shortlist Candidates</Link ></Dropdown.Item>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a12" src={a12} /><p className="accord-p"> Reports</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Leavereport" className='link1'>Leave Report</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Expense" className='link1'>Expense Report</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <div className="dash-item">
                <img className='img11' src={a13} alt="dash" /><Link to="/Calander" className="adashh">Calendar</Link>
              </div>

              <div className="dash-item">
                <img className='img11' src={a14} alt="dash" /><Link to="/AdminTask" className="adashh">Task</Link>
              </div>

              <div className="dash-item">
                <img className='img11' src={a15} alt="dash" /><Link to="/Contact1" className="adashh">Contact</Link>
              </div>
              <Accordion.Item eventKey="15" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a16" src={a16} /><p className="accord-p"> Email</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/AdminInbox" className='link1'>Inbox</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Admincompose" className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/AdminMail" className='link1'> Read Email</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="16" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a18" src={a18} /><p className="accord-p"> Widgets</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Chart1" className='link1'> Chart Widget</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Data1" className='link1'> Data Widget</Link ></Dropdown.Item>
                 
                </Accordion.Body>
              </Accordion.Item>







              <Accordion.Item eventKey="17" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
              <Accordion.Header><img className='img1' alt="a26" src={a26} /><p className="accord-p"> Authentication</p></Accordion.Header>
              <Accordion.Body>
                <Dropdown.Item ><Link to="/Signin" className='link1'> Sign In</Link ></Dropdown.Item>
                <Dropdown.Item ><Link to="/Signup" className='link1'> Sign Up</Link ></Dropdown.Item>
                <Dropdown.Item ><Link to="/Forget" className='link1'> Forgot Password</Link ></Dropdown.Item>
                <Dropdown.Item ><Link to="/Locked" className='link1'> Locked</Link ></Dropdown.Item>
                <Dropdown.Item ><Link to="/Page404" className='link1'> 404 - Not Found</Link ></Dropdown.Item>
                <Dropdown.Item ><Link to="/Page500" className='link1'> 500 - Server Error</Link ></Dropdown.Item>
              </Accordion.Body>
              </Accordion.Item>



              <div className="dash-item">
                <img className='img11' src={a31} alt="dash" /><Link to="/logout" className="adash">Logout</Link>
              </div>

            </Accordion>
          
        </div>
      </div>
    </div>
    <div _ngcontent-hni-c142 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>
                      <div _ngcontent-oko-c372 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c372 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Chart Widget
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
                                    Chart Widget
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c372 className="row">
                        <div _ngcontent-oko-c372 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="header">
                              <h2 _ngcontent-oko-c372>Chart Sample</h2>
                            </div>
                            <div _ngcontent-oko-c372 className="body">
                              <div _ngcontent-oko-c372 id="chart">
                                <apx-chart _ngcontent-oko-c372 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{"min-height":"253.7px"}}>
                                    <div className="apexcharts-canvas apexcharts58qud2e9 apexcharts-theme-light" id="apexcharts58qud2e9" style={{"width":"272px","height":"253.7px"}}>
                                      <svg className="apexcharts-svg" height="253.70000000000002" id="SvgjsSvg2960" style={{"background":"transparent"}} transform="translate(0, 0)" version="1.1" width={272} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <foreignObject height="253.70000000000002" width={272} x={0} y={0}>
                                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-left" style={{"position":"absolute","left":"30px","top":"30px"}} xmlns="http://www.w3.org/1999/xhtml">
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="Vimeo" style={{"margin":"2px 3px"}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{"background":"rgb(                                              255,                                              69,                                              96                                            ) !important","color":"rgb(255, 69, 96)","height":"12px","width":"12px","left":"0px","top":"0px","border-width":"0px","border-color":"rgb(255, 255, 255)","border-radius":"12px"}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Vimeo" i={0} rel={1} style={{"color":"rgb(255, 69, 96)","font-size":"12px","font-weight":"400","font-family":"Helvetica, Arial,                                              sans-serif"}}>
                                                Vimeo
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="Messenger" style={{"margin":"2px 3px"}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{"background":"rgb(                                              119,                                              93,                                              208                                            ) !important","color":"rgb(119, 93, 208)","height":"12px","width":"12px","left":"0px","top":"0px","border-width":"0px","border-color":"rgb(255, 255, 255)","border-radius":"12px"}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Messenger" i={1} rel={2} style={{"color":"rgb(119, 93, 208)","font-size":"12px","font-weight":"400","font-family":"Helvetica, Arial,                                              sans-serif"}}>
                                                Messenger
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={3} seriesname="Facebook" style={{"margin":"2px 3px"}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={3} style={{"background":"rgb(                                              0,                                              227,                                              150                                            ) !important","color":"rgb(0, 227, 150)","height":"12px","width":"12px","left":"0px","top":"0px","border-width":"0px","border-color":"rgb(255, 255, 255)","border-radius":"12px"}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Facebook" i={2} rel={3} style={{"color":"rgb(0, 227, 150)","font-size":"12px","font-weight":"400","font-family":"Helvetica, Arial,                                              sans-serif"}}>
                                                Facebook
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={4} seriesname="LinkedIn" style={{"margin":"2px 3px"}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={4} style={{"background":"rgb(                                              254,                                              176,                                              25                                            ) !important","color":"rgb(254, 176, 25)","height":"12px","width":"12px","left":"0px","top":"0px","border-width":"0px","border-color":"rgb(255, 255, 255)","border-radius":"12px"}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="LinkedIn" i={3} rel={4} style={{"color":"rgb(254, 176, 25)","font-size":"12px","font-weight":"400","font-family":"Helvetica, Arial,                                              sans-serif"}}>
                                                LinkedIn
                                              </span>
                                            </div>
                                          </div>
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                      .apexcharts-legend {\n                                        display: flex;\n                                        overflow: auto;\n                                        padding: 0 10px;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom,\n                                      .apexcharts-legend.apx-legend-position-top {\n                                        flex-wrap: wrap;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        flex-direction: column;\n                                        bottom: 0;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        justify-content: flex-start;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                        justify-content: center;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                        justify-content: flex-end;\n                                      }\n                                      .apexcharts-legend-series {\n                                        cursor: pointer;\n                                        line-height: normal;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apx-legend-position-top\n                                        .apexcharts-legend-series {\n                                        display: flex;\n                                        align-items: center;\n                                      }\n                                      .apexcharts-legend-text {\n                                        position: relative;\n                                        font-size: 14px;\n                                      }\n                                      .apexcharts-legend-text *,\n                                      .apexcharts-legend-marker * {\n                                        pointer-events: none;\n                                      }\n                                      .apexcharts-legend-marker {\n                                        position: relative;\n                                        display: inline-block;\n                                        cursor: pointer;\n                                        margin-right: 3px;\n                                        border-style: solid;\n                                      }\n\n                                      .apexcharts-legend.apexcharts-align-right\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apexcharts-align-left\n                                        .apexcharts-legend-series {\n                                        display: inline-block;\n                                      }\n                                      .apexcharts-legend-series.apexcharts-no-click {\n                                        cursor: auto;\n                                      }\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-zero-series,\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-null-series {\n                                        display: none !important;\n                                      }\n                                      .apexcharts-inactive-legend {\n                                        opacity: 0.45;\n                                      }\n                                    " }} />
                                        </foreignObject>
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2962" transform="translate(11.5, 0)">
                                          <defs id="SvgjsDefs2961">
                                            <clipPath id="gridRectMask58qud2e9">
                                              <rect fill="#fff" height={275} id="SvgjsRect2964" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={257} x={-3} y={-1} />
                                            </clipPath>
                                            <clipPath id="forecastMask58qud2e9" />
                                            <clipPath id="nonForecastMask58qud2e9" />
                                            <clipPath id="gridRectMarkerMask58qud2e9">
                                              <rect fill="#fff" height={277} id="SvgjsRect2965" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={255} x={-2} y={-2} />
                                            </clipPath>
                                          </defs>
                                          <g className="apexcharts-radialbar" id="SvgjsG2966">
                                            <g id="SvgjsG2967">
                                              <g className="apexcharts-tracks" id="SvgjsG2968">
                                                <g className="apexcharts-radialbar-track apexcharts-track" id="SvgjsG2969" rel={1}>
                                                  <path className="apexcharts-radialbar-area" d="M 125.5 31.013170731707305 A 94.4868292682927 94.4868292682927 0 1 1 31.013170731707305 125.50000000000001" data-pathorig="M 125.5 31.013170731707305 A 94.4868292682927 94.4868292682927 0 1 1 31.013170731707305 125.50000000000001" fill="none" fillOpacity={1} id="apexcharts-radialbarTrack-0" stroke="rgba(242,242,242,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="10.962419512195124" />
                                                </g>
                                                <g className="apexcharts-radialbar-track apexcharts-track" id="SvgjsG2971" rel={2}>
                                                  <path className="apexcharts-radialbar-area" d="M 125.5 47.31463414634146 A 78.18536585365854 78.18536585365854 0 1 1 47.31463414634146 125.50000000000001" data-pathorig="M 125.5 47.31463414634146 A 78.18536585365854 78.18536585365854 0 1 1 47.31463414634146 125.50000000000001" fill="none" fillOpacity={1} id="apexcharts-radialbarTrack-1" stroke="rgba(242,242,242,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="10.962419512195124" />
                                                </g>
                                                <g className="apexcharts-radialbar-track apexcharts-track" id="SvgjsG2973" rel={3}>
                                                  <path className="apexcharts-radialbar-area" d="M 125.5 63.61609756097562 A 61.88390243902438 61.88390243902438 0 1 1 63.61609756097562 125.50000000000001" data-pathorig="M 125.5 63.61609756097562 A 61.88390243902438 61.88390243902438 0 1 1 63.61609756097562 125.50000000000001" fill="none" fillOpacity={1} id="apexcharts-radialbarTrack-2" stroke="rgba(242,242,242,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="10.962419512195124" />
                                                </g>
                                                <g className="apexcharts-radialbar-track apexcharts-track" id="SvgjsG2975" rel={4}>
                                                  <path className="apexcharts-radialbar-area" d="M 125.5 79.91756097560977 A 45.58243902439023 45.58243902439023 0 1 1 79.91756097560977 125.5" data-pathorig="M 125.5 79.91756097560977 A 45.58243902439023 45.58243902439023 0 1 1 79.91756097560977 125.5" fill="none" fillOpacity={1} id="apexcharts-radialbarTrack-3" stroke="rgba(242,242,242,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="10.962419512195124" />
                                                </g>
                                              </g>
                                              <g id="SvgjsG2977">
                                                <g className="apexcharts-series apexcharts-radial-series" data-realindex={0} id="SvgjsG2980" rel={1} seriesname="Vimeo">
                                                  <path className="apexcharts-radialbar-area apexcharts-radialbar-slice-0" d="M 125.5 31.013170731707305 A 94.4868292682927 94.4868292682927 0 0 1 125.5 31.013170731707305" data-angle={205} data-pathorig="M 125.5 31.013170731707305 A 94.4868292682927 94.4868292682927 0 0 1 125.5 31.013170731707305" data-value={76} fill="none" fillOpacity="0.85" id="SvgjsPath2981" index={0} j={0} stroke="rgba(255,69,96,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="11.30146341463415" />
                                                </g>
                                                <g className="apexcharts-series apexcharts-radial-series" data-realindex={1} id="SvgjsG2982" rel={2} seriesname="Messenger">
                                                  <path className="apexcharts-radialbar-area apexcharts-radialbar-slice-1" d="M 125.5 47.31463414634146 A 78.18536585365854 78.18536585365854 0 0 1 125.5 47.31463414634146" data-angle={181} data-pathorig="M 125.5 47.31463414634146 A 78.18536585365854 78.18536585365854 0 0 1 125.5 47.31463414634146" data-value={67} fill="none" fillOpacity="0.85" id="SvgjsPath2983" index={0} j={1} stroke="rgba(119,93,208,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="11.30146341463415" />
                                                </g>
                                                <g className="apexcharts-series apexcharts-radial-series" data-realindex={2} id="SvgjsG2984" rel={3} seriesname="Facebook">
                                                  <path className="apexcharts-radialbar-area apexcharts-radialbar-slice-2" d="M 125.5 63.61609756097562 A 61.88390243902438 61.88390243902438 0 0 1 125.5 63.61609756097562" data-angle={165} data-pathorig="M 125.5 63.61609756097562 A 61.88390243902438 61.88390243902438 0 0 1 125.5 63.61609756097562" data-value={61} fill="none" fillOpacity="0.85" id="SvgjsPath2985" index={0} j={2} stroke="rgba(0,227,150,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="11.30146341463415" />
                                                </g>
                                                <g className="apexcharts-series apexcharts-radial-series" data-realindex={3} id="SvgjsG2986" rel={4} seriesname="LinkedIn">
                                                  <path className="apexcharts-radialbar-area apexcharts-radialbar-slice-3" d="M 125.5 79.91756097560977 A 45.58243902439023 45.58243902439023 0 0 1 125.5 79.91756097560977" data-angle={243} data-pathorig="M 125.5 79.91756097560977 A 45.58243902439023 45.58243902439023 0 0 1 125.5 79.91756097560977" data-value={90} fill="none" fillOpacity="0.85" id="SvgjsPath2987" index={0} j={3} stroke="rgba(254,176,25,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth="11.30146341463415" />
                                                </g>
                                                <circle className="apexcharts-radialbar-hollow" cx="125.5" cy="125.5" fill="transparent" id="SvgjsCircle2978" r="35.10122926829268" />
                                                <g className="apexcharts-datalabels-group" id="SvgjsG2979" style={{"opacity":"0"}} transform="translate(0, 0) scale(1)" />
                                              </g>
                                            </g>
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine2988" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={251} y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine2989" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={251} y1={0} y2={0} />
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG2963" />
                                      </svg>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                              <div _ngcontent-oko-c372 className="row">
                                <div _ngcontent-oko-c372 className="col-4">
                                  <p _ngcontent-oko-c372 className="text-muted font-15 text-truncate">
                                    Target
                                  </p>
                                  <h5 _ngcontent-oko-c372>
                                    <i _ngcontent-oko-c372 className="fas fa-arrow-circle-up col-green m-r-5">
                                    </i>
                                    $15.3k
                                  </h5>
                                </div>
                                <div _ngcontent-oko-c372 className="col-4">
                                  <p _ngcontent-oko-c372 className="text-muted font-15 text-truncate">
                                    Last week
                                  </p>
                                  <h5 _ngcontent-oko-c372>
                                    <i _ngcontent-oko-c372 className="fas fa-arrow-circle-down col-red m-r-5">
                                    </i>
                                    $2.8k
                                  </h5>
                                </div>
                                <div _ngcontent-oko-c372 className="col-4">
                                  <p _ngcontent-oko-c372 className="text-muted text-truncate">
                                    Last Month
                                  </p>
                                  <h5 _ngcontent-oko-c372>
                                    <i _ngcontent-oko-c372 className="fas fa-arrow-circle-up col-green m-r-5">
                                    </i>
                                    $12.5k
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="header">
                              <h2 _ngcontent-oko-c372>Chart Sample</h2>
                            </div>
                            <div _ngcontent-oko-c372 className="body">
                              <div _ngcontent-oko-c372 id="chart">
                                <apx-chart _ngcontent-oko-c372 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{"min-height":"255px"}}>
                                    <div className="apexcharts-canvas apexchartstpod9z5ik apexcharts-theme-light" id="apexchartstpod9z5ik" style={{"width":"272px","height":"240px"}}>
                                      <svg className="apexcharts-svg" height={240} id="SvgjsSvg2990" style={{"background":"transparent"}} transform="translate(0, 0)" version="1.1" width={272} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <foreignObject height={240} width={272} x={0} y={0}>
                                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" style={{"inset":"auto 0px 1px","position":"absolute","max-height":"120px"}} xmlns="http://www.w3.org/1999/xhtml">
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="Blue" style={{"margin":"2px 5px"}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{"background":"rgb(                                              0,                                              143,                                              251                                            ) !important","color":"rgb(0, 143, 251)","height":"12px","width":"12px","left":"0px","top":"0px","border-width":"0px","border-color":"rgb(255, 255, 255)","border-radius":"12px"}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Blue" i={0} rel={1} style={{"color":"rgb(55, 61, 63)","font-size":"12px","font-weight":"400","font-family":"Helvetica, Arial,                                              sans-serif"}}>
                                                Blue
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="Green" style={{"margin":"2px 5px"}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{"background":"rgb(                                              0,                                              227,                                              150                                            ) !important","color":"rgb(0, 227, 150)","height":"12px","width":"12px","left":"0px","top":"0px","border-width":"0px","border-color":"rgb(255, 255, 255)","border-radius":"12px"}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Green" i={1} rel={2} style={{"color":"rgb(55, 61, 63)","font-size":"12px","font-weight":"400","font-family":"Helvetica, Arial,                                              sans-serif"}}>
                                                Green
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={3} seriesname="Orange" style={{"margin":"2px 5px"}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={3} style={{"background":"rgb(                                              254,                                              176,                                              25                                            ) !important","color":"rgb(254, 176, 25)","height":"12px","width":"12px","left":"0px","top":"0px","border-width":"0px","border-color":"rgb(255, 255, 255)","border-radius":"12px"}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="Orange" i={2} rel={3} style={{"color":"rgb(55, 61, 63)","font-size":"12px","font-weight":"400","font-family":"Helvetica, Arial,                                              sans-serif"}}>
                                                Orange
                                              </span>
                                            </div>
                                          </div>
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                      .apexcharts-legend {\n                                        display: flex;\n                                        overflow: auto;\n                                        padding: 0 10px;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom,\n                                      .apexcharts-legend.apx-legend-position-top {\n                                        flex-wrap: wrap;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        flex-direction: column;\n                                        bottom: 0;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        justify-content: flex-start;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                        justify-content: center;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                        justify-content: flex-end;\n                                      }\n                                      .apexcharts-legend-series {\n                                        cursor: pointer;\n                                        line-height: normal;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apx-legend-position-top\n                                        .apexcharts-legend-series {\n                                        display: flex;\n                                        align-items: center;\n                                      }\n                                      .apexcharts-legend-text {\n                                        position: relative;\n                                        font-size: 14px;\n                                      }\n                                      .apexcharts-legend-text *,\n                                      .apexcharts-legend-marker * {\n                                        pointer-events: none;\n                                      }\n                                      .apexcharts-legend-marker {\n                                        position: relative;\n                                        display: inline-block;\n                                        cursor: pointer;\n                                        margin-right: 3px;\n                                        border-style: solid;\n                                      }\n\n                                      .apexcharts-legend.apexcharts-align-right\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apexcharts-align-left\n                                        .apexcharts-legend-series {\n                                        display: inline-block;\n                                      }\n                                      .apexcharts-legend-series.apexcharts-no-click {\n                                        cursor: auto;\n                                      }\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-zero-series,\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-null-series {\n                                        display: none !important;\n                                      }\n                                      .apexcharts-inactive-legend {\n                                        opacity: 0.45;\n                                      }\n                                    " }} />
                                        </foreignObject>
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG2992" transform="translate(14, 30)">
                                          <defs id="SvgjsDefs2991">
                                            <clipPath id="gridRectMasktpod9z5ik">
                                              <rect fill="#fff" height={152} id="SvgjsRect2996" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="240.7604160308838" x={-2} y={0} />
                                            </clipPath>
                                            <clipPath id="forecastMasktpod9z5ik" />
                                            <clipPath id="nonForecastMasktpod9z5ik" />
                                            <clipPath id="gridRectMarkerMasktpod9z5ik">
                                              <rect fill="#fff" height={156} id="SvgjsRect2997" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="240.7604160308838" x={-2} y={-2} />
                                            </clipPath>
                                            <filter height="200%" id="SvgjsFilter3005" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.35" id="SvgjsFeFlood3006" in="SourceGraphic" result="SvgjsFeFlood3006Out" />
                                              <feComposite id="SvgjsFeComposite3007" in="SvgjsFeFlood3006Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite3007Out" />
                                              <feOffset dx={1} dy={1} id="SvgjsFeOffset3008" in="SvgjsFeComposite3007Out" result="SvgjsFeOffset3008Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur3009" in="SvgjsFeOffset3008Out" result="SvgjsFeGaussianBlur3009Out" stdDeviation={1 } />
                                              <feMerge id="SvgjsFeMerge3010" in="SourceGraphic" result="SvgjsFeMerge3010Out">
                                                <feMergeNode id="SvgjsFeMergeNode3011" in="SvgjsFeGaussianBlur3009Out" />
                                                <feMergeNode id="SvgjsFeMergeNode3012" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend3013" in="SourceGraphic" in2="SvgjsFeMerge3010Out" mode="normal" result="SvgjsFeBlend3013Out" />
                                            </filter>
                                            <filter height="200%" id="SvgjsFilter3031" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.35" id="SvgjsFeFlood3032" in="SourceGraphic" result="SvgjsFeFlood3032Out" />
                                              <feComposite id="SvgjsFeComposite3033" in="SvgjsFeFlood3032Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite3033Out" />
                                              <feOffset dx={1} dy={1} id="SvgjsFeOffset3034" in="SvgjsFeComposite3033Out" result="SvgjsFeOffset3034Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur3035" in="SvgjsFeOffset3034Out" result="SvgjsFeGaussianBlur3035Out" stdDeviation={1 } />
                                              <feMerge id="SvgjsFeMerge3036" in="SourceGraphic" result="SvgjsFeMerge3036Out">
                                                <feMergeNode id="SvgjsFeMergeNode3037" in="SvgjsFeGaussianBlur3035Out" />
                                                <feMergeNode id="SvgjsFeMergeNode3038" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend3039" in="SourceGraphic" in2="SvgjsFeMerge3036Out" mode="normal" result="SvgjsFeBlend3039Out" />
                                            </filter>
                                            <filter height="200%" id="SvgjsFilter3057" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.35" id="SvgjsFeFlood3058" in="SourceGraphic" result="SvgjsFeFlood3058Out" />
                                              <feComposite id="SvgjsFeComposite3059" in="SvgjsFeFlood3058Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite3059Out" />
                                              <feOffset dx={1} dy={1} id="SvgjsFeOffset3060" in="SvgjsFeComposite3059Out" result="SvgjsFeOffset3060Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur3061" in="SvgjsFeOffset3060Out" result="SvgjsFeGaussianBlur3061Out" stdDeviation={1 } />
                                              <feMerge id="SvgjsFeMerge3062" in="SourceGraphic" result="SvgjsFeMerge3062Out">
                                                <feMergeNode id="SvgjsFeMergeNode3063" in="SvgjsFeGaussianBlur3061Out" />
                                                <feMergeNode id="SvgjsFeMergeNode3064" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend3065" in="SourceGraphic" in2="SvgjsFeMerge3062Out" mode="normal" result="SvgjsFeBlend3065Out" />
                                            </filter>
                                          </defs>
                                          <g className="apexcharts-grid" id="SvgjsG3101">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG3102" style={{"display":"none"}}>
                                              <line className="apexcharts-gridline" id="SvgjsLine3106" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="236.7604160308838" y1={38} y2={38} />
                                              <line className="apexcharts-gridline" id="SvgjsLine3107" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="236.7604160308838" y1={76} y2={76} />
                                              <line className="apexcharts-gridline" id="SvgjsLine3108" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="236.7604160308838" y1={114} y2={114} />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG3103" style={{"display":"none"}} />
                                            <line id="SvgjsLine3111" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="236.7604160308838" y1={152} y2={152} />
                                            <line id="SvgjsLine3110" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2={152} />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG3104" style={{"display":"none"}}>
                                            <line className="apexcharts-gridline" id="SvgjsLine3105" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="236.7604160308838" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine3109" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="236.7604160308838" y1={152} y2={152} />
                                          </g>
                                          <g className="apexcharts-radar-series apexcharts-plot-series" id="SvgjsG2998" transform="translate(118.3802080154419, 76)">
                                            <polygon fill="none" id="SvgjsPolygon3084" points="0,-82.39285641624814 71.35430674683457,-41.196428208124075 71.35430674683457,41.19642820812405 1.0090214788276574e-14,82.39285641624814 -71.35430674683455,41.196428208124104 -71.3543067468346,-41.19642820812401 " stroke="#e8e8e8" strokeWidth={1} />
                                            <polygon fill="none" id="SvgjsPolygon3085" points="0,-61.7946423121861 53.51573006012592,-30.897321156093057 53.515730060125925,30.897321156093035 7.56766109120743e-15,61.7946423121861 -53.515730060125904,30.897321156093078 -53.51573006012595,-30.897321156093007 " stroke="#e8e8e8" strokeWidth={1} />
                                            <polygon fill="none" id="SvgjsPolygon3086" points="0,-41.19642820812407 35.67715337341728,-20.598214104062038 35.67715337341728,20.598214104062023 5.045107394138287e-15,41.19642820812407 -35.677153373417276,20.598214104062052 -35.6771533734173,-20.598214104062006 " stroke="#e8e8e8" strokeWidth={1} />
                                            <polygon fill="none" id="SvgjsPolygon3087" points="0,-20.598214104062034 17.83857668670864,-10.299107052031019 17.83857668670864,10.299107052031012 2.5225536970691436e-15,20.598214104062034 -17.838576686708638,10.299107052031026 -17.83857668670865,-10.299107052031003 " stroke="#e8e8e8" strokeWidth={1} />
                                            <polygon fill="none" id="SvgjsPolygon3088" points="0,0 0,0 0,0 0,0 0,0 0,0 " stroke="#e8e8e8" strokeWidth={1} />
                                            <line id="SvgjsLine3078" stroke="#e8e8e8" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="-82.39285641624814" y2={0} />
                                            <line id="SvgjsLine3079" stroke="#e8e8e8" strokeDasharray={0} strokeLinecap="butt" x1="71.35430674683457" x2={0} y1="-41.196428208124075" y2={0} />
                                            <line id="SvgjsLine3080" stroke="#e8e8e8" strokeDasharray={0} strokeLinecap="butt" x1="71.35430674683457" x2={0} y1="41.19642820812405" y2={0} />
                                            <line id="SvgjsLine3081" stroke="#e8e8e8" strokeDasharray={0} strokeLinecap="butt" x1="1.0090214788276574e-14" x2={0} y1="82.39285641624814" y2={0} />
                                            <line id="SvgjsLine3082" stroke="#e8e8e8" strokeDasharray={0} strokeLinecap="butt" x1="-71.35430674683455" x2={0} y1="41.196428208124104" y2={0} />
                                            <line id="SvgjsLine3083" stroke="#e8e8e8" strokeDasharray={0} strokeLinecap="butt" x1="-71.3543067468346" x2={0} y1="-41.19642820812401" y2={0} />
                                            <g className="apexcharts-xaxis" id="SvgjsG3094">
                                              <text className="apexcharts-datalabel" cx={0} cy="-92.39285641624814" dominantBaseline="auto" fill="#a8a8a8" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3095" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x={0} y="-92.39285641624814">
                                                2011
                                              </text>
                                              <text className="apexcharts-datalabel" cx="81.35430674683457" cy="-41.196428208124075" dominantBaseline="auto" fill="#a8a8a8" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3096" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="start" x="81.35430674683457" y="-41.196428208124075">
                                                2012
                                              </text>
                                              <text className="apexcharts-datalabel" cx="81.35430674683457" cy="41.19642820812405" dominantBaseline="auto" fill="#a8a8a8" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3097" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="start" x="81.35430674683457" y="41.19642820812405">
                                                2013
                                              </text>
                                              <text className="apexcharts-datalabel" cx="1.0090214788276574e-14" cy="92.39285641624814" dominantBaseline="auto" fill="#a8a8a8" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3098" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="1.0090214788276574e-14" y="92.39285641624814">
                                                2014
                                              </text>
                                              <text className="apexcharts-datalabel" cx="-81.35430674683455" cy="41.196428208124104" dominantBaseline="auto" fill="#a8a8a8" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3099" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="end" x="-81.35430674683455" y="41.196428208124104">
                                                2015
                                              </text>
                                              <text className="apexcharts-datalabel" cx="-81.3543067468346" cy="-41.19642820812401" dominantBaseline="auto" fill="#a8a8a8" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3100" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="end" x="-81.3543067468346" y="-41.19642820812401">
                                                2016
                                              </text>
                                            </g>
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG3000" rel={1} seriesname="Blue">
                                              <path className="apexcharts-radar" d="M0 0 " fill="none" fillOpacity={1} id="SvgjsPath3003" index={0} pathfrom="M 0 0" pathto="M 0 -54.92857094416542 L 0 -54.92857094416542 L 29.730961144514403 -17.1651784200517 L 17.83857668670864 10.299107052031012 L 3.3634049294255248e-15 27.46428547208271 L -59.46192228902879 34.33035684010342 L -11.892384457805766 -6.866071368020669Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-radar" d="M0 0 " fill="rgba(0,143,251,0.4)" fillOpacity={1} filter="url(#SvgjsFilter3005)" id="SvgjsPath3004" index={0} pathfrom="M 0 0" pathto="M 0 -54.92857094416542 L 0 -54.92857094416542 L 29.730961144514403 -17.1651784200517 L 17.83857668670864 10.299107052031012 L 3.3634049294255248e-15 27.46428547208271 L -59.46192228902879 34.33035684010342 L -11.892384457805766 -6.866071368020669Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <g className="apexcharts-series-markers-wrap apexcharts-element-hidden" id="SvgjsG3001">
                                                <g className="apexcharts-series-markers" id="SvgjsG3015">
                                                  <circle className="apexcharts-marker" cx={0} cy="-54.92857094416542" default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle3014" index={0} j={0} r={0} rel={0} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3017">
                                                  <circle className="apexcharts-marker" cx="29.730961144514403" cy="-17.1651784200517" default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle3016" index={0} j={1} r={0} rel={1} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3019">
                                                  <circle className="apexcharts-marker" cx="17.83857668670864" cy="10.299107052031012" default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle3018" index={0} j={2} r={0} rel={2} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3021">
                                                  <circle className="apexcharts-marker" cx="3.3634049294255248e-15" cy="27.46428547208271" default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle3020" index={0} j={3} r={0} rel={3} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3023">
                                                  <circle className="apexcharts-marker" cx="-59.46192228902879" cy="34.33035684010342" default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle3022" index={0} j={4} r={0} rel={4} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3025">
                                                  <circle className="apexcharts-marker" cx="-11.892384457805766" cy="-6.866071368020669" default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle3024" index={0} j={5} r={0} rel={5} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker waq3ydgx8" cx={0} cy={0} default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle3117" r={0} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={1} id="SvgjsG3026" rel={2} seriesname="Green">
                                              <path className="apexcharts-radar" d="M0 0 " fill="none" fillOpacity={1} id="SvgjsPath3029" index={1} pathfrom="M 0 0" pathto="M 0 -13.732142736041355 L 0 -13.732142736041355 L 17.83857668670864 -10.299107052031019 L 23.784768915611522 13.73214273604135 L 6.7268098588510495e-15 54.92857094416542 L -11.892384457805758 6.866071368020684 L -47.569537831223066 -27.464285472082675Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-radar" d="M0 0 " fill="rgba(0,227,150,0.4)" fillOpacity={1} filter="url(#SvgjsFilter3031)" id="SvgjsPath3030" index={1} pathfrom="M 0 0" pathto="M 0 -13.732142736041355 L 0 -13.732142736041355 L 17.83857668670864 -10.299107052031019 L 23.784768915611522 13.73214273604135 L 6.7268098588510495e-15 54.92857094416542 L -11.892384457805758 6.866071368020684 L -47.569537831223066 -27.464285472082675Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <g className="apexcharts-series-markers-wrap apexcharts-element-hidden" id="SvgjsG3027">
                                                <g className="apexcharts-series-markers" id="SvgjsG3041">
                                                  <circle className="apexcharts-marker" cx={0} cy="-13.732142736041355" default-marker-size={0} fill="#00e396" fillOpacity={1} id="SvgjsCircle3040" index={1} j={0} r={0} rel={0} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3043">
                                                  <circle className="apexcharts-marker" cx="17.83857668670864" cy="-10.299107052031019" default-marker-size={0} fill="#00e396" fillOpacity={1} id="SvgjsCircle3042" index={1} j={1} r={0} rel={1} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3045">
                                                  <circle className="apexcharts-marker" cx="23.784768915611522" cy="13.73214273604135" default-marker-size={0} fill="#00e396" fillOpacity={1} id="SvgjsCircle3044" index={1} j={2} r={0} rel={2} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3047">
                                                  <circle className="apexcharts-marker" cx="6.7268098588510495e-15" cy="54.92857094416542" default-marker-size={0} fill="#00e396" fillOpacity={1} id="SvgjsCircle3046" index={1} j={3} r={0} rel={3} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3049">
                                                  <circle className="apexcharts-marker" cx="-11.892384457805758" cy="6.866071368020684" default-marker-size={0} fill="#00e396" fillOpacity={1} id="SvgjsCircle3048" index={1} j={4} r={0} rel={4} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3051">
                                                  <circle className="apexcharts-marker" cx="-47.569537831223066" cy="-27.464285472082675" default-marker-size={0} fill="#00e396" fillOpacity={1} id="SvgjsCircle3050" index={1} j={5} r={0} rel={5} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker wmzp5c55r" cx={0} cy={0} default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle3118" r={0} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={2} id="SvgjsG3052" rel={3} seriesname="Orange">
                                              <path className="apexcharts-radar" d="M0 0 " fill="none" fillOpacity={1} id="SvgjsPath3055" index={2} pathfrom="M 0 0" pathto="M 0 -30.210714019290982 L 0 -30.210714019290982 L 45.191060939661895 -26.091071198478584 L 46.38029938544247 26.777678335280633 L 1.0931066020632956e-15 8.925892778426881 L -25.56862658428238 14.76205344124447 L -5.946192228902883 -3.4330356840103344Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-radar" d="M0 0 " fill="rgba(254,176,25,0.4)" fillOpacity={1} filter="url(#SvgjsFilter3057)" id="SvgjsPath3056" index={2} pathfrom="M 0 0" pathto="M 0 -30.210714019290982 L 0 -30.210714019290982 L 45.191060939661895 -26.091071198478584 L 46.38029938544247 26.777678335280633 L 1.0931066020632956e-15 8.925892778426881 L -25.56862658428238 14.76205344124447 L -5.946192228902883 -3.4330356840103344Z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <g className="apexcharts-series-markers-wrap apexcharts-element-hidden" id="SvgjsG3053">
                                                <g className="apexcharts-series-markers" id="SvgjsG3067">
                                                  <circle className="apexcharts-marker" cx={0} cy="-30.210714019290982" default-marker-size={0} fill="#feb019" fillOpacity={1} id="SvgjsCircle3066" index={2} j={0} r={0} rel={0} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3069">
                                                  <circle className="apexcharts-marker" cx="45.191060939661895" cy="-26.091071198478584" default-marker-size={0} fill="#feb019" fillOpacity={1} id="SvgjsCircle3068" index={2} j={1} r={0} rel={1} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3071">
                                                  <circle className="apexcharts-marker" cx="46.38029938544247" cy="26.777678335280633" default-marker-size={0} fill="#feb019" fillOpacity={1} id="SvgjsCircle3070" index={2} j={2} r={0} rel={2} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3073">
                                                  <circle className="apexcharts-marker" cx="1.0931066020632956e-15" cy="8.925892778426881" default-marker-size={0} fill="#feb019" fillOpacity={1} id="SvgjsCircle3072" index={2} j={3} r={0} rel={3} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3075">
                                                  <circle className="apexcharts-marker" cx="-25.56862658428238" cy="14.76205344124447" default-marker-size={0} fill="#feb019" fillOpacity={1} id="SvgjsCircle3074" index={2} j={4} r={0} rel={4} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers" id="SvgjsG3077">
                                                  <circle className="apexcharts-marker" cx="-5.946192228902883" cy="-3.4330356840103344" default-marker-size={0} fill="#feb019" fillOpacity={1} id="SvgjsCircle3076" index={2} j={5} r={0} rel={5} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker wocyaau4h" cx={0} cy={0} default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle3119" r={0} stroke="#ffffff" strokeOpacity={1} strokeWidth={1} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-yaxis" id="SvgjsG2999">
                                              <text className="apexcharts-text" dominantBaseline="auto" fill="#373d3f" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight="regular" id="SvgjsText3089" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x={0} y="-76.39285641624814">
                                                120
                                              </text>
                                              <text className="apexcharts-text" dominantBaseline="auto" fill="#373d3f" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight="regular" id="SvgjsText3090" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x={0} y="-55.7946423121861">
                                                90
                                              </text>
                                              <text className="apexcharts-text" dominantBaseline="auto" fill="#373d3f" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight="regular" id="SvgjsText3091" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x={0} y="-35.19642820812407">
                                                60
                                              </text>
                                              <text className="apexcharts-text" dominantBaseline="auto" fill="#373d3f" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight="regular" id="SvgjsText3092" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x={0} y="-14.598214104062034">
                                                30
                                              </text>
                                              <text className="apexcharts-text" dominantBaseline="auto" fill="#373d3f" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight="regular" id="SvgjsText3093" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x={0} y={6}>
                                                0
                                              </text>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG3002" />
                                            <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG3028" />
                                            <g className="apexcharts-datalabels" data-realindex={2} id="SvgjsG3054" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine3112" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="236.7604160308838" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine3113" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="236.7604160308838" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations apexcharts-element-hidden" id="SvgjsG3114" />
                                          <g className="apexcharts-xaxis-annotations apexcharts-element-hidden" id="SvgjsG3115" />
                                          <g className="apexcharts-point-annotations apexcharts-element-hidden" id="SvgjsG3116" />
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG2993" />
                                      </svg>
                                      <div className="apexcharts-tooltip apexcharts-theme-light">
                                        <div className="apexcharts-tooltip-title" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}} />
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"1","-ms-flex-order":"1","order":"1"}}>
                                          <span className="apexcharts-tooltip-marker" style={{}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"2","-ms-flex-order":"2","order":"2"}}>
                                          <span className="apexcharts-tooltip-marker" style={{}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"3","-ms-flex-order":"3","order":"3"}}>
                                          <span className="apexcharts-tooltip-marker" style={{"background-color":"rgb(254, 176, 25)"}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                              <div _ngcontent-oko-c372 className="row">
                                <div _ngcontent-oko-c372 className="col-4">
                                  <p _ngcontent-oko-c372 className="text-muted font-15 text-truncate">
                                    Target
                                  </p>
                                  <h5 _ngcontent-oko-c372>
                                    <i _ngcontent-oko-c372 className="fas fa-arrow-circle-down col-red m-r-5">
                                    </i>
                                    $15.3k
                                  </h5>
                                </div>
                                <div _ngcontent-oko-c372 className="col-4">
                                  <p _ngcontent-oko-c372 className="text-muted font-15 text-truncate">
                                    Last week
                                  </p>
                                  <h5 _ngcontent-oko-c372>
                                    <i _ngcontent-oko-c372 className="fas fa-arrow-circle-up col-green m-r-5">
                                    </i>
                                    $2.8k
                                  </h5>
                                </div>
                                <div _ngcontent-oko-c372 className="col-4">
                                  <p _ngcontent-oko-c372 className="text-muted text-truncate">
                                    Last Month
                                  </p>
                                  <h5 _ngcontent-oko-c372>
                                    <i _ngcontent-oko-c372 className="fas fa-arrow-circle-down col-red m-r-5">
                                    </i>
                                    $12.5k
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="header">
                              <h2 _ngcontent-oko-c372>Chart Sample</h2>
                            </div>
                            <div _ngcontent-oko-c372 className="body">
                              <div _ngcontent-oko-c372 id="chart">
                                <apx-chart _ngcontent-oko-c372 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{"min-height":"255px"}}>
                                    <div className="apexcharts-canvas apexchartsjq25rvq6 apexcharts-theme-light" id="apexchartsjq25rvq6" style={{"width":"272px","height":"240px"}}>
                                      <svg className="apexcharts-svg apexcharts-zoomable" height={240} id="SvgjsSvg3120" style={{"background":"transparent"}} transform="translate(0, 0)" version="1.1" width={272} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <foreignObject height={240} width={272} x={0} y={0}>
                                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" style={{"inset":"auto 0px 1px","position":"absolute","max-height":"120px"}} xmlns="http://www.w3.org/1999/xhtml">
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={1} seriesname="series1" style={{"margin":"2px 5px"}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={1} style={{"background":"rgb(                                              0,                                              143,                                              251                                            ) !important","color":"rgb(0, 143, 251)","height":"12px","width":"12px","left":"0px","top":"0px","border-width":"0px","border-color":"rgb(255, 255, 255)","border-radius":"12px"}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="series1" i={0} rel={1} style={{"color":"rgb(154, 160, 172)","font-size":"12px","font-weight":"400","font-family":"Helvetica, Arial,                                              sans-serif"}}>
                                                series1
                                              </span>
                                            </div>
                                            <div className="apexcharts-legend-series" data-collapsed="false" rel={2} seriesname="series2" style={{"margin":"2px 5px"}}>
                                              <span className="apexcharts-legend-marker" data-collapsed="false" rel={2} style={{"background":"rgb(                                              0,                                              227,                                              150                                            ) !important","color":"rgb(0, 227, 150)","height":"12px","width":"12px","left":"0px","top":"0px","border-width":"0px","border-color":"rgb(255, 255, 255)","border-radius":"12px"}} />
                                              <span className="apexcharts-legend-text" data-collapsed="false" data-default-text="series2" i={1} rel={2} style={{"color":"rgb(154, 160, 172)","font-size":"12px","font-weight":"400","font-family":"Helvetica, Arial,                                              sans-serif"}}>
                                                series2
                                              </span>
                                            </div>
                                          </div>
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                      .apexcharts-legend {\n                                        display: flex;\n                                        overflow: auto;\n                                        padding: 0 10px;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom,\n                                      .apexcharts-legend.apx-legend-position-top {\n                                        flex-wrap: wrap;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        flex-direction: column;\n                                        bottom: 0;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n                                      .apexcharts-legend.apx-legend-position-right,\n                                      .apexcharts-legend.apx-legend-position-left {\n                                        justify-content: flex-start;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n                                        justify-content: center;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n                                      .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n                                        justify-content: flex-end;\n                                      }\n                                      .apexcharts-legend-series {\n                                        cursor: pointer;\n                                        line-height: normal;\n                                      }\n                                      .apexcharts-legend.apx-legend-position-bottom\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apx-legend-position-top\n                                        .apexcharts-legend-series {\n                                        display: flex;\n                                        align-items: center;\n                                      }\n                                      .apexcharts-legend-text {\n                                        position: relative;\n                                        font-size: 14px;\n                                      }\n                                      .apexcharts-legend-text *,\n                                      .apexcharts-legend-marker * {\n                                        pointer-events: none;\n                                      }\n                                      .apexcharts-legend-marker {\n                                        position: relative;\n                                        display: inline-block;\n                                        cursor: pointer;\n                                        margin-right: 3px;\n                                        border-style: solid;\n                                      }\n\n                                      .apexcharts-legend.apexcharts-align-right\n                                        .apexcharts-legend-series,\n                                      .apexcharts-legend.apexcharts-align-left\n                                        .apexcharts-legend-series {\n                                        display: inline-block;\n                                      }\n                                      .apexcharts-legend-series.apexcharts-no-click {\n                                        cursor: auto;\n                                      }\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-zero-series,\n                                      .apexcharts-legend\n                                        .apexcharts-hidden-null-series {\n                                        display: none !important;\n                                      }\n                                      .apexcharts-inactive-legend {\n                                        opacity: 0.45;\n                                      }\n                                    " }} />
                                        </foreignObject>
                                        <rect fill="#fefefe" height={0} id="SvgjsRect3129" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        <g className="apexcharts-annotations" id="SvgjsG3123" />
                                        <g className="apexcharts-yaxis" id="SvgjsG3202" rel={0} transform="translate(9.239583969116211, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG3203">
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3205" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="31.6">
                                              <tspan id="SvgjsTspan3206">60</tspan>
                                              <title>60</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3208" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="58.43333320617676">
                                              <tspan id="SvgjsTspan3209">50</tspan>
                                              <title>50</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3211" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="85.26666641235352">
                                              <tspan id="SvgjsTspan3212">40</tspan>
                                              <title>40</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3214" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="112.09999961853028">
                                              <tspan id="SvgjsTspan3215">30</tspan>
                                              <title>30</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3217" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="138.93333282470704">
                                              <tspan id="SvgjsTspan3218">20</tspan>
                                              <title>20</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3220" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="165.76666603088378">
                                              <tspan id="SvgjsTspan3221">10</tspan>
                                              <title>10</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3223" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="192.59999923706053">
                                              <tspan id="SvgjsTspan3224">0</tspan>
                                              <title>0</title>
                                            </text>
                                          </g>
                                        </g>
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG3122" transform="translate(39.23958396911621, 30)">
                                          <defs id="SvgjsDefs3121">
                                            <clipPath id="gridRectMaskjq25rvq6">
                                              <rect fill="#fff" height="164.99999923706054" id="SvgjsRect3140" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="230.7604160308838" x={-4} y={-2} />
                                            </clipPath>
                                            <clipPath id="forecastMaskjq25rvq6" />
                                            <clipPath id="nonForecastMaskjq25rvq6" />
                                            <clipPath id="gridRectMarkerMaskjq25rvq6">
                                              <rect fill="#fff" height="164.99999923706054" id="SvgjsRect3141" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="226.7604160308838" x={-2} y={-2} />
                                            </clipPath>
                                            <linearGradient id="SvgjsLinearGradient3146" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop3147" offset={0} stopColor="rgba(0,143,251,0.65)" stopOpacity="0.65" />
                                              <stop id="SvgjsStop3148" offset={1} stopColor="rgba(128,199,253,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop3149" offset={1} stopColor="rgba(128,199,253,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                            <linearGradient id="SvgjsLinearGradient3155" x1={0} x2={0} y1={0} y2={1}>
                                              <stop id="SvgjsStop3156" offset={0} stopColor="rgba(0,227,150,0.65)" stopOpacity="0.65" />
                                              <stop id="SvgjsStop3157" offset={1} stopColor="rgba(128,241,203,0.5)" stopOpacity="0.5" />
                                              <stop id="SvgjsStop3158" offset={1} stopColor="rgba(128,241,203,0.5)" stopOpacity="0.5" />
                                            </linearGradient>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="107.15554809570312" id="SvgjsLine3130" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="107.15554809570312" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3166" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="27.59728631183433" x2="27.59728631183433" y1="161.99999923706054" y2="167.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3168" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="83.24927252078203" x2="83.24927252078203" y1="161.99999923706054" y2="167.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3170" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="139.05372992482276" x2="139.05372992482276" y1="161.99999923706054" y2="167.99999923706054" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3172" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="194.7057161337704" x2="194.7057161337704" y1="161.99999923706054" y2="167.99999923706054" />
                                          <g className="apexcharts-grid" id="SvgjsG3161">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG3162">
                                              <line className="apexcharts-gridline" id="SvgjsLine3174" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="222.7604160308838" y1="26.833333206176757" y2="26.833333206176757" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3175" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="222.7604160308838" y1="53.666666412353514" y2="53.666666412353514" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3176" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="222.7604160308838" y1="80.49999961853027" y2="80.49999961853027" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3177" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="222.7604160308838" y1="107.33333282470703" y2="107.33333282470703" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3178" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="222.7604160308838" y1="134.1666660308838" y2="134.1666660308838" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG3163">
                                              <line className="apexcharts-gridline" id="SvgjsLine3165" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="27.59728631183433" x2="27.59728631183433" y1={0} y2="160.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3167" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="83.24927252078203" x2="83.24927252078203" y1={0} y2="160.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3169" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="139.05372992482276" x2="139.05372992482276" y1={0} y2="160.99999923706054" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3171" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="194.7057161337704" x2="194.7057161337704" y1={0} y2="160.99999923706054" />
                                            </g>
                                            <line id="SvgjsLine3181" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="222.7604160308838" y1="160.99999923706054" y2="160.99999923706054" />
                                            <line id="SvgjsLine3180" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="160.99999923706054" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG3164">
                                            <line className="apexcharts-gridline" id="SvgjsLine3173" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="222.7604160308838" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine3179" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="222.7604160308838" y1="160.99999923706054" y2="160.99999923706054" />
                                            <line id="SvgjsLine3201" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="222.7604160308838" y1="161.99999923706054" y2="161.99999923706054" />
                                          </g>
                                          <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG3142">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG3143" rel={1} seriesname="series1">
                                              <path className="apexcharts-area" clipPath="url(#gridRectMaskjq25rvq6)" d="M-1 160.99999923706054L-1 160.99999923706054L55.6519862089477 160.99999923706054L111.3039724178954 160.99999923706054L167.10842982193608 160.99999923706054L222.7604160308838 160.99999923706054 " fill="url(#SvgjsLinearGradient3146)" fillOpacity={1} id="SvgjsPath3150" index={0} pathfrom="M -1 160.99999923706054 L -1 160.99999923706054 L 55.6519862089477 160.99999923706054 L 111.3039724178954 160.99999923706054 L 167.10842982193608 160.99999923706054 L 222.7604160308838 160.99999923706054" pathto="M 0 160.99999923706054 L 0 77.81666629791259C 19.47819517313169 77.81666629791259 36.17379103581601 53.66666641235351 55.6519862089477 53.66666641235351C 75.13018138207939 53.66666641235351 91.8257772447637 85.86666625976562 111.3039724178954 85.86666625976562C 130.83553250930964 85.86666625976562 147.57686973052185 24.149999885559083 167.10842982193608 24.149999885559083C 186.58662499506778 24.149999885559083 203.2822208577521 48.29999977111815 222.7604160308838 48.29999977111815C 222.7604160308838 48.29999977111815 222.7604160308838 48.29999977111815 222.7604160308838 160.99999923706054M 222.7604160308838 48.29999977111815z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-area" clipPath="url(#gridRectMaskjq25rvq6)" d="M-1 160.99999923706054L-1 160.99999923706054L55.6519862089477 160.99999923706054L111.3039724178954 160.99999923706054L167.10842982193608 160.99999923706054L222.7604160308838 160.99999923706054 " fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath3151" index={0} pathfrom="M -1 160.99999923706054 L -1 160.99999923706054 L 55.6519862089477 160.99999923706054 L 111.3039724178954 160.99999923706054 L 167.10842982193608 160.99999923706054 L 222.7604160308838 160.99999923706054" pathto="M 0 77.81666629791259C 19.47819517313169 77.81666629791259 36.17379103581601 53.66666641235351 55.6519862089477 53.66666641235351C 75.13018138207939 53.66666641235351 91.8257772447637 85.86666625976562 111.3039724178954 85.86666625976562C 130.83553250930964 85.86666625976562 147.57686973052185 24.149999885559083 167.10842982193608 24.149999885559083C 186.58662499506778 24.149999885559083 203.2822208577521 48.29999977111815 222.7604160308838 48.29999977111815" stroke="#008ffb" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                              <g className="apexcharts-series-markers-wrap apexcharts-element-hidden" data-realindex={0} id="SvgjsG3144">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker wzktbadu4 no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#008ffb" fillOpacity={1} id="SvgjsCircle3225" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={1} id="SvgjsG3152" rel={2} seriesname="series2">
                                              <path className="apexcharts-area" clipPath="url(#gridRectMaskjq25rvq6)" d="M-1 160.99999923706054L-1 160.99999923706054L55.6519862089477 160.99999923706054L111.3039724178954 160.99999923706054L167.10842982193608 160.99999923706054L222.7604160308838 160.99999923706054 " fill="url(#SvgjsLinearGradient3155)" fillOpacity={1} id="SvgjsPath3159" index={1} pathfrom="M -1 160.99999923706054 L -1 160.99999923706054 L 55.6519862089477 160.99999923706054 L 111.3039724178954 160.99999923706054 L 167.10842982193608 160.99999923706054 L 222.7604160308838 160.99999923706054" pathto="M 0 160.99999923706054 L 0 131.4833327102661C 19.47819517313169 131.4833327102661 36.17379103581601 75.13333297729491 55.6519862089477 75.13333297729491C 75.13018138207939 75.13333297729491 91.8257772447637 40.249999809265134 111.3039724178954 40.249999809265134C 130.83553250930964 40.249999809265134 147.57686973052185 75.13333297729491 167.10842982193608 75.13333297729491C 186.58662499506778 75.13333297729491 203.2822208577521 69.76666633605956 222.7604160308838 69.76666633605956C 222.7604160308838 69.76666633605956 222.7604160308838 69.76666633605956 222.7604160308838 160.99999923706054M 222.7604160308838 69.76666633605956z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                              <path className="apexcharts-area" clipPath="url(#gridRectMaskjq25rvq6)" d="M-1 160.99999923706054L-1 160.99999923706054L55.6519862089477 160.99999923706054L111.3039724178954 160.99999923706054L167.10842982193608 160.99999923706054L222.7604160308838 160.99999923706054 " fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath3160" index={1} pathfrom="M -1 160.99999923706054 L -1 160.99999923706054 L 55.6519862089477 160.99999923706054 L 111.3039724178954 160.99999923706054 L 167.10842982193608 160.99999923706054 L 222.7604160308838 160.99999923706054" pathto="M 0 131.4833327102661C 19.47819517313169 131.4833327102661 36.17379103581601 75.13333297729491 55.6519862089477 75.13333297729491C 75.13018138207939 75.13333297729491 91.8257772447637 40.249999809265134 111.3039724178954 40.249999809265134C 130.83553250930964 40.249999809265134 147.57686973052185 75.13333297729491 167.10842982193608 75.13333297729491C 186.58662499506778 75.13333297729491 203.2822208577521 69.76666633605956 222.7604160308838 69.76666633605956" stroke="#00e396" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                              <g className="apexcharts-series-markers-wrap apexcharts-element-hidden" data-realindex={1} id="SvgjsG3153">
                                                <g className="apexcharts-series-markers">
                                                  <circle className="apexcharts-marker wlrgb4epv no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#00e396" fillOpacity={1} id="SvgjsCircle3226" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG3145" />
                                            <g className="apexcharts-datalabels" data-realindex={1} id="SvgjsG3154" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine3182" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="222.7604160308838" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine3183" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="222.7604160308838" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations apexcharts-element-hidden" id="SvgjsG3184" />
                                          <g className="apexcharts-xaxis-annotations apexcharts-element-hidden" id="SvgjsG3185" />
                                          <g className="apexcharts-point-annotations apexcharts-element-hidden" id="SvgjsG3186" />
                                          <g className="apexcharts-xaxis" id="SvgjsG3187" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG3188" transform="translate(0, -4)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3190" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="27.59728631183433" y="189.99999923706054">
                                                <tspan id="SvgjsTspan3191">
                                                  Jul '90
                                                </tspan>
                                                <title>Jul '90</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3193" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="83.24927252078203" y="189.99999923706054">
                                                <tspan id="SvgjsTspan3194">
                                                  Jul '91
                                                </tspan>
                                                <title>Jul '91</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3196" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="139.05372992482276" y="189.99999923706054">
                                                <tspan id="SvgjsTspan3197">
                                                  Jul '92
                                                </tspan>
                                                <title>Jul '92</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3199" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="194.7057161337704" y="189.99999923706054">
                                                <tspan id="SvgjsTspan3200">
                                                  Jul '93
                                                </tspan>
                                                <title>Jul '93</title>
                                              </text>
                                            </g>
                                          </g>
                                          <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect3227" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                          <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect3228" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        </g>
                                      </svg>
                                      <div className="apexcharts-tooltip apexcharts-theme-light">
                                        <div className="apexcharts-tooltip-title" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}} />
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"1","-ms-flex-order":"1","order":"1"}}>
                                          <span className="apexcharts-tooltip-marker" style={{}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"2","-ms-flex-order":"2","order":"2"}}>
                                          <span className="apexcharts-tooltip-marker" style={{}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                                        <div className="apexcharts-xaxistooltip-text" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}} />
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                              <div _ngcontent-oko-c372 className="row">
                                <div _ngcontent-oko-c372 className="col-4">
                                  <p _ngcontent-oko-c372 className="text-muted font-15 text-truncate">
                                    Target
                                  </p>
                                  <h5 _ngcontent-oko-c372>
                                    <i _ngcontent-oko-c372 className="fas fa-arrow-circle-down col-red m-r-5">
                                    </i>
                                    $15.3k
                                  </h5>
                                </div>
                                <div _ngcontent-oko-c372 className="col-4">
                                  <p _ngcontent-oko-c372 className="text-muted font-15 text-truncate">
                                    Last week
                                  </p>
                                  <h5 _ngcontent-oko-c372>
                                    <i _ngcontent-oko-c372 className="fas fa-arrow-circle-up col-green m-r-5">
                                    </i>
                                    $2.8k
                                  </h5>
                                </div>
                                <div _ngcontent-oko-c372 className="col-4">
                                  <p _ngcontent-oko-c372 className="text-muted text-truncate">
                                    Last Month
                                  </p>
                                  <h5 _ngcontent-oko-c372>
                                    <i _ngcontent-oko-c372 className="fas fa-arrow-circle-down col-red m-r-5">
                                    </i>
                                    $12.5k
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c372 className="row">
                        <div _ngcontent-oko-c372 className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="card-statistic-4">
                              <div _ngcontent-oko-c372 className="align-items-center justify-content-between">
                                <div _ngcontent-oko-c372 className="row">
                                  <div _ngcontent-oko-c372 className="col-lg-6 col-md-6 col-sm-6 col-xs-6 card-spacing">
                                    <div _ngcontent-oko-c372 className="card-content">
                                      <h5 _ngcontent-oko-c372 className="font-15">
                                        New Students
                                      </h5>
                                      <h2 _ngcontent-oko-c372 className="mb-3 font-18">
                                        1,025
                                      </h2>
                                      <p _ngcontent-oko-c372 className="mb-0">
                                        <span _ngcontent-oko-c372 className="col-green">
                                          10%
                                        </span>
                                        Increase
                                      </p>
                                    </div>
                                  </div>
                                  <div _ngcontent-oko-c372 className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div _ngcontent-oko-c372 className="banner-img">
                                      <img _ngcontent-oko-c372 alt="banner1" src="../assets/images/banner/1.png" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="card-statistic-4">
                              <div _ngcontent-oko-c372 className="align-items-center justify-content-between">
                                <div _ngcontent-oko-c372 className="row">
                                  <div _ngcontent-oko-c372 className="col-lg-6 col-md-6 col-sm-6 col-xs-6 card-spacing">
                                    <div _ngcontent-oko-c372 className="card-content">
                                      <h5 _ngcontent-oko-c372 className="font-15">
                                        Total Courses
                                      </h5>
                                      <h2 _ngcontent-oko-c372 className="mb-3 font-18">
                                        47
                                      </h2>
                                      <p _ngcontent-oko-c372 className="mb-0">
                                        <span _ngcontent-oko-c372 className="col-orange">
                                          09%
                                        </span>
                                        Decrease
                                      </p>
                                    </div>
                                  </div>
                                  <div _ngcontent-oko-c372 className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div _ngcontent-oko-c372 className="banner-img">
                                      <img _ngcontent-oko-c372 alt="banner2" src="../assets/images/banner/2.png" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="card-statistic-4">
                              <div _ngcontent-oko-c372 className="align-items-center justify-content-between">
                                <div _ngcontent-oko-c372 className="row">
                                  <div _ngcontent-oko-c372 className="col-lg-6 col-md-6 col-sm-6 col-xs-6 card-spacing">
                                    <div _ngcontent-oko-c372 className="card-content">
                                      <h5 _ngcontent-oko-c372 className="font-15">
                                        Awards
                                      </h5>
                                      <h2 _ngcontent-oko-c372 className="mb-3 font-18">
                                        128
                                      </h2>
                                      <p _ngcontent-oko-c372 className="mb-0">
                                        <span _ngcontent-oko-c372 className="col-green">
                                          18%
                                        </span>
                                        Increase
                                      </p>
                                    </div>
                                  </div>
                                  <div _ngcontent-oko-c372 className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div _ngcontent-oko-c372 className="banner-img">
                                      <img _ngcontent-oko-c372 alt="banner3" src="../assets/images/banner/3.png" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="card-statistic-4">
                              <div _ngcontent-oko-c372 className="align-items-center justify-content-between">
                                <div _ngcontent-oko-c372 className="row">
                                  <div _ngcontent-oko-c372 className="col-lg-6 col-md-6 col-sm-6 col-xs-6 card-spacing">
                                    <div _ngcontent-oko-c372 className="card-content">
                                      <h5 _ngcontent-oko-c372 className="font-15">
                                        Revenue
                                      </h5>
                                      <h2 _ngcontent-oko-c372 className="mb-3 font-18">
                                        $48,697
                                      </h2>
                                      <p _ngcontent-oko-c372 className="mb-0">
                                        <span _ngcontent-oko-c372 className="col-green">
                                          42%
                                        </span>
                                        Increase
                                      </p>
                                    </div>
                                  </div>
                                  <div _ngcontent-oko-c372 className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div _ngcontent-oko-c372 className="banner-img">
                                      <img _ngcontent-oko-c372 alt="banner4" src="../assets/images/banner/4.png" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c372 className="row">
                        <div _ngcontent-oko-c372 className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="card-body">
                              <div _ngcontent-oko-c372 className="float-start">
                                <h6 _ngcontent-oko-c372 className="text-muted">
                                  Average Lecture Per Month
                                </h6>
                                <h5 _ngcontent-oko-c372>
                                  65
                                  <span _ngcontent-oko-c372 className="text-muted font-12">
                                    (Average)
                                  </span>
                                </h5>
                              </div>
                              <div _ngcontent-oko-c372 className="mb-5">
                                <apx-chart _ngcontent-oko-c372 _nghost-oko-c139>
                                  <div _ngcontent-oko-c139 style={{"min-height":"365px"}}>
                                    <div className="apexcharts-canvas apexcharts9ugtsew1 apexcharts-theme-light" id="apexcharts9ugtsew1" style={{"width":"598px","height":"350px"}}>
                                      <svg className="apexcharts-svg apexcharts-zoomable" height={350} id="SvgjsSvg3229" style={{"background":"transparent"}} transform="translate(0, 0)" version="1.1" width={598} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG3231" transform="translate(46.23958396911621, 30)">
                                          <defs id="SvgjsDefs3230">
                                            <clipPath id="gridRectMask9ugtsew1">
                                              <rect fill="#fff" height="266.8533312759399" id="SvgjsRect3239" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="538.7499990463257" x="-4.5" y="-2.5" />
                                            </clipPath>
                                            <clipPath id="forecastMask9ugtsew1" />
                                            <clipPath id="nonForecastMask9ugtsew1" />
                                            <clipPath id="gridRectMarkerMask9ugtsew1">
                                              <rect fill="#fff" height="309.8533312759399" id="SvgjsRect3240" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="577.7499990463257" x={-24} y={-24} />
                                            </clipPath>
                                            <linearGradient id="SvgjsLinearGradient3260" x1={0} x2={1} y1={1} y2={1}>
                                              <stop id="SvgjsStop3261" offset={0} stopColor="rgba(53,253,216,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3262" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3263" offset={1} stopColor="rgba(0,143,251,1)" stopOpacity={1} />
                                              <stop id="SvgjsStop3264" offset={1} stopColor="rgba(53,253,216,1)" stopOpacity={1} />
                                            </linearGradient>
                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter3266" width="200%" x="-50%" y="-50%">
                                              <feFlood floodColor="#000000" floodOpacity="0.2" id="SvgjsFeFlood3267" in="SourceGraphic" result="SvgjsFeFlood3267Out" />
                                              <feComposite id="SvgjsFeComposite3268" in="SvgjsFeFlood3267Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite3268Out" />
                                              <feOffset dx={7} dy={18} id="SvgjsFeOffset3269" in="SvgjsFeComposite3268Out" result="SvgjsFeOffset3269Out" />
                                              <feGaussianBlur id="SvgjsFeGaussianBlur3270" in="SvgjsFeOffset3269Out" result="SvgjsFeGaussianBlur3270Out" stdDeviation={10 } />
                                              <feMerge id="SvgjsFeMerge3271" in="SourceGraphic" result="SvgjsFeMerge3271Out">
                                                <feMergeNode id="SvgjsFeMergeNode3272" in="SvgjsFeGaussianBlur3270Out" />
                                                <feMergeNode id="SvgjsFeMergeNode3273" in="[object Arguments]" />
                                              </feMerge>
                                              <feBlend id="SvgjsFeBlend3274" in="SourceGraphic" in2="SvgjsFeMerge3271Out" mode="normal" result="SvgjsFeBlend3274Out" />
                                            </filter>
                                          </defs>
                                          <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="261.8533312759399" id="SvgjsLine3238" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="261.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3280" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3282" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="75.67857129233224" x2="75.67857129233224" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3284" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="151.35714258466447" x2="151.35714258466447" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3286" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="227.0357138769967" x2="227.0357138769967" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3288" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="302.71428516932895" x2="302.71428516932895" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3290" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="378.39285646166115" x2="378.39285646166115" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3292" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="454.07142775399336" x2="454.07142775399336" y1="262.8533312759399" y2="268.8533312759399" />
                                          <line className="apexcharts-xaxis-tick" id="SvgjsLine3294" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="529.7499990463256" x2="529.7499990463256" y1="262.8533312759399" y2="268.8533312759399" />
                                          <g className="apexcharts-grid" id="SvgjsG3275">
                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG3276">
                                              <line className="apexcharts-gridline" id="SvgjsLine3296" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="529.7499990463257" y1="52.370666255187984" y2="52.370666255187984" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3297" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="529.7499990463257" y1="104.74133251037597" y2="104.74133251037597" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3298" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="529.7499990463257" y1="157.11199876556395" y2="157.11199876556395" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3299" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="529.7499990463257" y1="209.48266502075194" y2="209.48266502075194" />
                                            </g>
                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG3277">
                                              <line className="apexcharts-gridline" id="SvgjsLine3279" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3281" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="75.67857129233224" x2="75.67857129233224" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3283" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="151.35714258466447" x2="151.35714258466447" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3285" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="227.0357138769967" x2="227.0357138769967" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3287" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="302.71428516932895" x2="302.71428516932895" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3289" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="378.39285646166115" x2="378.39285646166115" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3291" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="454.07142775399336" x2="454.07142775399336" y1={0} y2="261.8533312759399" />
                                              <line className="apexcharts-gridline" id="SvgjsLine3293" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="529.7499990463256" x2="529.7499990463256" y1={0} y2="261.8533312759399" />
                                            </g>
                                            <line id="SvgjsLine3302" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="529.7499990463257" y1="261.8533312759399" y2="261.8533312759399" />
                                            <line id="SvgjsLine3301" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="261.8533312759399" />
                                          </g>
                                          <g className="apexcharts-grid-borders" id="SvgjsG3278">
                                            <line className="apexcharts-gridline" id="SvgjsLine3295" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="529.7499990463257" y1={0} y2={0} />
                                            <line className="apexcharts-gridline" id="SvgjsLine3300" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="529.7499990463257" y1="261.8533312759399" y2="261.8533312759399" />
                                            <line id="SvgjsLine3336" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="529.7499990463257" y1="262.8533312759399" y2="262.8533312759399" />
                                          </g>
                                          <g className="apexcharts-line-series apexcharts-plot-series" id="SvgjsG3241">
                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG3242" rel={1} seriesname="AvgxxLecture">
                                              <path className="apexcharts-line" clipPath="url(#gridRectMask9ugtsew1)" d="M-1 1309.2666563796997L-1 1309.2666563796997L75.67857129233224 1309.2666563796997L151.35714258466447 1309.2666563796997L227.0357138769967 1309.2666563796997L302.71428516932895 1309.2666563796997L378.3928564616612 1309.2666563796997L454.0714277539934 1309.2666563796997L529.7499990463257 1309.2666563796997 " fill="none" fillOpacity={1} fillRule="evenodd" filter="url(#SvgjsFilter3266)" id="SvgjsPath3265" index={0} pathfrom="M -1 1309.2666563796997 L -1 1309.2666563796997 L 75.67857129233224 1309.2666563796997 L 151.35714258466447 1309.2666563796997 L 227.0357138769967 1309.2666563796997 L 302.71428516932895 1309.2666563796997 L 378.3928564616612 1309.2666563796997 L 454.0714277539934 1309.2666563796997 L 529.7499990463257 1309.2666563796997" pathto="M 0 174.56888751729343C 26.48749995231628 174.56888751729343 49.19107134001595 52.3706662551881 75.67857129233224 52.3706662551881C 102.16607124464852 52.3706662551881 124.86964263234819 226.9395537724813 151.35714258466447 226.9395537724813C 177.84464253698076 226.9395537724813 200.54821392468043 34.91377750345873 227.0357138769967 34.91377750345873C 253.523213829313 34.91377750345873 276.22678521701266 157.11199876556407 302.71428516932895 157.11199876556407C 329.20178512164523 157.11199876556407 351.9053565093449 17.456888751729366 378.3928564616612 17.456888751729366C 404.8803564139775 17.456888751729366 427.58392780167713 209.48266502075194 454.0714277539934 209.48266502075194C 480.5589277063097 209.48266502075194 503.2624990940094 139.6551100138347 529.7499990463257 139.6551100138347" stroke="url(#SvgjsLinearGradient3260)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5} />
                                              <g className="apexcharts-series-markers-wrap apexcharts-element-hidden" data-realindex={0} id="SvgjsG3243">
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9ugtsew1)" id="SvgjsG3245">
                                                  <circle className="apexcharts-marker no-pointer-events wa227oxvc" cx={0} cy="174.56888751729343" default-marker-size={4} fill="#ffa41b" fillOpacity={1} id="SvgjsCircle3246" index={0} j={0} r={4} rel={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                  <circle className="apexcharts-marker no-pointer-events wtcphzwafj" cx="75.67857129233224" cy="52.3706662551881" default-marker-size={4} fill="#ffa41b" fillOpacity={1} id="SvgjsCircle3247" index={0} j={1} r={4} rel={1} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9ugtsew1)" id="SvgjsG3248">
                                                  <circle className="apexcharts-marker no-pointer-events wwqyxvwcx" cx="151.35714258466447" cy="226.9395537724813" default-marker-size={4} fill="#ffa41b" fillOpacity={1} id="SvgjsCircle3249" index={0} j={2} r={4} rel={2} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9ugtsew1)" id="SvgjsG3250">
                                                  <circle className="apexcharts-marker no-pointer-events w4fjmsbc4" cx="227.0357138769967" cy="34.91377750345873" default-marker-size={4} fill="#ffa41b" fillOpacity={1} id="SvgjsCircle3251" index={0} j={3} r={4} rel={3} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9ugtsew1)" id="SvgjsG3252">
                                                  <circle className="apexcharts-marker no-pointer-events w3juevs2c" cx="302.71428516932895" cy="157.11199876556407" default-marker-size={4} fill="#ffa41b" fillOpacity={1} id="SvgjsCircle3253" index={0} j={4} r={4} rel={4} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9ugtsew1)" id="SvgjsG3254">
                                                  <circle className="apexcharts-marker no-pointer-events wdhfjkk58" cx="378.3928564616612" cy="17.456888751729366" default-marker-size={4} fill="#ffa41b" fillOpacity={1} id="SvgjsCircle3255" index={0} j={5} r={4} rel={5} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9ugtsew1)" id="SvgjsG3256">
                                                  <circle className="apexcharts-marker no-pointer-events w3nbxnl70i" cx="454.0714277539934" cy="209.48266502075194" default-marker-size={4} fill="#ffa41b" fillOpacity={1} id="SvgjsCircle3257" index={0} j={6} r={4} rel={6} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                                <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9ugtsew1)" id="SvgjsG3258">
                                                  <circle className="apexcharts-marker no-pointer-events whjekxmbt" cx="529.7499990463257" cy="139.6551100138347" default-marker-size={4} fill="#ffa41b" fillOpacity={1} id="SvgjsCircle3259" index={0} j={7} r={4} rel={7} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                                </g>
                                              </g>
                                            </g>
                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG3244" />
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine3303" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="529.7499990463257" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine3304" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="529.7499990463257" y1={0} y2={0} />
                                          <g className="apexcharts-yaxis-annotations apexcharts-element-hidden" id="SvgjsG3305" />
                                          <g className="apexcharts-xaxis-annotations apexcharts-element-hidden" id="SvgjsG3306" />
                                          <g className="apexcharts-point-annotations apexcharts-element-hidden" id="SvgjsG3307" />
                                          <g className="apexcharts-xaxis" id="SvgjsG3308" transform="translate(0, 0)">
                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG3309" transform="translate(0, -4)">
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3311" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x={0} y="290.8533312759399">
                                                <tspan id="SvgjsTspan3312">Jan</tspan>
                                                <title>Jan</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3314" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="75.67857129233224" y="290.8533312759399">
                                                <tspan id="SvgjsTspan3315">Feb</tspan>
                                                <title>Feb</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3317" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="151.35714258466447" y="290.8533312759399">
                                                <tspan id="SvgjsTspan3318">
                                                  March
                                                </tspan>
                                                <title>March</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3320" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="227.03571387699674" y="290.8533312759399">
                                                <tspan id="SvgjsTspan3321">Apr</tspan>
                                                <title>Apr</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3323" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="302.71428516932895" y="290.8533312759399">
                                                <tspan id="SvgjsTspan3324">May</tspan>
                                                <title>May</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3326" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="378.39285646166115" y="290.8533312759399">
                                                <tspan id="SvgjsTspan3327">Jun</tspan>
                                                <title>Jun</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3329" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="454.07142775399336" y="290.8533312759399">
                                                <tspan id="SvgjsTspan3330">
                                                  July
                                                </tspan>
                                                <title>July</title>
                                              </text>
                                              <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText3332" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="529.7499990463256" y="290.8533312759399">
                                                <tspan id="SvgjsTspan3333">Aug</tspan>
                                                <title>Aug</title>
                                              </text>
                                            </g>
                                            <g className="apexcharts-xaxis-title" id="SvgjsG3334">
                                              <text className="apexcharts-text apexcharts-xaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={900} id="SvgjsText3335" style={{"font-family":"Helvetica, Arial,                                              sans-serif"}} textAnchor="middle" x="264.87499952316284" y="314.6666660308838">
                                                Weekday
                                              </text>
                                            </g>
                                          </g>
                                          <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect3359" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                          <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect3360" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG3232" />
                                        <g className="apexcharts-yaxis" id="SvgjsG3337" rel={0} transform="translate(16.23958396911621, 0)">
                                          <g className="apexcharts-yaxis-texts-g" id="SvgjsG3338">
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3340" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="31.5">
                                              <tspan id="SvgjsTspan3341">75</tspan>
                                              <title>75</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3343" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="83.87066625518798">
                                              <tspan id="SvgjsTspan3344">72</tspan>
                                              <title>72</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3346" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="136.24133251037597">
                                              <tspan id="SvgjsTspan3347">69</tspan>
                                              <title>69</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3349" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="188.61199876556395">
                                              <tspan id="SvgjsTspan3350">66</tspan>
                                              <title>66</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3352" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="240.98266502075194">
                                              <tspan id="SvgjsTspan3353">63</tspan>
                                              <title>63</title>
                                            </text>
                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText3355" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" x={20} y="293.3533312759399">
                                              <tspan id="SvgjsTspan3356">60</tspan>
                                              <title>60</title>
                                            </text>
                                          </g>
                                          <g className="apexcharts-yaxis-title" id="SvgjsG3357">
                                            <text className="apexcharts-text apexcharts-yaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={900} id="SvgjsText3358" style={{"font-family":"Helvetica, Arial,                                            sans-serif"}} textAnchor="end" transform="rotate(-90 -6.57958984375 156.59333324432373)" x="31.616456985473633" y="160.92666563796996">
                                              Avg. Lecture
                                            </text>
                                          </g>
                                        </g>
                                        <rect fill="#fefefe" height={0} id="SvgjsRect3237" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                      </svg>
                                      <div className="apexcharts-legend" style={{"max-height":"175px"}} />
                                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                                        <div className="apexcharts-tooltip-title" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}} />
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"1","-ms-flex-order":"1","order":"1"}}>
                                          <span className="apexcharts-tooltip-marker" style={{}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                                      <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                                        <div className="apexcharts-xaxistooltip-text" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}} />
                                      </div>
                                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                        <div className="apexcharts-yaxistooltip-text" />
                                      </div>
                                    </div>
                                  </div>
                                </apx-chart>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="header">
                              <h2 _ngcontent-oko-c372>Subject Chart</h2>
                            </div>
                            <div _ngcontent-oko-c372 className="body">
                              <div _ngcontent-oko-c372 id="chart">
                                <apx-chart _ngcontent-oko-c372 _nghost-oko-c139 className="apex-pie-center">
                                  <div _ngcontent-oko-c139 style={{"min-height":"145.367px"}}>
                                    <div className="apexcharts-canvas apexchartsi7to1xm8 apexcharts-theme-light" id="apexchartsi7to1xm8" style={{"width":"200px","height":"145.367px"}}>
                                      <svg className="apexcharts-svg" height="145.36666666666667" id="SvgjsSvg3361" style={{"background":"transparent"}} transform="translate(0, 0)" version="1.1" width={200} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG3363" transform="translate(29.666666666666657, 0)">
                                          <defs id="SvgjsDefs3362">
                                            <clipPath id="gridRectMaski7to1xm8">
                                              <rect fill="#fff" height="166.66666666666669" id="SvgjsRect3365" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="148.66666666666669" x={-3} y={-1} />
                                            </clipPath>
                                            <clipPath id="forecastMaski7to1xm8" />
                                            <clipPath id="nonForecastMaski7to1xm8" />
                                            <clipPath id="gridRectMarkerMaski7to1xm8">
                                              <rect fill="#fff" height="168.66666666666669" id="SvgjsRect3366" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="146.66666666666669" x={-2} y={-2} />
                                            </clipPath>
                                          </defs>
                                          <g className="apexcharts-pie" id="SvgjsG3367">
                                            <g id="SvgjsG3368" transform="translate(0, 0) scale(1)">
                                              <circle cx="71.33333333333334" cy="71.33333333333334" fill="transparent" id="SvgjsCircle3369" r="41.33577235772359" />
                                              <g className="apexcharts-slices" id="SvgjsG3370">
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={0} id="SvgjsG3371" rel={1} seriesname="Science">
                                                  <path className="apexcharts-pie-area apexcharts-donut-slice-0" d="M 71.33333333333334 7.739837398373979 A 63.593495934959364 63.593495934959364 0 0 1 71.33333333333334 7.739837398373979 L 71.33333333333334 29.99756097560975 A 41.33577235772359 41.33577235772359 0 0 0 71.33333333333334 29.99756097560975 L 71.33333333333334 7.739837398373979 z" data-angle="89.49152542372882" data-pathorig="M 71.33333333333334 7.739837398373979 A 63.593495934959364 63.593495934959364 0 0 1 71.33333333333334 7.739837398373979 L 71.33333333333334 29.99756097560975 A 41.33577235772359 41.33577235772359 0 0 0 71.33333333333334 29.99756097560975 L 71.33333333333334 7.739837398373979 z" data-startangle={0} data-strokewidth={2} data-value={44} fill="rgba(0,143,251,1)" fillOpacity={1} id="SvgjsPath3372" index={0} j={0} strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={1} id="SvgjsG3373" rel={2} seriesname="Mathes">
                                                  <path className="apexcharts-pie-area apexcharts-donut-slice-1" d="M 134.9243250448573 70.7689767310118 A 63.593495934959364 63.593495934959364 0 0 1 134.9243250448573 70.7689767310118 L 112.66747794582392 70.96650154182434 A 41.33577235772359 41.33577235772359 0 0 0 112.66747794582392 70.96650154182434 L 134.9243250448573 70.7689767310118 z" data-angle="111.86440677966102" data-pathorig="M 134.9243250448573 70.7689767310118 A 63.593495934959364 63.593495934959364 0 0 1 134.9243250448573 70.7689767310118 L 112.66747794582392 70.96650154182434 A 41.33577235772359 41.33577235772359 0 0 0 112.66747794582392 70.96650154182434 L 134.9243250448573 70.7689767310118 z" data-startangle="89.49152542372882" data-strokewidth={2} data-value={55} fill="rgba(0,227,150,1)" fillOpacity={1} id="SvgjsPath3374" index={0} j={1} strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={2} id="SvgjsG3375" rel={3} seriesname="Economics">
                                                  <path className="apexcharts-pie-area apexcharts-donut-slice-2" d="M 48.175089271320516 130.56025674822922 A 63.593495934959364 63.593495934959364 0 0 1 48.175089271320516 130.56025674822922 L 56.280474693025006 109.83083355301567 A 41.33577235772359 41.33577235772359 0 0 0 56.280474693025006 109.83083355301567 L 48.175089271320516 130.56025674822922 z" data-angle="26.440677966101703" data-pathorig="M 48.175089271320516 130.56025674822922 A 63.593495934959364 63.593495934959364 0 0 1 48.175089271320516 130.56025674822922 L 56.280474693025006 109.83083355301567 A 41.33577235772359 41.33577235772359 0 0 0 56.280474693025006 109.83083355301567 L 48.175089271320516 130.56025674822922 z" data-startangle="201.35593220338984" data-strokewidth={2} data-value={13} fill="rgba(254,176,25,1)" fillOpacity={1} id="SvgjsPath3376" index={0} j={2} strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={3} id="SvgjsG3377" rel={4} seriesname="History">
                                                  <path className="apexcharts-pie-area apexcharts-donut-slice-3" d="M 24.225506632726358 114.05318104812832 A 63.593495934959364 63.593495934959364 0 0 1 24.225506632726358 114.05318104812832 L 40.7132459779388 99.10123434795008 A 41.33577235772359 41.33577235772359 0 0 0 40.7132459779388 99.10123434795008 L 24.225506632726358 114.05318104812832 z" data-angle="87.4576271186441" data-pathorig="M 24.225506632726358 114.05318104812832 A 63.593495934959364 63.593495934959364 0 0 1 24.225506632726358 114.05318104812832 L 40.7132459779388 99.10123434795008 A 41.33577235772359 41.33577235772359 0 0 0 40.7132459779388 99.10123434795008 L 24.225506632726358 114.05318104812832 z" data-startangle="227.79661016949154" data-strokewidth={2} data-value={43} fill="rgba(255,69,96,1)" fillOpacity={1} id="SvgjsPath3378" index={0} j={3} strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                                </g>
                                                <g className="apexcharts-series apexcharts-pie-series" data-realindex={4} id="SvgjsG3379" rel={5} seriesname="Music">
                                                  <path className="apexcharts-pie-area apexcharts-donut-slice-4" d="M 26.565915963475575 26.166851654297837 A 63.593495934959364 63.593495934959364 0 0 1 26.565915963475575 26.166851654297837 L 42.234512042925786 41.97512024196026 A 41.33577235772359 41.33577235772359 0 0 0 42.234512042925786 41.97512024196026 L 26.565915963475575 26.166851654297837 z" data-angle="44.745762711864415" data-pathorig="M 26.565915963475575 26.166851654297837 A 63.593495934959364 63.593495934959364 0 0 1 26.565915963475575 26.166851654297837 L 42.234512042925786 41.97512024196026 A 41.33577235772359 41.33577235772359 0 0 0 42.234512042925786 41.97512024196026 L 26.565915963475575 26.166851654297837 z" data-startangle="315.25423728813564" data-strokewidth={2} data-value={22} fill="rgba(119,93,208,1)" fillOpacity={1} id="SvgjsPath3380" index={0} j={4} strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                          <line className="apexcharts-ycrosshairs" id="SvgjsLine3381" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="142.66666666666669" y1={0} y2={0} />
                                          <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine3382" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="142.66666666666669" y1={0} y2={0} />
                                        </g>
                                        <g className="apexcharts-annotations" id="SvgjsG3364" />
                                      </svg>
                                      <div className="apexcharts-legend" />
                                      <div className="apexcharts-tooltip apexcharts-theme-dark">
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"1","-ms-flex-order":"1","order":"1"}}>
                                          <span className="apexcharts-tooltip-marker" style={{}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"2","-ms-flex-order":"2","order":"2"}}>
                                          <span className="apexcharts-tooltip-marker" style={{}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"3","-ms-flex-order":"3","order":"3"}}>
                                          <span className="apexcharts-tooltip-marker" style={{"background-color":"rgb(254, 176, 25)"}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"4","-ms-flex-order":"4","order":"4"}}>
                                          <span className="apexcharts-tooltip-marker" style={{}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                                        <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"5","-ms-flex-order":"5","order":"5"}}>
                                          <span className="apexcharts-tooltip-marker" style={{"background-color":"rgb(119, 93, 208)"}}>
                                          </span>
                                          <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial,                                          sans-serif","font-size":"12px"}}>
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
                              <div _ngcontent-oko-c372 className="table-responsive m-t-15">
                                <table _ngcontent-oko-c372 className="table align-items-center">
                                  <tbody _ngcontent-oko-c372>
                                    <tr _ngcontent-oko-c372>
                                      <td _ngcontent-oko-c372>
                                        <i _ngcontent-oko-c372 className="fa fa-circle col-cyan msr-2">
                                        </i>
                                        Music
                                      </td>
                                      <td _ngcontent-oko-c372>23</td>
                                      <td _ngcontent-oko-c372 className="col-green">
                                        +32%
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c372>
                                      <td _ngcontent-oko-c372>
                                        <i _ngcontent-oko-c372 className="fa fa-circle col-blue msr-2">
                                        </i>
                                        Science
                                      </td>
                                      <td _ngcontent-oko-c372>32</td>
                                      <td _ngcontent-oko-c372 className="col-green">
                                        +12%
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c372>
                                      <td _ngcontent-oko-c372>
                                        <i _ngcontent-oko-c372 className="fa fa-circle col-orange msr-2">
                                        </i>
                                        Economics
                                      </td>
                                      <td _ngcontent-oko-c372>12</td>
                                      <td _ngcontent-oko-c372 className="col-orange">
                                        -12%
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c372>
                                      <td _ngcontent-oko-c372>
                                        <i _ngcontent-oko-c372 className="fa fa-circle col-green msr-2">
                                        </i>
                                        Mathes
                                      </td>
                                      <td _ngcontent-oko-c372>32</td>
                                      <td _ngcontent-oko-c372 className="col-green">
                                        +3%
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c372 className="row">
                        <div _ngcontent-oko-c372 className="col-lg-3 col-sm-6">
                          <div _ngcontent-oko-c372 className="info-box7 bg-c-blue order-info-box7">
                            <div _ngcontent-oko-c372 className="info-box7-block">
                              <h6 _ngcontent-oko-c372 className="m-b-20">
                                Orders Received
                              </h6>
                              <h2 _ngcontent-oko-c372 className="text-end">
                                <i _ngcontent-oko-c372 className="fas fa-cart-plus float-start">
                                </i>
                                <span _ngcontent-oko-c372> 358 </span>
                              </h2>
                              <p _ngcontent-oko-c372 className="m-b-0">
                                18% Higher Then Last Month
                              </p>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-lg-3 col-sm-6">
                          <div _ngcontent-oko-c372 className="info-box7 bg-c-green order-info-box7">
                            <div _ngcontent-oko-c372 className="info-box7-block">
                              <h6 _ngcontent-oko-c372 className="m-b-20">
                                Completed Orders
                              </h6>
                              <h2 _ngcontent-oko-c372 className="text-end">
                                <i _ngcontent-oko-c372 className="fas fa-business-time float-start">
                                </i>
                                <span _ngcontent-oko-c372> 865 </span>
                              </h2>
                              <p _ngcontent-oko-c372 className="m-b-0">
                                21% Higher Then Last Month
                              </p>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-lg-3 col-sm-6">
                          <div _ngcontent-oko-c372 className="info-box7 bg-c-yellow order-info-box7">
                            <div _ngcontent-oko-c372 className="info-box7-block">
                              <h6 _ngcontent-oko-c372 className="m-b-20">
                                New Orders
                              </h6>
                              <h2 _ngcontent-oko-c372 className="text-end">
                                <i _ngcontent-oko-c372 className="fas fa-chart-line float-start">
                                </i>
                                <span _ngcontent-oko-c372> 128 </span>
                              </h2>
                              <p _ngcontent-oko-c372 className="m-b-0">
                                37% Higher Then Last Month
                              </p>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-lg-3 col-sm-6">
                          <div _ngcontent-oko-c372 className="info-box7 bg-c-pink order-info-box7">
                            <div _ngcontent-oko-c372 className="info-box7-block">
                              <h6 _ngcontent-oko-c372 className="m-b-20">
                                Total Earning
                              </h6>
                              <h2 _ngcontent-oko-c372 className="text-end">
                                <i _ngcontent-oko-c372 className="fas fa-dollar-sign float-start">
                                </i>
                                <span _ngcontent-oko-c372> $25698 </span>
                              </h2>
                              <p _ngcontent-oko-c372 className="m-b-0">
                                10% Higher Then Last Month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c372 className="row">
                        <div _ngcontent-oko-c372 className="col-12 col-sm-6 col-md-3">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="card-body">
                              <div _ngcontent-oko-c372 className="d-flex justify-content-between">
                                <div _ngcontent-oko-c372>
                                  <h5 _ngcontent-oko-c372>Todays Income</h5>
                                  <p _ngcontent-oko-c372 className="text-muted">
                                    Income For Today
                                  </p>
                                </div>
                                <h3 _ngcontent-oko-c372 className="text-info">$170</h3>
                              </div>
                              <div _ngcontent-oko-c372 className="card-content mt-2">
                                <div _ngcontent-oko-c372 className="progress skill-progress m-b-5 w-100">
                                  <div _ngcontent-oko-c372 aria-valuemax={100} aria-valuemin={0} aria-valuenow={45} className="progress-bar l-bg-purple width-per-45" role="progressbar" />
                                </div>
                              </div>
                              <div _ngcontent-oko-c372 className="d-flex justify-content-between mt-2">
                                <p _ngcontent-oko-c372 className="text-muted mb-0">
                                  Change
                                </p>
                                <p _ngcontent-oko-c372 className="text-muted mb-0">
                                  75%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-12 col-sm-6 col-md-3">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="card-body">
                              <div _ngcontent-oko-c372 className="d-flex justify-content-between">
                                <div _ngcontent-oko-c372>
                                  <h5 _ngcontent-oko-c372>Total Revenue</h5>
                                  <p _ngcontent-oko-c372 className="text-muted">
                                    Total Income
                                  </p>
                                </div>
                                <h3 _ngcontent-oko-c372 className="text-success">
                                  $120
                                </h3>
                              </div>
                              <div _ngcontent-oko-c372 className="card-content mt-2">
                                <div _ngcontent-oko-c372 className="progress skill-progress m-b-5 w-100">
                                  <div _ngcontent-oko-c372 aria-valuemax={100} aria-valuemin={0} aria-valuenow={45} className="progress-bar l-bg-orange width-per-45" role="progressbar" />
                                </div>
                              </div>
                              <div _ngcontent-oko-c372 className="d-flex justify-content-between mt-2">
                                <p _ngcontent-oko-c372 className="text-muted mb-0">
                                  Change
                                </p>
                                <p _ngcontent-oko-c372 className="text-muted mb-0">
                                  25%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-12 col-sm-6 col-md-3">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="card-body">
                              <div _ngcontent-oko-c372 className="d-flex justify-content-between">
                                <div _ngcontent-oko-c372>
                                  <h5 _ngcontent-oko-c372>New Orders</h5>
                                  <p _ngcontent-oko-c372 className="text-muted">
                                    Fresh New Order
                                  </p>
                                </div>
                                <h3 _ngcontent-oko-c372 className="text-danger">15</h3>
                              </div>
                              <div _ngcontent-oko-c372 className="card-content mt-2">
                                <div _ngcontent-oko-c372 className="progress skill-progress m-b-5 w-100">
                                  <div _ngcontent-oko-c372 aria-valuemax={100} aria-valuemin={0} aria-valuenow={45} className="progress-bar l-bg-cyan width-per-45" role="progressbar" />
                                </div>
                              </div>
                              <div _ngcontent-oko-c372 className="d-flex justify-content-between">
                                <p _ngcontent-oko-c372 className="text-muted mb-0">
                                  Change
                                </p>
                                <p _ngcontent-oko-c372 className="text-muted mb-0">
                                  50%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-12 col-sm-6 col-md-3">
                          <div _ngcontent-oko-c372 className="card">
                            <div _ngcontent-oko-c372 className="card-body">
                              <div _ngcontent-oko-c372 className="d-flex justify-content-between">
                                <div _ngcontent-oko-c372>
                                  <h5 _ngcontent-oko-c372>New Users</h5>
                                  <p _ngcontent-oko-c372 className="text-muted">
                                    Joined New User
                                  </p>
                                </div>
                                <h3 _ngcontent-oko-c372 className="text-secondary">
                                  12
                                </h3>
                              </div>
                              <div _ngcontent-oko-c372 className="card-content mt-2">
                                <div _ngcontent-oko-c372 className="progress skill-progress m-b-5 w-100">
                                  <div _ngcontent-oko-c372 aria-valuemax={100} aria-valuemin={0} aria-valuenow={45} className="progress-bar l-bg-red width-per-45" role="progressbar" />
                                </div>
                              </div>
                              <div _ngcontent-oko-c372 className="d-flex justify-content-between mt-2">
                                <p _ngcontent-oko-c372 className="text-muted mb-0">
                                  Change
                                </p>
                                <p _ngcontent-oko-c372 className="text-muted mb-0">
                                  25%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c372 className="row">
                        <div _ngcontent-oko-c372 className="col-lg-3 col-sm-6">
                          <div _ngcontent-oko-c372 className="card card-statistic-2">
                            <div _ngcontent-oko-c372 className="clearfix">
                              <div _ngcontent-oko-c372 className="card-right">
                                <div _ngcontent-oko-c372>
                                  <h5 _ngcontent-oko-c372 className="float-end">
                                    Earning
                                  </h5>
                                </div>
                                <div _ngcontent-oko-c372 className="m-r-10 m-l-10">
                                  <h3 _ngcontent-oko-c372 className="font-weight-bold float-end mb-0">
                                    $20,125
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <apx-chart _ngcontent-oko-c372 _nghost-oko-c139>
                              <div _ngcontent-oko-c139 style={{"min-height":"70px"}}>
                                <div className="apexcharts-canvas apexchartsfsx6zllf apexcharts-theme-light" id="apexchartsfsx6zllf" style={{"width":"221px","height":"70px"}}>
                                  <svg className="apexcharts-svg" height={70} id="SvgjsSvg3383" style={{"background":"transparent"}} transform="translate(0, 0)" version="1.1" width={221} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG3385" transform="translate(0, 0)">
                                      <defs id="SvgjsDefs3384">
                                        <clipPath id="gridRectMaskfsx6zllf">
                                          <rect fill="#fff" height={74} id="SvgjsRect3391" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={229} x={-4} y={-2} />
                                        </clipPath>
                                        <clipPath id="forecastMaskfsx6zllf" />
                                        <clipPath id="nonForecastMaskfsx6zllf" />
                                        <clipPath id="gridRectMarkerMaskfsx6zllf">
                                          <rect fill="#fff" height={74} id="SvgjsRect3392" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={225} x={-2} y={-2} />
                                        </clipPath>
                                        <linearGradient id="SvgjsLinearGradient3397" x1={0} x2={0} y1={0} y2={1}>
                                          <stop id="SvgjsStop3398" offset={0} stopColor="rgba(111,66,193,0.65)" stopOpacity="0.65" />
                                          <stop id="SvgjsStop3399" offset={1} stopColor="rgba(183,161,224,0.5)" stopOpacity="0.5" />
                                          <stop id="SvgjsStop3400" offset={1} stopColor="rgba(183,161,224,0.5)" stopOpacity="0.5" />
                                        </linearGradient>
                                      </defs>
                                      <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height={70} id="SvgjsLine3390" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2={70} />
                                      <g className="apexcharts-grid" id="SvgjsG3403">
                                        <g className="apexcharts-gridlines-horizontal" id="SvgjsG3404" style={{"display":"none"}}>
                                          <line className="apexcharts-gridline" id="SvgjsLine3424" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1="17.5" y2="17.5" />
                                          <line className="apexcharts-gridline" id="SvgjsLine3425" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={35} y2={35} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3426" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1="52.5" y2="52.5" />
                                        </g>
                                        <g className="apexcharts-gridlines-vertical" id="SvgjsG3405" style={{"display":"none"}}>
                                          <line className="apexcharts-gridline" id="SvgjsLine3407" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3408" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="14.733333333333333" x2="14.733333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3409" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="29.466666666666665" x2="29.466666666666665" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3410" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="44.199999999999996" x2="44.199999999999996" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3411" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="58.93333333333333" x2="58.93333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3412" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="73.66666666666666" x2="73.66666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3413" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="88.39999999999999" x2="88.39999999999999" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3414" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="103.13333333333333" x2="103.13333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3415" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="117.86666666666666" x2="117.86666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3416" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="132.6" x2="132.6" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3417" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="147.33333333333331" x2="147.33333333333331" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3418" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="162.06666666666663" x2="162.06666666666663" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3419" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="176.79999999999995" x2="176.79999999999995" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3420" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="191.53333333333327" x2="191.53333333333327" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3421" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="206.2666666666666" x2="206.2666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3422" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="220.99999999999991" x2="220.99999999999991" y1={0} y2={70} />
                                        </g>
                                        <line id="SvgjsLine3429" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={70} y2={70} />
                                        <line id="SvgjsLine3428" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2={70} />
                                      </g>
                                      <g className="apexcharts-grid-borders" id="SvgjsG3406" style={{"display":"none"}}>
                                        <line className="apexcharts-gridline" id="SvgjsLine3423" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={0} y2={0} />
                                        <line className="apexcharts-gridline" id="SvgjsLine3427" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={70} y2={70} />
                                      </g>
                                      <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG3393">
                                        <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG3394" rel={1} seriesname="Appointments">
                                          <path className="apexcharts-area" clipPath="url(#gridRectMaskfsx6zllf)" d="M-1 87.5L-1 87.5L14.733333333333334 87.5L29.46666666666667 87.5L44.2 87.5L58.93333333333334 87.5L73.66666666666667 87.5L88.4 87.5L103.13333333333334 87.5L117.86666666666667 87.5L132.60000000000002 87.5L147.33333333333334 87.5L162.0666666666667 87.5L176.8 87.5L191.53333333333336 87.5L206.26666666666668 87.5L221.00000000000003 87.5 " fill="url(#SvgjsLinearGradient3397)" fillOpacity={1} id="SvgjsPath3401" index={0} pathfrom="M -1 87.5 L -1 87.5 L 14.733333333333334 87.5 L 29.46666666666667 87.5 L 44.2 87.5 L 58.93333333333334 87.5 L 73.66666666666667 87.5 L 88.4 87.5 L 103.13333333333334 87.5 L 117.86666666666667 87.5 L 132.60000000000002 87.5 L 147.33333333333334 87.5 L 162.0666666666667 87.5 L 176.8 87.5 L 191.53333333333336 87.5 L 206.26666666666668 87.5 L 221.00000000000003 87.5" pathto="M 0 70 L 0 43.75C 5.156666666666666 43.75 9.576666666666668 34.125 14.733333333333334 34.125C 19.89 34.125 24.310000000000002 17.5 29.46666666666667 17.5C 34.623333333333335 17.5 39.04333333333334 43.75 44.2 43.75C 49.35666666666667 43.75 53.77666666666667 24.5 58.93333333333334 24.5C 64.09 24.5 68.51 42 73.66666666666667 42C 78.82333333333334 42 83.24333333333334 35 88.4 35C 93.55666666666667 35 97.97666666666667 51.625 103.13333333333334 51.625C 108.29 51.625 112.71000000000001 61.25 117.86666666666667 61.25C 123.02333333333334 61.25 127.44333333333336 48.125 132.60000000000002 48.125C 137.7566666666667 48.125 142.17666666666668 26.25 147.33333333333334 26.25C 152.49 26.25 156.91000000000003 52.5 162.0666666666667 52.5C 167.22333333333336 52.5 171.64333333333335 6.125 176.8 6.125C 181.95666666666668 6.125 186.3766666666667 32.375 191.53333333333336 32.375C 196.69000000000003 32.375 201.11 43.75 206.26666666666668 43.75C 211.42333333333335 43.75 215.84333333333336 33.25 221.00000000000003 33.25C 221.00000000000003 33.25 221.00000000000003 33.25 221.00000000000003 70M 221.00000000000003 33.25z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                          <path className="apexcharts-area" clipPath="url(#gridRectMaskfsx6zllf)" d="M-1 87.5L-1 87.5L14.733333333333334 87.5L29.46666666666667 87.5L44.2 87.5L58.93333333333334 87.5L73.66666666666667 87.5L88.4 87.5L103.13333333333334 87.5L117.86666666666667 87.5L132.60000000000002 87.5L147.33333333333334 87.5L162.0666666666667 87.5L176.8 87.5L191.53333333333336 87.5L206.26666666666668 87.5L221.00000000000003 87.5 " fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath3402" index={0} pathfrom="M -1 87.5 L -1 87.5 L 14.733333333333334 87.5 L 29.46666666666667 87.5 L 44.2 87.5 L 58.93333333333334 87.5 L 73.66666666666667 87.5 L 88.4 87.5 L 103.13333333333334 87.5 L 117.86666666666667 87.5 L 132.60000000000002 87.5 L 147.33333333333334 87.5 L 162.0666666666667 87.5 L 176.8 87.5 L 191.53333333333336 87.5 L 206.26666666666668 87.5 L 221.00000000000003 87.5" pathto="M 0 43.75C 5.156666666666666 43.75 9.576666666666668 34.125 14.733333333333334 34.125C 19.89 34.125 24.310000000000002 17.5 29.46666666666667 17.5C 34.623333333333335 17.5 39.04333333333334 43.75 44.2 43.75C 49.35666666666667 43.75 53.77666666666667 24.5 58.93333333333334 24.5C 64.09 24.5 68.51 42 73.66666666666667 42C 78.82333333333334 42 83.24333333333334 35 88.4 35C 93.55666666666667 35 97.97666666666667 51.625 103.13333333333334 51.625C 108.29 51.625 112.71000000000001 61.25 117.86666666666667 61.25C 123.02333333333334 61.25 127.44333333333336 48.125 132.60000000000002 48.125C 137.7566666666667 48.125 142.17666666666668 26.25 147.33333333333334 26.25C 152.49 26.25 156.91000000000003 52.5 162.0666666666667 52.5C 167.22333333333336 52.5 171.64333333333335 6.125 176.8 6.125C 181.95666666666668 6.125 186.3766666666667 32.375 191.53333333333336 32.375C 196.69000000000003 32.375 201.11 43.75 206.26666666666668 43.75C 211.42333333333335 43.75 215.84333333333336 33.25 221.00000000000003 33.25" stroke="#6f42c1" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                          <g className="apexcharts-series-markers-wrap apexcharts-element-hidden" data-realindex={0} id="SvgjsG3395">
                                            <g className="apexcharts-series-markers">
                                              <circle className="apexcharts-marker w9gpayvts no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#6f42c1" fillOpacity={1} id="SvgjsCircle3454" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                            </g>
                                          </g>
                                        </g>
                                        <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG3396" />
                                      </g>
                                      <line className="apexcharts-ycrosshairs" id="SvgjsLine3430" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={221} y1={0} y2={0} />
                                      <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine3431" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={221} y1={0} y2={0} />
                                      <g className="apexcharts-yaxis-annotations apexcharts-element-hidden" id="SvgjsG3432" />
                                      <g className="apexcharts-xaxis-annotations apexcharts-element-hidden" id="SvgjsG3433" />
                                      <g className="apexcharts-point-annotations apexcharts-element-hidden" id="SvgjsG3434" />
                                      <g className="apexcharts-xaxis" id="SvgjsG3435" transform="translate(0, 0)">
                                        <g className="apexcharts-xaxis-texts-g" id="SvgjsG3436" transform="translate(0, 4)" />
                                      </g>
                                    </g>
                                    <g className="apexcharts-annotations" id="SvgjsG3386" />
                                    <g className="apexcharts-yaxis" id="SvgjsG3453" rel={0} transform="translate(-18, 0)" />
                                    <rect fill="#fefefe" height={0} id="SvgjsRect3389" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                  </svg>
                                  <div className="apexcharts-legend" style={{"max-height":"35px"}} />
                                  <div className="apexcharts-tooltip apexcharts-theme-dark">
                                    <div className="apexcharts-tooltip-title" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}} />
                                    <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"1","-ms-flex-order":"1","order":"1"}}>
                                      <span className="apexcharts-tooltip-marker" style={{}}>
                                      </span>
                                      <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}}>
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
                                </div>
                              </div>
                            </apx-chart>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-lg-3 col-sm-6">
                          <div _ngcontent-oko-c372 className="card card-statistic-2">
                            <div _ngcontent-oko-c372 className="clearfix">
                              <div _ngcontent-oko-c372 className="card-right">
                                <div _ngcontent-oko-c372>
                                  <h5 _ngcontent-oko-c372 className="float-end">
                                    New Clients
                                  </h5>
                                </div>
                                <div _ngcontent-oko-c372 className="m-r-10 m-l-10">
                                  <h3 _ngcontent-oko-c372 className="font-weight-bold float-end mb-0">
                                    129
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <apx-chart _ngcontent-oko-c372 _nghost-oko-c139>
                              <div _ngcontent-oko-c139 style={{"min-height":"70px"}}>
                                <div className="apexcharts-canvas apexchartsvpb3cubih apexcharts-theme-light" id="apexchartsvpb3cubih" style={{"width":"221px","height":"70px"}}>
                                  <svg className="apexcharts-svg" height={70} id="SvgjsSvg3455" style={{"background":"transparent"}} transform="translate(0, 0)" version="1.1" width={221} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG3457" transform="translate(0, 0)">
                                      <defs id="SvgjsDefs3456">
                                        <clipPath id="gridRectMaskvpb3cubih">
                                          <rect fill="#fff" height={74} id="SvgjsRect3463" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={229} x={-4} y={-2} />
                                        </clipPath>
                                        <clipPath id="forecastMaskvpb3cubih" />
                                        <clipPath id="nonForecastMaskvpb3cubih" />
                                        <clipPath id="gridRectMarkerMaskvpb3cubih">
                                          <rect fill="#fff" height={74} id="SvgjsRect3464" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={225} x={-2} y={-2} />
                                        </clipPath>
                                        <linearGradient id="SvgjsLinearGradient3469" x1={0} x2={0} y1={0} y2={1}>
                                          <stop id="SvgjsStop3470" offset={0} stopColor="rgba(253,126,20,0.65)" stopOpacity="0.65" />
                                          <stop id="SvgjsStop3471" offset={1} stopColor="rgba(254,191,138,0.5)" stopOpacity="0.5" />
                                          <stop id="SvgjsStop3472" offset={1} stopColor="rgba(254,191,138,0.5)" stopOpacity="0.5" />
                                        </linearGradient>
                                      </defs>
                                      <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height={70} id="SvgjsLine3462" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2={70} />
                                      <g className="apexcharts-grid" id="SvgjsG3475">
                                        <g className="apexcharts-gridlines-horizontal" id="SvgjsG3476" style={{"display":"none"}}>
                                          <line className="apexcharts-gridline" id="SvgjsLine3496" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1="17.5" y2="17.5" />
                                          <line className="apexcharts-gridline" id="SvgjsLine3497" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={35} y2={35} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3498" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1="52.5" y2="52.5" />
                                        </g>
                                        <g className="apexcharts-gridlines-vertical" id="SvgjsG3477" style={{"display":"none"}}>
                                          <line className="apexcharts-gridline" id="SvgjsLine3479" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3480" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="14.733333333333333" x2="14.733333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3481" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="29.466666666666665" x2="29.466666666666665" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3482" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="44.199999999999996" x2="44.199999999999996" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3483" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="58.93333333333333" x2="58.93333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3484" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="73.66666666666666" x2="73.66666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3485" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="88.39999999999999" x2="88.39999999999999" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3486" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="103.13333333333333" x2="103.13333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3487" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="117.86666666666666" x2="117.86666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3488" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="132.6" x2="132.6" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3489" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="147.33333333333331" x2="147.33333333333331" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3490" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="162.06666666666663" x2="162.06666666666663" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3491" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="176.79999999999995" x2="176.79999999999995" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3492" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="191.53333333333327" x2="191.53333333333327" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3493" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="206.2666666666666" x2="206.2666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3494" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="220.99999999999991" x2="220.99999999999991" y1={0} y2={70} />
                                        </g>
                                        <line id="SvgjsLine3501" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={70} y2={70} />
                                        <line id="SvgjsLine3500" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2={70} />
                                      </g>
                                      <g className="apexcharts-grid-borders" id="SvgjsG3478" style={{"display":"none"}}>
                                        <line className="apexcharts-gridline" id="SvgjsLine3495" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={0} y2={0} />
                                        <line className="apexcharts-gridline" id="SvgjsLine3499" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={70} y2={70} />
                                      </g>
                                      <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG3465">
                                        <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG3466" rel={1} seriesname="Operations">
                                          <path className="apexcharts-area" clipPath="url(#gridRectMaskvpb3cubih)" d="M-1 87.5L-1 87.5L14.733333333333334 87.5L29.46666666666667 87.5L44.2 87.5L58.93333333333334 87.5L73.66666666666667 87.5L88.4 87.5L103.13333333333334 87.5L117.86666666666667 87.5L132.60000000000002 87.5L147.33333333333334 87.5L162.0666666666667 87.5L176.8 87.5L191.53333333333336 87.5L206.26666666666668 87.5L221.00000000000003 87.5 " fill="url(#SvgjsLinearGradient3469)" fillOpacity={1} id="SvgjsPath3473" index={0} pathfrom="M -1 87.5 L -1 87.5 L 14.733333333333334 87.5 L 29.46666666666667 87.5 L 44.2 87.5 L 58.93333333333334 87.5 L 73.66666666666667 87.5 L 88.4 87.5 L 103.13333333333334 87.5 L 117.86666666666667 87.5 L 132.60000000000002 87.5 L 147.33333333333334 87.5 L 162.0666666666667 87.5 L 176.8 87.5 L 191.53333333333336 87.5 L 206.26666666666668 87.5 L 221.00000000000003 87.5" pathto="M 0 70 L 0 43.75C 5.156666666666666 43.75 9.576666666666668 35 14.733333333333334 35C 19.89 35 24.310000000000002 17.5 29.46666666666667 17.5C 34.623333333333335 17.5 39.04333333333334 43.75 44.2 43.75C 49.35666666666667 43.75 53.77666666666667 26.25 58.93333333333334 26.25C 64.09 26.25 68.51 43.75 73.66666666666667 43.75C 78.82333333333334 43.75 83.24333333333334 35 88.4 35C 93.55666666666667 35 97.97666666666667 52.5 103.13333333333334 52.5C 108.29 52.5 112.71000000000001 61.25 117.86666666666667 61.25C 123.02333333333334 61.25 127.44333333333336 52.5 132.60000000000002 52.5C 137.7566666666667 52.5 142.17666666666668 26.25 147.33333333333334 26.25C 152.49 26.25 156.91000000000003 52.5 162.0666666666667 52.5C 167.22333333333336 52.5 171.64333333333335 8.75 176.8 8.75C 181.95666666666668 8.75 186.3766666666667 35 191.53333333333336 35C 196.69000000000003 35 201.11 43.75 206.26666666666668 43.75C 211.42333333333335 43.75 215.84333333333336 35 221.00000000000003 35C 221.00000000000003 35 221.00000000000003 35 221.00000000000003 70M 221.00000000000003 35z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                          <path className="apexcharts-area" clipPath="url(#gridRectMaskvpb3cubih)" d="M-1 87.5L-1 87.5L14.733333333333334 87.5L29.46666666666667 87.5L44.2 87.5L58.93333333333334 87.5L73.66666666666667 87.5L88.4 87.5L103.13333333333334 87.5L117.86666666666667 87.5L132.60000000000002 87.5L147.33333333333334 87.5L162.0666666666667 87.5L176.8 87.5L191.53333333333336 87.5L206.26666666666668 87.5L221.00000000000003 87.5 " fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath3474" index={0} pathfrom="M -1 87.5 L -1 87.5 L 14.733333333333334 87.5 L 29.46666666666667 87.5 L 44.2 87.5 L 58.93333333333334 87.5 L 73.66666666666667 87.5 L 88.4 87.5 L 103.13333333333334 87.5 L 117.86666666666667 87.5 L 132.60000000000002 87.5 L 147.33333333333334 87.5 L 162.0666666666667 87.5 L 176.8 87.5 L 191.53333333333336 87.5 L 206.26666666666668 87.5 L 221.00000000000003 87.5" pathto="M 0 43.75C 5.156666666666666 43.75 9.576666666666668 35 14.733333333333334 35C 19.89 35 24.310000000000002 17.5 29.46666666666667 17.5C 34.623333333333335 17.5 39.04333333333334 43.75 44.2 43.75C 49.35666666666667 43.75 53.77666666666667 26.25 58.93333333333334 26.25C 64.09 26.25 68.51 43.75 73.66666666666667 43.75C 78.82333333333334 43.75 83.24333333333334 35 88.4 35C 93.55666666666667 35 97.97666666666667 52.5 103.13333333333334 52.5C 108.29 52.5 112.71000000000001 61.25 117.86666666666667 61.25C 123.02333333333334 61.25 127.44333333333336 52.5 132.60000000000002 52.5C 137.7566666666667 52.5 142.17666666666668 26.25 147.33333333333334 26.25C 152.49 26.25 156.91000000000003 52.5 162.0666666666667 52.5C 167.22333333333336 52.5 171.64333333333335 8.75 176.8 8.75C 181.95666666666668 8.75 186.3766666666667 35 191.53333333333336 35C 196.69000000000003 35 201.11 43.75 206.26666666666668 43.75C 211.42333333333335 43.75 215.84333333333336 35 221.00000000000003 35" stroke="#fd7e14" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                          <g className="apexcharts-series-markers-wrap apexcharts-element-hidden" data-realindex={0} id="SvgjsG3467">
                                            <g className="apexcharts-series-markers">
                                              <circle className="apexcharts-marker wd0i4h8wc no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#fd7e14" fillOpacity={1} id="SvgjsCircle3526" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                            </g>
                                          </g>
                                        </g>
                                        <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG3468" />
                                      </g>
                                      <line className="apexcharts-ycrosshairs" id="SvgjsLine3502" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={221} y1={0} y2={0} />
                                      <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine3503" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={221} y1={0} y2={0} />
                                      <g className="apexcharts-yaxis-annotations apexcharts-element-hidden" id="SvgjsG3504" />
                                      <g className="apexcharts-xaxis-annotations apexcharts-element-hidden" id="SvgjsG3505" />
                                      <g className="apexcharts-point-annotations apexcharts-element-hidden" id="SvgjsG3506" />
                                      <g className="apexcharts-xaxis" id="SvgjsG3507" transform="translate(0, 0)">
                                        <g className="apexcharts-xaxis-texts-g" id="SvgjsG3508" transform="translate(0, 4)" />
                                      </g>
                                    </g>
                                    <g className="apexcharts-annotations" id="SvgjsG3458" />
                                    <g className="apexcharts-yaxis" id="SvgjsG3525" rel={0} transform="translate(-18, 0)" />
                                    <rect fill="#fefefe" height={0} id="SvgjsRect3461" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                  </svg>
                                  <div className="apexcharts-legend" style={{"max-height":"35px"}} />
                                  <div className="apexcharts-tooltip apexcharts-theme-dark">
                                    <div className="apexcharts-tooltip-title" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}} />
                                    <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"1","-ms-flex-order":"1","order":"1"}}>
                                      <span className="apexcharts-tooltip-marker" style={{}}>
                                      </span>
                                      <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}}>
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
                                </div>
                              </div>
                            </apx-chart>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-lg-3 col-sm-6">
                          <div _ngcontent-oko-c372 className="card card-statistic-2">
                            <div _ngcontent-oko-c372 className="clearfix">
                              <div _ngcontent-oko-c372 className="card-right">
                                <div _ngcontent-oko-c372>
                                  <h5 _ngcontent-oko-c372 className="float-end">
                                    Projects
                                  </h5>
                                </div>
                                <div _ngcontent-oko-c372 className="m-r-10 m-l-10">
                                  <h3 _ngcontent-oko-c372 className="font-weight-bold float-end mb-0">
                                    154
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <apx-chart _ngcontent-oko-c372 _nghost-oko-c139>
                              <div _ngcontent-oko-c139 style={{"min-height":"70px"}}>
                                <div className="apexcharts-canvas apexchartstyopc5tfk apexcharts-theme-light" id="apexchartstyopc5tfk" style={{"width":"221px","height":"70px"}}>
                                  <svg className="apexcharts-svg" height={70} id="SvgjsSvg3527" style={{"background":"transparent"}} transform="translate(0, 0)" version="1.1" width={221} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG3529" transform="translate(0, 0)">
                                      <defs id="SvgjsDefs3528">
                                        <clipPath id="gridRectMasktyopc5tfk">
                                          <rect fill="#fff" height={74} id="SvgjsRect3535" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={229} x={-4} y={-2} />
                                        </clipPath>
                                        <clipPath id="forecastMasktyopc5tfk" />
                                        <clipPath id="nonForecastMasktyopc5tfk" />
                                        <clipPath id="gridRectMarkerMasktyopc5tfk">
                                          <rect fill="#fff" height={74} id="SvgjsRect3536" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={225} x={-2} y={-2} />
                                        </clipPath>
                                        <linearGradient id="SvgjsLinearGradient3541" x1={0} x2={0} y1={0} y2={1}>
                                          <stop id="SvgjsStop3542" offset={0} stopColor="rgba(76,175,80,0.65)" stopOpacity="0.65" />
                                          <stop id="SvgjsStop3543" offset={1} stopColor="rgba(166,215,168,0.5)" stopOpacity="0.5" />
                                          <stop id="SvgjsStop3544" offset={1} stopColor="rgba(166,215,168,0.5)" stopOpacity="0.5" />
                                        </linearGradient>
                                      </defs>
                                      <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height={70} id="SvgjsLine3534" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2={70} />
                                      <g className="apexcharts-grid" id="SvgjsG3547">
                                        <g className="apexcharts-gridlines-horizontal" id="SvgjsG3548" style={{"display":"none"}}>
                                          <line className="apexcharts-gridline" id="SvgjsLine3568" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1="17.5" y2="17.5" />
                                          <line className="apexcharts-gridline" id="SvgjsLine3569" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={35} y2={35} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3570" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1="52.5" y2="52.5" />
                                        </g>
                                        <g className="apexcharts-gridlines-vertical" id="SvgjsG3549" style={{"display":"none"}}>
                                          <line className="apexcharts-gridline" id="SvgjsLine3551" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3552" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="14.733333333333333" x2="14.733333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3553" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="29.466666666666665" x2="29.466666666666665" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3554" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="44.199999999999996" x2="44.199999999999996" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3555" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="58.93333333333333" x2="58.93333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3556" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="73.66666666666666" x2="73.66666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3557" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="88.39999999999999" x2="88.39999999999999" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3558" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="103.13333333333333" x2="103.13333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3559" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="117.86666666666666" x2="117.86666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3560" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="132.6" x2="132.6" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3561" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="147.33333333333331" x2="147.33333333333331" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3562" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="162.06666666666663" x2="162.06666666666663" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3563" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="176.79999999999995" x2="176.79999999999995" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3564" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="191.53333333333327" x2="191.53333333333327" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3565" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="206.2666666666666" x2="206.2666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3566" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="220.99999999999991" x2="220.99999999999991" y1={0} y2={70} />
                                        </g>
                                        <line id="SvgjsLine3573" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={70} y2={70} />
                                        <line id="SvgjsLine3572" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2={70} />
                                      </g>
                                      <g className="apexcharts-grid-borders" id="SvgjsG3550" style={{"display":"none"}}>
                                        <line className="apexcharts-gridline" id="SvgjsLine3567" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={0} y2={0} />
                                        <line className="apexcharts-gridline" id="SvgjsLine3571" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={70} y2={70} />
                                      </g>
                                      <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG3537">
                                        <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG3538" rel={1} seriesname="NewxPatients">
                                          <path className="apexcharts-area" clipPath="url(#gridRectMasktyopc5tfk)" d="M-1 87.5L-1 87.5L14.733333333333334 87.5L29.46666666666667 87.5L44.2 87.5L58.93333333333334 87.5L73.66666666666667 87.5L88.4 87.5L103.13333333333334 87.5L117.86666666666667 87.5L132.60000000000002 87.5L147.33333333333334 87.5L162.0666666666667 87.5L176.8 87.5L191.53333333333336 87.5L206.26666666666668 87.5L221.00000000000003 87.5 " fill="url(#SvgjsLinearGradient3541)" fillOpacity={1} id="SvgjsPath3545" index={0} pathfrom="M -1 87.5 L -1 87.5 L 14.733333333333334 87.5 L 29.46666666666667 87.5 L 44.2 87.5 L 58.93333333333334 87.5 L 73.66666666666667 87.5 L 88.4 87.5 L 103.13333333333334 87.5 L 117.86666666666667 87.5 L 132.60000000000002 87.5 L 147.33333333333334 87.5 L 162.0666666666667 87.5 L 176.8 87.5 L 191.53333333333336 87.5 L 206.26666666666668 87.5 L 221.00000000000003 87.5" pathto="M 0 70 L 0 43.75C 5.156666666666666 43.75 9.576666666666668 34.125 14.733333333333334 34.125C 19.89 34.125 24.310000000000002 17.5 29.46666666666667 17.5C 34.623333333333335 17.5 39.04333333333334 43.75 44.2 43.75C 49.35666666666667 43.75 53.77666666666667 24.5 58.93333333333334 24.5C 64.09 24.5 68.51 42 73.66666666666667 42C 78.82333333333334 42 83.24333333333334 35 88.4 35C 93.55666666666667 35 97.97666666666667 51.625 103.13333333333334 51.625C 108.29 51.625 112.71000000000001 61.25 117.86666666666667 61.25C 123.02333333333334 61.25 127.44333333333336 48.125 132.60000000000002 48.125C 137.7566666666667 48.125 142.17666666666668 26.25 147.33333333333334 26.25C 152.49 26.25 156.91000000000003 52.5 162.0666666666667 52.5C 167.22333333333336 52.5 171.64333333333335 6.125 176.8 6.125C 181.95666666666668 6.125 186.3766666666667 32.375 191.53333333333336 32.375C 196.69000000000003 32.375 201.11 43.75 206.26666666666668 43.75C 211.42333333333335 43.75 215.84333333333336 33.25 221.00000000000003 33.25C 221.00000000000003 33.25 221.00000000000003 33.25 221.00000000000003 70M 221.00000000000003 33.25z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                          <path className="apexcharts-area" clipPath="url(#gridRectMasktyopc5tfk)" d="M-1 87.5L-1 87.5L14.733333333333334 87.5L29.46666666666667 87.5L44.2 87.5L58.93333333333334 87.5L73.66666666666667 87.5L88.4 87.5L103.13333333333334 87.5L117.86666666666667 87.5L132.60000000000002 87.5L147.33333333333334 87.5L162.0666666666667 87.5L176.8 87.5L191.53333333333336 87.5L206.26666666666668 87.5L221.00000000000003 87.5 " fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath3546" index={0} pathfrom="M -1 87.5 L -1 87.5 L 14.733333333333334 87.5 L 29.46666666666667 87.5 L 44.2 87.5 L 58.93333333333334 87.5 L 73.66666666666667 87.5 L 88.4 87.5 L 103.13333333333334 87.5 L 117.86666666666667 87.5 L 132.60000000000002 87.5 L 147.33333333333334 87.5 L 162.0666666666667 87.5 L 176.8 87.5 L 191.53333333333336 87.5 L 206.26666666666668 87.5 L 221.00000000000003 87.5" pathto="M 0 43.75C 5.156666666666666 43.75 9.576666666666668 34.125 14.733333333333334 34.125C 19.89 34.125 24.310000000000002 17.5 29.46666666666667 17.5C 34.623333333333335 17.5 39.04333333333334 43.75 44.2 43.75C 49.35666666666667 43.75 53.77666666666667 24.5 58.93333333333334 24.5C 64.09 24.5 68.51 42 73.66666666666667 42C 78.82333333333334 42 83.24333333333334 35 88.4 35C 93.55666666666667 35 97.97666666666667 51.625 103.13333333333334 51.625C 108.29 51.625 112.71000000000001 61.25 117.86666666666667 61.25C 123.02333333333334 61.25 127.44333333333336 48.125 132.60000000000002 48.125C 137.7566666666667 48.125 142.17666666666668 26.25 147.33333333333334 26.25C 152.49 26.25 156.91000000000003 52.5 162.0666666666667 52.5C 167.22333333333336 52.5 171.64333333333335 6.125 176.8 6.125C 181.95666666666668 6.125 186.3766666666667 32.375 191.53333333333336 32.375C 196.69000000000003 32.375 201.11 43.75 206.26666666666668 43.75C 211.42333333333335 43.75 215.84333333333336 33.25 221.00000000000003 33.25" stroke="#4caf50" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                          <g className="apexcharts-series-markers-wrap apexcharts-element-hidden" data-realindex={0} id="SvgjsG3539">
                                            <g className="apexcharts-series-markers">
                                              <circle className="apexcharts-marker wd9cdymyo no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#4caf50" fillOpacity={1} id="SvgjsCircle3598" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                            </g>
                                          </g>
                                        </g>
                                        <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG3540" />
                                      </g>
                                      <line className="apexcharts-ycrosshairs" id="SvgjsLine3574" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={221} y1={0} y2={0} />
                                      <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine3575" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={221} y1={0} y2={0} />
                                      <g className="apexcharts-yaxis-annotations apexcharts-element-hidden" id="SvgjsG3576" />
                                      <g className="apexcharts-xaxis-annotations apexcharts-element-hidden" id="SvgjsG3577" />
                                      <g className="apexcharts-point-annotations apexcharts-element-hidden" id="SvgjsG3578" />
                                      <g className="apexcharts-xaxis" id="SvgjsG3579" transform="translate(0, 0)">
                                        <g className="apexcharts-xaxis-texts-g" id="SvgjsG3580" transform="translate(0, 4)" />
                                      </g>
                                    </g>
                                    <g className="apexcharts-annotations" id="SvgjsG3530" />
                                    <g className="apexcharts-yaxis" id="SvgjsG3597" rel={0} transform="translate(-18, 0)" />
                                    <rect fill="#fefefe" height={0} id="SvgjsRect3533" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                  </svg>
                                  <div className="apexcharts-legend" style={{"max-height":"35px"}} />
                                  <div className="apexcharts-tooltip apexcharts-theme-dark">
                                    <div className="apexcharts-tooltip-title" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}} />
                                    <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"1","-ms-flex-order":"1","order":"1"}}>
                                      <span className="apexcharts-tooltip-marker" style={{}}>
                                      </span>
                                      <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}}>
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
                                </div>
                              </div>
                            </apx-chart>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-lg-3 col-sm-6">
                          <div _ngcontent-oko-c372 className="card card-statistic-2">
                            <div _ngcontent-oko-c372 className="clearfix">
                              <div _ngcontent-oko-c372 className="card-right">
                                <div _ngcontent-oko-c372>
                                  <h5 _ngcontent-oko-c372 className="float-end">
                                    Employees
                                  </h5>
                                </div>
                                <div _ngcontent-oko-c372 className="m-r-10 m-l-10">
                                  <h3 _ngcontent-oko-c372 className="font-weight-bold float-end mb-0">
                                    650
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <apx-chart _ngcontent-oko-c372 _nghost-oko-c139>
                              <div _ngcontent-oko-c139 style={{"min-height":"70px"}}>
                                <div className="apexcharts-canvas apexcharts6yqdk0uo apexcharts-theme-light" id="apexcharts6yqdk0uo" style={{"width":"221px","height":"70px"}}>
                                  <svg className="apexcharts-svg" height={70} id="SvgjsSvg3599" style={{"background":"transparent"}} transform="translate(0, 0)" version="1.1" width={221} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG3601" transform="translate(0, 0)">
                                      <defs id="SvgjsDefs3600">
                                        <clipPath id="gridRectMask6yqdk0uo">
                                          <rect fill="#fff" height={74} id="SvgjsRect3607" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={229} x={-4} y={-2} />
                                        </clipPath>
                                        <clipPath id="forecastMask6yqdk0uo" />
                                        <clipPath id="nonForecastMask6yqdk0uo" />
                                        <clipPath id="gridRectMarkerMask6yqdk0uo">
                                          <rect fill="#fff" height={74} id="SvgjsRect3608" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={225} x={-2} y={-2} />
                                        </clipPath>
                                        <linearGradient id="SvgjsLinearGradient3613" x1={0} x2={0} y1={0} y2={1}>
                                          <stop id="SvgjsStop3614" offset={0} stopColor="rgba(33,150,243,0.65)" stopOpacity="0.65" />
                                          <stop id="SvgjsStop3615" offset={1} stopColor="rgba(144,203,249,0.5)" stopOpacity="0.5" />
                                          <stop id="SvgjsStop3616" offset={1} stopColor="rgba(144,203,249,0.5)" stopOpacity="0.5" />
                                        </linearGradient>
                                      </defs>
                                      <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height={70} id="SvgjsLine3606" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2={70} />
                                      <g className="apexcharts-grid" id="SvgjsG3619">
                                        <g className="apexcharts-gridlines-horizontal" id="SvgjsG3620" style={{"display":"none"}}>
                                          <line className="apexcharts-gridline" id="SvgjsLine3640" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1="17.5" y2="17.5" />
                                          <line className="apexcharts-gridline" id="SvgjsLine3641" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={35} y2={35} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3642" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1="52.5" y2="52.5" />
                                        </g>
                                        <g className="apexcharts-gridlines-vertical" id="SvgjsG3621" style={{"display":"none"}}>
                                          <line className="apexcharts-gridline" id="SvgjsLine3623" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3624" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="14.733333333333333" x2="14.733333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3625" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="29.466666666666665" x2="29.466666666666665" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3626" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="44.199999999999996" x2="44.199999999999996" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3627" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="58.93333333333333" x2="58.93333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3628" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="73.66666666666666" x2="73.66666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3629" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="88.39999999999999" x2="88.39999999999999" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3630" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="103.13333333333333" x2="103.13333333333333" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3631" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="117.86666666666666" x2="117.86666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3632" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="132.6" x2="132.6" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3633" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="147.33333333333331" x2="147.33333333333331" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3634" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="162.06666666666663" x2="162.06666666666663" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3635" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="176.79999999999995" x2="176.79999999999995" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3636" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="191.53333333333327" x2="191.53333333333327" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3637" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="206.2666666666666" x2="206.2666666666666" y1={0} y2={70} />
                                          <line className="apexcharts-gridline" id="SvgjsLine3638" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="220.99999999999991" x2="220.99999999999991" y1={0} y2={70} />
                                        </g>
                                        <line id="SvgjsLine3645" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={70} y2={70} />
                                        <line id="SvgjsLine3644" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2={70} />
                                      </g>
                                      <g className="apexcharts-grid-borders" id="SvgjsG3622" style={{"display":"none"}}>
                                        <line className="apexcharts-gridline" id="SvgjsLine3639" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={0} y2={0} />
                                        <line className="apexcharts-gridline" id="SvgjsLine3643" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={221} y1={70} y2={70} />
                                      </g>
                                      <g className="apexcharts-area-series apexcharts-plot-series" id="SvgjsG3609">
                                        <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG3610" rel={1} seriesname="Earning">
                                          <path className="apexcharts-area" clipPath="url(#gridRectMask6yqdk0uo)" d="M-1 175L-1 175L14.733333333333334 175L29.46666666666667 175L44.2 175L58.93333333333334 175L73.66666666666667 175L88.4 175L103.13333333333334 175L117.86666666666667 175L132.60000000000002 175L147.33333333333334 175L162.0666666666667 175L176.8 175L191.53333333333336 175L206.26666666666668 175L221.00000000000003 175 " fill="url(#SvgjsLinearGradient3613)" fillOpacity={1} id="SvgjsPath3617" index={0} pathfrom="M -1 175 L -1 175 L 14.733333333333334 175 L 29.46666666666667 175 L 44.2 175 L 58.93333333333334 175 L 73.66666666666667 175 L 88.4 175 L 103.13333333333334 175 L 117.86666666666667 175 L 132.60000000000002 175 L 147.33333333333334 175 L 162.0666666666667 175 L 176.8 175 L 191.53333333333336 175 L 206.26666666666668 175 L 221.00000000000003 175" pathto="M 0 70 L 0 43.75C 5.156666666666666 43.75 9.576666666666668 34.125 14.733333333333334 34.125C 19.89 34.125 24.310000000000002 17.5 29.46666666666667 17.5C 34.623333333333335 17.5 39.04333333333334 43.75 44.2 43.75C 49.35666666666667 43.75 53.77666666666667 24.5 58.93333333333334 24.5C 64.09 24.5 68.51 42 73.66666666666667 42C 78.82333333333334 42 83.24333333333334 35 88.4 35C 93.55666666666667 35 97.97666666666667 51.625 103.13333333333334 51.625C 108.29 51.625 112.71000000000001 61.25 117.86666666666667 61.25C 123.02333333333334 61.25 127.44333333333336 48.125 132.60000000000002 48.125C 137.7566666666667 48.125 142.17666666666668 26.25 147.33333333333334 26.25C 152.49 26.25 156.91000000000003 52.5 162.0666666666667 52.5C 167.22333333333336 52.5 171.64333333333335 6.125 176.8 6.125C 181.95666666666668 6.125 186.3766666666667 32.375 191.53333333333336 32.375C 196.69000000000003 32.375 201.11 43.75 206.26666666666668 43.75C 211.42333333333335 43.75 215.84333333333336 33.25 221.00000000000003 33.25C 221.00000000000003 33.25 221.00000000000003 33.25 221.00000000000003 70M 221.00000000000003 33.25z" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={0} />
                                          <path className="apexcharts-area" clipPath="url(#gridRectMask6yqdk0uo)" d="M-1 175L-1 175L14.733333333333334 175L29.46666666666667 175L44.2 175L58.93333333333334 175L73.66666666666667 175L88.4 175L103.13333333333334 175L117.86666666666667 175L132.60000000000002 175L147.33333333333334 175L162.0666666666667 175L176.8 175L191.53333333333336 175L206.26666666666668 175L221.00000000000003 175 " fill="none" fillOpacity={1} fillRule="evenodd" id="SvgjsPath3618" index={0} pathfrom="M -1 175 L -1 175 L 14.733333333333334 175 L 29.46666666666667 175 L 44.2 175 L 58.93333333333334 175 L 73.66666666666667 175 L 88.4 175 L 103.13333333333334 175 L 117.86666666666667 175 L 132.60000000000002 175 L 147.33333333333334 175 L 162.0666666666667 175 L 176.8 175 L 191.53333333333336 175 L 206.26666666666668 175 L 221.00000000000003 175" pathto="M 0 43.75C 5.156666666666666 43.75 9.576666666666668 34.125 14.733333333333334 34.125C 19.89 34.125 24.310000000000002 17.5 29.46666666666667 17.5C 34.623333333333335 17.5 39.04333333333334 43.75 44.2 43.75C 49.35666666666667 43.75 53.77666666666667 24.5 58.93333333333334 24.5C 64.09 24.5 68.51 42 73.66666666666667 42C 78.82333333333334 42 83.24333333333334 35 88.4 35C 93.55666666666667 35 97.97666666666667 51.625 103.13333333333334 51.625C 108.29 51.625 112.71000000000001 61.25 117.86666666666667 61.25C 123.02333333333334 61.25 127.44333333333336 48.125 132.60000000000002 48.125C 137.7566666666667 48.125 142.17666666666668 26.25 147.33333333333334 26.25C 152.49 26.25 156.91000000000003 52.5 162.0666666666667 52.5C 167.22333333333336 52.5 171.64333333333335 6.125 176.8 6.125C 181.95666666666668 6.125 186.3766666666667 32.375 191.53333333333336 32.375C 196.69000000000003 32.375 201.11 43.75 206.26666666666668 43.75C 211.42333333333335 43.75 215.84333333333336 33.25 221.00000000000003 33.25" stroke="#2196f3" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={4} />
                                          <g className="apexcharts-series-markers-wrap apexcharts-element-hidden" data-realindex={0} id="SvgjsG3611">
                                            <g className="apexcharts-series-markers">
                                              <circle className="apexcharts-marker wcmhuszenf no-pointer-events" cx={0} cy={0} default-marker-size={0} fill="#2196f3" fillOpacity={1} id="SvgjsCircle3670" r={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2} />
                                            </g>
                                          </g>
                                        </g>
                                        <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG3612" />
                                      </g>
                                      <line className="apexcharts-ycrosshairs" id="SvgjsLine3646" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2={221} y1={0} y2={0} />
                                      <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine3647" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2={221} y1={0} y2={0} />
                                      <g className="apexcharts-yaxis-annotations apexcharts-element-hidden" id="SvgjsG3648" />
                                      <g className="apexcharts-xaxis-annotations apexcharts-element-hidden" id="SvgjsG3649" />
                                      <g className="apexcharts-point-annotations apexcharts-element-hidden" id="SvgjsG3650" />
                                      <g className="apexcharts-xaxis" id="SvgjsG3651" transform="translate(0, 0)">
                                        <g className="apexcharts-xaxis-texts-g" id="SvgjsG3652" transform="translate(0, 4)" />
                                      </g>
                                    </g>
                                    <g className="apexcharts-annotations" id="SvgjsG3602" />
                                    <g className="apexcharts-yaxis" id="SvgjsG3669" rel={0} transform="translate(-18, 0)" />
                                    <rect fill="#fefefe" height={0} id="SvgjsRect3605" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0} />
                                  </svg>
                                  <div className="apexcharts-legend" style={{"max-height":"35px"}} />
                                  <div className="apexcharts-tooltip apexcharts-theme-dark">
                                    <div className="apexcharts-tooltip-title" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}} />
                                    <div className="apexcharts-tooltip-series-group" style={{"-webkit-order":"1","-ms-flex-order":"1","order":"1"}}>
                                      <span className="apexcharts-tooltip-marker" style={{}}>
                                      </span>
                                      <div className="apexcharts-tooltip-text" style={{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px"}}>
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
                                </div>
                              </div>
                            </apx-chart>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c372 className="row">
                        <div _ngcontent-oko-c372 className="col-xl-3 col-lg-6">
                          <div _ngcontent-oko-c372 className="card l-bg-green-dark">
                            <div _ngcontent-oko-c372 className="card-statistic-3">
                              <div _ngcontent-oko-c372 className="card-icon card-icon-large">
                                <i _ngcontent-oko-c372 className="fa fa-briefcase">
                                </i>
                              </div>
                              <div _ngcontent-oko-c372 className="card-content">
                                <h4 _ngcontent-oko-c372 className="card-title">
                                  New Projects
                                </h4>
                                <span _ngcontent-oko-c372 className="data-1">
                                  102
                                </span>
                                <mat-progress-bar _ngcontent-oko-c372 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round progress-shadow orange-progress mt-2 mb-2 mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
                                  <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                    <div className="mdc-linear-progress__buffer-bar" style={{"--webkit-flex-basis":"0%","--ms-flex-basis":"100%","flex-basis":"100%"}} />
                                    <div className="mdc-linear-progress__buffer-dots" />
                                  </div>
                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{}}>
                                    <span className="mdc-linear-progress__bar-inner">
                                    </span>
                                  </div>
                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                    <span className="mdc-linear-progress__bar-inner">
                                    </span>
                                  </div>
                                </mat-progress-bar>
                                <p _ngcontent-oko-c372 className="mb-0 text-sm">
                                  <span _ngcontent-oko-c372 className="mr-2">
                                    <i _ngcontent-oko-c372 className="fa fa-arrow-up">
                                    </i>
                                    10%
                                  </span>
                                  <span _ngcontent-oko-c372 className="text-nowrap">
                                    Since last month
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-xl-3 col-lg-6">
                          <div _ngcontent-oko-c372 className="card l-bg-cyan-dark">
                            <div _ngcontent-oko-c372 className="card-statistic-3">
                              <div _ngcontent-oko-c372 className="card-icon card-icon-large">
                                <i _ngcontent-oko-c372 className="fas fa-users"> </i>
                              </div>
                              <div _ngcontent-oko-c372 className="card-content">
                                <h4 _ngcontent-oko-c372 className="card-title">
                                  New Customers
                                </h4>
                                <span _ngcontent-oko-c372 className="data-1">
                                  154
                                </span>
                                <mat-progress-bar _ngcontent-oko-c372 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round progress-shadow purple-progress mt-2 mb-2 mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
                                  <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                    <div className="mdc-linear-progress__buffer-bar" style={{"-webkit-flex-basis":"100%","-ms-flex-basis":"100%","flex-basis":"100%"}} />
                                    <div className="mdc-linear-progress__buffer-dots" />
                                  </div>
                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{}}>
                                    <span className="mdc-linear-progress__bar-inner">
                                    </span>
                                  </div>
                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                    <span className="mdc-linear-progress__bar-inner">
                                    </span>
                                  </div>
                                </mat-progress-bar>
                                <p _ngcontent-oko-c372 className="mb-0 text-sm">
                                  <span _ngcontent-oko-c372 className="mr-2">
                                    <i _ngcontent-oko-c372 className="fa fa-arrow-up">
                                    </i>
                                    04%
                                  </span>
                                  <span _ngcontent-oko-c372 className="text-nowrap">
                                    Since last month
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-xl-3 col-lg-6">
                          <div _ngcontent-oko-c372 className="card l-bg-purple-dark">
                            <div _ngcontent-oko-c372 className="card-statistic-3">
                              <div _ngcontent-oko-c372 className="card-icon card-icon-large">
                                <i _ngcontent-oko-c372 className="fa fa-globe"> </i>
                              </div>
                              <div _ngcontent-oko-c372 className="card-content">
                                <h4 _ngcontent-oko-c372 className="card-title">
                                  Inquiry
                                </h4>
                                <span _ngcontent-oko-c372 className="data-1">
                                  524
                                </span>
                                <mat-progress-bar _ngcontent-oko-c372 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round progress-shadow green-progress mt-2 mb-2 mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
                                  <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                    <div className="mdc-linear-progress__buffer-bar" style={{"-webkit-flex-basis":"100%","-ms-flex-basis":"100%","flex-basis":"100%"}} />
                                    <div className="mdc-linear-progress__buffer-dots" />
                                  </div>
                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{}}>
                                    <span className="mdc-linear-progress__bar-inner">
                                    </span>
                                  </div>
                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                    <span className="mdc-linear-progress__bar-inner">
                                    </span>
                                  </div>
                                </mat-progress-bar>
                                <p _ngcontent-oko-c372 className="mb-0 text-sm">
                                  <span _ngcontent-oko-c372 className="mr-2">
                                    <i _ngcontent-oko-c372 className="fa fa-arrow-up">
                                    </i>
                                    23%
                                  </span>
                                  <span _ngcontent-oko-c372 className="text-nowrap">
                                    Since last month
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c372 className="col-xl-3 col-lg-6">
                          <div _ngcontent-oko-c372 className="card l-bg-orange-dark">
                            <div _ngcontent-oko-c372 className="card-statistic-3">
                              <div _ngcontent-oko-c372 className="card-icon card-icon-large">
                                <i _ngcontent-oko-c372 className="fa fa-money-bill-alt">
                                </i>
                              </div>
                              <div _ngcontent-oko-c372 className="card-content">
                                <h4 _ngcontent-oko-c372 className="card-title">
                                  Earning
                                </h4>
                                <span _ngcontent-oko-c372 className="data-1">
                                  $2,453
                                </span>
                                <mat-progress-bar _ngcontent-oko-c372 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="mat-mdc-progress-bar mdc-linear-progress progress-m progress-round progress-shadow sky-progress mt-2 mb-2 mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={40}>
                                  <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                    <div className="mdc-linear-progress__buffer-bar" style={{"-webkit-flex-basis":"100%","-ms-flex-basis":"100%","flex-basis":"100%"}} />
                                    <div className="mdc-linear-progress__buffer-dots" />
                                  </div>
                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{}}>
                                    <span className="mdc-linear-progress__bar-inner">
                                    </span>
                                  </div>
                                  <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                    <span className="mdc-linear-progress__bar-inner">
                                    </span>
                                  </div>
                                </mat-progress-bar>
                                <p _ngcontent-oko-c372 className="mb-0 text-sm">
                                  <span _ngcontent-oko-c372 className="mr-2">
                                    <i _ngcontent-oko-c372 className="fa fa-arrow-down">
                                    </i>
                                    06%
                                  </span>
                                  <span _ngcontent-oko-c372 className="text-nowrap">
                                    Since last month
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  

    </>
  );
}