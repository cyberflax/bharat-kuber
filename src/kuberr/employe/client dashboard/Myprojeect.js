import React, { useState } from "react";
// import "./client.css";
import "../kuber/madhav/Madhav.css"

import "../dashboard/kuber.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";
import "../dashboard/popup/model.css"
import * as yup from "yup";
import "./project.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from '../../../../node_modules/react-bootstrap/Accordion';
import a2 from "../dashboard/img/a2.png";
import a4 from "../dashboard/img/a4.jpg";
import a5 from "../dashboard/img/a5.png";
import a6 from "../dashboard/img/contct.png";
import a7 from "../dashboard/img/a7.png";
import a66 from "../dashboard/img/a66.jpg";
import a13 from "../dashboard/img/a13.png";
import a15 from "../dashboard/img/a15.png";
import a21 from "../dashboard/img/a21.png";
import a30 from "../dashboard/img/pc.png"
import a31 from "../dashboard/img/logout.png"
import a32 from "../dashboard/img/exal.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,

} from "@fortawesome/free-solid-svg-icons";


export function Myprojeect() {
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
                                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: "transparent" }}>
                                                                <span _ngcontent-hni-c131 style={{ color: "black" }}> Cara Stevens </span>
                                                                <img _ngcontent-hni-c131 alt="User" className="user_img" height={32} src="../../assets/images/user/client.jpg" width={32} />
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


                        <Link  className="sidebar-position">

                            <img _ngcontent-hni-c131 alt="logo" src="../../assets/images/logo.png" />
                            <h3><span style={{ color: "black" }} >   Cyber-Instant </span></h3>
                        </Link>
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
                                        src="/assets/images/user/client.jpg"
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
                                    Cara Stevens
                                </div>
                                <div
                                    _ngcontent-sas-c132=""
                                    class="profile-usertitle-job"
                                // style={{color:"white"}}
                                >
                                    Client
                                </div>
                            </div>
                        </div>


                        <div classname="Accord">
                            <div className="dash-item mt-4">
                                <Link to="/Clientdash"><img className='img11' src={a30} alt="dash" /></Link><Link to="/Clientdash" className="adash">Dashboad</Link>
                            </div>
                            <Accordion defaultActiveKey="0" className="mb-2 Accordmain" style={{
                                width: "90%",
                                margin: "auto",
                                overflow: "hidden"
                            }} >
                                <Accordion.Item eventKey="1" >
                                    <Accordion.Header  ><img className='img22' src={a2} alt="dash" /><p className="accord-adash">Projects</p></Accordion.Header>
                                    <Accordion.Body>

                                        <Dropdown.Item className="drop-item" ><Link to="/ClienProject" className=' link1'> Projects</Link ></Dropdown.Item>
                                        <Dropdown.Item className="drop-item" ><Link to="/ProjectInfo" className='link1'>Project Details</Link ></Dropdown.Item>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                            <Accordion defaultActiveKey="0" className="mb-2 Accordmain" style={{
                                width: "90%",
                                margin: "auto",
                                overflow: "hidden"

                            }} >
                                <Accordion.Item eventKey="1" >
                                    <Accordion.Header  ><img className='img22' src={a66} alt="dash" /><p className="accord-adash">Supports</p></Accordion.Header>
                                    <Accordion.Body>

                                        <Dropdown.Item className="drop-item" ><Link to="/Clientticket" className=' link1'> Tickets</Link ></Dropdown.Item>
                                        <Dropdown.Item className="drop-item" ><Link to="/TeckitDetails" className='link1'>Tickets Details</Link ></Dropdown.Item>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div className="dash-item">
                                <Link to="/Billing"> <img className='img11' src={a7} alt="dash" /></Link><Link to="/Billing" className="adash">Billings</Link>
                            </div>
                            <div className="dash-item">
                                <Link to="/ClientChat"> <img className='img11' src={a21} alt="dash" /></Link><Link to="/ClientChat" className="adash">Chat</Link>
                            </div>

                            <div className="dash-item">
                                <Link to="/ClientSetting"><img className='img11' src={a4} alt="dash" /></Link><Link to="/ClientSetting" className="adash">Settings</Link>
                            </div>

                            <div className="dash-item">
                                <img className='img11' src={a31} alt="dash" /><Link to="/logout" className="adash">Logout</Link>
                            </div>



                       
                        </div>



                    </div>
                </div>
            </div>

            <div _ngcontent-hni-c142 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>
        
                        <div _ngcontent-woo-c219 className="block-header">
                            <app-breadcrumb _ngcontent-woo-c219 _nghost-woo-c170>
                                <div _ngcontent-woo-c170 className="breadcrumb-main">
                                    <div _ngcontent-woo-c170 className="row">
                                        <div _ngcontent-woo-c170 className="col-6">
                                            <div _ngcontent-woo-c170 className="breadcrumb-title">
                                                <h4 _ngcontent-woo-c170 className="page-title">
                                                    My Projects
                                                </h4>
                                            </div>
                                        </div>
                                        <div _ngcontent-woo-c170 className="col-6">
                                            <ul _ngcontent-woo-c170 className="breadcrumb-list">
                                                <li _ngcontent-woo-c170 className="breadcrumb-item bcrumb-1">
                                                    <a _ngcontent-woo-c170 href="#/admin/dashboard/main">
                                                        <app-feather-icons _ngcontent-woo-c170 _nghost-woo-c130>
                                                            <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="breadcrumb-icon">
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
                                                <li _ngcontent-woo-c170 className="breadcrumb-item ng-star-inserted">
                                                    Home
                                                </li>
                                                <li _ngcontent-woo-c170 className="breadcrumb-item ng-star-inserted">
                                                    Projects
                                                </li>
                                            
                                                <li _ngcontent-woo-c170 className="breadcrumb-item active">
                                                    My Projects
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </app-breadcrumb>
                        </div>
                        <div _ngcontent-woo-c219 className="row">
                            <div _ngcontent-woo-c219 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div _ngcontent-woo-c219 className="card">
                                    <div _ngcontent-woo-c219 className="body">
                                        <div _ngcontent-woo-c219 className="responsive_table">
                                            <div _ngcontent-woo-c219 className="materialTableHeader">
                                                <div _ngcontent-woo-c219 className="row">
                                                    <div _ngcontent-woo-c219 className="col-8">
                                                        <ul _ngcontent-woo-c219 className="header-buttons-left ms-0">
                                                            <li _ngcontent-woo-c219 className="tbl-title">
                                                                <h2 _ngcontent-woo-c219>
                                                                    My Projects
                                                                </h2>
                                                            </li>
                                                            <li _ngcontent-woo-c219 className="tbl-search-box">
                                                                <label _ngcontent-woo-c219 htmlFor="search-input">
                                                                    <i _ngcontent-woo-c219 className="material-icons search-icon">
                                                                        search
                                                                    </i>
                                                                </label>
                                                                <input _ngcontent-woo-c219 aria-label="Search box" className="browser-default search-field" placeholder="Search" type="text" />
                                                            </li>
                                                            <li _ngcontent-woo-c219 className="tbl-header-btn">
                                                                <div _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-2" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger m-l-10" mattooltip="ADD">
                                                            <button _ngcontent-pgy-c238 className="bi bi-plus-circle" onClick={handleShow} style={{ borderRadius: "20px", width: "50px", height: "50px", color: "green",borderColor:"transparent" }}>

                                                            </button>
                                                            <Modal show={show} onHide={handleClose}  >
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Modal heading</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body >
                                                                    <Formik
                                                                        initialValues={{
                                                                            CreatedBY: "",
                                                                            Subject: "",
                                                                            Status: "",
                                                                            AssignTo: "",
                                                                            Date: "",
                                                                            Description: ""
                                                                        }}


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
                                                                                        <h1 align="center" className="mb-3">Edit</h1>

                                                                                        <div className="row">
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="text" className="form-control" name="ProjectName" placeholder="ProjectName*" />
                                                                                                <label className="ms-3">Project Name</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="ProjectName" /></div>
                                                                                            </div>

                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="text" className="form-control" name="ProjectType" placeholder="ProjectType" />
                                                                                                <label className="ms-3" >Project Type</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="ProjectType" /></div>
                                                                                            </div>
                                                                                        </div>


                                                                                        <div className="row">
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="text" className="form-control" name="OpenTask" placeholder="OpenTask*" />
                                                                                                <label className="ms-3">Open Task</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="OpenTask" /></div>
                                                                                            </div>

                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="text" className="form-control" name="Lead" placeholder="Lead Name*" />
                                                                                                <label className="ms-3" >Lead Name</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="Lead" /></div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row">
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="text" className="form-control" name="Status" placeholder="Status*" />
                                                                                                <label className="ms-3" >Status</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="Status" /></div>
                                                                                            </div>
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="date" className="form-control" name="Date" placeholder="Last Date Modified" />
                                                                                                <label className="ms-3">Last Date Modified</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="Date" /></div>
                                                                                            </div>



                                                                                        </div><div className="row">
                                                                                           
                                                                                            <div class="form-floating col mt-4">
                                                                                                <Field type="date" className="form-control" name="CreateDate" placeholder="Created Date" />
                                                                                                <label className="ms-3">Created Date</label>
                                                                                                <div className="text-danger">   <ErrorMessage name="CreateDate" /></div>
                                                                                            </div>



                                                                                        </div>



                                                                                      




                                                                                        <div className="d-flex justify-content-center flex-wrap mt-5 w-50">
                                                                                            <button
                                                                                                className="btn btn-success me-3 btn-block btn-lg gradient-custom-4 text-body " >Submit</button>
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
                                                            <li _ngcontent-woo-c219 className="tbl-header-btn">
                                                                <div _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-3" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger m-l-10" mattooltip="REFRESH">
                                                            <button _ngcontent-pgy-c238 className="bi bi-arrow-clockwise" style={{ borderRadius: "20px", width: "50px", height: "50px", color: "green" ,borderColor:"transparent" }}>

                                                            </button>
                                                                </div>
                                                            
                                                            </li>
                                                            <li _ngcontent-woo-c219 className="tbl-header-btn">
                                                                <div _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-4" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger m-l-10" hidden mattooltip="DELETE">
                                                                    <button _ngcontent-woo-c219 className="mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-warn mat-mdc-button-base" color="warn" mat-mini-fab>
                                                                        <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple">
                                                                        </span>
                                                                        <mat-icon _ngcontent-woo-c219 aria-hidden="true" className="mat-icon notranslate col-white material-icons mat-ligature-font mat-icon-no-color" data-mat-icon-type="font" role="img">
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
                                                    <div _ngcontent-woo-c219 className="col-4">
                                                        <ul _ngcontent-woo-c219 className="tbl-export-btn">
                                                            <li _ngcontent-woo-c219>
                                                                <div _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-5" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger export-button m-l-10" mattooltip="XLSX">
                                                            <img _ngcontent-pgy-c233 alt="a32" src={a32} style={{ width: "30px", height: "30px" }} />
                                                                </div>
                                                            
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <mat-table _ngcontent-woo-c219 className="mat-mdc-table mdc-data-table__table cdk-table mat-sort mat-cell" matsort role="table">
                                                <mat-header-row _ngcontent-woo-c219 className="mat-mdc-header-row mdc-data-table__header-row cdk-header-row ng-star-inserted" role="row">
                                                    <mat-header-cell _ngcontent-woo-c219 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="columnheader">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-1">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-1-input" tabIndex={0} type="checkbox" />
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
                                                                <label htmlFor="mat-mdc-checkbox-1-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-woo-c219 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c214-3 cdk-column-pName mat-column-pName ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-woo-1-6" cdk-describedby-host="woo-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c214-3" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c214-3">
                                                                Project Name
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c214-3 ng-star-inserted" style={{ transform: 'translateY(25%)', opacity: 0 }}>
                                                                <div className="mat-sort-header-stem ng-tns-c214-3">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c214-3 ng-trigger ng-trigger-indicator" style={{ transform: 'translateY(0px)' }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c214-3 ng-trigger ng-trigger-leftPointer" style={{ transform: 'rotate(-45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c214-3 ng-trigger ng-trigger-rightPointer" style={{ transform: 'rotate(45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c214-3">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-woo-c219 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c214-4 cdk-column-type mat-column-type ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-woo-1-6" cdk-describedby-host="woo-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c214-4" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c214-4">
                                                                Type
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c214-4 ng-star-inserted" style={{ transform: 'translateY(25%)', opacity: 0 }}>
                                                                <div className="mat-sort-header-stem ng-tns-c214-4">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c214-4 ng-trigger ng-trigger-indicator" style={{ transform: 'translateY(0px)' }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c214-4 ng-trigger ng-trigger-leftPointer" style={{ transform: 'rotate(-45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c214-4 ng-trigger ng-trigger-rightPointer" style={{ transform: 'rotate(45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c214-4">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-woo-c219 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c214-5 cdk-column-open_task mat-column-open_task ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-woo-1-6" cdk-describedby-host="woo-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c214-5" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c214-5">
                                                                Open Task
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c214-5 ng-star-inserted" style={{ transform: 'translateY(25%)', opacity: 0 }}>
                                                                <div className="mat-sort-header-stem ng-tns-c214-5">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c214-5 ng-trigger ng-trigger-indicator" style={{ transform: 'translateY(0px)' }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c214-5 ng-trigger ng-trigger-leftPointer" style={{ transform: 'rotate(-45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c214-5 ng-trigger ng-trigger-rightPointer" style={{ transform: 'rotate(45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c214-5">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-woo-c219 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c214-6 cdk-column-lead_name mat-column-lead_name ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-woo-1-6" cdk-describedby-host="woo-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c214-6" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c214-6">
                                                                Lead
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c214-6 ng-star-inserted" style={{ transform: 'translateY(25%)', opacity: 0 }}>
                                                                <div className="mat-sort-header-stem ng-tns-c214-6">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c214-6 ng-trigger ng-trigger-indicator" style={{ transform: 'translateY(0px)' }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c214-6 ng-trigger ng-trigger-leftPointer" style={{ transform: 'rotate(-45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c214-6 ng-trigger ng-trigger-rightPointer" style={{ transform: 'rotate(45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c214-6">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-woo-c219 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c214-7 cdk-column-status mat-column-status ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-woo-1-6" cdk-describedby-host="woo-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c214-7" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c214-7">
                                                                Status
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c214-7 ng-star-inserted" style={{ transform: 'translateY(25%)', opacity: 0 }}>
                                                                <div className="mat-sort-header-stem ng-tns-c214-7">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c214-7 ng-trigger ng-trigger-indicator" style={{ transform: 'translateY(0px)' }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c214-7 ng-trigger ng-trigger-leftPointer" style={{ transform: 'rotate(-45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c214-7 ng-trigger ng-trigger-rightPointer" style={{ transform: 'rotate(45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c214-7">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-woo-c219 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c214-8 cdk-column-last_modify mat-column-last_modify ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-woo-1-6" cdk-describedby-host="woo-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c214-8" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c214-8">
                                                                Last Modified
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c214-8 ng-star-inserted" style={{ transform: 'translateY(25%)', opacity: 0 }}>
                                                                <div className="mat-sort-header-stem ng-tns-c214-8">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c214-8 ng-trigger ng-trigger-indicator" style={{ transform: 'translateY(0px)' }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c214-8 ng-trigger ng-trigger-leftPointer" style={{ transform: 'rotate(-45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c214-8 ng-trigger ng-trigger-rightPointer" style={{ transform: 'rotate(45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c214-8">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-woo-c219 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c214-9 cdk-column-create_date mat-column-create_date ng-star-inserted" mat-sort-header role="columnheader">
                                                        <div aria-describedby="cdk-describedby-message-woo-1-6" cdk-describedby-host="woo-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c214-9" role="button" tabIndex={0}>
                                                            <div className="mat-sort-header-content ng-tns-c214-9">
                                                                Create Date
                                                            </div>
                                                            <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c214-9 ng-star-inserted" style={{ transform: 'translateY(25%)', opacity: 0 }}>
                                                                <div className="mat-sort-header-stem ng-tns-c214-9">
                                                                </div>
                                                                <div className="mat-sort-header-indicator ng-tns-c214-9 ng-trigger ng-trigger-indicator" style={{ transform: 'translateY(0px)' }}>
                                                                    <div className="mat-sort-header-pointer-left ng-tns-c214-9 ng-trigger ng-trigger-leftPointer" style={{ transform: 'rotate(-45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-right ng-tns-c214-9 ng-trigger ng-trigger-rightPointer" style={{ transform: 'rotate(45deg)' }}>
                                                                    </div>
                                                                    <div className="mat-sort-header-pointer-middle ng-tns-c214-9">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                    </mat-header-cell>
                                                    <mat-header-cell _ngcontent-woo-c219 className="mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="columnheader">
                                                        Actions
                                                    </mat-header-cell>
                                                
                                                </mat-header-row>
                                            
                                                <mat-row _ngcontent-woo-c219 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ cursor: 'pointer' }}>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-2">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-2-input" tabIndex={0} type="checkbox" />
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
                                                                <label htmlFor="mat-mdc-checkbox-2-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-pName mat-column-pName ng-star-inserted" role="cell">
                                                        Chat App
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Software
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-open_task mat-column-open_task ng-star-inserted" role="cell">
                                                        5
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-lead_name mat-column-lead_name ng-star-inserted" role="cell">
                                                        Angelica Ramos
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                    
                                                        <div _ngcontent-woo-c219 className="ng-star-inserted">
                                                            <span _ngcontent-woo-c219 className="badge badge-solid-green">
                                                                Active
                                                            </span>
                                                        </div>
                                                    
                                                    
                                                    
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-last_modify mat-column-last_modify ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-create_date mat-column-create_date ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-woo-c219 onClick={handleShow} aria-describedby="cdk-describedby-message-woo-1-7" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-edit">
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
                                                    
                                                        <button _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-8" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-delete">
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
                                                <mat-row _ngcontent-woo-c219 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ cursor: 'pointer' }}>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-3">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-3-input" tabIndex={0} type="checkbox" />
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
                                                                <label htmlFor="mat-mdc-checkbox-3-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-pName mat-column-pName ng-star-inserted" role="cell">
                                                        Jasper Report
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Software
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-open_task mat-column-open_task ng-star-inserted" role="cell">
                                                        15
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-lead_name mat-column-lead_name ng-star-inserted" role="cell">
                                                        Airi Satou
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-woo-c219 className="ng-star-inserted">
                                                            <span _ngcontent-woo-c219 className="badge badge-solid-blue">
                                                                New
                                                            </span>
                                                        </div>
                                                    
                                                    
                                                    
                                                    
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-last_modify mat-column-last_modify ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-create_date mat-column-create_date ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-woo-c219 onClick={handleShow} aria-describedby="cdk-describedby-message-woo-1-7" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-edit">
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
                                                    
                                                        <button _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-8" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-delete">
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
                                                <mat-row _ngcontent-woo-c219 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ cursor: 'pointer' }}>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-4">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-4-input" tabIndex={0} type="checkbox" />
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
                                                                <label htmlFor="mat-mdc-checkbox-4-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-pName mat-column-pName ng-star-inserted" role="cell">
                                                        Java Project
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Software
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-open_task mat-column-open_task ng-star-inserted" role="cell">
                                                        11
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-lead_name mat-column-lead_name ng-star-inserted" role="cell">
                                                        Jens Brincker
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                    
                                                        <div _ngcontent-woo-c219 className="ng-star-inserted">
                                                            <span _ngcontent-woo-c219 className="badge badge-solid-green">
                                                                Active
                                                            </span>
                                                        </div>
                                                    
                                                    
                                                    
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-last_modify mat-column-last_modify ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-create_date mat-column-create_date ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-woo-c219 onClick={handleShow} aria-describedby="cdk-describedby-message-woo-1-7" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-edit">
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
                                                    
                                                        <button _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-8" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-delete">
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
                                                <mat-row _ngcontent-woo-c219 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ cursor: 'pointer' }}>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-5">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-5-input" tabIndex={0} type="checkbox" />
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
                                                                <label htmlFor="mat-mdc-checkbox-5-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-pName mat-column-pName ng-star-inserted" role="cell">
                                                        Testing Website
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Software
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-open_task mat-column-open_task ng-star-inserted" role="cell">
                                                        0
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-lead_name mat-column-lead_name ng-star-inserted" role="cell">
                                                        John Doe
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                    
                                                    
                                                        <div _ngcontent-woo-c219 className="ng-star-inserted">
                                                            <span _ngcontent-woo-c219 className="badge badge-solid-orange">
                                                                Hold
                                                            </span>
                                                        </div>
                                                    
                                                    
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-last_modify mat-column-last_modify ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-create_date mat-column-create_date ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-woo-c219 onClick={handleShow} aria-describedby="cdk-describedby-message-woo-1-7" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-edit">
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
                                                    
                                                        <button _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-8" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-delete">
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
                                                <mat-row _ngcontent-woo-c219 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ cursor: 'pointer' }}>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-6">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-6-input" tabIndex={0} type="checkbox" />
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
                                                                <label htmlFor="mat-mdc-checkbox-6-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-pName mat-column-pName ng-star-inserted" role="cell">
                                                        Website SEO
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Software
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-open_task mat-column-open_task ng-star-inserted" role="cell">
                                                        22
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-lead_name mat-column-lead_name ng-star-inserted" role="cell">
                                                        Cara Stevens
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                    
                                                    
                                                    
                                                        <div _ngcontent-woo-c219 className="ng-star-inserted">
                                                            <span _ngcontent-woo-c219 className="badge badge-solid-red">
                                                                Closed
                                                            </span>
                                                        </div>
                                                    
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-last_modify mat-column-last_modify ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-create_date mat-column-create_date ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-woo-c219 onClick={handleShow} aria-describedby="cdk-describedby-message-woo-1-7" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-edit">
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
                                                    
                                                        <button _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-8" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-delete">
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
                                                <mat-row _ngcontent-woo-c219 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ cursor: 'pointer' }}>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-7">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-7-input" tabIndex={0} type="checkbox" />
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
                                                                <label htmlFor="mat-mdc-checkbox-7-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-pName mat-column-pName ng-star-inserted" role="cell">
                                                        Jasper Report
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Software
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-open_task mat-column-open_task ng-star-inserted" role="cell">
                                                        10
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-lead_name mat-column-lead_name ng-star-inserted" role="cell">
                                                        Airi Satou
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-woo-c219 className="ng-star-inserted">
                                                            <span _ngcontent-woo-c219 className="badge badge-solid-blue">
                                                                New
                                                            </span>
                                                        </div>
                                                    
                                                    
                                                    
                                                    
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-last_modify mat-column-last_modify ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-create_date mat-column-create_date ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-woo-c219 onClick={handleShow} aria-describedby="cdk-describedby-message-woo-1-7" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-edit">
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
                                                    
                                                        <button _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-8" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-delete">
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
                                                <mat-row _ngcontent-woo-c219 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ cursor: 'pointer' }}>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-8">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-8-input" tabIndex={0} type="checkbox" />
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
                                                                <label htmlFor="mat-mdc-checkbox-8-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-pName mat-column-pName ng-star-inserted" role="cell">
                                                        Java Project
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Software
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-open_task mat-column-open_task ng-star-inserted" role="cell">
                                                        15
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-lead_name mat-column-lead_name ng-star-inserted" role="cell">
                                                        Angelica Ramos
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                    
                                                        <div _ngcontent-woo-c219 className="ng-star-inserted">
                                                            <span _ngcontent-woo-c219 className="badge badge-solid-green">
                                                                Active
                                                            </span>
                                                        </div>
                                                    
                                                    
                                                    
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-last_modify mat-column-last_modify ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-create_date mat-column-create_date ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-woo-c219 onClick={handleShow} aria-describedby="cdk-describedby-message-woo-1-7" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-edit">
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
                                                    
                                                        <button _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-8" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-delete">
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
                                                <mat-row _ngcontent-woo-c219 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ cursor: 'pointer' }}>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-9">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-9-input" tabIndex={0} type="checkbox" />
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
                                                                <label htmlFor="mat-mdc-checkbox-9-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-pName mat-column-pName ng-star-inserted" role="cell">
                                                        Testing Website
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Software
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-open_task mat-column-open_task ng-star-inserted" role="cell">
                                                        7
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-lead_name mat-column-lead_name ng-star-inserted" role="cell">
                                                        John Doe
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                    
                                                        <div _ngcontent-woo-c219 className="ng-star-inserted">
                                                            <span _ngcontent-woo-c219 className="badge badge-solid-green">
                                                                Active
                                                            </span>
                                                        </div>
                                                    
                                                    
                                                    
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-last_modify mat-column-last_modify ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-create_date mat-column-create_date ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-woo-c219 onClick={handleShow} aria-describedby="cdk-describedby-message-woo-1-7" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-edit">
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
                                                    
                                                        <button _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-8" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-delete">
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
                                                <mat-row _ngcontent-woo-c219 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ cursor: 'pointer' }}>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-10">
                                                            <div className="mdc-form-field">
                                                                <div className="mdc-checkbox">
                                                                    <div className="mat-mdc-checkbox-touch-target">
                                                                    </div>
                                                                    <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-10-input" tabIndex={0} type="checkbox" />
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
                                                                <label htmlFor="mat-mdc-checkbox-10-input">
                                                                </label>
                                                            </div>
                                                        </mat-checkbox>
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-pName mat-column-pName ng-star-inserted" role="cell">
                                                        Jasper Report
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Software
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-open_task mat-column-open_task ng-star-inserted" role="cell">
                                                        0
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-lead_name mat-column-lead_name ng-star-inserted" role="cell">
                                                        Cara Stevens
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                    
                                                    
                                                    
                                                        <div _ngcontent-woo-c219 className="ng-star-inserted">
                                                            <span _ngcontent-woo-c219 className="badge badge-solid-red">
                                                                Closed
                                                            </span>
                                                        </div>
                                                    
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-last_modify mat-column-last_modify ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-create_date mat-column-create_date ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-woo-c219 onClick={handleShow} aria-describedby="cdk-describedby-message-woo-1-7" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-edit">
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
                                                    
                                                        <button _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-8" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-delete">
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
                                                <mat-row _ngcontent-woo-c219 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ cursor: 'pointer' }}>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-select mat-column-select tbl-col-width-per-6 ng-star-inserted" role="cell">
                                                        <mat-checkbox _ngcontent-woo-c219 className="mat-mdc-checkbox mat-accent tbl-checkbox" id="mat-mdc-checkbox-11">
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
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-pName mat-column-pName ng-star-inserted" role="cell">
                                                        PHP website
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-type mat-column-type ng-star-inserted" role="cell">
                                                        Software
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-open_task mat-column-open_task ng-star-inserted" role="cell">
                                                        19
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-lead_name mat-column-lead_name ng-star-inserted" role="cell">
                                                        Jens Brincker
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                        <div _ngcontent-woo-c219 className="ng-star-inserted">
                                                            <span _ngcontent-woo-c219 className="badge badge-solid-blue">
                                                                New
                                                            </span>
                                                        </div>
                                                    
                                                    
                                                    
                                                    
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-last_modify mat-column-last_modify ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-create_date mat-column-create_date ng-star-inserted" role="cell">
                                                        02/25/2020
                                                    </mat-cell>
                                                    <mat-cell _ngcontent-woo-c219 className="mat-mdc-cell mdc-data-table__cell cdk-cell pr-0 cdk-column-actions mat-column-actions ng-star-inserted" role="cell">
                                                <button _ngcontent-woo-c219 onClick={handleShow} aria-describedby="cdk-describedby-message-woo-1-7" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Edit">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-edit">
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
                                                    
                                                        <button _ngcontent-woo-c219 aria-describedby="cdk-describedby-message-woo-1-8" cdk-describedby-host="woo-1" className="mat-mdc-tooltip-trigger tbl-action-btn mdc-icon-button mat-mdc-icon-button mat-accent mat-mdc-button-base" color="accent" mat-icon-button mattooltip="Delete">
                                                            <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple">
                                                            </span>
                                                            <app-feather-icons _ngcontent-woo-c219 _nghost-woo-c130>
                                                                <i-feather _ngcontent-woo-c130 _nghost-woo-c112 className="tbl-fav-delete">
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
                                        
                                            <div _ngcontent-woo-c219 className="no-results ng-star-inserted" style={{ display: 'none' }}>
                                                No results
                                            </div>
                                        
                                            <mat-paginator _ngcontent-woo-c219 className="mat-mdc-paginator" role="group">
                                                <div className="mat-mdc-paginator-outer-container">
                                                    <div className="mat-mdc-paginator-container">
                                                        <div className="mat-mdc-paginator-page-size ng-star-inserted">
                                                            <div className="mat-mdc-paginator-page-size-label" id="mat-paginator-page-size-label-0">
                                                                Items per page:
                                                            </div>
                                                            <mat-form-field className="mat-mdc-form-field mat-mdc-paginator-page-size-select ng-tns-c67-10 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-primary ng-star-inserted">
                                                            
                                                                <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-10 mdc-text-field--outlined mdc-text-field--no-label">
                                                                
                                                                    <div className="mat-mdc-form-field-flex ng-tns-c67-10">
                                                                        <div className="mdc-notched-outline ng-tns-c67-10 mdc-notched-outline--no-label ng-star-inserted mdc-notched-outline--notched" matformfieldnotchedoutline>
                                                                            <div className="mdc-notched-outline__leading">
                                                                            </div>
                                                                            <div className="mdc-notched-outline__notch" style={{ width: '0px' }}>
                                                                            
                                                                            
                                                                            
                                                                            </div>
                                                                            <div className="mdc-notched-outline__trailing">
                                                                            </div>
                                                                        </div>
                                                                    
                                                                    
                                                                    
                                                                        <div className="mat-mdc-form-field-infix ng-tns-c67-10">
                                                                        
                                                                            <mat-select aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-select-value-1 mat-paginator-page-size-label-0" aria-required="false" className="mat-mdc-select ng-tns-c163-11 ng-tns-c67-10 ng-star-inserted" id="mat-select-0" role="combobox" tabIndex={0}>
                                                                                <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c163-11">
                                                                                    <div className="mat-mdc-select-value ng-tns-c163-11" id="mat-select-value-1">
                                                                                    
                                                                                        <span className="mat-mdc-select-value-text ng-tns-c163-11 ng-star-inserted">
                                                                                            <span className="mat-mdc-select-min-line ng-tns-c163-11 ng-star-inserted">
                                                                                                10
                                                                                            </span>
                                                                                        
                                                                                        
                                                                                        </span>
                                                                                    
                                                                                    </div>
                                                                                    <div className="mat-mdc-select-arrow-wrapper ng-tns-c163-11">
                                                                                        <div className="mat-mdc-select-arrow ng-tns-c163-11">
                                                                                            <svg className="ng-tns-c163-11" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                                                                <path className="ng-tns-c163-11" d="M7 10l5 5 5-5z">
                                                                                                </path>
                                                                                            </svg>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            
                                                                            </mat-select>
                                                                        </div>
                                                                    
                                                                    
                                                                    </div>
                                                                
                                                                </div>
                                                                <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-10">
                                                                
                                                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-10 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ opacity: 1, transform: 'translateY(0%)' }}>
                                                                    
                                                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-10">
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


