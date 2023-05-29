import React, { useState } from "react";
// import "../mainsection/dashdash.css"
import "../../kuber/madhav/Madhav.css"
import "../kuber.css"
import "./Chat.css"
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
// import a14 from "../img/a14.png";
import a15 from "../img/a15.png";

import a21 from "../img/a21.png";

import a30 from "../img/pc.png"
import a31 from "../img/logout.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    
} from "@fortawesome/free-solid-svg-icons";

export function ChatComponent() {
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
                                <div _ngcontent-sas-c132 class="image">
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
               
                        <div _ngcontent-pgy-c239 className="block-header">
                            <app-breadcrumb _ngcontent-pgy-c239 _nghost-pgy-c225>
                                <div _ngcontent-pgy-c225 className="breadcrumb-main">
                                    <div _ngcontent-pgy-c225 className="row">
                                        <div _ngcontent-pgy-c225 className="col-6">
                                            <div _ngcontent-pgy-c225 className="breadcrumb-title">
                                                <h4 _ngcontent-pgy-c225 className="page-title">
                                                    Chat
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
                                                    Chat
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </app-breadcrumb>
                        </div>
                        <div _ngcontent-pgy-c239 className="row">
                            <div _ngcontent-pgy-c239 className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <div _ngcontent-pgy-c239 className="card">
                                    <div _ngcontent-pgy-c239 className="body">
                                        <div _ngcontent-pgy-c239 className="people-list" id="plist">
                                            <div _ngcontent-pgy-c239 className="form-line m-b-15">
                                                <input _ngcontent-pgy-c239 className="form-control" placeholder="Search..." type="text" />
                                            </div>
                                            <div _ngcontent-pgy-c239 className="tab-content">
                                                <ng-scrollbar _ngcontent-pgy-c239 _nghost-pgy-c129 className="ng-scrollbar" style={{ "height": "590px" }} visibility="hover">
                                                    <div _ngcontent-pgy-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                                                        <div _ngcontent-pgy-c129 className="ng-scroll-viewport-wrapper">
                                                            <div _ngcontent-pgy-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{ "--native-scrollbar-size": "0px" }}>
                                                                <div _ngcontent-pgy-c129 className="ng-scroll-content">
                                                                    <div _ngcontent-pgy-c239 id="chat_user">
                                                                        <ul _ngcontent-pgy-c239 className="chat-list list-unstyled m-b-0">
                                                                            <li _ngcontent-pgy-c239 className="clearfix active">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user1.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        William Smith
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons offline">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        left 7 mins ago
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user2.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        Martha Williams
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons offline">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        online
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user3.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        Joseph Clark
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons online">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        online
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user4.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        Nancy Taylor
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons online">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        online
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user5.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        Margaret Wilson
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons online">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        online
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user6.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        Joseph Jones
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons offline">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        left 30 mins ago
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user7.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        Jane Brown
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons offline">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        left 10 hours ago
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user8.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        Eliza Johnson
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons online">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        online
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user3.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        Mike Clark
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons online">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        online
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user4.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        Ann Henry
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons online">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        online
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user5.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        Nancy Smith
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons online">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        online
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li _ngcontent-pgy-c239 className="clearfix">
                                                                                <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user9.jpg" />
                                                                                <div _ngcontent-pgy-c239 className="about">
                                                                                    <div _ngcontent-pgy-c239 className="name">
                                                                                        David Wilson
                                                                                    </div>
                                                                                    <div _ngcontent-pgy-c239 className="status">
                                                                                        <i _ngcontent-pgy-c239 className="material-icons offline">
                                                                                            fiber_manual_record
                                                                                        </i>
                                                                                        offline since Oct 28
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <scrollbar-y _ngcontent-pgy-c129 _nghost-pgy-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                                                            <div _ngcontent-pgy-c127 className="ng-scrollbar-track" scrollbartracky>
                                                                <div _ngcontent-pgy-c127 className="ng-scrollbar-thumb" scrollbarthumby style={{ "height": "340px", "-webkit-transform": "translate3d(0px, 0px, 0px)", "-ms-transform": "translate3d(0px, 0px, 0px)", "transform": "translate3d(0px, 0px, 0px)" }}>
                                                                </div>
                                                            </div>
                                                        </scrollbar-y>



                                                    </div>
                                                </ng-scrollbar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-pgy-c239 className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                                <div _ngcontent-pgy-c239 className="card">
                                    <div _ngcontent-pgy-c239 className="chat">
                                        <div _ngcontent-pgy-c239 className="chat-header clearfix">
                                            <img _ngcontent-pgy-c239 alt="avatar" src="assets/images/user/user2.jpg" />
                                            <div _ngcontent-pgy-c239 className="chat-about">
                                                <div _ngcontent-pgy-c239 className="chat-with">
                                                    Maria Smith
                                                </div>
                                                <div _ngcontent-pgy-c239 className="chat-num-messages">
                                                    2 new messages
                                                </div>
                                            </div>
                                        </div>
                                        <ng-scrollbar _ngcontent-pgy-c239 _nghost-pgy-c129 className="ng-scrollbar" style={{ "height": "450px" }} visibility="hover">
                                            <div _ngcontent-pgy-c129 appearance="compact" className="ng-scrollbar-wrapper" deactivated="false" dir="ltr" horizontalused="false" ishorizontallyscrollable="false" isverticallyscrollable="true" pointereventsmethod="viewport" position="native" track="vertical" verticalused="true" visibility="hover">
                                                <div _ngcontent-pgy-c129 className="ng-scroll-viewport-wrapper">
                                                    <div _ngcontent-pgy-c129 className="ng-native-scrollbar-hider ng-scroll-viewport" hidenativescrollbar scrollviewport style={{ "--native-scrollbar-size": "0px" }}>
                                                        <div _ngcontent-pgy-c129 className="ng-scroll-content">
                                                            <div _ngcontent-pgy-c239 className="chat-history" id="chat-conversation">
                                                                <ul _ngcontent-pgy-c239>
                                                                    <li _ngcontent-pgy-c239 className="clearfix">
                                                                        <div _ngcontent-pgy-c239 className="message-data text-end">
                                                                            <span _ngcontent-pgy-c239 className="message-data-time">
                                                                                10:10 AM, Today
                                                                            </span>
                                                                            <span _ngcontent-pgy-c239 className="message-data-name">
                                                                                Maria
                                                                            </span>
                                                                        </div>
                                                                        <div _ngcontent-pgy-c239 className="message other-message float-end">
                                                                            Hi Robert , how are you? How is your work going on?
                                                                        </div>
                                                                    </li>
                                                                    <li _ngcontent-pgy-c239>
                                                                        <div _ngcontent-pgy-c239 className="message-data">
                                                                            <span _ngcontent-pgy-c239 className="message-data-name">
                                                                                Robert
                                                                            </span>
                                                                            <span _ngcontent-pgy-c239 className="message-data-time">
                                                                                10:12 AM, Today
                                                                            </span>
                                                                        </div>
                                                                        <div _ngcontent-pgy-c239 className="message my-message">
                                                                            <p _ngcontent-pgy-c239>
                                                                                Its good. We completed almost all task assign by our manager.
                                                                            </p>
                                                                            <div _ngcontent-pgy-c239 className="row">
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li _ngcontent-pgy-c239>
                                                                        <div _ngcontent-pgy-c239 className="message-data">
                                                                            <span _ngcontent-pgy-c239 className="message-data-name">
                                                                                Robert
                                                                            </span>
                                                                            <span _ngcontent-pgy-c239 className="message-data-time">
                                                                                10:12 AM, Today
                                                                            </span>
                                                                        </div>
                                                                        <div _ngcontent-pgy-c239 className="message my-message">
                                                                            <p _ngcontent-pgy-c239>
                                                                                How are you feel today? What's about vacation?.
                                                                            </p>
                                                                            <div _ngcontent-pgy-c239 className="row">
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li _ngcontent-pgy-c239 className="clearfix">
                                                                        <div _ngcontent-pgy-c239 className="message-data text-end">
                                                                            <span _ngcontent-pgy-c239 className="message-data-time">
                                                                                10:10 AM, Today
                                                                            </span>
                                                                            <span _ngcontent-pgy-c239 className="message-data-name">
                                                                                Maria
                                                                            </span>
                                                                        </div>
                                                                        <div _ngcontent-pgy-c239 className="message other-message float-end">
                                                                            I am good, We think for next weekend.
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <scrollbar-y _ngcontent-pgy-c129 _nghost-pgy-c127 className="scrollbar-control ng-star-inserted" fit="false" scrollable="true">
                                                    <div _ngcontent-pgy-c127 className="ng-scrollbar-track" scrollbartracky>
                                                        <div _ngcontent-pgy-c127 className="ng-scrollbar-thumb" scrollbarthumby style={{ "height": "348px", "-webkit-transform": "translate3d(0px, 0px, 0px)", "-ms-transform": "translate3d(0px, 0px, 0px)", "transform": "translate3d(0px, 0px, 0px)" }}>
                                                        </div>
                                                    </div>
                                                </scrollbar-y>



                                            </div>
                                        </ng-scrollbar>
                                        <div _ngcontent-pgy-c239 className="chat-message clearfix" style={{marginTop:"80px"}}>
                                            <div _ngcontent-pgy-c239 className="form-group">
                                                <div _ngcontent-pgy-c239 className="form-line">
                                                    <mat-form-field _ngcontent-pgy-c239 appearance="outline" className="mat-mdc-form-field example-full-width ng-tns-c67-54 mat-mdc-form-field-type-mat-input mat-form-field-appearance-outline mat-primary ng-star-inserted">

                                                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-54 mdc-text-field--outlined mdc-text-field--no-label">

                                                            <div className="mat-mdc-form-field-flex ng-tns-c67-54">
                                                                <div className="mdc-notched-outline ng-tns-c67-54 mdc-notched-outline--no-label ng-star-inserted" matformfieldnotchedoutline>
                                                                    <div className="mdc-notched-outline__leading">
                                                                    </div>
                                                                    <div className="mdc-notched-outline__notch">



                                                                    </div>
                                                                    <div className="mdc-notched-outline__trailing">
                                                                    </div>
                                                                </div>



                                                                <div className="mat-mdc-form-field-infix ng-tns-c67-54">

                                                                    <input _ngcontent-pgy-c239 aria-required="true" className="mat-mdc-input-element ng-tns-c67-54 mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" id="mat-input-9" matinput placeholder="Enter text here.." required />
                                                                </div>


                                                            </div>

                                                        </div>
                                                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-54">

                                                            <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-54 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                                <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-54">
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </mat-form-field>
                                                </div>
                                            </div>
                                            <div _ngcontent-pgy-c239 className="chat-upload">
                                                <button _ngcontent-pgy-c239 className="bg-deep-orange msr-2 mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-accent mat-mdc-button-base" mat-mini-fab>
                                                    <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple">
                                                    </span>
                                                    <i _ngcontent-pgy-c239 className="material-icons">
                                                        attach_file
                                                    </i>
                                                    <span className="mdc-button__label">
                                                    </span>
                                                    <span className="mat-mdc-focus-indicator">
                                                    </span>
                                                    <span className="mat-ripple mat-mdc-button-ripple" matripple>
                                                    </span>
                                                    <span className="mat-mdc-button-touch-target">
                                                    </span>
                                                </button>
                                                <button _ngcontent-pgy-c239 className="bg-deep-orange mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-accent mat-mdc-button-base" mat-mini-fab>
                                                    <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple">
                                                    </span>
                                                    <i _ngcontent-pgy-c239 className="material-icons">
                                                        insert_emoticon
                                                    </i>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
               

        </>
    );
}


