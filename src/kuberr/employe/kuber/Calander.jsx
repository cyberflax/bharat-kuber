import React, { useState } from "react";
import "../kuber/madhav/Madhav.css"

import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import a3 from "./img/a3.png"
import a1 from "./img/a1.png";
import a2 from "./img/a2.png";
import a4 from "./img/a4.jpg";
import a5 from "./img/a5.png";
import a6 from "./img/a6.png";
import a7 from "./img/a7.png";
import a8 from "./img/a8.png";
import a9 from "./img/a9.png";
import a10 from "./img/a10.png";
import a11 from "./img/a11.png";
import a12 from "./img/a12.png";
import a13 from "./img/a13.png";
import a14 from "./img/a14.png";
import a15 from "./img/a15.png";
import a16 from "./img/a16.png";
import a17 from "./img/a17.webp";
import a18 from "./img/a18.png";
import a26 from "./img/a26.png";
import a31 from "../dashboard/img/logout.png"



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  
} from "@fortawesome/free-solid-svg-icons";

export default function Calander() {
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
                             
         
    
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a2} /><p className="accord-p">Project</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Addproject" className='link1'>Add-project</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Allproject"className='link1'>All-project</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Estimate"className='link1'>Estimate</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/ProjectDetail"className='link1'>Project-Details</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="2" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a3} /><p className="accord-p">Employees</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Addemploye" className='link1'>Add-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Allemploye"className='link1'>All-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editemploye"className='link1'>Edite-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Employeprofile"className='link1'>Employe-Profile</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="3" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a4} /><p className="accord-p">Leave Management</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/LeaveRequest" className='link1'>All Leave Requests</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Leavesbalance"className='link1'>Leave Balance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Leavetype"className='link1'>Leave Types</Link ></Dropdown.Item>
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a5} /><p className="accord-p">Holidays</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allholiday" className='link1'>All Holidays</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addholiday"className='link1'>Add Holiday</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editholiday"className='link1'>Edit Holiday</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a6} /><p className="accord-p">Attendance</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Today" className='link1'>Today's Attendance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Employ"className='link1'>Employee Attendance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Attendance"className='link1'>Attendance Sheet</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a7} /><p className="accord-p">Clients</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allclient" className='link1'>All Clients</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addclient"className='link1'>Add Client</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editclient"className='link1'>Edit Client</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a8} /><p className="accord-p">Accounts</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allpayment" className='link1'>All Payments</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addpayment"className='link1'>Add Payment</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Invoice"className='link1'>Invoice</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a9} /><p className="accord-p">Payroll</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Employsalary" className='link1'>Employee Salary</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Payslip"className='link1'>Payslip</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a10} /><p className="accord-p">Leaders</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Leads" className='link1'> Leaders</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a11} /><p className="accord-p">Jobs</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Job" className='link1'>Jobs List</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Resumes"className='link1'>Resumes</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Candidate"className='link1'>Candidates</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Shortlist"className='link1'>Shortlist Candidates</Link ></Dropdown.Item>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a12} /><p className="accord-p"> Reports</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Leavereport" className='link1'>Leave Report</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Expense"className='link1'>Expense Report</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <div className="dash-item">
                <img className='img11' src={a13} alt="dash" /><Link to="/Calander" className="adashh">Calendar</Link>
              </div>

              <div className="dash-item">
                <img className='img11' src={a14} alt="dash" /><Link to="/AdminTask" className="adashh">Task</Link>
              </div>

              <div className="dash-item">
                <img className='img11' src={a15} alt="dash" /><Link to="/Contact1" className="adashh">Contacts</Link>
              </div>
      <Accordion.Item eventKey="15" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a16} /><p className="accord-p"> Email</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Inbox" className='link1'>Inbox</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Compose"className='link1'>Compose</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Mail"className='link1'> Read Email</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
     
      <Accordion.Item eventKey="16" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a18} /><p className="accord-p"> Widgets</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Chart1" className='link1'> Chart Widget</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Data1" className='link1'> Data Widget</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Components</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
     
   
     
     
    
      
     
              <Accordion.Item eventKey="17" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
              <Accordion.Header><img className='img1' alt="aseris" src={a26} /><p className="accord-p"> Authentication</p></Accordion.Header>
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
                      <div _ngcontent-oko-c354 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c354 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Calendar
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
                                    Calendar
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c354 className="row">
                        <div _ngcontent-oko-c354 className="col-md-12 col-sm-12">
                          <div _ngcontent-oko-c354 className="card">
                            <div _ngcontent-oko-c354 className="card-body">
                              <div _ngcontent-oko-c354 className="row">
                                <div _ngcontent-oko-c354 className="col-md-2 col-sm-12 p-l-30">
                                  <div _ngcontent-oko-c354 className="m-b-25">
                                    <button _ngcontent-oko-c354 className="mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" mat-raised-button>
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                      </span>
                                      <span className="mdc-button__label">
                                        Add Event
                                      </span>
                                      <span className="mat-mdc-focus-indicator"> </span>
                                      <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                      </span>
                                      <span className="mat-mdc-button-touch-target">
                                      </span>
                                    </button>
                                  </div>
                                  <p _ngcontent-oko-c354>My Calendars</p>
                                  <div _ngcontent-oko-c354 className="filter-container">
                                    <ul _ngcontent-oko-c354>
                                      <li _ngcontent-oko-c354 className="ng-star-inserted">
                                        <mat-checkbox _ngcontent-oko-c354 className="mat-mdc-checkbox mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-134">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-134-input" tabIndex={0} type="checkbox" defaultValue="Work" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-134-input">
                                              Work
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </li>
                                      <li _ngcontent-oko-c354 className="ng-star-inserted">
                                        <mat-checkbox _ngcontent-oko-c354 className="mat-mdc-checkbox mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-135">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-135-input" tabIndex={0} type="checkbox" defaultValue="Personal" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-135-input">
                                              Personal
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </li>
                                      <li _ngcontent-oko-c354 className="ng-star-inserted">
                                        <mat-checkbox _ngcontent-oko-c354 className="mat-mdc-checkbox mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-136">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-136-input" tabIndex={0} type="checkbox" defaultValue="Important" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-136-input">
                                              Important
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </li>
                                      <li _ngcontent-oko-c354 className="ng-star-inserted">
                                        <mat-checkbox _ngcontent-oko-c354 className="mat-mdc-checkbox mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-137">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-137-input" tabIndex={0} type="checkbox" defaultValue="Travel" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-137-input">
                                              Travel
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </li>
                                      <li _ngcontent-oko-c354 className="ng-star-inserted">
                                        <mat-checkbox _ngcontent-oko-c354 className="mat-mdc-checkbox mat-primary mat-mdc-checkbox-checked" color="primary" id="mat-mdc-checkbox-138">
                                          <div className="mdc-form-field">
                                            <div className="mdc-checkbox">
                                              <div className="mat-mdc-checkbox-touch-target" />
                                              <input aria-checked="true" className="mdc-checkbox__native-control mdc-checkbox--selected" id="mat-mdc-checkbox-138-input" tabIndex={0} type="checkbox" defaultValue="Friends" />
                                              <div className="mdc-checkbox__ripple" />
                                              <div className="mdc-checkbox__background">
                                                <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                  <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                                </svg>
                                                <div className="mdc-checkbox__mixedmark" />
                                              </div>
                                              <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                            </div>
                                            <label htmlFor="mat-mdc-checkbox-138-input">
                                              Friends
                                            </label>
                                          </div>
                                        </mat-checkbox>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c354 className="col-md-10 col-sm-12">
                                  <div _ngcontent-oko-c354 className="panel-body">
                                    <full-calendar _ngcontent-oko-c354 className="fc fc-media-screen fc-direction-ltr fc-theme-standard">
                                      <div className="fc-header-toolbar fc-toolbar fc-toolbar-ltr">
                                        <div className="fc-toolbar-chunk">
                                          <div className="fc-button-group">
                                            <button aria-pressed="false" className="fc-prev-button fc-button fc-button-primary" title="Previous month" type="button">
                                              <span className="fc-icon fc-icon-chevron-left">
                                              </span>
                                            </button>
                                            <button aria-pressed="false" className="fc-next-button fc-button fc-button-primary" title="Next month" type="button">
                                              <span className="fc-icon fc-icon-chevron-right">
                                              </span>
                                            </button>
                                          </div>
                                          <button aria-pressed="false" className="fc-today-button fc-button fc-button-primary" disabled title="This month" type="button">
                                            today
                                          </button>
                                        </div>
                                        <div className="fc-toolbar-chunk">
                                          <h2 className="fc-toolbar-title" id="fc-dom-1">
                                            March 2023
                                          </h2>
                                        </div>
                                        <div className="fc-toolbar-chunk">
                                          <div className="fc-button-group">
                                            <button aria-pressed="true" className="fc-dayGridMonth-button fc-button fc-button-primary fc-button-active" title="month view" type="button">
                                              month
                                            </button>
                                            <button aria-pressed="false" className="fc-timeGridWeek-button fc-button fc-button-primary" title="week view" type="button">
                                              week
                                            </button>
                                            <button aria-pressed="false" className="fc-timeGridDay-button fc-button fc-button-primary" title="day view" type="button">
                                              day
                                            </button>
                                            <button aria-pressed="false" className="fc-listWeek-button fc-button fc-button-primary" title="list view" type="button">
                                              list
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div aria-labelledby="fc-dom-1" className="fc-view-harness fc-view-harness-active" style={{"height":"566.667px"}}>
                                        <div className="fc-dayGridMonth-view fc-view fc-daygrid">
                                          <table className="fc-scrollgrid fc-scrollgrid-liquid" role="grid">
                                            <thead role="rowgroup">
                                              <tr className="fc-scrollgrid-section fc-scrollgrid-section-header" role="presentation">
                                                <th role="presentation">
                                                  <div className="fc-scroller-harness">
                                                    <div className="fc-scroller" style={{"overflow":"hidden"}}>
                                                      <table className="fc-col-header" role="presentation" style={{"width":"743px"}}>
                                                        <colgroup />
                                                        <thead role="presentation">
                                                          <tr role="row">
                                                            <th className="fc-col-header-cell fc-day fc-day-sun" role="columnheader">
                                                              <div className="fc-scrollgrid-sync-inner">
                                                                <a aria-label="Sunday" className="fc-col-header-cell-cushion">
                                                                  Sun
                                                                </a>
                                                              </div>
                                                            </th>
                                                            <th className="fc-col-header-cell fc-day fc-day-mon" role="columnheader">
                                                              <div className="fc-scrollgrid-sync-inner">
                                                                <a aria-label="Monday" className="fc-col-header-cell-cushion">
                                                                  Mon
                                                                </a>
                                                              </div>
                                                            </th>
                                                            <th className="fc-col-header-cell fc-day fc-day-tue" role="columnheader">
                                                              <div className="fc-scrollgrid-sync-inner">
                                                                <a aria-label="Tuesday" className="fc-col-header-cell-cushion">
                                                                  Tue
                                                                </a>
                                                              </div>
                                                            </th>
                                                            <th className="fc-col-header-cell fc-day fc-day-wed" role="columnheader">
                                                              <div className="fc-scrollgrid-sync-inner">
                                                                <a aria-label="Wednesday" className="fc-col-header-cell-cushion">
                                                                  Wed
                                                                </a>
                                                              </div>
                                                            </th>
                                                            <th className="fc-col-header-cell fc-day fc-day-thu" role="columnheader">
                                                              <div className="fc-scrollgrid-sync-inner">
                                                                <a aria-label="Thursday" className="fc-col-header-cell-cushion">
                                                                  Thu
                                                                </a>
                                                              </div>
                                                            </th>
                                                            <th className="fc-col-header-cell fc-day fc-day-fri" role="columnheader">
                                                              <div className="fc-scrollgrid-sync-inner">
                                                                <a aria-label="Friday" className="fc-col-header-cell-cushion">
                                                                  Fri
                                                                </a>
                                                              </div>
                                                            </th>
                                                            <th className="fc-col-header-cell fc-day fc-day-sat" role="columnheader">
                                                              <div className="fc-scrollgrid-sync-inner">
                                                                <a aria-label="Saturday" className="fc-col-header-cell-cushion">
                                                                  Sat
                                                                </a>
                                                              </div>
                                                            </th>
                                                          </tr>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                  </div>
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody role="rowgroup">
                                              <tr className="fc-scrollgrid-section fc-scrollgrid-section-body fc-scrollgrid-section-liquid" role="presentation">
                                                <td role="presentation">
                                                  <div className="fc-scroller-harness fc-scroller-harness-liquid">
                                                    <div className="fc-scroller fc-scroller-liquid-absolute" style={{"overflow":"hidden auto"}}>
                                                      <div className="fc-daygrid-body fc-daygrid-body-balanced" style={{"width":"743px"}}>
                                                        <table className="fc-scrollgrid-sync-table" role="presentation" style={{"width":"743px","height":"489px"}}>
                                                          <colgroup />
                                                          <tbody role="presentation">
                                                            <tr role="row">
                                                              <td aria-labelledby="fc-dom-2" className="fc-day fc-day-sun fc-day-past fc-day-other fc-daygrid-day" data-date="2023-02-26" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="February 26, 2023" className="fc-daygrid-day-number" id="fc-dom-2">
                                                                      26
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-4" className="fc-day fc-day-mon fc-day-past fc-day-other fc-daygrid-day" data-date="2023-02-27" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="February 27, 2023" className="fc-daygrid-day-number" id="fc-dom-4">
                                                                      27
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-6" className="fc-day fc-day-tue fc-day-past fc-day-other fc-daygrid-day" data-date="2023-02-28" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="February 28, 2023" className="fc-daygrid-day-number" id="fc-dom-6">
                                                                      28
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-8" className="fc-day fc-day-wed fc-day-past fc-daygrid-day" data-date="2023-03-01" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 1, 2023" className="fc-daygrid-day-number" id="fc-dom-8">
                                                                      1
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-event-harness" style={{"margin-top":"0px"}}>
                                                                      <a className="fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past fc-event-success fc-daygrid-event fc-daygrid-dot-event" tabIndex={0}>
                                                                        <div className="fc-daygrid-event-dot" />
                                                                        <div className="fc-event-time">
                                                                          12a
                                                                        </div>
                                                                        <div className="fc-event-title">
                                                                          All Day
                                                                          Event
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-10" className="fc-day fc-day-thu fc-day-past fc-daygrid-day" data-date="2023-03-02" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 2, 2023" className="fc-daygrid-day-number" id="fc-dom-10">
                                                                      2
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-12" className="fc-day fc-day-fri fc-day-past fc-daygrid-day" data-date="2023-03-03" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 3, 2023" className="fc-daygrid-day-number" id="fc-dom-12">
                                                                      3
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-14" className="fc-day fc-day-sat fc-day-past fc-daygrid-day" data-date="2023-03-04" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 4, 2023" className="fc-daygrid-day-number" id="fc-dom-14">
                                                                      4
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                            </tr>
                                                            <tr role="row">
                                                              <td aria-labelledby="fc-dom-16" className="fc-day fc-day-sun fc-day-past fc-daygrid-day" data-date="2023-03-05" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 5, 2023" className="fc-daygrid-day-number" id="fc-dom-16">
                                                                      5
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-18" className="fc-day fc-day-mon fc-day-past fc-daygrid-day" data-date="2023-03-06" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 6, 2023" className="fc-daygrid-day-number" id="fc-dom-18">
                                                                      6
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-20" className="fc-day fc-day-tue fc-day-past fc-daygrid-day" data-date="2023-03-07" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 7, 2023" className="fc-daygrid-day-number" id="fc-dom-20">
                                                                      7
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-22" className="fc-day fc-day-wed fc-day-past fc-daygrid-day" data-date="2023-03-08" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 8, 2023" className="fc-daygrid-day-number" id="fc-dom-22">
                                                                      8
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-24" className="fc-day fc-day-thu fc-day-past fc-daygrid-day" data-date="2023-03-09" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 9, 2023" className="fc-daygrid-day-number" id="fc-dom-24">
                                                                      9
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-26" className="fc-day fc-day-fri fc-day-past fc-daygrid-day" data-date="2023-03-10" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 10, 2023" className="fc-daygrid-day-number" id="fc-dom-26">
                                                                      10
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-28" className="fc-day fc-day-sat fc-day-past fc-daygrid-day" data-date="2023-03-11" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 11, 2023" className="fc-daygrid-day-number" id="fc-dom-28">
                                                                      11
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                            </tr>
                                                            <tr role="row">
                                                              <td aria-labelledby="fc-dom-30" className="fc-day fc-day-sun fc-day-past fc-daygrid-day" data-date="2023-03-12" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 12, 2023" className="fc-daygrid-day-number" id="fc-dom-30">
                                                                      12
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-32" className="fc-day fc-day-mon fc-day-past fc-daygrid-day" data-date="2023-03-13" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 13, 2023" className="fc-daygrid-day-number" id="fc-dom-32">
                                                                      13
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-34" className="fc-day fc-day-tue fc-day-past fc-daygrid-day" data-date="2023-03-14" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 14, 2023" className="fc-daygrid-day-number" id="fc-dom-34">
                                                                      14
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-36" className="fc-day fc-day-wed fc-day-past fc-daygrid-day" data-date="2023-03-15" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 15, 2023" className="fc-daygrid-day-number" id="fc-dom-36">
                                                                      15
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-38" className="fc-day fc-day-thu fc-day-past fc-daygrid-day" data-date="2023-03-16" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 16, 2023" className="fc-daygrid-day-number" id="fc-dom-38">
                                                                      16
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-40" className="fc-day fc-day-fri fc-day-past fc-daygrid-day" data-date="2023-03-17" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 17, 2023" className="fc-daygrid-day-number" id="fc-dom-40">
                                                                      17
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-42" className="fc-day fc-day-sat fc-day-past fc-daygrid-day" data-date="2023-03-18" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 18, 2023" className="fc-daygrid-day-number" id="fc-dom-42">
                                                                      18
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                            </tr>
                                                            <tr role="row">
                                                              <td aria-labelledby="fc-dom-44" className="fc-day fc-day-sun fc-day-past fc-daygrid-day" data-date="2023-03-19" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 19, 2023" className="fc-daygrid-day-number" id="fc-dom-44">
                                                                      19
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-46" className="fc-day fc-day-mon fc-day-past fc-daygrid-day" data-date="2023-03-20" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 20, 2023" className="fc-daygrid-day-number" id="fc-dom-46">
                                                                      20
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-48" className="fc-day fc-day-tue fc-day-past fc-daygrid-day" data-date="2023-03-21" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 21, 2023" className="fc-daygrid-day-number" id="fc-dom-48">
                                                                      21
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-50" className="fc-day fc-day-wed fc-day-past fc-daygrid-day" data-date="2023-03-22" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 22, 2023" className="fc-daygrid-day-number" id="fc-dom-50">
                                                                      22
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-52" className="fc-day fc-day-thu fc-day-past fc-daygrid-day" data-date="2023-03-23" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 23, 2023" className="fc-daygrid-day-number" id="fc-dom-52">
                                                                      23
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-54" className="fc-day fc-day-fri fc-day-past fc-daygrid-day" data-date="2023-03-24" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 24, 2023" className="fc-daygrid-day-number" id="fc-dom-54">
                                                                      24
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-56" className="fc-day fc-day-sat fc-day-past fc-daygrid-day" data-date="2023-03-25" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 25, 2023" className="fc-daygrid-day-number" id="fc-dom-56">
                                                                      25
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                            </tr>
                                                            <tr role="row">
                                                              <td aria-labelledby="fc-dom-58" className="fc-day fc-day-sun fc-day-past fc-daygrid-day" data-date="2023-03-26" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 26, 2023" className="fc-daygrid-day-number" id="fc-dom-58">
                                                                      26
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-event-harness fc-daygrid-event-harness-abs" style={{"top":"0px","left":"0px","right":"-106.135px"}}>
                                                                      <a className="fc-event fc-event-draggable fc-event-start fc-event-end fc-event-past fc-event-danger fc-daygrid-event fc-daygrid-block-event fc-h-event" tabIndex={0}>
                                                                        <div className="fc-event-main">
                                                                          <div className="fc-event-main-frame">
                                                                            <div className="fc-event-time">
                                                                              10a
                                                                            </div>
                                                                            <div className="fc-event-title-container">
                                                                              <div className="fc-event-title fc-sticky">
                                                                                Go to
                                                                                Delhi
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"22px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-60" className="fc-day fc-day-mon fc-day-past fc-daygrid-day" data-date="2023-03-27" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 27, 2023" className="fc-daygrid-day-number" id="fc-dom-60">
                                                                      27
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"22px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-62" className="fc-day fc-day-tue fc-day-past fc-daygrid-day" data-date="2023-03-28" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 28, 2023" className="fc-daygrid-day-number" id="fc-dom-62">
                                                                      28
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-64" className="fc-day fc-day-wed fc-day-past fc-daygrid-day" data-date="2023-03-29" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 29, 2023" className="fc-daygrid-day-number" id="fc-dom-64">
                                                                      29
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-66" className="fc-day fc-day-thu fc-day-past fc-daygrid-day" data-date="2023-03-30" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 30, 2023" className="fc-daygrid-day-number" id="fc-dom-66">
                                                                      30
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-68" className="fc-day fc-day-fri fc-day-today fc-daygrid-day" data-date="2023-03-31" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="March 31, 2023" className="fc-daygrid-day-number" id="fc-dom-68">
                                                                      31
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-event-harness" style={{"margin-top":"0px"}}>
                                                                      <a className="fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-today fc-event-primary fc-daygrid-event fc-daygrid-dot-event" tabIndex={0}>
                                                                        <div className="fc-daygrid-event-dot" />
                                                                        <div className="fc-event-time">
                                                                          11a
                                                                        </div>
                                                                        <div className="fc-event-title">
                                                                          Lunch
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-70" className="fc-day fc-day-sat fc-day-future fc-day-other fc-daygrid-day" data-date="2023-04-01" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="April 1, 2023" className="fc-daygrid-day-number" id="fc-dom-70">
                                                                      1
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                            </tr>
                                                            <tr role="row">
                                                              <td aria-labelledby="fc-dom-72" className="fc-day fc-day-sun fc-day-future fc-day-other fc-daygrid-day" data-date="2023-04-02" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="April 2, 2023" className="fc-daygrid-day-number" id="fc-dom-72">
                                                                      2
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-event-harness" style={{"margin-top":"0px"}}>
                                                                      <a className="fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future fc-event-success fc-daygrid-event fc-daygrid-dot-event" tabIndex={0}>
                                                                        <div className="fc-daygrid-event-dot" />
                                                                        <div className="fc-event-time">
                                                                          12:30p
                                                                        </div>
                                                                        <div className="fc-event-title">
                                                                          Meeting
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-74" className="fc-day fc-day-mon fc-day-future fc-day-other fc-daygrid-day" data-date="2023-04-03" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="April 3, 2023" className="fc-daygrid-day-number" id="fc-dom-74">
                                                                      3
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-76" className="fc-day fc-day-tue fc-day-future fc-day-other fc-daygrid-day" data-date="2023-04-04" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="April 4, 2023" className="fc-daygrid-day-number" id="fc-dom-76">
                                                                      4
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-event-harness" style={{"margin-top":"0px"}}>
                                                                      <a className="fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future fc-event-warning fc-daygrid-event fc-daygrid-dot-event" tabIndex={0}>
                                                                        <div className="fc-daygrid-event-dot" />
                                                                        <div className="fc-event-time">
                                                                          12p
                                                                        </div>
                                                                        <div className="fc-event-title">
                                                                          Shopping
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-78" className="fc-day fc-day-wed fc-day-future fc-day-other fc-daygrid-day" data-date="2023-04-05" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="April 5, 2023" className="fc-daygrid-day-number" id="fc-dom-78">
                                                                      5
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-80" className="fc-day fc-day-thu fc-day-future fc-day-other fc-daygrid-day" data-date="2023-04-06" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="April 6, 2023" className="fc-daygrid-day-number" id="fc-dom-80">
                                                                      6
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-event-harness fc-daygrid-event-harness-abs" style={{"top":"0px","left":"0px","right":"-106.135px"}}>
                                                                      <a className="fc-event fc-event-draggable fc-event-start fc-event-end fc-event-future fc-event-info fc-daygrid-event fc-daygrid-block-event fc-h-event" tabIndex={0}>
                                                                        <div className="fc-event-main">
                                                                          <div className="fc-event-main-frame">
                                                                            <div className="fc-event-time">
                                                                              10a
                                                                            </div>
                                                                            <div className="fc-event-title-container">
                                                                              <div className="fc-event-title fc-sticky">
                                                                                Get To
                                                                                Gather
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </a>
                                                                    </div>
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"22px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-82" className="fc-day fc-day-fri fc-day-future fc-day-other fc-daygrid-day" data-date="2023-04-07" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="April 7, 2023" className="fc-daygrid-day-number" id="fc-dom-82">
                                                                      7
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"22px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                              <td aria-labelledby="fc-dom-84" className="fc-day fc-day-sat fc-day-future fc-day-other fc-daygrid-day" data-date="2023-04-08" role="gridcell">
                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                  <div className="fc-daygrid-day-top">
                                                                    <a aria-label="April 8, 2023" className="fc-daygrid-day-number" id="fc-dom-84">
                                                                      8
                                                                    </a>
                                                                  </div>
                                                                  <div className="fc-daygrid-day-events">
                                                                    <div className="fc-daygrid-day-bottom" style={{"margin-top":"0px"}} />
                                                                  </div>
                                                                  <div className="fc-daygrid-day-bg" />
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </full-calendar>
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





