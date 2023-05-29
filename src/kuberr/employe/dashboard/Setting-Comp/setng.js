import React, { useState } from "react";
import "../../kuber/madhav/Madhav.css"
import "../kuber.css"
import "./Setting.css"
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
import a14 from "../img/a14.png";
import a15 from "../img/a15.png";
import a21 from "../img/a21.png";
import a30 from "../img/pc.png"
import a31 from "../img/logout.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    faCogs,
   
} from "@fortawesome/free-solid-svg-icons";

export function SettingComponent() {
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
                
                        <div _ngcontent-pgy-c230 className="block-header">
                            <app-breadcrumb _ngcontent-pgy-c230 _nghost-pgy-c225>
                                <div _ngcontent-pgy-c225 className="breadcrumb-main">
                                    <div _ngcontent-pgy-c225 className="row">
                                        <div _ngcontent-pgy-c225 className="col-6">
                                            <div _ngcontent-pgy-c225 className="breadcrumb-title">
                                                <h4 _ngcontent-pgy-c225 className="page-title">
                                                    Settings
                                                </h4>
                                            </div>
                                        </div>
                                        <div _ngcontent-pgy-c225 className="col-6">
                                            <ul _ngcontent-pgy-c225 className="breadcrumb-list">
                                                <li _ngcontent-pgy-c225 className="breadcrumb-item bcrumb-1">
                                                    <a _ngcontent-pgy-c225 href="/">
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
                                                    Settings
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </app-breadcrumb>
                        </div>
                        <div _ngcontent-pgy-c230 className="card">
                            <div _ngcontent-pgy-c230 className="header">
                                <h2 _ngcontent-pgy-c230>
                                    <strong _ngcontent-pgy-c230>
                                        Security
                                    </strong>
                            <span className="set"> Settings</span>
                                </h2>
                            </div>
                            <div _ngcontent-pgy-c230 className="body">
                                <div _ngcontent-pgy-c230 className="example-container">
                                    <mat-form-field _ngcontent-pgy-c230 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-45 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">

                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-45 mdc-text-field--outlined">

                                            <div className="mat-mdc-form-field-flex ng-tns-c67-45">
                                                <div className="mdc-notched-outline ng-tns-c67-45 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                                    <div className="mdc-notched-outline__leading">
                                                    </div>
                                                    <div className="mdc-notched-outline__notch">
                                                        <label aria-owns="mat-input-0" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-45 ng-star-inserted" htmlFor="mat-input-0" id="mat-mdc-form-field-label-8" matformfieldfloatinglabel style={{}}>
                                                            <mat-label _ngcontent-pgy-c230 className="ng-tns-c67-45">
                                                                Username
                                                            </mat-label>

                                                        </label>



                                                    </div>
                                                    <div className="mdc-notched-outline__trailing">
                                                    </div>
                                                </div>



                                                <div className="mat-mdc-form-field-infix ng-tns-c67-45">

                                                    <input _ngcontent-pgy-c230 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-45 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-0" matinput />
                                                </div>


                                            </div>

                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-45">

                                            <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-45 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-45">
                                                </div>
                                            </div>

                                        </div>
                                    </mat-form-field>
                                    <mat-form-field _ngcontent-pgy-c230 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-46 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">

                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-46 mdc-text-field--outlined">

                                            <div className="mat-mdc-form-field-flex ng-tns-c67-46">
                                                <div className="mdc-notched-outline ng-tns-c67-46 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                                    <div className="mdc-notched-outline__leading">
                                                    </div>
                                                    <div className="mdc-notched-outline__notch">
                                                        <label aria-owns="mat-input-1" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-46 ng-star-inserted" htmlFor="mat-input-1" id="mat-mdc-form-field-label-10" matformfieldfloatinglabel style={{}}>
                                                            <mat-label _ngcontent-pgy-c230 className="ng-tns-c67-46">
                                                                Current Password
                                                            </mat-label>

                                                        </label>



                                                    </div>
                                                    <div className="mdc-notched-outline__trailing">
                                                    </div>
                                                </div>



                                                <div className="mat-mdc-form-field-infix ng-tns-c67-46">

                                                    <input _ngcontent-pgy-c230 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-46 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-1" matinput type="password" />
                                                </div>


                                            </div>

                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-46">

                                            <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-46 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-46">
                                                </div>
                                            </div>

                                        </div>
                                    </mat-form-field>
                                    <mat-form-field _ngcontent-pgy-c230 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-47 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">

                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-47 mdc-text-field--outlined">

                                            <div className="mat-mdc-form-field-flex ng-tns-c67-47">
                                                <div className="mdc-notched-outline ng-tns-c67-47 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                                    <div className="mdc-notched-outline__leading">
                                                    </div>
                                                    <div className="mdc-notched-outline__notch">
                                                        <label aria-owns="mat-input-2" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-47 ng-star-inserted" htmlFor="mat-input-2" id="mat-mdc-form-field-label-12" matformfieldfloatinglabel style={{}}>
                                                            <mat-label _ngcontent-pgy-c230 className="ng-tns-c67-47">
                                                                New Password
                                                            </mat-label>

                                                        </label>



                                                    </div>
                                                    <div className="mdc-notched-outline__trailing">
                                                    </div>
                                                </div>



                                                <div className="mat-mdc-form-field-infix ng-tns-c67-47">

                                                    <input _ngcontent-pgy-c230 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-47 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-2" matinput type="password" />
                                                </div>


                                            </div>

                                        </div>
                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-47">

                                            <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-47 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-47">
                                                </div>
                                            </div>

                                        </div>
                                    </mat-form-field>
                                </div>
                                <button _ngcontent-pgy-c230 className="mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" mat-raised-button>
                                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                    </span>
                                    <span className="mdc-button__label">
                                        Save
                                    </span>
                                    <span className="mat-mdc-focus-indicator">
                                    </span>
                                    <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                    </span>
                                    <span className="mat-mdc-button-touch-target">
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div _ngcontent-pgy-c230 className="card">
                            <div _ngcontent-pgy-c230 className="header">
                                <h2 _ngcontent-pgy-c230>
                                    <strong _ngcontent-pgy-c230>
                                        Account
                                    </strong>
                                    Settings
                                </h2>
                            </div>
                            <div _ngcontent-pgy-c230 className="body">
                                <div _ngcontent-pgy-c230 className="row clearfix">
                                    <div _ngcontent-pgy-c230 className="col-lg-6 col-md-12">
                                        <div _ngcontent-pgy-c230 className="form-group">
                                            <mat-form-field _ngcontent-pgy-c230 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-48 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">

                                                <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-48 mdc-text-field--outlined">

                                                    <div className="mat-mdc-form-field-flex ng-tns-c67-48">
                                                        <div className="mdc-notched-outline ng-tns-c67-48 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                                            <div className="mdc-notched-outline__leading">
                                                            </div>
                                                            <div className="mdc-notched-outline__notch">
                                                                <label aria-owns="mat-input-3" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-48 ng-star-inserted" htmlFor="mat-input-3" id="mat-mdc-form-field-label-14" matformfieldfloatinglabel style={{}}>
                                                                    <mat-label _ngcontent-pgy-c230 className="ng-tns-c67-48">
                                                                        First Name
                                                                    </mat-label>

                                                                </label>



                                                            </div>
                                                            <div className="mdc-notched-outline__trailing">
                                                            </div>
                                                        </div>



                                                        <div className="mat-mdc-form-field-infix ng-tns-c67-48">

                                                            <input _ngcontent-pgy-c230 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-48 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-3" matinput />
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-48">

                                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-48 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-48">
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-form-field>
                                        </div>
                                    </div>
                                    <div _ngcontent-pgy-c230 className="col-lg-6 col-md-12">
                                        <div _ngcontent-pgy-c230 className="form-group">
                                            <mat-form-field _ngcontent-pgy-c230 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-49 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">

                                                <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-49 mdc-text-field--outlined">

                                                    <div className="mat-mdc-form-field-flex ng-tns-c67-49">
                                                        <div className="mdc-notched-outline ng-tns-c67-49 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                                            <div className="mdc-notched-outline__leading">
                                                            </div>
                                                            <div className="mdc-notched-outline__notch">
                                                                <label aria-owns="mat-input-4" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-49 ng-star-inserted" htmlFor="mat-input-4" id="mat-mdc-form-field-label-16" matformfieldfloatinglabel style={{}}>
                                                                    <mat-label _ngcontent-pgy-c230 className="ng-tns-c67-49">
                                                                        Last Name
                                                                    </mat-label>

                                                                </label>



                                                            </div>
                                                            <div className="mdc-notched-outline__trailing">
                                                            </div>
                                                        </div>



                                                        <div className="mat-mdc-form-field-infix ng-tns-c67-49">

                                                            <input _ngcontent-pgy-c230 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-49 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-4" matinput />
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-49">

                                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-49 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-49">
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-form-field>
                                        </div>
                                    </div>
                                    <div _ngcontent-pgy-c230 className="col-lg-4 col-md-12">
                                        <div _ngcontent-pgy-c230 className="form-group">
                                            <mat-form-field _ngcontent-pgy-c230 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-50 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">

                                                <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-50 mdc-text-field--outlined">

                                                    <div className="mat-mdc-form-field-flex ng-tns-c67-50">
                                                        <div className="mdc-notched-outline ng-tns-c67-50 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                                            <div className="mdc-notched-outline__leading">
                                                            </div>
                                                            <div className="mdc-notched-outline__notch">
                                                                <label aria-owns="mat-input-5" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-50 ng-star-inserted" htmlFor="mat-input-5" id="mat-mdc-form-field-label-18" matformfieldfloatinglabel style={{}}>
                                                                    <mat-label _ngcontent-pgy-c230 className="ng-tns-c67-50">
                                                                        City
                                                                    </mat-label>

                                                                </label>



                                                            </div>
                                                            <div className="mdc-notched-outline__trailing">
                                                            </div>
                                                        </div>



                                                        <div className="mat-mdc-form-field-infix ng-tns-c67-50">

                                                            <input _ngcontent-pgy-c230 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-50 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-5" matinput />
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-50">

                                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-50 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-50">
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-form-field>
                                        </div>
                                    </div>
                                    <div _ngcontent-pgy-c230 className="col-lg-4 col-md-12">
                                        <div _ngcontent-pgy-c230 className="form-group">
                                            <mat-form-field _ngcontent-pgy-c230 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-51 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">

                                                <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-51 mdc-text-field--outlined">

                                                    <div className="mat-mdc-form-field-flex ng-tns-c67-51">
                                                        <div className="mdc-notched-outline ng-tns-c67-51 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                                            <div className="mdc-notched-outline__leading">
                                                            </div>
                                                            <div className="mdc-notched-outline__notch">
                                                                <label aria-owns="mat-input-6" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-51 ng-star-inserted" htmlFor="mat-input-6" id="mat-mdc-form-field-label-20" matformfieldfloatinglabel style={{}}>
                                                                    <mat-label _ngcontent-pgy-c230 className="ng-tns-c67-51">
                                                                        Email
                                                                    </mat-label>

                                                                </label>



                                                            </div>
                                                            <div className="mdc-notched-outline__trailing">
                                                            </div>
                                                        </div>



                                                        <div className="mat-mdc-form-field-infix ng-tns-c67-51">

                                                            <input _ngcontent-pgy-c230 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-51 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-6" matinput />
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-51">

                                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-51 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-51">
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-form-field>
                                        </div>
                                    </div>
                                    <div _ngcontent-pgy-c230 className="col-lg-4 col-md-12">
                                        <div _ngcontent-pgy-c230 className="form-group">
                                            <mat-form-field _ngcontent-pgy-c230 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-52 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">

                                                <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-52 mdc-text-field--outlined">

                                                    <div className="mat-mdc-form-field-flex ng-tns-c67-52">
                                                        <div className="mdc-notched-outline ng-tns-c67-52 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                                            <div className="mdc-notched-outline__leading">
                                                            </div>
                                                            <div className="mdc-notched-outline__notch">
                                                                <label aria-owns="mat-input-7" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-52 ng-star-inserted" htmlFor="mat-input-7" id="mat-mdc-form-field-label-22" matformfieldfloatinglabel style={{}}>
                                                                    <mat-label _ngcontent-pgy-c230 className="ng-tns-c67-52">
                                                                        Country
                                                                    </mat-label>

                                                                </label>



                                                            </div>
                                                            <div className="mdc-notched-outline__trailing">
                                                            </div>
                                                        </div>



                                                        <div className="mat-mdc-form-field-infix ng-tns-c67-52">

                                                            <input _ngcontent-pgy-c230 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-52 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-7" matinput />
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-52">

                                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-52 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-52">
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-form-field>
                                        </div>
                                    </div>
                                    <div _ngcontent-pgy-c230 className="col-md-12">
                                        <div _ngcontent-pgy-c230 className="form-group">
                                            <mat-form-field _ngcontent-pgy-c230 appearance="outline" className="mat-mdc-form-field example-full-width mb-3 ng-tns-c67-53 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-hide-placeholder mat-primary ng-star-inserted">

                                                <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-53 mdc-text-field--outlined">

                                                    <div className="mat-mdc-form-field-flex ng-tns-c67-53">
                                                        <div className="mdc-notched-outline ng-tns-c67-53 mdc-notched-outline--upgraded ng-star-inserted" matformfieldnotchedoutline>
                                                            <div className="mdc-notched-outline__leading">
                                                            </div>
                                                            <div className="mdc-notched-outline__notch">
                                                                <label aria-owns="mat-input-8" className="mdc-floating-label mat-mdc-floating-label ng-tns-c67-53 ng-star-inserted" htmlFor="mat-input-8" id="mat-mdc-form-field-label-24" matformfieldfloatinglabel style={{}}>
                                                                    <mat-label _ngcontent-pgy-c230 className="ng-tns-c67-53">
                                                                        Address
                                                                    </mat-label>

                                                                </label>



                                                            </div>
                                                            <div className="mdc-notched-outline__trailing">
                                                            </div>
                                                        </div>



                                                        <div className="mat-mdc-form-field-infix ng-tns-c67-53">

                                                            <textarea _ngcontent-pgy-c230 aria-invalid="false" aria-required="false" className="mat-mdc-input-element ng-tns-c67-53 mat-mdc-form-field-textarea-control mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-8" matinput defaultValue={""} />
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-53">

                                                    <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-53 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                        <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-53">
                                                        </div>
                                                    </div>

                                                </div>
                                            </mat-form-field>
                                        </div>
                                    </div>
                                    <div _ngcontent-pgy-c230 className="col-md-12">
                                        <button _ngcontent-pgy-c230 className="mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base" color="primary" mat-raised-button>
                                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple">
                                            </span>
                                            <span className="mdc-button__label">
                                                Save Changes
                                            </span>
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
                        </div>
                    
            </div>

        </>
    );
}


