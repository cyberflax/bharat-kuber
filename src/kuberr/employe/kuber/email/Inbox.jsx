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


export default function AdminInbox() {
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
                              <img _ngcontent-hni-c131 className="ng-star-inserted" height={16} src="../../assets/images/flags/us.jpg" />
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

                        <img _ngcontent-hni-c131 alt="" src="../../assets/images/logo.png" />
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
                  <Dropdown.Item ><Link to="/" className='link1'> Components</Link ></Dropdown.Item>
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






            </Accordion>
            <div className="dash-item">
              <img className='img11' src={a31} alt="dash" /><Link to="/logout" className="adash">Logout</Link>
            </div>
          
        </div>
      </div>
    </div>
 <div _ngcontent-oko-c239 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>
                      <div _ngcontent-oko-c365 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c365 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Inbox
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
                                    Email
                                  </li>
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Inbox
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c365 className="row">
                        <div _ngcontent-oko-c365 className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                          <div _ngcontent-oko-c365 className="card">
                            <div _ngcontent-oko-c365 className="body">
                              <div _ngcontent-oko-c365 id="mail-nav">
                                <button _ngcontent-oko-c365 className="btn btn-success waves-effect m-b-15" type="button">
                                  COMPOSE
                                </button>
                                <ul _ngcontent-oko-c365 id="mail-folders">
                                  <li _ngcontent-oko-c365 className="active">
                                    <a _ngcontent-oko-c365 title="Inbox">
                                      Inbox
                                      <span _ngcontent-oko-c365 className="badge bg-orange">
                                        6
                                      </span>
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)" title="Sent">
                                      Sent
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)" title="Draft">
                                      Draft
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)" title="Bin">
                                      Bin
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)" title="Important">
                                      Important
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)" title="Starred">
                                      Starred
                                    </a>
                                  </li>
                                </ul>
                                <h5 _ngcontent-oko-c365 className="b-b p-10 text-strong">
                                  Labels
                                </h5>
                                <ul _ngcontent-oko-c365 id="mail-labels">
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)">
                                      <i _ngcontent-oko-c365 className="material-icons col-red">
                                        local_offer
                                      </i>
                                      Family
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)">
                                      <i _ngcontent-oko-c365 className="material-icons col-blue">
                                        local_offer
                                      </i>
                                      Work
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)">
                                      <i _ngcontent-oko-c365 className="material-icons col-orange">
                                        local_offer
                                      </i>
                                      Shop
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)">
                                      <i _ngcontent-oko-c365 className="material-icons col-cyan">
                                        local_offer
                                      </i>
                                      Themeforest
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)">
                                      <i _ngcontent-oko-c365 className="material-icons col-blue">
                                        local_offer
                                      </i>
                                      Google
                                    </a>
                                  </li>
                                </ul>
                                <h5 _ngcontent-oko-c365 className="b-b p-10 text-strong">
                                  Online
                                </h5>
                                <ul _ngcontent-oko-c365 className="online-user" id="online-offline">
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)">
                                      <i _ngcontent-oko-c365 className="material-icons col-green" title="Online">
                                        brightness_1
                                      </i>
                                      Sachin
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)">
                                      <i _ngcontent-oko-c365 className="material-icons col-indigo" title="Off Line">
                                        brightness_1
                                      </i>
                                      John Smith
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)">
                                      <i _ngcontent-oko-c365 className="material-icons col-orange" title="Away">
                                        brightness_1
                                      </i>
                                      Askay
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)">
                                      <i _ngcontent-oko-c365 className="material-icons col-indigo" title="Off Line">
                                        brightness_1
                                      </i>
                                      Dhavan
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c365>
                                    <a _ngcontent-oko-c365 href="javascript:void(0)">
                                      <i _ngcontent-oko-c365 className="material-icons col-indigo" title="Off Line">
                                        brightness_1
                                      </i>
                                      Lee
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c365 className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                          <div _ngcontent-oko-c365 className="card">
                            <div _ngcontent-oko-c365 className="boxs mail_listing">
                              <div _ngcontent-oko-c365 className="inbox-center table-responsive">
                                <table _ngcontent-oko-c365 className="table table-hover">
                                  <thead _ngcontent-oko-c365>
                                    <tr _ngcontent-oko-c365>
                                      <th _ngcontent-oko-c365 className="text-center">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-151">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-151-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-151-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </th>
                                      <th _ngcontent-oko-c365 colSpan={3}>
                                        <div _ngcontent-oko-c365 className="inbox-header">
                                          <div _ngcontent-oko-c365 className="mail-option no-pad-left">
                                            <div _ngcontent-oko-c365 className="email-btn-group m-l-15">
                                              <button _ngcontent-oko-c365 aria-label="Example icon-button with a heart icon" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                </span>
                                                <mat-icon _ngcontent-oko-c365 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  keyboard_return
                                                </mat-icon>
                                                <span className="mat-mdc-focus-indicator">
                                                </span>
                                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                </span>
                                                <span className="mat-mdc-button-touch-target">
                                                </span>
                                              </button>
                                              <button _ngcontent-oko-c365 aria-label="Example icon-button with a heart icon" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                </span>
                                                <mat-icon _ngcontent-oko-c365 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  archive
                                                </mat-icon>
                                                <span className="mat-mdc-focus-indicator">
                                                </span>
                                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                </span>
                                                <span className="mat-mdc-button-touch-target">
                                                </span>
                                              </button>
                                              <button _ngcontent-oko-c365 aria-label="Example icon-button with a heart icon" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                </span>
                                                <mat-icon _ngcontent-oko-c365 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  error
                                                </mat-icon>
                                                <span className="mat-mdc-focus-indicator">
                                                </span>
                                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                </span>
                                                <span className="mat-mdc-button-touch-target">
                                                </span>
                                              </button>
                                              <button _ngcontent-oko-c365 aria-label="Example icon-button with a heart icon" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                </span>
                                                <mat-icon _ngcontent-oko-c365 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  delete
                                                </mat-icon>
                                                <span className="mat-mdc-focus-indicator">
                                                </span>
                                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                </span>
                                                <span className="mat-mdc-button-touch-target">
                                                </span>
                                              </button>
                                              <button _ngcontent-oko-c365 aria-label="Example icon-button with a heart icon" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                </span>
                                                <mat-icon _ngcontent-oko-c365 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  folder
                                                </mat-icon>
                                                <span className="mat-mdc-focus-indicator">
                                                </span>
                                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                </span>
                                                <span className="mat-mdc-button-touch-target">
                                                </span>
                                              </button>
                                              <button _ngcontent-oko-c365 aria-label="Example icon-button with a heart icon" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                </span>
                                                <mat-icon _ngcontent-oko-c365 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                  local_offer
                                                </mat-icon>
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
                                      </th>
                                      <th _ngcontent-oko-c365 className="hidden-xs" colSpan={2}>
                                        <div _ngcontent-oko-c365 className="float-end">
                                          <div _ngcontent-oko-c365 className="email-btn-group m-l-15">
                                            <button _ngcontent-oko-c365 aria-label="Example icon-button with a heart icon" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                              <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                              </span>
                                              <mat-icon _ngcontent-oko-c365 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                navigate_before
                                              </mat-icon>
                                              <span className="mat-mdc-focus-indicator">
                                              </span>
                                              <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                              </span>
                                              <span className="mat-mdc-button-touch-target">
                                              </span>
                                            </button>
                                            <button _ngcontent-oko-c365 aria-label="Example icon-button with a heart icon" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                              <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                              </span>
                                              <mat-icon _ngcontent-oko-c365 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                                navigate_next
                                              </mat-icon>
                                              <span className="mat-mdc-focus-indicator">
                                              </span>
                                              <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                              </span>
                                              <span className="mat-mdc-button-touch-target">
                                              </span>
                                            </button>
                                          </div>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody _ngcontent-oko-c365>
                                    <tr _ngcontent-oko-c365 className="unread">
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-152">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-152-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-152-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Nelson Lane
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-blue shadow-style m-r-10">
                                            Work
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        12:30 PM
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365 className="unread">
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-153">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-153-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-153-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons text-warning">
                                          star
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Kerry Mann
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 13
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365 className="unread">
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-154">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-154-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-154-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Adam Peters
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-red shadow-style m-r-10">
                                            Shopping
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 12
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-155">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-155-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-155-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Lula Reese
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-cyan shadow-style m-r-10">
                                            Family
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 12
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-156">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-156-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-156-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Nelson Lane
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-orange shadow-style m-r-10">
                                            Work
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 12
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-157">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-157-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-157-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons text-warning">
                                          star
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Kerry Mann
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 11
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-158">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-158-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-158-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Adam Peters
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-purple shadow-style m-r-10">
                                            Office
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 11
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-159">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-159-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-159-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Lula Reese
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-orange shadow-style m-r-10">
                                            Work
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 11
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-160">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-160-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-160-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Nelson Lane
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-blue shadow-style m-r-10">
                                            Work
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 10
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-161">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-161-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-161-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons text-warning">
                                          star
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Kerry Mann
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 10
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-162">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-162-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-162-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Adam Peters
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-green shadow-style m-r-10">
                                            Shopping
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 10
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-163">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-163-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-163-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Lula Reese
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-red shadow-style m-r-10">
                                            Work
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 09
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-164">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-164-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-164-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Nelson Lane
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-cyan shadow-style m-r-10">
                                            Work
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 09
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-165">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-165-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-165-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons text-warning">
                                          star
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Kerry Mann
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          Lorem ipsum perspiciatis unde omnis iste
                                          natus
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 09
                                      </td>
                                    </tr>
                                    <tr _ngcontent-oko-c365>
                                      <td _ngcontent-oko-c365 className="tbl-checkbox">
                                        <mat-checkbox _ngcontent-oko-c365 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-166">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-166-input" tabIndex={0} type="checkbox" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-166-input">
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          star_border
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        Adam Peters
                                      </td>
                                      <td _ngcontent-oko-c365 className="max-texts">
                                        <a _ngcontent-oko-c365 href="#/email/read-mail" routerlink="/email/read-mail">
                                          <span _ngcontent-oko-c365 className="badge col-green shadow-style m-r-10">
                                            Shopping
                                          </span>
                                          Lorem ipsum perspiciatis unde omnis
                                        </a>
                                      </td>
                                      <td _ngcontent-oko-c365 className="hidden-xs">
                                        <i _ngcontent-oko-c365 className="material-icons">
                                          attach_file
                                        </i>
                                      </td>
                                      <td _ngcontent-oko-c365 className="text-end">
                                        May 09
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div _ngcontent-oko-c365 className="row">
                                <div _ngcontent-oko-c365 className="col-sm-7">
                                  <p _ngcontent-oko-c365 className="p-15">
                                    Showing 1 - 15 of 200
                                  </p>
                                </div>
                                <div _ngcontent-oko-c365 className="col-sm-5 text-end">
                                  <div _ngcontent-oko-c365 className="float-end">
                                    <div _ngcontent-oko-c365 className="email-btn-group m-l-15">
                                      <button _ngcontent-oko-c365 aria-label="Example icon-button with a heart icon" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <mat-icon _ngcontent-oko-c365 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                          navigate_before
                                        </mat-icon>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                      <button _ngcontent-oko-c365 aria-label="Example icon-button with a heart icon" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <mat-icon _ngcontent-oko-c365 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                          navigate_next
                                        </mat-icon>
                                        <span className="mat-mdc-focus-indicator"> </span>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  
    </>
  );
}





