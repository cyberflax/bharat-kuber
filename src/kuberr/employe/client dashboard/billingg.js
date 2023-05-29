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


export function BillingClient() {
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
                                        <Dropdown.Item className="drop-item"><Link to="/ProjectInfo" className='link1'>Project Details</Link ></Dropdown.Item>

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


                <div _ngcontent-woo-c172 className="block-header">
                    <app-breadcrumb _ngcontent-woo-c172 _nghost-woo-c170>
                        <div _ngcontent-woo-c170 className="breadcrumb-main">
                            <div _ngcontent-woo-c170 className="row">
                                <div _ngcontent-woo-c170 className="col-6">
                                    <div _ngcontent-woo-c170 className="breadcrumb-title">
                                        <h4 _ngcontent-woo-c170 className="page-title">
                                            Billing
                                        </h4>
                                    </div>
                                </div>
                                <div _ngcontent-woo-c170 className="col-6">
                                    <ul _ngcontent-woo-c170 className="breadcrumb-list">
                                        <li _ngcontent-woo-c170 className="breadcrumb-item bcrumb-1">
                                            <a _ngcontent-woo-c170 href="#">
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
                                        {/* */}
                                        <li _ngcontent-woo-c170 className="breadcrumb-item active">
                                            Billing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </app-breadcrumb>
                </div>
                <div _ngcontent-woo-c172 className="row clearfix">
                    <div _ngcontent-woo-c172 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div _ngcontent-woo-c172 className="card">
                            <div _ngcontent-woo-c172 className="header">
                                <h2 _ngcontent-woo-c172>
                                    Billing
                                </h2>
                            </div>
                            <div _ngcontent-woo-c172 className="body">
                                <div _ngcontent-woo-c172 className="card-body">
                                    <div _ngcontent-woo-c172 className="responsive_table">
                                        <table _ngcontent-woo-c172 className="table table-hover">
                                            <thead _ngcontent-woo-c172>
                                                <tr _ngcontent-woo-c172>
                                                    <th _ngcontent-woo-c172>
                                                        Invoice No
                                                    </th>
                                                    <th _ngcontent-woo-c172>
                                                        Employee Name
                                                    </th>
                                                    <th _ngcontent-woo-c172>
                                                        Date
                                                    </th>
                                                    <th _ngcontent-woo-c172>
                                                        Amount
                                                    </th>
                                                    <th _ngcontent-woo-c172>
                                                        Tax
                                                    </th>
                                                    <th _ngcontent-woo-c172>
                                                        Discount
                                                    </th>
                                                    <th _ngcontent-woo-c172>
                                                        Total
                                                    </th>
                                                    <th _ngcontent-woo-c172>
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody _ngcontent-woo-c172>
                                                <tr _ngcontent-woo-c172>
                                                    <td _ngcontent-woo-c172>
                                                        #A348
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <a _ngcontent-woo-c172 href="mailto:test@gmail.com">
                                                            Dr.Jacob Ryan
                                                        </a>
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        04/03/2016
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $40
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        10%
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $5
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $39
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <button _ngcontent-woo-c172 className="bi bi-cloud-arrow-down-fill btn-menubill">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-eye-fill btn-menubillone">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-printer-fill btn-menubilltwo" >

                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr _ngcontent-woo-c172>
                                                    <td _ngcontent-woo-c172>
                                                        #A645
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <a _ngcontent-woo-c172 href="mailto:test@gmail.com">
                                                            Dr.Rajesh
                                                        </a>
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        11/04/2016
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $25
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        10%
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $5
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $22
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <button _ngcontent-woo-c172 className="bi bi-cloud-arrow-down-fill btn-menubill">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-eye-fill btn-menubillone">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-printer-fill btn-menubilltwo" >

                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr _ngcontent-woo-c172>
                                                    <td _ngcontent-woo-c172>
                                                        #A873
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <a _ngcontent-woo-c172 href="mailto:test@gmail.com">
                                                            Dr.Jay Soni
                                                        </a>
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        18/04/2016
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $50
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        10%
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $5
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $47
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <button _ngcontent-woo-c172 className="bi bi-cloud-arrow-down-fill btn-menubill">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-eye-fill btn-menubillone">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-printer-fill btn-menubilltwo" >

                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr _ngcontent-woo-c172>
                                                    <td _ngcontent-woo-c172>
                                                        #A927
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <a _ngcontent-woo-c172 href="mailto:test@gmail.com">
                                                            Dr.John Deo
                                                        </a>
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        22/05/2016
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $45
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        10%
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $5
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $42
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <button _ngcontent-woo-c172 className="bi bi-cloud-arrow-down-fill btn-menubill">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-eye-fill btn-menubillone">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-printer-fill btn-menubilltwo" >

                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr _ngcontent-woo-c172>
                                                    <td _ngcontent-woo-c172>
                                                        #A228
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <a _ngcontent-woo-c172 href="mailto:test@gmail.com">
                                                            Dr.Megha Trivedi
                                                        </a>
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        09/07/2016
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $62
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        10%
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $5
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $57
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <button _ngcontent-woo-c172 className="bi bi-cloud-arrow-down-fill btn-menubill">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-eye-fill btn-menubillone">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-printer-fill btn-menubilltwo" >

                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr _ngcontent-woo-c172>
                                                    <td _ngcontent-woo-c172>
                                                        #A345
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <a _ngcontent-woo-c172 href="mailto:test@gmail.com">
                                                            Dr.Sarah Smith
                                                        </a>
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        14/07/2016
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $60
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        10%
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $5
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $56
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <button _ngcontent-woo-c172 className="bi bi-cloud-arrow-down-fill btn-menubill">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-eye-fill btn-menubillone">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-printer-fill btn-menubilltwo" >

                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr _ngcontent-woo-c172>
                                                    <td _ngcontent-woo-c172>
                                                        #A765
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <a _ngcontent-woo-c172 href="mailto:test@gmail.com">
                                                            Dr.Jacob Ryan
                                                        </a>
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        22/06/2016
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $40
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        10%
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $5
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $39
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <button _ngcontent-woo-c172 className="bi bi-cloud-arrow-down-fill btn-menubill">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-eye-fill btn-menubillone">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-printer-fill btn-menubilltwo" >

                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr _ngcontent-woo-c172>
                                                    <td _ngcontent-woo-c172>
                                                        #A125
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <a _ngcontent-woo-c172 href="mailto:test@gmail.com">
                                                            Dr.Rajesh
                                                        </a>
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        23/06/2016
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $30
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        10%
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $5
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        $29
                                                    </td>
                                                    <td _ngcontent-woo-c172>
                                                        <button _ngcontent-woo-c172 className="bi bi-cloud-arrow-down-fill btn-menubill">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-eye-fill btn-menubillone">

                                                        </button>
                                                        <button _ngcontent-woo-c172 className="bi bi-printer-fill btn-menubilltwo" >

                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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


