import React, { useState } from "react";
import "../../kuber/madhav/Madhav.css"
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
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


export default function Editemploye() {
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
                <Accordion.Header><img className='img1' src={a2} /><p className="accord-p">Project</p></Accordion.Header>
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
                <Accordion.Header><img className='img1' src={a3} /><p className="accord-p">Employees</p></Accordion.Header>
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
                <Accordion.Header><img className='img1' src={a4} /><p className="accord-p">Leave Management</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/LeaveRequest" className='link1'>All Leave Requests</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Leavesbalance" className='link1'>Leave Balance</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Leavetype" className='link1'>Leave Types</Link ></Dropdown.Item>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' src={a5} /><p className="accord-p">Holidays</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Allholiday" className='link1'>All Holidays</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Addholiday" className='link1'>Add Holiday</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Editholiday" className='link1'>Edit Holiday</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' src={a6} /><p className="accord-p">Attendance</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Today" className='link1'>Today's Attendance</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Employ" className='link1'>Employee Attendance</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Attendance" className='link1'>Attendance Sheet</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' src={a7} /><p className="accord-p">Clients</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Allclient" className='link1'>All Clients</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Addclient" className='link1'>Add Client</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Editclient" className='link1'>Edit Client</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' src={a8} /><p className="accord-p">Accounts</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Allpayment" className='link1'>All Payments</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Addpayment" className='link1'>Add Payment</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Invoice" className='link1'>Invoice</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' src={a9} /><p className="accord-p">Payroll</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Employsalary" className='link1'>Employee Salary</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Payslip" className='link1'>Payslip</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' src={a10} /><p className="accord-p">Leaders</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Leads" className='link1'> Leaders</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' src={a11} /><p className="accord-p">Jobs</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Job" className='link1'>Jobs List</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Resumes" className='link1'>Resumes</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Candidate" className='link1'>Candidates</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Shortlist" className='link1'>Shortlist Candidates</Link ></Dropdown.Item>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' src={a12} /> <p className="accord-p">Reports</p></Accordion.Header>
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
                <Accordion.Header><img className='img1' src={a16} /> <p className="accord-p">Email</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/AdminInbox" className='link1'>Inbox</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Admincompose" className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/AdminMail" className='link1'> Read Email</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' src={a17} /><p className="accord-p">More Apps </p><span _ngcontent-sas-c132 className="badge bg-orange sidebar-badge float-end ng-star-inserted">
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
                <Accordion.Header><img className='img1' src={a18} /><p className="accord-p"> Widgets</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Chart1" className='link1'> Chart Widget</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Data1" className='link1'> Data Widget</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/" className='link1'> Components</Link ></Dropdown.Item>
                </Accordion.Body>
              </Accordion.Item>







              <Accordion.Item eventKey="18" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' src={a26} /><p className="accord-p"> Authentication</p></Accordion.Header>
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
        <div _ngcontent-oko-c244 className="block-header">
          <app-breadcrumb _ngcontent-oko-c244 _nghost-oko-c141>
            <div _ngcontent-oko-c141 className="breadcrumb-main">
              <div _ngcontent-oko-c141 className="row">
                <div _ngcontent-oko-c141 className="col-6">
                  <div _ngcontent-oko-c141 className="breadcrumb-title">
                    <h4 _ngcontent-oko-c141 className="page-title">
                      Edit Employee
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
                      Edit Employee
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </app-breadcrumb>
        </div>
        <div _ngcontent-oko-c244 className="row clearfix">
          <div _ngcontent-oko-c244 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div _ngcontent-oko-c244 className="card">
              <div _ngcontent-oko-c244 className="header">
                <h2 _ngcontent-oko-c244>Edit Employee</h2>
              </div>
              <div _ngcontent-oko-c244 className="body">
                <form _ngcontent-oko-c244 className="m-4 ng-untouched ng-pristine ng-valid" noValidate>
                  <div _ngcontent-oko-c244 className="row">
                    <div _ngcontent-oko-c244 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-68 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-68 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-68">
                            <div className="mdc-notched-outline ng-tns-c67-68 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(89px *var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-input-16" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-68 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-16" id="mat-mdc-form-field-label-46" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-68">
                                    First name
                                  </mat-label>
                                  <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-68 ng-star-inserted">
                                  </span>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-68">
                              {/* */}
                              <input _ngcontent-oko-c244 aria-invalid="false" aria-required="true" className="mat-mdc-input-element ng-tns-c67-68 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="first" id="mat-input-16" matinput required />
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-68">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-68 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-68" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                    <div _ngcontent-oko-c244 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-69 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-69 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-69">
                            <div className="mdc-notched-outline ng-tns-c67-69 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(79px * var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-input-17" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-69 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-17" id="mat-mdc-form-field-label-48" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-69">
                                    Last name
                                  </mat-label>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-69">
                              {/* */}
                              <input _ngcontent-oko-c244 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-69 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="last" id="mat-input-17" matinput />
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-69">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-69 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-69" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                  </div>
                  <div _ngcontent-oko-c244 className="row">
                    <div _ngcontent-oko-c244 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-70 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-70 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-70">
                            <div className="mdc-notched-outline ng-tns-c67-70 mdc-notched-outline--upgraded ng-star-inserted mdc-notched-outline--notched" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(63px *var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-select-14" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-70 ng-star-inserted mdc-floating-label--float-above" htmlFor="mat-select-14" id="mat-mdc-form-field-label-50" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-70">
                                    Gender
                                  </mat-label>
                                  <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-70 ng-star-inserted">
                                  </span>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-70">
                              {/* */}
                              <mat-select _ngcontent-oko-c244 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-50 mat-select-value-15" aria-required="true" className="mat-mdc-select ng-tns-c175-71 ng-tns-c67-70 mat-mdc-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" formcontrolname="gender" id="mat-select-14" required role="combobox" tabIndex={0}>
                                <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-71">
                                  <div className="mat-mdc-select-value ng-tns-c175-71" id="mat-select-value-15">
                                    {/* */}
                                    <span className="mat-mdc-select-value-text ng-tns-c175-71 ng-star-inserted">
                                      <span className="mat-mdc-select-min-line ng-tns-c175-71 ng-star-inserted">
                                        Female
                                      </span>
                                      {/* */}
                                      {/* */}
                                    </span>
                                    {/* */}
                                  </div>
                                  <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-71">
                                    <div className="mat-mdc-select-arrow ng-tns-c175-71">
                                      <svg className="ng-tns-c175-71" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                        <path className="ng-tns-c175-71" d="M7 10l5 5 5-5z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                {/* */}
                              </mat-select>
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-70">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-70 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-70" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                    <div _ngcontent-oko-c244 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-72 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-72 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-72">
                            <div className="mdc-notched-outline ng-tns-c67-72 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(60px * var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-input-18" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-72 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-18" id="mat-mdc-form-field-label-52" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-72">
                                    Mobile
                                  </mat-label>
                                  <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-72 ng-star-inserted">
                                  </span>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-72">
                              {/* */}
                              <input _ngcontent-oko-c244 aria-invalid="false" aria-required="true" className="mat-mdc-input-element ng-tns-c67-72 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="mobile" id="mat-input-18" matinput required type="number" />
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-72">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-72 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-72" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                  </div>
                  <div _ngcontent-oko-c244 className="row">
                    <div _ngcontent-oko-c244 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-73 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-73 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-73">
                            <div className="mdc-notched-outline ng-tns-c67-73 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(83px * var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-input-19" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-73 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-19" id="mat-mdc-form-field-label-54" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-73">
                                    Password
                                  </mat-label>
                                  <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-73 ng-star-inserted">
                                  </span>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-73">
                              {/* */}
                              <input _ngcontent-oko-c244 aria-invalid="false" aria-required="true" className="mat-mdc-input-element ng-tns-c67-73 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="password" id="mat-input-19" matinput required type="password" />
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-73">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-73 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-73" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                    <div _ngcontent-oko-c244 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-74 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-74 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-74">
                            <div className="mdc-notched-outline ng-tns-c67-74 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(151px * var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-input-20" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-74 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-20" id="mat-mdc-form-field-label-56" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-74">
                                    Re-Enter Password
                                  </mat-label>
                                  <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-74 ng-star-inserted">
                                  </span>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-74">
                              {/* */}
                              <input _ngcontent-oko-c244 aria-invalid="false" aria-required="true" className="mat-mdc-input-element ng-tns-c67-74 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="conformPassword" id="mat-input-20" matinput required type="password" />
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-74">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-74 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-74" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                  </div>
                  <div _ngcontent-oko-c244 className="row">
                    <div _ngcontent-oko-c244 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-75 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-75 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-75">
                            <div className="mdc-notched-outline ng-tns-c67-75 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(90px * var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-input-21" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-75 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-21" id="mat-mdc-form-field-label-58" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-75">
                                    Designation
                                  </mat-label>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-75">
                              {/* */}
                              <input _ngcontent-oko-c244 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-75 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="designation" id="mat-input-21" matinput />
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-75">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-75 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-75" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                    <div _ngcontent-oko-c244 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-76 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-76 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-76">
                            <div className="mdc-notched-outline ng-tns-c67-76 mdc-notched-outline--upgraded ng-star-inserted mdc-notched-outline--notched" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(149px * var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-select-16" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-76 ng-star-inserted mdc-floating-label--float-above" htmlFor="mat-select-16" id="mat-mdc-form-field-label-60" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-76">
                                    Select Department
                                  </mat-label>
                                  <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-76 ng-star-inserted">
                                  </span>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-76">
                              {/* */}
                              <mat-select _ngcontent-oko-c244 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-60 mat-select-value-17" aria-required="true" className="mat-mdc-select ng-tns-c175-77 ng-tns-c67-76 mat-mdc-select-required ng-untouched ng-pristine ng-valid ng-star-inserted" formcontrolname="department" id="mat-select-16" required role="combobox" tabIndex={0}>
                                <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-77">
                                  <div className="mat-mdc-select-value ng-tns-c175-77" id="mat-select-value-17">
                                    {/* */}
                                    <span className="mat-mdc-select-value-text ng-tns-c175-77 ng-star-inserted">
                                      <span className="mat-mdc-select-min-line ng-tns-c175-77 ng-star-inserted">
                                        Designing
                                      </span>
                                      {/* */}
                                      {/* */}
                                    </span>
                                    {/* */}
                                  </div>
                                  <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-77">
                                    <div className="mat-mdc-select-arrow ng-tns-c175-77">
                                      <svg className="ng-tns-c175-77" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                        <path className="ng-tns-c175-77" d="M7 10l5 5 5-5z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                {/* */}
                              </mat-select>
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-76">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-76 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-76" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                  </div>
                  <div _ngcontent-oko-c244 className="row">
                    <div _ngcontent-oko-c244 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-78 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-78 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-78">
                            <div className="mdc-notched-outline ng-tns-c67-78 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(62px * var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-input-22" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-78 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-22" id="mat-mdc-form-field-label-62" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-78">
                                    Address
                                  </mat-label>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-78">
                              {/* */}
                              <textarea _ngcontent-oko-c244 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-78 ng-untouched ng-pristine ng-valid mat-mdc-form-field-textarea-control mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="address" id="mat-input-22" matinput defaultValue={""} />
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-78">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-78 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-78" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                  </div>
                  <div _ngcontent-oko-c244 className="row">
                    <div _ngcontent-oko-c244 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-79 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-79 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-79">
                            <div className="mdc-notched-outline ng-tns-c67-79 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(50px * var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-input-23" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-79 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-23" id="mat-mdc-form-field-label-64" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-79">
                                    Email
                                  </mat-label>
                                  <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-79 ng-star-inserted">
                                  </span>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-79">
                              {/* */}
                              <input _ngcontent-oko-c244 aria-invalid="false" aria-required="true" className="mat-mdc-input-element ng-tns-c67-79 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="email" id="mat-input-23" matinput required />
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-79">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-79 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-79" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                    <div _ngcontent-oko-c244 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-80 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-80 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-80">
                            <div className="mdc-notched-outline ng-tns-c67-80 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(106px * var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-input-24" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-80 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-24" id="mat-mdc-form-field-label-66" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-80">
                                    Date Of Birth
                                  </mat-label>
                                  <span aria-hidden="true" className="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c67-80 ng-star-inserted">
                                  </span>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-80">
                              {/* */}
                              <input _ngcontent-oko-c244 aria-haspopup="dialog" aria-invalid="false" aria-required="true" className="mat-mdc-input-element mat-datepicker-input ng-tns-c67-80 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" data-mat-calendar="mat-datepicker-3" formcontrolname="dob" id="mat-input-24" matinput required />
                              <mat-datepicker _ngcontent-oko-c244 className="ng-tns-c67-80">
                              </mat-datepicker>
                              {/* */}
                            </div>
                            {/* */}
                            <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-80 ng-star-inserted">
                              <mat-datepicker-toggle _ngcontent-oko-c244 className="mat-datepicker-toggle ng-tns-c67-80" data-mat-calendar="mat-datepicker-3" matsuffix>
                                <button aria-haspopup="dialog" aria-label="Open calendar" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button tabIndex={0} type="button">
                                  <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                  </span>
                                  <svg className="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                  </svg>
                                  {/* */}
                                  <span className="mat-mdc-focus-indicator">
                                  </span>
                                  <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                  </span>
                                  <span className="mat-mdc-button-touch-target">
                                  </span>
                                </button>
                              </mat-datepicker-toggle>
                            </div>
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-80">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-80 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-80" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                  </div>
                  <div _ngcontent-oko-c244 className="row">
                    <div _ngcontent-oko-c244 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                      <mat-form-field _ngcontent-oko-c244 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-81 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        {/* */}
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-81 mdc-text-field--outlined">
                          {/* */}
                          <div className="mat-mdc-form-field-flex ng-tns-c67-81">
                            <div className="mdc-notched-outline ng-tns-c67-81 mdc-notched-outline--notched mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                              <div className="mdc-notched-outline__leading" />
                              <div className="mdc-notched-outline__notch" style={{ width: 'calc(75px * var(--mat-mdc-form-field-floating-label-scale,0.75) + 9px)' }}>
                                <label aria-owns="mat-input-25" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-81 mdc-floating-label--float-above ng-star-inserted" htmlFor="mat-input-25" id="mat-mdc-form-field-label-68" matformfieldfloatinglabel style={{ transitionDuration: '0s' }}>
                                  <mat-label _ngcontent-oko-c244 className="ng-tns-c67-81">
                                    Education
                                  </mat-label>
                                  {/* */}
                                </label>
                                {/* */}
                                {/* */}
                                {/* */}
                              </div>
                              <div className="mdc-notched-outline__trailing" />
                            </div>
                            {/* */}
                            {/* */}
                            {/* */}
                            <div className="mat-mdc-form-field-infix ng-tns-c67-81">
                              {/* */}
                              <textarea _ngcontent-oko-c244 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-81 ng-untouched ng-pristine ng-valid mat-mdc-form-field-textarea-control mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="education" id="mat-input-25" matinput defaultValue={""} />
                            </div>
                            {/* */}
                            {/* */}
                          </div>
                          {/* */}
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-81">
                          {/* */}
                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-81 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                            {/* */}
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-81" />
                          </div>
                          {/* */}
                        </div>
                      </mat-form-field>
                    </div>
                  </div>
                  <div _ngcontent-oko-c244 className="row">
                    <div _ngcontent-oko-c244 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                      <mat-label _ngcontent-oko-c244>
                        Upload Image
                      </mat-label>
                      <app-file-upload _ngcontent-oko-c244 _nghost-oko-c235 className="ng-untouched ng-pristine ng-valid" formcontrolname="uploadImg">
                        <div _ngcontent-oko-c235 className="file-drop-area">
                          <button _ngcontent-oko-c235 className="mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" mat-raised-button>
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                            </span>
                            <span className="mdc-button__label">
                              Choose file
                            </span>
                            <span className="mat-mdc-focus-indicator">
                            </span>
                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                            </span>
                            <span className="mat-mdc-button-touch-target">
                            </span>
                          </button>
                          <span _ngcontent-oko-c235>
                            or drag and drop file here
                          </span>
                          <input _ngcontent-oko-c235 className="file-input" type="file" />
                        </div>
                      </app-file-upload>
                    </div>
                  </div>
                  <div _ngcontent-oko-c244 className="row">
                    <div _ngcontent-oko-c244 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                      <button _ngcontent-oko-c244 className="btn-space mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" mat-raised-button>
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                        </span>
                        <span className="mdc-button__label"> Submit </span>
                        <span className="mat-mdc-focus-indicator"> </span>
                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                        </span>
                        <span className="mat-mdc-button-touch-target">
                        </span>
                      </button>
                      <button _ngcontent-oko-c244 className="mdc-button mdc-button--raised mat-mdc-raised-button mat-warn mat-mdc-button-base" color="warn" mat-raised-button type="button">
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                        </span>
                        <span className="mdc-button__label"> Cancel </span>
                        <span className="mat-mdc-focus-indicator"> </span>
                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                        </span>
                        <span className="mat-mdc-button-touch-target">
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}





