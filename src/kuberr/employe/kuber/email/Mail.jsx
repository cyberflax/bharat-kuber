import React, { useState } from "react";
import "../../kuber/madhav/Madhav.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import a3 from "../img/a3.png"
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


export default function AdminMail() {
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
                      <div _ngcontent-oko-c367 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c367 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Read
                                  </h4>
                                </div>
                              </div>
                              <div _ngcontent-oko-c141 className="col-6">
                                <ul _ngcontent-oko-c141 className="breadcrumb-list">
                                  <li _ngcontent-oko-c141 className="breadcrumb-item bcrumb-1">
                                    <a _ngcontent-oko-c141 href="javascript:void(0)/admin/dashboard/main">
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
                                 
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Read
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c367 className="row">
                        <div _ngcontent-oko-c367 className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                          <div _ngcontent-oko-c367 className="card">
                            <div _ngcontent-oko-c367 className="body">
                              <div _ngcontent-oko-c367 id="mail-nav">
                                <button _ngcontent-oko-c367 className="btn btn-success waves-effect m-b-15" type="button">
                                  COMPOSE
                                </button>
                                <ul _ngcontent-oko-c367 id="mail-folders">
                                  <li _ngcontent-oko-c367 className="active">
                                    <a _ngcontent-oko-c367 href="inbox.html" title="Inbox">
                                      Inbox
                                      <span _ngcontent-oko-c367 className="badge bg-orange">
                                        6
                                      </span>
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)" title="Sent">
                                      Sent
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)" title="Draft">
                                      Draft
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)" title="Bin">
                                      Bin
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)" title="Important">
                                      Important
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)" title="Starred">
                                      Starred
                                    </a>
                                  </li>
                                </ul>
                                <h5 _ngcontent-oko-c367 className="b-b p-10 text-strong">
                                  Labels
                                </h5>
                                <ul _ngcontent-oko-c367 id="mail-labels">
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)">
                                      <i _ngcontent-oko-c367 className="material-icons col-red">
                                        local_offer
                                      </i>
                                      Family
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="">
                                      <i _ngcontent-oko-c367 className="material-icons col-blue">
                                        local_offer
                                      </i>
                                      Work
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)">
                                      <i _ngcontent-oko-c367 className="material-icons col-orange">
                                        local_offer
                                      </i>
                                      Shop
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)">
                                      <i _ngcontent-oko-c367 className="material-icons col-cyan">
                                        local_offer
                                      </i>
                                      Themeforest
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)">
                                      <i _ngcontent-oko-c367 className="material-icons col-blue">
                                        local_offer
                                      </i>
                                      Google
                                    </a>
                                  </li>
                                </ul>
                                <h5 _ngcontent-oko-c367 className="b-b p-10 text-strong">
                                  Online
                                </h5>
                                <ul _ngcontent-oko-c367 className="online-user" id="online-offline">
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)">
                                      <i _ngcontent-oko-c367 className="material-icons col-green" title="Online">
                                        brightness_1
                                      </i>
                                      Sachin
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)">
                                      <i _ngcontent-oko-c367 className="material-icons col-indigo" title="Off Line">
                                        brightness_1
                                      </i>
                                      John Smith
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)">
                                      <i _ngcontent-oko-c367 className="material-icons col-orange" title="Away">
                                        brightness_1
                                      </i>
                                      Askay
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)">
                                      <i _ngcontent-oko-c367 className="material-icons col-indigo" title="Off Line">
                                        brightness_1
                                      </i>
                                      Dhavan
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c367>
                                    <a _ngcontent-oko-c367 href="javascript:void(0)">
                                      <i _ngcontent-oko-c367 className="material-icons col-indigo" title="Off Line">
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
                        <div _ngcontent-oko-c367 className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                          <div _ngcontent-oko-c367 className="card">
                            <div _ngcontent-oko-c367 className="boxs mail_listing">
                              <div _ngcontent-oko-c367 className="inbox-body no-pad">
                                <section _ngcontent-oko-c367 className="mail-list">
                                  <div _ngcontent-oko-c367 className="mail-sender">
                                    <div _ngcontent-oko-c367 className="mail-heading">
                                      <h4 _ngcontent-oko-c367 className="vew-mail-header">
                                        <b _ngcontent-oko-c367>
                                          Hi Dear, How are you?
                                        </b>
                                      </h4>
                                    </div>
                                    <hr _ngcontent-oko-c367 />
                                    <div _ngcontent-oko-c367 className="d-flex mb-4">
                                      <a _ngcontent-oko-c367 className="table-img m-r-15" href="javascript:void(0)">
                                        <img _ngcontent-oko-c367 alt src="../assets/images/user/user2.jpg" />
                                      </a>
                                      <div _ngcontent-oko-c367 className="flex-grow-1">
                                        <span _ngcontent-oko-c367 className="date float-end">
                                          4:15AM 04 April 2017
                                        </span>
                                        <h4 _ngcontent-oko-c367 className="text-primary">
                                          Sarah Smith
                                        </h4>
                                        <small _ngcontent-oko-c367 className="text-muted">
                                          From: sarah@example.com
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                  <div _ngcontent-oko-c367 className="view-mail">
                                    <p _ngcontent-oko-c367>
                                      Donec ultrices faucibus rutrum. Phasellus
                                      sodales vulputate urna, vel accumsan augue
                                      egestas ac. Donec vitae leo at sem lobortis
                                      porttitor eu consequat risus. Mauris sed congue
                                      orci. Donec ultrices faucibus rutrum. Phasellus
                                      sodales vulputate urna, vel accumsan augue
                                      egestas ac. Donec vitae leo at sem lobortis
                                      porttitor eu consequat risus. Mauris sed congue
                                      orci. Donec ultrices faucibus rutrum. Phasellus
                                      sodales vulputate urna, vel accumsan augue
                                      egestas ac. Donec vitae leo at sem lobortis
                                      porttitor eu consequat risus. Mauris sed congue
                                      orci.
                                    </p>
                                    <p _ngcontent-oko-c367>
                                      Porttitor eu consequat risus.
                                      <a _ngcontent-oko-c367 href="javascript:void(0)">
                                        Mauris sed congue orci. Donec ultrices
                                        faucibus rutrum
                                      </a>
                                      . Phasellus sodales vulputate urna, vel accumsan
                                      augue egestas ac. Donec vitae leo at sem
                                      lobortis porttitor eu consequat risus. Mauris
                                      sed congue orci. Donec ultrices faucibus rutrum.
                                      Phasellus sodales vulputate urna, vel accumsan
                                      augue egestas ac. Donec vitae leo at sem
                                      lobortis porttitor eu consequat risus. Mauris
                                      sed congue orci.
                                    </p>
                                    <p _ngcontent-oko-c367>
                                      Sodales
                                      <a _ngcontent-oko-c367 href="javascript:void(0)">
                                        vulputate urna, vel accumsan augue egestas ac
                                      </a>
                                      . Donec vitae leo at sem lobortis porttitor eu
                                      consequat risus. Mauris sed congue orci. Donec
                                      ultrices faucibus rutrum. Phasellus sodales
                                      vulputate urna, vel accumsan augue egestas ac.
                                      Donec vitae leo at sem lobortis porttitor eu
                                      consequat risus. Mauris sed congue orci.
                                    </p>
                                  </div>
                                  <div _ngcontent-oko-c367 className="attachment-mail">
                                    <p _ngcontent-oko-c367>
                                      <span _ngcontent-oko-c367>
                                        <i _ngcontent-oko-c367 className="fa fa-paperclip">
                                        </i>
                                        3 attachments —
                                      </span>
                                      <a _ngcontent-oko-c367 href="javascript:void(0)">
                                        Download all attachments
                                      </a>
                                      |
                                      <a _ngcontent-oko-c367 href="javascript:void(0)">
                                        View all images
                                      </a>
                                    </p>
                                    <div _ngcontent-oko-c367 className="row">
                                      <div _ngcontent-oko-c367 className="col-md-2">
                                        <a _ngcontent-oko-c367 href="javascript:void(0)">
                                          <img _ngcontent-oko-c367 alt="attachment" className="img-thumbnail img-responsive" src="../../assets/images/user/user2.jpg" />
                                        </a>
                                        <a _ngcontent-oko-c367 className="name" href="javascript:void(0)">
                                          IMG_001.jpg
                                          <span _ngcontent-oko-c367> 20KB </span>
                                        </a>
                                      </div>
                                      <div _ngcontent-oko-c367 className="col-md-2">
                                        <a _ngcontent-oko-c367 href="javascript:void(0)">
                                          <img _ngcontent-oko-c367 alt="attachment" className="img-thumbnail img-responsive" src="../../assets/images/user/user1.jpg" />
                                        </a>
                                        <a _ngcontent-oko-c367 className="name" href="javascript:void(0)">
                                          IMG_002.jpg
                                          <span _ngcontent-oko-c367> 22KB </span>
                                        </a>
                                      </div>
                                      <div _ngcontent-oko-c367 className="col-md-2">
                                        <a _ngcontent-oko-c367 href="javascript:void(0)">
                                          <img _ngcontent-oko-c367 alt="attachment" className="img-thumbnail img-responsive" src="../../assets/images/user/user3.jpg" />
                                        </a>
                                        <a _ngcontent-oko-c367 className="name" href="javascript:void(0)">
                                          IMG_003.jpg
                                          <span _ngcontent-oko-c367> 28KB </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div _ngcontent-oko-c367 className="replyBox m-t-20">
                                    <p _ngcontent-oko-c367 className="p-b-20">
                                      click here to
                                      <a _ngcontent-oko-c367 href="javascript:void(0)"> Reply </a>
                                      or
                                      <a _ngcontent-oko-c367 href="javascript:void(0)"> Forward </a>
                                    </p>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  

    </>
  );
}
