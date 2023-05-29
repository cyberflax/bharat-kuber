import React, { useState } from "react";
import "../../kuber/madhav/Madhav.css"
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
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
import a17 from "../img/a17.webp";
import a18 from "../img/a18.png";
import a26 from "../img/a26.png";
import edit from "../img/edit.png"
import dele from "../img/dele.png"
import a31 from "../../dashboard/img/logout.png"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  
} from "@fortawesome/free-solid-svg-icons";


export default function Allproject() {
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
        <Accordion.Header><img className='img1' alt="aseris" src={a9}/>Payroll</Accordion.Header>
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
                <Accordion.Header><img className='img1' alt="aseris" src={a12} /> <p className="accord-p">Reports</p></Accordion.Header>
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
      <Accordion.Item eventKey="15" style={{margin:"auto",overflow:"hidden",width:"92%"}}>
                <Accordion.Header><img className='img1' alt="aseris" src={a16} /><p className="accord-p"> Email</p></Accordion.Header>
        <Accordion.Body>
                  <Dropdown.Item ><Link to="/AdminInbox" className='link1'>Inbox</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Admincompose"className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/AdminMail"className='link1'> Read Email</Link ></Dropdown.Item>
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
     
   
     
     
    
      
     
      
              <Accordion.Header><img className='img1' alt="aseris" src={a26} /><p className="accord-p"> Authentication</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Signin" className='link1'> Sign In</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Signup" className='link1'> Sign Up</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Forget" className='link1'> Forgot Password</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Locked" className='link1'> Locked</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Page404" className='link1'> 404 - Not Found</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Page500" className='link1'> 500 - Server Error</Link ></Dropdown.Item>
        </Accordion.Body>
      
      
      
      
              <div className="dash-item">
                <img className='img11' src={a31} alt="dash" /><Link to="/logout" className="adash">Logout</Link>
              </div>
    </Accordion>
          
        </div>
      </div>
    </div>
 <div _ngcontent-oko-c239 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>
  <div _ngcontent-oko-c239 className="block-header">
    <app-breadcrumb _ngcontent-oko-c239 _nghost-oko-c141>
      <div _ngcontent-oko-c141 className="breadcrumb-main">
        <div _ngcontent-oko-c141 className="row">
          <div _ngcontent-oko-c141 className="col-6">
            <div _ngcontent-oko-c141 className="breadcrumb-title">
              <h4 _ngcontent-oko-c141 className="page-title">
                All Projects
              </h4>
            </div>
          </div>
          <div _ngcontent-oko-c141 className="col-6">
            <ul _ngcontent-oko-c141 className="breadcrumb-list">
              <li _ngcontent-oko-c141 className="breadcrumb-item bcrumb-1">
                <a _ngcontent-oko-c141 href="/main">
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
                Projects
              </li>
              {/* */}
              <li _ngcontent-oko-c141 className="breadcrumb-item active">
                All Projects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </app-breadcrumb>
  </div>
  <div _ngcontent-oko-c239 className="row">
    <div _ngcontent-oko-c239 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div _ngcontent-oko-c239 className="card">
        <div _ngcontent-oko-c239 className="body">
          <div _ngcontent-oko-c239 className="wrapper">
            <nav _ngcontent-oko-c239 className="nav-main project-add-btn">
              <div _ngcontent-oko-c239 className="actions">
                
                {/* */}
              </div>
            </nav>
            <main _ngcontent-oko-c239 className="main">
              <app-board _ngcontent-oko-c239 _nghost-oko-c238>
                <div _ngcontent-oko-c238 className="board">
                  <div _ngcontent-oko-c238 className="list ng-star-inserted">
                    <div _ngcontent-oko-c238 className="header">
                      <div _ngcontent-oko-c238 className="title">
                        <h2 _ngcontent-oko-c238>
                          New Projects
                          {/* */}
                          {/* */}
                          {/* */}
                          {/* */}
                          {/* */}
                          {/* */}
                        </h2>
                        <div _ngcontent-oko-c238 className="count">
                          3 projects
                        </div>
                      </div>
                    </div>
                    <ul _ngcontent-oko-c238 cdkdroplist cdkdroplistsortingdisabled className="cdk-drop-list projects" id="NEWPROJECTS">
                      <li _ngcontent-oko-c238 cdkdrag className="cdk-drag project ng-star-inserted">
                        <h4 _ngcontent-oko-c238 className="project-title">
                          <span _ngcontent-oko-c238 className="material-icons-outlined project-icon">
                            task_alt
                          </span>
                          ERP System
                        </h4>
                        <small _ngcontent-oko-c238 className="block text-ellipsis m-b-15">
                          <span _ngcontent-oko-c238 className="text-xs">
                            12
                          </span>
                          <span _ngcontent-oko-c238 className="text-muted">
                            open tasks
                          </span>
                        </small>
                        <span _ngcontent-oko-c238 className="project-bedge project-type-Testing">
                          <div _ngcontent-oko-c238 className="pro-left">
                            {/* */}
                            {/* */}
                            {/* */}
                            Testing
                            {/* */}
                          </div>
                        </span>
                        <p _ngcontent-oko-c238 className="mt-3">
                          All the Lorem Ipsum generators on the
                          Internet tend to repeat necessary,
                          making this the first true generator on
                          the Internet.
                        </p>
                        <div _ngcontent-oko-c238 className="project-members  m-b-15"style={{marginLeft:"-2rem",width:"100%"}}>
                          <ul _ngcontent-oko-c238 className="team-members " >
                            <li _ngcontent-oko-c238 className="dropdown avatar-dropdown">
                              <div _ngcontent-oko-c238 className="row">
                                <div _ngcontent-oko-c238 className="col-10  pro-left mb-2">
                                  Created:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                    date_range
                                  </span>
                                  Jan 11, 2020
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team Leader:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  Jens Brincker
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Priority:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 mb-2 pro-lef project-priority--1">
                                  {/* */}
                                  {/* */}
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon ng-star-inserted">
                                    keyboard_double_arrow_down
                                  </span>
                                  Low
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Deadline:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <div _ngcontent-oko-c238 className="deadline ng-star-inserted">
                                    <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                      date_range
                                    </span>
                                    Apr 17, 2021
                                  </div>
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Comments:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  10
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Bug:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  5
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left">
                                  <ul _ngcontent-oko-c238 className="list-unstyled order-list">
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user1.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user2.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user3.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <span _ngcontent-oko-c238 className="badge">
                                        +4
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                        <button style={{border:"2px solid white"}}><Link to="/Addproject" style={{textDecoration:"none",color:"white"}}><img className="ad" src={edit}/></Link></button>
                          
                          <button style={{border:"2px solid white", marginLeft:"15px"}}><img className="ad" src={dele}/></button>

                        </div>
                        <p _ngcontent-oko-c238 className="m-b-5">
                          Progress
                          <span _ngcontent-oko-c238 className="text-success float-end">
                            67%
                          </span>
                        </p>
                        <div _ngcontent-oko-c238 className="progress progress-xs mb-0">
                          <mat-progress-bar _ngcontent-oko-c238 aria-valuemax={100} aria-valuemin={0} aria-valuenow={67} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1}>
                            <div aria-hidden="true" className="mdc-linear-progress__buffer">
                              <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                              <div className="mdc-linear-progress__buffer-dots" />
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.67)'}}>
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                          </mat-progress-bar>
                        </div>
                        <button _ngcontent-oko-c238 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger project-actions mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                          </span>
                          
                         
                          <span className="mat-mdc-focus-indicator">
                          </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target">
                          </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-oko-c238 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                      {/* */}
                      <li _ngcontent-oko-c238 cdkdrag className="cdk-drag project ng-star-inserted">
                        <h4 _ngcontent-oko-c238 className="project-title">
                          <span _ngcontent-oko-c238 className="material-icons-outlined project-icon">
                            task_alt
                          </span>
                          Food Delivery App
                        </h4>
                        <small _ngcontent-oko-c238 className="block text-ellipsis m-b-15">
                          <span _ngcontent-oko-c238 className="text-xs">
                            2
                          </span>
                          <span _ngcontent-oko-c238 className="text-muted">
                            open tasks
                          </span>
                        </small>
                        <span _ngcontent-oko-c238 className="project-bedge project-type-Android">
                          <div _ngcontent-oko-c238 className="pro-left">
                            {/* */}
                            Android
                            {/* */}
                            {/* */}
                            {/* */}
                          </div>
                        </span>
                        <p _ngcontent-oko-c238 className="mt-3">
                          It was popularised in the 1960s with the
                          release of Letraset sheets containing
                          Lorem Ipsum passages.
                        </p>
                        <div _ngcontent-oko-c238 className="project-members m-b-15"style={{marginLeft:"-2rem"}}>
                          <ul _ngcontent-oko-c238 className="team-members">
                            <li _ngcontent-oko-c238 className="dropdown avatar-dropdown">
                              <div _ngcontent-oko-c238 className="row">
                                <div _ngcontent-oko-c238 className="col-10 pro-left mb-2">
                                  Created:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                    date_range
                                  </span>
                                  Apr 16, 2019
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team Leader:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  Jens Brincker
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Priority:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 mb-2 pro-lef project-priority--1">
                                  {/* */}
                                  {/* */}
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon ng-star-inserted">
                                    keyboard_double_arrow_down
                                  </span>
                                  Low
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Deadline:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <div _ngcontent-oko-c238 className="deadline ng-star-inserted">
                                    <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                      date_range
                                    </span>
                                    Jan 17, 2021
                                  </div>
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Comments:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  25
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Bug:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  11
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team:
                                </div>
                                
                                <div _ngcontent-oko-c238 className="col-7 pro-left">
                                  <ul _ngcontent-oko-c238 className="list-unstyled order-list">
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user1.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user2.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user3.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <span _ngcontent-oko-c238 className="badge">
                                        +4
                                      </span>
                                    </li>
                                    
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                        <button style={{border:"2px solid white"}}><Link to="/Addproject" style={{textDecoration:"none",color:"white"}}><img className="ad" src={edit}/></Link></button>
                          
                          <button style={{border:"2px solid white", marginLeft:"15px"}}><img className="ad" src={dele}/></button>

                        </div>
                        <p _ngcontent-oko-c238 className="m-b-5">
                          Progress
                          <span _ngcontent-oko-c238 className="text-success float-end">
                            47%
                          </span>
                        </p>
                        
                        <div _ngcontent-oko-c238 className="progress progress-xs mb-0">
                          <mat-progress-bar _ngcontent-oko-c238 aria-valuemax={100} aria-valuemin={0} aria-valuenow={47} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1}>
                            <div aria-hidden="true" className="mdc-linear-progress__buffer">
                              <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                              <div className="mdc-linear-progress__buffer-dots" />
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.47)'}}>
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                          </mat-progress-bar>
                        </div>
                        <button _ngcontent-oko-c238 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger project-actions mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                          </span>
                        
                          <span className="mat-mdc-focus-indicator">
                          </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target">
                          </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-oko-c238 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                      {/* */}
                      <li _ngcontent-oko-c238 cdkdrag className="cdk-drag project ng-star-inserted">
                        <h4 _ngcontent-oko-c238 className="project-title">
                          <span _ngcontent-oko-c238 className="material-icons-outlined project-icon">
                            task_alt
                          </span>
                          Chat Application
                        </h4>
                        <small _ngcontent-oko-c238 className="block text-ellipsis m-b-15">
                          <span _ngcontent-oko-c238 className="text-xs">
                            2
                          </span>
                          <span _ngcontent-oko-c238 className="text-muted">
                            open tasks
                          </span>
                        </small>
                        <span _ngcontent-oko-c238 className="project-bedge project-type-IPhone">
                          <div _ngcontent-oko-c238 className="pro-left">
                            {/* */}
                            {/* */}
                            IPhone
                            {/* */}
                            {/* */}
                          </div>
                        </span>
                        <p _ngcontent-oko-c238 className="mt-3">
                          Contrary to popular belief, Lorem Ipsum
                          is not simply random text. It has roots
                          in a piece of classical Latin literature
                          from 45 BC
                        </p>
                        <div _ngcontent-oko-c238 className="project-members m-b-15"style={{marginLeft:"-2rem"}}>
                          <ul _ngcontent-oko-c238 className="team-members">
                            <li _ngcontent-oko-c238 className="dropdown avatar-dropdown">
                              <div _ngcontent-oko-c238 className="row">
                                <div _ngcontent-oko-c238 className="col-10 pro-left mb-2">
                                  Created:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                    date_range
                                  </span>
                                  Jul 31, 2020
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team Leader:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  Airi Satou
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Priority:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 mb-2 pro-lef project-priority-1">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon ng-star-inserted">
                                    keyboard_double_arrow_up
                                  </span>
                                  High
                                  {/* */}
                                  {/* */}
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Deadline:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <div _ngcontent-oko-c238 className="deadline ng-star-inserted">
                                    <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                      date_range
                                    </span>
                                    Aug 10, 2020
                                  </div>
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Comments:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  7
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Bug:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  4
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left">
                                  <ul _ngcontent-oko-c238 className="list-unstyled order-list">
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user1.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user2.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user3.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <span _ngcontent-oko-c238 className="badge">
                                        +4
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                        <button style={{border:"2px solid white"}}><Link to="/Addproject" style={{textDecoration:"none",color:"white"}}><img className="ad" src={edit}/></Link></button>
                          
                          <button style={{border:"2px solid white", marginLeft:"15px"}}><img className="ad" src={dele}/></button>

                        </div>
                        <p _ngcontent-oko-c238 className="m-b-5">
                          Progress
                          <span _ngcontent-oko-c238 className="text-success float-end">
                            28%
                          </span>
                        </p>
                        <div _ngcontent-oko-c238 className="progress progress-xs mb-0">
                          <mat-progress-bar _ngcontent-oko-c238 aria-valuemax={100} aria-valuemin={0} aria-valuenow={28} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1}>
                            <div aria-hidden="true" className="mdc-linear-progress__buffer">
                              <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                              <div className="mdc-linear-progress__buffer-dots" />
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.28)'}}>
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                          </mat-progress-bar>
                        </div>
                        <button _ngcontent-oko-c238 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger project-actions mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                          </span>
                          
                          <span className="mat-mdc-focus-indicator">
                          </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target">
                          </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-oko-c238 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                      {/* */}
                      {/* */}
                    </ul>
                  </div>
                  <div _ngcontent-oko-c238 className="list ng-star-inserted">
                    <div _ngcontent-oko-c238 className="header">
                      <div _ngcontent-oko-c238 className="title">
                        <h2 _ngcontent-oko-c238>
                          {/* */}
                          Running
                          {/* */}
                          {/* */}
                          {/* */}
                          {/* */}
                          {/* */}
                        </h2>
                        <div _ngcontent-oko-c238 className="count">
                          2 projects
                        </div>
                      </div>
                    </div>
                    <ul _ngcontent-oko-c238 cdkdroplist cdkdroplistsortingdisabled className="cdk-drop-list projects" id="RUNNING">
                      <li _ngcontent-oko-c238 cdkdrag className="cdk-drag project ng-star-inserted">
                        <h4 _ngcontent-oko-c238 className="project-title">
                          <span _ngcontent-oko-c238 className="material-icons-outlined project-icon">
                            task_alt
                          </span>
                          Shopping Application
                        </h4>
                        <small _ngcontent-oko-c238 className="block text-ellipsis m-b-15">
                          <span _ngcontent-oko-c238 className="text-xs">
                            22
                          </span>
                          <span _ngcontent-oko-c238 className="text-muted">
                            open tasks
                          </span>
                        </small>
                        <span _ngcontent-oko-c238 className="project-bedge project-type-Android">
                          <div _ngcontent-oko-c238 className="pro-left">
                            {/* */}
                            Android
                            {/* */}
                            {/* */}
                            {/* */}
                          </div>
                        </span>
                        <p _ngcontent-oko-c238 className="mt-3">
                          There are many variations of passages of
                          Lorem Ipsum available, but suffered
                          alteration in some form, by injected
                          humour.
                        </p>
                        <div _ngcontent-oko-c238 className="project-members m-b-15"style={{marginLeft:"-2rem"}}>
                          <ul _ngcontent-oko-c238 className="team-members">
                            <li _ngcontent-oko-c238 className="dropdown avatar-dropdown">
                              <div _ngcontent-oko-c238 className="row">
                                <div _ngcontent-oko-c238 className="col-10 pro-left mb-2">
                                  Created:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                    date_range
                                  </span>
                                  Aug 25, 2021
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team Leader:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  Jay Soni
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Priority:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 mb-2 pro-lef project-priority-1">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon ng-star-inserted">
                                    keyboard_double_arrow_up
                                  </span>
                                  High
                                  {/* */}
                                  {/* */}
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Deadline:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <div _ngcontent-oko-c238 className="deadline ng-star-inserted">
                                    <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                      date_range
                                    </span>
                                    Mar 13, 2024
                                  </div>
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Comments:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  14
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Bug:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  10
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left">
                                  <ul _ngcontent-oko-c238 className="list-unstyled order-list">
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user1.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user2.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user3.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <span _ngcontent-oko-c238 className="badge">
                                        +4
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                        <button style={{border:"2px solid white"}}><Link to="/Addproject" style={{textDecoration:"none",color:"white"}}><img className="ad" src={edit}/></Link></button>
                          
                          <button style={{border:"2px solid white", marginLeft:"15px"}}><img className="ad" src={dele}/></button>

                        </div>
                        <p _ngcontent-oko-c238 className="m-b-5">
                          Progress
                          <span _ngcontent-oko-c238 className="text-success float-end">
                            55%
                          </span>
                        </p>
                        <div _ngcontent-oko-c238 className="progress progress-xs mb-0">
                          <mat-progress-bar _ngcontent-oko-c238 aria-valuemax={100} aria-valuemin={0} aria-valuenow={55} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1}>
                            <div aria-hidden="true" className="mdc-linear-progress__buffer">
                              <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                              <div className="mdc-linear-progress__buffer-dots" />
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.55)'}}>
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                          </mat-progress-bar>
                        </div>
                        <button _ngcontent-oko-c238 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger project-actions mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                          </span>
                        
                          <span className="mat-mdc-focus-indicator">
                          </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target">
                          </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-oko-c238 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                      {/* */}
                      <li _ngcontent-oko-c238 cdkdrag className="cdk-drag project ng-star-inserted">
                        <h4 _ngcontent-oko-c238 className="project-title">
                          <span _ngcontent-oko-c238 className="material-icons-outlined project-icon">
                            task_alt
                          </span>
                          Construction Website
                        </h4>
                        <small _ngcontent-oko-c238 className="block text-ellipsis m-b-15">
                          <span _ngcontent-oko-c238 className="text-xs">
                            15
                          </span>
                          <span _ngcontent-oko-c238 className="text-muted">
                            open tasks
                          </span>
                        </small>
                        <span _ngcontent-oko-c238 className="project-bedge project-type-Website">
                          <div _ngcontent-oko-c238 className="pro-left">
                            Website
                            {/* */}
                            {/* */}
                            {/* */}
                            {/* */}
                          </div>
                        </span>
                        <p _ngcontent-oko-c238 className="mt-3">
                          Pellentesque habitant morbi tristique
                          senectus et netus et malesuada but
                          suffered alteration in some form fames
                          ac turpis egestas.
                        </p>
                        <div _ngcontent-oko-c238 className="project-members m-b-15"style={{marginLeft:"-2rem"}}>
                          <ul _ngcontent-oko-c238 className="team-members">
                            <li _ngcontent-oko-c238 className="dropdown avatar-dropdown">
                              <div _ngcontent-oko-c238 className="row">
                                <div _ngcontent-oko-c238 className="col-10 pro-left mb-2">
                                  Created:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                    date_range
                                  </span>
                                  Jul 31, 2020
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team Leader:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  Sarah Smith
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Priority:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 mb-2 pro-lef project-priority-0">
                                  {/* */}
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon ng-star-inserted">
                                    switch_right
                                  </span>
                                  Medium
                                  {/* */}
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Deadline:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <div _ngcontent-oko-c238 className="deadline ng-star-inserted">
                                    <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                      date_range
                                    </span>
                                    Apr 22, 2022
                                  </div>
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Comments:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  41
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Bug:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  11
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left">
                                  <ul _ngcontent-oko-c238 className="list-unstyled order-list">
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user1.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user2.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user3.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <span _ngcontent-oko-c238 className="badge">
                                        +4
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                        <button style={{border:"2px solid white"}}><Link to="/Addproject" style={{textDecoration:"none",color:"white"}}><img className="ad" src={edit}/></Link></button>
                          
                          <button style={{border:"2px solid white", marginLeft:"15px"}}><img className="ad" src={dele}/></button>

                        </div>
                        <p _ngcontent-oko-c238 className="m-b-5">
                          Progress
                          <span _ngcontent-oko-c238 className="text-success float-end">
                            48%
                          </span>
                        </p>
                        <div _ngcontent-oko-c238 className="progress progress-xs mb-0">
                          <mat-progress-bar _ngcontent-oko-c238 aria-valuemax={100} aria-valuemin={0} aria-valuenow={48} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1}>
                            <div aria-hidden="true" className="mdc-linear-progress__buffer">
                              <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                              <div className="mdc-linear-progress__buffer-dots" />
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.48)'}}>
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                          </mat-progress-bar>
                        </div>
                        <button _ngcontent-oko-c238 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger project-actions mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                          </span>
                          
                          <span className="mat-mdc-focus-indicator">
                          </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target">
                          </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-oko-c238 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                      {/* */}
                      {/* */}
                    </ul>
                  </div>
                  <div _ngcontent-oko-c238 className="list ng-star-inserted">
                    <div _ngcontent-oko-c238 className="header">
                      <div _ngcontent-oko-c238 className="title">
                        <h2 _ngcontent-oko-c238>
                          {/* */}
                          {/* */}
                          On Hold
                          {/* */}
                          {/* */}
                          {/* */}
                          {/* */}
                        </h2>
                        <div _ngcontent-oko-c238 className="count">
                          2 projects
                        </div>
                      </div>
                    </div>
                    <ul _ngcontent-oko-c238 cdkdroplist cdkdroplistsortingdisabled className="cdk-drop-list projects" id="ONHOLD">
                      <li _ngcontent-oko-c238 cdkdrag className="cdk-drag project ng-star-inserted">
                        <h4 _ngcontent-oko-c238 className="project-title">
                          <span _ngcontent-oko-c238 className="material-icons-outlined project-icon">
                            task_alt
                          </span>
                          J&amp;K Sons Website
                        </h4>
                        <small _ngcontent-oko-c238 className="block text-ellipsis m-b-15">
                          <span _ngcontent-oko-c238 className="text-xs">
                            9
                          </span>
                          <span _ngcontent-oko-c238 className="text-muted">
                            open tasks
                          </span>
                        </small>
                        <span _ngcontent-oko-c238 className="project-bedge project-type-Testing">
                          <div _ngcontent-oko-c238 className="pro-left">
                            {/* */}
                            {/* */}
                            {/* */}
                            Testing
                            {/* */}
                          </div>
                        </span>
                        <p _ngcontent-oko-c238 className="mt-3">
                          Contrary to popular belief, Lorem Ipsum
                          is not simply random text. It has roots
                          in a piece of classical Latin literature
                          from 45 BC
                        </p>
                        <div _ngcontent-oko-c238 className="project-members m-b-15"style={{marginLeft:"-2rem"}}>
                          <ul _ngcontent-oko-c238 className="team-members">
                            <li _ngcontent-oko-c238 className="dropdown avatar-dropdown">
                              <div _ngcontent-oko-c238 className="row">
                                <div _ngcontent-oko-c238 className="col-10 pro-left mb-2">
                                  Created:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                    date_range
                                  </span>
                                  Sep 12, 2020
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team Leader:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  Mark Hay
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Priority:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 mb-2 pro-lef project-priority--1">
                                  {/* */}
                                  {/* */}
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon ng-star-inserted">
                                    keyboard_double_arrow_down
                                  </span>
                                  Low
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Deadline:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <div _ngcontent-oko-c238 className="deadline ng-star-inserted">
                                    <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                      date_range
                                    </span>
                                    Feb 18, 2022
                                  </div>
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Comments:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  12
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Bug:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  8
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left">
                                  <ul _ngcontent-oko-c238 className="list-unstyled order-list">
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user1.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user2.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user3.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <span _ngcontent-oko-c238 className="badge">
                                        +4
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                        <button style={{border:"2px solid white"}}><Link to="/Addproject" style={{textDecoration:"none",color:"white"}}><img className="ad" src={edit}/></Link></button>
                          
                          <button style={{border:"2px solid white", marginLeft:"15px"}}><img className="ad" src={dele}/></button>

                        </div>
                        <p _ngcontent-oko-c238 className="m-b-5">
                          Progress
                          <span _ngcontent-oko-c238 className="text-success float-end">
                            70%
                          </span>
                        </p>
                        <div _ngcontent-oko-c238 className="progress progress-xs mb-0">
                          <mat-progress-bar _ngcontent-oko-c238 aria-valuemax={100} aria-valuemin={0} aria-valuenow={70} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1}>
                            <div aria-hidden="true" className="mdc-linear-progress__buffer">
                              <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                              <div className="mdc-linear-progress__buffer-dots" />
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.7)'}}>
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                          </mat-progress-bar>
                        </div>
                        <button _ngcontent-oko-c238 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger project-actions mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                          </span>
                          
                          <span className="mat-mdc-focus-indicator">
                          </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target">
                          </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-oko-c238 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                      {/* */}
                      <li _ngcontent-oko-c238 cdkdrag className="cdk-drag project ng-star-inserted">
                        <h4 _ngcontent-oko-c238 className="project-title">
                          <span _ngcontent-oko-c238 className="material-icons-outlined project-icon">
                            task_alt
                          </span>
                          Ecommerce Website
                        </h4>
                        <small _ngcontent-oko-c238 className="block text-ellipsis m-b-15">
                          <span _ngcontent-oko-c238 className="text-xs">
                            44
                          </span>
                          <span _ngcontent-oko-c238 className="text-muted">
                            open tasks
                          </span>
                        </small>
                        <span _ngcontent-oko-c238 className="project-bedge project-type-Website">
                          <div _ngcontent-oko-c238 className="pro-left">
                            Website
                            {/* */}
                            {/* */}
                            {/* */}
                            {/* */}
                          </div>
                        </span>
                        <p _ngcontent-oko-c238 className="mt-3">
                          The standard chunk of Lorem Ipsum used
                          since the 1500s is reproduced below
                          generators on the Internet tend for
                          those interested.
                        </p>
                        <div _ngcontent-oko-c238 className="project-members m-b-15"style={{marginLeft:"-2rem"}}>
                          <ul _ngcontent-oko-c238 className="team-members">
                            <li _ngcontent-oko-c238 className="dropdown avatar-dropdown">
                              <div _ngcontent-oko-c238 className="row">
                                <div _ngcontent-oko-c238 className="col-10 pro-left mb-2">
                                  Created:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                    date_range
                                  </span>
                                  May 19, 2018
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team Leader:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  Mark Hay
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Priority:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 mb-2 pro-lef project-priority-1">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon ng-star-inserted">
                                    keyboard_double_arrow_up
                                  </span>
                                  High
                                  {/* */}
                                  {/* */}
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Deadline:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <div _ngcontent-oko-c238 className="deadline ng-star-inserted">
                                    <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                      date_range
                                    </span>
                                    Nov 26, 2021
                                  </div>
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Comments:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  5
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Bug:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  2
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left">
                                  <ul _ngcontent-oko-c238 className="list-unstyled order-list">
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user1.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user2.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user3.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <span _ngcontent-oko-c238 className="badge">
                                        +4
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                        <button style={{border:"2px solid white"}}><Link to="/Addproject" style={{textDecoration:"none",color:"white"}}><img className="ad" src={edit}/></Link></button>
                          
                          <button style={{border:"2px solid white", marginLeft:"15px"}}><img className="ad" src={dele}/></button>

                        </div>
                        <p _ngcontent-oko-c238 className="m-b-5">
                          Progress
                          <span _ngcontent-oko-c238 className="text-success float-end">
                            88%
                          </span>
                        </p>
                        <div _ngcontent-oko-c238 className="progress progress-xs mb-0">
                          <mat-progress-bar _ngcontent-oko-c238 aria-valuemax={100} aria-valuemin={0} aria-valuenow={88} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1}>
                            <div aria-hidden="true" className="mdc-linear-progress__buffer">
                              <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                              <div className="mdc-linear-progress__buffer-dots" />
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.88)'}}>
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                          </mat-progress-bar>
                        </div>
                        <button _ngcontent-oko-c238 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger project-actions mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                          </span>
                          
                          <span className="mat-mdc-focus-indicator">
                          </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target">
                          </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-oko-c238 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                      {/* */}
                      {/* */}
                    </ul>
                  </div>
                  <div _ngcontent-oko-c238 className="list ng-star-inserted">
                    <div _ngcontent-oko-c238 className="header">
                      <div _ngcontent-oko-c238 className="title">
                        <h2 _ngcontent-oko-c238>
                          {/* */}
                          {/* */}
                          {/* */}
                          Finished
                          {/* */}
                          {/* */}
                          {/* */}
                        </h2>
                        <div _ngcontent-oko-c238 className="count">
                          1 project
                        </div>
                      </div>
                    </div>
                    <ul _ngcontent-oko-c238 cdkdroplist cdkdroplistsortingdisabled className="cdk-drop-list projects" id="FINISHED">
                      <li _ngcontent-oko-c238 cdkdrag className="cdk-drag project ng-star-inserted">
                        <h4 _ngcontent-oko-c238 className="project-title">
                          <span _ngcontent-oko-c238 className="material-icons-outlined project-icon">
                            task_alt
                          </span>
                          Video Streaming App
                        </h4>
                        <small _ngcontent-oko-c238 className="block text-ellipsis m-b-15">
                          <span _ngcontent-oko-c238 className="text-xs">
                            27
                          </span>
                          <span _ngcontent-oko-c238 className="text-muted">
                            open tasks
                          </span>
                        </small>
                        <span _ngcontent-oko-c238 className="project-bedge project-type-IPhone">
                          <div _ngcontent-oko-c238 className="pro-left">
                            {/* */}
                            {/* */}
                            IPhone
                            {/* */}
                            {/* */}
                          </div>
                        </span>
                        <p _ngcontent-oko-c238 className="mt-3">
                          Contrary to popular belief, Lorem Ipsum
                          is not simply random text. It has roots
                          in a piece of classical Latin literature
                          from 45 BC
                        </p>
                        <div _ngcontent-oko-c238 className="project-members m-b-15"style={{marginLeft:"-2rem"}}>
                          <ul _ngcontent-oko-c238 className="team-members">
                            <li _ngcontent-oko-c238 className="dropdown avatar-dropdown">
                              <div _ngcontent-oko-c238 className="row">
                                <div _ngcontent-oko-c238 className="col-10 pro-left mb-2">
                                  Created:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                    date_range
                                  </span>
                                  Jun 22, 2019
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team Leader:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  Airi Satou
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Priority:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 mb-2 pro-lef project-priority-1">
                                  <span _ngcontent-oko-c238 className="material-icons-outlined project-icon ng-star-inserted">
                                    keyboard_double_arrow_up
                                  </span>
                                  High
                                  {/* */}
                                  {/* */}
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Deadline:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  <div _ngcontent-oko-c238 className="deadline ng-star-inserted">
                                    <span _ngcontent-oko-c238 className="material-icons-outlined project-icon2">
                                      date_range
                                    </span>
                                    Apr 13, 2023
                                  </div>
                                  {/* */}
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Comments:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  7
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Bug:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left mb-2">
                                  4
                                </div>
                                <div _ngcontent-oko-c238 className="col-5 pro-left mb-2">
                                  Team:
                                </div>
                                <div _ngcontent-oko-c238 className="col-7 pro-left">
                                  <ul _ngcontent-oko-c238 className="list-unstyled order-list">
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user1.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user2.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <img _ngcontent-oko-c238 alt="user" className="rounded-circle" src="../../assets/images/user/user3.jpg" />
                                    </li>
                                    <li _ngcontent-oko-c238 className="avatar avatar-sm">
                                      <span _ngcontent-oko-c238 className="badge">
                                        +4
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                        <button style={{border:"2px solid white"}}><Link to="/Addproject" style={{textDecoration:"none",color:"white"}}><img className="ad" src={edit}/></Link></button>
                          
                          <button style={{border:"2px solid white", marginLeft:"15px"}}><img className="ad" src={dele}/></button>

                        </div>
                        <p _ngcontent-oko-c238 className="m-b-5">
                          Progress
                          <span _ngcontent-oko-c238 className="text-success float-end">
                            100%
                          </span>
                        </p>
                        <div _ngcontent-oko-c238 className="progress progress-xs mb-0">
                          <mat-progress-bar _ngcontent-oko-c238 aria-valuemax={100} aria-valuemin={0} aria-valuenow={100} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1}>
                            <div aria-hidden="true" className="mdc-linear-progress__buffer">
                              <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                              <div className="mdc-linear-progress__buffer-dots" />
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(1)'}}>
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                            <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                              <span className="mdc-linear-progress__bar-inner">
                              </span>
                            </div>
                          </mat-progress-bar>
                        </div>
                        <button _ngcontent-oko-c238 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger project-actions mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                          </span>
                          
                          <span className="mat-mdc-focus-indicator">
                          </span>
                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                          </span>
                          <span className="mat-mdc-button-touch-target">
                          </span>
                        </button>
                        {/* */}
                        <mat-menu _ngcontent-oko-c238 className="ng-star-inserted">
                          {/* */}
                        </mat-menu>
                      </li>
                      {/* */}
                      {/* */}
                    </ul>
                  </div>
                  {/* */}
                </div>
              </app-board>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}





