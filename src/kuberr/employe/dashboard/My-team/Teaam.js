import React, { useState } from "react";
// import "../mainsection/dashdash.css"
import "../../kuber/madhav/Madhav.css"
import "./Team.css"
import "../kuber.css"
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


export function TeamComponent() {
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
                                            <span className="instant">Cyber Instant</span>
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
                        <div _ngcontent-pgy-c229 className="block-header">
                            <app-breadcrumb _ngcontent-pgy-c229 _nghost-pgy-c225>
                                <div _ngcontent-pgy-c225 className="breadcrumb-main">
                                    <div _ngcontent-pgy-c225 className="row">
                                        <div _ngcontent-pgy-c225 className="col-6">
                                            <div _ngcontent-pgy-c225 className="breadcrumb-title">
                                                <h4 _ngcontent-pgy-c225 className="page-title">
                                                    My Team
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
                                                    My Team
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </app-breadcrumb>
                        </div>
                        <div _ngcontent-pgy-c229 className="row clearfix">
                            <div _ngcontent-pgy-c229 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div _ngcontent-pgy-c229 className="card">
                                    <div _ngcontent-pgy-c229 className="body">
                                        <div _ngcontent-pgy-c229 className="row">
                                            <div _ngcontent-pgy-c229 className="col-12">
                                                <div _ngcontent-pgy-c229 className="card p-3">
                                                    <div _ngcontent-pgy-c229 className="row">
                                                        <div _ngcontent-pgy-c229 className="col-12 col-md-2 mb-0">
                                                            <img _ngcontent-pgy-c229 className="img-circle doc-card-image" alt="user1" src="assets/images/user/usrbig1.jpg" style={{ "width": "150px" }} />
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="col-md-6 border-right mb-0">
                                                            <div _ngcontent-pgy-c229 className="doc-card-title">
                                                                <h4 _ngcontent-pgy-c229>
                                                                    Sarah Smith
                                                                </h4>
                                                            </div>
                                                            <p _ngcontent-pgy-c229>
                                                                B.E.
                                                            </p>
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center">
                                                                <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center ratings">
                                                                    <span _ngcontent-pgy-c229 className="msr-1 rating-number">
                                                                        4
                                                                    </span>
                                                                    <div _ngcontent-pgy-c229 className="stars">
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="far fa-star col-orange">
                                                                        </i>
                                                                    </div>
                                                                    <span _ngcontent-pgy-c229 className="msr-2">
                                                                        (12342 ratings)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div _ngcontent-pgy-c229 className="description">
                                                                <p _ngcontent-pgy-c229>
                                                                    <strong _ngcontent-pgy-c229>
                                                                        Lorem Ipsum
                                                                    </strong>
                                                                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
                                                                    <br _ngcontent-pgy-c229 />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="d-flex col-md-4 mb-0">
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-column justify-content-start user-profile w-100">
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-map-marker-alt pt-3 psr-3">
                                                                    </i>
                                                                    Shanti Nagar Bldg No B 4, Sector No 6, Mira Road
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fab fa-twitter pt-3 psr-3">
                                                                    </i>
                                                                    sarah_smith
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-mobile-alt pt-3 psr-3">
                                                                    </i>
                                                                    123456789
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="far fa-envelope pt-3 psr-3">
                                                                    </i>
                                                                    sarah@example.com
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div _ngcontent-pgy-c229 className="row">
                                            <div _ngcontent-pgy-c229 className="col-12">
                                                <div _ngcontent-pgy-c229 className="card p-3">
                                                    <div _ngcontent-pgy-c229 className="row">
                                                        <div _ngcontent-pgy-c229 className="col-12 col-md-2 mb-0">
                                                            <img _ngcontent-pgy-c229 className="img-circle doc-card-image" alt="user2" src="assets/images/user/usrbig2.jpg" style={{ "width": "150px" }} />
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="col-md-6 border-right mb-0">
                                                            <div _ngcontent-pgy-c229 className="doc-card-title">
                                                                <h4 _ngcontent-pgy-c229>
                                                                    Jay Soni
                                                                </h4>
                                                            </div>
                                                            <p _ngcontent-pgy-c229>
                                                                Computer Science
                                                            </p>
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center">
                                                                <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center ratings">
                                                                    <span _ngcontent-pgy-c229 className="msr-1 rating-number">
                                                                        3
                                                                    </span>
                                                                    <div _ngcontent-pgy-c229 className="stars">
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="far fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="far fa-star col-orange">
                                                                        </i>
                                                                    </div>
                                                                    <span _ngcontent-pgy-c229 className="msr-2">
                                                                        (6545 ratings)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div _ngcontent-pgy-c229 className="description">
                                                                <p _ngcontent-pgy-c229>
                                                                    <strong _ngcontent-pgy-c229>
                                                                        Lorem Ipsum
                                                                    </strong>
                                                                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
                                                                    <br _ngcontent-pgy-c229 />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="d-flex col-md-4 mb-0">
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-column justify-content-start user-profile w-100">
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-map-marker-alt pt-3 psr-3">
                                                                    </i>
                                                                    Shanti Nagar Bldg No B 4, Sector No 6, Mira Road
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fab fa-twitter pt-3 psr-3">
                                                                    </i>
                                                                    jay_soni
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-mobile-alt pt-3 psr-3">
                                                                    </i>
                                                                    123456789
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="far fa-envelope pt-3 psr-3">
                                                                    </i>
                                                                    jay@example.com
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div _ngcontent-pgy-c229 className="row">
                                            <div _ngcontent-pgy-c229 className="col-12">
                                                <div _ngcontent-pgy-c229 className="card p-3">
                                                    <div _ngcontent-pgy-c229 className="row">
                                                        <div _ngcontent-pgy-c229 className="col-12 col-md-2 mb-0">
                                                            <img _ngcontent-pgy-c229 className="img-circle doc-card-image" alt="user3" src="assets/images/user/usrbig1.jpg" style={{ "width": "150px" }} />
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="col-md-6 border-right mb-0">
                                                            <div _ngcontent-pgy-c229 className="doc-card-title">
                                                                <h4 _ngcontent-pgy-c229>
                                                                    Megha Trivedi
                                                                </h4>
                                                            </div>
                                                            <p _ngcontent-pgy-c229>
                                                                M.C.A.
                                                            </p>
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center">
                                                                <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center ratings">
                                                                    <span _ngcontent-pgy-c229 className="msr-1 rating-number">
                                                                        4
                                                                    </span>
                                                                    <div _ngcontent-pgy-c229 className="stars">
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="far fa-star col-orange">
                                                                        </i>
                                                                    </div>
                                                                    <span _ngcontent-pgy-c229 className="msr-2">
                                                                        (3456 ratings)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div _ngcontent-pgy-c229 className="description">
                                                                <p _ngcontent-pgy-c229>
                                                                    <strong _ngcontent-pgy-c229>
                                                                        Lorem Ipsum
                                                                    </strong>
                                                                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
                                                                    <br _ngcontent-pgy-c229 />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="d-flex col-md-4 mb-0">
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-column justify-content-start user-profile w-100">
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-map-marker-alt pt-3 psr-3">
                                                                    </i>
                                                                    Shanti Nagar Bldg No B 4, Sector No 6, Mira Road
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fab fa-twitter pt-3 psr-3">
                                                                    </i>
                                                                    megha_trivedi
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-mobile-alt pt-3 psr-3">
                                                                    </i>
                                                                    123456789
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="far fa-envelope pt-3 psr-3">
                                                                    </i>
                                                                    megha@example.com
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div _ngcontent-pgy-c229 className="row">
                                            <div _ngcontent-pgy-c229 className="col-12">
                                                <div _ngcontent-pgy-c229 className="card p-3">
                                                    <div _ngcontent-pgy-c229 className="row">
                                                        <div _ngcontent-pgy-c229 className="col-12 col-md-2 mb-0">
                                                            <img _ngcontent-pgy-c229 className="img-circle doc-card-image" alt="user4" src="assets/images/user/usrbig4.jpg" style={{ "width": "150px" }} />
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="col-md-6 border-right mb-0">
                                                            <div _ngcontent-pgy-c229 className="doc-card-title">
                                                                <h4 _ngcontent-pgy-c229>
                                                                    Jacob Ryan
                                                                </h4>
                                                            </div>
                                                            <p _ngcontent-pgy-c229>
                                                                B.E., M.E.
                                                            </p>
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center">
                                                                <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center ratings">
                                                                    <span _ngcontent-pgy-c229 className="msr-1 rating-number">
                                                                        5
                                                                    </span>
                                                                    <div _ngcontent-pgy-c229 className="stars">
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                    </div>
                                                                    <span _ngcontent-pgy-c229 className="msr-2">
                                                                        (3987 ratings)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div _ngcontent-pgy-c229 className="description">
                                                                <p _ngcontent-pgy-c229>
                                                                    <strong _ngcontent-pgy-c229>
                                                                        Lorem Ipsum
                                                                    </strong>
                                                                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
                                                                    <br _ngcontent-pgy-c229 />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="d-flex col-md-4 mb-0">
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-column justify-content-start user-profile w-100">
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-map-marker-alt pt-3 psr-3">
                                                                    </i>
                                                                    Shanti Nagar Bldg No B 4, Sector No 6, Mira Road
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fab fa-twitter pt-3 psr-3">
                                                                    </i>
                                                                    jacob_ryan
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-mobile-alt pt-3 psr-3">
                                                                    </i>
                                                                    123456789
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="far fa-envelope pt-3 psr-3">
                                                                    </i>
                                                                    jacob@example.com
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div _ngcontent-pgy-c229 className="row">
                                            <div _ngcontent-pgy-c229 className="col-12">
                                                <div _ngcontent-pgy-c229 className="card p-3">
                                                    <div _ngcontent-pgy-c229 className="row">
                                                        <div _ngcontent-pgy-c229 className="col-12 col-md-2 mb-0">
                                                            <img _ngcontent-pgy-c229 className="img-circle doc-card-image" alt="user5" src="assets/images/user/usrbig6.jpg" style={{ "width": "150px" }} />
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="col-md-6 border-right mb-0">
                                                            <div _ngcontent-pgy-c229 className="doc-card-title">
                                                                <h4 _ngcontent-pgy-c229>
                                                                    Ashton Cox
                                                                </h4>
                                                            </div>
                                                            <p _ngcontent-pgy-c229>
                                                                B.C.A., M.C.A.
                                                            </p>
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center">
                                                                <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center ratings">
                                                                    <span _ngcontent-pgy-c229 className="msr-1 rating-number">
                                                                        3
                                                                    </span>
                                                                    <div _ngcontent-pgy-c229 className="stars">
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="far fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="far fa-star col-orange">
                                                                        </i>
                                                                    </div>
                                                                    <span _ngcontent-pgy-c229 className="msr-2">
                                                                        (34 ratings)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div _ngcontent-pgy-c229 className="description">
                                                                <p _ngcontent-pgy-c229>
                                                                    <strong _ngcontent-pgy-c229>
                                                                        Lorem Ipsum
                                                                    </strong>
                                                                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
                                                                    <br _ngcontent-pgy-c229 />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="d-flex col-md-4 mb-0">
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-column justify-content-start user-profile w-100">
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-map-marker-alt pt-3 psr-3">
                                                                    </i>
                                                                    Shanti Nagar Bldg No B 4, Sector No 6, Mira Road
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fab fa-twitter pt-3 psr-3">
                                                                    </i>
                                                                    ashton_cox
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-mobile-alt pt-3 psr-3">
                                                                    </i>
                                                                    123456789
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="far fa-envelope pt-3 psr-3">
                                                                    </i>
                                                                    ashton@example.com
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div _ngcontent-pgy-c229 className="row">
                                            <div _ngcontent-pgy-c229 className="col-12">
                                                <div _ngcontent-pgy-c229 className="card p-3">
                                                    <div _ngcontent-pgy-c229 className="row">
                                                        <div _ngcontent-pgy-c229 className="col-12 col-md-2 mb-0">
                                                            <img _ngcontent-pgy-c229 className="img-circle doc-card-image" alt="user6" src="assets/images/user/usrbig5.jpg" style={{ "width": "150px" }} />
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="col-md-6 border-right mb-0">
                                                            <div _ngcontent-pgy-c229 className="doc-card-title">
                                                                <h4 _ngcontent-pgy-c229>
                                                                    Angelica Ramos
                                                                </h4>
                                                            </div>
                                                            <p _ngcontent-pgy-c229>
                                                                M. Tech
                                                            </p>
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center">
                                                                <div _ngcontent-pgy-c229 className="d-flex flex-row align-items-center ratings">
                                                                    <span _ngcontent-pgy-c229 className="msr-1 rating-number">
                                                                        5
                                                                    </span>
                                                                    <div _ngcontent-pgy-c229 className="stars">
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                        <i _ngcontent-pgy-c229 className="fas fa-star col-orange">
                                                                        </i>
                                                                    </div>
                                                                    <span _ngcontent-pgy-c229 className="msr-2">
                                                                        (765 ratings)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div _ngcontent-pgy-c229 className="description">
                                                                <p _ngcontent-pgy-c229>
                                                                    <strong _ngcontent-pgy-c229>
                                                                        Lorem Ipsum
                                                                    </strong>
                                                                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
                                                                    <br _ngcontent-pgy-c229 />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div _ngcontent-pgy-c229 className="d-flex col-md-4 mb-0">
                                                            <div _ngcontent-pgy-c229 className="d-flex flex-column justify-content-start user-profile w-100">
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-map-marker-alt pt-3 psr-3">
                                                                    </i>
                                                                    Shanti Nagar Bldg No B 4, Sector No 6, Mira Road
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fab fa-twitter pt-3 psr-3">
                                                                    </i>
                                                                    angelica_ramos
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="fas fa-mobile-alt pt-3 psr-3">
                                                                    </i>
                                                                    123456789
                                                                </div>
                                                                <div _ngcontent-pgy-c229>
                                                                    <i _ngcontent-pgy-c229 className="far fa-envelope pt-3 psr-3">
                                                                    </i>
                                                                    angelica@example.com
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
                    </div>
                
            

        </>
    );
}


