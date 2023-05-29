import React, { useState } from "react";
// import "../mainsection/dashdash.css"
import "../../kuber/madhav/Madhav.css"
import "../kuber.css"
import "./Task.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";
import "../popup/model.css"
import * as yup from "yup";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from '../../../../../node_modules/react-bootstrap/Accordion';
import a2 from "../img/a2.png";
import a4 from "../img/a4.jpg";
import a5 from "../img/a5.png";
import a6 from "../img/contct.png";
import a9 from "../img/a9.png";
import a12 from "../img/a12.png";
import a13 from "../img/a13.png";
import a15 from "../img/a15.png";
import a21 from "../img/a21.png";
import a30 from "../img/pc.png"
import a31 from "../img/logout.png"
import a32 from "../img/exal.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    
} from "@fortawesome/free-solid-svg-icons";


export function TaskComponent() {
    const [isOpen, setIsOpen] = useState(true);
    // const [isShow, setIsShow] = useState(false);


    function handleTrigger() {
        setIsOpen(!isOpen);
    }
    // const handleTrigger = () => setIsShow(!isShow);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setdata] = useState([{ "Team": "" }])
    const [Error, SetError] = useState("")
    // const [Resulteror, SetResulterror] = useState("")

    function SelectChange(e) {
        setdata({
            Team: e.target.value
        })
    }
    function FormSubmit(e) {
        e.preventDefault();
        if (data.Team = "") {
            SetError("please fill discription")
        }
    }
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
                                                        <img _ngcontent-hni-c131 className="ng-star-inserted" alt="flag" height={16} src="../../assets/images/flags/us.jpg" />
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
                                                        <div className="dropdown">
                                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <span _ngcontent-hni-c131 style={{ color: "black" }}> Ella Jones </span>
                                                                <img _ngcontent-hni-c131 alt="User" className="user_img" height={32} src="../../assets/images/user/admin.jpg" width={32} />
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <Link className="dropdown-item" href="#">Account</Link>
                                                                <Link className="dropdown-item" href="#">Inbox</Link>
                                                                <Link className="dropdown-item" href="#">Settings</Link>
                                                                <Link className="dropdown-item" href="#">Logout</Link>
                                                            </div>
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

                            <img _ngcontent-hni-c131 alt="logo" src="../../assets/images/logo.png" />
                            <h3><span style={{ color: "black" }} > Cyber-Instant </span></h3>
                        </div>
                        <div className="trigger" onClick={handleTrigger}>
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                        </div>
                        <div className={`  disp ${isOpen ? "disp--open " : ""}`}>
                            <div _ngcontent-sas-c132="" class="user-panel">
                                <div _ngcontent-sas-c132="" class="image">
                                    <img className="image-admin"
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
                                    Employe
                                </div>
                            </div>
                        </div>

                     
                        <div classname="Accord">
                            <div className="dash-item mt-4">
                                <Link to="/"><img className='img11' src={a30} alt="dash" /></Link><Link to="/" className="adash">Dashboad</Link>
                            </div>
                            <div className="dash-item">
                                <Link to="/Attendance"><img className='img11' src={a12} alt="dash" /></Link> <Link to="/Attendance" className="adash">Attendance</Link>
                            </div>
                            <div className="dash-item">
                                <Link to="/leaves"> <img className='img11' src={a5} alt="dash" /></Link> <Link to="/leaves" className="adash">My Leaves</Link>
                            </div>
                            <div className="dash-item">
                                <Link to="/Team"> <img className='img11' src={a9} alt="dash" /></Link><Link to="/Team" className="adash">My Team</Link>
                            </div>
                            <div className="dash-item">
                                <Link to="/project"> <img className='img11' src={a2} alt="dash" /></Link><Link to="/project" className="adash">My Projects</Link>
                            </div>
                            <div className="dash-item">
                                <Link to="/task"> <img className='img11' src={a13} alt="dash" /></Link> <Link to="/task" className="adash">My Tasks</Link>
                            </div>
                            <div className="dash-item">
                                <Link to="/setting"><img className='img11' src={a4} alt="dash" /></Link><Link to="/setting" className="adash">Settings</Link>
                            </div>
                            <div className="dash-item">
                                <Link to="/chat"> <img className='img11' src={a21} alt="dash" /></Link><Link to="/chat" className="adash">Chat</Link>
                            </div>
                            <div className="dash-item">
                                <Link to="/calender" ><img className='img11' src={a12} alt="dash" /></Link><Link to="/calender" className="adash">Calendar</Link>
                            </div>  <div className="dash-item">
                                <Link to="/contact"> <img className='img11' src={a6} alt="dash" /></Link><Link to="/contact" className="adash">Contact</Link>
                            </div>





                            <Accordion defaultActiveKey="0" className="mb-2" style={{
                                width: "90%",
                                margin: "auto"


                            }} >
                                <Accordion.Item eventKey="1" >
                                    <Accordion.Header  ><img className='img2' src={a15} alt="dash" /><a href="/#" className="adash">Email</a></Accordion.Header>
                                    <Accordion.Body>

                                        <Dropdown.Item ><Link to="/compose" className='text-center link1'> Compose</Link ></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/inbox" className='link1'>Inbox</Link ></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/readmail" className='link1'>ReadMail</Link ></Dropdown.Item>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>  <div className="dash-item">
                            <img className='img11' src={a31} alt="dash" />< Link to="/logout" className="adash">Logout</Link>
                        </div>



                    </div>
                </div>
            </div>

            <div _ngcontent-hni-c142 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>
               
                        <div _ngcontent-pgy-c238 className="block-header">
                            <app-breadcrumb _ngcontent-pgy-c238 _nghost-pgy-c225>
                                <div _ngcontent-pgy-c225 className="breadcrumb-main">
                                    <div _ngcontent-pgy-c225 className="row">
                                        <div _ngcontent-pgy-c225 className="col-6">
                                            <div _ngcontent-pgy-c225 className="breadcrumb-title">
                                                <h4 _ngcontent-pgy-c225 className="page-title">
                                                    My Tasks
                                                </h4>
                                            </div>
                                        </div>
                                        <div _ngcontent-pgy-c225 className="col-6">
                                            <ul _ngcontent-pgy-c225 className="breadcrumb-list">
                                                <li _ngcontent-pgy-c225 className="breadcrumb-item bcrumb-1">
                                                    <a _ngcontent-pgy-c225 href="/#">
                                                        <app-feather-icons _ngcontent-pgy-c225 _nghost-pgy-c130>
                                                            <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="breadcrumb-icon">
                                                                <svg className="feather feather-home" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                                                                    </path>
                                                                    <polyline points="9 22 9 12 15 12 15 22">
                                                                    </polyline>
                                                                </svg>
                                                            </i-feather>
                                                        </app-feather-icons>
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c225 className="breadcrumb-item ng-star-inserted">
                                                    Home
                                                </li>

                                                <li _ngcontent-pgy-c225 className="breadcrumb-item active">
                                                    My Tasks
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </app-breadcrumb>
                        </div>
                        <div _ngcontent-pgy-c238 className="row">
                            <div _ngcontent-pgy-c238 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div _ngcontent-pgy-c238 className="card">
                                    <div _ngcontent-pgy-c238 className="body">
                                        <div _ngcontent-pgy-c238 className="responsive_table">
                                            <div _ngcontent-pgy-c238 className="materialTableHeader">
                                                <div _ngcontent-pgy-c238 className="row">
                                                    <div _ngcontent-pgy-c238 className="col-8">
                                                        <ul _ngcontent-pgy-c238 className="header-buttons-left ms-0">
                                                            <li _ngcontent-pgy-c238 className="tbl-title">
                                                                <h2 _ngcontent-pgy-c238>
                                                                    My Tasks
                                                                </h2>
                                                            </li>
                                                            <li _ngcontent-pgy-c238 className="tbl-search-box">
                                                                <label _ngcontent-pgy-c238 htmlFor="search-input">
                                                                    <i _ngcontent-pgy-c238 className="material-icons search-icon">
                                                                        search
                                                                    </i>
                                                                </label>
                                                                <input _ngcontent-pgy-c238 aria-label="Search box" className="browser-default search-field" placeholder="Search" type="text" />
                                                            </li>
                                                            <li _ngcontent-pgy-c238 className="tbl-header-btn">
                                                                <div _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-13" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger m-l-10" mattooltip="ADD">
                                                            <button _ngcontent-pgy-c238 className="bi bi-file-earmark-plus-fill" onClick={handleShow}  style={{ borderRadius: "20px", width: "45px", height: "45px", color: "green" }}>
                                                                      
                                                            </button>
                                                            <Modal show={show} onHide={handleClose}  >
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Modal heading</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body >
                                                                    <Formik
                                                                        initialValues={{
                                                                            ProjectId: "",
                                                                            ProjectTitle: "",
                                                                            Department: "",
                                                                            ProjectPriority: "",
                                                                            Client: "",
                                                                            Price: "",
                                                                            Team: "",
                                                                            StartDate: "",
                                                                            EndDate: "",
                                                                            WorkStatus: "",
                                                                            Description: ""
                                                                        }}

                                                                        validationSchema={
                                                                            yup.object({
                                                                                ProjectId: yup.string().required("ProjectId Required"),
                                                                                ProjectTitle: yup.string().required("ProjectId Required"),
                                                                                Description: yup.string().required("Project Description Required"),
                                                                                Department: yup.string().required("Select Department First"),
                                                                                ProjectPriority: yup.string().required("Select ProjectPriority First"),
                                                                                Client: yup.string().required("Client Name Required"),
                                                                                Price: yup.string().required("Price Required"),
                                                                                // Team: yup.string().required(" Select Team"),
                                                                                StartDate: yup.string().required("Select Start Date"),
                                                                                EndDate: yup.string().required("Select Start Date"),
                                                                                WorkStatus: yup.string().required("select work status"),
                                                                            })
                                                                        }
                                                                        onSubmit={
                                                                            (values) => {
                                                                                console.log(values)
                                                                                alert(JSON.stringify(values, null, 2))

                                                                            }
                                                                        }


                                                                    >
                                                                        {
                                                                            <Form onSubmit={FormSubmit} className="d-flex justify-content-center">

                                                                                <div className="form-main" >
                                                                                    <div className="pro-form">
                                                                                        <h1 align="center" className="mb-3">Project Form</h1>

                                                                                        <div className="row">
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="text" className="form-control" name="ProjectId" placeholder="ProjectId*" />
                                                                                                <label className="ms-3">ProjectId</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="ProjectId" /></div>
                                                                                            </div>

                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="text" className="form-control" name="ProjectTitle" placeholder="Project-Title*" />
                                                                                                <label className="ms-3" >Project-Title</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="ProjectTitle" /></div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row">
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field className="form-select" as="select" name="Department">
                                                                                                    <option name="-1">select Department</option>
                                                                                                    <option name="Dep 1">Dep 1</option>
                                                                                                    <option name="Dep 2">Dep 2</option>
                                                                                                </Field>
                                                                                                <label className="ms-2">Department</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="Department" /></div>
                                                                                            </div>
                                                                                            <div class="form-floating col mt-4">

                                                                                                <Field className="form-select" as="select" name="ProjectPriority">
                                                                                                    <option name="-1">select Project Priority</option>
                                                                                                    <option name=" Priority ">Priority 1</option>
                                                                                                    <option name="Priority-2">Priority 2</option>
                                                                                                </Field>
                                                                                                <label className="ms-2">Project Priority</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="ProjectPriority" /></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="text" className="form-control" name="Client" placeholder="Client*" />
                                                                                                <label className="ms-3">Client</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="Client" /></div>
                                                                                            </div>

                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="text" className="form-control" name="Price" placeholder="Price*" />
                                                                                                <label className="ms-3" >Price</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="Price" /></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="date" className="form-control" name="StartDate" placeholder="StartDate" />
                                                                                                <label className="ms-3">Project StartDate</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="StartDate" /></div>
                                                                                            </div>
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="date" className="form-control" name="EndDate" placeholder="EndDate" />
                                                                                                <label className="ms-2">Project EndDate</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="EndDate" /></div>
                                                                                            </div>


                                                                                        </div>
                                                                                        <div class="form-floating col mt-4">

                                                                                            <Field className="form-select" as="select" onChange={SelectChange} name="Team">
                                                                                                <option name="-1">Team</option>
                                                                                                <option name="Team-1">Team 1</option>
                                                                                                <option name="Team-2">Team 2</option>
                                                                                            </Field>
                                                                                            <label className="">Team</label>
                                                                                            <div className="text-danger">   <ErrorMessage name="Team" /></div>
                                                                                            <div>{Error}</div>
                                                                                        </div>
                                                                                        <div className="mt-4 d-flex flex-wrap ">
                                                                                            <div className="">
                                                                                                Work Status
                                                                                            </div>
                                                                                            <div className="form-check form-check-inline ms-4">
                                                                                                <input className="form-check-input" type="radio" name="WorkStatus" value="Active" />
                                                                                                <label className="form-check-label" for="inlineRadio1">Active</label>
                                                                                            </div>
                                                                                            <div className="form-check form-check-inline">
                                                                                                <input className="form-check-input" type="radio" name="WorkStatus" value="Completed" />
                                                                                                <label className="form-check-label" for="inlineRadio2">Completed</label>
                                                                                            </div>
                                                                                            <div className="form-check form-check-inline">
                                                                                                <input className="form-check-input" type="radio" name="WorkStatus" value="Running" />
                                                                                                <label className="form-check-label" for="inlineRadio3">Running</label>
                                                                                            </div>
                                                                                            <div className="form-check form-check-inline">
                                                                                                <input className="form-check-input" type="radio" name="WorkStatus" value="Pending" />
                                                                                                <label className="form-check-label" for="inlineRadio3">Pending</label>
                                                                                            </div>
                                                                                            <div className="form-check form-check-inline">
                                                                                                <input className="form-check-input" type="radio" name="WorkStatus" value="Not Started" />
                                                                                                <label className="form-check-label" for="inlineRadio3">Not Started</label>
                                                                                            </div>
                                                                                            <div className="form-check form-check-inline">
                                                                                                <input className="form-check-input" type="radio" name="WorkStatus" value="Cancelled" />
                                                                                                <label className="form-check-label" for="inlineRadio3">Canceled</label>
                                                                                            </div>

                                                                                        </div>

                                                                                        <div className="text-danger">   <ErrorMessage name="WorkStatus" /></div>

                                                                                        <div className="textarea-container d-flex flex-wrap mt-4">
                                                                                            <label>Project Description</label>
                                                                                            <textarea className="mt-2" type="text" rows={3} cols={98} name="Description"></textarea>
                                                                                            <div className="text-danger">   <ErrorMessage name="Description" /></div>
                                                                                        </div>


                                                                                        <div className="mt-4 ">
                                                                                            <div>
                                                                                                <div className="ms-3">
                                                                                                    Select File
                                                                                                </div>
                                                                                                <div className="ms-1 mt-2 border border-dark" style={{ height: "80px" }}>
                                                                                                    <input className="mt-4 ms-3" name="file" type="file"></input>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="d-flex justify-content-center flex-wrap mt-5 w-50">
                                                                                            <button
                                                                                                className="btn btn-success me-3 btn-block btn-lg gradient-custom-4 text-body mw-100" >Submit</button>
                                                                                            <button
                                                                                                className="btn btn-danger me-3 btn-block btn-lg gradient-custom-4 text-body" type="reset" >Cancle</button>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </Form>
                                                                        }
                                                                    </Formik>

                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleClose}>
                                                                        Close
                                                                    </Button>
                                                                    <Button variant="primary" onClick={handleClose}>
                                                                        Save Changes
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>
                                                                </div>

                                                            </li>
                                                            <li _ngcontent-pgy-c238 className="tbl-header-btn">
                                                                <div _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-14" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger m-l-10" mattooltip="REFRESH">
                                                            <button _ngcontent-pgy-c238 className="bi bi-arrow-clockwise" style={{ borderRadius: "20px", width: "45px", height: "45px", color: "green" }}>
                                                                      
                                                                    </button>
                                                                </div>

                                                            </li>
                                                            <li _ngcontent-pgy-c238 className="tbl-header-btn">
                                                                <div _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-15" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger m-l-10" hidden mattooltip="DELETE">
                                                                    <button _ngcontent-pgy-c238 className="mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-warn mat-mdc-button-base" color="warn" mat-mini-fab>
                                                                        <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple">
                                                                        </span>
                                                                        <mat-icon _ngcontent-pgy-c238 aria-hidden="true" className="mat-icon notranslate col-white material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
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
                                                    <div _ngcontent-pgy-c238 className="col-4">
                                                        <ul _ngcontent-pgy-c238 className="tbl-export-btn">
                                                            <li _ngcontent-pgy-c238>
                                                        <div _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-10" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger export-button m-l-10" mattooltip="XLSX">
                                                            <img _ngcontent-pgy-c233 alt="a32" src={a32}  style={{ width: "30px", height: "30px" }} />
                                                        </div>

                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <mat-table _ngcontent-pgy-c238 className="mat-mdc-table mdc-data-table__table cdk-table mat-sort mat-cell" matsort role="table">
                                                <mat-header-row _ngcontent-pgy-c238 className="mat-mdc-header-row mdc-data-table__header-row cdk-header-row ng-star-inserted" role="row">
                                                    <mat-header-cell _ngcontent-pgy-c238 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="columnheader">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-21">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-21-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-21-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-pgy-c238 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-34 cdk-column-taskNo mat-column-taskNo ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-34" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c160-34">
                                                                Task No
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-34 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                <div className="mat-sort-header-stem ng-tns-c160-34">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c160-34 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c160-34 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c160-34 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c160-34">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-pgy-c238 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-35 cdk-column-project mat-column-project ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-35" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c160-35">
                                                                Project
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-35 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                <div className="mat-sort-header-stem ng-tns-c160-35">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c160-35 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c160-35 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c160-35 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c160-35">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-pgy-c238 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-36 cdk-column-client mat-column-client ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-36" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c160-36">
                                                                Client
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-36 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                <div className="mat-sort-header-stem ng-tns-c160-36">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c160-36 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c160-36 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c160-36 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c160-36">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-pgy-c238 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-37 cdk-column-status mat-column-status ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-37" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c160-37">
                                                                Status
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-37 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                <div className="mat-sort-header-stem ng-tns-c160-37">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c160-37 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c160-37 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c160-37 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c160-37">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-pgy-c238 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-38 cdk-column-type mat-column-type ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-38" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c160-38">
                                                                Type
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-38 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                <div className="mat-sort-header-stem ng-tns-c160-38">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c160-38 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c160-38 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c160-38 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c160-38">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-pgy-c238 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-39 cdk-column-priority mat-column-priority ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-39" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c160-39">
                                                                Priority
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-39 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                <div className="mat-sort-header-stem ng-tns-c160-39">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c160-39 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c160-39 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c160-39 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c160-39">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-pgy-c238 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-40 cdk-column-executor mat-column-executor ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-40" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c160-40">
                                                                Executor
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-40 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                <div className="mat-sort-header-stem ng-tns-c160-40">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c160-40 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c160-40 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c160-40 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c160-40">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-pgy-c238 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-41 cdk-column-date mat-column-date ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-41" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c160-41">
                                                                Joining Date
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-41 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                <div className="mat-sort-header-stem ng-tns-c160-41">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c160-41 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c160-41 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c160-41 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c160-41">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-pgy-c238 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-42 cdk-column-details mat-column-details ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-42" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c160-42">
                                                                Details
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-42 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                <div className="mat-sort-header-stem ng-tns-c160-42">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c160-42 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c160-42 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c160-42 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c160-42">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-pgy-c238 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="columnheader">
                                                        Actions
                                                    </mat-header-cell>

                                                </mat-header-row>

                                                <mat-row _ngcontent-pgy-c238 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-22">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-22-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-22-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-taskNo mat-column-taskNo ng-star-inserted" role="cell">
                                                        TASK-01
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-project mat-column-project ng-star-inserted" role="cell">
                                                        PHP Website
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-client mat-column-client ng-star-inserted" role="cell">
                                                        Cara Stevens
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-solid-red">
                                                                Open
                                                            </span>
                                                        </div>


                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Development
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">

                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-pill  col-blue">
                                                                Medium
                                                            </span>
                                                        </div>


                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-executor mat-column-executor ng-star-inserted" role="cell">
                                                        Cara Stevens
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                                        03/22/2018
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                                        <span _ngcontent-pgy-c238 className="truncate-text">
                                                            wrong data received
                                                        </span>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-17" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-edit">
                                                                    <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                                        </path>
                                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                                        </path>
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

                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-18" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-delete">
                                                                    <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <polyline points="3 6 5 6 21 6">
                                                                        </polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} x2={10} y1={11} y2={17}>
                                                                        </line>
                                                                        <line x1={14} x2={14} y1={11} y2={17}>
                                                                        </line>
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

                                                    </mat-cell>

                                                </mat-row>
                                                <mat-row _ngcontent-pgy-c238 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-23">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-23-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-23-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-taskNo mat-column-taskNo ng-star-inserted" role="cell">
                                                        TASK-14
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-project mat-column-project ng-star-inserted" role="cell">
                                                        IOS App
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-client mat-column-client ng-star-inserted" role="cell">
                                                        Airi Satou
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-solid-red">
                                                                Open
                                                            </span>
                                                        </div>


                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Bug
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">

                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-pill  col-blue">
                                                                Medium
                                                            </span>
                                                        </div>


                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-executor mat-column-executor ng-star-inserted" role="cell">
                                                        Airi Satou
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                                        10/12/2018
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                                        <span _ngcontent-pgy-c238 className="truncate-text">
                                                            wrong data received
                                                        </span>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-17" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-edit">
                                                                    <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                                        </path>
                                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                                        </path>
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

                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-18" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-delete">
                                                                    <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <polyline points="3 6 5 6 21 6">
                                                                        </polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} x2={10} y1={11} y2={17}>
                                                                        </line>
                                                                        <line x1={14} x2={14} y1={11} y2={17}>
                                                                        </line>
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

                                                    </mat-cell>

                                                </mat-row>
                                                <mat-row _ngcontent-pgy-c238 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-24">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-24-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-24-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-taskNo mat-column-taskNo ng-star-inserted" role="cell">
                                                        TASK-25
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-project mat-column-project ng-star-inserted" role="cell">
                                                        ERP System
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-client mat-column-client ng-star-inserted" role="cell">
                                                        Angelica Ramos
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">

                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-solid-green">
                                                                Closed
                                                            </span>
                                                        </div>

                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Error
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">


                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-pill  col-red">
                                                                High
                                                            </span>
                                                        </div>

                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-executor mat-column-executor ng-star-inserted" role="cell">
                                                        Angelica Ramos
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                                        01/14/2018
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                                        <span _ngcontent-pgy-c238 className="truncate-text">
                                                            wrong data received
                                                        </span>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-17" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-edit">
                                                                    <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                                        </path>
                                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                                        </path>
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

                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-18" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-delete">
                                                                    <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <polyline points="3 6 5 6 21 6">
                                                                        </polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} x2={10} y1={11} y2={17}>
                                                                        </line>
                                                                        <line x1={14} x2={14} y1={11} y2={17}>
                                                                        </line>
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

                                                    </mat-cell>

                                                </mat-row>
                                                <mat-row _ngcontent-pgy-c238 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-25">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-25-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-25-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-taskNo mat-column-taskNo ng-star-inserted" role="cell">
                                                        TASK-17
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-project mat-column-project ng-star-inserted" role="cell">
                                                Angular Employe
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-client mat-column-client ng-star-inserted" role="cell">
                                                        Ashton Cox
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">

                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-solid-green">
                                                                Closed
                                                            </span>
                                                        </div>

                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Bug
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-pill  col-green">
                                                                Low
                                                            </span>
                                                        </div>



                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-executor mat-column-executor ng-star-inserted" role="cell">
                                                        John Doe
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                                        04/17/2018
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                                        <span _ngcontent-pgy-c238 className="truncate-text">
                                                            wrong data received
                                                        </span>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-17" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-edit">
                                                                    <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                                        </path>
                                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                                        </path>
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

                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-18" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-delete">
                                                                    <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <polyline points="3 6 5 6 21 6">
                                                                        </polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} x2={10} y1={11} y2={17}>
                                                                        </line>
                                                                        <line x1={14} x2={14} y1={11} y2={17}>
                                                                        </line>
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

                                                    </mat-cell>

                                                </mat-row>
                                                <mat-row _ngcontent-pgy-c238 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-26">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-26-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-26-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-taskNo mat-column-taskNo ng-star-inserted" role="cell">
                                                        TASK-16
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-project mat-column-project ng-star-inserted" role="cell">
                                                        PHP Website
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-client mat-column-client ng-star-inserted" role="cell">
                                                        Airi Satou
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-solid-red">
                                                                Open
                                                            </span>
                                                        </div>


                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Development
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">

                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-pill  col-blue">
                                                                Medium
                                                            </span>
                                                        </div>


                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-executor mat-column-executor ng-star-inserted" role="cell">
                                                        Ashton Cox
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                                        05/20/2018
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                                        <span _ngcontent-pgy-c238 className="truncate-text">
                                                            wrong data received
                                                        </span>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-17" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-edit">
                                                                    <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                                        </path>
                                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                                        </path>
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

                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-18" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-delete">
                                                                    <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <polyline points="3 6 5 6 21 6">
                                                                        </polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} x2={10} y1={11} y2={17}>
                                                                        </line>
                                                                        <line x1={14} x2={14} y1={11} y2={17}>
                                                                        </line>
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

                                                    </mat-cell>

                                                </mat-row>
                                                <mat-row _ngcontent-pgy-c238 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-27">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-27-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-27-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-taskNo mat-column-taskNo ng-star-inserted" role="cell">
                                                        TASK-22
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-project mat-column-project ng-star-inserted" role="cell">
                                                Angular  Employe
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-client mat-column-client ng-star-inserted" role="cell">
                                                        Angelica Ramos
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">

                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-solid-green">
                                                                Closed
                                                            </span>
                                                        </div>

                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Error
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">


                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-pill  col-red">
                                                                High
                                                            </span>
                                                        </div>

                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-executor mat-column-executor ng-star-inserted" role="cell">
                                                        Angelica Ramos
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                                        05/19/2018
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                                        <span _ngcontent-pgy-c238 className="truncate-text">
                                                            wrong data received
                                                        </span>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-17" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-edit">
                                                                    <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                                        </path>
                                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                                        </path>
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

                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-18" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-delete">
                                                                    <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <polyline points="3 6 5 6 21 6">
                                                                        </polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} x2={10} y1={11} y2={17}>
                                                                        </line>
                                                                        <line x1={14} x2={14} y1={11} y2={17}>
                                                                        </line>
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

                                                    </mat-cell>

                                                </mat-row>
                                                <mat-row _ngcontent-pgy-c238 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-28">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-28-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-28-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-taskNo mat-column-taskNo ng-star-inserted" role="cell">
                                                        TASK-38
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-project mat-column-project ng-star-inserted" role="cell">
                                                        IOS App
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-client mat-column-client ng-star-inserted" role="cell">
                                                        Cara Stevens
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-solid-red">
                                                                Open
                                                            </span>
                                                        </div>


                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Bug
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-pill  col-green">
                                                                Low
                                                            </span>
                                                        </div>



                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-executor mat-column-executor ng-star-inserted" role="cell">
                                                        Cara Stevens
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                                        02/19/2018
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                                        <span _ngcontent-pgy-c238 className="truncate-text">
                                                            wrong data received
                                                        </span>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-17" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-edit">
                                                                    <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                                        </path>
                                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                                        </path>
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

                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-18" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-delete">
                                                                    <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <polyline points="3 6 5 6 21 6">
                                                                        </polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} x2={10} y1={11} y2={17}>
                                                                        </line>
                                                                        <line x1={14} x2={14} y1={11} y2={17}>
                                                                        </line>
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

                                                    </mat-cell>

                                                </mat-row>
                                                <mat-row _ngcontent-pgy-c238 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-29">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-29-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-29-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-taskNo mat-column-taskNo ng-star-inserted" role="cell">
                                                        TASK-74
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-project mat-column-project ng-star-inserted" role="cell">
                                                        Logo Design
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-client mat-column-client ng-star-inserted" role="cell">
                                                        Ashton Cox
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">

                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-solid-green">
                                                                Closed
                                                            </span>
                                                        </div>

                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Bug
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">

                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-pill  col-blue">
                                                                Medium
                                                            </span>
                                                        </div>


                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-executor mat-column-executor ng-star-inserted" role="cell">
                                                        Airi Satou
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                                        04/11/2018
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                                        <span _ngcontent-pgy-c238 className="truncate-text">
                                                            wrong data received
                                                        </span>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-17" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-edit">
                                                                    <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                                        </path>
                                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                                        </path>
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

                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-18" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-delete">
                                                                    <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <polyline points="3 6 5 6 21 6">
                                                                        </polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} x2={10} y1={11} y2={17}>
                                                                        </line>
                                                                        <line x1={14} x2={14} y1={11} y2={17}>
                                                                        </line>
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

                                                    </mat-cell>

                                                </mat-row>
                                                <mat-row _ngcontent-pgy-c238 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-30">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-30-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-30-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-taskNo mat-column-taskNo ng-star-inserted" role="cell">
                                                        TASK-88
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-project mat-column-project ng-star-inserted" role="cell">
                                                        PHP Website
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-client mat-column-client ng-star-inserted" role="cell">
                                                        Ashton Cox
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-solid-red">
                                                                Open
                                                            </span>
                                                        </div>


                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Error
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-pill  col-green">
                                                                Low
                                                            </span>
                                                        </div>



                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-executor mat-column-executor ng-star-inserted" role="cell">
                                                        Angelica Ramos
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                                        11/25/2018
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                                        <span _ngcontent-pgy-c238 className="truncate-text">
                                                            wrong data received
                                                        </span>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-17" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-edit">
                                                                    <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                                        </path>
                                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                                        </path>
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

                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-18" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-delete">
                                                                    <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <polyline points="3 6 5 6 21 6">
                                                                        </polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} x2={10} y1={11} y2={17}>
                                                                        </line>
                                                                        <line x1={14} x2={14} y1={11} y2={17}>
                                                                        </line>
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

                                                    </mat-cell>

                                                </mat-row>
                                                <mat-row _ngcontent-pgy-c238 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-pgy-c238 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-31">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-31-input" tabIndex={0} type="checkbox" />
                                                                    <div className="mdc-checkbox__ripple">
                                                                    </div>
                                                                    <div className="mdc-checkbox__background">
                                                                        <svg aria-hidden="true" className="mdc-checkbox__checkmark" focusable="false" viewBox="0 0 24 24">
                                                                            <path className="mdc-checkbox__checkmark-path" d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="mdc-checkbox__mixedmark">
                                                                        </div>
                                                                    </div>
                                                                    <div className="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple>
                                                                    </div>
                                                                </div>
                                                                <label htmlFor="mat-mdc-checkbox-31-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-taskNo mat-column-taskNo ng-star-inserted" role="cell">
                                                        TASK-95
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-project mat-column-project ng-star-inserted" role="cell">
                                                        ERP System
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-client mat-column-client ng-star-inserted" role="cell">
                                                        Airi Satou
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">

                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-solid-green">
                                                                Closed
                                                            </span>
                                                        </div>

                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Development
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">


                                                        <div _ngcontent-pgy-c238 className="ng-star-inserted">
                                                            <span _ngcontent-pgy-c238 className="badge badge-pill  col-red">
                                                                High
                                                            </span>
                                                        </div>

                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-executor mat-column-executor ng-star-inserted" role="cell">
                                                        Ashton Cox
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-date mat-column-date ng-star-inserted" role="cell">
                                                        10/04/2018
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-details mat-column-details ng-star-inserted" role="cell">
                                                        <span _ngcontent-pgy-c238 className="truncate-text">
                                                            wrong data received
                                                        </span>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-pgy-c238 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-17" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-edit">
                                                                    <svg className="feather feather-edit" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                                        </path>
                                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                                        </path>
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

                                                        <button _ngcontent-pgy-c238 aria-describedby="cdk-describedby-message-pgy-1-18" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-pgy-c238 _nghost-pgy-c130>
                                                                <i-feather _ngcontent-pgy-c130 _nghost-pgy-c112 className="tbl-fav-delete">
                                                                    <svg className="feather feather-trash-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <polyline points="3 6 5 6 21 6">
                                                                        </polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                                        </path>
                                                                        <line x1={10} x2={10} y1={11} y2={17}>
                                                                        </line>
                                                                        <line x1={14} x2={14} y1={11} y2={17}>
                                                                        </line>
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

                                                    </mat-cell>

                                                </mat-row>



                                            </mat-table>

                                            <div _ngcontent-pgy-c238 className="no-results ng-star-inserted" style={{ "display": "none" }}>
                                                No results
                                            </div>

                                            <mat-paginator _ngcontent-pgy-c238 className="mat-mdc-paginator" role="group">
                                                <div className="mat-mdc-paginator-outer-container">
                                                    <div className="mat-mdc-paginator-container">
                                                        <div className="mat-mdc-paginator-page-size ng-star-inserted">
                                                            <div className="mat-mdc-paginator-page-size-label" id="mat-paginator-page-size-label-3">
                                                                Items per page:
                                                            </div>
                                                            <mat-form-field className="mat-mdc-form-field mat-mdc-paginator-page-size-select ng-tns-c67-43 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-primary ng-star-inserted">

                                                                <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-43 mdc-text-field--outlined mdc-text-field--no-label">

                                                                    <div className="mat-mdc-form-field-flex ng-tns-c67-43">
                                                                        <div className="mdc-notched-outline ng-tns-c67-43 mdc-notched-outline--no-label ng-star-inserted mdc-notched-outline--notched" matformfieldnotchedoutline>
                                                                            <div className="mdc-notched-outline__leading">
                                                                            </div>
                                                                            <div className="mdc-notched-outline__notch" style={{ "width": "0px" }}>



                                                                            </div>
                                                                            <div className="mdc-notched-outline__trailing">
                                                                            </div>
                                                                        </div>



                                                                        <div className="mat-mdc-form-field-infix ng-tns-c67-43">

                                                                            <mat-select aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-select-value-7 mat-paginator-page-size-label-3" aria-required="false" className="mat-mdc-select ng-tns-c150-44 ng-tns-c67-43 ng-star-inserted" id="mat-select-6" role="combobox" tabIndex={0}>
                                                                                <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c150-44">
                                                                                    <div className="mat-mdc-select-value ng-tns-c150-44" id="mat-select-value-7">

                                                                                        <span className="mat-mdc-select-value-text ng-tns-c150-44 ng-star-inserted">
                                                                                            <span className="mat-mdc-select-min-line ng-tns-c150-44 ng-star-inserted">
                                                                                                10
                                                                                            </span>


                                                                                        </span>

                                                                                    </div>
                                                                                    <div className="mat-mdc-select-arrow-wrapper ng-tns-c150-44">
                                                                                        <div className="mat-mdc-select-arrow ng-tns-c150-44">
                                                                                            <svg className="ng-tns-c150-44" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                                                                <path className="ng-tns-c150-44" d="M7 10l5 5 5-5z">
                                                                                                </path>
                                                                                            </svg>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </mat-select>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                                <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-43">

                                                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-43 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-43">
                                                                        </div>
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
                                                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z">
                                                                    </path>
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
                                                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z">
                                                                    </path>
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


