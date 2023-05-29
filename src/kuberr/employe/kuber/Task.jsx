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

import { Field, Formik, Form, ErrorMessage } from "formik";
import Modal from 'react-bootstrap/Modal';
import * as yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,

} from "@fortawesome/free-solid-svg-icons";


export default function AdminTask() {
  const [isOpen, setIsOpen] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

                            <img _ngcontent-hni-c131 className="ng-star-inserted" alt="flag" height={16} src="../../assets/images/flags/us.jpg" />

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
                <Accordion.Header><img className='img1' alt="aseris" src={a2} /><p className="accord-p">Project</p></Accordion.Header>
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
                <Accordion.Header><img className='img1' alt="aseris" src={a12} /> <p className="accord-p">Reports</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Leavereport" className='link1'>Leave Report</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Expense" className='link1'>Expense Report</Link ></Dropdown.Item>
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
              </div>      <Accordion.Item eventKey="15" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a16} /><p className="accord-p"> Email</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/AdminInbox" className='link1'>Inbox</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Admincompose" className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/AdminMail" className='link1'> Read Email</Link ></Dropdown.Item>
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
                <Accordion.Header><img className='img1' alt="aseris" src={a26} /><p className="accord-p">Authentication</p></Accordion.Header>
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
        <div _ngcontent-oko-c361 className="block-header">
          <app-breadcrumb _ngcontent-oko-c361 _nghost-oko-c141>
            <div _ngcontent-oko-c141 className="breadcrumb-main">
              <div _ngcontent-oko-c141 className="row">
                <div _ngcontent-oko-c141 className="col-6">
                  <div _ngcontent-oko-c141 className="breadcrumb-title">
                    <h4 _ngcontent-oko-c141 className="page-title">
                      Task
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
                      Task
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </app-breadcrumb>
        </div>
        <div _ngcontent-oko-c361 className="row">
          <div _ngcontent-oko-c361 className="col-xs-12 col-sm-12 col-md-12 col-lg-12" />
        </div>
        <div _ngcontent-oko-c361 className="row">
          <div _ngcontent-oko-c361 className="col-md-12 col-sm-12">
            <div _ngcontent-oko-c361 className="card h-100">
              <div _ngcontent-oko-c361 className="card-body">
                <div _ngcontent-oko-c361 className="task-module">
                  <div _ngcontent-oko-c361 className="task-header">
                    <div _ngcontent-oko-c361 className="task-title">
                      <h2 _ngcontent-oko-c361>Tasks</h2>
                      <h5 _ngcontent-oko-c361>0 Total task</h5>
                    </div>
                    <div _ngcontent-oko-c361 className="header-button">
                      <button onClick={handleShow} _ngcontent-oko-c361 className="mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" mat-raised-button>
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                        </span>
                        <span className="mdc-button__label">
                          Add Task
                        </span>
                        <span className="mat-mdc-focus-indicator"> </span>
                        <span className="mat-ripple mat-mdc-button-ripple" matripple>
                        </span>
                        <span className="mat-mdc-button-touch-target">
                        </span>
                      </button>
                      <Formik

                        initialValues={{

                          Title: "",
                          Assigned_Name: "",
                          Priority: "",
                          Due_date: "",
                          Event_Details: "",
                          Note: "",

                        }}
                        validationSchema={
                          yup.object({
                            Title: yup.string().required(" Title is required"),
                            Assigned_Name: yup.string().required("Assigned_Name  is required"),
                            Priority: yup.string().required("Priority  is required"),
                            Due_date: yup.string().required("Due_date is required"),
                            // Gender: yup.object().shape({ select: yup.string().required("Gender is Required") }),
                            Event_Details: yup.string().required("Event_Details is required"),
                            Note: yup.string().required("Note required"),


                          })
                        }
                      >
                        <>
                          {/* <Button variant="light" onClick={handleShow} className="bi bi-pencil-square">
    <img style={{width:"30px",height:"30px"}} src={Ad}/> */}

                          {/* </Button> */}

                          <Modal show={show} onHide={handleClose} className="w-100">
                            <Modal.Header closeButton>
                              <Modal.Title>Edit Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="p-4 mt-3">
                                < Form >

                                  <div className="row ">

                                    <div className="form-floating mt-2 col">
                                      <Field type="text" className="form-control" name="Title" placeholder="Title" />
                                      <label className="ms-4"> Title</label>
                                      <p className="text-danger"><ErrorMessage name="Title" /></p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col mt-2">
                                      <Field as="select" className="form-select form-control-lg" name="Assigned_Name">
                                        <option value="-1">Assigned Name</option>
                                        <option value="Full Time">Sarah Smith</option>
                                        <option vlaue="Part Time">John Deo</option>
                                        <option vlaue="Intership">Jens Brinker</option>
                                        <option vlaue="Other">Mark Hay</option>
                                        <option vlaue="Other">Anthony Davie</option>
                                        <option vlaue="Other">Sue Woodger</option>


                                      </Field>
                                      <p className="text-danger"><ErrorMessage name="Assigned_Name" /></p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col mt-2">
                                      <Field as="select" className="form-select form-control-lg" name="Priority">
                                        <option value="-1">Priority</option>
                                        <option value="Full Time">Low</option>
                                        <option vlaue="Part Time"> Normal</option>
                                        <option vlaue="Intership"> High</option>



                                      </Field>
                                      <p className="text-danger"><ErrorMessage name="Priority" /></p>
                                    </div>

                                    <div className="form-floating mt-2 col">
                                      <Field type="date" className="form-control" name="Due_date" placeholder="Due_date" />
                                      <label className="ms-4">Due date</label>
                                      <p className="text-danger"><ErrorMessage name="Due_date" /></p>

                                    </div>
                                  </div>
                                  <div className="row">

                                    <div className="form-floating mt-2 col">
                                      <Field type="text" className="form-control" name="Event_Details" placeholder="Event_Details" />
                                      <label className="ms-4">Event_Details</label>
                                      <p className="text-danger"><ErrorMessage name="Event_Details" /></p>

                                    </div>
                                  </div>


                                  <div>
                                    <button className="btn btn-primary mt-3 " type="submit">Submit</button>
                                    <button className="btn btn-danger mt-3 ms-4 " type="reset">Cancel</button>
                                  </div>
                                </Form >
                              </div>

                            </Modal.Body>


                          </Modal>
                        </>
                      </Formik>
                    </div>
                  </div>
                  <div _ngcontent-oko-c361 className="row">
                    <div _ngcontent-oko-c361 className="col-md-12 col-sm-12">
                      <mat-sidenav-container _ngcontent-oko-c361 className="mat-drawer-container mat-sidenav-container task-container">
                        <div className="mat-drawer-backdrop ng-star-inserted" />

                        <div aria-hidden="true" className="cdk-visually-hidden cdk-focus-trap-anchor" />
                        {/*mat-drawer-anchor*/}
                        <div aria-hidden="true" className="cdk-visually-hidden cdk-focus-trap-anchor" />
                        <mat-sidenav-content _ngcontent-oko-c361 className="mat-drawer-content mat-sidenav-content">
                          <ng-scrollbar _ngcontent-oko-c361 _nghost-oko-c129 className="ng-scrollbar" style={{ "height": "500px" }} visibility="hover">
                            <div _ngcontent-oko-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="false" pointereventsmethod="viewport" position="native" track="vertical" verticalused="false" visibility="hover">
                              <div _ngcontent-oko-c129 className="ng-scroll-viewport-wrapper">
                                <div _ngcontent-oko-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{ "--native-scrollbar-size": "0px" }}>
                                  <div _ngcontent-oko-c129 className="ng-scroll-content">
                                    <div _ngcontent-oko-c361 cdkdroplist className="cdk-drop-list task-list" id="cdk-drop-list-8">

                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </ng-scrollbar>
                        </mat-sidenav-content>

                        <mat-sidenav _ngcontent-oko-c361 className="mat-drawer mat-sidenav ng-tns-c359-303 ng-trigger ng-trigger-transform mat-drawer-end mat-drawer-side ng-star-inserted" position="end" style={{ "box-shadow": "none", "visibility": "hidden" }} tabIndex={-1}>
                          <div cdkscrollable className="mat-drawer-inner-container ng-tns-c359-303">
                            <div _ngcontent-oko-c361 className="header ng-tns-c359-303">
                              <h2 _ngcontent-oko-c361 className="header-title" />
                              <div _ngcontent-oko-c361 className="header-close m-r-0">
                                <button _ngcontent-oko-c361 aria-describedby="cdk-describedby-message-oko-1-121" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base ng-star-inserted" mat-icon-button mattooltip="Delete Task" style={{}}>
                                  <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                  </span>
                                  <mat-icon _ngcontent-oko-c361 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    delete
                                  </mat-icon>
                                  <span className="mat-mdc-focus-indicator">
                                  </span>
                                  <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                  </span>
                                  <span className="mat-mdc-button-touch-target">
                                  </span>
                                </button>

                                <button _ngcontent-oko-c361 aria-describedby="cdk-describedby-message-oko-1-122" cdk-describedby-host="oko-1" className="mat-mdc-tooltip-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base ng-star-inserted" mat-icon-button mattooltip="Edit Task" style={{}}>
                                  <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                  </span>
                                  <mat-icon _ngcontent-oko-c361 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    save
                                  </mat-icon>
                                  <span className="mat-mdc-focus-indicator">
                                  </span>
                                  <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                  </span>
                                  <span className="mat-mdc-button-touch-target">
                                  </span>
                                </button>


                                <button _ngcontent-oko-c361 className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                  <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                  </span>
                                  <mat-icon _ngcontent-oko-c361 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                    close
                                  </mat-icon>
                                  <span className="mat-mdc-focus-indicator">
                                  </span>
                                  <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                  </span>
                                  <span className="mat-mdc-button-touch-target">
                                  </span>
                                </button>
                              </div>
                            </div>
                            <form _ngcontent-oko-c361 className="register-form m-4 ng-tns-c359-303 ng-untouched ng-pristine ng-valid" noValidate>
                              <div _ngcontent-oko-c361 className="row">
                                <div _ngcontent-oko-c361 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <mat-form-field _ngcontent-oko-c361 className="mat-mdc-form-field ng-tns-c67-304 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted" hidden style={{}}>

                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-304 mdc-text-field--filled mdc-text-field--no-label">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-304 ng-star-inserted" />

                                      <div className="mat-mdc-form-field-flex ng-tns-c67-304">



                                        <div className="mat-mdc-form-field-infix ng-tns-c67-304">



                                          <input _ngcontent-oko-c361 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-304 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="id" id="mat-input-66" matinput />
                                        </div>


                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-304 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />

                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-304">

                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-304 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-304" />
                                      </div>

                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c361 className="row">
                                <div _ngcontent-oko-c361 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <mat-form-field _ngcontent-oko-c361 className="mat-mdc-form-field ng-tns-c67-305 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted" hidden style={{}}>

                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-305 mdc-text-field--filled mdc-text-field--no-label">
                                      <div className="mat-mdc-form-field-focus-overlay ng-tns-c67-305 ng-star-inserted" />

                                      <div className="mat-mdc-form-field-flex ng-tns-c67-305">



                                        <div className="mat-mdc-form-field-infix ng-tns-c67-305">



                                          <input _ngcontent-oko-c361 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-305 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="img" id="mat-input-67" matinput />
                                        </div>


                                      </div>
                                      <div className="mdc-line-ripple ng-tns-c67-305 mdc-line-ripple--deactivating ng-star-inserted" matformfieldlineripple />

                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-305">

                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-305 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-305" />
                                      </div>

                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c361 className="row">
                                <div _ngcontent-oko-c361 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <mat-form-field _ngcontent-oko-c361 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-306 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted" style={{}}>

                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-306 mdc-text-field--outlined">

                                      <div className="mat-mdc-form-field-flex ng-tns-c67-306">
                                        <div className="mdc-notched-outline ng-tns-c67-306 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                          <div className="mdc-notched-outline__leading" />
                                          <div className="mdc-notched-outline__notch">
                                            <label aria-owns="mat-input-68" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-306 ng-star-inserted" htmlFor="mat-input-68" id="mat-mdc-form-field-label-194" matformfieldfloatinglabel style={{ "-webkit-transition-duration": "0s", "transition-duration": "0s" }}>
                                              <mat-label _ngcontent-oko-c361 className="ng-tns-c67-306">
                                                Title
                                              </mat-label>

                                            </label>



                                          </div>
                                          <div className="mdc-notched-outline__trailing" />
                                        </div>



                                        <div className="mat-mdc-form-field-infix ng-tns-c67-306">

                                          <input _ngcontent-oko-c361 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-306 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="title" id="mat-input-68" matinput />
                                        </div>

                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-306 ng-star-inserted">
                                          <mat-icon _ngcontent-oko-c361 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-tns-c67-306" data-mat-icon-type="font" matsuffix role="img">
                                            turned_in_not
                                          </mat-icon>
                                        </div>

                                      </div>

                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-306">

                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-306 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-306" />
                                      </div>

                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c361 className="row">
                                <div _ngcontent-oko-c361 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                  <mat-checkbox _ngcontent-oko-c361 className="mat-mdc-checkbox example-margin mat-primary ng-untouched ng-pristine ng-valid" color="primary" formcontrolname="done" id="mat-mdc-checkbox-139">
                                    <div className="mdc-form-field">
                                      <div className="mdc-checkbox">
                                        <div className="mat-mdc-checkbox-touch-target" />
                                        <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-139-input" tabIndex={0} type="checkbox" />
                                        <div className="mdc-checkbox__ripple" />
                                        <div className="mdc-checkbox__background">
                                          <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                          </svg>
                                          <div className="mdc-checkbox__mixedmark" />
                                        </div>
                                        <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                      </div>
                                      <label htmlFor="mat-mdc-checkbox-139-input">
                                        Mark as complete
                                      </label>
                                    </div>
                                  </mat-checkbox>
                                </div>
                              </div>
                              <div _ngcontent-oko-c361 className="row">
                                <div _ngcontent-oko-c361 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                  <mat-form-field _ngcontent-oko-c361 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-307 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted" style={{}}>

                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-307 mdc-text-field--outlined">

                                      <div className="mat-mdc-form-field-flex ng-tns-c67-307">
                                        <div className="mdc-notched-outline ng-tns-c67-307 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                          <div className="mdc-notched-outline__leading" />
                                          <div className="mdc-notched-outline__notch">
                                            <label aria-owns="mat-select-58" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-307 ng-star-inserted" htmlFor="mat-select-58" id="mat-mdc-form-field-label-196" matformfieldfloatinglabel style={{ "-webkit-transition-duration": "0s", "transition-duration": "0s" }}>
                                              <mat-label _ngcontent-oko-c361 className="ng-tns-c67-307">
                                                Assigned Name
                                              </mat-label>

                                            </label>



                                          </div>
                                          <div className="mdc-notched-outline__trailing" />
                                        </div>



                                        <div className="mat-mdc-form-field-infix ng-tns-c67-307">

                                          <mat-select _ngcontent-oko-c361 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-196 mat-select-value-59" aria-required="false" className="mat-mdc-select ng-tns-c175-308 ng-tns-c67-307 mat-mdc-select-empty ng-untouched ng-pristine ng-valid ng-star-inserted" formcontrolname="name" id="mat-select-58" role="combobox" tabIndex={0}>
                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-308">
                                              <div className="mat-mdc-select-value ng-tns-c175-308" id="mat-select-value-59">
                                                <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-308 ng-star-inserted">
                                                </span>


                                              </div>
                                              <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-308">
                                                <div className="mat-mdc-select-arrow ng-tns-c175-308">
                                                  <svg className="ng-tns-c175-308" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                    <path className="ng-tns-c175-308" d="M7 10l5 5 5-5z" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>

                                          </mat-select>
                                        </div>


                                      </div>

                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-307">

                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-307 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-307" />
                                      </div>

                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c361 className="row">
                                <div _ngcontent-oko-c361 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                  <mat-form-field _ngcontent-oko-c361 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-309 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted" style={{}}>

                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-309 mdc-text-field--outlined">

                                      <div className="mat-mdc-form-field-flex ng-tns-c67-309">
                                        <div className="mdc-notched-outline ng-tns-c67-309 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                          <div className="mdc-notched-outline__leading" />
                                          <div className="mdc-notched-outline__notch">
                                            <label aria-owns="mat-select-60" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-309 ng-star-inserted" htmlFor="mat-select-60" id="mat-mdc-form-field-label-198" matformfieldfloatinglabel style={{ "-webkit-transition-duration": "0s", "transition-duration": "0s" }}>
                                              <mat-label _ngcontent-oko-c361 className="ng-tns-c67-309">
                                                Priority
                                              </mat-label>

                                            </label>



                                          </div>
                                          <div className="mdc-notched-outline__trailing" />
                                        </div>



                                        <div className="mat-mdc-form-field-infix ng-tns-c67-309">

                                          <mat-select _ngcontent-oko-c361 aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-mdc-form-field-label-198 mat-select-value-61" aria-required="false" className="mat-mdc-select ng-tns-c175-310 ng-tns-c67-309 mat-mdc-select-empty ng-untouched ng-pristine ng-valid ng-star-inserted" formcontrolname="priority" id="mat-select-60" role="combobox" tabIndex={0}>
                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-310">
                                              <div className="mat-mdc-select-value ng-tns-c175-310" id="mat-select-value-61">
                                                <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c175-310 ng-star-inserted">
                                                </span>


                                              </div>
                                              <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-310">
                                                <div className="mat-mdc-select-arrow ng-tns-c175-310">
                                                  <svg className="ng-tns-c175-310" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                    <path className="ng-tns-c175-310" d="M7 10l5 5 5-5z" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>

                                          </mat-select>
                                        </div>


                                      </div>

                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-309">

                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-309 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-309" />
                                      </div>

                                    </div>
                                  </mat-form-field>
                                </div>
                                <div _ngcontent-oko-c361 className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                  <mat-form-field _ngcontent-oko-c361 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-311 mat-mdc-form-field-type-mat-input mat-mdc-form-field-has-icon-suffix mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted" style={{}}>

                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-311 mdc-text-field--outlined">

                                      <div className="mat-mdc-form-field-flex ng-tns-c67-311">
                                        <div className="mdc-notched-outline ng-tns-c67-311 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                          <div className="mdc-notched-outline__leading" />
                                          <div className="mdc-notched-outline__notch">
                                            <label aria-owns="mat-input-69" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-311 ng-star-inserted" htmlFor="mat-input-69" id="mat-mdc-form-field-label-200" matformfieldfloatinglabel style={{ "-webkit-transition-duration": "0s", "transition-duration": "0s" }}>
                                              <mat-label _ngcontent-oko-c361 className="ng-tns-c67-311">
                                                Due date
                                              </mat-label>

                                            </label>



                                          </div>
                                          <div className="mdc-notched-outline__trailing" />
                                        </div>



                                        <div className="mat-mdc-form-field-infix ng-tns-c67-311">

                                          <input _ngcontent-oko-c361 aria-haspopup="dialog" aria-invalid="false" aria-required="false" className="mat-mdc-input-element mat-datepicker-input ng-tns-c67-311 ng-untouched ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" data-mat-calendar="mat-datepicker-11" formcontrolname="due_date" id="mat-input-69" matinput />
                                          <mat-datepicker _ngcontent-oko-c361 className="ng-tns-c67-311">
                                          </mat-datepicker>

                                        </div>

                                        <div className="mat-mdc-form-field-icon-suffix ng-tns-c67-311 ng-star-inserted">
                                          <mat-datepicker-toggle _ngcontent-oko-c361 className="mat-datepicker-toggle ng-tns-c67-311" data-mat-calendar="mat-datepicker-11" matsuffix>
                                            <button aria-haspopup="dialog" aria-label="Open calendar" className="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button tabIndex={0} type="button">
                                              <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                              </span>
                                              <svg className="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                              </svg>

                                              <span className="mat-mdc-focus-indicator">
                                              </span>
                                              <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                              </span>
                                              <span className="mat-mdc-button-touch-target">
                                              </span>
                                            </button>
                                          </mat-datepicker-toggle>
                                        </div>

                                      </div>

                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-311">

                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-311 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-311" />
                                      </div>

                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c361 className="row">
                                <div _ngcontent-oko-c361 className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <mat-form-field _ngcontent-oko-c361 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-312 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted" style={{}}>

                                    <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-312 mdc-text-field--outlined">

                                      <div className="mat-mdc-form-field-flex ng-tns-c67-312">
                                        <div className="mdc-notched-outline ng-tns-c67-312 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                          <div className="mdc-notched-outline__leading" />
                                          <div className="mdc-notched-outline__notch">
                                            <label aria-owns="mat-input-70" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-312 ng-star-inserted" htmlFor="mat-input-70" id="mat-mdc-form-field-label-202" matformfieldfloatinglabel style={{ "-webkit-transition-duration": "0s", "transition-duration": "0s" }}>
                                              <mat-label _ngcontent-oko-c361 className="ng-tns-c67-312">
                                                Event Details
                                              </mat-label>

                                            </label>



                                          </div>
                                          <div className="mdc-notched-outline__trailing" />
                                        </div>



                                        <div className="mat-mdc-form-field-infix ng-tns-c67-312">

                                          <textarea _ngcontent-oko-c361 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-312 ng-untouched ng-pristine ng-valid mat-mdc-form-field-textarea-control mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" formcontrolname="note" id="mat-input-70" matinput defaultValue={""} />
                                        </div>


                                      </div>

                                    </div>
                                    <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-312">

                                      <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-312 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-312" />
                                      </div>

                                    </div>
                                  </mat-form-field>
                                </div>
                              </div>
                              <div _ngcontent-oko-c361 className="row">
                                <div _ngcontent-oko-c361 className="col-xl-10 col-lg-10 col-md-12 col-sm-12" />
                              </div>
                            </form>
                          </div>
                        </mat-sidenav>
                      </mat-sidenav-container>
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





