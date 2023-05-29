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
// import edit from "../img/edit.png"
// import dele from "../img/dele.png"

import a31 from "../../dashboard/img/logout.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,

} from "@fortawesome/free-solid-svg-icons";


export default function Employeprofile() {
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
              <h3><span style={{ color: "black" }} > Cyber-Instant </span></h3>
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
                <Accordion.Header><img className='img1' alt="aseris" src={a2} /><p className="accord-p">Project </p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Addproject" className='link1'>Add-project</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Allproject" className='link1'>All-project</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Estimate" className='link1'>Estimate</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/ProjectDetail" className='link1'>Project-Details</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="2" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a3} /><p className="accord-p">Employees</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Addemploye" className='link1'>Add-Employe</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Allemploye" className='link1'>All-Employe</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Editemploye" className='link1'>Edite-Employe</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Employeprofile" className='link1'>Employe-Profile</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="3" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a4} /><p className="accord-p">Leave Management</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/LeaveRequest" className='link1'>All Leave Requests</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Leavesbalance" className='link1'>Leave Balance</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Leavetype" className='link1'>Leave Types</Link ></Dropdown.Item>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a5} /><p className="accord-p">Holidays</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Allholiday" className='link1'>All Holidays</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Addholiday" className='link1'>Add Holiday</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Editholiday" className='link1'>Edit Holiday</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a6} /><p className="accord-p">Attendance</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Today" className='link1'>Today's Attendance</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Employ" className='link1'>Employee Attendance</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Attendance" className='link1'>Attendance Sheet</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a7} /><p className="accord-p">Clients</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Allclient" className='link1'>All Clients</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Addclient" className='link1'>Add Client</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Editclient" className='link1'>Edit Client</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a8} /><p className="accord-p">Accounts</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Allpayment" className='link1'>All Payments</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Addpayment" className='link1'>Add Payment</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Invoice" className='link1'>Invoice</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a9} /><p className="accord-p">Payroll</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Employsalary" className='link1'>Employee Salary</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Payslip" className='link1'>Payslip</Link ></Dropdown.Item>
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
                  <Dropdown.Item ><Link to="/Resumes" className='link1'>Resumes</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Candidate" className='link1'>Candidates</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Shortlist" className='link1'>Shortlist Candidates</Link ></Dropdown.Item>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a12} /><p className="accord-p"> Reports</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Leavereport" className='link1'>Leave Report</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Expense" className='link1'>Expense Report</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/" className='link1'>Apps</Link ></Dropdown.Item>
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
                  <Dropdown.Item ><Link to="/AdminInbox" className='link1'>Inbox</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Admincompose" className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/AdminMail" className='link1'> Read Email</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a17} /><p className="accord-p">More Apps</p> <span _ngcontent-sas-c132 className="badge bg-orange sidebar-badge float-end ng-star-inserted">
                  4
                </span></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/" className='link1'> Chat</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/" className='link1'> Contact Grid</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/" className='link1'> Support</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/" className='link1'>Drag &amp; Drop</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a18} /> <p className="accord-p">Widgets</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Chart1" className='link1'> Chart Widget</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Data1" className='link1'> Data Widget</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/" className='link1'> Components</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>






              <Accordion.Item eventKey="18" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>

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
      </div >

      <div _ngcontent-hni-c142 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>
        <div _ngcontent-oko-c245 className="block-header">
          <app-breadcrumb _ngcontent-oko-c245 _nghost-oko-c141>
            <div _ngcontent-oko-c141 className="breadcrumb-main">
              <div _ngcontent-oko-c141 className="row">
                <div _ngcontent-oko-c141 className="col-6">
                  <div _ngcontent-oko-c141 className="breadcrumb-title">
                    <h4 _ngcontent-oko-c141 className="page-title">
                      Profile
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
                      Employees
                    </li>
                    {/* */}
                    <li _ngcontent-oko-c141 className="breadcrumb-item active">
                      Profile
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </app-breadcrumb>
        </div>
        <div _ngcontent-oko-c245 className="row clearfix">
          <div _ngcontent-oko-c245 className="col-lg-4 col-md-12">
            <div _ngcontent-oko-c245 className="card">
              <div _ngcontent-oko-c245 className="m-b-20">
                <div _ngcontent-oko-c245 className="contact-grid">
                  <div _ngcontent-oko-c245 className="profile-header bg-dark">
                    <div _ngcontent-oko-c245 className="user-name">
                      DR. John Smith
                    </div>
                    <div _ngcontent-oko-c245 className="name-center">
                      Senior Employee
                    </div>
                  </div>
                  <img _ngcontent-oko-c245 alt="" className="user-img" src="../../assets/images/user/usrbig3.jpg" />
                  <p _ngcontent-oko-c245>
                    456, Estern evenue, Courtage area,
                    <br _ngcontent-oko-c245 />
                    New York
                  </p>
                  <div _ngcontent-oko-c245>
                    <span _ngcontent-oko-c245 className="phone">
                      <i _ngcontent-oko-c245 className="material-icons">
                        phone
                      </i>
                      264-625-2583
                    </span>
                  </div>
                  <div _ngcontent-oko-c245 className="row">
                    <div _ngcontent-oko-c245 className="col-4">
                      <h5 _ngcontent-oko-c245>564</h5>
                      <small _ngcontent-oko-c245> Following </small>
                    </div>
                    <div _ngcontent-oko-c245 className="col-4">
                      <h5 _ngcontent-oko-c245>18k</h5>
                      <small _ngcontent-oko-c245> Followers </small>
                    </div>
                    <div _ngcontent-oko-c245 className="col-4">
                      <h5 _ngcontent-oko-c245>565</h5>
                      <small _ngcontent-oko-c245> Post </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div _ngcontent-oko-c245 className="card">
              <mat-tab-group _ngcontent-oko-c245 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs" mat-align-tabs="start">
                <mat-tab-header className="mat-mdc-tab-header">
                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                    <div className="mat-mdc-tab-header-pagination-chevron" />
                  </button>
                  <div className="mat-mdc-tab-label-container">
                    <div className="mat-mdc-tab-list" role="tablist" style={{ transform: 'translateX(0px)' }}>
                      <div className="mat-mdc-tab-labels">
                        <div aria-controls="mat-tab-content-1-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-1-0" mattablabelwrapper role="tab" tabIndex={0}>
                          <span className="mdc-tab__ripple"> </span>
                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                          <span className="mdc-tab__content">
                            <span className="mdc-tab__text-label">
                              About
                              {/* */}
                              {/* */}
                            </span>
                          </span>
                          <span className="mdc-tab-indicator">
                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                            </span>
                          </span>
                        </div>
                        <div aria-controls="mat-tab-content-1-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-1-1" mattablabelwrapper role="tab" tabIndex={-1}>
                          <span className="mdc-tab__ripple"> </span>
                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                          <span className="mdc-tab__content">
                            <span className="mdc-tab__text-label">
                              Skills
                              {/* */}
                              {/* */}
                            </span>
                          </span>
                          <span className="mdc-tab-indicator">
                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                            </span>
                          </span>
                        </div>
                        {/* */}
                      </div>
                    </div>
                  </div>
                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                    <div className="mat-mdc-tab-header-pagination-chevron" />
                  </button>
                </mat-tab-header>
                <div className="mat-mdc-tab-body-wrapper">
                  <mat-tab-body aria-labelledby="mat-tab-label-1-0" className="mat-mdc-tab-body ng-tns-c218-91 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-1-0" role="tabpanel">
                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-91 ng-trigger ng-trigger-translateTab" style={{ transform: 'none' }}>
                      <div _ngcontent-oko-c245 className="p-4 ng-star-inserted" style={{}}>
                        <p _ngcontent-oko-c245 className="text-default">
                          Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry. Lorem Ipsum
                          has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make
                          a type specimen book. It has survived not only
                          five centuries, but also the leap into
                          electronic typesetting, remaining essentially
                          unchanged.
                        </p>
                        <small _ngcontent-oko-c245 className="text-muted">
                          Email address:
                        </small>
                        <p _ngcontent-oko-c245>john@gmail.com</p>
                        <hr _ngcontent-oko-c245 />
                        <small _ngcontent-oko-c245 className="text-muted">
                          Phone:
                        </small>
                        <p _ngcontent-oko-c245>+91 1234567890</p>
                        <hr _ngcontent-oko-c245 />
                      </div>
                      {/* */}
                    </div>
                  </mat-tab-body>
                  <mat-tab-body aria-labelledby="mat-tab-label-1-1" className="mat-mdc-tab-body ng-tns-c218-92 ng-star-inserted" id="mat-tab-content-1-1" role="tabpanel">
                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-92 ng-trigger ng-trigger-translateTab ng-animating">
                      {/* */}
                    </div>
                  </mat-tab-body>
                  {/* */}
                </div>
              </mat-tab-group>
            </div>
          </div>
          <div _ngcontent-oko-c245 className="col-lg-8 col-md-12">
            <div _ngcontent-oko-c245 className="card">
              <mat-tab-group _ngcontent-oko-c245 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs">
                <mat-tab-header className="mat-mdc-tab-header">
                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                    <div className="mat-mdc-tab-header-pagination-chevron" />
                  </button>
                  <div className="mat-mdc-tab-label-container">
                    <div className="mat-mdc-tab-list" role="tablist" style={{ transform: 'translateX(0px)' }}>
                      <div className="mat-mdc-tab-labels">
                        <div aria-controls="mat-tab-content-2-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-2-0" mattablabelwrapper role="tab" tabIndex={0}>
                          <span className="mdc-tab__ripple"> </span>
                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                          <span className="mdc-tab__content">
                            <span className="mdc-tab__text-label">
                              <mat-icon _ngcontent-oko-c245 aria-hidden="true" className="mat-icon notranslate example-tab-icon msr-2 material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" role="img">
                                face
                              </mat-icon>
                              About Me
                              {/* */}
                              {/* */}
                              {/* */}
                            </span>
                          </span>
                          <span className="mdc-tab-indicator">
                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                            </span>
                          </span>
                        </div>
                        <div aria-controls="mat-tab-content-2-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-2-1" mattablabelwrapper role="tab" tabIndex={-1}>
                          <span className="mdc-tab__ripple"> </span>
                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                          <span className="mdc-tab__content">
                            <span className="mdc-tab__text-label">
                              <mat-icon _ngcontent-oko-c245 aria-hidden="true" className="mat-icon notranslate example-tab-icon msr-2 material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" role="img">
                                settings
                              </mat-icon>
                              Settings
                              {/* */}
                              {/* */}
                              {/* */}
                            </span>
                          </span>
                          <span className="mdc-tab-indicator">
                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                            </span>
                          </span>
                        </div>
                        {/* */}
                      </div>
                    </div>
                  </div>
                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                    <div className="mat-mdc-tab-header-pagination-chevron" />
                  </button>
                </mat-tab-header>
                <div className="mat-mdc-tab-body-wrapper">
                  <mat-tab-body aria-labelledby="mat-tab-label-2-0" className="mat-mdc-tab-body ng-tns-c218-93 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-2-0" role="tabpanel">
                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-93 ng-trigger ng-trigger-translateTab" style={{ transform: 'none' }}>
                      {/* */}
                      <div _ngcontent-oko-c245 className="col-lg-12 col-md-12 col-sm-12 ng-star-inserted" style={{}}>
                        <div _ngcontent-oko-c245 className="project_widget">
                          <div _ngcontent-oko-c245 className="header">
                            <h2 _ngcontent-oko-c245>
                              <strong _ngcontent-oko-c245>
                                About
                              </strong>
                            </h2>
                          </div>
                          <div _ngcontent-oko-c245 className="body">
                            <div _ngcontent-oko-c245 className="row">
                              <div _ngcontent-oko-c245 className="col-md-3 col-6 b-r">
                                <strong _ngcontent-oko-c245>
                                  Full Name
                                </strong>
                                <br _ngcontent-oko-c245 />
                                <p _ngcontent-oko-c245 className="text-muted">
                                  Emily Smith
                                </p>
                              </div>
                              <div _ngcontent-oko-c245 className="col-md-3 col-6 b-r">
                                <strong _ngcontent-oko-c245>
                                  Mobile
                                </strong>
                                <br _ngcontent-oko-c245 />
                                <p _ngcontent-oko-c245 className="text-muted">
                                  (123) 456 7890
                                </p>
                              </div>
                              <div _ngcontent-oko-c245 className="col-md-3 col-6 b-r">
                                <strong _ngcontent-oko-c245>
                                  Email
                                </strong>
                                <br _ngcontent-oko-c245 />
                                <p _ngcontent-oko-c245 className="text-muted">
                                  johndeo@example.com
                                </p>
                              </div>
                              <div _ngcontent-oko-c245 className="col-md-3 col-6">
                                <strong _ngcontent-oko-c245>
                                  Location
                                </strong>
                                <br _ngcontent-oko-c245 />
                                <p _ngcontent-oko-c245 className="text-muted">
                                  India
                                </p>
                              </div>
                            </div>
                            <p _ngcontent-oko-c245 className="m-t-30">
                              Completed my graduation in Arts from the
                              well known and renowned institution of
                              India – SARDAR PATEL ARTS COLLEGE, BARODA
                              in 2000-01, which was affiliated to M.S.
                              University. I ranker in University exams
                              from the same university from 1996-01.
                            </p>
                            <p _ngcontent-oko-c245>
                              Worked as Professor and Head of the
                              department at Sarda Collage, Rajkot,
                              Gujarat from 2003-2015
                            </p>
                            <p _ngcontent-oko-c245>
                              Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem
                              Ipsum has been the industry's standard
                              dummy text ever since the 1500s, when an
                              unknown printer took a galley of type and
                              scrambled it to make a type specimen book.
                              It has survived not only five centuries,
                              but also the leap into electronic
                              typesetting, remaining essentially
                              unchanged.
                            </p>
                            <br _ngcontent-oko-c245 />
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c245 className="col-lg-12 col-md-12 col-sm-12 ng-star-inserted" style={{}}>
                        <div _ngcontent-oko-c245 className="project_widget">
                          <div _ngcontent-oko-c245 className="header">
                            <h2 _ngcontent-oko-c245>
                              <strong _ngcontent-oko-c245>
                                Education
                              </strong>
                            </h2>
                          </div>
                          <div _ngcontent-oko-c245 className="body">
                            <ul _ngcontent-oko-c245>
                              <li _ngcontent-oko-c245>
                                M.B.B.S.,Gujarat University,
                                Ahmedabad,India.
                              </li>
                              <li _ngcontent-oko-c245>
                                M.S.,Gujarat University, Ahmedabad,
                                India.
                              </li>
                              <li _ngcontent-oko-c245>
                                SPINAL FELLOWSHIP Dr. John Adam,
                                Allegimeines Krakenhaus, Schwerin,
                                Germany.
                              </li>
                              <li _ngcontent-oko-c245>
                                Fellowship in Endoscopic Spine Surgery
                                Phoenix, USA.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c245 className="col-lg-12 col-md-12 col-sm-12 ng-star-inserted" style={{}}>
                        <div _ngcontent-oko-c245 className="project_widget">
                          <div _ngcontent-oko-c245 className="header">
                            <h2 _ngcontent-oko-c245>
                              <strong _ngcontent-oko-c245>
                                Experience
                              </strong>
                            </h2>
                          </div>
                          <div _ngcontent-oko-c245 className="body">
                            <ul _ngcontent-oko-c245>
                              <li _ngcontent-oko-c245>
                                One year rotatory internship from
                                April-2009 to march-2010 at B. J.
                                Medical College, Ahmedabad.
                              </li>
                              <li _ngcontent-oko-c245>
                                Three year residency at V.S. General
                                Hospital as a resident in orthopedics
                                from April - 2008 to April - 2011.
                              </li>
                              <li _ngcontent-oko-c245>
                                I have worked as a part time
                                physiotherapist in Apang manav mandal
                                from 1st june 2004 to 31st jan 2005.
                              </li>
                              <li _ngcontent-oko-c245>
                                Clinical and Research fellowship in
                                Scoliosis at Shaurashtra University and
                                Medical Centre (KUMC) , Krishna Hospital
                                , Rajkot from April 2013 to June 2013.
                              </li>
                              <li _ngcontent-oko-c245>
                                2.5 Years Worked at Mahatma Gandhi
                                General Hospital, Surendranagar.
                              </li>
                              <li _ngcontent-oko-c245>
                                Consultant Orthopedics Surgeon Jalna 2
                                years.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div _ngcontent-oko-c245 className="col-lg-12 col-md-12 col-sm-12 ng-star-inserted" style={{}}>
                        <div _ngcontent-oko-c245 className="project_widget">
                          <div _ngcontent-oko-c245 className="header">
                            <h2 _ngcontent-oko-c245>
                              <strong _ngcontent-oko-c245>
                                Conferences, Cources &amp; Workshop
                                Attended
                              </strong>
                            </h2>
                          </div>
                          <div _ngcontent-oko-c245 className="body">
                            <ul _ngcontent-oko-c245>
                              <li _ngcontent-oko-c245>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                              </li>
                              <li _ngcontent-oko-c245>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                              </li>
                              <li _ngcontent-oko-c245>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                              </li>
                              <li _ngcontent-oko-c245>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                              </li>
                              <li _ngcontent-oko-c245>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                              </li>
                              <li _ngcontent-oko-c245>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                              </li>
                              <li _ngcontent-oko-c245>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* */}
                    </div>
                  </mat-tab-body>
                  <mat-tab-body aria-labelledby="mat-tab-label-2-1" className="mat-mdc-tab-body ng-tns-c218-94 ng-star-inserted" id="mat-tab-content-2-1" role="tabpanel">
                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-94 ng-trigger ng-trigger-translateTab ng-animating">
                      {/* */}
                    </div>
                  </mat-tab-body>
                  {/* */}
                </div>
              </mat-tab-group>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}





