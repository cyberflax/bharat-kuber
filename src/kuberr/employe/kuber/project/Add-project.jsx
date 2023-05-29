import React, { useState } from "react";
import "../../kuber/madhav/Madhav.css"
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { Projectform } from "../office -practise/projectform";
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


export default function Addproject() {
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
                <Accordion.Header><img className='img1' alt="aeries" src={a2} /><p className="accord-p">Project</p></Accordion.Header>
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
                <Accordion.Header><img className='img1' alt="aeries" src={a3} /><p className="accord-p">Employees</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Addemploye" className='link1'>Add-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Allemploye"className='link1'>All-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editemploye"className='link1'>Edite-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Employeprofile"className='link1'>Employe-Profile</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="3" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a4} /><p className="accord-p">Leave Management</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/LeaveRequest" className='link1'>All Leave Requests</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Leavesbalance"className='link1'>Leave Balance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Leavetype"className='link1'>Leave Types</Link ></Dropdown.Item>
       
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="4" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a5} /><p className="accord-p">Holidays</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allholiday" className='link1'>All Holidays</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addholiday"className='link1'>Add Holiday</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editholiday"className='link1'>Edit Holiday</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="5" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a6} /><p className="accord-p">Attendance</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Today" className='link1'>Today's Attendance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Employ"className='link1'>Employee Attendance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Attendance"className='link1'>Attendance Sheet</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="6" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a7} /><p className="accord-p">Clients</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allclient" className='link1'>All Clients</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addclient"className='link1'>Add Client</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editclient"className='link1'>Edit Client</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="7" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a8} /><p className="accord-p">Accounts</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allpayment" className='link1'>All Payments</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addpayment"className='link1'>Add Payment</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Invoice"className='link1'>Invoice</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="8" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a9} /><p className="accord-p">Payroll</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Employsalary" className='link1'>Employee Salary</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Payslip"className='link1'>Payslip</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="9" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a10} /> <p className="accord-p">Leaders</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Leads" className='link1'> Leaders</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="10" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a11} /><p className="accord-p">Jobs </p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Job" className='link1'>Jobs List</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Resumes"className='link1'>Resumes</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Candidate"className='link1'>Candidates</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Shortlist"className='link1'>Shortlist Candidates</Link ></Dropdown.Item>

        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="11" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a12} /> <p className="accord-p">Reports</p></Accordion.Header>
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
                <Accordion.Header><img className='img1' alt="aeries" src={a16} /> <p className="accord-p">Email</p></Accordion.Header>
        <Accordion.Body>
                  <Dropdown.Item ><Link to="/AdminInbox" className='link1'>Inbox</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Admincompose"className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/AdminMail"className='link1'> Read Email</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="16" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
        <Accordion.Header><img className='img1' alt="aeries" src={a17}/>More Apps <span _ngcontent-sas-c132 className="badge bg-orange sidebar-badge float-end ng-star-inserted">
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
                <Accordion.Header><img className='img1' alt="aeries" src={a18} /><p className="accord-p"> Widgets</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Chart1" className='link1'> Chart Widget</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Data1" className='link1'> Data Widget</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Components</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              {/* <Accordion.Item eventKey="18" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a19} /><p className="accord-p">User Interface (UI)</p></Accordion.Header>
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
                <Accordion.Header> <img className='img1' alt="aeries" src={a20} /><p className="accord-p">Forms</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/formcantrol" className='link1'> Form Controls</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Advance" className='link1'> Advanced Controls</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Formex" className='link1'> Form Examples</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Formvalid" className='link1'> Form Validation</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Wizard" className='link1'> Form Wizard</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editer" className='link1'>  Editors</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="20">
                <Accordion.Header><img className='img1' alt="aeries" src={a21} /><p className="accord-p"> Tables</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Basic" className='link1'> Basic Tables</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Material1" className='link1'> Material Tables</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Ngx" className='link1'> ngx-datatable</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="21" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a22} /> <p className="accord-p"> Medias</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Gallary" className='link1'> Image Gallery</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="22" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a23} /> <p className="accord-p">Charts</p><span _ngcontent-sas-c132 className="badge bg-green sidebar-badge float-end ng-star-inserted">
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
                <Accordion.Header> <img className='img1' alt="aeries" src={a24} /><p className="accord-p">Timeline</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Timeline" className='link1'> Timeline 1</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Timeline1" className='link1'> Timeline 2</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="24" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header> <img className='img1' alt="aeries" src={a25} /><p className="accord-p">Icons</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Material" className='link1'> Material Icons</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Font" className='link1'> Font Awesome</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item> */}
              <Accordion.Item eventKey="25" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a26} /> <p className="accord-p">Authentication</p></Accordion.Header>
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
                <Accordion.Header> <img className='img1' alt="aeries" src={a27} /><p className="accord-p"> Extra Pages</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Profile1" className='link1'>  Profile</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Princing" className='link1'> Pricing</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Invoice1" className='link1'> Invoice</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Faqs" className='link1'>  Faqs</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Blanck" className='link1'>Blank Page</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="27" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a28} /><p className="accord-p">Maps</p></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Google" className='link1'>Google Map</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
              <Accordion.Item eventKey="28" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aeries" src={a29} /><p className="accord-p">Multi level Menu</p></Accordion.Header>
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
    <div _ngcontent-oko-c239 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>
    
                  {/* <section _ngcontent-oko-c236 className="content"> */}
                    <div _ngcontent-oko-c236 className="content-block">
                      <div _ngcontent-oko-c236 className="block-header">
                        <app-breadcrumb _ngcontent-oko-c236 _nghost-oko-c141>
                          <div _ngcontent-oko-c141 className="breadcrumb-main">
                            <div _ngcontent-oko-c141 className="row">
                              <div _ngcontent-oko-c141 className="col-6">
                                <div _ngcontent-oko-c141 className="breadcrumb-title">
                                  <h4 _ngcontent-oko-c141 className="page-title">
                                    Add Projects
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
                                    Add Projects
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </app-breadcrumb>
                      </div>
                      <div _ngcontent-oko-c236 className="row clearfix">
                        <div _ngcontent-oko-c236 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div _ngcontent-oko-c236 className="card">
                            <div _ngcontent-oko-c236 className="header">
                              <h2 _ngcontent-oko-c236>Add Projects</h2>
                            </div>
                            <Projectform/>
                            </div>
                        </div>
                      </div>
                    </div>
                  {/* </section> */}
                
      </div>

    </>
  );
}





