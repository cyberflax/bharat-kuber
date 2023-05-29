import React, { useState } from "react";
// import "../mainsection/dashdash.css"
import "../../kuber/madhav/Madhav.css"
import "../kuber.css"
import "./inbox.css"

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
  
} from "@fortawesome/free-solid-svg-icons";


export function InboxComponent() {
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
                            <img className='img11' src={a31} alt="dash" /><Link to="/logout" className="adash">Logout</Link>
                        </div>



                    </div>
                </div>
            </div>

            <div _ngcontent-hni-c142 className={`  bg2 ${isOpen ? "bg2--open " : ""}`}>

                <div _ngcontent-pgy-c262 className="block-header">
                    <app-breadcrumb _ngcontent-pgy-c262 _nghost-pgy-c225>
                        <div _ngcontent-pgy-c225 className="breadcrumb-main">
                            <div _ngcontent-pgy-c225 className="row">
                                <div _ngcontent-pgy-c225 className="col-6">
                                    <div _ngcontent-pgy-c225 className="breadcrumb-title">
                                        <h4 _ngcontent-pgy-c225 className="page-title">
                                            Inbox
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
                                        <li _ngcontent-pgy-c225 className="breadcrumb-item ng-star-inserted">
                                            Email
                                        </li>

                                        <li _ngcontent-pgy-c225 className="breadcrumb-item active">
                                            Inbox
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </app-breadcrumb>
                </div>
                <div _ngcontent-pgy-c262 className="row">
                    <div _ngcontent-pgy-c262 className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div _ngcontent-pgy-c262 className="card">
                            <div _ngcontent-pgy-c262 className="body">
                                <div _ngcontent-pgy-c262 id="mail-nav">
                                    <button _ngcontent-pgy-c262 className="btn btn-success waves-effect m-b-15" type="button">
                                        COMPOSE
                                    </button>
                                    <ul _ngcontent-pgy-c262 id="mail-folders">
                                        <li _ngcontent-pgy-c262 className="active">
                                            <a _ngcontent-pgy-c262 title="Inbox" href="/#">
                                                Inbox
                                                <span _ngcontent-pgy-c262 className="badge bg-orange">
                                                    6
                                                </span>
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#" title="Sent">
                                                Sent
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#" title="Draft">
                                                Draft
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#" title="Bin">
                                                Bin
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#" title="Important">
                                                Important
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#" title="Starred">
                                                Starred
                                            </a>
                                        </li>
                                    </ul>
                                    <h5 _ngcontent-pgy-c262 className="b-b p-10 text-strong">
                                        Labels
                                    </h5>
                                    <ul _ngcontent-pgy-c262 id="mail-labels">
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#">
                                                <i _ngcontent-pgy-c262 className="material-icons col-red">
                                                    local_offer
                                                </i>
                                                Family
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#">
                                                <i _ngcontent-pgy-c262 className="material-icons col-blue">
                                                    local_offer
                                                </i>
                                                Work
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#">
                                                <i _ngcontent-pgy-c262 className="material-icons col-orange">
                                                    local_offer
                                                </i>
                                                Shop
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#">
                                                <i _ngcontent-pgy-c262 className="material-icons col-cyan">
                                                    local_offer
                                                </i>
                                                Themeforest
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#">
                                                <i _ngcontent-pgy-c262 className="material-icons col-blue">
                                                    local_offer
                                                </i>
                                                Google
                                            </a>
                                        </li>
                                    </ul>
                                    <h5 _ngcontent-pgy-c262 className="b-b p-10 text-strong">
                                        Online
                                    </h5>
                                    <ul _ngcontent-pgy-c262 className="online-user" id="online-offline">
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#">
                                                <i _ngcontent-pgy-c262 className="material-icons col-green" title="Online">
                                                    brightness_1
                                                </i>
                                                Sachin
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#">
                                                <i _ngcontent-pgy-c262 className="material-icons col-indigo" title="Off Line">
                                                    brightness_1
                                                </i>
                                                John Smith
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#">
                                                <i _ngcontent-pgy-c262 className="material-icons col-orange" title="Away">
                                                    brightness_1
                                                </i>
                                                Askay
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#">
                                                <i _ngcontent-pgy-c262 className="material-icons col-indigo" title="Off Line">
                                                    brightness_1
                                                </i>
                                                Dhavan
                                            </a>
                                        </li>
                                        <li _ngcontent-pgy-c262>
                                            <a _ngcontent-pgy-c262 href="/#">
                                                <i _ngcontent-pgy-c262 className="material-icons col-indigo" title="Off Line">
                                                    brightness_1
                                                </i>
                                                Lee
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-pgy-c262 className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <div _ngcontent-pgy-c262 className="card">
                            <div _ngcontent-pgy-c262 className="boxs mail_listing">
                                <div _ngcontent-pgy-c262 className="inbox-center table-responsive">
                                    <table _ngcontent-pgy-c262 className="table table-hover">
                                        <thead _ngcontent-pgy-c262>
                                            <tr _ngcontent-pgy-c262>
                                                <th _ngcontent-pgy-c262 className="text-center">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-48">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-48-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-48-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </th>
                                                <th _ngcontent-pgy-c262 colSpan={3}>
                                                    <div _ngcontent-pgy-c262 className="inbox-header">
                                                        <div _ngcontent-pgy-c262 className="mail-option no-pad-left">
                                                            <div _ngcontent-pgy-c262 className="email-btn-group m-l-15">
                                                                <button _ngcontent-pgy-c262 aria-label="Example icon-button with a heart icon" className="bi bi-arrow-return-left arrow-left" >

                                                                </button>
                                                                <button _ngcontent-pgy-c262 aria-label="Example icon-button with a heart icon" className="bi bi-archive archivebtn">

                                                                </button>
                                                                <button _ngcontent-pgy-c262 aria-label="Example icon-button with a heart icon" className="bi bi-slash-circle archivebtn">

                                                                </button>

                                                                <button _ngcontent-pgy-c262 aria-label="Example icon-button with a heart icon" className="bi bi-trash archivebtn">

                                                                </button>
                                                                <button _ngcontent-pgy-c262 aria-label="Example icon-button with a heart icon" className="bi bi-archive archivebtn">

                                                                </button>
                                                                <button _ngcontent-pgy-c262 aria-label="Example icon-button with a heart icon" className="bi bi-tag archivebtn">

                                                                </button>
                                                               
                                                            </div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th _ngcontent-pgy-c262 className="hidden-xs" colSpan={2}>
                                                    <div _ngcontent-pgy-c262 className="float-end">
                                                        <div _ngcontent-pgy-c262 className="email-btn-group m-l-15">
                                                            <button _ngcontent-pgy-c262 aria-label="Example icon-button with a heart icon" className="bi bi-chevron-left chevron-left ">
                                                               
                                                            </button>
                                                            <button _ngcontent-pgy-c262 aria-label="Example icon-button with a heart icon" className="bi bi-chevron-right chevron-right">
                                                               
                                                            </button>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody _ngcontent-pgy-c262>
                                            <tr _ngcontent-pgy-c262 className="unread">
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-49">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-49-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-49-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Nelson Lane
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-blue shadow-style m-r-10">
                                                            Work
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    12:30 PM
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262 className="unread">
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-50">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-50-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-50-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons text-warning">
                                                        star
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Kerry Mann
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 13
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262 className="unread">
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-51">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-51-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-51-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Adam Peters
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-red shadow-style m-r-10">
                                                            Shopping
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 12
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-52">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-52-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-52-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Lula Reese
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-cyan shadow-style m-r-10">
                                                            Family
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 12
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-53">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-53-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-53-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Nelson Lane
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-orange shadow-style m-r-10">
                                                            Work
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 12
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-54">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-54-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-54-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons text-warning">
                                                        star
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Kerry Mann
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 11
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-55">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-55-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-55-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Adam Peters
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-purple shadow-style m-r-10">
                                                            Office
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 11
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-56">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-56-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-56-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Lula Reese
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-orange shadow-style m-r-10">
                                                            Work
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 11
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-57">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-57-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-57-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Nelson Lane
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-blue shadow-style m-r-10">
                                                            Work
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 10
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-58">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-58-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-58-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons text-warning">
                                                        star
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Kerry Mann
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 10
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-59">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-59-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-59-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Adam Peters
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-green shadow-style m-r-10">
                                                            Shopping
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 10
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-60">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-60-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-60-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Lula Reese
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-red shadow-style m-r-10">
                                                            Work
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 09
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-61">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-61-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-61-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Nelson Lane
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-cyan shadow-style m-r-10">
                                                            Work
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 09
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-62">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-62-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-62-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons text-warning">
                                                        star
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Kerry Mann
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        Lorem ipsum perspiciatis unde omnis iste natus
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 09
                                                </td>
                                            </tr>
                                            <tr _ngcontent-pgy-c262>
                                                <td _ngcontent-pgy-c262 className="tbl-checkbox">
                                                    <mat-checkbox _ngcontent-pgy-c262 className="mat-mdc-checkbox example-margin mat-accent" id="mat-mdc-checkbox-63">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <div className="mat-mdc-checkbox-touch-target">
                                                                </div>
                                                                <input aria-checked="false" className="mdc-checkbox__native-control" id="mat-mdc-checkbox-63-input" tabIndex={0} type="checkbox" />
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
                                                            <label htmlFor="mat-mdc-checkbox-63-input">
                                                            </label>
                                                        </div>
                                                    </mat-checkbox>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        star_border
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    Adam Peters
                                                </td>
                                                <td _ngcontent-pgy-c262 className="max-texts">
                                                    <a _ngcontent-pgy-c262 href="#/email/read-mail" routerlink="/email/read-mail">
                                                        <span _ngcontent-pgy-c262 className="badge col-green shadow-style m-r-10">
                                                            Shopping
                                                        </span>
                                                        Lorem ipsum perspiciatis unde omnis
                                                    </a>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="hidden-xs">
                                                    <i _ngcontent-pgy-c262 className="material-icons">
                                                        attach_file
                                                    </i>
                                                </td>
                                                <td _ngcontent-pgy-c262 className="text-end">
                                                    May 09
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div _ngcontent-pgy-c262 className="row">
                                    <div _ngcontent-pgy-c262 className="col-sm-7">
                                        <p _ngcontent-pgy-c262 className="p-15">
                                            Showing 1 - 15 of 200
                                        </p>
                                    </div>
                                    <div _ngcontent-pgy-c262 className="col-sm-5 text-end">
                                        <div _ngcontent-pgy-c262 className="float-end">
                                            <div _ngcontent-pgy-c262 className="email-btn-group m-l-15">
                                                <button _ngcontent-pgy-c262 aria-label="Example icon-button with a heart icon" className="bi bi-chevron-left chevron-left ">

                                                </button>
                                                <button _ngcontent-pgy-c262 aria-label="Example icon-button with a heart icon" className="bi bi-chevron-right chevron-right">

                                                </button>
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


