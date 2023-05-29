import React, { useState } from "react";
// import "./client.css";
import "../kuber/madhav/Madhav.css"

import "../dashboard/kuber.css"
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,

} from "@fortawesome/free-solid-svg-icons";


export function TeckitDetails() {
    const [isOpen, setIsOpen] = useState(true);
    // const [isShow, setIsShow] = useState(false);


    function handleTrigger() {
        setIsOpen(!isOpen);
    }
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


                        <Link className="sidebar-position">

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
                                <Link to="/"><img className='img11' src={a30} alt="dash" /></Link><Link to="/" className="adash">Dashboad</Link>
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

                <div _ngcontent-woo-c221 className="block-header">
                    <app-breadcrumb _ngcontent-woo-c221 _nghost-woo-c170>
                        <div _ngcontent-woo-c170 className="breadcrumb-main">
                            <div _ngcontent-woo-c170 className="row">
                                <div _ngcontent-woo-c170 className="col-6">
                                    <div _ngcontent-woo-c170 className="breadcrumb-title">
                                        <h4 _ngcontent-woo-c170 className="page-title">
                                            Ticket Details
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
                                            Tickets
                                        </li>
                                       
                                        <li _ngcontent-woo-c170 className="breadcrumb-item active">
                                            Ticket Details
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </app-breadcrumb>
                </div>
                <div _ngcontent-woo-c221 className="row">
                    <div _ngcontent-woo-c221 className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div _ngcontent-woo-c221 className="card">
                            <div _ngcontent-woo-c221 className="body">
                                <div _ngcontent-woo-c221 className="responsive_table">
                                    <table _ngcontent-woo-c221 className="table mb-0">
                                        <tbody _ngcontent-woo-c221>
                                            <tr _ngcontent-woo-c221>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="w-50">
                                                        Ticket ID
                                                    </span>
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    :
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="font-weight-semibold">
                                                        #289
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c221>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="w-50">
                                                        Ticket User
                                                    </span>
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    :
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="font-weight-semibold">
                                                        User
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c221>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="w-50">
                                                        Ticket Category
                                                    </span>
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    :
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="font-weight-semibold">
                                                        Support
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c221>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="w-50">
                                                        Ticket Priority
                                                    </span>
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    :
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="badge badge-success-light">
                                                        Low
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c221>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="w-50">
                                                        Assigned To
                                                    </span>
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    :
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="font-weight-semibold">
                                                        Admin
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c221>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="w-50">
                                                        Open Date
                                                    </span>
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    :
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="font-weight-semibold">
                                                        12-01-2021 11:30AM
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c221>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="w-50">
                                                        Replied Date
                                                    </span>
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    :
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="font-weight-semibold">
                                                        15-01-2021 04:12PM
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c221>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="w-50">
                                                        Status
                                                    </span>
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    :
                                                </td>
                                                <td _ngcontent-woo-c221>
                                                    <span _ngcontent-woo-c221 className="badge badge-success">
                                                        Open
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-woo-c221 className="card">
                            <div _ngcontent-woo-c221 className="body">
                                <div _ngcontent-woo-c221 className="wrapper">
                                    <div _ngcontent-woo-c221 className="project-card-header">
                                        Client Details
                                    </div>
                                    <div _ngcontent-woo-c221 className="project-info-box">
                                        <p _ngcontent-woo-c221>
                                            <b _ngcontent-woo-c221>
                                                Client:
                                            </b>
                                            xyz pvt.ltd
                                        </p>
                                        <p _ngcontent-woo-c221>
                                            <b _ngcontent-woo-c221>
                                                Date:
                                            </b>
                                            25.07.2021
                                        </p>
                                        <p _ngcontent-woo-c221>
                                            <b _ngcontent-woo-c221>
                                                Contact Person:
                                            </b>
                                            John Doe
                                        </p>
                                        <p _ngcontent-woo-c221>
                                            <b _ngcontent-woo-c221>
                                                Country:
                                            </b>
                                            USA
                                        </p>
                                        <p _ngcontent-woo-c221 className="mb-0">
                                            <b _ngcontent-woo-c221>
                                                Budget:
                                            </b>
                                            $500
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-woo-c221 className="card">
                            <div _ngcontent-woo-c221 className="body">
                                <div _ngcontent-woo-c221 className="wrapper">
                                    <div _ngcontent-woo-c221 className="project-card-header">
                                        Project tags
                                    </div>
                                    <div _ngcontent-woo-c221 className="panel-body mb-4">
                                        <span _ngcontent-woo-c221 className="label label-success m-1">
                                            Angular
                                        </span>
                                        <span _ngcontent-woo-c221 className="label label-warning m-1">
                                            Typescript
                                        </span>
                                        <span _ngcontent-woo-c221 className="label label-info m-1">
                                            SCSS
                                        </span>
                                        <span _ngcontent-woo-c221 className="label label-success m-1">
                                            Git
                                        </span>
                                        <span _ngcontent-woo-c221 className="label label-danger m-1">
                                            Admin
                                        </span>
                                        <span _ngcontent-woo-c221 className="label label-warning m-1">
                                            Project
                                        </span>
                                        <span _ngcontent-woo-c221 className="label label-success m-1">
                                            Photoshop
                                        </span>
                                        <span _ngcontent-woo-c221 className="label label-primary m-1">
                                            Material
                                        </span>
                                    </div>
                                    <div _ngcontent-woo-c221 className="project-card-header">
                                        Project files
                                    </div>
                                    <div _ngcontent-woo-c221 className="d-flex mb-2">
                                        <div _ngcontent-woo-c221 className="project-doc-icon text-center">
                                            <i _ngcontent-woo-c221 className="far fa-file-pdf col-red">
                                            </i>
                                        </div>
                                        <div _ngcontent-woo-c221 className="content ms-3">
                                            <p _ngcontent-woo-c221 className="mb-1">
                                                Project_document.pdf
                                            </p>
                                            <span _ngcontent-woo-c221>
                                                Size: 4.3Mb
                                            </span>
                                        </div>
                                    </div>
                                    <div _ngcontent-woo-c221 className="d-flex mb-2">
                                        <div _ngcontent-woo-c221 className="project-doc-icon text-center">
                                            <i _ngcontent-woo-c221 className="far fa-file-word col-blue">
                                            </i>
                                        </div>
                                        <div _ngcontent-woo-c221 className="content ms-3">
                                            <p _ngcontent-woo-c221 className="mb-1">
                                                error_log_47859657458.docx
                                            </p>
                                            <span _ngcontent-woo-c221>
                                                Size: 2.7Mb
                                            </span>
                                        </div>
                                    </div>
                                    <div _ngcontent-woo-c221 className="d-flex">
                                        <div _ngcontent-woo-c221 className="project-doc-icon text-center">
                                            <i _ngcontent-woo-c221 className="far fa-file-image col-green">
                                            </i>
                                        </div>
                                        <div _ngcontent-woo-c221 className="content ms-3">
                                            <p _ngcontent-woo-c221 className="mb-1">
                                                screenshots.jpeg
                                            </p>
                                            <span _ngcontent-woo-c221>
                                                Size: 2.0Mb
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-woo-c221 className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <div _ngcontent-woo-c221 className="card">
                            <div _ngcontent-woo-c221 className="header">
                                <h2 _ngcontent-woo-c221>
                                    Ticket #5264
                                </h2>
                            </div>
                            <div _ngcontent-woo-c221 className="body">
                                <div _ngcontent-woo-c221 className="wrapper wrapper-content animated fadeInUp">
                                    <div _ngcontent-woo-c221 className="ibox">
                                        <div _ngcontent-woo-c221 className="ibox-content">
                                            <div _ngcontent-woo-c221 className="row">
                                                <div _ngcontent-woo-c221 className="col-lg-12">
                                                    <div _ngcontent-woo-c221 className="m-b-md">
                                                        <p _ngcontent-woo-c221 className="col-blue cursor-pointer pull-right">
                                                            Edit project
                                                        </p>
                                                        <h3 _ngcontent-woo-c221 className="project-name">
                                                            Wordpress Website
                                                        </h3>
                                                    </div>
                                                    <dl _ngcontent-woo-c221>
                                                        <dt _ngcontent-woo-c221 className="pull-left me-2">
                                                            Status:
                                                        </dt>
                                                        <dd _ngcontent-woo-c221>
                                                            <span _ngcontent-isv-c222 _ngcontent-woo-c221 className="project-bedge2 project-type-Testing">
                                                                <div _ngcontent-isv-c222 _ngcontent-woo-c221 className="pro-left">
                                                                    Active
                                                                </div>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                            <div _ngcontent-woo-c221 className="row">
                                                <div _ngcontent-woo-c221 className="col-lg-5">
                                                    <dl _ngcontent-woo-c221 className="dl-horizontal">
                                                        <dt _ngcontent-woo-c221 className="pull-left me-2">
                                                            Created by:
                                                        </dt>
                                                        <dd _ngcontent-woo-c221>
                                                            Jayesh Patel
                                                        </dd>
                                                        <dt _ngcontent-woo-c221 className="pull-left me-2">
                                                            Messages:
                                                        </dt>
                                                        <dd _ngcontent-woo-c221>
                                                            277
                                                        </dd>
                                                        <dt _ngcontent-woo-c221 className="pull-left me-2">
                                                            Commits:
                                                        </dt>
                                                        <dd _ngcontent-woo-c221>
                                                            175
                                                        </dd>
                                                        <dt _ngcontent-woo-c221 className="pull-left me-2">
                                                            Version:
                                                        </dt>
                                                        <dd _ngcontent-woo-c221>
                                                            v2.5.2
                                                        </dd>
                                                        <dt _ngcontent-woo-c221 className="pull-left me-2">
                                                            Project Status:
                                                        </dt>
                                                        <dd _ngcontent-woo-c221>
                                                            <div _ngcontent-woo-c221 className="progress progress-xs mt-3">
                                                                <mat-progress-bar _ngcontent-woo-c221 aria-valuemax={100} aria-valuemin={0} aria-valuenow={60} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" tabIndex={-1} value={60}>
                                                                    <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                                        <div className="mdc-linear-progress__buffer-bar" style={{ flexBasis: '100%' }}>
                                                                        </div>
                                                                        <div className="mdc-linear-progress__buffer-dots">
                                                                        </div>
                                                                    </div>
                                                                    <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ transform: 'scaleX(0.6)' }}>
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
                                                        <small _ngcontent-woo-c221>
                                                            <strong _ngcontent-woo-c221>
                                                                60%
                                                            </strong>
                                                            Project completed.
                                                        </small>
                                                    </dl>
                                                </div>
                                                <div _ngcontent-woo-c221 className="col-lg-7" id="cluster_info">
                                                    <dl _ngcontent-woo-c221 className="dl-horizontal">
                                                        <dt _ngcontent-woo-c221 className="pull-left me-2">
                                                            Last Updated:
                                                        </dt>
                                                        <dd _ngcontent-woo-c221>
                                                            22-08-2021 12:15:57
                                                        </dd>
                                                        <dt _ngcontent-woo-c221 className="pull-left me-2">
                                                            Created:
                                                        </dt>
                                                        <dd _ngcontent-woo-c221>
                                                            17-05-2020
                                                        </dd>
                                                        <dt _ngcontent-woo-c221 className="pull-left me-2">
                                                            Deadline:
                                                        </dt>
                                                        <dd _ngcontent-woo-c221>
                                                            22-09-2021
                                                        </dd>
                                                        <dt _ngcontent-woo-c221 className="pull-left me-2">
                                                            Team:
                                                        </dt>
                                                        <dd _ngcontent-woo-c221 className="project-people">
                                                            <ul _ngcontent-woo-c221 className="list-unstyled order-list">
                                                                <li _ngcontent-woo-c221 className="avatar avatar-sm">
                                                                    <img _ngcontent-woo-c221 alt="user" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                                                </li>
                                                                <li _ngcontent-woo-c221 className="avatar avatar-sm">
                                                                    <img _ngcontent-woo-c221 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                                                </li>
                                                                <li _ngcontent-woo-c221 className="avatar avatar-sm">
                                                                    <img _ngcontent-woo-c221 alt="user" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                                                </li>
                                                                <li _ngcontent-woo-c221 className="avatar avatar-sm">
                                                                    <span _ngcontent-woo-c221 className="badge">
                                                                        +4
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                            <div _ngcontent-woo-c221 className="row">
                                                <div _ngcontent-woo-c221 className="col-lg-12">
                                                    <div _ngcontent-woo-c221 className="project-activity" style={{overflow:"hidden"}}>
                                                        <mat-tab-group _ngcontent-woo-c221 className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs">
                                                            <mat-tab-header className="mat-mdc-tab-header">
                                                                <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                                                    <div className="mat-mdc-tab-header-pagination-chevron">
                                                                    </div>
                                                                </button>
                                                                <div className="mat-mdc-tab-label-container">
                                                                    <div className="mat-mdc-tab-list" role="tablist" style={{ transform: 'translateX(0px)' }}>
                                                                        <div className="mat-mdc-tab-labels" style={{display:"flex"}}>
                                                                            <div aria-controls="mat-tab-content-1-0" style={{ width: "50%" }} aria-disabled="false" aria-posinset={1} aria-selected="true" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active" id="mat-tab-label-1-0" mattablabelwrapper role="tab" tabIndex={0}>
                                                                                <span className="mdc-tab__ripple">
                                                                                </span>
                                                                                <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple>
                                                                                </div>
                                                                                <span className="mdc-tab__content">
                                                                                    <span className="mdc-tab__text-label" style={{display:"flex"}}>
                                                                                        <button _ngcontent-woo-c220 aria-hidden="true" className="bi bi-envelope-plus" data-mat-icon-type="font" style={{ width: "50%", color: "blue", border: "none", background: "transparent" }} >
                                                                                            <span style={{ color: "black", marginLeft: "20px" }}> Messages</span>
                                                                                        </button>

                                                                                    </span>
                                                                                </span>
                                                                                <span className="mdc-tab-indicator">
                                                                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div aria-controls="mat-tab-content-1-1" style={{ width: "50%" }} aria-disabled="false" aria-posinset={2} aria-selected="false" aria-setsize={2} cdkmonitorelementfocus className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted" id="mat-tab-label-1-1" mattablabelwrapper role="tab" tabIndex={-1}>
                                                                                <span className="mdc-tab__ripple">
                                                                                </span>
                                                                                <div className="mat-ripple mat-mdc-tab-ripple" mat-ripple>
                                                                                </div>
                                                                                <span className="mdc-tab__content">
                                                                                    <span className="mdc-tab__text-label" style={{ display: "flex" }}>
                                                                                        <button _ngcontent-woo-c220 aria-hidden="true" className="bi bi-activity" data-mat-icon-type="font" style={{ width: "50%", color: "blue", border: "none", background: "transparent" }} >
                                                                                            <span style={{ color: "black", marginLeft: "20px" }}>  Last Activity</span>
                                                                                        </button>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="mdc-tab-indicator">
                                                                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline">
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                           
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button aria-hidden="true" className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled" disabled mat-ripple tabIndex={-1} type="button">
                                                                    <div className="mat-mdc-tab-header-pagination-chevron">
                                                                    </div>
                                                                </button>
                                                            </mat-tab-header>
                                                            <div className="mat-mdc-tab-body-wrapper">
                                                                <mat-tab-body aria-labelledby="mat-tab-label-1-0" className="mat-mdc-tab-body ng-tns-c148-23 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-content-1-0" role="tabpanel">
                                                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c148-23 ng-trigger ng-trigger-translateTab" style={{ transform: 'none' }}>
                                                                       
                                                                        <div _ngcontent-woo-c221 className="col-lg-12 col-md-12 col-sm-12 ng-star-inserted" style={{}}>
                                                                            <div _ngcontent-woo-c221 className="tab-pane active">
                                                                                <div _ngcontent-woo-c221 className="feed-activity-list">
                                                                                    <div _ngcontent-woo-c221 className="feed-element">
                                                                                        <div _ngcontent-woo-c221 className="pull-left">
                                                                                            <img _ngcontent-woo-c221 alt="image" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                                                                        </div>
                                                                                        <div _ngcontent-woo-c221 className="media-body">
                                                                                            <small _ngcontent-woo-c221 className="pull-right">
                                                                                                2h ago
                                                                                            </small>
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Airi Satou
                                                                                            </strong>
                                                                                            posted message on
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Ashton Cox
                                                                                            </strong>
                                                                                            site.
                                                                                            <br _ngcontent-woo-c221 />
                                                                                            <small _ngcontent-woo-c221 className="text-muted">
                                                                                                Today 11:10 pm - 15/04/2021
                                                                                            </small>
                                                                                            <div _ngcontent-woo-c221 className="well">
                                                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div _ngcontent-woo-c221 className="feed-element">
                                                                                        <a _ngcontent-woo-c221 className="pull-left" href="#">
                                                                                            <img _ngcontent-woo-c221 alt="image" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                                                                        </a>
                                                                                        <div _ngcontent-woo-c221 className="media-body">
                                                                                            <small _ngcontent-woo-c221 className="pull-right">
                                                                                                3h ago
                                                                                            </small>
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Cara Stevens
                                                                                            </strong>
                                                                                            add 1 photo on
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Ashton Cox
                                                                                            </strong>
                                                                                            .
                                                                                            <br _ngcontent-woo-c221 />
                                                                                            <small _ngcontent-woo-c221 className="text-muted">
                                                                                                2 days ago at 9:47am
                                                                                            </small>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div _ngcontent-woo-c221 className="feed-element">
                                                                                        <a _ngcontent-woo-c221 className="pull-left" href="#">
                                                                                            <img _ngcontent-woo-c221 alt="image" className="rounded-circle" src="assets/images/user/user8.jpg" />
                                                                                        </a>
                                                                                        <div _ngcontent-woo-c221 className="media-body">
                                                                                            <small _ngcontent-woo-c221 className="pull-right text-navy">
                                                                                                5h ago
                                                                                            </small>
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Angelica Ramos
                                                                                            </strong>
                                                                                            started following
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Ashton Cox
                                                                                            </strong>
                                                                                            .
                                                                                            <br _ngcontent-woo-c221 />
                                                                                            <small _ngcontent-woo-c221 className="text-muted">
                                                                                                Yesterday 2:21 pm - 18/04/2021
                                                                                            </small>
                                                                                            <div _ngcontent-woo-c221 className="actions">
                                                                                                <a _ngcontent-woo-c221 className="btn btn-xs btn-white">
                                                                                                    <i _ngcontent-woo-c221 className="fa fa-thumbs-up col-blue">
                                                                                                    </i>
                                                                                                    Like
                                                                                                </a>
                                                                                                <a _ngcontent-woo-c221 className="btn btn-xs btn-white">
                                                                                                    <i _ngcontent-woo-c221 className="fa fa-heart col-red">
                                                                                                    </i>
                                                                                                    Love
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div _ngcontent-woo-c221 className="feed-element">
                                                                                        <a _ngcontent-woo-c221 className="pull-left" href="#">
                                                                                            <img _ngcontent-woo-c221 alt="image" className="rounded-circle" src="assets/images/user/user5.jpg" />
                                                                                        </a>
                                                                                        <div _ngcontent-woo-c221 className="media-body">
                                                                                            <small _ngcontent-woo-c221 className="pull-right">
                                                                                                2h ago
                                                                                            </small>
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Jens Brincker
                                                                                            </strong>
                                                                                            posted message on
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Angelica Ramos
                                                                                            </strong>
                                                                                            site.
                                                                                            <br _ngcontent-woo-c221 />
                                                                                            <small _ngcontent-woo-c221 className="text-muted">
                                                                                                Yesterday 10:20 pm - 12/06/2021
                                                                                            </small>
                                                                                            <div _ngcontent-woo-c221 className="well">
                                                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div _ngcontent-woo-c221 className="feed-element">
                                                                                        <a _ngcontent-woo-c221 className="pull-left" href="#">
                                                                                            <img _ngcontent-woo-c221 alt="image" className="rounded-circle" src="assets/images/user/user9.jpg" />
                                                                                        </a>
                                                                                        <div _ngcontent-woo-c221 className="media-body">
                                                                                            <small _ngcontent-woo-c221 className="pull-right">
                                                                                                23h ago
                                                                                            </small>
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Sarah Smith
                                                                                            </strong>
                                                                                            love
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Mark Hay
                                                                                            </strong>
                                                                                            .
                                                                                            <br _ngcontent-woo-c221 />
                                                                                            <small _ngcontent-woo-c221 className="text-muted">
                                                                                                2 days ago at 12:30 am - 11/06/2021
                                                                                            </small>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div _ngcontent-woo-c221 className="feed-element">
                                                                                        <a _ngcontent-woo-c221 className="pull-left" href="#">
                                                                                            <img _ngcontent-woo-c221 alt="image" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                                                                        </a>
                                                                                        <div _ngcontent-woo-c221 className="media-body">
                                                                                            <small _ngcontent-woo-c221 className="pull-right">
                                                                                                46h ago
                                                                                            </small>
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Jens Brincker
                                                                                            </strong>
                                                                                            started following
                                                                                            <strong _ngcontent-woo-c221>
                                                                                                Ashton Cox
                                                                                            </strong>
                                                                                            .
                                                                                            <br _ngcontent-woo-c221 />
                                                                                            <small _ngcontent-woo-c221 className="text-muted">
                                                                                                3 days ago at 7:58 pm - 10/02/2021
                                                                                            </small>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                       
                                                                    </div>
                                                                </mat-tab-body>
                                                                <mat-tab-body aria-labelledby="mat-tab-label-1-1" className="mat-mdc-tab-body ng-tns-c148-24 ng-star-inserted" id="mat-tab-content-1-1" role="tabpanel">
                                                                    <div cdkscrollable className="mat-mdc-tab-body-content ng-tns-c148-24 ng-trigger ng-trigger-translateTab" style={{ transform: 'translate3d(100%, 0px, 0px)', minHeight: '1px', visibility: 'hidden' }}>
                                                                       
                                                                    </div>
                                                                </mat-tab-body>
                                                               
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
                </div>


            </div>

        </>
    );
}


