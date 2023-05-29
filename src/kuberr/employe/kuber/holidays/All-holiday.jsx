import React, { useState } from "react";
import "../../kuber/madhav/Madhav.css"

import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Ad from "../img/Ad.png"
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
import a31 from "../../dashboard/img/logout.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  
} from "@fortawesome/free-solid-svg-icons";


export default function Allholiday() {
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
                             
          
         
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
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
      <Accordion.Item eventKey="2"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
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
      <Accordion.Item eventKey="3"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a4} /><p className="accord-p">Leave Management</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/LeaveRequest" className='link1'>All Leave Requests</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Leavesbalance"className='link1'>Leave Balance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Leavetype"className='link1'>Leave Types</Link ></Dropdown.Item>
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a5} /><p className="accord-p">Holidays</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allholiday" className='link1'>All Holidays</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addholiday"className='link1'>Add Holiday</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editholiday"className='link1'>Edit Holiday</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a6} /><p className="accord-p">Attendance</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Today" className='link1'>Today's Attendance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Employ"className='link1'>Employee Attendance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Attendance"className='link1'>Attendance Sheet</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a7} /><p className="accord-p">Clients</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allclient" className='link1'>All Clients</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addclient"className='link1'>Add Client</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editclient"className='link1'>Edit Client</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a8} /><p className="accord-p">Accounts</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allpayment" className='link1'>All Payments</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addpayment"className='link1'>Add Payment</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Invoice"className='link1'>Invoice</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a9} /><p className="accord-p">Payroll</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Employsalary" className='link1'>Employee Salary</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Payslip"className='link1'>Payslip</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a10} /><p className="accord-p">Leaders</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Leads" className='link1'> Leaders</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a11} /><p className="accord-p">Jobs</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Job" className='link1'>Jobs List</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Resumes"className='link1'>Resumes</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Candidate"className='link1'>Candidates</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Shortlist"className='link1'>Shortlist Candidates</Link ></Dropdown.Item>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a12} /><p className="accord-p"> Reports</p></Accordion.Header>
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
      <Accordion.Item eventKey="15"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a16} /><p className="accord-p"> Email</p></Accordion.Header>
        <Accordion.Body>
                  <Dropdown.Item ><Link to="/AdminInbox" className='link1'>Inbox</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Admincompose"className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/AdminMail"className='link1'> Read Email</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="16"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a17} /><p className="accord-p">More Apps</p> <span _ngcontent-sas-c132 className="badge bg-orange sidebar-badge float-end ng-star-inserted">
                                        4
                                      </span></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/" className='link1'> Chat</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Contact Grid</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Support</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/"className='link1'>Drag &amp; Drop</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="17"   style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a18} /><p className="accord-p"> Widgets</p></Accordion.Header>
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
    </div>

    <div _ngcontent-hni-c142 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>
                      <div _ngcontent-oko-c261 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c261 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    All Holiday
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
                                    Holidays
                                  </li>
                                 
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    All Holiday
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c261 className="row">
                        <div _ngcontent-oko-c261 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c261 className="card">
                            <div _ngcontent-oko-c261 className="body">
                              <div _ngcontent-oko-c261 className="responsive_table">
                                <div _ngcontent-oko-c261 className="materialTableHeader">
                                  <div _ngcontent-oko-c261 className="row">
                                    <div _ngcontent-oko-c261 className="col-8">
                                      <ul _ngcontent-oko-c261 className="header-buttons-left ms-0">
                                        <li _ngcontent-oko-c261 className="tbl-title">
                                          <h2 _ngcontent-oko-c261>All Holiday</h2>
                                        </li>
                                        <li _ngcontent-oko-c261 className="tbl-search-box">
                                          <label _ngcontent-oko-c261 htmlFor="search-input">
                                            <i _ngcontent-oko-c261 className="material-icons search-icon">
                                              search
                                            </i>
                                          </label>
                                          <input _ngcontent-oko-c261 aria-label="Search box" className="browser-default search-field" placeholder="Search" type="text" />
                                        </li>
                                        <li _ngcontent-oko-c261 className="tbl-header-btn">
                                          <div _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-21" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger m-l-10" mattooltip="ADD">
                                          <Link to="/Addholiday"style={{borderRadius:"100%",color:"white", textDecorationLine:"none"}}> <img style={{width:"30px",height:"30px"}} src={Ad}/></Link>

                                          </div>
                                         
                                        </li>
                                       
                                        <li _ngcontent-oko-c261 className="tbl-header-btn">
                                          <div _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-23" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger m-l-10" hidden mattooltip="DELETE">
                                           
                                          </div>
                                         
                                        </li>
                                      </ul>
                                    </div>
                                    <div _ngcontent-oko-c261 className="col-4">
                                      <ul _ngcontent-oko-c261 className="tbl-export-btn">
                                        <li _ngcontent-oko-c261>
                                          <div _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-24" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger export-button m-l-10" mattooltip="XLSX">
                                            <img _ngcontent-oko-c261 alt="" src="../../assets/images/icons/xlsx.png" />
                                          </div>
                                         
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <mat-table _ngcontent-oko-c261 className="mat-mdc-table mdc-data-table__table cdk-table mat-sort mat-cell" matsort role="table">
                                  <mat-header-row _ngcontent-oko-c261 className="mat-mdc-header-row mdc-data-table__header-row cdk-header-row ng-star-inserted" role="row">
                                    <mat-header-cell _ngcontent-oko-c261 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="columnheader">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-35">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-35-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-35-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c261 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-142 cdk-column-hName mat-column-hName ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-142" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-142">
                                          Holiday Name
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-142 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-142" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-142 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-142 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-142 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-142" />
                                          </div>
                                        </div>
                                       
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c261 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-143 cdk-column-date mat-column-date ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-143" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-143">
                                          Date
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-143 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-143" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-143 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-143 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-143 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-143" />
                                          </div>
                                        </div>
                                       
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c261 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-144 cdk-column-location mat-column-location ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-144" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-144">
                                          Location
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-144 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-144" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-144 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-144 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-144 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-144" />
                                          </div>
                                        </div>
                                       
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c261 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-145 cdk-column-shift mat-column-shift ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-145" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-145">
                                          Shift
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-145 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-145" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-145 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-145 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-145 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-145" />
                                          </div>
                                        </div>
                                       
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c261 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-146 cdk-column-details mat-column-details ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-146" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-146">
                                          details
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-146 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-146" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-146 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-146 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-146 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-146" />
                                          </div>
                                        </div>
                                       
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c261 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="columnheader">
                                      Actions
                                    </mat-header-cell>
                                   
                                  </mat-header-row>
                                 
                                  <mat-row _ngcontent-oko-c261 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-36">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-36-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-36-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-hName mat-column-hName ng-star-inserted" role="cell">
                                      New Year
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                      12/31/2021
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-location mat-column-location ng-star-inserted" role="cell">
                                      All Locations
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-shift mat-column-shift ng-star-inserted" role="cell">
                                      All Shifts
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c261 className="truncate-text">
                                        This festival is celebrate for.
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Editholiday">
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-25" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                            <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button></Link>
                                     
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-26" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                            <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <polyline points="3 6 5 6 21 6" />
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                              <line x1={10} x2={10} y1={11} y2={17} />
                                              <line x1={14} x2={14} y1={11} y2={17} />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                    </mat-cell>
                                   
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c261 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-37">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-37-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-37-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-hName mat-column-hName ng-star-inserted" role="cell">
                                      World Aids Day
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                      12/10/2021
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-location mat-column-location ng-star-inserted" role="cell">
                                      All Locations
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-shift mat-column-shift ng-star-inserted" role="cell">
                                      Day Shifts
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c261 className="truncate-text">
                                        This festival is celebrate for.
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Editholiday">
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-25" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                            <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button></Link>
                                     
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-26" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                            <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <polyline points="3 6 5 6 21 6" />
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                              <line x1={10} x2={10} y1={11} y2={17} />
                                              <line x1={14} x2={14} y1={11} y2={17} />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                    </mat-cell>
                                   
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c261 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-38">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-38-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-38-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-hName mat-column-hName ng-star-inserted" role="cell">
                                      World Milk Day
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                      06/01/2021
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-location mat-column-location ng-star-inserted" role="cell">
                                      All Locations
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-shift mat-column-shift ng-star-inserted" role="cell">
                                      Night Shifts
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c261 className="truncate-text">
                                        This festival is celebrate for.
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Editholiday">
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-25" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                            <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button></Link>
                                     
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-26" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                            <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <polyline points="3 6 5 6 21 6" />
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                              <line x1={10} x2={10} y1={11} y2={17} />
                                              <line x1={14} x2={14} y1={11} y2={17} />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                    </mat-cell>
                                   
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c261 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-39">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-39-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-39-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-hName mat-column-hName ng-star-inserted" role="cell">
                                      Diwali
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                      11/04/2021
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-location mat-column-location ng-star-inserted" role="cell">
                                      All Locations
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-shift mat-column-shift ng-star-inserted" role="cell">
                                      All Shifts
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c261 className="truncate-text">
                                        This festival is celebrate for.
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-25" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                            <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-26" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                            <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <polyline points="3 6 5 6 21 6" />
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                              <line x1={10} x2={10} y1={11} y2={17} />
                                              <line x1={14} x2={14} y1={11} y2={17} />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                    </mat-cell>
                                   
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c261 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-40">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-40-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-40-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-hName mat-column-hName ng-star-inserted" role="cell">
                                      Global Family Day
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                      01/01/2021
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-location mat-column-location ng-star-inserted" role="cell">
                                      All Locations
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-shift mat-column-shift ng-star-inserted" role="cell">
                                      Night Shifts
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c261 className="truncate-text">
                                        This festival is celebrate for.
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Editholiday">
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-25" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                            <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button></Link>
                                     
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-26" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                            <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <polyline points="3 6 5 6 21 6" />
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                              <line x1={10} x2={10} y1={11} y2={17} />
                                              <line x1={14} x2={14} y1={11} y2={17} />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                    </mat-cell>
                                   
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c261 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-41">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-41-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-41-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-hName mat-column-hName ng-star-inserted" role="cell">
                                      Earth Hour
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                      03/27/2021
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-location mat-column-location ng-star-inserted" role="cell">
                                      All Locations
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-shift mat-column-shift ng-star-inserted" role="cell">
                                      All Shifts
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c261 className="truncate-text">
                                        This festival is celebrate for.
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Editholiday">
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-25" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                            <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button></Link>
                                     
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-26" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                            <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <polyline points="3 6 5 6 21 6" />
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                              <line x1={10} x2={10} y1={11} y2={17} />
                                              <line x1={14} x2={14} y1={11} y2={17} />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                    </mat-cell>
                                   
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c261 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-42">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-42-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-42-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-hName mat-column-hName ng-star-inserted" role="cell">
                                      World Book Day
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                      04/23/2021
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-location mat-column-location ng-star-inserted" role="cell">
                                      All Locations
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-shift mat-column-shift ng-star-inserted" role="cell">
                                      All Shifts
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c261 className="truncate-text">
                                        This festival is celebrate for.
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Editholiday">
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-25" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                            <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button></Link>
                                     
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-26" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                            <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <polyline points="3 6 5 6 21 6" />
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                              <line x1={10} x2={10} y1={11} y2={17} />
                                              <line x1={14} x2={14} y1={11} y2={17} />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                    </mat-cell>
                                   
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c261 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-43">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-43-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-43-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-hName mat-column-hName ng-star-inserted" role="cell">
                                      International Yoga Day
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                      06/21/2021
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-location mat-column-location ng-star-inserted" role="cell">
                                      All Locations
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-shift mat-column-shift ng-star-inserted" role="cell">
                                      Night Shifts
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c261 className="truncate-text">
                                        This festival is celebrate for.
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Editholiday">
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-25" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                            <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button></Link>
                                     
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-26" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                            <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <polyline points="3 6 5 6 21 6" />
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                              <line x1={10} x2={10} y1={11} y2={17} />
                                              <line x1={14} x2={14} y1={11} y2={17} />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                    </mat-cell>
                                   
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c261 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-44">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-44-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-44-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-hName mat-column-hName ng-star-inserted" role="cell">
                                      Eid
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                      04/11/2021
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-location mat-column-location ng-star-inserted" role="cell">
                                      All Locations
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-shift mat-column-shift ng-star-inserted" role="cell">
                                      Day Shifts
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c261 className="truncate-text">
                                        This festival is celebrate for.
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Editholiday">
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-25" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                            <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                      </Link>
                                     
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-26" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                            <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <polyline points="3 6 5 6 21 6" />
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                              <line x1={10} x2={10} y1={11} y2={17} />
                                              <line x1={14} x2={14} y1={11} y2={17} />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                    </mat-cell>
                                   
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c261 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c261 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-45">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-45-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-45-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-hName mat-column-hName ng-star-inserted" role="cell">
                                      Holi
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                      07/25/2021
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-location mat-column-location ng-star-inserted" role="cell">
                                      All Locations
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-shift mat-column-shift ng-star-inserted" role="cell">
                                      Night Shifts
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c261 className="truncate-text">
                                        This festival is celebrate for.
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c261 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Editholiday">
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-25" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-edit">
                                            <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button></Link>
                                     
                                      <button _ngcontent-oko-c261 aria-describedby="cdk-describedby-message-oko-1-26" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c261 _nghost-oko-c130>
                                          <i-feather _ngcontent-oko-c130 _nghost-oko-c112 className="tbl-fav-delete">
                                            <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <polyline points="3 6 5 6 21 6" />
                                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                              <line x1={10} x2={10} y1={11} y2={17} />
                                              <line x1={14} x2={14} y1={11} y2={17} />
                                            </svg>
                                          </i-feather>
                                        </app-feather-icons>
                                        <span className="mat-mdc-focus-indicator"> </span>
                                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                        </span>
                                        <span className="mat-mdc-button-touch-target">
                                        </span>
                                      </button>
                                     
                                    </mat-cell>
                                   
                                  </mat-row>
                                 
                                 
                                 
                                </mat-table>
                               
                                <div _ngcontent-oko-c261 className="no-results ng-star-inserted" style={{display: 'none'}}>
                                  No results
                                </div>
                               
                                <mat-paginator _ngcontent-oko-c261 className="mat-mdc-paginator" role="group">
                                  <div className="mat-mdc-paginator-outer-container">
                                    <div className="mat-mdc-paginator-container">
                                      <div className="mat-mdc-paginator-page-size ng-star-inserted">
                                        <div className="mat-mdc-paginator-page-size-label" id="mat-paginator-page-size-label-5">
                                          Items per page:
                                        </div>
                                        <mat-form-field className="mat-mdc-form-field mat-mdc-paginator-page-size-select ng-tns-c67-147 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-primary ng-star-inserted">
                                         
                                          <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-147 mdc-text-field--outlined mdc-text-field--no-label">
                                           
                                            <div className="mat-mdc-form-field-flex ng-tns-c67-147">
                                              <div className="mdc-notched-outline ng-tns-c67-147 mdc-notched-outline--no-label ng-star-inserted mdc-notched-outline--notched" matformfieldnotchedoutline>
                                                <div className="mdc-notched-outline__leading" />
                                                <div className="mdc-notched-outline__notch" style={{width: '0px'}}>
                                                 
                                                 
                                                 
                                                </div>
                                                <div className="mdc-notched-outline__trailing" />
                                              </div>
                                             
                                             
                                             
                                              <div className="mat-mdc-form-field-infix ng-tns-c67-147">
                                               
                                                <mat-select aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-select-value-25 mat-paginator-page-size-label-5" aria-required="false" className="mat-mdc-select ng-tns-c175-148 ng-tns-c67-147 ng-star-inserted" id="mat-select-24" role="combobox" tabIndex={0}>
                                                  <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-148">
                                                    <div className="mat-mdc-select-value ng-tns-c175-148" id="mat-select-value-25">
                                                     
                                                      <span className="mat-mdc-select-value-text ng-tns-c175-148 ng-star-inserted">
                                                        <span className="mat-mdc-select-min-line ng-tns-c175-148 ng-star-inserted">
                                                          10
                                                        </span>
                                                       
                                                       
                                                      </span>
                                                     
                                                    </div>
                                                    <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-148">
                                                      <div className="mat-mdc-select-arrow ng-tns-c175-148">
                                                        <svg className="ng-tns-c175-148" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                          <path className="ng-tns-c175-148" d="M7 10l5 5 5-5z" />
                                                        </svg>
                                                      </div>
                                                    </div>
                                                  </div>
                                                 
                                                </mat-select>
                                              </div>
                                             
                                             
                                            </div>
                                           
                                          </div>
                                          <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-147">
                                           
                                            <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-147 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{opacity: 1, transform: 'translateY(0%)'}}>
                                             
                                              <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-147" />
                                            </div>
                                           
                                          </div>
                                        </mat-form-field>
                                       
                                       
                                      </div>
                                     
                                      <div className="mat-mdc-paginator-range-actions">
                                        <div aria-live="polite" className="mat-mdc-paginator-range-label">
                                          1 – 10 of 16
                                        </div>
                                       
                                        <button aria-label="Previous page" className="mat-mdc-tooltip-trigger mat-mdc-paginator-navigation-previous mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" disabled="true" mat-icon-button type="button">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <svg className="mat-mdc-paginator-icon" focusable="false" viewBox="0 0 24 24">
                                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                          </svg>
                                          <span className="mat-mdc-focus-indicator">
                                          </span>
                                          <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                          </span>
                                          <span className="mat-mdc-button-touch-target">
                                          </span>
                                        </button>
                                       
                                        <button aria-label="Next page" className="mat-mdc-tooltip-trigger mat-mdc-paginator-navigation-next mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button type="button">
                                          <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                          </span>
                                          <svg className="mat-mdc-paginator-icon" focusable="false" viewBox="0 0 24 24">
                                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                          </svg>
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
                                </mat-paginator>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  

    </>
  );
}





