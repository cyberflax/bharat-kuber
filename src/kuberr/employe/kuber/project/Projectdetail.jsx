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
import a19 from "../img/a19.webp";
import a20 from "../img/a20.jpg";
import a21 from "../img/a21.png";
import a22 from "../img/a22.png";
import a23 from "../img/a23.png";
import a24 from "../img/a24.jpg";
import a25 from "../img/a25.png";
import a26 from "../img/a26.png";
import a27 from "../img/a27.png";
import a28 from "../img/a28.jpg";
import a29 from "../img/a29.png";
// import edit from "../img/edit.png"
// import dele from "../img/dele.png"
import a31 from "../../dashboard/img/logout.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  
} from "@fortawesome/free-solid-svg-icons";

export default function Projectdetail() {
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
                <Accordion.Header><img className='img1' alt="aseris" src={a17} /><p className="accord-p">More Apps </p><span _ngcontent-sas-c132 className="badge bg-orange sidebar-badge float-end ng-star-inserted">
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
                <Accordion.Header><img className='img1' alt="aseris" src={a18} /><p className="accord-p"> Widgets</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Chart1" className='link1'> Chart Widget</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Data1" className='link1'> Data Widget</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Components</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="18" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a19} /><p className="accord-p">User Interface (UI)</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Alert" className='link1'> Alerts</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Budge" className='link1'> Badges</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Chips" className='link1'> Chips</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Model"className='link1'> Modal</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Button"className='link1'>  Buttons</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Expansion"className='link1'> Expansion Panel</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Bottom"className='link1'> Bottom Sheet</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Dialogs"className='link1'> Dialogs</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Cards"className='link1'> Cards</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Labels"className='link1'> Labels</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/List1"className='link1'> List Group</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Snack"className='link1'> Snackbar</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Preload"className='link1'> Preloaders</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Progress"className='link1'> Progress Bars</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Tabs"className='link1'> Tabs</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Typography"className='link1'> Typography</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/Helper"className='link1'> Helper Classes</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="19" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header> <img className='img1' alt="aseris" src={a20} /><p className="accord-p">Forms</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/formcantrol" className='link1'> Form Controls</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Advance" className='link1'> Advanced Controls</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Formex" className='link1'> Form Examples</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Formvalid" className='link1'> Form Validation</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Wizard" className='link1'> Form Wizard</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editer" className='link1'>  Editors</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="20" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a21} /><p className="accord-p"> Tables</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Basic" className='link1'> Basic Tables</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Material1" className='link1'> Material Tables</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Ngx" className='link1'> ngx-datatable</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="21" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a22} /><p className="accord-p"> Medias</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Gallary" className='link1'> Image Gallery</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="22" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a23} /><p className="accord-p"> Charts</p><span _ngcontent-sas-c132 className="badge bg-green sidebar-badge float-end ng-star-inserted">
                                        7
                                      </span></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Echart" className='link1'> Echart</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Apex" className='link1'>  Apex</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Chart" className='link1'>ChartJS</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Ngx" className='link1'>Ngx-Charts</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Gouge" className='link1'>Gauge</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="23" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header> <img className='img1' alt="aseris" src={a24} /><p className="accord-p">Timeline</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Timeline" className='link1'> Timeline 1</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Timeline1" className='link1'> Timeline 2</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="24" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header> <img className='img1' alt="aseris" src={a25} /><p className="accord-p">Icons</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Material" className='link1'> Material Icons</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Font" className='link1'> Font Awesome</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="25" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
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
              <Accordion.Item eventKey="26" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header> <img className='img1' alt="aseris" src={a27} /><p className="accord-p"> Extra Pages</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Profile1" className='link1'>  Profile</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Princing" className='link1'> Pricing</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Invoice1" className='link1'> Invoice</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Faqs" className='link1'>  Faqs</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Blanck" className='link1'>Blank Page</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="27" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>,
                <Accordion.Header><img className='img1' alt="aseris" src={a28} /><p className="accord-p">Maps</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Google" className='link1'>Google Map</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="28" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a29} /><p className="accord-p">Multi level Menu</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/First" className='link1'>First</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/First" className='link1'> Second</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Second" className='link1'>Second 1</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Second" className='link1'> Second 2</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Third" className='link1'>third 1</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Third" className='link1'>third </Link ></Dropdown.Item>
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
                  
                      <div _ngcontent-oko-c234 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c234 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Project Details
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
                                    Projects
                                  </li>
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    Project Details
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c234 className="row">
                        <div _ngcontent-oko-c234 className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                          <div _ngcontent-oko-c234 className="card">
                            <div _ngcontent-oko-c234 className="header">
                              <h2 _ngcontent-oko-c234>Project Details</h2>
                            </div>
                            <div _ngcontent-oko-c234 className="body">
                              <div _ngcontent-oko-c234 className="wrapper wrapper-content animated fadeInUp">
                                <div _ngcontent-oko-c234 className="ibox">
                                  <div _ngcontent-oko-c234 className="ibox-content">
                                    <div _ngcontent-oko-c234 className="row">
                                      <div _ngcontent-oko-c234 className="col-lg-12">
                                        <div _ngcontent-oko-c234 className="m-b-md">
                                          <p _ngcontent-oko-c234 className="col-blue cursor-pointer pull-right">
                                           <Link to="/Addproject"> Edit project </Link>
                                          </p>
                                          <h3 _ngcontent-oko-c234 className="project-name">
                                            Wordpress Website
                                          </h3>
                                        </div>
                                        <dl _ngcontent-oko-c234>
                                          <dt _ngcontent-oko-c234 className="pull-left me-2">
                                            Status:
                                          </dt>
                                          <dd _ngcontent-oko-c234>
                                            <span _ngcontent-isv-c222 _ngcontent-oko-c234 className="project-bedge2 project-type-Testing">
                                              <div _ngcontent-isv-c222 _ngcontent-oko-c234 className="pro-left">
                                                Active
                                              </div>
                                            </span>
                                          </dd>
                                        </dl>
                                      </div>
                                    </div>
                                    <div _ngcontent-oko-c234 className="row">
                                      <div _ngcontent-oko-c234 className="col-lg-5">
                                        <dl _ngcontent-oko-c234 className="dl-horizontal">
                                          <dt _ngcontent-oko-c234 className="pull-left me-2">
                                            Created by:
                                          </dt>
                                          <dd _ngcontent-oko-c234>Jayesh Patel</dd>
                                          <dt _ngcontent-oko-c234 className="pull-left me-2">
                                            Messages:
                                          </dt>
                                          <dd _ngcontent-oko-c234>277</dd>
                                          <dt _ngcontent-oko-c234 className="pull-left me-2">
                                            Commits:
                                          </dt>
                                          <dd _ngcontent-oko-c234>175</dd>
                                          <dt _ngcontent-oko-c234 className="pull-left me-2">
                                            Version:
                                          </dt>
                                          <dd _ngcontent-oko-c234>v2.5.2</dd>
                                          <dt _ngcontent-oko-c234 className="pull-left me-2">
                                            Project Status:
                                          </dt>
                                          <dd _ngcontent-oko-c234>
                                            <div _ngcontent-oko-c234 className="progress progress-xs mt-3">
                                              <mat-progress-bar _ngcontent-oko-c234 aria-valuemax={100} aria-valuemin={0} aria-valuenow={60} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={60}>
                                                <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                  <div className="mdc-linear-progress__buffer-bar" style={{flexBasis: '100%'}} />
                                                  <div className="mdc-linear-progress__buffer-dots" />
                                                </div>
                                                <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.6)'}}>
                                                  <span className="mdc-linear-progress__bar-inner">
                                                  </span>
                                                </div>
                                                <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                  <span className="mdc-linear-progress__bar-inner">
                                                  </span>
                                                </div>
                                              </mat-progress-bar>
                                            </div>
                                          </dd>
                                          <small _ngcontent-oko-c234>
                                            <strong _ngcontent-oko-c234>
                                              60%
                                            </strong>
                                            Project completed.
                                          </small>
                                        </dl>
                                      </div>
                                      <div _ngcontent-oko-c234 className="col-lg-7" id="cluster_info">
                                        <dl _ngcontent-oko-c234 className="dl-horizontal">
                                          <dt _ngcontent-oko-c234 className="pull-left me-2">
                                            Last Updated:
                                          </dt>
                                          <dd _ngcontent-oko-c234>
                                            22-08-2021 12:15:57
                                          </dd>
                                          <dt _ngcontent-oko-c234 className="pull-left me-2">
                                            Created:
                                          </dt>
                                          <dd _ngcontent-oko-c234>17-05-2020</dd>
                                          <dt _ngcontent-oko-c234 className="pull-left me-2">
                                            Deadline:
                                          </dt>
                                          <dd _ngcontent-oko-c234>22-09-2021</dd>
                                          <dt _ngcontent-oko-c234 className="pull-left me-2">
                                            Team:
                                          </dt>
                                          <dd _ngcontent-oko-c234 className="project-people">
                                            <ul _ngcontent-oko-c234 className="list-unstyled order-list">
                                              <li _ngcontent-oko-c234 className="avatar avatar-sm">
                                                <img _ngcontent-oko-c234 alt="user" className="rounded-circle" src="../../assets/images/user/user1.jpg" />
                                              </li>
                                              <li _ngcontent-oko-c234 className="avatar avatar-sm">
                                                <img _ngcontent-oko-c234 alt="user" className="rounded-circle" src="../../assets/images/user/user2.jpg" />
                                              </li>
                                              <li _ngcontent-oko-c234 className="avatar avatar-sm">
                                                <img _ngcontent-oko-c234 alt="user" className="rounded-circle" src="../../assets/images/user/user3.jpg" />
                                              </li>
                                              <li _ngcontent-oko-c234 className="avatar avatar-sm">
                                                <span _ngcontent-oko-c234 className="badge">
                                                  +4
                                                </span>
                                              </li>
                                            </ul>
                                          </dd>
                                        </dl>
                                      </div>
                                    </div>
                                    <div _ngcontent-oko-c234 className="row">
                                      <div _ngcontent-oko-c234 className="col-lg-12">
                                        <div _ngcontent-oko-c234 className="project-activity">
                                          <mat-tab-group _ngcontent-oko-c234 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs">
                                            <mat-tab-header className="mat-mdc-tab-header">
                                              <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                                <div className="mat-mdc-tab-header-pagination-chevron" />
                                              </button>
                                              <div className="mat-mdc-tab-label-container">
                                                <div className="mat-mdc-tab-list" role="tablist" style={{transform: 'translateX(0px)'}}>
                                                  <div className="mat-mdc-tab-labels">
                                                    <div aria-controls="mat-tab-content-0-0" aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-0-0" mattablabelwrapper role="tab" tabIndex={0}>
                                                      <span className="mdc-tab__ripple">
                                                      </span>
                                                      <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                                      <span className="mdc-tab__content">
                                                        <span className="mdc-tab__text-label">
                                                          <mat-icon _ngcontent-oko-c234 aria-hidden="true" className="mat-icon notranslate example-tab-icon msr-2 material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" role="img">
                                                            mark_email_unread
                                                          </mat-icon>
                                                          Messages
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
                                                    <div aria-controls="mat-tab-content-0-1" aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-0-1" mattablabelwrapper role="tab" tabIndex={-1}>
                                                      <span className="mdc-tab__ripple">
                                                      </span>
                                                      <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple />
                                                      <span className="mdc-tab__content">
                                                        <span className="mdc-tab__text-label">
                                                          <mat-icon _ngcontent-oko-c234 aria-hidden="true" className="mat-icon notranslate example-tab-icon msr-2 material-icons mat-ligature-font mat-icon-no-color ng-star-inserted" data-mat-icon-type="font" role="img">
                                                            local_activity
                                                          </mat-icon>
                                                          Last Activity
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
                                              <mat-tab-body aria-labelledby="mat-tab-label-0-0" className="mat-mdc-tab-body ng-tns-c218-41 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-0-0" role="tabpanel">
                                                <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-41 ng-trigger ng-trigger-translateTab" style={{transform: 'none'}}>
                                                  {/* */}
                                                  <div _ngcontent-oko-c234 className="col-lg-12 col-md-12 col-sm-12 ng-star-inserted" style={{}}>
                                                    <div _ngcontent-oko-c234 className="tab-pane active">
                                                      <div _ngcontent-oko-c234 className="feed-activity-list">
                                                        <div _ngcontent-oko-c234 className="feed-element">
                                                          <div _ngcontent-oko-c234 className="pull-left">
                                                            <img _ngcontent-oko-c234 alt="image" className="rounded-circle" src="../../assets/images/user/user2.jpg" />
                                                          </div>
                                                          <div _ngcontent-oko-c234 className="media-body">
                                                            <small _ngcontent-oko-c234 className="pull-right">
                                                              2h ago
                                                            </small>
                                                            <strong _ngcontent-oko-c234>
                                                              Airi Satou
                                                            </strong>
                                                            posted message on
                                                            <strong _ngcontent-oko-c234>
                                                              Ashton Cox
                                                            </strong>
                                                            site.
                                                            <br _ngcontent-oko-c234 />
                                                            <small _ngcontent-oko-c234 className="text-muted">
                                                              Today 11:10 pm -
                                                              15/04/2021
                                                            </small>
                                                            <div _ngcontent-oko-c234 className="well">
                                                              Lorem Ipsum is simply
                                                              dummy text of the
                                                              printing and typesetting
                                                              industry. Lorem Ipsum
                                                              has been the industry's
                                                              standard dummy text ever
                                                              since the 1500s. Over
                                                              the years, sometimes by
                                                              accident, sometimes on
                                                              purpose (injected humour
                                                              and the like).
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div _ngcontent-oko-c234 className="feed-element">
                                                          <a _ngcontent-oko-c234 className="pull-left" href="#">
                                                            <img _ngcontent-oko-c234 alt="image" className="rounded-circle" src="../../assets/images/user/user3.jpg" />
                                                          </a>
                                                          <div _ngcontent-oko-c234 className="media-body">
                                                            <small _ngcontent-oko-c234 className="pull-right">
                                                              3h ago
                                                            </small>
                                                            <strong _ngcontent-oko-c234>
                                                              Cara Stevens
                                                            </strong>
                                                            add 1 photo on
                                                            <strong _ngcontent-oko-c234>
                                                              Ashton Cox
                                                            </strong>
                                                            .
                                                            <br _ngcontent-oko-c234 />
                                                            <small _ngcontent-oko-c234 className="text-muted">
                                                              2 days ago at 9:47am
                                                            </small>
                                                          </div>
                                                        </div>
                                                        <div _ngcontent-oko-c234 className="feed-element">
                                                          <a _ngcontent-oko-c234 className="pull-left" href="#">
                                                            <img _ngcontent-oko-c234 alt="image" className="rounded-circle" src="../../assets/images/user/user8.jpg" />
                                                          </a>
                                                          <div _ngcontent-oko-c234 className="media-body">
                                                            <small _ngcontent-oko-c234 className="pull-right text-navy">
                                                              5h ago
                                                            </small>
                                                            <strong _ngcontent-oko-c234>
                                                              Angelica Ramos
                                                            </strong>
                                                            started following
                                                            <strong _ngcontent-oko-c234>
                                                              Ashton Cox
                                                            </strong>
                                                            .
                                                            <br _ngcontent-oko-c234 />
                                                            <small _ngcontent-oko-c234 className="text-muted">
                                                              Yesterday 2:21 pm -
                                                              18/04/2021
                                                            </small>
                                                            <div _ngcontent-oko-c234 className="actions">
                                                              <a _ngcontent-oko-c234 className="btn btn-xs btn-white">
                                                                <i _ngcontent-oko-c234 className="fa fa-thumbs-up col-blue">
                                                                </i>
                                                                Like
                                                              </a>
                                                              <a _ngcontent-oko-c234 className="btn btn-xs btn-white">
                                                                <i _ngcontent-oko-c234 className="fa fa-heart col-red">
                                                                </i>
                                                                Love
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div _ngcontent-oko-c234 className="feed-element">
                                                          <a _ngcontent-oko-c234 className="pull-left" href="#">
                                                            <img _ngcontent-oko-c234 alt="image" className="rounded-circle" src="../../assets/images/user/user5.jpg" />
                                                          </a>
                                                          <div _ngcontent-oko-c234 className="media-body">
                                                            <small _ngcontent-oko-c234 className="pull-right">
                                                              2h ago
                                                            </small>
                                                            <strong _ngcontent-oko-c234>
                                                              Jens Brincker
                                                            </strong>
                                                            posted message on
                                                            <strong _ngcontent-oko-c234>
                                                              Angelica Ramos
                                                            </strong>
                                                            site.
                                                            <br _ngcontent-oko-c234 />
                                                            <small _ngcontent-oko-c234 className="text-muted">
                                                              Yesterday 10:20 pm -
                                                              12/06/2021
                                                            </small>
                                                            <div _ngcontent-oko-c234 className="well">
                                                              Lorem Ipsum is simply
                                                              dummy text of the
                                                              printing and typesetting
                                                              industry. Lorem Ipsum
                                                              has been the industry's
                                                              standard dummy text ever
                                                              since the 1500s. Over
                                                              the years, sometimes by
                                                              accident, sometimes on
                                                              purpose (injected humour
                                                              and the like).
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div _ngcontent-oko-c234 className="feed-element">
                                                          <a _ngcontent-oko-c234 className="pull-left" href="#">
                                                            <img _ngcontent-oko-c234 alt="image" className="rounded-circle" src="../../assets/images/user/user9.jpg" />
                                                          </a>
                                                          <div _ngcontent-oko-c234 className="media-body">
                                                            <small _ngcontent-oko-c234 className="pull-right">
                                                              23h ago
                                                            </small>
                                                            <strong _ngcontent-oko-c234>
                                                              Sarah Smith
                                                            </strong>
                                                            love
                                                            <strong _ngcontent-oko-c234>
                                                              Mark Hay
                                                            </strong>
                                                            .
                                                            <br _ngcontent-oko-c234 />
                                                            <small _ngcontent-oko-c234 className="text-muted">
                                                              2 days ago at 12:30 am -
                                                              11/06/2021
                                                            </small>
                                                          </div>
                                                        </div>
                                                        <div _ngcontent-oko-c234 className="feed-element">
                                                          <a _ngcontent-oko-c234 className="pull-left" href="#">
                                                            <img _ngcontent-oko-c234 alt="image" className="rounded-circle" src="../../assets/images/user/user1.jpg" />
                                                          </a>
                                                          <div _ngcontent-oko-c234 className="media-body">
                                                            <small _ngcontent-oko-c234 className="pull-right">
                                                              46h ago
                                                            </small>
                                                            <strong _ngcontent-oko-c234>
                                                              Jens Brincker
                                                            </strong>
                                                            started following
                                                            <strong _ngcontent-oko-c234>
                                                              Ashton Cox
                                                            </strong>
                                                            .
                                                            <br _ngcontent-oko-c234 />
                                                            <small _ngcontent-oko-c234 className="text-muted">
                                                              3 days ago at 7:58 pm -
                                                              10/02/2021
                                                            </small>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  {/* */}
                                                </div>
                                              </mat-tab-body>
                                              <mat-tab-body aria-labelledby="mat-tab-label-0-1" className="mat-mdc-tab-body ng-tns-c218-42 ng-star-inserted" id="mat-tab-content-0-1" role="tabpanel">
                                                <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c218-42 ng-trigger ng-trigger-translateTab ng-animating">
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-oko-c234 className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                          <div _ngcontent-oko-c234 className="card">
                            <div _ngcontent-oko-c234 className="body">
                              <div _ngcontent-oko-c234 className="wrapper">
                                <div _ngcontent-oko-c234 className="project-card-header">
                                  Project description
                                </div>
                                <p _ngcontent-oko-c234>
                                  Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley of type and
                                  scrambled it to make a type specimen book.
                                </p>
                                <br _ngcontent-oko-c234 />
                                <p _ngcontent-oko-c234>
                                  It has survived not only five centuries, but also
                                  the leap into electronic typesetting, remaining
                                  essentially unchanged. It was popularised in the
                                  1960s with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with desktop
                                  publishing software like Aldus PageMaker including
                                  versions of Lorem Ipsum.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c234 className="card">
                            <div _ngcontent-oko-c234 className="body">
                              <div _ngcontent-oko-c234 className="wrapper">
                                <div _ngcontent-oko-c234 className="project-card-header">
                                  Client Details
                                </div>
                                <div _ngcontent-oko-c234 className="project-info-box">
                                  <p _ngcontent-oko-c234>
                                    <b _ngcontent-oko-c234> Client: </b>
                                    xyz pvt.ltd
                                  </p>
                                  <p _ngcontent-oko-c234>
                                    <b _ngcontent-oko-c234> Date: </b>
                                    25.07.2021
                                  </p>
                                  <p _ngcontent-oko-c234>
                                    <b _ngcontent-oko-c234> Contact Person: </b>
                                    John Doe
                                  </p>
                                  <p _ngcontent-oko-c234>
                                    <b _ngcontent-oko-c234> Country: </b>
                                    USA
                                  </p>
                                  <p _ngcontent-oko-c234 className="mb-0">
                                    <b _ngcontent-oko-c234> Budget: </b>
                                    $500
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-oko-c234 className="card">
                            <div _ngcontent-oko-c234 className="body">
                              <div _ngcontent-oko-c234 className="wrapper">
                                <div _ngcontent-oko-c234 className="project-card-header">
                                  Project tags
                                </div>
                                <div _ngcontent-oko-c234 className="panel-body mb-4">
                                  <span _ngcontent-oko-c234 className="label label-success m-1">
                                    Angular
                                  </span>
                                  <span _ngcontent-oko-c234 className="label label-warning m-1">
                                    Typescript
                                  </span>
                                  <span _ngcontent-oko-c234 className="label label-info m-1">
                                    SCSS
                                  </span>
                                  <span _ngcontent-oko-c234 className="label label-success m-1">
                                    Git
                                  </span>
                                  <span _ngcontent-oko-c234 className="label label-danger m-1">
                                    Admin
                                  </span>
                                  <span _ngcontent-oko-c234 className="label label-warning m-1">
                                    Project
                                  </span>
                                  <span _ngcontent-oko-c234 className="label label-success m-1">
                                    Photoshop
                                  </span>
                                  <span _ngcontent-oko-c234 className="label label-primary m-1">
                                    Material
                                  </span>
                                </div>
                                <div _ngcontent-oko-c234 className="project-card-header">
                                  Project files
                                </div>
                                <div _ngcontent-oko-c234 className="d-flex mb-2">
                                  <div _ngcontent-oko-c234 className="project-doc-icon text-center">
                                    <i _ngcontent-oko-c234 className="far fa-file-pdf col-red">
                                    </i>
                                  </div>
                                  <div _ngcontent-oko-c234 className="content ms-3">
                                    <p _ngcontent-oko-c234 className="mb-1">
                                      Project_document.pdf
                                    </p>
                                    <span _ngcontent-oko-c234> Size: 4.3Mb </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c234 className="d-flex mb-2">
                                  <div _ngcontent-oko-c234 className="project-doc-icon text-center">
                                    <i _ngcontent-oko-c234 className="far fa-file-word col-blue">
                                    </i>
                                  </div>
                                  <div _ngcontent-oko-c234 className="content ms-3">
                                    <p _ngcontent-oko-c234 className="mb-1">
                                      error_log_47859657458.docx
                                    </p>
                                    <span _ngcontent-oko-c234> Size: 2.7Mb </span>
                                  </div>
                                </div>
                                <div _ngcontent-oko-c234 className="d-flex">
                                  <div _ngcontent-oko-c234 className="project-doc-icon text-center">
                                    <i _ngcontent-oko-c234 className="far fa-file-image col-green">
                                    </i>
                                  </div>
                                  <div _ngcontent-oko-c234 className="content ms-3">
                                    <p _ngcontent-oko-c234 className="mb-1">
                                      screenshots.jpeg
                                    </p>
                                    <span _ngcontent-oko-c234> Size: 2.0Mb </span>
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





