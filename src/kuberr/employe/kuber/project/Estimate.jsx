import React, { useState } from "react";
import "../../kuber/madhav/Madhav.css"
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Ad from "../img/Ad.png"
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
// import Drop from "../../Drop";
// import { Link } from "react-router-dom";

// import "./styles.css";

export default function Estimate() {
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
        <Accordion.Header><img className='img1' alt="aseris" src={a9}/><p className="accord-p">Payroll</p></Accordion.Header>
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
        <Accordion.Header><img className='img1' alt="aseris" src={a16}/> <p className="accord-p">Email</p></Accordion.Header>
        <Accordion.Body>
                  <Dropdown.Item ><Link to="/AdminInbox" className='link1'>Inbox</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Admincompose"className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/AdminMail"className='link1'> Read Email</Link ></Dropdown.Item>
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
              {/* <Accordion.Item eventKey="18" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
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
      </Accordion.Item> */}
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
              {/* <Accordion.Item eventKey="20" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a21} /> <p className="accord-p">Tables</p></Accordion.Header>
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
        <Accordion.Header><img className='img1' alt="aseris" src={a23}/> <p className="accord-p">Charts</p><span _ngcontent-sas-c132 className="badge bg-green sidebar-badge float-end ng-star-inserted">
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
      </Accordion.Item> */}
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
        <Accordion.Header> <img className='img1' alt="aseris" src={a27}/> <p className="accord-p">Extra Pages</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Profile1" className='link1'>  Profile</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Princing" className='link1'> Pricing</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Invoice1" className='link1'> Invoice</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Faqs" className='link1'>  Faqs</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Blanck" className='link1'>Blank Page</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="27" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
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
   
                    <div _ngcontent-oko-c233 className="content-block">
                      <div _ngcontent-oko-c233 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c233 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    All Estimatess
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
                                    Accounts
                                  </li>
                                  {/* */}
                                  <li _ngcontent-oko-c141 className="breadcrumb-item active">
                                    All Estimatess
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c233 className="row">
                        <div _ngcontent-oko-c233 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div _ngcontent-oko-c233 className="card">
                            <div _ngcontent-oko-c233 className="body">
                              <div _ngcontent-oko-c233 className="responsive_table">
                                <div _ngcontent-oko-c233 className="materialTableHeader">
                                  <div _ngcontent-oko-c233 className="row">
                                    <div _ngcontent-oko-c233 className="col-8">
                                      <ul _ngcontent-oko-c233 className="header-buttons-left ms-0">
                                        <li _ngcontent-oko-c233 className="tbl-title">
                                          <h2 _ngcontent-oko-c233>
                                            All Estimatess
                                          </h2>
                                        </li>
                                        <li _ngcontent-oko-c233 className="tbl-search-box">
                                          <label _ngcontent-oko-c233 htmlFor="search-input">
                                            <i _ngcontent-oko-c233 className="material-icons search-icon">
                                              search
                                            </i>
                                          </label>
                                          <input _ngcontent-oko-c233 aria-label="Search box" className="browser-default search-field" placeholder="Search" type="text" />
                                        </li>
                                        <li _ngcontent-oko-c233 className="tbl-header-btn">
                                          <div _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-4" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger m-l-10" mattooltip="ADD">
                                          <mat-icon _ngcontent-oko-c233 aria-hidden="true" className="mat-icon notranslate col-white material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                               <Link to="/Addproject"style={{borderRadius:"100%",color:"white", textDecorationLine:"none"}}> <img style={{width:"30px",height:"30px"}} src={Ad}/></Link>
                                              </mat-icon>
                                          </div>
                                          {/* */}
                                        </li>
                                       
                                        <li _ngcontent-oko-c233 className="tbl-header-btn">
                                          <div _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-6" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger m-l-10" hidden mattooltip="DELETE">
                                           
                                          </div>
                                          {/* */}
                                        </li>
                                      </ul>
                                    </div>
                                    <div _ngcontent-oko-c233 className="col-4">
                                      <ul _ngcontent-oko-c233 className="tbl-export-btn">
                                        <li _ngcontent-oko-c233>
                                          <div _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-7" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger export-button m-l-10" mattooltip="XLSX">
                                            <img _ngcontent-oko-c233 alt="" src="../../assets/images/icons/xlsx.png" />
                                          </div>
                                          {/* */}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <mat-table _ngcontent-oko-c233 className="mat-mdc-table mdc-data-table__table cdk-table mat-sort mat-cell" matsort role="table">
                                  <mat-header-row _ngcontent-oko-c233 className="mat-mdc-header-row mdc-data-table__header-row cdk-header-row ng-star-inserted" role="row">
                                    <mat-header-cell _ngcontent-oko-c233 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="columnheader">
                                      <mat-checkbox _ngcontent-oko-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-1">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-1-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-1-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-31 cdk-column-eNo mat-column-eNo ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-31" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-31">
                                          Estimate ID
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-31 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-31" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-31 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-31 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-31 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-31" />
                                          </div>
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-32 cdk-column-cName mat-column-cName ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-32" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-32">
                                          Client Name
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-32 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-32" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-32 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-32 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-32 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-32" />
                                          </div>
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-33 cdk-column-estDate mat-column-estDate ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-33" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-33">
                                          Estimate Date
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-33 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-33" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-33 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-33 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-33 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-33" />
                                          </div>
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-34 cdk-column-expDate mat-column-expDate ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-34" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-34">
                                          Expired Date
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-34 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-34" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-34 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-34 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-34 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-34" />
                                          </div>
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-35 cdk-column-country mat-column-country ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-35" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-35">
                                          Country
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-35 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-35" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-35 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-35 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-35 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-35" />
                                          </div>
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-36 cdk-column-amount mat-column-amount ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-36" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-36">
                                          Amount
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-36 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-36" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-36 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-36 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-36 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-36" />
                                          </div>
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-37 cdk-column-status mat-column-status ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-37" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-37">
                                          Status
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-37 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-37" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-37 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-37 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-37 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-37" />
                                          </div>
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-38 cdk-column-details mat-column-details ng-star-inserted" mat-sort-header role="columnheader">
                                      <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-38" role="button" tabIndex={0}>
                                        <div className="mat-sort-header-content ng-tns-c196-38">
                                          Details
                                        </div>
                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-38 ng-star-inserted" style={{transform: 'translateY(25%)'}}>
                                          <div className="mat-sort-header-stem ng-tns-c196-38" />
                                          <div className="mat-sort-header-indicator ng-tns-c196-38 ng-trigger ng-trigger-indicator" style={{transform: 'translateY(0px)'}}>
                                            <div className="mat-sort-header-pointer-left ng-tns-c196-38 ng-trigger ng-trigger-leftPointer" style={{transform: 'rotate(-45deg)'}} />
                                            <div className="mat-sort-header-pointer-right ng-tns-c196-38 ng-trigger ng-trigger-rightPointer" style={{transform: 'rotate(45deg)'}} />
                                            <div className="mat-sort-header-pointer-middle ng-tns-c196-38" />
                                          </div>
                                        </div>
                                        {/* */}
                                      </div>
                                    </mat-header-cell>
                                    <mat-header-cell _ngcontent-oko-c233 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="columnheader">
                                      Actions
                                    </mat-header-cell>
                                    {/* */}
                                  </mat-header-row>
                                  {/* */}
                                  <mat-row _ngcontent-oko-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-2">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-2-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-2-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-eNo mat-column-eNo ng-star-inserted" role="cell">
                                      589
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-cName mat-column-cName ng-star-inserted" role="cell">
                                      Sarah Smith
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-estDate mat-column-estDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-expDate mat-column-expDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-country mat-column-country ng-star-inserted" role="cell">
                                      India
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-amount mat-column-amount ng-star-inserted" role="cell">
                                      $142
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                      <div _ngcontent-oko-c233 className="ng-star-inserted">
                                        <span _ngcontent-oko-c233 className="badge badge-pill badge-primary col-green">
                                          Accepted
                                        </span>
                                      </div>
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c233 className="truncate-text">
                                        Fowl darkness our sixth heaven. In image
                                        lights fourth a hath don't Abundantly they're,
                                        image you're .
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                      <Link to="/Addproject">
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-9" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-10" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                    </mat-cell>
                                    {/* */}
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-3">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-3-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-3-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-eNo mat-column-eNo ng-star-inserted" role="cell">
                                      784
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-cName mat-column-cName ng-star-inserted" role="cell">
                                      John Doe
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-estDate mat-column-estDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-expDate mat-column-expDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-country mat-column-country ng-star-inserted" role="cell">
                                      USA
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-amount mat-column-amount ng-star-inserted" role="cell">
                                      $872
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                      {/* */}
                                      <div _ngcontent-oko-c233 className="ng-star-inserted">
                                        <span _ngcontent-oko-c233 className="badge badge-pill badge-primary col-red">
                                          Declined
                                        </span>
                                      </div>
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c233 className="truncate-text">
                                        Fowl darkness our sixth heaven. In image
                                        lights fourth a hath don't Abundantly they're,
                                        image you're .
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Addproject">
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-9" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-10" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                    </mat-cell>
                                    {/* */}
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-4">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-4-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-4-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-eNo mat-column-eNo ng-star-inserted" role="cell">
                                      658
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-cName mat-column-cName ng-star-inserted" role="cell">
                                      Airi Satou
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-estDate mat-column-estDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-expDate mat-column-expDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-country mat-column-country ng-star-inserted" role="cell">
                                      Austrelia
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-amount mat-column-amount ng-star-inserted" role="cell">
                                      $1542
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                      <div _ngcontent-oko-c233 className="ng-star-inserted">
                                        <span _ngcontent-oko-c233 className="badge badge-pill badge-primary col-green">
                                          Accepted
                                        </span>
                                      </div>
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c233 className="truncate-text">
                                        Fowl darkness our sixth heaven. In image
                                        lights fourth a hath don't Abundantly they're,
                                        image you're .
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Addproject">
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-9" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-10" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                    </mat-cell>
                                    {/* */}
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-5">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-5-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-5-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-eNo mat-column-eNo ng-star-inserted" role="cell">
                                      285
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-cName mat-column-cName ng-star-inserted" role="cell">
                                      Angelica Ramos
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-estDate mat-column-estDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-expDate mat-column-expDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-country mat-column-country ng-star-inserted" role="cell">
                                      Shrilanka
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-amount mat-column-amount ng-star-inserted" role="cell">
                                      $9574
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                      {/* */}
                                      <div _ngcontent-oko-c233 className="ng-star-inserted">
                                        <span _ngcontent-oko-c233 className="badge badge-pill badge-primary col-red">
                                          Declined
                                        </span>
                                      </div>
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c233 className="truncate-text">
                                        Fowl darkness our sixth heaven. In image
                                        lights fourth a hath don't Abundantly they're,
                                        image you're .
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Addproject">
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-9" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-10" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                    </mat-cell>
                                    {/* */}
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-6">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-6-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-6-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-eNo mat-column-eNo ng-star-inserted" role="cell">
                                      458
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-cName mat-column-cName ng-star-inserted" role="cell">
                                      Ashton Cox
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-estDate mat-column-estDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-expDate mat-column-expDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-country mat-column-country ng-star-inserted" role="cell">
                                      India
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-amount mat-column-amount ng-star-inserted" role="cell">
                                      $10000
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                      {/* */}
                                      {/* */}
                                      <div _ngcontent-oko-c233 className="ng-star-inserted">
                                        <span _ngcontent-oko-c233 className="badge badge-pill badge-primary col-blue">
                                          Sent
                                        </span>
                                      </div>
                                      {/* */}
                                      {/* */}
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c233 className="truncate-text">
                                        Fowl darkness our sixth heaven. In image
                                        lights fourth a hath don't Abundantly they're,
                                        image you're .
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Addproject">
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-9" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-10" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                    </mat-cell>
                                    {/* */}
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-7">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-7-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-7-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-eNo mat-column-eNo ng-star-inserted" role="cell">
                                      958
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-cName mat-column-cName ng-star-inserted" role="cell">
                                      Cara Stevens
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-estDate mat-column-estDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-expDate mat-column-expDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-country mat-column-country ng-star-inserted" role="cell">
                                      Bangladesh
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-amount mat-column-amount ng-star-inserted" role="cell">
                                      $578
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                      {/* */}
                                      {/* */}
                                      <div _ngcontent-oko-c233 className="ng-star-inserted">
                                        <span _ngcontent-oko-c233 className="badge badge-pill badge-primary col-blue">
                                          Sent
                                        </span>
                                      </div>
                                      {/* */}
                                      {/* */}
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c233 className="truncate-text">
                                        Fowl darkness our sixth heaven. In image
                                        lights fourth a hath don't Abundantly they're,
                                        image you're .
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Addproject">
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-9" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-10" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                    </mat-cell>
                                    {/* */}
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-8">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-8-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-8-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-eNo mat-column-eNo ng-star-inserted" role="cell">
                                      257
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-cName mat-column-cName ng-star-inserted" role="cell">
                                      Jacob Ryan
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-estDate mat-column-estDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-expDate mat-column-expDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-country mat-column-country ng-star-inserted" role="cell">
                                      Shrilanka
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-amount mat-column-amount ng-star-inserted" role="cell">
                                      $479
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      <div _ngcontent-oko-c233 className="ng-star-inserted">
                                        <span _ngcontent-oko-c233 className="badge badge-pill badge-primary col-orange">
                                          Expired
                                        </span>
                                      </div>
                                      {/* */}
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c233 className="truncate-text">
                                        Fowl darkness our sixth heaven. In image
                                        lights fourth a hath don't Abundantly they're,
                                        image you're .
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Addproject">
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-9" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-10" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                    </mat-cell>
                                    {/* */}
                                  </mat-row>
                                  <mat-row _ngcontent-oko-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{cursor: 'pointer'}}>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                      <mat-checkbox _ngcontent-oko-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-9">
                                        <div className="mdc-form-field">
                                          <div className="mdc-checkbox">
                                            <div className="mat-mdc-checkbox-touch-target" />
                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-9-input" tabIndex={0} type="checkbox" />
                                            <div className="mdc-checkbox__ripple" />
                                            <div className="mdc-checkbox__background">
                                              <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                              </svg>
                                              <div className="mdc-checkbox__mixedmark" />
                                            </div>
                                            <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                          </div>
                                          <label htmlFor="mat-mdc-checkbox-9-input">
                                          </label>
                                        </div>
                                      </mat-checkbox>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-eNo mat-column-eNo ng-star-inserted" role="cell">
                                      937
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-cName mat-column-cName ng-star-inserted" role="cell">
                                      Pooja Sarma
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-estDate mat-column-estDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-expDate mat-column-expDate ng-star-inserted" role="cell">
                                      02/12/2018
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-country mat-column-country ng-star-inserted" role="cell">
                                      India
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-amount mat-column-amount ng-star-inserted" role="cell">
                                      $1482
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                      <div _ngcontent-oko-c233 className="ng-star-inserted">
                                        <span _ngcontent-oko-c233 className="badge badge-pill badge-primary col-green">
                                          Accepted
                                        </span>
                                      </div>
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                      {/* */}
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                      <span _ngcontent-oko-c233 className="truncate-text">
                                        Fowl darkness our sixth heaven. In image
                                        lights fourth a hath don't Abundantly they're,
                                        image you're .
                                      </span>
                                    </mat-cell>
                                    <mat-cell _ngcontent-oko-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                    <Link to="/Addproject">
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-9" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                      <button _ngcontent-oko-c233 aria-describedby="cdk-describedby-message-oko-1-10" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                        <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                        </span>
                                        <app-feather-icons _ngcontent-oko-c233 _nghost-oko-c130>
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
                                      {/* */}
                                    </mat-cell>
                                    {/* */}
                                  </mat-row>
                                  {/* */}
                                  {/* */}
                                  {/* */}
                                </mat-table>
                                {/* */}
                                <div _ngcontent-oko-c233 className="no-results ng-star-inserted" style={{display: 'none'}}>
                                  No results
                                </div>
                                {/* */}
                                <mat-paginator _ngcontent-oko-c233 className="mat-mdc-paginator" role="group">
                                  <div className="mat-mdc-paginator-outer-container">
                                    <div className="mat-mdc-paginator-container">
                                      <div className="mat-mdc-paginator-page-size ng-star-inserted">
                                        <div className="mat-mdc-paginator-page-size-label" id="mat-paginator-page-size-label-0">
                                          Items per page:
                                        </div>
                                        <mat-form-field className="mat-mdc-form-field mat-mdc-paginator-page-size-select ng-tns-c67-39 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-primary ng-star-inserted">
                                          {/* */}
                                          <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-39 mdc-text-field--outlined mdc-text-field--no-label">
                                            {/* */}
                                            <div className="mat-mdc-form-field-flex ng-tns-c67-39">
                                              <div className="mdc-notched-outline ng-tns-c67-39 mdc-notched-outline--no-label ng-star-inserted mdc-notched-outline--notched" matformfieldnotchedoutline>
                                                <div className="mdc-notched-outline__leading" />
                                                <div className="mdc-notched-outline__notch" style={{width: '0px'}}>
                                                  {/* */}
                                                  {/* */}
                                                  {/* */}
                                                </div>
                                                <div className="mdc-notched-outline__trailing" />
                                              </div>
                                              {/* */}
                                              {/* */}
                                              {/* */}
                                              <div className="mat-mdc-form-field-infix ng-tns-c67-39">
                                                {/* */}
                                                <mat-select aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-select-value-7 mat-paginator-page-size-label-0" aria-required="false" className="mat-mdc-select ng-tns-c175-40 ng-tns-c67-39 ng-star-inserted" id="mat-select-6" role="combobox" tabIndex={0}>
                                                  <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-40">
                                                    <div className="mat-mdc-select-value ng-tns-c175-40" id="mat-select-value-7">
                                                      {/* */}
                                                      <span className="mat-mdc-select-value-text ng-tns-c175-40 ng-star-inserted">
                                                        <span className="mat-mdc-select-min-line ng-tns-c175-40 ng-star-inserted">
                                                          10
                                                        </span>
                                                        {/* */}
                                                        {/* */}
                                                      </span>
                                                      {/* */}
                                                    </div>
                                                    <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-40">
                                                      <div className="mat-mdc-select-arrow ng-tns-c175-40">
                                                        <svg className="ng-tns-c175-40" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                          <path className="ng-tns-c175-40" d="M7 10l5 5 5-5z" />
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
                                          <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-39">
                                            {/* */}
                                            <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-39 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{opacity: 1, transform: 'translateY(0%)'}}>
                                              {/* */}
                                              <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-39" />
                                            </div>
                                            {/* */}
                                          </div>
                                        </mat-form-field>
                                        {/* */}
                                        {/* */}
                                      </div>
                                      {/* */}
                                      <div className="mat-mdc-paginator-range-actions">
                                        <div aria-live="polite" className="mat-mdc-paginator-range-label">
                                          1 – 8 of 8
                                        </div>
                                        {/* */}
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
                                        {/* */}
                                        <button aria-label="Next page" className="mat-mdc-tooltip-trigger mat-mdc-paginator-navigation-next mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" disabled="true" mat-icon-button type="button">
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
                                        {/* */}
                                        {/* */}
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
                 
      </div>
    </>
  );
}





