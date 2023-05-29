import React, { useState } from "react";
// import "../mainsection/dashdash.css"
import "../../kuber/madhav/Madhav.css"
import "../kuber.css"
import "./leaves.css"
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


export function LeavesComponent() {
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
                                    Admin
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
                                    <Accordion.Header  ><img className='img2' src={a15} alt="dash" /><a className="adash">Email</a></Accordion.Header>
                                    <Accordion.Body>

                                        <Dropdown.Item ><Link to="/compose" className='text-center link1'> Compose</Link ></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/inbox" className='link1'>Inbox</Link ></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/readmail" className='link1'>ReadMail</Link ></Dropdown.Item>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>  <div className="dash-item">
                            <img className='img11' src={a31} alt="dash" /><Link to="/logout" className="adash">Logout</Link>
                        </div>



                    </div>
                </div>
            </div>

            <div _ngcontent-hni-c142 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>

                <div _ngcontent-pgy-c233 className="block-header">
                    <app-breadcrumb _ngcontent-pgy-c233 _nghost-pgy-c225>
                        <div _ngcontent-pgy-c225 className="breadcrumb-main">
                            <div _ngcontent-pgy-c225 className="row">
                                <div _ngcontent-pgy-c225 className="col-6">
                                    <div _ngcontent-pgy-c225 className="breadcrumb-title">
                                        <h4 _ngcontent-pgy-c225 className="page-title">
                                            My Leaves
                                        </h4>
                                    </div>
                                </div>
                                <div _ngcontent-pgy-c225 className="col-6">
                                    <ul _ngcontent-pgy-c225 className="breadcrumb-list">
                                        <li _ngcontent-pgy-c225 className="breadcrumb-item bcrumb-1">
                                            <a _ngcontent-pgy-c225 href="#/admin/dashboard/main">
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
                                            My Leaves
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </app-breadcrumb>
                </div>
                <div _ngcontent-pgy-c233 className="row">
                    <div _ngcontent-pgy-c233 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div _ngcontent-pgy-c233 className="card">
                            <div _ngcontent-pgy-c233 className="body">
                                <div _ngcontent-pgy-c233 className="responsive_table">
                                    <div _ngcontent-pgy-c233 className="materialTableHeader">
                                        <div _ngcontent-pgy-c233 className="row">
                                            <div _ngcontent-pgy-c233 className="col-8">
                                                <ul _ngcontent-pgy-c233 className="header-buttons-left ms-0">
                                                    <li _ngcontent-pgy-c233 className="tbl-title">
                                                        <h2 _ngcontent-pgy-c233>
                                                            My Leaves
                                                        </h2>
                                                    </li>
                                                    <li _ngcontent-pgy-c233 className="tbl-search-box">
                                                        <label _ngcontent-pgy-c233 htmlFor="search-input">
                                                            <i _ngcontent-pgy-c233 className="material-icons search-icon">
                                                                search
                                                            </i>
                                                        </label>
                                                        <input _ngcontent-pgy-c233 aria-label="Search box" className="browser-default search-field" placeholder="Search" type="text" />
                                                    </li>
                                                    <li _ngcontent-pgy-c233 className="tbl-header-btn">
                                                        <div _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-7" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger m-l-10" mattooltip="ADD">
                                                            <button _ngcontent-pgy-c233 className="bi bi-file-earmark-plus-fill" onClick={handleShow} style={{ borderRadius: "20px", width: "45px", height: "45px", color: "green" }}>

                                                            </button>
                                                            <Modal show={show} onHide={handleClose}  >
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Leave Form</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body >
                                                                    <Formik
                                                                        initialValues={{
                                                                            Status: "",
                                                                            TypeLeave: "",
                                                                            HalfDay: "",
                                                                            applieddate: "",
                                                                            Fromdate: "",
                                                                            Fromdate: "",
                                                                            todate: "",
                                                                            WorkStatus: "",
                                                                            Description: ""
                                                                        }}

                                                                        validationSchema={
                                                                            yup.object({
                                                                                TypeLeave: yup.string().required("Type of Required"),
                                                                                Status: yup.string().required("Status Required"),
                                                                                HalfDay: yup.string().required("halfday fill Required"),
                                                                                Description: yup.string().required("Project Description Required"),
                                                                                applieddate: yup.string().required("Select applied Date"),
                                                                                Fromdate: yup.string().required("Select Start Date"),
                                                                                todate: yup.string().required("Select End Date"),
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
                                                                                        <h1 align="center" className="mb-3">Leave Form</h1>

                                                                                        <div className="row">
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="date" className="form-control" name="applieddate" placeholder="Applied date" />
                                                                                                <label className="ms-3">Applied date</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="applieddate" /></div>
                                                                                            </div>

                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="date" className="form-control" name="Fromdate" placeholder="From Date" />
                                                                                                <label className="ms-3">From-Date</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="Fromdate" /></div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row">
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="date" className="form-control" name="todate" placeholder="To Date" />
                                                                                                <label className="ms-3">To-Date</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="todate" /></div>
                                                                                            </div>
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="text" className="form-control" name="HalfDay" placeholder="HalfDay" />
                                                                                                <label className="ms-3">Half Day</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="HalfDay" /></div>

                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field className="form-select" as="select" onChange={SelectChange} name="TypeLeave">
                                                                                                    <option name="-1">Type</option>
                                                                                                    <option name="Team-1">Casual Leave</option>
                                                                                                    <option name="Team-2">Emergency Leave</option>
                                                                                                </Field>
                                                                                            </div>


                                                                                            <div>{Error}</div>

                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field className="form-select" as="select" onChange={SelectChange} name="Status">
                                                                                                    <option name="-1">Status</option>
                                                                                                    <option name="Team-1">Approved</option>
                                                                                                    <option name="Team-2">Rejected</option>
                                                                                                </Field>

                                                                                                <div>{Error}</div>
                                                                                            </div>
                                                                                            <div className="textarea-container d-flex flex-wrap mt-4">
                                                                                                <label>Work Status</label>
                                                                                                <textarea className="mt-2" type="text" rows={3} cols={60} name="Description"></textarea>
                                                                                                <div className="text-danger">   <ErrorMessage name="Description" /></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="d-flex justify-content-center flex-wrap mt-5 w-25">
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
                                                    <li _ngcontent-pgy-c233 className="tbl-header-btn">
                                                        <div _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-8" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger m-l-10" mattooltip="REFRESH">
                                                            <button _ngcontent-pgy-c233 className="bi bi-arrow-clockwise" style={{ borderRadius: "20px", width: "45px", height: "45px", color: "green" }}>

                                                            </button>
                                                        </div>

                                                    </li>
                                                    <li _ngcontent-pgy-c233 className="tbl-header-btn">
                                                        <div _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-9" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger m-l-10" hidden mattooltip="DELETE">
                                                            <button _ngcontent-pgy-c233 className="mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-warn mat-mdc-button-base" color="warn" mat-mini-fab>
                                                                <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple">
                                                                </span>
                                                                <mat-icon _ngcontent-pgy-c233 aria-hidden="true" className="mat-icon notranslate col-white material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
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
                                            <div _ngcontent-pgy-c233 className="col-4">
                                                <ul _ngcontent-pgy-c233 className="tbl-export-btn">
                                                    <li _ngcontent-pgy-c233>
                                                        <div _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-10" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger export-button m-l-10" mattooltip="XLSX">
                                                            <img _ngcontent-pgy-c233 alt="a32" src={a32} style={{ width: "30px", height: "30px" }} />
                                                        </div>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <mat-table _ngcontent-pgy-c233 className="mat-mdc-table mdc-data-table__table cdk-table mat-sort mat-cell" matsort role="table">
                                        <mat-header-row _ngcontent-pgy-c233 className="mat-mdc-header-row mdc-data-table__header-row cdk-header-row ng-star-inserted" role="row">
                                            <mat-header-cell _ngcontent-pgy-c233 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="columnheader">
                                                <mat-checkbox _ngcontent-pgy-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-11">
                                                    <div className="mdc-form-field">
                                                        <div className="mdc-checkbox">
                                                            <div className="mat-mdc-checkbox-touch-target">
                                                            </div>
                                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-11-input" tabIndex={0} type="checkbox" />
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
                                                        <label htmlFor="mat-mdc-checkbox-11-input">
                                                        </label>
                                                    </div>
                                                </mat-checkbox>
                                            </mat-header-cell>
                                            <mat-header-cell _ngcontent-pgy-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-13 cdk-column-applyDate mat-column-applyDate ng-star-inserted" mat-sort-header role="columnheader">
                                                <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-13" role="button" tabIndex={0}>
                                                    <div className="mat-sort-header-content ng-tns-c160-13">
                                                        Apply Date
                                                    </div>
                                                    <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-13 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                        <div className="mat-sort-header-stem ng-tns-c160-13">
                                                        </div>
                                                        <div className="mat-sort-header-indicator ng-tns-c160-13 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                            <div className="mat-sort-header-pointer-left ng-tns-c160-13 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-right ng-tns-c160-13 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-middle ng-tns-c160-13">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-header-cell>
                                            <mat-header-cell _ngcontent-pgy-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-14 cdk-column-fromDate mat-column-fromDate ng-star-inserted" mat-sort-header role="columnheader">
                                                <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-14" role="button" tabIndex={0}>
                                                    <div className="mat-sort-header-content ng-tns-c160-14">
                                                        From Date
                                                    </div>
                                                    <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-14 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                        <div className="mat-sort-header-stem ng-tns-c160-14">
                                                        </div>
                                                        <div className="mat-sort-header-indicator ng-tns-c160-14 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                            <div className="mat-sort-header-pointer-left ng-tns-c160-14 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-right ng-tns-c160-14 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-middle ng-tns-c160-14">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-header-cell>
                                            <mat-header-cell _ngcontent-pgy-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-15 cdk-column-toDate mat-column-toDate ng-star-inserted" mat-sort-header role="columnheader">
                                                <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-15" role="button" tabIndex={0}>
                                                    <div className="mat-sort-header-content ng-tns-c160-15">
                                                        To Date
                                                    </div>
                                                    <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-15 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                        <div className="mat-sort-header-stem ng-tns-c160-15">
                                                        </div>
                                                        <div className="mat-sort-header-indicator ng-tns-c160-15 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                            <div className="mat-sort-header-pointer-left ng-tns-c160-15 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-right ng-tns-c160-15 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-middle ng-tns-c160-15">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-header-cell>
                                            <mat-header-cell _ngcontent-pgy-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-16 cdk-column-halfDay mat-column-halfDay ng-star-inserted" mat-sort-header role="columnheader">
                                                <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-16" role="button" tabIndex={0}>
                                                    <div className="mat-sort-header-content ng-tns-c160-16">
                                                        Half Day
                                                    </div>
                                                    <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-16 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                        <div className="mat-sort-header-stem ng-tns-c160-16">
                                                        </div>
                                                        <div className="mat-sort-header-indicator ng-tns-c160-16 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                            <div className="mat-sort-header-pointer-left ng-tns-c160-16 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-right ng-tns-c160-16 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-middle ng-tns-c160-16">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-header-cell>
                                            <mat-header-cell _ngcontent-pgy-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-17 cdk-column-type mat-column-type ng-star-inserted" mat-sort-header role="columnheader">
                                                <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-17" role="button" tabIndex={0}>
                                                    <div className="mat-sort-header-content ng-tns-c160-17">
                                                        Type
                                                    </div>
                                                    <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-17 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                        <div className="mat-sort-header-stem ng-tns-c160-17">
                                                        </div>
                                                        <div className="mat-sort-header-indicator ng-tns-c160-17 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                            <div className="mat-sort-header-pointer-left ng-tns-c160-17 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-right ng-tns-c160-17 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-middle ng-tns-c160-17">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-header-cell>
                                            <mat-header-cell _ngcontent-pgy-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-18 cdk-column-status mat-column-status ng-star-inserted" mat-sort-header role="columnheader">
                                                <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-18" role="button" tabIndex={0}>
                                                    <div className="mat-sort-header-content ng-tns-c160-18">
                                                        Status
                                                    </div>
                                                    <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-18 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                        <div className="mat-sort-header-stem ng-tns-c160-18">
                                                        </div>
                                                        <div className="mat-sort-header-indicator ng-tns-c160-18 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                            <div className="mat-sort-header-pointer-left ng-tns-c160-18 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-right ng-tns-c160-18 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-middle ng-tns-c160-18">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-header-cell>
                                            <mat-header-cell _ngcontent-pgy-c233 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-19 cdk-column-reason mat-column-reason ng-star-inserted" mat-sort-header role="columnheader">
                                                <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-19" role="button" tabIndex={0}>
                                                    <div className="mat-sort-header-content ng-tns-c160-19">
                                                        Reason
                                                    </div>
                                                    <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-19 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                        <div className="mat-sort-header-stem ng-tns-c160-19">
                                                        </div>
                                                        <div className="mat-sort-header-indicator ng-tns-c160-19 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                            <div className="mat-sort-header-pointer-left ng-tns-c160-19 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-right ng-tns-c160-19 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                            </div>
                                                            <div className="mat-sort-header-pointer-middle ng-tns-c160-19">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-header-cell>
                                            <mat-header-cell _ngcontent-pgy-c233 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="columnheader">
                                                Actions
                                            </mat-header-cell>

                                        </mat-header-row>

                                        <mat-row _ngcontent-pgy-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                <mat-checkbox _ngcontent-pgy-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-12">
                                                    <div className="mdc-form-field">
                                                        <div className="mdc-checkbox">
                                                            <div className="mat-mdc-checkbox-touch-target">
                                                            </div>
                                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-12-input" tabIndex={0} type="checkbox" />
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
                                                        <label htmlFor="mat-mdc-checkbox-12-input">
                                                        </label>
                                                    </div>
                                                </mat-checkbox>
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-applyDate mat-column-applyDate ng-star-inserted" role="cell">
                                                02/22/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-fromDate mat-column-fromDate ng-star-inserted" role="cell">
                                                02/22/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-toDate mat-column-toDate ng-star-inserted" role="cell">
                                                02/26/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-halfDay mat-column-halfDay ng-star-inserted" role="cell">
                                                Yes
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                Casual Leave
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                <div _ngcontent-pgy-c233 className="ng-star-inserted">
                                                    <span _ngcontent-pgy-c233 className="badge badge-pill  col-green">
                                                        Approved
                                                    </span>
                                                </div>



                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-reason mat-column-reason ng-star-inserted" role="cell">
                                                Lorem Ipsum is sim..
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-11" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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

                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-12" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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
                                        <mat-row _ngcontent-pgy-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                <mat-checkbox _ngcontent-pgy-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-13">
                                                    <div className="mdc-form-field">
                                                        <div className="mdc-checkbox">
                                                            <div className="mat-mdc-checkbox-touch-target">
                                                            </div>
                                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-13-input" tabIndex={0} type="checkbox" />
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
                                                        <label htmlFor="mat-mdc-checkbox-13-input">
                                                        </label>
                                                    </div>
                                                </mat-checkbox>
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-applyDate mat-column-applyDate ng-star-inserted" role="cell">
                                                02/17/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-fromDate mat-column-fromDate ng-star-inserted" role="cell">
                                                02/22/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-toDate mat-column-toDate ng-star-inserted" role="cell">
                                                02/26/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-halfDay mat-column-halfDay ng-star-inserted" role="cell">
                                                Yes
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                Sick Leave
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">

                                                <div _ngcontent-pgy-c233 className="ng-star-inserted">
                                                    <span _ngcontent-pgy-c233 className="badge badge-pill  col-red">
                                                        Rejected
                                                    </span>
                                                </div>


                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-reason mat-column-reason ng-star-inserted" role="cell">
                                                Lorem Ipsum is sim..
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-11" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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

                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-12" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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
                                        <mat-row _ngcontent-pgy-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                <mat-checkbox _ngcontent-pgy-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-14">
                                                    <div className="mdc-form-field">
                                                        <div className="mdc-checkbox">
                                                            <div className="mat-mdc-checkbox-touch-target">
                                                            </div>
                                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-14-input" tabIndex={0} type="checkbox" />
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
                                                        <label htmlFor="mat-mdc-checkbox-14-input">
                                                        </label>
                                                    </div>
                                                </mat-checkbox>
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-applyDate mat-column-applyDate ng-star-inserted" role="cell">
                                                02/17/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-fromDate mat-column-fromDate ng-star-inserted" role="cell">
                                                02/12/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-toDate mat-column-toDate ng-star-inserted" role="cell">
                                                02/26/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-halfDay mat-column-halfDay ng-star-inserted" role="cell">
                                                No
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                Sick Leave
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">

                                                <div _ngcontent-pgy-c233 className="ng-star-inserted">
                                                    <span _ngcontent-pgy-c233 className="badge badge-pill  col-red">
                                                        Rejected
                                                    </span>
                                                </div>


                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-reason mat-column-reason ng-star-inserted" role="cell">
                                                Lorem Ipsum is sim..
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-11" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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

                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-12" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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
                                        <mat-row _ngcontent-pgy-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                <mat-checkbox _ngcontent-pgy-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-15">
                                                    <div className="mdc-form-field">
                                                        <div className="mdc-checkbox">
                                                            <div className="mat-mdc-checkbox-touch-target">
                                                            </div>
                                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-15-input" tabIndex={0} type="checkbox" />
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
                                                        <label htmlFor="mat-mdc-checkbox-15-input">
                                                        </label>
                                                    </div>
                                                </mat-checkbox>
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-applyDate mat-column-applyDate ng-star-inserted" role="cell">
                                                05/11/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-fromDate mat-column-fromDate ng-star-inserted" role="cell">
                                                03/17/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-toDate mat-column-toDate ng-star-inserted" role="cell">
                                                03/26/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-halfDay mat-column-halfDay ng-star-inserted" role="cell">
                                                No
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                Casual Leave
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">


                                                <div _ngcontent-pgy-c233 className="ng-star-inserted">
                                                    <span _ngcontent-pgy-c233 className="badge badge-pill  col-blue">
                                                        Pending
                                                    </span>
                                                </div>

                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-reason mat-column-reason ng-star-inserted" role="cell">
                                                Lorem Ipsum is sim..
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-11" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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

                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-12" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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
                                        <mat-row _ngcontent-pgy-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                <mat-checkbox _ngcontent-pgy-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-16">
                                                    <div className="mdc-form-field">
                                                        <div className="mdc-checkbox">
                                                            <div className="mat-mdc-checkbox-touch-target">
                                                            </div>
                                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-16-input" tabIndex={0} type="checkbox" />
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
                                                        <label htmlFor="mat-mdc-checkbox-16-input">
                                                        </label>
                                                    </div>
                                                </mat-checkbox>
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-applyDate mat-column-applyDate ng-star-inserted" role="cell">
                                                07/15/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-fromDate mat-column-fromDate ng-star-inserted" role="cell">
                                                02/22/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-toDate mat-column-toDate ng-star-inserted" role="cell">
                                                02/26/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-halfDay mat-column-halfDay ng-star-inserted" role="cell">
                                                No
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                Casual Leave
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                <div _ngcontent-pgy-c233 className="ng-star-inserted">
                                                    <span _ngcontent-pgy-c233 className="badge badge-pill  col-green">
                                                        Approved
                                                    </span>
                                                </div>



                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-reason mat-column-reason ng-star-inserted" role="cell">
                                                Lorem Ipsum is sim..
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-11" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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

                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-12" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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
                                        <mat-row _ngcontent-pgy-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                <mat-checkbox _ngcontent-pgy-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-17">
                                                    <div className="mdc-form-field">
                                                        <div className="mdc-checkbox">
                                                            <div className="mat-mdc-checkbox-touch-target">
                                                            </div>
                                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-17-input" tabIndex={0} type="checkbox" />
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
                                                        <label htmlFor="mat-mdc-checkbox-17-input">
                                                        </label>
                                                    </div>
                                                </mat-checkbox>
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-applyDate mat-column-applyDate ng-star-inserted" role="cell">
                                                02/17/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-fromDate mat-column-fromDate ng-star-inserted" role="cell">
                                                04/22/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-toDate mat-column-toDate ng-star-inserted" role="cell">
                                                02/26/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-halfDay mat-column-halfDay ng-star-inserted" role="cell">
                                                Yes
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                Privilege Leave
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">


                                                <div _ngcontent-pgy-c233 className="ng-star-inserted">
                                                    <span _ngcontent-pgy-c233 className="badge badge-pill  col-blue">
                                                        Pending
                                                    </span>
                                                </div>

                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-reason mat-column-reason ng-star-inserted" role="cell">
                                                Lorem Ipsum is sim..
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-11" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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

                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-12" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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
                                        <mat-row _ngcontent-pgy-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                <mat-checkbox _ngcontent-pgy-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-18">
                                                    <div className="mdc-form-field">
                                                        <div className="mdc-checkbox">
                                                            <div className="mat-mdc-checkbox-touch-target">
                                                            </div>
                                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-18-input" tabIndex={0} type="checkbox" />
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
                                                        <label htmlFor="mat-mdc-checkbox-18-input">
                                                        </label>
                                                    </div>
                                                </mat-checkbox>
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-applyDate mat-column-applyDate ng-star-inserted" role="cell">
                                                02/20/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-fromDate mat-column-fromDate ng-star-inserted" role="cell">
                                                02/22/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-toDate mat-column-toDate ng-star-inserted" role="cell">
                                                02/26/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-halfDay mat-column-halfDay ng-star-inserted" role="cell">
                                                No
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                Casual Leave
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">

                                                <div _ngcontent-pgy-c233 className="ng-star-inserted">
                                                    <span _ngcontent-pgy-c233 className="badge badge-pill  col-red">
                                                        Rejected
                                                    </span>
                                                </div>


                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-reason mat-column-reason ng-star-inserted" role="cell">
                                                Lorem Ipsum is sim..
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-11" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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

                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-12" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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
                                        <mat-row _ngcontent-pgy-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                <mat-checkbox _ngcontent-pgy-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-19">
                                                    <div className="mdc-form-field">
                                                        <div className="mdc-checkbox">
                                                            <div className="mat-mdc-checkbox-touch-target">
                                                            </div>
                                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-19-input" tabIndex={0} type="checkbox" />
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
                                                        <label htmlFor="mat-mdc-checkbox-19-input">
                                                        </label>
                                                    </div>
                                                </mat-checkbox>
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-applyDate mat-column-applyDate ng-star-inserted" role="cell">
                                                03/24/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-fromDate mat-column-fromDate ng-star-inserted" role="cell">
                                                02/22/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-toDate mat-column-toDate ng-star-inserted" role="cell">
                                                02/26/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-halfDay mat-column-halfDay ng-star-inserted" role="cell">
                                                Yes
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                Marriage Leave
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                <div _ngcontent-pgy-c233 className="ng-star-inserted">
                                                    <span _ngcontent-pgy-c233 className="badge badge-pill  col-green">
                                                        Approved
                                                    </span>
                                                </div>



                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-reason mat-column-reason ng-star-inserted" role="cell">
                                                Lorem Ipsum is sim..
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-11" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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

                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-12" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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
                                        <mat-row _ngcontent-pgy-c233 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                <mat-checkbox _ngcontent-pgy-c233 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-20">
                                                    <div className="mdc-form-field">
                                                        <div className="mdc-checkbox">
                                                            <div className="mat-mdc-checkbox-touch-target">
                                                            </div>
                                                            <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-20-input" tabIndex={0} type="checkbox" />
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
                                                        <label htmlFor="mat-mdc-checkbox-20-input">
                                                        </label>
                                                    </div>
                                                </mat-checkbox>
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-applyDate mat-column-applyDate ng-star-inserted" role="cell">
                                                02/13/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-fromDate mat-column-fromDate ng-star-inserted" role="cell">
                                                03/17/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-toDate mat-column-toDate ng-star-inserted" role="cell">
                                                02/26/2019
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-halfDay mat-column-halfDay ng-star-inserted" role="cell">
                                                No
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                Maternity Leave
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                <div _ngcontent-pgy-c233 className="ng-star-inserted">
                                                    <span _ngcontent-pgy-c233 className="badge badge-pill  col-green">
                                                        Approved
                                                    </span>
                                                </div>



                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell column-nowrap cdk-column-reason mat-column-reason ng-star-inserted" role="cell">
                                                Lorem Ipsum is sim..
                                            </mat-cell>
                                            <mat-cell _ngcontent-pgy-c233 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-11" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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

                                                <button _ngcontent-pgy-c233 aria-describedby="cdk-describedby-message-pgy-1-12" cdk-describedby-host="pgy-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                    <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                    </span>
                                                    <app-feather-icons _ngcontent-pgy-c233 _nghost-pgy-c130>
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

                                    <div _ngcontent-pgy-c233 aria-expanded="false" aria-haspopup="menu" className="mat-mdc-menu-trigger" style={{ "visibility": "hidden", "position": "fixed", "left": "0px", "top": "0px" }}>
                                    </div>

                                    <mat-menu _ngcontent-pgy-c233 className="ng-tns-c105-11 ng-star-inserted">

                                    </mat-menu>
                                    <mat-menu _ngcontent-pgy-c233 className="ng-tns-c105-12 ng-star-inserted">

                                    </mat-menu>
                                    <div _ngcontent-pgy-c233 className="no-results ng-star-inserted" style={{ "display": "none" }}>
                                        No results
                                    </div>

                                    <mat-paginator _ngcontent-pgy-c233 className="mat-mdc-paginator" role="group">
                                        <div className="mat-mdc-paginator-outer-container">
                                            <div className="mat-mdc-paginator-container">
                                                <div className="mat-mdc-paginator-page-size ng-star-inserted">
                                                    <div className="mat-mdc-paginator-page-size-label" id="mat-paginator-page-size-label-1">
                                                        Items per page:
                                                    </div>
                                                    <mat-form-field className="mat-mdc-form-field mat-mdc-paginator-page-size-select ng-tns-c67-20 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-primary ng-star-inserted">

                                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-20 mdc-text-field--outlined mdc-text-field--no-label">

                                                            <div className="mat-mdc-form-field-flex ng-tns-c67-20">
                                                                <div className="mdc-notched-outline ng-tns-c67-20 mdc-notched-outline--no-label ng-star-inserted mdc-notched-outline--notched" matformfieldnotchedoutline>
                                                                    <div className="mdc-notched-outline__leading">
                                                                    </div>
                                                                    <div className="mdc-notched-outline__notch" style={{ "width": "0px" }}>



                                                                    </div>
                                                                    <div className="mdc-notched-outline__trailing">
                                                                    </div>
                                                                </div>



                                                                <div className="mat-mdc-form-field-infix ng-tns-c67-20">

                                                                    <mat-select aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-select-value-3 mat-paginator-page-size-label-1" aria-required="false" className="mat-mdc-select ng-tns-c150-21 ng-tns-c67-20 ng-star-inserted" id="mat-select-2" role="combobox" tabIndex={0}>
                                                                        <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c150-21">
                                                                            <div className="mat-mdc-select-value ng-tns-c150-21" id="mat-select-value-3">

                                                                                <span className="mat-mdc-select-value-text ng-tns-c150-21 ng-star-inserted">
                                                                                    <span className="mat-mdc-select-min-line ng-tns-c150-21 ng-star-inserted">
                                                                                        10
                                                                                    </span>


                                                                                </span>

                                                                            </div>
                                                                            <div className="mat-mdc-select-arrow-wrapper ng-tns-c150-21">
                                                                                <div className="mat-mdc-select-arrow ng-tns-c150-21">
                                                                                    <svg className="ng-tns-c150-21" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                                                        <path className="ng-tns-c150-21" d="M7 10l5 5 5-5z">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </mat-select>
                                                                </div>


                                                            </div>

                                                        </div>
                                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-20">

                                                            <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-20 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                                <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-20">
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-form-field>


                                                </div>

                                                <div className="mat-mdc-paginator-range-actions">
                                                    <div aria-live="polite" className="mat-mdc-paginator-range-label">
                                                        1 – 9 of 9
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

                                                    <button aria-label="Next page" className="mat-mdc-tooltip-trigger mat-mdc-paginator-navigation-next mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" disabled="true" mat-icon-button type="button">
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
                    </div >
                </div >
            </div >





        </>
    );
}


