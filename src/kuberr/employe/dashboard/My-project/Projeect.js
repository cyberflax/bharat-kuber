import React, { useState } from "react";
import "../kuber.css"
// import "../mainsection/dashdash.css"
import "../../kuber/madhav/Madhav.css"
import "./Project.css"
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


export function ProjectComponent() {
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
               
                        <div _ngcontent-pgy-c235 className="block-header">
                            <app-breadcrumb _ngcontent-pgy-c235 _nghost-pgy-c225>
                                <div _ngcontent-pgy-c225 className="breadcrumb-main">
                                    <div _ngcontent-pgy-c225 className="row">
                                        <div _ngcontent-pgy-c225 className="col-6">
                                            <div _ngcontent-pgy-c225 className="breadcrumb-title">
                                                <h4 _ngcontent-pgy-c225 className="page-title">
                                                    My Projects
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
                                                    My Projects
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </app-breadcrumb>
                        </div>
                        <div _ngcontent-pgy-c235 className="row">
                            <div _ngcontent-pgy-c235 className="col-md-12">
                                <div _ngcontent-pgy-c235 className="tabbable-line">
                                    <div _ngcontent-pgy-c235 className="row">
                                        <div _ngcontent-pgy-c235 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div _ngcontent-pgy-c235 className="card" style={{overflow:"hidden"}}>
                                                <div _ngcontent-pgy-c235 className="body">
                                                    <div _ngcontent-pgy-c235 className="responsive_table">
                                                        <div _ngcontent-pgy-c235 className="materialTableHeader">
                                                            <div _ngcontent-pgy-c235 className="row">
                                                                <div _ngcontent-pgy-c235 className="col-8">
                                                                    <ul _ngcontent-pgy-c235 className="header-buttons-left ms-0">
                                                                        <li _ngcontent-pgy-c235 className="tbl-title">
                                                                            <h2 _ngcontent-pgy-c235>
                                                                                My Projects
                                                                            </h2>
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="tbl-search-box">
                                                                            <label _ngcontent-pgy-c235 htmlFor="search-input">
                                                                                <i _ngcontent-pgy-c235 className="material-icons search-icon">
                                                                                    search
                                                                                </i>
                                                                            </label>
                                                                            <input _ngcontent-pgy-c235 aria-label="Search box" className="browser-default search-field" placeholder="Search" type="text" />
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <mat-table _ngcontent-pgy-c235 className="mat-mdc-table mdc-data-table__table cdk-table mat-sort mat-cell" matsort role="table">
                                                            <mat-header-row _ngcontent-pgy-c235 className="mat-mdc-header-row mdc-data-table__header-row cdk-header-row ng-star-inserted" role="row">
                                                                <mat-header-cell _ngcontent-pgy-c235 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-22 cdk-column-id mat-column-id ng-star-inserted" mat-sort-header role="columnheader">
                                                                    <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-22" role="button" tabIndex={0}>
                                                                        <div className="mat-sort-header-content ng-tns-c160-22">
                                                                            ID
                                                                        </div>
                                                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-22 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                            <div className="mat-sort-header-stem ng-tns-c160-22">
                                                                            </div>
                                                                            <div className="mat-sort-header-indicator ng-tns-c160-22 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                                <div className="mat-sort-header-pointer-left ng-tns-c160-22 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-right ng-tns-c160-22 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-middle ng-tns-c160-22">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </mat-header-cell>
                                                                <mat-header-cell _ngcontent-pgy-c235 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-23 cdk-column-title mat-column-title ng-star-inserted" mat-sort-header role="columnheader">
                                                                    <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-23" role="button" tabIndex={0}>
                                                                        <div className="mat-sort-header-content ng-tns-c160-23">
                                                                            Project Title
                                                                        </div>
                                                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-23 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                            <div className="mat-sort-header-stem ng-tns-c160-23">
                                                                            </div>
                                                                            <div className="mat-sort-header-indicator ng-tns-c160-23 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                                <div className="mat-sort-header-pointer-left ng-tns-c160-23 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-right ng-tns-c160-23 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-middle ng-tns-c160-23">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </mat-header-cell>
                                                                <mat-header-cell _ngcontent-pgy-c235 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-24 cdk-column-clientName mat-column-clientName ng-star-inserted" mat-sort-header role="columnheader">
                                                                    <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-24" role="button" tabIndex={0}>
                                                                        <div className="mat-sort-header-content ng-tns-c160-24">
                                                                            Client Name
                                                                        </div>
                                                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-24 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                            <div className="mat-sort-header-stem ng-tns-c160-24">
                                                                            </div>
                                                                            <div className="mat-sort-header-indicator ng-tns-c160-24 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                                <div className="mat-sort-header-pointer-left ng-tns-c160-24 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-right ng-tns-c160-24 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-middle ng-tns-c160-24">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </mat-header-cell>
                                                                <mat-header-cell _ngcontent-pgy-c235 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-25 cdk-column-startDate mat-column-startDate ng-star-inserted" mat-sort-header role="columnheader">
                                                                    <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-25" role="button" tabIndex={0}>
                                                                        <div className="mat-sort-header-content ng-tns-c160-25">
                                                                            Start Date
                                                                        </div>
                                                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-25 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                            <div className="mat-sort-header-stem ng-tns-c160-25">
                                                                            </div>
                                                                            <div className="mat-sort-header-indicator ng-tns-c160-25 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                                <div className="mat-sort-header-pointer-left ng-tns-c160-25 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-right ng-tns-c160-25 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-middle ng-tns-c160-25">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </mat-header-cell>
                                                                <mat-header-cell _ngcontent-pgy-c235 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-26 cdk-column-endDate mat-column-endDate ng-star-inserted" mat-sort-header role="columnheader">
                                                                    <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-26" role="button" tabIndex={0}>
                                                                        <div className="mat-sort-header-content ng-tns-c160-26">
                                                                            End Date
                                                                        </div>
                                                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-26 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                            <div className="mat-sort-header-stem ng-tns-c160-26">
                                                                            </div>
                                                                            <div className="mat-sort-header-indicator ng-tns-c160-26 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                                <div className="mat-sort-header-pointer-left ng-tns-c160-26 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-right ng-tns-c160-26 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-middle ng-tns-c160-26">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </mat-header-cell>
                                                                <mat-header-cell _ngcontent-pgy-c235 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-27 cdk-column-deadLine mat-column-deadLine ng-star-inserted" mat-sort-header role="columnheader">
                                                                    <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-27" role="button" tabIndex={0}>
                                                                        <div className="mat-sort-header-content ng-tns-c160-27">
                                                                            DeadLine
                                                                        </div>
                                                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-27 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                            <div className="mat-sort-header-stem ng-tns-c160-27">
                                                                            </div>
                                                                            <div className="mat-sort-header-indicator ng-tns-c160-27 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                                <div className="mat-sort-header-pointer-left ng-tns-c160-27 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-right ng-tns-c160-27 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-middle ng-tns-c160-27">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </mat-header-cell>
                                                                <mat-header-cell _ngcontent-pgy-c235 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-28 cdk-column-noOfMembers mat-column-noOfMembers ng-star-inserted" mat-sort-header role="columnheader">
                                                                    <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-28" role="button" tabIndex={0}>
                                                                        <div className="mat-sort-header-content ng-tns-c160-28">
                                                                            Members
                                                                        </div>
                                                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-28 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                            <div className="mat-sort-header-stem ng-tns-c160-28">
                                                                            </div>
                                                                            <div className="mat-sort-header-indicator ng-tns-c160-28 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                                <div className="mat-sort-header-pointer-left ng-tns-c160-28 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-right ng-tns-c160-28 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-middle ng-tns-c160-28">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </mat-header-cell>
                                                                <mat-header-cell _ngcontent-pgy-c235 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-29 cdk-column-priority mat-column-priority ng-star-inserted" mat-sort-header role="columnheader">
                                                                    <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-29" role="button" tabIndex={0}>
                                                                        <div className="mat-sort-header-content ng-tns-c160-29">
                                                                            Priority
                                                                        </div>
                                                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-29 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                            <div className="mat-sort-header-stem ng-tns-c160-29">
                                                                            </div>
                                                                            <div className="mat-sort-header-indicator ng-tns-c160-29 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                                <div className="mat-sort-header-pointer-left ng-tns-c160-29 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-right ng-tns-c160-29 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-middle ng-tns-c160-29">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </mat-header-cell>
                                                                <mat-header-cell _ngcontent-pgy-c235 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-30 cdk-column-progress mat-column-progress ng-star-inserted" mat-sort-header role="columnheader">
                                                                    <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-30" role="button" tabIndex={0}>
                                                                        <div className="mat-sort-header-content ng-tns-c160-30">
                                                                            Progress
                                                                        </div>
                                                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-30 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                            <div className="mat-sort-header-stem ng-tns-c160-30">
                                                                            </div>
                                                                            <div className="mat-sort-header-indicator ng-tns-c160-30 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                                <div className="mat-sort-header-pointer-left ng-tns-c160-30 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-right ng-tns-c160-30 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-middle ng-tns-c160-30">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </mat-header-cell>
                                                                <mat-header-cell _ngcontent-pgy-c235 aria-sort="none" className="mat-sort-header mat-mdc-header-cell mdc-data-table__header-cell cdk-header-cell ng-tns-c160-31 cdk-column-status mat-column-status ng-star-inserted" mat-sort-header role="columnheader">
                                                                    <div aria-describedby="cdk-describedby-message-pgy-1-6" cdk-describedby-host="pgy-1" className="mat-sort-header-container mat-focus-indicator ng-tns-c160-31" role="button" tabIndex={0}>
                                                                        <div className="mat-sort-header-content ng-tns-c160-31">
                                                                            Status
                                                                        </div>
                                                                        <div className="mat-sort-header-arrow ng-trigger ng-trigger-arrowPosition ng-tns-c160-31 ng-star-inserted" style={{ "-webkit-transform": "translateY(25%)", "-ms-transform": "translateY(25%)", "transform": "translateY(25%)", "opacity": "0" }}>
                                                                            <div className="mat-sort-header-stem ng-tns-c160-31">
                                                                            </div>
                                                                            <div className="mat-sort-header-indicator ng-tns-c160-31 ng-trigger ng-trigger-indicator" style={{ "-webkit-transform": "translateY(0px)", "-ms-transform": "translateY(0px)", "transform": "translateY(0px)" }}>
                                                                                <div className="mat-sort-header-pointer-left ng-tns-c160-31 ng-trigger ng-trigger-leftPointer" style={{ "-webkit-transform": "rotate(-45deg)", "-ms-transform": "rotate(-45deg)", "transform": "rotate(-45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-right ng-tns-c160-31 ng-trigger ng-trigger-rightPointer" style={{ "-webkit-transform": "rotate(45deg)", "-ms-transform": "rotate(45deg)", "transform": "rotate(45deg)" }}>
                                                                                </div>
                                                                                <div className="mat-sort-header-pointer-middle ng-tns-c160-31">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </mat-header-cell>

                                                            </mat-header-row>

                                                            <mat-row _ngcontent-pgy-c235 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-id mat-column-id ng-star-inserted" role="cell">
                                                                    258
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-title mat-column-title ng-star-inserted" role="cell">
                                                                    Android Application
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-clientName mat-column-clientName ng-star-inserted" role="cell">
                                                                    Cara Stevens
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-startDate mat-column-startDate ng-star-inserted" role="cell">
                                                                    05/10/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-endDate mat-column-endDate ng-star-inserted" role="cell">
                                                                    07/25/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-deadLine mat-column-deadLine ng-star-inserted" role="cell">
                                                                    08/25/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-noOfMembers mat-column-noOfMembers ng-star-inserted" mat-cell role="cell">
                                                                    <ul _ngcontent-pgy-c235 className="list-unstyled order-list mb-0">
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                                                        </li>
                                                                    </ul>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">
                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-solid-red pro-state" >
                                                                            High
                                                                        </span>
                                                                    </div>



                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-progress mat-column-progress ng-star-inserted" mat-cell role="cell">
                                                                    <mat-progress-bar _ngcontent-pgy-c235 aria-valuemax={100} aria-valuemin={0} aria-valuenow={78} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" style={{ width: "20%" }} tabIndex={-1}>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                                            <div className="mdc-linear-progress__buffer-bar" style={{ "-webkit-flex-basis": "100%", "-ms-flex-basis": "100%", "flex-basis": "5%" }}>
                                                                            </div>
                                                                            <div className="mdc-linear-progress__buffer-dots">
                                                                            </div>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ width: "5%", "-webkit-transform": "scaleX(0.78)", "-ms-transform": "scaleX(0.78)", "transform": "scaleX(0.78)" }}>
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                    </mat-progress-bar>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-pill  col-green pro-state" >
                                                                            Active
                                                                        </span>
                                                                    </div>



                                                                </mat-cell>

                                                            </mat-row>
                                                            <mat-row _ngcontent-pgy-c235 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-id mat-column-id ng-star-inserted" role="cell">
                                                                    578
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-title mat-column-title ng-star-inserted" role="cell">
                                                                    PHP website
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-clientName mat-column-clientName ng-star-inserted" role="cell">
                                                                    Sarah Smith
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-startDate mat-column-startDate ng-star-inserted" role="cell">
                                                                    02/22/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-endDate mat-column-endDate ng-star-inserted" role="cell">
                                                                    04/12/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-deadLine mat-column-deadLine ng-star-inserted" role="cell">
                                                                    05/10/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-noOfMembers mat-column-noOfMembers ng-star-inserted" mat-cell role="cell">
                                                                    <ul _ngcontent-pgy-c235 className="list-unstyled order-list mb-0">
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                                                        </li>
                                                                    </ul>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">


                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-solid-green pro-state" >
                                                                            Low
                                                                        </span>
                                                                    </div>

                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-progress mat-column-progress ng-star-inserted" mat-cell role="cell">
                                                                    <mat-progress-bar _ngcontent-pgy-c235 aria-valuemax={100} aria-valuemin={0} aria-valuenow={67} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" style={{ "width": "80%" }} tabIndex={-1}>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                                            <div className="mdc-linear-progress__buffer-bar" style={{ "-webkit-flex-basis": "100%", "-ms-flex-basis": "100%", "flex-basis": "5%" }}>
                                                                            </div>
                                                                            <div className="mdc-linear-progress__buffer-dots">
                                                                            </div>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ width: "5%",height:"5px", "-webkit-transform": "scaleX(0.67)", "-ms-transform": "scaleX(0.67)", "transform": "scaleX(0.67)" }}>
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                    </mat-progress-bar>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">


                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-pill  col-red pro-state" >
                                                                            Deactive
                                                                        </span>
                                                                    </div>

                                                                </mat-cell>

                                                            </mat-row>
                                                            <mat-row _ngcontent-pgy-c235 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-id mat-column-id ng-star-inserted" role="cell">
                                                                    267
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-title mat-column-title ng-star-inserted" role="cell">
                                                                    Logo Design
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-clientName mat-column-clientName ng-star-inserted" role="cell">
                                                                    John Deo
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-startDate mat-column-startDate ng-star-inserted" role="cell">
                                                                    01/05/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-endDate mat-column-endDate ng-star-inserted" role="cell">
                                                                    03/15/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-deadLine mat-column-deadLine ng-star-inserted" role="cell">
                                                                    04/24/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-noOfMembers mat-column-noOfMembers ng-star-inserted" mat-cell role="cell">
                                                                    <ul _ngcontent-pgy-c235 className="list-unstyled order-list mb-0">
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                                                        </li>
                                                                    </ul>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">
                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-solid-red pro-state" >
                                                                            High
                                                                        </span>
                                                                    </div>



                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-progress mat-column-progress ng-star-inserted" mat-cell role="cell">
                                                                    <mat-progress-bar _ngcontent-pgy-c235 aria-valuemax={100} aria-valuemin={0} aria-valuenow={80} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" style={{ "width": "80%" }} tabIndex={-1}>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                                            <div className="mdc-linear-progress__buffer-bar" style={{ "-webkit-flex-basis": "100%", "-ms-flex-basis": "100%", "flex-basis": "5%" }}>
                                                                            </div>
                                                                            <div className="mdc-linear-progress__buffer-dots">
                                                                            </div>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ width: "5%", "-webkit-transform": "scaleX(0.8)", "-ms-transform": "scaleX(0.8)", "transform": "scaleX(0.8)" }}>
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                    </mat-progress-bar>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-pill  col-green pro-state" >
                                                                            Active
                                                                        </span>
                                                                    </div>



                                                                </mat-cell>

                                                            </mat-row>
                                                            <mat-row _ngcontent-pgy-c235 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-id mat-column-id ng-star-inserted" role="cell">
                                                                    114
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-title mat-column-title ng-star-inserted" role="cell">
                                                                    Chat IOS app
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-clientName mat-column-clientName ng-star-inserted" role="cell">
                                                                    Pooja Sharma
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-startDate mat-column-startDate ng-star-inserted" role="cell">
                                                                    05/17/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-endDate mat-column-endDate ng-star-inserted" role="cell">
                                                                    08/11/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-deadLine mat-column-deadLine ng-star-inserted" role="cell">
                                                                    09/13/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-noOfMembers mat-column-noOfMembers ng-star-inserted" mat-cell role="cell">
                                                                    <ul _ngcontent-pgy-c235 className="list-unstyled order-list mb-0">
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                                                        </li>
                                                                    </ul>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">

                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-solid-blue pro-state" >
                                                                            Medium
                                                                        </span>
                                                                    </div>


                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-progress mat-column-progress ng-star-inserted" mat-cell role="cell">
                                                                    <mat-progress-bar _ngcontent-pgy-c235 aria-valuemax={100} aria-valuemin={0} aria-valuenow={47} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" style={{ "width": "80%" }} tabIndex={-1}>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                                            <div className="mdc-linear-progress__buffer-bar" style={{ "-webkit-flex-basis": "100%", "-ms-flex-basis": "100%", "flex-basis": "5%" }}>
                                                                            </div>
                                                                            <div className="mdc-linear-progress__buffer-dots">
                                                                            </div>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ width: "5%", "-webkit-transform": "scaleX(0.47)", "-ms-transform": "scaleX(0.47)", "transform": "scaleX(0.47)" }}>
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                    </mat-progress-bar>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-pill  col-green pro-state" >
                                                                            Active
                                                                        </span>
                                                                    </div>



                                                                </mat-cell>

                                                            </mat-row>
                                                            <mat-row _ngcontent-pgy-c235 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-id mat-column-id ng-star-inserted" role="cell">
                                                                    109
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-title mat-column-title ng-star-inserted" role="cell">
                                                                    Nursary App
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-clientName mat-column-clientName ng-star-inserted" role="cell">
                                                                    Ashton Cox
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-startDate mat-column-startDate ng-star-inserted" role="cell">
                                                                    04/19/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-endDate mat-column-endDate ng-star-inserted" role="cell">
                                                                    06/28/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-deadLine mat-column-deadLine ng-star-inserted" role="cell">
                                                                    06/30/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-noOfMembers mat-column-noOfMembers ng-star-inserted" mat-cell role="cell">
                                                                    <ul _ngcontent-pgy-c235 className="list-unstyled order-list mb-0">
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                                                        </li>
                                                                    </ul>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">
                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-solid-red pro-state">
                                                                            High
                                                                        </span>
                                                                    </div>



                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-progress mat-column-progress ng-star-inserted" mat-cell role="cell">
                                                                    <mat-progress-bar _ngcontent-pgy-c235 aria-valuemax={100} aria-valuemin={0} aria-valuenow={65} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" style={{ "width": "80%" }} tabIndex={-1}>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                                            <div className="mdc-linear-progress__buffer-bar" style={{ "-webkit-flex-basis": "100%", "-ms-flex-basis": "100%", "flex-basis": "5%" }}>
                                                                            </div>
                                                                            <div className="mdc-linear-progress__buffer-dots">
                                                                            </div>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ width: "8%", "-webkit-transform": "scaleX(0.65)", "-ms-transform": "scaleX(0.65)", "transform": "scaleX(0.65)" }}>
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                    </mat-progress-bar>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">


                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-pill  col-red pro-state">
                                                                            Deactive
                                                                        </span>
                                                                    </div>

                                                                </mat-cell>

                                                            </mat-row>
                                                            <mat-row _ngcontent-pgy-c235 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-id mat-column-id ng-star-inserted" role="cell">
                                                                    367
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-title mat-column-title ng-star-inserted" role="cell">
                                                                    Html static website
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-clientName mat-column-clientName ng-star-inserted" role="cell">
                                                                    Sarah Smith
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-startDate mat-column-startDate ng-star-inserted" role="cell">
                                                                    05/10/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-endDate mat-column-endDate ng-star-inserted" role="cell">
                                                                    06/17/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-deadLine mat-column-deadLine ng-star-inserted" role="cell">
                                                                    06/24/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-noOfMembers mat-column-noOfMembers ng-star-inserted" mat-cell role="cell">
                                                                    <ul _ngcontent-pgy-c235 className="list-unstyled order-list mb-0">
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                                                        </li>
                                                                    </ul>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">

                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-solid-blue pro-state">
                                                                            Medium
                                                                        </span>
                                                                    </div>


                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-progress mat-column-progress ng-star-inserted" mat-cell role="cell">
                                                                    <mat-progress-bar _ngcontent-pgy-c235 aria-valuemax={100} aria-valuemin={0} aria-valuenow={50} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" style={{ "width": "80%" }} tabIndex={-1}>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                                            <div className="mdc-linear-progress__buffer-bar" style={{ "-webkit-flex-basis": "100%", "-ms-flex-basis": "100%", "flex-basis": "5%" }}>
                                                                            </div>
                                                                            <div className="mdc-linear-progress__buffer-dots">
                                                                            </div>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ width: "9%", "-webkit-transform": "scaleX(0.5)", "-ms-transform": "scaleX(0.5)", "transform": "scaleX(0.5)" }}>
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                    </mat-progress-bar>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">


                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-pill  col-red pro-state">
                                                                            Deactive
                                                                        </span>
                                                                    </div>

                                                                </mat-cell>

                                                            </mat-row>
                                                            <mat-row _ngcontent-pgy-c235 className="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted" matripple role="row" style={{ "cursor": "pointer" }}>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-id mat-column-id ng-star-inserted" role="cell">
                                                                    865
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-title mat-column-title ng-star-inserted" role="cell">
                                                                    Accounting software
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-clientName mat-column-clientName ng-star-inserted" role="cell">
                                                                    Pooja Sharma
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-startDate mat-column-startDate ng-star-inserted" role="cell">
                                                                    05/19/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-endDate mat-column-endDate ng-star-inserted" role="cell">
                                                                    06/20/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-deadLine mat-column-deadLine ng-star-inserted" role="cell">
                                                                    07/01/2021
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-noOfMembers mat-column-noOfMembers ng-star-inserted" mat-cell role="cell">
                                                                    <ul _ngcontent-pgy-c235 className="list-unstyled order-list mb-0">
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user1.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user2.jpg" />
                                                                        </li>
                                                                        <li _ngcontent-pgy-c235 className="avatar avatar-sm">
                                                                            <img _ngcontent-pgy-c235 alt="user" className="rounded-circle" src="assets/images/user/user3.jpg" />
                                                                        </li>
                                                                    </ul>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-priority mat-column-priority ng-star-inserted" mat-cell role="cell">


                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-solid-green pro-state">
                                                                            Low
                                                                        </span>
                                                                    </div>

                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-progress mat-column-progress ng-star-inserted" mat-cell role="cell">
                                                                    <mat-progress-bar _ngcontent-pgy-c235 aria-valuemax={100} aria-valuemin={0} aria-valuenow={27} className="mat-mdc-progress-bar mdc-linear-progress mat-primary mdc-linear-progress--animation-ready" mode="determinate" role="progressbar" style={{ "width": "80%" }} tabIndex={-1}>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__buffer">
                                                                            <div className="mdc-linear-progress__buffer-bar" style={{ "-webkit-flex-basis": "100%", "-ms-flex-basis": "100%", "flex-basis": "5%" }}>
                                                                            </div>
                                                                            <div className="mdc-linear-progress__buffer-dots">
                                                                            </div>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ width: "5%", "-webkit-transform": "scaleX(0.27)", "-ms-transform": "scaleX(0.27)", "transform": "scaleX(0.27)" }}>
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                        <div aria-hidden="true" className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                                                            <span className="mdc-linear-progress__bar-inner">
                                                                            </span>
                                                                        </div>
                                                                    </mat-progress-bar>
                                                                </mat-cell>
                                                                <mat-cell _ngcontent-pgy-c235 className="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted" mat-cell role="cell">
                                                                    <div _ngcontent-pgy-c235 className="ng-star-inserted">
                                                                <span _ngcontent-pgy-c235 className="badge badge-pill  col-green pro-state">
                                                                            Active
                                                                        </span>
                                                                    </div>



                                                                </mat-cell>

                                                            </mat-row>



                                                        </mat-table>

                                                        <div _ngcontent-pgy-c235 className="no-results ng-star-inserted" style={{ "display": "none" }}>
                                                            No results
                                                        </div>

                                                        <mat-paginator _ngcontent-pgy-c235 className="mat-mdc-paginator" role="group">
                                                            <div className="mat-mdc-paginator-outer-container">
                                                                <div className="mat-mdc-paginator-container">
                                                                    <div className="mat-mdc-paginator-page-size ng-star-inserted">
                                                                        <div className="mat-mdc-paginator-page-size-label" id="mat-paginator-page-size-label-2">
                                                                            Items per page:
                                                                        </div>
                                                                        <mat-form-field className="mat-mdc-form-field mat-mdc-paginator-page-size-select ng-tns-c67-32 mat-mdc-form-field-type-mat-select mat-form-field-appearance-outline mat-primary ng-star-inserted">

                                                                            <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c67-32 mdc-text-field--outlined mdc-text-field--no-label">

                                                                                <div className="mat-mdc-form-field-flex ng-tns-c67-32">
                                                                                    <div className="mdc-notched-outline ng-tns-c67-32 mdc-notched-outline--no-label ng-star-inserted mdc-notched-outline--notched" matformfieldnotchedoutline>
                                                                                        <div className="mdc-notched-outline__leading">
                                                                                        </div>
                                                                                        <div className="mdc-notched-outline__notch" style={{ "width": "0px" }}>



                                                                                        </div>
                                                                                        <div className="mdc-notched-outline__trailing">
                                                                                        </div>
                                                                                    </div>



                                                                                    <div className="mat-mdc-form-field-infix ng-tns-c67-32">

                                                                                        <mat-select aria-autocomplete="none" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox" aria-invalid="false" aria-labelledby="mat-select-value-5 mat-paginator-page-size-label-2" aria-required="false" className="mat-mdc-select ng-tns-c150-33 ng-tns-c67-32 ng-star-inserted" id="mat-select-4" role="combobox" tabIndex={0}>
                                                                                            <div cdk-overlay-origin className="mat-mdc-select-trigger ng-tns-c150-33">
                                                                                                <div className="mat-mdc-select-value ng-tns-c150-33" id="mat-select-value-5">

                                                                                                    <span className="mat-mdc-select-value-text ng-tns-c150-33 ng-star-inserted">
                                                                                                        <span className="mat-mdc-select-min-line ng-tns-c150-33 ng-star-inserted">
                                                                                                            10
                                                                                                        </span>


                                                                                                    </span>

                                                                                                </div>
                                                                                                <div className="mat-mdc-select-arrow-wrapper ng-tns-c150-33">
                                                                                                    <div className="mat-mdc-select-arrow ng-tns-c150-33">
                                                                                                        <svg className="ng-tns-c150-33" focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
                                                                                                            <path className="ng-tns-c150-33" d="M7 10l5 5 5-5z">
                                                                                                            </path>
                                                                                                        </svg>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                        </mat-select>
                                                                                    </div>


                                                                                </div>

                                                                            </div>
                                                                            <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c67-32">

                                                                                <div className="mat-mdc-form-field-hint-wrapper ng-tns-c67-32 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style={{ "opacity": "1", "-webkit-transform": "translateY(0%)", "-ms-transform": "translateY(0%)", "transform": "translateY(0%)" }}>

                                                                                    <div className="mat-mdc-form-field-hint-spacer ng-tns-c67-32">
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </mat-form-field>


                                                                    </div>

                                                                    <div className="mat-mdc-paginator-range-actions">
                                                                        <div aria-live="polite" className="mat-mdc-paginator-range-label">
                                                                            1 – 7 of 7
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
            </div>

        </>
    );
}


