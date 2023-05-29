import React, { useState } from "react";
// import "../mainsection/dashdash.css"
import "../../kuber/madhav/Madhav.css"
import "./readmail.css"
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


export function ReadmailComponent() {
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
               
                        <div _ngcontent-pgy-c265 className="block-header">
                            <app-breadcrumb _ngcontent-pgy-c265 _nghost-pgy-c225>
                                <div _ngcontent-pgy-c225 className="breadcrumb-main">
                                    <div _ngcontent-pgy-c225 className="row">
                                        <div _ngcontent-pgy-c225 className="col-6">
                                            <div _ngcontent-pgy-c225 className="breadcrumb-title">
                                                <h4 _ngcontent-pgy-c225 className="page-title">
                                                    Read
                                                </h4>
                                            </div>
                                        </div>
                                        <div _ngcontent-pgy-c225 className="col-6">
                                            <ul _ngcontent-pgy-c225 className="breadcrumb-list">
                                                <li _ngcontent-pgy-c225 className="breadcrumb-item bcrumb-1">
                                            <a _ngcontent-pgy-c225 href="/DashBord">
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
                                                    Read
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </app-breadcrumb>
                        </div>
                        <div _ngcontent-pgy-c265 className="row">
                            <div _ngcontent-pgy-c265 className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <div _ngcontent-pgy-c265 className="card">
                                    <div _ngcontent-pgy-c265 className="body">
                                        <div _ngcontent-pgy-c265 id="mail-nav">
                                            <button _ngcontent-pgy-c265 className="btn btn-success waves-effect m-b-15" type="button">
                                                COMPOSE
                                            </button>
                                            <ul _ngcontent-pgy-c265 id="mail-folders">
                                                <li _ngcontent-pgy-c265 className="active">
                                                    <a _ngcontent-pgy-c265 href="inbox.html" title="Inbox">
                                                        Inbox
                                                        <span _ngcontent-pgy-c265 className="badge bg-orange">
                                                            6
                                                        </span>
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#" title="Sent">
                                                        Sent
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#" title="Draft">
                                                        Draft
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#" title="Bin">
                                                        Bin
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#" title="Important">
                                                        Important
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#" title="Starred">
                                                        Starred
                                                    </a>
                                                </li>
                                            </ul>
                                            <h5 _ngcontent-pgy-c265 className="b-b p-10 text-strong">
                                                Labels
                                            </h5>
                                            <ul _ngcontent-pgy-c265 id="mail-labels">
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#">
                                                        <i _ngcontent-pgy-c265 className="material-icons col-red">
                                                            local_offer
                                                        </i>
                                                        Family
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#">
                                                        <i _ngcontent-pgy-c265 className="material-icons col-blue">
                                                            local_offer
                                                        </i>
                                                        Work
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#">
                                                        <i _ngcontent-pgy-c265 className="material-icons col-orange">
                                                            local_offer
                                                        </i>
                                                        Shop
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#">
                                                        <i _ngcontent-pgy-c265 className="material-icons col-cyan">
                                                            local_offer
                                                        </i>
                                                        Themeforest
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#">
                                                        <i _ngcontent-pgy-c265 className="material-icons col-blue">
                                                            local_offer
                                                        </i>
                                                        Google
                                                    </a>
                                                </li>
                                            </ul>
                                            <h5 _ngcontent-pgy-c265 className="b-b p-10 text-strong">
                                                Online
                                            </h5>
                                            <ul _ngcontent-pgy-c265 className="online-user" id="online-offline">
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#">
                                                        <i _ngcontent-pgy-c265 className="material-icons col-green" title="Online">
                                                            brightness_1
                                                        </i>
                                                        Sachin
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#">
                                                        <i _ngcontent-pgy-c265 className="material-icons col-indigo" title="Off Line">
                                                            brightness_1
                                                        </i>
                                                        John Smith
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#">
                                                        <i _ngcontent-pgy-c265 className="material-icons col-orange" title="Away">
                                                            brightness_1
                                                        </i>
                                                        Askay
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#">
                                                        <i _ngcontent-pgy-c265 className="material-icons col-indigo" title="Off Line">
                                                            brightness_1
                                                        </i>
                                                        Dhavan
                                                    </a>
                                                </li>
                                                <li _ngcontent-pgy-c265>
                                                    <a _ngcontent-pgy-c265 href="/#">
                                                        <i _ngcontent-pgy-c265 className="material-icons col-indigo" title="Off Line">
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
                            <div _ngcontent-pgy-c265 className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                                <div _ngcontent-pgy-c265 className="card">
                                    <div _ngcontent-pgy-c265 className="boxs mail_listing">
                                        <div _ngcontent-pgy-c265 className="inbox-body no-pad">
                                            <section _ngcontent-pgy-c265 className="mail-list">
                                                <div _ngcontent-pgy-c265 className="mail-sender">
                                                    <div _ngcontent-pgy-c265 className="mail-heading">
                                                        <h4 _ngcontent-pgy-c265 className="vew-mail-header">
                                                            <b _ngcontent-pgy-c265>
                                                                Hi Dear, How are you?
                                                            </b>
                                                        </h4>
                                                    </div>
                                                    <hr _ngcontent-pgy-c265 />
                                                    <div _ngcontent-pgy-c265 className="d-flex mb-4">
                                                        <a _ngcontent-pgy-c265 className="table-img m-r-15" href="/#">
                                                            <img _ngcontent-pgy-c265 alt="user2" src="assets/images/user/user2.jpg" />
                                                        </a>
                                                        <div _ngcontent-pgy-c265 className="flex-grow-1">
                                                            <span _ngcontent-pgy-c265 className="date float-end">
                                                                4:15AM 04 April 2017
                                                            </span>
                                                            <h4 _ngcontent-pgy-c265 className="text-primary">
                                                                Sarah Smith
                                                            </h4>
                                                            <small _ngcontent-pgy-c265 className="text-muted">
                                                                From: sarah@example.com
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div _ngcontent-pgy-c265 className="view-mail">
                                                    <p _ngcontent-pgy-c265>
                                                        Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci.
                                                    </p>
                                                    <p _ngcontent-pgy-c265>
                                                        Porttitor eu consequat risus.
                                                        <a _ngcontent-pgy-c265 href="/#">
                                                            Mauris sed congue orci. Donec ultrices faucibus rutrum
                                                        </a>
                                                        . Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci.
                                                    </p>
                                                    <p _ngcontent-pgy-c265>
                                                        Sodales
                                                        <a _ngcontent-pgy-c265 href="/#">
                                                            vulputate urna, vel accumsan augue egestas ac
                                                        </a>
                                                        . Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci.
                                                    </p>
                                                </div>
                                                <div _ngcontent-pgy-c265 className="attachment-mail">
                                                    <p _ngcontent-pgy-c265>
                                                        <span _ngcontent-pgy-c265>
                                                            <i _ngcontent-pgy-c265 className="fa fa-paperclip">
                                                            </i>
                                                            3 attachments —
                                                        </span>
                                                        <a _ngcontent-pgy-c265 href="/#">
                                                            Download all attachments
                                                        </a>
                                                        |
                                                        <a _ngcontent-pgy-c265 href="/#">
                                                            View all images
                                                        </a>
                                                    </p>
                                                    <div _ngcontent-pgy-c265 className="row">
                                                        <div _ngcontent-pgy-c265 className="col-md-2">
                                                            <a _ngcontent-pgy-c265 href="/#">
                                                                <img _ngcontent-pgy-c265 alt="attachment" className="img-thumbnail img-responsive" src="assets/images/user/usrbig2.jpg" />
                                                            </a>
                                                            <a _ngcontent-pgy-c265 className="name" href="/#">
                                                                IMG_001.jpg
                                                                <span _ngcontent-pgy-c265>
                                                                    20KB
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div _ngcontent-pgy-c265 className="col-md-2">
                                                            <a _ngcontent-pgy-c265 href="/#">
                                                                <img _ngcontent-pgy-c265 alt="attachment" className="img-thumbnail img-responsive" src="assets/images/user/usrbig1.jpg" />
                                                            </a>
                                                            <a _ngcontent-pgy-c265 className="name" href="/#">
                                                                IMG_002.jpg
                                                                <span _ngcontent-pgy-c265>
                                                                    22KB
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div _ngcontent-pgy-c265 className="col-md-2">
                                                            <a _ngcontent-pgy-c265 href="/#">
                                                                <img _ngcontent-pgy-c265 alt="attachment" className="img-thumbnail img-responsive" src="assets/images/user/usrbig3.jpg" />
                                                            </a>
                                                            <a _ngcontent-pgy-c265 className="name" href="/#">
                                                                IMG_003.jpg
                                                                <span _ngcontent-pgy-c265>
                                                                    28KB
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div _ngcontent-pgy-c265 className="replyBox m-t-20">
                                                    <p _ngcontent-pgy-c265 className="p-b-20">
                                                        click here to
                                                        <a _ngcontent-pgy-c265 href="/#">
                                                            Reply
                                                        </a>
                                                        or
                                                        <a _ngcontent-pgy-c265 href="/#">
                                                            Forward
                                                        </a>
                                                    </p>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
            </div>

        </>
    );
}


