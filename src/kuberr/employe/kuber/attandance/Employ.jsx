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
import a17 from "../img/a17.webp";
import a18 from "../img/a18.png";
import a26 from "../img/a26.png";
import a31 from "../../dashboard/img/logout.png"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  
} from "@fortawesome/free-solid-svg-icons";


export default function Employ() {
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
      <Accordion.Item eventKey="1" style={{ margin: "auto", overflow: "hidden", width: "92%" }} >
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
      <Accordion.Item eventKey="2" style={{ margin: "auto", overflow: "hidden", width: "92%" }} >
                <Accordion.Header><img className='img1' alt="aseris" src={a3} /> <p className="accord-p">Employees</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Addemploye" className='link1'>Add-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Allemploye"className='link1'>All-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editemploye"className='link1'>Edite-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Employeprofile"className='link1'>Employe-Profile</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="3" style={{ margin: "auto", overflow: "hidden", width: "92%" }} >
                <Accordion.Header><img className='img1' alt="aseris" src={a4} /> <p className="accord-p">Leave Management</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/LeaveRequest" className='link1'>All Leave Requests</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Leavesbalance"className='link1'>Leave Balance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Leavetype"className='link1'>Leave Types</Link ></Dropdown.Item>
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" style={{ margin: "auto", overflow: "hidden", width: "92%" }} >
                <Accordion.Header><img className='img1' alt="aseris" src={a5} /> <p className="accord-p">Holidays</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allholiday" className='link1'>All Holidays</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addholiday"className='link1'>Add Holiday</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editholiday"className='link1'>Edit Holiday</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" style={{ margin: "auto", overflow: "hidden", width: "92%" }} >
                <Accordion.Header><img className='img1' alt="aseris" src={a6} /> <p className="accord-p">Attendance</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Today" className='link1'>Today's Attendance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Employ"className='link1'>Employee Attendance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Attendance"className='link1'>Attendance Sheet</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" style={{ margin: "auto", overflow: "hidden", width: "92%" }} >
                <Accordion.Header><img className='img1' alt="aseris" src={a7} /> <p className="accord-p">Clients </p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allclient" className='link1'>All Clients</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addclient"className='link1'>Add Client</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editclient"className='link1'>Edit Client</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" style={{ margin: "auto", overflow: "hidden", width: "92%" }} >
                <Accordion.Header><img className='img1' alt="aseris" src={a8} /> <p className="accord-p">Accounts </p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allpayment" className='link1'>All Payments</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addpayment"className='link1'>Add Payment</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Invoice"className='link1'>Invoice</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8" style={{ margin: "auto", overflow: "hidden", width: "92%" }} >
                <Accordion.Header><img className='img1' alt="aseris" src={a9} /> <p className="accord-p">Payroll </p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Employsalary" className='link1'>Employee Salary</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Payslip"className='link1'>Payslip</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9" style={{ margin: "auto", overflow: "hidden", width: "92%" }} >
                <Accordion.Header><img className='img1' alt="aseris" src={a10} /> <p className="accord-p">Leaders </p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Leads" className='link1'> Leaders</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a11} /> <p className="accord-p">Jobs </p>  </Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Job" className='link1'>Jobs List</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Resumes"className='link1'>Resumes</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Candidate"className='link1'>Candidates</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Shortlist"className='link1'>Shortlist Candidates</Link ></Dropdown.Item>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a12} /> <p className="accord-p"> Reports</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Leavereport" className='link1'>Leave Report</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Expense"className='link1'>Expense Report</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/"className='link1'>Apps</Link ></Dropdown.Item>
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
                  <Dropdown.Item ><Link to="/Admincompose"className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/AdminMail"className='link1'> Read Email</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="16" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a17} /> <p className="accord-p">More Apps</p> <span _ngcontent-sas-c132 className="badge bg-orange sidebar-badge float-end ng-star-inserted">
                                        4
                                      </span></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/" className='link1'> Chat</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Contact Grid</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Support</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/"className='link1'>Drag &amp; Drop</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="17" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a18} /> <p className="accord-p"> Widgets</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Chart1" className='link1'> Chart Widget</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Data1" className='link1'> Data Widget</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Components</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
     
   
     
     
    
      
     
              <Accordion.Item eventKey="17" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
              <Accordion.Header><img className='img1' alt="aseris" src={a26} /> <p className="accord-p"> Authentication</p></Accordion.Header>
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
                      <div _ngcontent-oko-c303 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c303 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Employee Attendance
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
                                    Attendance
                                  </li>
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Employee Attendance
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c303 className="row clearfix">
                        <div _ngcontent-oko-c303 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div _ngcontent-oko-c303 className="card">
                            <div _ngcontent-oko-c303 className="header">
                              <h2 _ngcontent-oko-c303>Employee Attendance</h2>
                            </div>
                            <div _ngcontent-oko-c303 className="body">
                              <mat-tab-group _ngcontent-oko-c303 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs">
                                <mat-tab-header className="mat-mdc-tab-header">
                                  <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                    <div className="mat-mdc-tab-header-pagination-chevron" />
                                  </button>
                                  <div className="mat-mdc-tab-label-container">
                                    <div className="mat-mdc-tab-list" role="tablist" style={{transform: 'translateX(0px)'}}>
                                      <div className="mat-mdc-tab-labels">
                                        <div aria-controls="mat-tab-content-3-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-3-0" mattablabelwrapper role="tab" tabIndex={0}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                            <span className="mdc-tab__text-label">
                                              <mat-icon _ngcontent-oko-c303 aria-hidden="true" className="mat-icon notranslate example-tab-icon msr-2 material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" role="img">
                                                article
                                              </mat-icon>
                                              Details
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
                                        <div aria-controls="mat-tab-content-3-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-3-1" mattablabelwrapper role="tab" tabIndex={-1}>
                                          <span className="mdc-tab__ripple"> </span>
                                          <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                          <span className="mdc-tab__content">
                                           
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
                                  <mat-tab-body aria-labelledby="mat-tab-label-3-0" className="mat-mdc-tab-body ng-tns-c218-170 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-3-0" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-170 ng-trigger ng-trigger-translateTab" style={{transform: 'none'}}>
                                      {/* */}
                                      <div _ngcontent-oko-c303 className="tab-pane mt-5 ng-star-inserted" style={{}}>
                                        <div _ngcontent-oko-c303 className="row clearfix">
                                          <div _ngcontent-oko-c303 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div _ngcontent-oko-c303 className="card">
                                              <div _ngcontent-oko-c303 className="chat">
                                                <div _ngcontent-oko-c303 className="chat-header clearfix">
                                                  <img _ngcontent-oko-c303 alt="avatar" src="../../../../assets/images/user/user3.jpg" />
                                                  <div _ngcontent-oko-c303 className="row">
                                                    <div _ngcontent-oko-c303 className="col-lg-3 col-sm-6">
                                                      <div _ngcontent-oko-c303 className="chat-about">
                                                        <div _ngcontent-oko-c303 className="chat-with">
                                                          Maria Smith
                                                        </div>
                                                        <div _ngcontent-oko-c303 className="chat-num-messages">
                                                          Software Developer
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div _ngcontent-oko-c303 className="col-lg-3 col-sm-6">
                                                      <div _ngcontent-oko-c303 className="chat-about">
                                                        <div _ngcontent-oko-c303 className="chat-with">
                                                          Employee ID
                                                        </div>
                                                        <div _ngcontent-oko-c303 className="chat-num-messages">
                                                          IM062587UT
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div _ngcontent-oko-c303 className="col-lg-3 col-sm-6">
                                                      <div _ngcontent-oko-c303 className="chat-about">
                                                        <div _ngcontent-oko-c303 className="chat-with">
                                                          Joining Date
                                                        </div>
                                                        <div _ngcontent-oko-c303 className="chat-num-messages">
                                                          12 January 2015
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div _ngcontent-oko-c303 className="col-lg-3 col-sm-6">
                                                      <div _ngcontent-oko-c303 className="chat-about">
                                                        <div _ngcontent-oko-c303 className="chat-with">
                                                          Department
                                                        </div>
                                                        <div _ngcontent-oko-c303 className="chat-num-messages">
                                                          Account
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div _ngcontent-oko-c303 className="col-lg-12 col-md-12 col-sm-12">
                                            <div _ngcontent-oko-c303 className="card project_widget">
                                              <div _ngcontent-oko-c303 className="header" />
                                              <div _ngcontent-oko-c303 className="body">
                                                <div _ngcontent-oko-c303 className="row">
                                                  <div _ngcontent-oko-c303 className="col-lg-3 col-sm-6">
                                                    <div _ngcontent-oko-c303 className="text-center m-b-20">
                                                      <h3 _ngcontent-oko-c303 className="m-b-10 col-green">
                                                        08:00
                                                      </h3>
                                                      <div _ngcontent-oko-c303 className="text font-15 m-b-5">
                                                        Average Working Hours
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-oko-c303 className="col-lg-3 col-sm-6">
                                                    <div _ngcontent-oko-c303 className="text-center m-b-20">
                                                      <h3 _ngcontent-oko-c303 className="m-b-10 col-green">
                                                        10:30 AM
                                                      </h3>
                                                      <div _ngcontent-oko-c303 className="text font-15 m-b-5">
                                                        Average In Time
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-oko-c303 className="col-lg-3 col-sm-6">
                                                    <div _ngcontent-oko-c303 className="text-center m-b-20">
                                                      <h3 _ngcontent-oko-c303 className="m-b-10 col-green">
                                                        07:30 PM
                                                      </h3>
                                                      <div _ngcontent-oko-c303 className="text font-15 m-b-5">
                                                        Average Out Time
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div _ngcontent-oko-c303 className="col-lg-3 col-sm-6">
                                                    <div _ngcontent-oko-c303 className="text-center m-b-20">
                                                      <h3 _ngcontent-oko-c303 className="m-b-10 col-green">
                                                        01:00
                                                      </h3>
                                                      <div _ngcontent-oko-c303 className="text font-15 m-b-5">
                                                        Average Break Time
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div _ngcontent-oko-c303 className="responsive_table">
                                                  <table _ngcontent-oko-c303 className="table table-hover js-basic-example contact_list">
                                                    <thead _ngcontent-oko-c303>
                                                      <tr _ngcontent-oko-c303>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Date
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Check In
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Check Out
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Working Hours
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Shift
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Status
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Action
                                                        </th>
                                                      </tr>
                                                    </thead>
                                                    <tbody _ngcontent-oko-c303>
                                                      <tr _ngcontent-oko-c303 className="odd gradeX">
                                                        <td _ngcontent-oko-c303 className="center">
                                                          10-02-2018
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          10:28
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          19:32
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          08:04
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          Shift 1
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          <div _ngcontent-oko-c303 className="badge col-green">
                                                            Present
                                                          </div>
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center"><Link to="/Editattandance">
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-27" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                                                <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button></Link>
                                                          {/* */}
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-28" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                                                <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <polyline points="3 6 5 6 21 6" />
                                                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                  <line x1={10} x2={10} y1={11} y2={17} />
                                                                  <line x1={14} x2={14} y1={11} y2={17} />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button>
                                                          {/* */}
                                                        </td>
                                                      </tr>
                                                      <tr _ngcontent-oko-c303 className="odd gradeX">
                                                        <td _ngcontent-oko-c303 className="center">
                                                          11-02-2018
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-red">
                                                          10:32
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          19:32
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          08:00
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          Shift 1
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          <div _ngcontent-oko-c303 className="badge col-green">
                                                            Present
                                                          </div>
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center"><Link to="/Editattandance">
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-27" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                                                <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button></Link>
                                                          {/* */}
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-28" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                                                <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <polyline points="3 6 5 6 21 6" />
                                                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                  <line x1={10} x2={10} y1={11} y2={17} />
                                                                  <line x1={14} x2={14} y1={11} y2={17} />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button>
                                                          {/* */}
                                                        </td>
                                                      </tr>
                                                      <tr _ngcontent-oko-c303 className="odd gradeX">
                                                        <td _ngcontent-oko-c303 className="center">
                                                          12-02-2018
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          -
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          -
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          -
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          Shift 1
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          <div _ngcontent-oko-c303 className="badge col-red">
                                                            Leave
                                                          </div>
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center"><Link to="/Editattandance">
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-27" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                                                <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button></Link>
                                                          {/* */}
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-28" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                                                <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <polyline points="3 6 5 6 21 6" />
                                                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                  <line x1={10} x2={10} y1={11} y2={17} />
                                                                  <line x1={14} x2={14} y1={11} y2={17} />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button>
                                                          {/* */}
                                                        </td>
                                                      </tr>
                                                      <tr _ngcontent-oko-c303 className="odd gradeX">
                                                        <td _ngcontent-oko-c303 className="center">
                                                          13-02-2018
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-red">
                                                          10:35
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          19:31
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-red">
                                                          07:56
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          Shift 1
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          <div _ngcontent-oko-c303 className="badge col-green">
                                                            Present
                                                          </div>
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center"><Link to="/Editattandance">
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-27" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                                                <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button></Link>
                                                          {/* */}
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-28" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                                                <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <polyline points="3 6 5 6 21 6" />
                                                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                  <line x1={10} x2={10} y1={11} y2={17} />
                                                                  <line x1={14} x2={14} y1={11} y2={17} />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button>
                                                          {/* */}
                                                        </td>
                                                      </tr>
                                                      <tr _ngcontent-oko-c303 className="odd gradeX">
                                                        <td _ngcontent-oko-c303 className="center">
                                                          14-02-2018
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          10:25
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-red">
                                                          19:29
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          08:04
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          Shift 1
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          <div _ngcontent-oko-c303 className="badge col-green">
                                                            Present
                                                          </div>
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center"><Link to="/Editattandance">
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-27" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                                                <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button></Link>
                                                          {/* */}
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-28" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                                                <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <polyline points="3 6 5 6 21 6" />
                                                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                  <line x1={10} x2={10} y1={11} y2={17} />
                                                                  <line x1={14} x2={14} y1={11} y2={17} />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button>
                                                          {/* */}
                                                        </td>
                                                      </tr>
                                                      <tr _ngcontent-oko-c303 className="odd gradeX">
                                                        <td _ngcontent-oko-c303 className="center">
                                                          15-02-2018
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          -
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          -
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          -
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          Shift 1
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          <div _ngcontent-oko-c303 className="badge col-cyan">
                                                            Weekend
                                                          </div>
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center"><Link to="/Editattandance">
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-27" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                                                <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button></Link>
                                                          {/* */}
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-28" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                                                <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <polyline points="3 6 5 6 21 6" />
                                                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                  <line x1={10} x2={10} y1={11} y2={17} />
                                                                  <line x1={14} x2={14} y1={11} y2={17} />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button>
                                                          {/* */}
                                                        </td>
                                                      </tr>
                                                      <tr _ngcontent-oko-c303 className="odd gradeX">
                                                        <td _ngcontent-oko-c303 className="center">
                                                          16-02-2018
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          -
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          -
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          -
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          Shift 1
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          <div _ngcontent-oko-c303 className="badge col-cyan">
                                                            Weekend
                                                          </div>
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center"><Link to="/Editattandance">
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-27" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                                                <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button></Link>
                                                          {/* */}
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-28" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                                                <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <polyline points="3 6 5 6 21 6" />
                                                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                  <line x1={10} x2={10} y1={11} y2={17} />
                                                                  <line x1={14} x2={14} y1={11} y2={17} />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button>
                                                          {/* */}
                                                        </td>
                                                      </tr>
                                                      <tr _ngcontent-oko-c303 className="odd gradeX">
                                                        <td _ngcontent-oko-c303 className="center">
                                                          17-02-2018
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          10:28
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          19:35
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center col-green">
                                                          08:07
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          Shift 1
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center">
                                                          <div _ngcontent-oko-c303 className="badge col-green">
                                                            Present
                                                          </div>
                                                        </td>
                                                        <td _ngcontent-oko-c303 className="center"><Link to="/Editattandance">
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-27" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                                                <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button></Link>
                                                          {/* */}
                                                          <button _ngcontent-oko-c303 aria-describedby="cdk-describedby-message-oko-1-28" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-oko-c303 _nghost-oko-c130>
                                                              <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                                                <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                  <polyline points="3 6 5 6 21 6" />
                                                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                  <line x1={10} x2={10} y1={11} y2={17} />
                                                                  <line x1={14} x2={14} y1={11} y2={17} />
                                                                </svg>
                                                              </i-feather>
                                                            </app-feather-icons>
                                                            <span className="mat-mdc-focus-indicator">
                                                            </span>
                                                            <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                            </span>
                                                            <span className="mat-mdc-button-touch-target">
                                                            </span>
                                                          </button>
                                                          {/* */}
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                    <tfoot _ngcontent-oko-c303>
                                                      <tr _ngcontent-oko-c303>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Date
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Check In
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Check Out
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Working Hours
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Shift
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Status
                                                        </th>
                                                        <th _ngcontent-oko-c303 className="center">
                                                          Action
                                                        </th>
                                                      </tr>
                                                    </tfoot>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* */}
                                    </div>
                                  </mat-tab-body>
                                  <mat-tab-body aria-labelledby="mat-tab-label-3-1" className="mat-mdc-tab-body ng-tns-c218-171 ng-star-inserted" id="mat-tab-content-3-1" role="tabpanel">
                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-171 ng-trigger ng-trigger-translateTab ng-animating">
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
                    </div>
                  

    </>
  );
}





