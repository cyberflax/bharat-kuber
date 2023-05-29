import React, { useState } from "react";
import "../../kuber/madhav/Madhav.css"

import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
// import a3 from "./img/a3.png"
import a3 from "../img/a3.png"
// import a2 from "./kuber/img/a2.png";
import a1 from "../img/a1.png";
import a2 from "../img/a2.png";
// import a3 from "../img/a3.png";
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
import a17 from "../img/a17.webp";
import a18 from "../img/a18.png";
import a26 from "../img/a26.png";
import a31 from "../../dashboard/img/logout.png"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  
} from "@fortawesome/free-solid-svg-icons";

export default function Data() {
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
                             
                              <img _ngcontent-hni-c131 className="ng-star-inserted" height={16} src="../../assets/images/flags/us.jpg" />
                             
                            </span>
                            <span className="mat-mdc-focus-indicator"> </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target"> </span>
                          </button>
                         
                          <mat-menu _ngcontent-hni-c131 className="ng-star-inserted">
                           
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
                         
                          <mat-menu _ngcontent-hni-c131 className="ng-star-inserted">
                           
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
                         
                          <mat-menu _ngcontent-hni-c131 className="ng-star-inserted">
                           
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
                      <div _ngcontent-oko-c373 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c373 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Data Widget
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
                                 
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Data Widget
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c373 className="row">
                        <div _ngcontent-oko-c373 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Your Progress</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="tableBody">
                              <div _ngcontent-oko-c373 className="responsive_table">
                                <table _ngcontent-oko-c373 className="table table-hover">
                                  <thead _ngcontent-oko-c373>
                                    <tr _ngcontent-oko-c373>
                                      <th _ngcontent-oko-c373>Subject</th>
                                      <th _ngcontent-oko-c373>Progress</th>
                                      <th _ngcontent-oko-c373>Duration</th>
                                    </tr>
                                  </thead>
                                  <tbody _ngcontent-oko-c373>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>Chemistry</td>
                                      <td _ngcontent-oko-c373>
                                        30%
                                        <mat-progress-bar _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={30} className="mat-mdc-progress-bar mdc-linear-progress mat-warn mdc-linear-progress--animation-ready" color="warn" mode="determinate" role="progressbar" tabIndex={-1} value={30}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{"-webkit-flex-basis":"0%","-ms-flex-basis":"100%","flex-basis":"100%"}} />
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
                                      </td>
                                      <td _ngcontent-oko-c373>2_Months</td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>Mathematics</td>
                                      <td _ngcontent-oko-c373>
                                        55%
                                        <mat-progress-bar _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={55} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={55}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{"-webkit-flex-basis":"0%","-ms-flex-basis":"100%","flex-basis":"100%"}} />
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
                                      </td>
                                      <td _ngcontent-oko-c373>3 Months</td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>Painting</td>
                                      <td _ngcontent-oko-c373>
                                        67%
                                        <mat-progress-bar _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={67} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={67}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{"-webkit-flex-basis":"0%","-ms-flex-basis":"100%","flex-basis":"100%"}} />
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
                                      </td>
                                      <td _ngcontent-oko-c373>1 Months</td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>Business studies</td>
                                      <td _ngcontent-oko-c373>
                                        70%
                                        <mat-progress-bar _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={70} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={70}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{"-webkit-flex-basis":"0%","-ms-flex-basis":"100%","flex-basis":"100%"}} />
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
                                      </td>
                                      <td _ngcontent-oko-c373>2 Months</td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>Biology</td>
                                      <td _ngcontent-oko-c373>
                                        24%
                                        <mat-progress-bar _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={24} className="mat-mdc-progress-bar mdc-linear-progress mat-warn mdc-linear-progress--animation-ready" color="warn" mode="determinate" role="progressbar" tabIndex={-1} value={24}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{"-webkit-flex-basis":"0%","-ms-flex-basis":"100%","flex-basis":"100%"}} />
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
                                      </td>
                                      <td _ngcontent-oko-c373>3 Months</td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>Computer studies</td>
                                      <td _ngcontent-oko-c373>
                                        77%
                                        <mat-progress-bar _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={77} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={77}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{"-webkit-flex-basis":"0%","-ms-flex-basis":"100%","flex-basis":"100%"}} />
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
                                      </td>
                                      <td _ngcontent-oko-c373>4 Months</td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>Geography</td>
                                      <td _ngcontent-oko-c373>
                                        41%
                                        <mat-progress-bar _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={41} className="mat-mdc-progress-bar mdc-linear-progress mat-warn mdc-linear-progress--animation-ready" color="warn" mode="determinate" role="progressbar" tabIndex={-1} value={41}>
                                          <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                            <div className="mdc-linear-progress__buffer-bar" style={{"-webkit-flex-basis":"0%","-ms-flex-basis":"100%","flex-basis":"100%"}} />
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
                                      </td>
                                      <td _ngcontent-oko-c373>2 Months</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Assignments</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <div _ngcontent-oko-c373 className="doc-file-type">
                                <ng-scrollbar _ngcontent-oko-c373 _nghost-oko-c129 className="ng-scrollbar" style={{"height":"285px"}} visibility="hover">
                                  <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                                    <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                                      <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{"--native-scrollbar-size":"0px"}}>
                                        <div _ngcontent-oko-c129 className="ng-scroll-content">
                                          <ul _ngcontent-oko-c373 className="list-unstyled">
                                            <li _ngcontent-oko-c373 className="d-flex mb-3">
                                              <span _ngcontent-oko-c373 className="msr-3 align-self-center img-icon primary-rgba text-primary">
                                                <i _ngcontent-oko-c373 className="far fa-file-word">
                                                </i>
                                              </span>
                                              <div _ngcontent-oko-c373 className="set-flex">
                                                <h5 _ngcontent-oko-c373 className="font-16 mb-1">
                                                  Java Programming
                                                </h5>
                                                <p _ngcontent-oko-c373>
                                                  .doc, 4.3 MB
                                                </p>
                                              </div>
                                              <div _ngcontent-oko-c373 className="ms-auto">
                                                <i _ngcontent-oko-c373 className="far fa-trash-alt psr-3">
                                                </i>
                                                <i _ngcontent-oko-c373 className="far fa-arrow-alt-circle-down">
                                                </i>
                                              </div>
                                            </li>
                                            <li _ngcontent-oko-c373 className="d-flex mb-3">
                                              <span _ngcontent-oko-c373 className="msr-3 align-self-center img-icon success-rgba text-success">
                                                <i _ngcontent-oko-c373 className="far fa-file-excel">
                                                </i>
                                              </span>
                                              <div _ngcontent-oko-c373 className="set-flex">
                                                <h5 _ngcontent-oko-c373 className="font-16 mb-1">
                                                  Angular Theory
                                                </h5>
                                                <p _ngcontent-oko-c373>
                                                  .xls, 2.5 MB
                                                </p>
                                              </div>
                                              <div _ngcontent-oko-c373 className="ms-auto">
                                                <i _ngcontent-oko-c373 className="far fa-trash-alt psr-3">
                                                </i>
                                                <i _ngcontent-oko-c373 className="far fa-arrow-alt-circle-down">
                                                </i>
                                              </div>
                                            </li>
                                            <li _ngcontent-oko-c373 className="d-flex mb-3">
                                              <span _ngcontent-oko-c373 className="msr-3 align-self-center img-icon danger-rgba text-danger">
                                                <i _ngcontent-oko-c373 className="far fa-file-pdf">
                                                </i>
                                              </span>
                                              <div _ngcontent-oko-c373 className="set-flex">
                                                <h5 _ngcontent-oko-c373 className="font-16 mb-1">
                                                  Maths Sums Solution
                                                </h5>
                                                <p _ngcontent-oko-c373>
                                                  .pdf, 10.5 MB
                                                </p>
                                              </div>
                                              <div _ngcontent-oko-c373 className="ms-auto">
                                                <i _ngcontent-oko-c373 className="far fa-trash-alt psr-3">
                                                </i>
                                                <i _ngcontent-oko-c373 className="far fa-arrow-alt-circle-down">
                                                </i>
                                              </div>
                                            </li>
                                            <li _ngcontent-oko-c373 className="d-flex mb-3">
                                              <span _ngcontent-oko-c373 className="msr-3 align-self-center img-icon info-rgba text-info">
                                                <i _ngcontent-oko-c373 className="far fa-file-archive">
                                                </i>
                                              </span>
                                              <div _ngcontent-oko-c373 className="set-flex">
                                                <h5 _ngcontent-oko-c373 className="font-16 mb-1">
                                                  Submit Science Journal
                                                </h5>
                                                <p _ngcontent-oko-c373>
                                                  .zip, 53.2 MB
                                                </p>
                                              </div>
                                              <div _ngcontent-oko-c373 className="ms-auto">
                                                <i _ngcontent-oko-c373 className="far fa-trash-alt psr-3">
                                                </i>
                                                <i _ngcontent-oko-c373 className="far fa-arrow-alt-circle-down">
                                                </i>
                                              </div>
                                            </li>
                                            <li _ngcontent-oko-c373 className="d-flex mb-3">
                                              <span _ngcontent-oko-c373 className="msr-3 align-self-center img-icon primary-rgba text-primary">
                                                <i _ngcontent-oko-c373 className="far fa-file-word">
                                                </i>
                                              </span>
                                              <div _ngcontent-oko-c373 className="set-flex">
                                                <h5 _ngcontent-oko-c373 className="font-14 mb-1">
                                                  Marketing Instructions
                                                </h5>
                                                <p _ngcontent-oko-c373>
                                                  .doc, 5.3 MB
                                                </p>
                                              </div>
                                              <div _ngcontent-oko-c373 className="ms-auto">
                                                <i _ngcontent-oko-c373 className="far fa-trash-alt psr-3">
                                                </i>
                                                <i _ngcontent-oko-c373 className="far fa-arrow-alt-circle-down">
                                                </i>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                   
                                    <scrollbar-y _ngcontent-oko-c129 _nghost-oko-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                                      <div _ngcontent-oko-c127 className="ng-scrollbar-track" scrollbartracky>
                                        <div _ngcontent-oko-c127 className="ng-scrollbar-thumb" scrollbarthumby />
                                      </div>
                                    </scrollbar-y>
                                   
                                   
                                   
                                  </div>
                                </ng-scrollbar>
                                <div _ngcontent-oko-c373 className="text-center p-t-20">
                                  <button _ngcontent-oko-c373 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                                    
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Upcomming Appointments</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="card-body">
                              <ng-scrollbar _ngcontent-oko-c373 _nghost-oko-c129 className="ng-scrollbar" style={{"height":"350px"}} visibility="hover">
                                <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                                  <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                                    <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{"--native-scrollbar-size":"10px"}}>
                                      <div _ngcontent-oko-c129 className="ng-scroll-content">
                                        <ul _ngcontent-oko-c373 className="list-unstyled user-progress list-unstyled-border list-unstyled-noborder">
                                          <li _ngcontent-oko-c373 className="lecture-list">
                                            <img _ngcontent-oko-c373 alt="user" className="msr-3 rounded-circle" src="/assets/images/user/user1.jpg" width={40} />
                                            <div _ngcontent-oko-c373 className="set-flex">
                                              <div _ngcontent-oko-c373 className="media-title font-16">
                                                Cara Stevens
                                              </div>
                                              <div _ngcontent-oko-c373 className="text-job text-muted mb-0">
                                                M.B.B.S.
                                              </div>
                                            </div>
                                            <div _ngcontent-oko-c373 className="ms-auto">
                                              <div _ngcontent-oko-c373 className="media-title font-16">
                                                12 June '20
                                              </div>
                                              <div _ngcontent-oko-c373 className="text-job text-muted mb-0">
                                                09:00-10:00
                                              </div>
                                            </div>
                                          </li>
                                          <li _ngcontent-oko-c373 className="lecture-list">
                                            <img _ngcontent-oko-c373 alt="user" className="msr-3 rounded-circle" src="/assets/images/user/user2.jpg" width={40} />
                                            <div _ngcontent-oko-c373 className="set-flex">
                                              <div _ngcontent-oko-c373 className="media-title font-16">
                                                Airi Satou
                                              </div>
                                              <div _ngcontent-oko-c373 className="text-job text-muted mb-0">
                                                M.S.
                                              </div>
                                            </div>
                                            <div _ngcontent-oko-c373 className="ms-auto">
                                              <div _ngcontent-oko-c373 className="media-title font-16">
                                                13 June '20
                                              </div>
                                              <div _ngcontent-oko-c373 className="text-job text-muted mb-0">
                                                11:00-12:00
                                              </div>
                                            </div>
                                          </li>
                                          <li _ngcontent-oko-c373 className="lecture-list">
                                            <img _ngcontent-oko-c373 alt="user" className="msr-3 rounded-circle" src="/assets/images/user/user3.jpg" width={40} />
                                            <div _ngcontent-oko-c373 className="set-flex">
                                              <div _ngcontent-oko-c373 className="media-title font-16">
                                                Jens Brincker
                                              </div>
                                              <div _ngcontent-oko-c373 className="text-job text-muted mb-0">
                                                Geography
                                              </div>
                                            </div>
                                            <div _ngcontent-oko-c373 className="ms-auto">
                                              <div _ngcontent-oko-c373 className="media-title font-16">
                                                15 June '20
                                              </div>
                                              <div _ngcontent-oko-c373 className="text-job text-muted mb-0">
                                                09:30-10:30
                                              </div>
                                            </div>
                                          </li>
                                          <li _ngcontent-oko-c373 className="lecture-list">
                                            <img _ngcontent-oko-c373 alt="user" className="msr-3 rounded-circle" src="/assets/images/user/user4.jpg" width={40} />
                                            <div _ngcontent-oko-c373 className="set-flex">
                                              <div _ngcontent-oko-c373 className="media-title font-16">
                                                Angelica Ramos
                                              </div>
                                              <div _ngcontent-oko-c373 className="text-job text-muted mb-0">
                                                B.H.M.S.
                                              </div>
                                            </div>
                                            <div _ngcontent-oko-c373 className="ms-auto">
                                              <div _ngcontent-oko-c373 className="media-title font-16">
                                                16 June '20
                                              </div>
                                              <div _ngcontent-oko-c373 className="text-job text-muted mb-0">
                                                14:00-15:00
                                              </div>
                                            </div>
                                          </li>
                                          <li _ngcontent-oko-c373 className="lecture-list">
                                            <img _ngcontent-oko-c373 alt="user" className="msr-3 rounded-circle" src="/assets/images/user/user5.jpg" width={40} />
                                            <div _ngcontent-oko-c373 className="set-flex">
                                              <div _ngcontent-oko-c373 className="media-title font-16">
                                                Cara Stevens
                                              </div>
                                              <div _ngcontent-oko-c373 className="text-job text-muted mb-0">
                                                M.B.B.S.
                                              </div>
                                            </div>
                                            <div _ngcontent-oko-c373 className="ms-auto">
                                              <div _ngcontent-oko-c373 className="media-title font-16">
                                                18 June '20
                                              </div>
                                              <div _ngcontent-oko-c373 className="text-job text-muted mb-0">
                                                11:00-12:30
                                              </div>
                                            </div>
                                          </li>
                                          
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                 
                                  <scrollbar-y _ngcontent-oko-c129 _nghost-oko-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                                    <div _ngcontent-oko-c127 className="ng-scrollbar-track" scrollbartracky>
                                      <div _ngcontent-oko-c127 className="ng-scrollbar-thumb" scrollbarthumby />
                                    </div>
                                  </scrollbar-y>
                                 
                                 
                                 
                                </div>
                              </ng-scrollbar>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c373 className="row clearfix">
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Customer Review</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <div _ngcontent-oko-c373 className="review-block">
                                <div _ngcontent-oko-c373 className="row">
                                  <div _ngcontent-oko-c373 className="review-img">
                                    <img _ngcontent-oko-c373 alt src="../assets/images/user/user1.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="col">
                                    <h6 _ngcontent-oko-c373 className="m-b-0 m-t-5">
                                      Alis Smith
                                      <span _ngcontent-oko-c373 className="float-end m-r-10 text-muted">
                                        a week ago
                                      </span>
                                    </h6>
                                    <i _ngcontent-oko-c373 className="material-icons">
                                      star
                                    </i>
                                    <i _ngcontent-oko-c373 className="material-icons">
                                      star
                                    </i>
                                    <i _ngcontent-oko-c373 className="material-icons">
                                      star
                                    </i>
                                    <i _ngcontent-oko-c373 className="material-icons">
                                      star_half
                                    </i>
                                    <i _ngcontent-oko-c373 className="material-icons">
                                      star_border
                                    </i>
                                    <p _ngcontent-oko-c373 className="m-t-10 m-b-15 text-muted">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Etiam vel rutrum ex, at ornare
                                      mi. In quis scelerisque dui, eget rhoncus orci.
                                      Fusce et sodales ipsum. Nam id nunc euismod,
                                      aliquet arcu quis, mattis nisi.
                                    </p>
                                    <a _ngcontent-oko-c373 href="#">
                                      <i _ngcontent-oko-c373 className="material-icons m-r-10">
                                        thumb_up
                                      </i>
                                    </a>
                                    <a _ngcontent-oko-c373 href="#">
                                      <i _ngcontent-oko-c373 className="material-icons m-r-10 col-red">
                                        thumb_down
                                      </i>
                                    </a>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c373 className="row">
                                  <div _ngcontent-oko-c373 className="review-img">
                                    <img _ngcontent-oko-c373 alt src="../assets/images/user/user2.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="col">
                                    <h6 _ngcontent-oko-c373 className="m-b-0 m-t-5">
                                      John Dio
                                      <span _ngcontent-oko-c373 className="float-end m-r-10 text-muted">
                                        a week ago
                                      </span>
                                    </h6>
                                    <i _ngcontent-oko-c373 className="material-icons">
                                      star
                                    </i>
                                    <i _ngcontent-oko-c373 className="material-icons">
                                      star_half
                                    </i>
                                    <i _ngcontent-oko-c373 className="material-icons">
                                      star_border
                                    </i>
                                    <i _ngcontent-oko-c373 className="material-icons">
                                      star_border
                                    </i>
                                    <i _ngcontent-oko-c373 className="material-icons">
                                      star_border
                                    </i>
                                    <p _ngcontent-oko-c373 className="m-t-10 m-b-15 text-muted">
                                      Nam quis ligula est. Nunc sed risus non turpis
                                      tristique tempor. Ut sollicitudin faucibus magna
                                      nec gravida. Suspendisse ullamcorper justo vel
                                      porta imperdiet. Nunc nec ipsum vel augue
                                      placerat faucibus.
                                    </p>
                                    <a _ngcontent-oko-c373 href="#">
                                      <i _ngcontent-oko-c373 className="material-icons m-r-10">
                                        thumb_up
                                      </i>
                                    </a>
                                    <a _ngcontent-oko-c373 href="#">
                                      <i _ngcontent-oko-c373 className="material-icons m-r-10 col-red">
                                        thumb_down
                                      </i>
                                    </a>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c373 className="text-center m-b-5">
                                  <a _ngcontent-oko-c373 className="b-b-primary text-primary" href="#">
                                    View all Customer Reviews
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-md-4 col-sm-12 col-12">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Earning Source</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <div _ngcontent-oko-c373 className="totalEarning">
                                <h2 _ngcontent-oko-c373>$90,808</h2>
                              </div>
                              <div _ngcontent-oko-c373 className="tab-pane body" id="skills">
                                <ul _ngcontent-oko-c373 className="list-unstyled">
                                  <li _ngcontent-oko-c373>
                                    <div _ngcontent-oko-c373 className="mb-2">
                                      <span _ngcontent-oko-c373 className="progress-label">
                                        envato.com
                                      </span>
                                      <span _ngcontent-oko-c373 className="float-end progress-percent label label-info m-b-5">
                                        17%
                                      </span>
                                    </div>
                                    <div _ngcontent-oko-c373 className="progress skill-progress m-b-20 w-100">
                                      <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={45} className="progress-bar l-bg-green width-per-45" role="progressbar" />
                                    </div>
                                  </li>
                                  <li _ngcontent-oko-c373>
                                    <div _ngcontent-oko-c373 className="mb-2">
                                      <span _ngcontent-oko-c373 className="float-start progress-label">
                                        google.com
                                      </span>
                                      <span _ngcontent-oko-c373 className="float-end progress-percent label label-danger m-b-5">
                                        27%
                                      </span>
                                    </div>
                                    <div _ngcontent-oko-c373 className="progress skill-progress m-b-20 w-100">
                                      <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={27} className="progress-bar l-bg-purple width-per-27" role="progressbar" />
                                    </div>
                                  </li>
                                  <li _ngcontent-oko-c373>
                                    <div _ngcontent-oko-c373 className="mb-2">
                                      <span _ngcontent-oko-c373 className="float-start progress-label">
                                        yahoo.com
                                      </span>
                                      <span _ngcontent-oko-c373 className="float-end progress-percent label label-primary m-b-5">
                                        25%
                                      </span>
                                    </div>
                                    <div _ngcontent-oko-c373 className="progress skill-progress m-b-20 w-100">
                                      <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar l-bg-orange width-per-25" role="progressbar" />
                                    </div>
                                  </li>
                                  <li _ngcontent-oko-c373>
                                    <div _ngcontent-oko-c373 className="mb-2">
                                      <span _ngcontent-oko-c373 className="float-start progress-label">
                                        store
                                      </span>
                                      <span _ngcontent-oko-c373 className="float-end progress-percent label label-success m-b-5">
                                        18%
                                      </span>
                                    </div>
                                    <div _ngcontent-oko-c373 className="progress skill-progress m-b-20 w-100">
                                      <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={18} className="progress-bar l-bg-cyan width-per-18" role="progressbar" />
                                    </div>
                                  </li>
                                  <li _ngcontent-oko-c373>
                                    <div _ngcontent-oko-c373 className="mb-2">
                                      <span _ngcontent-oko-c373 className="float-start progress-label">
                                        Others
                                      </span>
                                      <span _ngcontent-oko-c373 className="float-end progress-percent label label-warning m-b-5">
                                        13%
                                      </span>
                                    </div>
                                    <div _ngcontent-oko-c373 className="progress skill-progress m-b-20 w-100">
                                      <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={13} className="progress-bar l-bg-red width-per-13" role="progressbar" />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c373 className="row clearfix">
                        <div _ngcontent-oko-c373 className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div _ngcontent-oko-c373 className="box-part text-center">
                            <i _ngcontent-oko-c373 className="fab fa-twitter fa-3x col-blue">
                            </i>
                            <div _ngcontent-oko-c373 className="title p-t-15">
                              <h3 _ngcontent-oko-c373>Twitter</h3>
                            </div>
                            <div _ngcontent-oko-c373 className="text p-b-10">
                              <span _ngcontent-oko-c373>
                                Lorem ipsum dolor sit amet, id quo eruditi
                                eloquentiam. Assum decore te sed. Elitr scripta
                                ocurreret qui ad.
                              </span>
                            </div>
                            <a _ngcontent-oko-c373 href="/twiter.com"> Learn More </a>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div _ngcontent-oko-c373 className="box-part text-center">
                            <i _ngcontent-oko-c373 className="fab fa-instagram fa-3x col-red">
                            </i>
                            <div _ngcontent-oko-c373 className="title p-t-15">
                              <h3 _ngcontent-oko-c373>Instagram</h3>
                            </div>
                            <div _ngcontent-oko-c373 className="text p-b-10">
                              <span _ngcontent-oko-c373>
                                Lorem ipsum dolor sit amet, id quo eruditi
                                eloquentiam. Assum decore te sed. Elitr scripta
                                ocurreret qui ad.
                              </span>
                            </div>
                            <a _ngcontent-oko-c373 href="/Instagram"> Learn More </a>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div _ngcontent-oko-c373 className="box-part text-center">
                            <i _ngcontent-oko-c373 className="fab fa-facebook-f fa-3x col-blue">
                            </i>
                            <div _ngcontent-oko-c373 className="title p-t-15">
                              <h3 _ngcontent-oko-c373>Facebook</h3>
                            </div>
                            <div _ngcontent-oko-c373 className="text p-b-10">
                              <span _ngcontent-oko-c373>
                                Lorem ipsum dolor sit amet, id quo eruditi
                                eloquentiam. Assum decore te sed. Elitr scripta
                                ocurreret qui ad.
                              </span>
                            </div>
                            <a _ngcontent-oko-c373 href="/facebbok"> Learn More </a>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c373 className="row clearfix">
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Activity</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <ng-scrollbar _ngcontent-oko-c373 _nghost-oko-c129 className="ng-scrollbar" style={{"height":"600px"}} visibility="hover">
                                <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                                  <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                                    <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{"--native-scrollbar-size":"0px"}}>
                                      <div _ngcontent-oko-c129 className="ng-scroll-content">
                                        <div _ngcontent-oko-c373 className="assign-style">
                                          <ul _ngcontent-oko-c373 className="feedBody">
                                            <li _ngcontent-oko-c373 className="active-feed">
                                              <div _ngcontent-oko-c373 className="feed-user-img">
                                                <img _ngcontent-oko-c373 alt="User-Profile-Image" className="img-radius" src="/assets/images/user/user1.jpg" />
                                              </div>
                                              <h6 _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="feedLblStyle lblFileStyle">
                                                  File
                                                </span>
                                                Sarah Smith
                                                <small _ngcontent-oko-c373 className="text-muted float-end">
                                                  6 hours ago
                                                </small>
                                              </h6>
                                              <p _ngcontent-oko-c373 className="m-b-15 m-t-15">
                                                hii John, I have upload doc related to
                                                task.
                                              </p>
                                            </li>
                                            <li _ngcontent-oko-c373 className="diactive-feed">
                                              <div _ngcontent-oko-c373 className="feed-user-img">
                                                <img _ngcontent-oko-c373 alt="User-Profile-Image" className="img-radius" src="/assets/images/user/user2.jpg" />
                                              </div>
                                              <h6 _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="feedLblStyle lblTaskStyle">
                                                  Task
                                                </span>
                                                Jalpa Joshi
                                                <small _ngcontent-oko-c373 className="text-muted float-end">
                                                  5 hours ago
                                                </small>
                                              </h6>
                                              <p _ngcontent-oko-c373 className="m-b-15 m-t-15">
                                                Please do as specify. Let me know if
                                                you have any query.
                                              </p>
                                            </li>
                                            <li _ngcontent-oko-c373 className="diactive-feed">
                                              <div _ngcontent-oko-c373 className="feed-user-img">
                                                <img _ngcontent-oko-c373 alt="User-Profile-Image" className="img-radius" src="/assets/images/user/user3.jpg" />
                                              </div>
                                              <h6 _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="feedLblStyle lblCommentStyle">
                                                  comment
                                                </span>
                                                Lina Smith
                                                <small _ngcontent-oko-c373 className="text-muted float-end">
                                                  6 hours ago
                                                </small>
                                              </h6>
                                              <p _ngcontent-oko-c373 className="m-b-15 m-t-15">
                                                Hey, How are you??
                                              </p>
                                            </li>
                                            <li _ngcontent-oko-c373 className="active-feed">
                                              <div _ngcontent-oko-c373 className="feed-user-img">
                                                <img _ngcontent-oko-c373 alt="User-Profile-Image" className="img-radius" src="/assets/images/user/user4.jpg" />
                                              </div>
                                              <h6 _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="feedLblStyle lblReplyStyle">
                                                  Reply
                                                </span>
                                                Jacob Ryan
                                                <small _ngcontent-oko-c373 className="text-muted float-end">
                                                  7 hours ago
                                                </small>
                                              </h6>
                                              <p _ngcontent-oko-c373 className="m-b-15 m-t-15">
                                                I am fine. You??
                                              </p>
                                            </li>
                                            <li _ngcontent-oko-c373 className="active-feed">
                                              <div _ngcontent-oko-c373 className="feed-user-img">
                                                <img _ngcontent-oko-c373 alt="User-Profile-Image" className="img-radius" src="/assets/images/user/user5.jpg" />
                                              </div>
                                              <h6 _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="feedLblStyle lblFileStyle">
                                                  File
                                                </span>
                                                Sarah Smith
                                                <small _ngcontent-oko-c373 className="text-muted float-end">
                                                  6 hours ago
                                                </small>
                                              </h6>
                                              <p _ngcontent-oko-c373 className="m-b-15 m-t-15">
                                                hii John, I have upload doc related to
                                                task.
                                              </p>
                                            </li>
                                            <li _ngcontent-oko-c373 className="diactive-feed">
                                              <div _ngcontent-oko-c373 className="feed-user-img">
                                                <img _ngcontent-oko-c373 alt="User-Profile-Image" className="img-radius" src="/assets/images/user/user6.jpg" />
                                              </div>
                                              <h6 _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="feedLblStyle lblTaskStyle">
                                                  Task
                                                </span>
                                                Jalpa Joshi
                                                <small _ngcontent-oko-c373 className="text-muted float-end">
                                                  5 hours ago
                                                </small>
                                              </h6>
                                              <p _ngcontent-oko-c373 className="m-b-15 m-t-15">
                                                Please do as specify. Let me know if
                                                you have any query.
                                              </p>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                 
                                  <scrollbar-y _ngcontent-oko-c129 _nghost-oko-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                                    <div _ngcontent-oko-c127 className="ng-scrollbar-track" scrollbartracky>
                                      <div _ngcontent-oko-c127 className="ng-scrollbar-thumb" scrollbarthumby />
                                    </div>
                                  </scrollbar-y>
                                 
                                 
                                 
                                </div>
                              </ng-scrollbar>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Assign Task</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="tableBody">
                              <div _ngcontent-oko-c373 className="responsive_table">
                                <table _ngcontent-oko-c373 className="table table-hover dashboard-task-infos">
                                  <thead _ngcontent-oko-c373>
                                    <tr _ngcontent-oko-c373>
                                      <th _ngcontent-oko-c373>User</th>
                                      <th _ngcontent-oko-c373>Task</th>
                                      <th _ngcontent-oko-c373>Status</th>
                                      <th _ngcontent-oko-c373>Manager</th>
                                      <th _ngcontent-oko-c373>Progress</th>
                                    </tr>
                                  </thead>
                                  <tbody _ngcontent-oko-c373>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373 className="table-img">
                                        <img _ngcontent-oko-c373 alt="user" src="/assets/images/user/user1.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c373>Task A</td>
                                      <td _ngcontent-oko-c373>
                                        <span _ngcontent-oko-c373 className="label l-bg-green shadow-style">
                                          Doing
                                        </span>
                                      </td>
                                      <td _ngcontent-oko-c373>John Doe</td>
                                      <td _ngcontent-oko-c373>
                                        <div _ngcontent-oko-c373 className="progress shadow-style">
                                          <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={62} className="progress-bar l-bg-green width-per-62" role="progressbar" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373 className="table-img">
                                        <img _ngcontent-oko-c373 alt="user" src="/assets/images/user/user2.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c373>Task B</td>
                                      <td _ngcontent-oko-c373>
                                        <span _ngcontent-oko-c373 className="label l-bg-purple shadow-style">
                                          To Do
                                        </span>
                                      </td>
                                      <td _ngcontent-oko-c373>John Doe</td>
                                      <td _ngcontent-oko-c373>
                                        <div _ngcontent-oko-c373 className="progress shadow-style">
                                          <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="progress-bar l-bg-purple width-per-40" role="progressbar" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373 className="table-img">
                                        <img _ngcontent-oko-c373 alt="user" src="/assets/images/user/user3.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c373>Task C</td>
                                      <td _ngcontent-oko-c373>
                                        <span _ngcontent-oko-c373 className="label l-bg-orange shadow-style">
                                          On Hold
                                        </span>
                                      </td>
                                      <td _ngcontent-oko-c373>John Doe</td>
                                      <td _ngcontent-oko-c373>
                                        <div _ngcontent-oko-c373 className="progress shadow-style">
                                          <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={72} className="progress-bar l-bg-orange width-per-72" role="progressbar" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373 className="table-img">
                                        <img _ngcontent-oko-c373 alt="user" src="/assets/images/user/user4.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c373>Task D</td>
                                      <td _ngcontent-oko-c373>
                                        <span _ngcontent-oko-c373 className="label l-bg-cyan shadow-style">
                                          Wait Approvel
                                        </span>
                                      </td>
                                      <td _ngcontent-oko-c373>John Doe</td>
                                      <td _ngcontent-oko-c373>
                                        <div _ngcontent-oko-c373 className="progress shadow-style">
                                          <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={95} className="progress-bar l-bg-cyan width-per-95" role="progressbar" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373 className="table-img">
                                        <img _ngcontent-oko-c373 alt="user" src="/assets/images/user/user5.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c373>Task E</td>
                                      <td _ngcontent-oko-c373>
                                        <span _ngcontent-oko-c373 className="label bg-green shadow-style">
                                          Suspended
                                        </span>
                                      </td>
                                      <td _ngcontent-oko-c373>John Doe</td>
                                      <td _ngcontent-oko-c373>
                                        <div _ngcontent-oko-c373 className="progress shadow-style">
                                          <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={87} className="progress-bar l-bg-green width-per-87" role="progressbar" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373 className="table-img">
                                        <img _ngcontent-oko-c373 alt="user" src="/assets/images/user/user1.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c373>Task A</td>
                                      <td _ngcontent-oko-c373>
                                        <span _ngcontent-oko-c373 className="label bg-green shadow-style">
                                          Doing
                                        </span>
                                      </td>
                                      <td _ngcontent-oko-c373>John Doe</td>
                                      <td _ngcontent-oko-c373>
                                        <div _ngcontent-oko-c373 className="progress shadow-style">
                                          <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={62} className="progress-bar l-bg-green width-per-62" role="progressbar" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373 className="table-img">
                                        <img _ngcontent-oko-c373 alt="user" src="/assets/images/user/user2.jpg" />
                                      </td>
                                      <td _ngcontent-oko-c373>Task B</td>
                                      <td _ngcontent-oko-c373>
                                        <span _ngcontent-oko-c373 className="label l-bg-purple shadow-style">
                                          To Do
                                        </span>
                                      </td>
                                      <td _ngcontent-oko-c373>John Doe</td>
                                      <td _ngcontent-oko-c373>
                                        <div _ngcontent-oko-c373 className="progress shadow-style">
                                          <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="progress-bar l-bg-purple width-per-40" role="progressbar" />
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c373 className="row">
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>New Orders</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <ng-scrollbar _ngcontent-oko-c373 _nghost-oko-c129 className="ng-scrollbar" style={{"height":"600px"}} visibility="hover">
                                <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                                  <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                                    <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{"--native-scrollbar-size":"0px"}}>
                                      <div _ngcontent-oko-c129 className="ng-scroll-content">
                                        <div _ngcontent-oko-c373 className="media-list position-relative" id="new-orders">
                                          <div _ngcontent-oko-c373 className="responsive_table">
                                            <table _ngcontent-oko-c373 className="table table-hover table-xl mb-0" id="new-orders-table">
                                              <thead _ngcontent-oko-c373>
                                                <tr _ngcontent-oko-c373>
                                                  <th _ngcontent-oko-c373 className="border-top-0">
                                                    Product
                                                  </th>
                                                  <th _ngcontent-oko-c373 className="border-top-0">
                                                    Customers
                                                  </th>
                                                  <th _ngcontent-oko-c373 className="border-top-0">
                                                    Total
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody _ngcontent-oko-c373>
                                                <tr _ngcontent-oko-c373>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    iPhone X
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    <ul _ngcontent-oko-c373 className="list-unstyled order-list">
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user1.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user2.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user3.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <span _ngcontent-oko-c373 className="badge">
                                                          +4
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    $8999
                                                  </td>
                                                </tr>
                                                <tr _ngcontent-oko-c373>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    Pixel 2
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    <ul _ngcontent-oko-c373 className="list-unstyled order-list">
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user1.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user2.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user3.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <span _ngcontent-oko-c373 className="badge">
                                                          +4
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    $5550
                                                  </td>
                                                </tr>
                                                <tr _ngcontent-oko-c373>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    OnePlus
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    <ul _ngcontent-oko-c373 className="list-unstyled order-list">
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user1.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user2.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user3.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <span _ngcontent-oko-c373 className="badge">
                                                          +4
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    $9000
                                                  </td>
                                                </tr>
                                                <tr _ngcontent-oko-c373>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    Galaxy
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    <ul _ngcontent-oko-c373 className="list-unstyled order-list">
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user1.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user2.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user3.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <span _ngcontent-oko-c373 className="badge">
                                                          +4
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    $7500
                                                  </td>
                                                </tr>
                                                <tr _ngcontent-oko-c373>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    Moto Z2
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    <ul _ngcontent-oko-c373 className="list-unstyled order-list">
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user1.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user2.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user3.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <span _ngcontent-oko-c373 className="badge">
                                                          +4
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    $8500
                                                  </td>
                                                </tr>
                                                <tr _ngcontent-oko-c373>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    iPhone X
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    <ul _ngcontent-oko-c373 className="list-unstyled order-list">
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user1.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user2.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user3.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <span _ngcontent-oko-c373 className="badge">
                                                          +4
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    $8999
                                                  </td>
                                                </tr>
                                                <tr _ngcontent-oko-c373>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    iPhone X
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    <ul _ngcontent-oko-c373 className="list-unstyled order-list">
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user1.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user2.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user3.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <span _ngcontent-oko-c373 className="badge">
                                                          +4
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    $8999
                                                  </td>
                                                </tr>
                                                <tr _ngcontent-oko-c373>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    Pixel 2
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    <ul _ngcontent-oko-c373 className="list-unstyled order-list">
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user1.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user2.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user3.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <span _ngcontent-oko-c373 className="badge">
                                                          +4
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    $5550
                                                  </td>
                                                </tr>
                                                <tr _ngcontent-oko-c373>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    OnePlus
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    <ul _ngcontent-oko-c373 className="list-unstyled order-list">
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user1.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user2.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user3.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <span _ngcontent-oko-c373 className="badge">
                                                          +4
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    $9000
                                                  </td>
                                                </tr>
                                                <tr _ngcontent-oko-c373>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    Galaxy
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    <ul _ngcontent-oko-c373 className="list-unstyled order-list">
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user1.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user2.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <img _ngcontent-oko-c373 alt="user" className="rounded-circle" src="/assets/images/user/user3.jpg" />
                                                      </li>
                                                      <li _ngcontent-oko-c373 className="avatar avatar-sm">
                                                        <span _ngcontent-oko-c373 className="badge">
                                                          +4
                                                        </span>
                                                      </li>
                                                    </ul>
                                                  </td>
                                                  <td _ngcontent-oko-c373 className="text-truncate">
                                                    $7500
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                 
                                  <scrollbar-y _ngcontent-oko-c129 _nghost-oko-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                                    <div _ngcontent-oko-c127 className="ng-scrollbar-track" scrollbartracky>
                                      <div _ngcontent-oko-c127 className="ng-scrollbar-thumb" scrollbarthumby />
                                    </div>
                                  </scrollbar-y>
                                 
                                 
                                 
                                </div>
                              </ng-scrollbar>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Task List</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <mat-tab-group _ngcontent-oko-c373 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs">
                                <mat-tab-header className="mat-mdc-tab-header mat-mdc-tab-header-pagination-controls-enabled">
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                  <div className="mat-mdc-tab-label-container">
                                    <div className="mat-mdc-tab-list" role="tablist" style={{width:"70"}}>
                                      <div className="mat-mdc-tab-labels">
                                        <div aria-controls="mat-tab-content-4-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-4-0" mattablabelwrapper role="tab" tabIndex={0}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              <img _ngcontent-oko-c373 alt="user" className="ng-star-inserted" src="/assets/images/user/user1.jpg" />
                                              Sarah Smith
                                             
                                             
                                             
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-4-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-4-1" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              <img _ngcontent-oko-c373 alt="user" className="ng-star-inserted" src="/assets/images/user/user2.jpg" />
                                              Jalpa Joshi
                                             
                                             
                                             
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                        <div aria-controls="mat-tab-content-4-2" aria-disabled="false" aria-posinset={3} aria-selected="false" aria-setsize={3} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-4-2" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              <img _ngcontent-oko-c373 alt="user" className="ng-star-inserted" src="/assets/images/user/user3.jpg" />
                                              Mark Peter
                                             
                                             
                                             
                                            </span>
                                          </span>
                                          <span className="mdc-tab-indicator">
                                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                            </span>
                                          </span>
                                        </div>
                                       
                                      </div>
                                    </div>
                                  </div>
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after" mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                </mat-tab-header>
                                <div className="mat-mdc-tab-body-wrapper"style={{width:"100"}}>
                                  <mat-tab-body aria-labelledby="mat-tab-label-4-0" className="mat-mdc-tab-body ng-tns-c218-336 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-4-0" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-336 ng-trigger ng-trigger-translateTab" style={{"-webkit-transform":"none","-ms-transform":"none","transform":"none"}}>
                                     
                                      <div _ngcontent-oko-c373 className="table-responsive mt-3 ng-star-inserted" >
                                        <table _ngcontent-oko-c373 className="table table-hover dashboard-task-infos">
                                          <thead _ngcontent-oko-c373>
                                            <tr _ngcontent-oko-c373>
                                              <th _ngcontent-oko-c373>Task</th>
                                              <th _ngcontent-oko-c373>Status</th>
                                              <th _ngcontent-oko-c373>Manager</th>
                                              <th _ngcontent-oko-c373>Progress</th>
                                            </tr>
                                          </thead>
                                          <tbody _ngcontent-oko-c373>
                                            <tr _ngcontent-oko-c373>
                                              <td _ngcontent-oko-c373>Task C</td>
                                              <td _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="badge col-green">
                                                  Completed
                                                </span>
                                              </td>
                                              <td _ngcontent-oko-c373>John Doe</td>
                                              <td _ngcontent-oko-c373>
                                                <div _ngcontent-oko-c373 className="progress shadow-style">
                                                  <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={72} className="progress-bar l-bg-green width-per-72" role="progressbar" />
                                                </div>
                                              </td>
                                            </tr>
                                            <tr _ngcontent-oko-c373>
                                              <td _ngcontent-oko-c373>Task A</td>
                                              <td _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="badge col-red">
                                                  On Process
                                                </span>
                                              </td>
                                              <td _ngcontent-oko-c373>John Doe</td>
                                              <td _ngcontent-oko-c373>
                                                <div _ngcontent-oko-c373 className="progress shadow-style">
                                                  <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={62} className="progress-bar l-bg-red width-per-62" role="progressbar" />
                                                </div>
                                              </td>
                                            </tr>
                                            <tr _ngcontent-oko-c373>
                                              <td _ngcontent-oko-c373>Task B</td>
                                              <td _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="badge col-purple">
                                                  On Hold
                                                </span>
                                              </td>
                                              <td _ngcontent-oko-c373>John Doe</td>
                                              <td _ngcontent-oko-c373>
                                                <div _ngcontent-oko-c373 className="progress shadow-style">
                                                  <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="progress-bar l-bg-purple width-per-40" role="progressbar" />
                                                </div>
                                              </td>
                                            </tr>
                                            <tr _ngcontent-oko-c373>
                                              <td _ngcontent-oko-c373>Task D</td>
                                              <td _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="badge col-green">
                                                  Completed
                                                </span>
                                              </td>
                                              <td _ngcontent-oko-c373>John Doe</td>
                                              <td _ngcontent-oko-c373>
                                                <div _ngcontent-oko-c373 className="progress shadow-style">
                                                  <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={72} className="progress-bar l-bg-green width-per-72" role="progressbar" />
                                                </div>
                                              </td>
                                            </tr>
                                            <tr _ngcontent-oko-c373>
                                              <td _ngcontent-oko-c373>Task E</td>
                                              <td _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="badge col-purple">
                                                  On Hold
                                                </span>
                                              </td>
                                              <td _ngcontent-oko-c373>John Doe</td>
                                              <td _ngcontent-oko-c373>
                                                <div _ngcontent-oko-c373 className="progress shadow-style">
                                                  <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="progress-bar l-bg-purple width-per-40" role="progressbar" />
                                                </div>
                                              </td>
                                            </tr>
                                            <tr _ngcontent-oko-c373>
                                              <td _ngcontent-oko-c373>Task F</td>
                                              <td _ngcontent-oko-c373>
                                                <span _ngcontent-oko-c373 className="badge col-purple">
                                                  On Hold
                                                </span>
                                              </td>
                                              <td _ngcontent-oko-c373>John Doe</td>
                                              <td _ngcontent-oko-c373>
                                                <div _ngcontent-oko-c373 className="progress shadow-style">
                                                  <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={40} className="progress-bar l-bg-purple width-per-40" role="progressbar" />
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                     
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-4-1" className="mat-mdc-tab-body ng-tns-c218-337 ng-star-inserted" id="mat-tab-content-4-1" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-337 ng-trigger ng-trigger-translateTab ng-animating">
                                     
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-4-2" className="mat-mdc-tab-body ng-tns-c218-338 ng-star-inserted" id="mat-tab-content-4-2" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-338 ng-trigger ng-trigger-translateTab ng-animating">
                                     
                                    </div>
                                  </mat-tab-body>
                                 
                                </div>
                              </mat-tab-group>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c373 className="row clearfix">
                        <div _ngcontent-oko-c373 className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div _ngcontent-oko-c373 className="card profile-header">
                            <div _ngcontent-oko-c373 className="body">
                              <div _ngcontent-oko-c373 className="row">
                                <div _ngcontent-oko-c373 className="col-lg-4 col-md-4 col-12">
                                  <div _ngcontent-oko-c373 className="profile-image float-md-right">
                                    <img _ngcontent-oko-c373 alt="user3" src="/assets/images/user/user3.jpg" />
                                  </div>
                                </div>
                                <div _ngcontent-oko-c373 className="col-lg-8 col-md-8 col-12">
                                  <h4 _ngcontent-oko-c373 className="m-t-0 m-b-0">
                                    <strong _ngcontent-oko-c373> Sarah </strong>
                                    Smith
                                  </h4>
                                  <span _ngcontent-oko-c373 className="job_post">
                                    Java Develper
                                  </span>
                                  <p _ngcontent-oko-c373>
                                    102, Svayam Appartment, new P.L. road,
                                    Rajkot-369852
                                  </p>
                                  <div _ngcontent-oko-c373>
                                    <button _ngcontent-oko-c373 className="btn btn-outline-success btn-border-radius msr-2" type="button">
                                      Follow
                                    </button>
                                    <button _ngcontent-oko-c373 className="btn btn-outline-warning btn-border-radius" type="button">
                                      Message
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div _ngcontent-oko-c373 className="card profile-header">
                            <div _ngcontent-oko-c373 className="body">
                              <div _ngcontent-oko-c373 className="row">
                                <div _ngcontent-oko-c373 className="col-lg-4 col-md-4 col-12">
                                  <div _ngcontent-oko-c373 className="profile-image float-md-right">
                                    <img _ngcontent-oko-c373 alt="user5" src="/assets/images/user/user5.jpg" />
                                  </div>
                                </div>
                                <div _ngcontent-oko-c373 className="col-lg-8 col-md-8 col-12">
                                  <h4 _ngcontent-oko-c373 className="m-t-0 m-b-0">
                                    <strong _ngcontent-oko-c373> Sarah </strong>
                                    Smith
                                  </h4>
                                  <span _ngcontent-oko-c373 className="job_post">
                                    Java Develper
                                  </span>
                                  <p _ngcontent-oko-c373>
                                    102, Svayam Appartment, new P.L. road,
                                    Rajkot-369852
                                  </p>
                                  <div _ngcontent-oko-c373>
                                    <button _ngcontent-oko-c373 className="btn btn-outline-success btn-border-radius msr-2" type="button">
                                      Follow
                                    </button>
                                    <button _ngcontent-oko-c373 className="btn btn-outline-warning btn-border-radius" type="button">
                                      Message
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c373 className="row">
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Recent Activities</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <div _ngcontent-oko-c373 className="sl-item sl-primary">
                                <div _ngcontent-oko-c373 className="sl-content">
                                  <small _ngcontent-oko-c373 className="text-muted">
                                    <i _ngcontent-oko-c373 className="fa fa-user position-left">
                                    </i>
                                    5 mins ago
                                  </small>
                                  <p _ngcontent-oko-c373>
                                    Lorem ipsum dolor sit amet conse ctetur which
                                    ascing elit users.
                                  </p>
                                </div>
                              </div>
                              <div _ngcontent-oko-c373 className="sl-item sl-danger">
                                <div _ngcontent-oko-c373 className="sl-content">
                                  <small _ngcontent-oko-c373 className="text-muted">
                                    <i _ngcontent-oko-c373 className="fa fa-user position-left">
                                    </i>
                                    8 mins ago
                                  </small>
                                  <p _ngcontent-oko-c373>
                                    Lorem ipsum dolor sit ametcon the sectetur that
                                    ascing elit users.
                                  </p>
                                </div>
                              </div>
                              <div _ngcontent-oko-c373 className="sl-item sl-success">
                                <div _ngcontent-oko-c373 className="sl-content">
                                  <small _ngcontent-oko-c373 className="text-muted">
                                    <i _ngcontent-oko-c373 className="fa fa-user position-left">
                                    </i>
                                    10 mins ago
                                  </small>
                                  <p _ngcontent-oko-c373>
                                    Lorem ipsum dolor sit amet cons the ecte tur and
                                    adip ascing elit users.
                                  </p>
                                </div>
                              </div>
                              <div _ngcontent-oko-c373 className="sl-item sl-warning">
                                <div _ngcontent-oko-c373 className="sl-content">
                                  <small _ngcontent-oko-c373 className="text-muted">
                                    <i _ngcontent-oko-c373 className="fa fa-user position-left">
                                    </i>
                                    12 mins ago
                                  </small>
                                  <p _ngcontent-oko-c373>
                                    Lorem ipsum dolor sit amet consec tetur adip
                                    ascing elit users.
                                  </p>
                                </div>
                              </div>
                              <div _ngcontent-oko-c373 className="sl-item sl-primary">
                                <div _ngcontent-oko-c373 className="sl-content">
                                  <small _ngcontent-oko-c373 className="text-muted">
                                    <i _ngcontent-oko-c373 className="fa fa-user position-left">
                                    </i>
                                    5 mins ago
                                  </small>
                                  <p _ngcontent-oko-c373>
                                    Lorem ipsum dolor sit amet conse ctetur which
                                    ascing elit users.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="chat">
                              <div _ngcontent-oko-c373 className="chat-header clearfix">
                                <img _ngcontent-oko-c373 alt="avatar" src="/assets/images/user/user2.jpg" />
                                <div _ngcontent-oko-c373 className="chat-about">
                                  <div _ngcontent-oko-c373 className="chat-with">
                                    Aiden Chavez
                                  </div>
                                  <div _ngcontent-oko-c373 className="chat-num-messages">
                                    2 new messages
                                  </div>
                                </div>
                              </div>
                              <ng-scrollbar _ngcontent-oko-c373 _nghost-oko-c129 className="ng-scrollbar" style={{"height":"270px"}} visibility="hover">
                                <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                                  <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                                    <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{"--native-scrollbar-size":"0px"}}>
                                      <div _ngcontent-oko-c129 className="ng-scroll-content">
                                        <div _ngcontent-oko-c373 className="chat-history" id="chat-conversation">
                                          <ul _ngcontent-oko-c373>
                                            <li _ngcontent-oko-c373 className="clearfix">
                                              <div _ngcontent-oko-c373 className="message-data text-end">
                                                <span _ngcontent-oko-c373 className="message-data-time">
                                                  10:10 AM, Today
                                                </span>
                                                <span _ngcontent-oko-c373 className="message-data-name">
                                                  Michael
                                                </span>
                                                <i _ngcontent-oko-c373 className="zmdi zmdi-circle me">
                                                </i>
                                              </div>
                                              <div _ngcontent-oko-c373 className="message other-message float-end">
                                                Hi Aiden, how are you? How is the
                                                project coming along?
                                              </div>
                                            </li>
                                            <li _ngcontent-oko-c373>
                                              <div _ngcontent-oko-c373 className="message-data">
                                                <span _ngcontent-oko-c373 className="message-data-name">
                                                  <i _ngcontent-oko-c373 className="zmdi zmdi-circle online">
                                                  </i>
                                                  Aiden
                                                </span>
                                                <span _ngcontent-oko-c373 className="message-data-time">
                                                  10:12 AM, Today
                                                </span>
                                              </div>
                                              <div _ngcontent-oko-c373 className="message my-message">
                                                <p _ngcontent-oko-c373>
                                                  Are we meeting today? Project has
                                                  been already finished and I have
                                                  results to show you.
                                                </p>
                                                <div _ngcontent-oko-c373 className="row" />
                                              </div>
                                            </li>
                                           
                                           
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                 
                                  <scrollbar-y _ngcontent-oko-c129 _nghost-oko-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                                    <div _ngcontent-oko-c127 className="ng-scrollbar-track" scrollbartracky>
                                      <div _ngcontent-oko-c127 className="ng-scrollbar-thumb" scrollbarthumby />
                                    </div>
                                  </scrollbar-y>
                                 
                                 
                                 
                                </div>
                              </ng-scrollbar>
                              <div _ngcontent-oko-c373 className="chat-message clearfix">
                                <div _ngcontent-oko-c373 className="form-group">
                                  <div _ngcontent-oko-c373 className="form-line">
                                    <mat-form-field _ngcontent-oko-c373 className="mat-mdc-form-field example-full-width ng-tns-c67-335 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-primary ng-star-inserted">
                                     
                                      <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-335 mdc-text-field--filled mdc-text-field--no-label">
                                        <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-335 ng-star-inserted" />
                                       
                                        <div className="mat-mdc-form-field-flex ng-tns-c67-335">
                                         
                                         
                                         
                                          <div className="mat-mdc-form-field-infix ng-tns-c67-335">
                                           
                                           
                                           
                                          </div>
                                         
                                         
                                        </div>
                                        <div className="mdc-line-ripple ng-tns-c67-335 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />
                                       
                                      </div>
                                      <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-335">
                                       
                                        <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-335 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                         
                                          <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-335" />
                                        </div>
                                       
                                      </div>
                                    </mat-form-field>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Latest Posts</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <div _ngcontent-oko-c373 className="card-block">
                                <div _ngcontent-oko-c373 className="row m-b-20">
                                  <div _ngcontent-oko-c373 className="col-auto p-r-0">
                                    <img _ngcontent-oko-c373 alt="user" className="latest-posts-img" src="/assets/images/user/user1.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="col">
                                    <h6 _ngcontent-oko-c373>About Something</h6>
                                    <p _ngcontent-oko-c373 className="text-muted m-b-5">
                                      <i _ngcontent-oko-c373 className="fa fa-play-circle-o">
                                      </i>
                                      Video | 10 minutes ago
                                    </p>
                                    <p _ngcontent-oko-c373 className="text-muted">
                                      Lorem Ipsum is simply dummy text of the.
                                    </p>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c373 className="row m-b-20">
                                  <div _ngcontent-oko-c373 className="col-auto p-r-0">
                                    <img _ngcontent-oko-c373 alt="user" className="latest-posts-img" src="/assets/images/user/user2.jpg"  />
                                  </div>
                                  <div _ngcontent-oko-c373 className="col">
                                    <h6 _ngcontent-oko-c373>Relationship</h6>
                                    <p _ngcontent-oko-c373 className="text-muted m-b-5">
                                      <i _ngcontent-oko-c373 className="fa fa-play-circle-o">
                                      </i>
                                      Video | 24 minutes ago
                                    </p>
                                    <p _ngcontent-oko-c373 className="text-muted">
                                      Lorem Ipsum is simply dummy text of the.
                                    </p>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c373 className="row m-b-20">
                                  <div _ngcontent-oko-c373 className="col-auto p-r-0">
                                    <img _ngcontent-oko-c373 alt="user" className="latest-posts-img" src="/assets/images/user/user3.jpg"  />
                                  </div>
                                  <div _ngcontent-oko-c373 className="col">
                                    <h6 _ngcontent-oko-c373>Human body</h6>
                                    <p _ngcontent-oko-c373 className="text-muted m-b-5">
                                      <i _ngcontent-oko-c373 className="fa fa-play-circle-o">
                                      </i>
                                      Video | 53 minutes ago
                                    </p>
                                    <p _ngcontent-oko-c373 className="text-muted">
                                      Lorem Ipsum is simply dummy text of the.
                                    </p>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c373 className="text-center">
                                  <a _ngcontent-oko-c373 className="b-b-primary text-primary" href="#">
                                    View All Posts
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c373 className="row clearfix">
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Notice Board</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <div _ngcontent-oko-c373 className="recent-comment">
                                <div _ngcontent-oko-c373 className="notice-board">
                                  <div _ngcontent-oko-c373 className="table-img">
                                    <img _ngcontent-oko-c373 alt="user6" className="notice-object" src="/assets/images/user/user6.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="notice-body">
                                    <h5 _ngcontent-oko-c373 className="notice-heading col-green">
                                      Airi Satou
                                    </h5>
                                    <p _ngcontent-oko-c373>
                                      Lorem ipsum dolor sit amet, id quo eruditi
                                      eloquentiam.
                                    </p>
                                    <small _ngcontent-oko-c373 className="text-muted">
                                      7 hours ago
                                    </small>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c373 className="notice-board">
                                  <div _ngcontent-oko-c373 className="table-img">
                                    <img _ngcontent-oko-c373 alt="user" className="notice-object" src="/assets/images/user/user4.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="notice-body">
                                    <h5 _ngcontent-oko-c373 className="notice-heading color-primary col-indigo">
                                      Sarah Smith
                                    </h5>
                                    <p _ngcontent-oko-c373>
                                      Lorem ipsum dolor sit amet, id quo eruditi
                                      eloquentiam.
                                    </p>
                                    <p _ngcontent-oko-c373 className="comment-date">
                                      1 hour ago
                                    </p>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c373 className="notice-board">
                                  <div _ngcontent-oko-c373 className="table-img">
                                    <img _ngcontent-oko-c373 alt="user" className="notice-object" src="/assets/images/user/user3.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="notice-body">
                                    <h5 _ngcontent-oko-c373 className="notice-heading color-danger col-cyan">
                                      Cara Stevens
                                    </h5>
                                    <p _ngcontent-oko-c373>
                                      Lorem ipsum dolor sit amet, id quo eruditi
                                      eloquentiam.
                                    </p>
                                    <div _ngcontent-oko-c373 className="comment-date">
                                      Yesterday
                                    </div>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c373 className="notice-board no-border">
                                  <div _ngcontent-oko-c373 className="table-img">
                                    <img _ngcontent-oko-c373 alt="user" className="notice-object" src="/assets/images/user/user7.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="notice-body">
                                    <h5 _ngcontent-oko-c373 className="notice-heading color-info col-orange">
                                      Ashton Cox
                                    </h5>
                                    <p _ngcontent-oko-c373>
                                      Lorem ipsum dolor sit amet, id quo eruditi
                                      eloquentiam.
                                    </p>
                                    <div _ngcontent-oko-c373 className="comment-date">
                                      Yesterday
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Recent Activity</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <ul _ngcontent-oko-c373 className="timeline">
                                <li _ngcontent-oko-c373>
                                  <div _ngcontent-oko-c373 className="timeline-badge primary">
                                    <img _ngcontent-oko-c373 alt="user" className="notice-object" src="/assets/images/user/user1.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="timeline-panel">
                                    <div _ngcontent-oko-c373 className="timeline-heading">
                                      <h5 _ngcontent-oko-c373 className="timeline-title">
                                        Lorem ipsum dolor sit amet, id quo eruditi.
                                      </h5>
                                    </div>
                                    <div _ngcontent-oko-c373 className="timeline-body">
                                      <p _ngcontent-oko-c373>5 minutes ago</p>
                                    </div>
                                  </div>
                                </li>
                                <li _ngcontent-oko-c373>
                                  <div _ngcontent-oko-c373 className="timeline-badge primary">
                                    <img _ngcontent-oko-c373 alt="user" className="notice-object" src="/assets/images/user/user2.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="timeline-panel">
                                    <div _ngcontent-oko-c373 className="timeline-heading">
                                      <h5 _ngcontent-oko-c373 className="timeline-title">
                                        Lorem ipsum dolor sit amet, id quo eruditi.
                                      </h5>
                                    </div>
                                    <div _ngcontent-oko-c373 className="timeline-body">
                                      <p _ngcontent-oko-c373>10 minutes ago</p>
                                    </div>
                                  </div>
                                </li>
                                <li _ngcontent-oko-c373>
                                  <div _ngcontent-oko-c373 className="timeline-badge primary">
                                    <img _ngcontent-oko-c373 alt="user" className="notice-object" src="/assets/images/user/user8.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="timeline-panel">
                                    <div _ngcontent-oko-c373 className="timeline-heading">
                                      <h5 _ngcontent-oko-c373 className="timeline-title">
                                        Lorem ipsum dolor sit amet, id quo eruditi.
                                      </h5>
                                    </div>
                                    <div _ngcontent-oko-c373 className="timeline-body">
                                      <p _ngcontent-oko-c373>20 minutes ago</p>
                                    </div>
                                  </div>
                                </li>
                                <li _ngcontent-oko-c373>
                                  <div _ngcontent-oko-c373 className="timeline-badge primary">
                                    <img _ngcontent-oko-c373 alt="user" className="notice-object" src="/assets/images/user/user4.jpg" />
                                  </div>
                                  <div _ngcontent-oko-c373 className="timeline-panel">
                                    <div _ngcontent-oko-c373 className="timeline-heading">
                                      <h5 _ngcontent-oko-c373 className="timeline-title">
                                        Lorem ipsum dolor sit amet, id quo eruditi.
                                      </h5>
                                    </div>
                                    <div _ngcontent-oko-c373 className="timeline-body">
                                      <p _ngcontent-oko-c373>35 minutes ago</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c373 className="row">
                        <div _ngcontent-oko-c373 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Todo List</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <ng-scrollbar _ngcontent-oko-c373 _nghost-oko-c129 className="ng-scrollbar" style={{"height":"680px"}} visibility="hover">
                                <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                                  <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                                    <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{"--native-scrollbar-size":"0px"}}>
                                      <div _ngcontent-oko-c129 className="ng-scroll-content">
                                        <div _ngcontent-oko-c373 cdkdroplist className="cdk-drop-list task-list" id="cdk-drop-list-17">
                                          <div _ngcontent-oko-c373 cdkdrag className="cdk-drag task-box ng-star-inserted">
                                            <div _ngcontent-oko-c373>
                                              <div _ngcontent-oko-c373 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{"touch-action":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"transparent","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}>
                                                <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  drag_indicator
                                                </mat-icon>
                                              </div>
                                            </div>
                                            <mat-checkbox _ngcontent-oko-c373 className="mat-mdc-checkbox m-r-15 mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-177">
                                              <div className="mdc-form-field">
                                                <div className="mdc-checkbox">
                                                  <div className="mat-mdc-checkbox-touch-target" />
                                                  <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-177-input" tabIndex={0} type="checkbox" />
                                                  <div className="mdc-checkbox__ripple" />
                                                  <div className="mdc-checkbox__background">
                                                    <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                      <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                    </svg>
                                                    <div className="mdc-checkbox__mixedmark" />
                                                  </div>
                                                  <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                                </div>
                                                <label htmlFor="mat-mdc-checkbox-177-input">
                                                </label>
                                              </div>
                                            </mat-checkbox>
                                           
                                            <div _ngcontent-oko-c373 className="done" mattooltip="Title">
                                              Submit Science Homework
                                            </div>
                                            <div _ngcontent-oko-c373 className="task-high">
                                             
                                              <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                                arrow_upward
                                              </mat-icon>
                                             
                                             
                                              High
                                            </div>
                                          </div>
                                         
                                          <div _ngcontent-oko-c373 cdkdrag className="cdk-drag task-box ng-star-inserted">
                                            <div _ngcontent-oko-c373>
                                              <div _ngcontent-oko-c373 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{"touch-action":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"transparent","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}>
                                                <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  drag_indicator
                                                </mat-icon>
                                              </div>
                                            </div>
                                            <mat-checkbox _ngcontent-oko-c373 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-178">
                                              <div className="mdc-form-field">
                                                <div className="mdc-checkbox">
                                                  <div className="mat-mdc-checkbox-touch-target" />
                                                  <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-178-input" tabIndex={0} type="checkbox" />
                                                  <div className="mdc-checkbox__ripple" />
                                                  <div className="mdc-checkbox__background">
                                                    <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                      <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                    </svg>
                                                    <div className="mdc-checkbox__mixedmark" />
                                                  </div>
                                                  <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                                </div>
                                                <label htmlFor="mat-mdc-checkbox-178-input">
                                                </label>
                                              </div>
                                            </mat-checkbox>
                                           
                                            <div _ngcontent-oko-c373 mattooltip="Title">
                                              Request for festivle holiday
                                            </div>
                                            <div _ngcontent-oko-c373 className="task-high">
                                             
                                              <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                                arrow_upward
                                              </mat-icon>
                                             
                                             
                                              High
                                            </div>
                                          </div>
                                         
                                          <div _ngcontent-oko-c373 cdkdrag className="cdk-drag task-box ng-star-inserted">
                                            <div _ngcontent-oko-c373>
                                              <div _ngcontent-oko-c373 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{"touch-action":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"transparent","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}>
                                                <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  drag_indicator
                                                </mat-icon>
                                              </div>
                                            </div>
                                            <mat-checkbox _ngcontent-oko-c373 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-179">
                                              <div className="mdc-form-field">
                                                <div className="mdc-checkbox">
                                                  <div className="mat-mdc-checkbox-touch-target" />
                                                  <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-179-input" tabIndex={0} type="checkbox" />
                                                  <div className="mdc-checkbox__ripple" />
                                                  <div className="mdc-checkbox__background">
                                                    <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                      <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                    </svg>
                                                    <div className="mdc-checkbox__mixedmark" />
                                                  </div>
                                                  <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                                </div>
                                                <label htmlFor="mat-mdc-checkbox-179-input">
                                                </label>
                                              </div>
                                            </mat-checkbox>
                                           
                                            <div _ngcontent-oko-c373 mattooltip="Title">
                                              Order new java book
                                            </div>
                                            <div _ngcontent-oko-c373 className="task-low">
                                              <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate lbl-low material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="Low" role="img">
                                                arrow_downward
                                              </mat-icon>
                                             
                                             
                                             
                                              Low
                                            </div>
                                          </div>
                                         
                                          <div _ngcontent-oko-c373 cdkdrag className="cdk-drag task-box ng-star-inserted">
                                            <div _ngcontent-oko-c373>
                                              <div _ngcontent-oko-c373 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{"touch-action":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"transparent","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}>
                                                <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  drag_indicator
                                                </mat-icon>
                                              </div>
                                            </div>
                                            <mat-checkbox _ngcontent-oko-c373 className="mat-mdc-checkbox m-r-15 mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-180">
                                              <div className="mdc-form-field">
                                                <div className="mdc-checkbox">
                                                  <div className="mat-mdc-checkbox-touch-target" />
                                                  <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-180-input" tabIndex={0} type="checkbox" />
                                                  <div className="mdc-checkbox__ripple" />
                                                  <div className="mdc-checkbox__background">
                                                    <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                      <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                    </svg>
                                                    <div className="mdc-checkbox__mixedmark" />
                                                  </div>
                                                  <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                                </div>
                                                <label htmlFor="mat-mdc-checkbox-180-input">
                                                </label>
                                              </div>
                                            </mat-checkbox>
                                           
                                            <div _ngcontent-oko-c373 className="done" mattooltip="Title">
                                              Remind for lunch in hotel
                                            </div>
                                            <div _ngcontent-oko-c373 className="task-normal">
                                             
                                             
                                              <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate lbl-normal material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="Normal" role="img">
                                                remove
                                              </mat-icon>
                                             
                                              Normal
                                            </div>
                                          </div>
                                         
                                          <div _ngcontent-oko-c373 cdkdrag className="cdk-drag task-box ng-star-inserted">
                                            <div _ngcontent-oko-c373>
                                              <div _ngcontent-oko-c373 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{"touch-action":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"transparent","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}>
                                                <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  drag_indicator
                                                </mat-icon>
                                              </div>
                                            </div>
                                            <mat-checkbox _ngcontent-oko-c373 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-181">
                                              <div className="mdc-form-field">
                                                <div className="mdc-checkbox">
                                                  <div className="mat-mdc-checkbox-touch-target" />
                                                  <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-181-input" tabIndex={0} type="checkbox" />
                                                  <div className="mdc-checkbox__ripple" />
                                                  <div className="mdc-checkbox__background">
                                                    <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                      <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                    </svg>
                                                    <div className="mdc-checkbox__mixedmark" />
                                                  </div>
                                                  <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                                </div>
                                                <label htmlFor="mat-mdc-checkbox-181-input">
                                                </label>
                                              </div>
                                            </mat-checkbox>
                                           
                                            <div _ngcontent-oko-c373 mattooltip="Title">
                                              Pay Hostel Fees
                                            </div>
                                            <div _ngcontent-oko-c373 className="task-high">
                                             
                                              <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                                arrow_upward
                                              </mat-icon>
                                             
                                             
                                              High
                                            </div>
                                          </div>
                                         
                                          <div _ngcontent-oko-c373 cdkdrag className="cdk-drag task-box ng-star-inserted">
                                            <div _ngcontent-oko-c373>
                                              <div _ngcontent-oko-c373 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{"touch-action":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"transparent","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}>
                                                <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  drag_indicator
                                                </mat-icon>
                                              </div>
                                            </div>
                                            <mat-checkbox _ngcontent-oko-c373 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-182">
                                              <div className="mdc-form-field">
                                                <div className="mdc-checkbox">
                                                  <div className="mat-mdc-checkbox-touch-target" />
                                                  <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-182-input" tabIndex={0} type="checkbox" />
                                                  <div className="mdc-checkbox__ripple" />
                                                  <div className="mdc-checkbox__background">
                                                    <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                      <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                    </svg>
                                                    <div className="mdc-checkbox__mixedmark" />
                                                  </div>
                                                  <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                                </div>
                                                <label htmlFor="mat-mdc-checkbox-182-input">
                                                </label>
                                              </div>
                                            </mat-checkbox>
                                           
                                            <div _ngcontent-oko-c373 mattooltip="Title">
                                              Attend Seminar On Sunday
                                            </div>
                                            <div _ngcontent-oko-c373 className="task-normal">
                                             
                                             
                                              <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate lbl-normal material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="Normal" role="img">
                                                remove
                                              </mat-icon>
                                             
                                              Normal
                                            </div>
                                          </div>
                                         
                                          <div _ngcontent-oko-c373 cdkdrag className="cdk-drag task-box ng-star-inserted">
                                            <div _ngcontent-oko-c373>
                                              <div _ngcontent-oko-c373 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{"touch-action":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"transparent","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}>
                                                <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  drag_indicator
                                                </mat-icon>
                                              </div>
                                            </div>
                                            <mat-checkbox _ngcontent-oko-c373 className="mat-mdc-checkbox m-r-15 mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-183">
                                              <div className="mdc-form-field">
                                                <div className="mdc-checkbox">
                                                  <div className="mat-mdc-checkbox-touch-target" />
                                                  <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-183-input" tabIndex={0} type="checkbox" />
                                                  <div className="mdc-checkbox__ripple" />
                                                  <div className="mdc-checkbox__background">
                                                    <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                      <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                    </svg>
                                                    <div className="mdc-checkbox__mixedmark" />
                                                  </div>
                                                  <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                                </div>
                                                <label htmlFor="mat-mdc-checkbox-183-input">
                                                </label>
                                              </div>
                                            </mat-checkbox>
                                           
                                            <div _ngcontent-oko-c373 className="done" mattooltip="Title">
                                              Renew bus pass
                                            </div>
                                            <div _ngcontent-oko-c373 className="task-high">
                                             
                                              <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                                arrow_upward
                                              </mat-icon>
                                             
                                             
                                              High
                                            </div>
                                          </div>
                                         
                                          <div _ngcontent-oko-c373 cdkdrag className="cdk-drag task-box ng-star-inserted">
                                            <div _ngcontent-oko-c373>
                                              <div _ngcontent-oko-c373 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{"touch-action":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"transparent","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}>
                                                <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  drag_indicator
                                                </mat-icon>
                                              </div>
                                            </div>
                                            <mat-checkbox _ngcontent-oko-c373 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-184">
                                              <div className="mdc-form-field">
                                                <div className="mdc-checkbox">
                                                  <div className="mat-mdc-checkbox-touch-target" />
                                                  <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-184-input" tabIndex={0} type="checkbox" />
                                                  <div className="mdc-checkbox__ripple" />
                                                  <div className="mdc-checkbox__background">
                                                    <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                      <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                    </svg>
                                                    <div className="mdc-checkbox__mixedmark" />
                                                  </div>
                                                  <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                                </div>
                                                <label htmlFor="mat-mdc-checkbox-184-input">
                                                </label>
                                              </div>
                                            </mat-checkbox>
                                           
                                            <div _ngcontent-oko-c373 mattooltip="Title">
                                              Issue book in library
                                            </div>
                                            <div _ngcontent-oko-c373 className="task-high">
                                             
                                              <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate lbl-high material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="High" role="img">
                                                arrow_upward
                                              </mat-icon>
                                             
                                             
                                              High
                                            </div>
                                          </div>
                                         
                                          <div _ngcontent-oko-c373 cdkdrag className="cdk-drag task-box ng-star-inserted">
                                            <div _ngcontent-oko-c373>
                                              <div _ngcontent-oko-c373 cdkdraghandle className="cdk-drag-handle task-handle m-r-20" style={{"touch-action":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"transparent","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}>
                                                <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  drag_indicator
                                                </mat-icon>
                                              </div>
                                            </div>
                                            <mat-checkbox _ngcontent-oko-c373 className="mat-mdc-checkbox m-r-15 mat-primary" color="primary" id="mat-mdc-checkbox-185">
                                              <div className="mdc-form-field">
                                                <div className="mdc-checkbox">
                                                  <div className="mat-mdc-checkbox-touch-target" />
                                                  <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-185-input" tabIndex={0} type="checkbox" />
                                                  <div className="mdc-checkbox__ripple" />
                                                  <div className="mdc-checkbox__background">
                                                    <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                      <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                    </svg>
                                                    <div className="mdc-checkbox__mixedmark" />
                                                  </div>
                                                  <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                                </div>
                                                <label htmlFor="mat-mdc-checkbox-185-input">
                                                </label>
                                              </div>
                                            </mat-checkbox>
                                           
                                            <div _ngcontent-oko-c373 mattooltip="Title">
                                              Project report submit
                                            </div>
                                            <div _ngcontent-oko-c373 className="task-low">
                                              <mat-icon _ngcontent-oko-c373 aria-hidden="false" className="mat-icon notranslate lbl-low material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" mattooltip="Low" role="img">
                                                arrow_downward
                                              </mat-icon>
                                             
                                             
                                             
                                              Low
                                            </div>
                                          </div>
                                         
                                         
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                 
                                  <scrollbar-y _ngcontent-oko-c129 _nghost-oko-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                                    <div _ngcontent-oko-c127 className="ng-scrollbar-track" scrollbartracky>
                                      <div _ngcontent-oko-c127 className="ng-scrollbar-thumb" scrollbarthumby />
                                    </div>
                                  </scrollbar-y>
                                 
                                 
                                 
                                </div>
                              </ng-scrollbar>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c373 className="card">
                            <div _ngcontent-oko-c373 className="header">
                              <h2 _ngcontent-oko-c373>Medications</h2>
                            </div>
                            <div _ngcontent-oko-c373 className="body">
                              <div _ngcontent-oko-c373 className="responsive_table">
                                <table _ngcontent-oko-c373 className="table table-borderless medicine-list">
                                  <tbody><tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>
                                        <i _ngcontent-oko-c373 className="fas fa-tablets pill-style">
                                        </i>
                                        Econochlor (chloramphenicol-oral)
                                      </td>
                                      <td _ngcontent-oko-c373 className="text-end w-25">
                                        <span _ngcontent-oko-c373 className="badge-outline">
                                          1 - 0 - 1
                                        </span>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>
                                        <i _ngcontent-oko-c373 className="fas fa-capsules pill-style">
                                        </i>
                                        Desmopressin tabs
                                      </td>
                                      <td _ngcontent-oko-c373 className="text-end w-25">
                                        <span _ngcontent-oko-c373 className="badge-outline">
                                          1 - 1 - 1
                                        </span>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>
                                        <i _ngcontent-oko-c373 className="fas fa-syringe pill-style">
                                        </i>
                                        Abciximab-injection
                                      </td>
                                      <td _ngcontent-oko-c373 className="text-end w-25">
                                        <span _ngcontent-oko-c373 className="badge-outline">
                                          1 Daily
                                        </span>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>
                                        <i _ngcontent-oko-c373 className="fas fa-pills pill-style">
                                        </i>
                                        Kevzara sarilumab
                                      </td>
                                      <td _ngcontent-oko-c373 className="text-end w-25">
                                        <span _ngcontent-oko-c373 className="badge-outline">
                                          0 - 0 - 1
                                        </span>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>
                                        <i _ngcontent-oko-c373 className="fas fa-capsules pill-style">
                                        </i>
                                        Gentamicin-topical
                                      </td>
                                      <td _ngcontent-oko-c373 className="text-end w-25">
                                        <span _ngcontent-oko-c373 className="badge-outline">
                                          1 - 0 - 1
                                        </span>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>
                                        <i _ngcontent-oko-c373 className="fas fa-tablets pill-style">
                                        </i>
                                        Paliperidone palmitate
                                      </td>
                                      <td _ngcontent-oko-c373 className="text-end w-25">
                                        <span _ngcontent-oko-c373 className="badge-outline">
                                          1 - 1 - 1
                                        </span>
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c373>
                                      <td _ngcontent-oko-c373>
                                        <i _ngcontent-oko-c373 className="fas fa-syringe pill-style">
                                        </i>
                                        Sermorelin-injectable
                                      </td>
                                      <td _ngcontent-oko-c373 className="text-end w-25">
                                        <span _ngcontent-oko-c373 className="badge-outline">
                                          1 Daily
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </div>
                              <div _ngcontent-oko-c373 className="text-center p-t-20">
                                <button _ngcontent-oko-c373 className="mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base" color="primary" mat-stroked-button>
                                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                  </span>
                                  <span className="mdc-button__label">
                                    Report Adverse Effect
                                  </span>
                                  <span className="mat-mdc-focus-indicator"> </span>
                                  <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                  </span>
                                  <span className="mat-mdc-button-touch-target"> </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c373 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div _ngcontent-oko-c373 className="plain-card">
                            <div _ngcontent-oko-c373 className="card-inner">
                              <h6 _ngcontent-oko-c373 className="tx-primary m-b-15">
                                New Admission Report
                              </h6>
                              <div _ngcontent-oko-c373 className="row mb-2">
                                <div _ngcontent-oko-c373 className="col-4">
                                  <label _ngcontent-oko-c373 className="font-14">
                                    Today
                                  </label>
                                  <h4 _ngcontent-oko-c373>
                                    105
                                    <i _ngcontent-oko-c373 className="material-icons col-green">
                                      trending_up
                                    </i>
                                  </h4>
                                </div>
                                <div _ngcontent-oko-c373 className="col-4">
                                  <label _ngcontent-oko-c373 className="font-14">
                                    This Week
                                  </label>
                                  <h4 _ngcontent-oko-c373>
                                    825
                                    <i _ngcontent-oko-c373 className="material-icons col-orange">
                                      trending_down
                                    </i>
                                  </h4>
                                </div>
                                <div _ngcontent-oko-c373 className="col-4">
                                  <label _ngcontent-oko-c373 className="font-14">
                                    This Month
                                  </label>
                                  <h4 _ngcontent-oko-c373>
                                    22,067
                                    <i _ngcontent-oko-c373 className="material-icons col-green">
                                      trending_up
                                    </i>
                                  </h4>
                                </div>
                              </div>
                              <div _ngcontent-oko-c373 className="progress shadow-style mb-2 mt-3">
                                <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={70} className="progress-bar l-bg-green width-per-70" role="progressbar">
                                  70%
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c373 className="plain-card mt-4">
                            <div _ngcontent-oko-c373 className="card-inner">
                              <h6 _ngcontent-oko-c373 className="tx-primary m-b-15">
                                Fees Collection Report
                              </h6>
                              <div _ngcontent-oko-c373 className="row mb-2">
                                <div _ngcontent-oko-c373 className="col-4">
                                  <label _ngcontent-oko-c373 className="font-14">
                                    Today
                                  </label>
                                  <h4 _ngcontent-oko-c373>
                                    $147
                                    <i _ngcontent-oko-c373 className="material-icons col-orange">
                                      trending_down
                                    </i>
                                  </h4>
                                </div>
                                <div _ngcontent-oko-c373 className="col-4">
                                  <label _ngcontent-oko-c373 className="font-14">
                                    This Week
                                  </label>
                                  <h4 _ngcontent-oko-c373>
                                    $968
                                    <i _ngcontent-oko-c373 className="material-icons col-green">
                                      trending_up
                                    </i>
                                  </h4>
                                </div>
                                <div _ngcontent-oko-c373 className="col-4">
                                  <label _ngcontent-oko-c373 className="font-14">
                                    This Month
                                  </label>
                                  <h4 _ngcontent-oko-c373>
                                    $1,147
                                    <i _ngcontent-oko-c373 className="material-icons col-orange">
                                      trending_down
                                    </i>
                                  </h4>
                                </div>
                              </div>
                              <div _ngcontent-oko-c373 className="progress shadow-style mb-2 mt-3">
                                <div _ngcontent-oko-c373 aria-valuemax={100} aria-valuemin={0} aria-valuenow={50} className="progress-bar l-bg-red width-per-50" role="progressbar">
                                  50%
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