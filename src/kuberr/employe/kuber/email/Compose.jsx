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


export  function AdminCompose() {
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
                <img className='img11' src={a14} alt="dash" /><Link to="/Task" className="adashh">Task</Link>
              </div>

              <div className="dash-item">
                <img className='img11' src={a15} alt="dash" /><Link to="/Contact1" className="adashh">Contact</Link>
              </div>
              <Accordion.Item eventKey="15" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="a16" src={a16} /><p className="accord-p"> Email</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/adminInbox" className='link1'>Inbox</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/admincompose" className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/adminMail" className='link1'> Read Email</Link ></Dropdown.Item>
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
    <div _ngcontent-hni-c142 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>
                      <div _ngcontent-oko-c366 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c366 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Compose
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
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Compose
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c366 className="row">
                        <div _ngcontent-oko-c366 className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                          <div _ngcontent-oko-c366 className="card">
                            <div _ngcontent-oko-c366 className="body">
                              <div _ngcontent-oko-c366 id="mail-nav">
                                <button _ngcontent-oko-c366 className="btn btn-success waves-effect m-b-15" type="button">
                                  COMPOSE
                                </button>
                                <ul _ngcontent-oko-c366 id="mail-folders">
                                  <li _ngcontent-oko-c366 className="active">
                                    <a _ngcontent-oko-c366 href="inbox.html" title="Inbox">
                                      Inbox
                                      <span _ngcontent-oko-c366 className="badge bg-orange">
                                        6
                                      </span>
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)" title="Sent">
                                      Sent
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)" title="Draft">
                                      Draft
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)" title="Bin">
                                      Bin
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)" title="Important">
                                      Important
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)" title="Starred">
                                      Starred
                                    </a>
                                  </li>
                                </ul>
                                <h5 _ngcontent-oko-c366 className="b-b p-10 text-strong">
                                  Labels
                                </h5>
                                <ul _ngcontent-oko-c366 id="mail-labels">
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)">
                                      <i _ngcontent-oko-c366 className="material-icons col-red">
                                        local_offer
                                      </i>
                                      Family
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)">
                                      <i _ngcontent-oko-c366 className="material-icons col-blue">
                                        local_offer
                                      </i>
                                      Work
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)">
                                      <i _ngcontent-oko-c366 className="material-icons col-orange">
                                        local_offer
                                      </i>
                                      Shop
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)">
                                      <i _ngcontent-oko-c366 className="material-icons col-cyan">
                                        local_offer
                                      </i>
                                      Themeforest
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)">
                                      <i _ngcontent-oko-c366 className="material-icons col-blue">
                                        local_offer
                                      </i>
                                      Google
                                    </a>
                                  </li>
                                </ul>
                                <h5 _ngcontent-oko-c366 className="b-b p-10 text-strong">
                                  Online
                                </h5>
                                <ul _ngcontent-oko-c366 className="online-user" id="online-offline">
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)">
                                      <i _ngcontent-oko-c366 className="material-icons col-green" title="Online">
                                        brightness_1
                                      </i>
                                      Sachin
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)">
                                      <i _ngcontent-oko-c366 className="material-icons col-indigo" title="Off Line">
                                        brightness_1
                                      </i>
                                      John Smith
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)">
                                      <i _ngcontent-oko-c366 className="material-icons col-orange" title="Away">
                                        brightness_1
                                      </i>
                                      Askay
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)">
                                      <i _ngcontent-oko-c366 className="material-icons col-indigo" title="Off Line">
                                        brightness_1
                                      </i>
                                      Dhavan
                                    </a>
                                  </li>
                                  <li _ngcontent-oko-c366>
                                    <a _ngcontent-oko-c366 href="javascript:void(0)">
                                      <i _ngcontent-oko-c366 className="material-icons col-indigo" title="Off Line">
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
                        <div _ngcontent-oko-c366 className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                          <div _ngcontent-oko-c366 className="card">
                            <div _ngcontent-oko-c366 className="boxs mail_listing">
                              <div _ngcontent-oko-c366 className="inbox-center table-responsive">
                                <table _ngcontent-oko-c366 className="table table-hover">
                                  <thead _ngcontent-oko-c366>
                                    <tr _ngcontent-oko-c366>
                                      <th _ngcontent-oko-c366 colSpan={1}>
                                        <div _ngcontent-oko-c366 className="inbox-header">
                                          Compose New Message
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                </table>
                              </div>
                              <div _ngcontent-oko-c366 className="row">
                                <div _ngcontent-oko-c366 className="col-lg-12">
                                  <form _ngcontent-oko-c366 className="composeForm">
                                    <div _ngcontent-oko-c366 className="form-line">
                                      <mat-form-field _ngcontent-oko-c366 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-330 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                        {/* */}
                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-330 mdc-text-field--outlined">
                                          {/* */}
                                          <div className="mat-mdc-form-field-flex ng-tns-c67-330">
                                            <div className="mdc-notched-outline ng-tns-c67-330 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                              <div className="mdc-notched-outline__leading" />
                                              <div className="mdc-notched-outline__notch">
                                                <label aria-owns="email_address" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-330 ng-star-inserted" htmlFor="email_address" id="mat-mdc-form-field-label-206" matformfieldfloatinglabel style={{}}>
                                                  <mat-label _ngcontent-oko-c366 className="ng-tns-c67-330">
                                                    TO
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
                                            <div className="mat-mdc-form-field-infix ng-tns-c67-330">
                                              {/* */}
                                              <input _ngcontent-oko-c366 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-330 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="email_address" matinput />
                                            </div>
                                            {/* */}
                                            {/* */}
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-330">
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-330 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-330" />
                                          </div>
                                          {/* */}
                                        </div>
                                      </mat-form-field>
                                    </div>
                                    <div _ngcontent-oko-c366 className="form-line">
                                      <mat-form-field _ngcontent-oko-c366 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-331 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">
                                        {/* */}
                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-331 mdc-text-field--outlined">
                                          {/* */}
                                          <div className="mat-mdc-form-field-flex ng-tns-c67-331">
                                            <div className="mdc-notched-outline ng-tns-c67-331 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                              <div className="mdc-notched-outline__leading" />
                                              <div className="mdc-notched-outline__notch">
                                                <label aria-owns="subject" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-331 ng-star-inserted" htmlFor="subject" id="mat-mdc-form-field-label-208" matformfieldfloatinglabel style={{}}>
                                                  <mat-label _ngcontent-oko-c366 className="ng-tns-c67-331">
                                                    Subject
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
                                            <div className="mat-mdc-form-field-infix ng-tns-c67-331">
                                              {/* */}
                                              <input _ngcontent-oko-c366 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-331 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="subject" matinput />
                                            </div>
                                            {/* */}
                                            {/* */}
                                          </div>
                                          {/* */}
                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-331">
                                          {/* */}
                                          <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-331 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{"opacity":"1","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}}>
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-331" />
                                          </div>
                                          {/* */}
                                        </div>
                                      </mat-form-field>
                                    </div>
                                    <ckeditor _ngcontent-oko-c366 data="<p>Hello, world!</p>">
                                      {/* */}
                                      <div style={{"display":"none"}} />
                                      <div aria-labelledby="ck-editor__label_e83de14d09d455b5c1b59e6018fa7149a" className="ck ck-reset ck-editor ck-rounded-corners" dir="ltr" lang="en" role="application">
                                        <label className="ck ck-label ck-voice-label" id="ck-editor__label_e83de14d09d455b5c1b59e6018fa7149a">
                                          Rich Text Editor
                                        </label>
                                        <div className="ck ck-editor__top ck-reset_all" role="presentation">
                                          <div className="ck ck-sticky-panel">
                                            <div className="ck ck-sticky-panel__placeholder" style={{"display":"none"}} />
                                            <div className="ck ck-sticky-panel__content">
                                              <div aria-label="Editor toolbar" className="ck ck-toolbar ck-toolbar_grouping" role="toolbar">
                                                <div className="ck ck-toolbar__items">
                                                  <div className="ck ck-dropdown ck-heading-dropdown">
                                                    <button aria-expanded="false" aria-haspopup="true" aria-labelledby="ck-editor__aria-label_e82126a61ca9941ded5ca9ed5b9ad02d7" className="ck ck-button ck-off ck-button_with-text ck-dropdown__button" data-cke-tooltip-position="s" data-cke-tooltip-text="Heading" tabIndex={-1} type="button">
                                                      <span className="ck ck-button__label" id="ck-editor__aria-label_e82126a61ca9941ded5ca9ed5b9ad02d7">
                                                        Paragraph
                                                      </span>
                                                      <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-dropdown__arrow" viewBox="0 0 10 10">
                                                        <path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" />
                                                      </svg>
                                                    </button>
                                                    <div className="ck ck-reset ck-dropdown__panel ck-dropdown__panel_se" />
                                                  </div>
                                                  <span className="ck ck-toolbar__separator">
                                                  </span>
                                                  <button aria-labelledby="ck-editor__aria-label_e566305dc0e0bd88a860fc3957740fc24" aria-pressed="false" className="ck ck-button ck-off" data-cke-tooltip-position="s" data-cke-tooltip-text="Bold (Ctrl+B)" tabIndex={-1} type="button">
                                                    <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                      <path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z" />
                                                    </svg>
                                                    <span className="ck ck-button__label" id="ck-editor__aria-label_e566305dc0e0bd88a860fc3957740fc24">
                                                      Bold
                                                    </span>
                                                  </button>
                                                  <button aria-labelledby="ck-editor__aria-label_e0d174b60a1fb8764cb747161de7bd9ea" aria-pressed="false" className="ck ck-button ck-off" data-cke-tooltip-position="s" data-cke-tooltip-text="Italic (Ctrl+I)" tabIndex={-1} type="button">
                                                    <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                      <path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z" />
                                                    </svg>
                                                    <span className="ck ck-button__label" id="ck-editor__aria-label_e0d174b60a1fb8764cb747161de7bd9ea">
                                                      Italic
                                                    </span>
                                                  </button>
                                                  <button aria-labelledby="ck-editor__aria-label_e06cd345cb852be19c6eec2269dbaaa71" aria-pressed="false" className="ck ck-button ck-off" data-cke-tooltip-position="s" data-cke-tooltip-text="Link (Ctrl+K)" tabIndex={-1} type="button">
                                                    <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                      <path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z" />
                                                    </svg>
                                                    <span className="ck ck-button__label" id="ck-editor__aria-label_e06cd345cb852be19c6eec2269dbaaa71">
                                                      Link
                                                    </span>
                                                  </button>
                                                  <button aria-labelledby="ck-editor__aria-label_ece4114eb7804452cc6e220a40ec4528f" aria-pressed="false" className="ck ck-button ck-off" data-cke-tooltip-position="s" data-cke-tooltip-text="Bulleted List" tabIndex={-1} type="button">
                                                    <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                      <path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z" />
                                                    </svg>
                                                    <span className="ck ck-button__label" id="ck-editor__aria-label_ece4114eb7804452cc6e220a40ec4528f">
                                                      Bulleted List
                                                    </span>
                                                  </button>
                                                  <button aria-labelledby="ck-editor__aria-label_ec3f0951d2c1002b829715a317bbac0b4" aria-pressed="false" className="ck ck-button ck-off" data-cke-tooltip-position="s" data-cke-tooltip-text="Numbered List" tabIndex={-1} type="button">
                                                    <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                      <path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z" />
                                                    </svg>
                                                    <span className="ck ck-button__label" id="ck-editor__aria-label_ec3f0951d2c1002b829715a317bbac0b4">
                                                      Numbered List
                                                    </span>
                                                  </button>
                                                  <span className="ck ck-toolbar__separator">
                                                  </span>
                                                  <button aria-disabled="true" aria-labelledby="ck-editor__aria-label_e6ce70b1fc9fb82bec650e1c256626057" className="ck ck-button ck-disabled ck-off" data-cke-tooltip-position="s" data-cke-tooltip-text="Decrease indent" tabIndex={-1} type="button">
                                                    <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                      <path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z" />
                                                    </svg>
                                                    <span className="ck ck-button__label" id="ck-editor__aria-label_e6ce70b1fc9fb82bec650e1c256626057">
                                                      Decrease indent
                                                    </span>
                                                  </button>
                                                  <button aria-disabled="true" aria-labelledby="ck-editor__aria-label_e8805a6018c35e10f41e582ae055ad8a3" className="ck ck-button ck-disabled ck-off" data-cke-tooltip-position="s" data-cke-tooltip-text="Increase indent" tabIndex={-1} type="button">
                                                    <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                      <path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z" />
                                                    </svg>
                                                    <span className="ck ck-button__label" id="ck-editor__aria-label_e8805a6018c35e10f41e582ae055ad8a3">
                                                      Increase indent
                                                    </span>
                                                  </button>
                                                  <span className="ck ck-toolbar__separator">
                                                  </span>
                                                  <span className="ck-file-dialog-button">
                                                    <button aria-labelledby="ck-editor__aria-label_ee4bf548d70ab451c06005492cf00bae9" className="ck ck-button ck-off" data-cke-tooltip-position="s" data-cke-tooltip-text="Insert image" tabIndex={-1} type="button">
                                                      <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                        <path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z" />
                                                      </svg>
                                                      <span className="ck ck-button__label" id="ck-editor__aria-label_ee4bf548d70ab451c06005492cf00bae9">
                                                        Insert image
                                                      </span>
                                                    </button>
                                                    <input accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/tiff" className="ck-hidden" multiple="true" tabIndex={-1} type="file" />
                                                  </span>
                                                  <button aria-labelledby="ck-editor__aria-label_e04936978997fa957cdb777c9f816d1e2" aria-pressed="false" className="ck ck-button ck-off" data-cke-tooltip-position="s" data-cke-tooltip-text="Block quote" tabIndex={-1} type="button">
                                                    <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                      <path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z" />
                                                    </svg>
                                                    <span className="ck ck-button__label" id="ck-editor__aria-label_e04936978997fa957cdb777c9f816d1e2">
                                                      Block quote
                                                    </span>
                                                  </button>
                                                  <div className="ck ck-dropdown">
                                                    <button aria-expanded="false" aria-haspopup="true" aria-labelledby="ck-editor__aria-label_e8929b9f71c371017f3e17719f67d37f5" className="ck ck-button ck-off ck-dropdown__button" data-cke-tooltip-position="s" data-cke-tooltip-text="Insert table" tabIndex={-1} type="button">
                                                      <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                        <path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z" />
                                                      </svg>
                                                      <span className="ck ck-button__label" id="ck-editor__aria-label_e8929b9f71c371017f3e17719f67d37f5">
                                                        Insert table
                                                      </span>
                                                      <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-dropdown__arrow" viewBox="0 0 10 10">
                                                        <path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" />
                                                      </svg>
                                                    </button>
                                                    <div className="ck ck-reset ck-dropdown__panel ck-dropdown__panel_se" />
                                                  </div>
                                                  <div className="ck ck-dropdown">
                                                    <button aria-expanded="false" aria-haspopup="true" aria-labelledby="ck-editor__aria-label_ed5baac0457ebb02295c5f8ec661bc9c7" className="ck ck-button ck-off ck-dropdown__button" data-cke-tooltip-position="s" data-cke-tooltip-text="Insert media" tabIndex={-1} type="button">
                                                      <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                        <path d="M18.68 3.03c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.58c0-.58-.01-.55.6-.55h17.38zM15.77 15V5H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 7.177a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V7.176v.001z" />
                                                      </svg>
                                                      <span className="ck ck-button__label" id="ck-editor__aria-label_ed5baac0457ebb02295c5f8ec661bc9c7">
                                                        Insert media
                                                      </span>
                                                      <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-dropdown__arrow" viewBox="0 0 10 10">
                                                        <path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" />
                                                      </svg>
                                                    </button>
                                                    <div className="ck ck-reset ck-dropdown__panel ck-dropdown__panel_se" />
                                                  </div>
                                                </div>
                                                <span className="ck ck-toolbar__separator">
                                                </span>
                                                <div className="ck ck-dropdown ck-toolbar__grouped-dropdown ck-toolbar-dropdown">
                                                  <button aria-expanded="false" aria-haspopup="true" aria-labelledby="ck-editor__aria-label_e199b7c0f8fd040ad601e249278b53183" className="ck ck-button ck-off ck-dropdown__button" data-cke-tooltip-position="sw" data-cke-tooltip-text="Show more items" tabIndex={-1} type="button">
                                                    <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20">
                                                      <circle cx="9.5" cy="4.5" r="1.5" />
                                                      <circle cx="9.5" cy="10.5" r="1.5" />
                                                      <circle cx="9.5" cy="16.5" r="1.5" />
                                                    </svg>
                                                    <span className="ck ck-button__label" id="ck-editor__aria-label_e199b7c0f8fd040ad601e249278b53183">
                                                      Show more items
                                                    </span>
                                                    <svg className="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-dropdown__arrow" viewBox="0 0 10 10">
                                                      <path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" />
                                                    </svg>
                                                  </button>
                                                  <div className="ck ck-reset ck-dropdown__panel ck-dropdown__panel_se" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ck ck-editor__main" role="presentation">
                                          <div aria-label="Editor editing area: main" className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline" contentEditable="true" dir="ltr" lang="en" role="textbox">
                                            <p>Hello, world!</p>
                                          </div>
                                        </div>
                                      </div>
                                    </ckeditor>
                                    <div _ngcontent-oko-c366 className="compose-editor m-t-20">
                                      <div _ngcontent-oko-c366 id="summernote" />
                                      <input _ngcontent-oko-c366 className="default" multiple type="file" />
                                    </div>
                                  </form>
                                </div>
                                <div _ngcontent-oko-c366 className="col-lg-12">
                                  <div _ngcontent-oko-c366 className="m-l-25 m-b-20">
                                    <button _ngcontent-oko-c366 className="msr-2 mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-primary mat-mdc-button-base" color="primary" mat-flat-button>
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                      </span>
                                      <span className="mdc-button__label"> Send </span>
                                      <span className="mat-mdc-focus-indicator"> </span>
                                      <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                      </span>
                                      <span className="mat-mdc-button-touch-target">
                                      </span>
                                    </button>
                                    <button _ngcontent-oko-c366 className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-warn mat-mdc-button-base" color="warn" mat-flat-button>
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                      </span>
                                      <span className="mdc-button__label"> Discard </span>
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
                  

    </>
  );
}





