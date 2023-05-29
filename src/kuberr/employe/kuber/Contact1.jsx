import React, { useState } from "react";
import "../kuber/madhav/Madhav.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import a3 from "./img/a3.png"
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
import Ad from "./img/Ad.png"
import edit1 from "./img/edit1.png"
import Button from 'react-bootstrap/Button';
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

export default function Contact1() {
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

              <img _ngcontent-hni-c131 alt="logo" src="../../assets/images/logo.png" />
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
                <img className='img11' src={a15} alt="dash" /><Link to="/Contact1" className="adashh">Contact</Link>
              </div>
              <Accordion.Item eventKey="15" style={{ margin: "auto", overflow: "hidden", width: "92%" }}>
                <Accordion.Header><img className='img1' alt="aseris" src={a16} /><p className="accord-p"> Email</p></Accordion.Header>
                <Accordion.Body>
                  <Dropdown.Item ><Link to="/Inbox" className='link1'>Inbox</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Compose" className='link1'>Compose</Link ></Dropdown.Item>
                  <Dropdown.Item ><Link to="/Mail" className='link1'> Read Email</Link ></Dropdown.Item>
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
        <div _ngcontent-oko-c364 className="block-header">
          <app-breadcrumb _ngcontent-oko-c364 _nghost-oko-c141>
            <div _ngcontent-oko-c141 className="breadcrumb-main">
              <div _ngcontent-oko-c141 className="row">
                <div _ngcontent-oko-c141 className="col-6">
                  <div _ngcontent-oko-c141 className="breadcrumb-title">
                    <h4 _ngcontent-oko-c141 className="page-title">
                      Contacts
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
                      Contacts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </app-breadcrumb>
        </div>
        <div _ngcontent-oko-c364 className="row">
          <div _ngcontent-oko-c364 className="col-md-12">
            <div _ngcontent-oko-c364 className="tabbable-line">
              <div _ngcontent-oko-c364 className="row">
                <div _ngcontent-oko-c364 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div _ngcontent-oko-c364 className="card">
                    <div _ngcontent-oko-c364 className="body">
                      <div _ngcontent-oko-c364 className="responsive_table">
                        <div _ngcontent-oko-c364 className="materialTableHeader">
                          <div _ngcontent-oko-c364 className="row">
                            <div _ngcontent-oko-c364 className="col-8">
                              <ul _ngcontent-oko-c364 className="header-buttons-left ms-0">
                                <li _ngcontent-oko-c364 className="tbl-title">
                                  <h2 _ngcontent-oko-c364>
                                    Contacts
                                  </h2>
                                </li>
                                <li _ngcontent-oko-c364 className="tbl-search-box">
                                  <label _ngcontent-oko-c364 htmlFor="search-input">
                                    <i _ngcontent-oko-c364 className="material-icons search-icon">
                                      search
                                    </i>
                                  </label>
                                  <input _ngcontent-oko-c364 aria-label="Search box" className="browser-default search-field" placeholder="Search" type="text" />
                                </li>
                                <li _ngcontent-oko-c364 className="tbl-header-btn">
                                  <div _ngcontent-oko-c364 className="m-l-10" hidden mattooltip="DELETE">
                                    <button _ngcontent-oko-c364 className="mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-warn mat-mdc-button-base" color="warn" mat-mini-fab>
                                      <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple">
                                      </span>
                                      <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate col-white material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                        delete
                                      </mat-icon>
                                      <span className="mdc-button__label">
                                      </span>
                                      <span className="mat-mdc-focus-indicator">
                                      </span>
                                      <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                      </span>
                                      <span className="mat-mdc-button-touch-target">
                                      </span>
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div _ngcontent-oko-c364 className="col-4">
                              <ul _ngcontent-oko-c364 className="header-buttons-right ms-0">
                                <li _ngcontent-oko-c364 className="tbl-header-btn">
                                  <div _ngcontent-oko-c364 className="m-l-10" mattooltip="ADD">
                                    <Formik

                                      initialValues={{

                                        Name: "",
                                        Email: "",
                                        Mobile: "",
                                        birth_date: "",
                                        Address: "",
                                        Note: "",

                                      }}
                                      validationSchema={
                                        yup.object({
                                          Name: yup.string().required(" Name is required"),
                                          Email: yup.string().required("Email  is required"),
                                          Mobile: yup.string().required("Mobile  is required"),
                                          birth_date: yup.string().required("birth_date is required"),
                                          // Gender: yup.object().shape({ select: yup.string().required("Gender is Required") }),
                                          Address: yup.string().required("Address is required"),
                                          Note: yup.string().required("Note required"),


                                        })
                                      }
                                    >
                                      <>
                                        <Button variant="light" onClick={handleShow} >
                                          <img style={{ width: "30px", height: "30px" }} src={Ad} />

                                        </Button>

                                        <Modal show={show} onHide={handleClose} className="w-100">
                                          <Modal.Header closeButton>
                                            <Modal.Title>Edit Form</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                            <div className="p-4 mt-3">
                                              < Form >

                                                <div className="row ">

                                                  <div className="form-floating mt-2 col">
                                                    <Field type="text" className="form-control" name="Name" placeholder="Name" />
                                                    <label className="ms-4"> Name</label>
                                                    <p className="text-danger"><ErrorMessage name="Name" /></p>
                                                  </div>
                                                  <div className="form-floating mt-2 col">
                                                    <Field type="email" className="form-control" name="Email" placeholder="Email" />
                                                    <label className="ms-4"> E-mail</label>
                                                    <p className="text-danger"><ErrorMessage name="Email" /></p>
                                                  </div>
                                                </div>
                                                <div className="row">
                                                  <div className="form-floating mt-2 col">
                                                    <Field type="number" className="form-control" name="Mobile" placeholder="Mobile" />
                                                    <label className="ms-4">Mobile</label>
                                                    <p className="text-danger"><ErrorMessage name="Mobile" /></p>
                                                  </div>

                                                  <div className="form-floating mt-2 col">
                                                    <Field type="date" className="form-control" name="birth_date" placeholder="birth_date" />
                                                    <label className="ms-4">Birth date</label>
                                                    <p className="text-danger"><ErrorMessage name="birth_date" /></p>

                                                  </div>
                                                </div>
                                                <div className="row">
                                                  {/* <div className="col mt-2">
                            <Field as="select" className="form-select form-control-lg" name="Job_type">
                                <option value="-1">Job_type</option>
                                <option value="Full Time">Full Time</option>
                                <option vlaue="Part Time">Part Time</option>
                                <option vlaue="Intership">Intership</option>
                                <option vlaue="Other">Other</option>
                                                                      

                            </Field>
                            <p className="text-danger"><ErrorMessage name="Job_type" /></p>
                        </div> */}
                                                  <div className="form-floating mt-2 col">
                                                    <Field type="text" className="form-control" name="Address" placeholder="Address" />
                                                    <label className="ms-4">Address</label>
                                                    <p className="text-danger"><ErrorMessage name="Address" /></p>

                                                  </div>
                                                </div>
                                                <div className="row">
                                                  <div className="form-floating mt-2 col">
                                                    <Field type="text" className="form-control" name="Note" placeholder="Note" />
                                                    <label className="ms-4"> Note</label>
                                                    <p className="text-danger"><ErrorMessage name="Note" /></p>

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
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                        <mat-table _ngcontent-oko-c364 className="mat-mdc-table mdc-data-table__table cdk-table mat-sort mat-cell" matsort role="table">
                          <mat-header-row _ngcontent-oko-c364 className="mat-mdc-header-row mdc-data-table__header-row cdk-header-row ng-star-inserted" role="row">
                            <mat-header-cell _ngcontent-oko-c364 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="columnheader">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-140">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-140-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-140-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-header-cell>
                            <mat-header-cell _ngcontent-oko-c364 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-img mat-column-img tbl-col-width-per-6 ng-star-inserted" mat-header-cell role="columnheader">
                              Image
                            </mat-header-cell>
                            <mat-header-cell _ngcontent-oko-c364 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-313 cdk-column-name mat-column-name ng-star-inserted" mat-sort-header role="columnheader">
                              <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-313" role="button" tabIndex={0}>
                                <div className="mat-sort-header-content ng-tns-c196-313">
                                  Name
                                </div>
                                <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-313 ng-star-inserted" style={{}}>
                                  <div className="mat-sort-header-stem ng-tns-c196-313" />
                                  <div className="mat-sort-header-indicator ng-tns-c196-313 ng-trigger ng-trigger-indicator" style={{}}>
                                    <div className="mat-sort-header-pointer-left ng-tns-c196-313 ng-trigger ng-trigger-leftPointer" style={{}} />
                                    <div className="mat-sort-header-pointer-right ng-tns-c196-313 ng-trigger ng-trigger-rightPointer" style={{}} />
                                    <div className="mat-sort-header-pointer-middle ng-tns-c196-313" />
                                  </div>
                                </div>

                              </div>
                            </mat-header-cell>
                            <mat-header-cell _ngcontent-oko-c364 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-314 cdk-column-email mat-column-email ng-star-inserted" mat-sort-header role="columnheader">
                              <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-314" role="button" tabIndex={0}>
                                <div className="mat-sort-header-content ng-tns-c196-314">
                                  Email
                                </div>
                                <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-314 ng-star-inserted" style={{}}>
                                  <div className="mat-sort-header-stem ng-tns-c196-314" />
                                  <div className="mat-sort-header-indicator ng-tns-c196-314 ng-trigger ng-trigger-indicator" style={{}}>
                                    <div className="mat-sort-header-pointer-left ng-tns-c196-314 ng-trigger ng-trigger-leftPointer" style={{}} />
                                    <div className="mat-sort-header-pointer-right ng-tns-c196-314 ng-trigger ng-trigger-rightPointer" style={{}} />
                                    <div className="mat-sort-header-pointer-middle ng-tns-c196-314" />
                                  </div>
                                </div>

                              </div>
                            </mat-header-cell>
                            <mat-header-cell _ngcontent-oko-c364 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-315 cdk-column-mobile mat-column-mobile ng-star-inserted" mat-sort-header role="columnheader">
                              <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-315" role="button" tabIndex={0}>
                                <div className="mat-sort-header-content ng-tns-c196-315">
                                  Mobile
                                </div>
                                <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-315 ng-star-inserted" style={{}}>
                                  <div className="mat-sort-header-stem ng-tns-c196-315" />
                                  <div className="mat-sort-header-indicator ng-tns-c196-315 ng-trigger ng-trigger-indicator" style={{}}>
                                    <div className="mat-sort-header-pointer-left ng-tns-c196-315 ng-trigger ng-trigger-leftPointer" style={{}} />
                                    <div className="mat-sort-header-pointer-right ng-tns-c196-315 ng-trigger ng-trigger-rightPointer" style={{}} />
                                    <div className="mat-sort-header-pointer-middle ng-tns-c196-315" />
                                  </div>
                                </div>

                              </div>
                            </mat-header-cell>
                            <mat-header-cell _ngcontent-oko-c364 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-316 cdk-column-birthDate mat-column-birthDate ng-star-inserted" mat-sort-header role="columnheader">
                              <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-316" role="button" tabIndex={0}>
                                <div className="mat-sort-header-content ng-tns-c196-316">
                                  Birth Date
                                </div>
                                <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-316 ng-star-inserted" style={{}}>
                                  <div className="mat-sort-header-stem ng-tns-c196-316" />
                                  <div className="mat-sort-header-indicator ng-tns-c196-316 ng-trigger ng-trigger-indicator" style={{}}>
                                    <div className="mat-sort-header-pointer-left ng-tns-c196-316 ng-trigger ng-trigger-leftPointer" style={{}} />
                                    <div className="mat-sort-header-pointer-right ng-tns-c196-316 ng-trigger ng-trigger-rightPointer" style={{}} />
                                    <div className="mat-sort-header-pointer-middle ng-tns-c196-316" />
                                  </div>
                                </div>

                              </div>
                            </mat-header-cell>
                            <mat-header-cell _ngcontent-oko-c364 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c196-317 cdk-column-address mat-column-address ng-star-inserted" mat-sort-header role="columnheader">
                              <div aria-describedby="cdk-describedby-message-oko-1-8" cdk-describedby-host="oko-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c196-317" role="button" tabIndex={0}>
                                <div className="mat-sort-header-content ng-tns-c196-317">
                                  Address
                                </div>
                                <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c196-317 ng-star-inserted" style={{}}>
                                  <div className="mat-sort-header-stem ng-tns-c196-317" />
                                  <div className="mat-sort-header-indicator ng-tns-c196-317 ng-trigger ng-trigger-indicator" style={{}}>
                                    <div className="mat-sort-header-pointer-left ng-tns-c196-317 ng-trigger ng-trigger-leftPointer" style={{}} />
                                    <div className="mat-sort-header-pointer-right ng-tns-c196-317 ng-trigger ng-trigger-rightPointer" style={{}} />
                                    <div className="mat-sort-header-pointer-middle ng-tns-c196-317" />
                                  </div>
                                </div>

                              </div>
                            </mat-header-cell>
                            <mat-header-cell _ngcontent-oko-c364 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="columnheader" style={{ marginLeft: "50px" }}>
                              Actions
                            </mat-header-cell>

                          </mat-header-row>

                          <mat-row _ngcontent-oko-c364 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-141">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-141-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-141-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img tbl-col-width-per-6 cdk-column-img mat-column-img ng-star-inserted" mat-cell role="cell">
                              <img _ngcontent-oko-c364 src="/assets/images/user/user1.jpg" />
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" role="cell">
                              John Deo
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" role="cell">
                              test@email.com
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-mobile mat-column-mobile ng-star-inserted" role="cell">
                              1234567890
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-birthDate mat-column-birthDate ng-star-inserted" role="cell">
                              02/25/2018
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-address mat-column-address ng-star-inserted" role="cell">
                              God creature is sixth was abundantly and
                              sea gathered i
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                              <button onClick={handleShow} _ngcontent-oko-c364 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  <img style={{ width: "40px", height: "30px", marginLeft: "50px" }} src={edit1} />
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator">
                                </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target">
                                </span>
                              </button>

                              <mat-menu _ngcontent-oko-c364 className="ng-tns-c105-320 ng-star-inserted">

                              </mat-menu>
                            </mat-cell>

                          </mat-row>
                          <mat-row _ngcontent-oko-c364 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-142">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-142-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-142-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img tbl-col-width-per-6 cdk-column-img mat-column-img ng-star-inserted" mat-cell role="cell">
                              <img _ngcontent-oko-c364 src="/assets/images/user/user2.jpg" />
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" role="cell">
                              Sarah Smith
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" role="cell">
                              test@email.com
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-mobile mat-column-mobile ng-star-inserted" role="cell">
                              1234567890
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-birthDate mat-column-birthDate ng-star-inserted" role="cell">
                              04/14/1985
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-address mat-column-address ng-star-inserted" role="cell">
                              Celeste Slater 606-3727 Ullamcorper.
                              Street Roseville NH 11523
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                              <button onClick={handleShow} _ngcontent-oko-c364 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  <img style={{ width: "40px", height: "30px", marginLeft: "50px" }} src={edit1} />
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator">
                                </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target">
                                </span>
                              </button>

                              <mat-menu _ngcontent-oko-c364 className="ng-tns-c105-321 ng-star-inserted">

                              </mat-menu>
                            </mat-cell>

                          </mat-row>
                          <mat-row _ngcontent-oko-c364 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-143">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-143-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-143-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img tbl-col-width-per-6 cdk-column-img mat-column-img ng-star-inserted" mat-cell role="cell">
                              <img _ngcontent-oko-c364 src="/assets/images/user/user3.jpg" />
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" role="cell">
                              Edna Gilbert
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" role="cell">
                              test@email.com
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-mobile mat-column-mobile ng-star-inserted" role="cell">
                              1234567890
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-birthDate mat-column-birthDate ng-star-inserted" role="cell">
                              11/08/1983
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-address mat-column-address ng-star-inserted" role="cell">
                              Hiroko Potter P.O. Box 887 2508 Dolor. Av.
                              Muskegon KY 12482
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                              <button onClick={handleShow} _ngcontent-oko-c364 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  <img style={{ width: "40px", height: "30px", marginLeft: "50px" }} src={edit1} />
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator">
                                </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target">
                                </span>
                              </button>

                              <mat-menu _ngcontent-oko-c364 className="ng-tns-c105-322 ng-star-inserted">

                              </mat-menu>
                            </mat-cell>

                          </mat-row>
                          <mat-row _ngcontent-oko-c364 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-144">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-144-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-144-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img tbl-col-width-per-6 cdk-column-img mat-column-img ng-star-inserted" mat-cell role="cell">
                              <img _ngcontent-oko-c364 src="/assets/images/user/user4.jpg" />
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" role="cell">
                              Shelia Osterberg
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" role="cell">
                              test@email.com
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-mobile mat-column-mobile ng-star-inserted" role="cell">
                              1234567890
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-birthDate mat-column-birthDate ng-star-inserted" role="cell">
                              05/20/1988
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-address mat-column-address ng-star-inserted" role="cell">
                              881 Beechwood St.Beloit, WI 53511
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                              <button onClick={handleShow} _ngcontent-oko-c364 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  <img style={{ width: "40px", height: "30px", marginLeft: "50px" }} src={edit1} />
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator">
                                </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target">
                                </span>
                              </button>

                              <mat-menu _ngcontent-oko-c364 className="ng-tns-c105-323 ng-star-inserted">

                              </mat-menu>
                            </mat-cell>

                          </mat-row>
                          <mat-row _ngcontent-oko-c364 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-145">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-145-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-145-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img tbl-col-width-per-6 cdk-column-img mat-column-img ng-star-inserted" mat-cell role="cell">
                              <img _ngcontent-oko-c364 src="/assets/images/user/user5.jpg" />
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" role="cell">
                              Barbara Garland
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" role="cell">
                              test@email.com
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-mobile mat-column-mobile ng-star-inserted" role="cell">
                              1234567890
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-birthDate mat-column-birthDate ng-star-inserted" role="cell">
                              04/18/1987
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-address mat-column-address ng-star-inserted" role="cell">
                              107 Ashley Ave Lakewood, New Jersey
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                              <button onClick={handleShow} _ngcontent-oko-c364 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  <img style={{ width: "40px", height: "30px", marginLeft: "50px" }} src={edit1} />
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator">
                                </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target">
                                </span>
                              </button>

                              <mat-menu _ngcontent-oko-c364 className="ng-tns-c105-324 ng-star-inserted">

                              </mat-menu>
                            </mat-cell>

                          </mat-row>
                          <mat-row _ngcontent-oko-c364 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-146">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-146-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-146-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img tbl-col-width-per-6 cdk-column-img mat-column-img ng-star-inserted" mat-cell role="cell">
                              <img _ngcontent-oko-c364 src="/assets/images/user/user6.jpg" />
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" role="cell">
                              Sarah Smith
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" role="cell">
                              test@email.com
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-mobile mat-column-mobile ng-star-inserted" role="cell">
                              1234567890
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-birthDate mat-column-birthDate ng-star-inserted" role="cell">
                              11/08/1983
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-address mat-column-address ng-star-inserted" role="cell">
                              Shanti Nagar Bldg No B 4, Sector No 6,
                              Mira Road
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                              <button onClick={handleShow} _ngcontent-oko-c364 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  <img style={{ width: "40px", height: "30px", marginLeft: "50px" }} src={edit1} />
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator">
                                </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target">
                                </span>
                              </button>

                              <mat-menu _ngcontent-oko-c364 className="ng-tns-c105-325 ng-star-inserted">

                              </mat-menu>
                            </mat-cell>

                          </mat-row>
                          <mat-row _ngcontent-oko-c364 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-147">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-147-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-147-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img tbl-col-width-per-6 cdk-column-img mat-column-img ng-star-inserted" mat-cell role="cell">
                              <img _ngcontent-oko-c364 src="/assets/images/user/user7.jpg" />
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" role="cell">
                              Marie Brodsky
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" role="cell">
                              test@email.com
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-mobile mat-column-mobile ng-star-inserted" role="cell">
                              1234567890
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-birthDate mat-column-birthDate ng-star-inserted" role="cell">
                              11/08/1983
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-address mat-column-address ng-star-inserted" role="cell">
                              D-178/2, Ttc Industrial Area, Midc, Nerul
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                              <button onClick={handleShow} _ngcontent-oko-c364 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  <img style={{ width: "40px", height: "30px", marginLeft: "50px" }} src={edit1} />
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator">
                                </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target">
                                </span>
                              </button>

                              <mat-menu _ngcontent-oko-c364 className="ng-tns-c105-326 ng-star-inserted">

                              </mat-menu>
                            </mat-cell>

                          </mat-row>
                          <mat-row _ngcontent-oko-c364 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-148">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-148-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-148-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img tbl-col-width-per-6 cdk-column-img mat-column-img ng-star-inserted" mat-cell role="cell">
                              <img _ngcontent-oko-c364 src="/assets/images/user/user8.jpg" />
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" role="cell">
                              Kara Thompson
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" role="cell">
                              test@email.com
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-mobile mat-column-mobile ng-star-inserted" role="cell">
                              1234567890
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-birthDate mat-column-birthDate ng-star-inserted" role="cell">
                              04/18/1987
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-address mat-column-address ng-star-inserted" role="cell">
                              H-6, 1st Fl., Omkar, Near Marathi
                              Vidhiyalaya,
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                              <button onClick={handleShow} _ngcontent-oko-c364 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  <img style={{ width: "40px", height: "30px", marginLeft: "50px" }} src={edit1} />
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator">
                                </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target">
                                </span>
                              </button>

                              <mat-menu _ngcontent-oko-c364 className="ng-tns-c105-327 ng-star-inserted">

                              </mat-menu>
                            </mat-cell>

                          </mat-row>
                          <mat-row _ngcontent-oko-c364 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-149">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-149-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-149-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img tbl-col-width-per-6 cdk-column-img mat-column-img ng-star-inserted" mat-cell role="cell">
                              <img _ngcontent-oko-c364 src="/assets/images/user/user9.jpg" />
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" role="cell">
                              Joseph Nye
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" role="cell">
                              test@email.com
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-mobile mat-column-mobile ng-star-inserted" role="cell">
                              1234567890
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-birthDate mat-column-birthDate ng-star-inserted" role="cell">
                              05/20/1988
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-address mat-column-address ng-star-inserted" role="cell">
                              26, 2nd Flr, Nariman Bhavan, Nariman Point
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                              <button onClick={handleShow} _ngcontent-oko-c364 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  <img style={{ width: "40px", height: "30px", marginLeft: "50px" }} src={edit1} />
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator">
                                </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target">
                                </span>
                              </button>

                              <mat-menu _ngcontent-oko-c364 className="ng-tns-c105-328 ng-star-inserted">

                              </mat-menu>
                            </mat-cell>

                          </mat-row>
                          <mat-row _ngcontent-oko-c364 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                              <mat-checkbox _ngcontent-oko-c364 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-150">
                                <div className="mdc-form-field">
                                  <div className="mdc-checkbox">
                                    <div className="mat-mdc-checkbox-touch-target" />
                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-150-input" tabIndex={0} type="checkbox" />
                                    <div className="mdc-checkbox__ripple" />
                                    <div className="mdc-checkbox__background">
                                      <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" />
                                      </svg>
                                      <div className="mdc-checkbox__mixedmark" />
                                    </div>
                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple />
                                  </div>
                                  <label htmlFor="mat-mdc-checkbox-150-input">
                                  </label>
                                </div>
                              </mat-checkbox>
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell table-img tbl-col-width-per-6 cdk-column-img mat-column-img ng-star-inserted" mat-cell role="cell">
                              <img _ngcontent-oko-c364 src="/assets/images/user/user2.jpg" />
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted" role="cell">
                              Ricardo Wendler
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-email mat-column-email ng-star-inserted" role="cell">
                              test@email.com
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-mobile mat-column-mobile ng-star-inserted" role="cell">
                              1234567890
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-birthDate mat-column-birthDate ng-star-inserted" role="cell">
                              04/14/1985
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-address mat-column-address ng-star-inserted" role="cell">
                              1st Floor P.o. Box No 3261, 39 Nagdevi
                              Street,
                            </mat-cell>
                            <mat-cell _ngcontent-oko-c364 className="mat-mdc-cell mdc-data-table__cell cdk-cell psl-3 tbl-col-width-per-10 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                              <button onClick={handleShow} _ngcontent-oko-c364 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-icon-button>
                                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                </span>
                                <mat-icon _ngcontent-oko-c364 aria-hidden="true" className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
                                  <img style={{ width: "40px", height: "30px", marginLeft: "50px" }} src={edit1} />
                                </mat-icon>
                                <span className="mat-mdc-focus-indicator">
                                </span>
                                <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                </span>
                                <span className="mat-mdc-button-touch-target">
                                </span>
                              </button>

                              <mat-menu _ngcontent-oko-c364 className="ng-tns-c105-329 ng-star-inserted">

                              </mat-menu>
                            </mat-cell>

                          </mat-row>



                        </mat-table>

                        <div _ngcontent-oko-c364 className="no-results ng-star-inserted" style={{ "display": "none" }}>
                          No results
                        </div>

                        <mat-paginator _ngcontent-oko-c364 className="mat-mdc-paginator" role="group">
                          <div className="mat-mdc-paginator-outer-container">
                            <div className="mat-mdc-paginator-container">
                              <div className="mat-mdc-paginator-page-size ng-star-inserted">
                                <div className="mat-mdc-paginator-page-size-label" id="mat-paginator-page-size-label-17">
                                  Items per page:
                                </div>
                                <mat-form-field className="mat-mdc-form-field mat-mdc-paginator-page-size-select ng-tns-c67-318 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-primary ng-star-inserted">

                                  <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-318 mdc-text-field--outlined mdc-text-field--no-label">

                                    <div className="mat-mdc-form-field-flex ng-tns-c67-318">
                                      <div className="mdc-notched-outline ng-tns-c67-318 mdc-notched-outline--no-label ng-star-inserted mdc-notched-outline--notched" matformfieldnotchedoutline>
                                        <div className="mdc-notched-outline__leading" />
                                        <div className="mdc-notched-outline__notch" style={{ "width": "0px" }}>



                                        </div>
                                        <div className="mdc-notched-outline__trailing" />
                                      </div>



                                      <div className="mat-mdc-form-field-infix ng-tns-c67-318">

                                        <mat-select aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-select-value-63 mat-paginator-page-size-label-17" aria-required="false" className="mat-mdc-select ng-tns-c175-319 ng-tns-c67-318 ng-star-inserted" id="mat-select-62" role="combobox" tabIndex={0}>
                                          <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c175-319">
                                            <div className="mat-mdc-select-value ng-tns-c175-319" id="mat-select-value-63">

                                              <span className="mat-mdc-select-value-text ng-tns-c175-319 ng-star-inserted">
                                                <span className="mat-mdc-select-min-line ng-tns-c175-319 ng-star-inserted">
                                                  10
                                                </span>


                                              </span>

                                            </div>
                                            <div className="mat-mdc-select-arrow-wrapper ng-tns-c175-319">
                                              <div className="mat-mdc-select-arrow ng-tns-c175-319">
                                                <svg className="ng-tns-c175-319" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                  <path className="ng-tns-c175-319" d="M7 10l5 5 5-5z" />
                                                </svg>
                                              </div>
                                            </div>
                                          </div>

                                        </mat-select>
                                      </div>


                                    </div>

                                  </div>
                                  <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-318">

                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-318 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                      <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-318" />
                                    </div>

                                  </div>
                                </mat-form-field>


                              </div>

                              <div className="mat-mdc-paginator-range-actions">
                                <div aria-live="polite" className="mat-mdc-paginator-range-label">
                                  1 – 10 of 13
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
          </div>
        </div>
      </div>
                
          
                  

    </>
  );
}





