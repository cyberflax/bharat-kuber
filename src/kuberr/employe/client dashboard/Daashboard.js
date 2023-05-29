import React, { useState } from "react";
// import "./client.css";
import "../kuber/madhav/Madhav.css"

import "../dashboard/kuber.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from "../../../../node_modules/react-bootstrap/Accordion"
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


export function DashboardClient() {
    
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
                                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"transparent"}}>
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
                                <Link to="/Clientdash"><img className='img11' src={a30} alt="dash" /></Link><Link to="/Clientdash" className="adash">Dashboad</Link>
                            </div>
                            <Accordion defaultActiveKey="0" className="mb-2 Accordmain" style={{
                                width: "90%",
                                margin: "auto",
                                overflow:"hidden"
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

                <div _ngcontent-woo-c171 className="block-header">
                    <app-breadcrumb _ngcontent-woo-c171 _nghost-woo-c170>
                        <div _ngcontent-woo-c170 className="breadcrumb-main">
                            <div _ngcontent-woo-c170 className="row">
                                <div _ngcontent-woo-c170 className="col-6">
                                    <div _ngcontent-woo-c170 className="breadcrumb-title">
                                        <h4 _ngcontent-woo-c170 className="page-title">
                                            Dashboard
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
                                       
                                        <li _ngcontent-woo-c170 className="breadcrumb-item active">
                                            Dashboard
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </app-breadcrumb>
                </div>
                <div _ngcontent-woo-c171 className="row">
                    <div _ngcontent-woo-c171 className="col-lg-12">
                        <div _ngcontent-woo-c171 className="card">
                            <div _ngcontent-woo-c171 className="body">
                                <div _ngcontent-woo-c171 className="row align-items-center">
                                    <div _ngcontent-woo-c171 className="col-md-4">
                                        <img _ngcontent-woo-c171 alt="" className="w-100" src="assets/images/pages/welcome.png" />
                                    </div>
                                    <div _ngcontent-woo-c171 className="col-md-8">
                                        <h4 _ngcontent-woo-c171 className="font-20 weight-500 mb-2">
                                            Welcome back
                                            <div _ngcontent-woo-c171 className="weight-600 font-30 col-blue pt-1">
                                                Cara Stevens!
                                            </div>
                                        </h4>
                                        <p _ngcontent-woo-c171 className="font-18 max-width-600">
                                            We would like to take this opportunity to welcome you to our practice and to thank you for choosing our company. Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida..
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div _ngcontent-woo-c171 className="row">
                    <div _ngcontent-woo-c171 className="col-lg-3 col-md-3 col-sm-12">
                        <div _ngcontent-woo-c171 className="card card-statistic-2">
                            <div _ngcontent-woo-c171 className="clearfix">
                                <div _ngcontent-woo-c171 className="card-icon-only shadow-primary float-start">
                                    <img _ngcontent-woo-c171 alt="" src="assets/images/pages/img1.png" />
                                </div>
                                <div _ngcontent-woo-c171 className="card-right">
                                    <div _ngcontent-woo-c171>
                                        <h5 _ngcontent-woo-c171 className="float-end">
                                            Running Projects
                                        </h5>
                                    </div>
                                    <div _ngcontent-woo-c171 className="col-green">
                                        <h3 _ngcontent-woo-c171 className="font-weight-bold float-end mb-0">
                                            70
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-woo-c171 className="card-content msl-4 mb-3">
                                <p _ngcontent-woo-c171 className="m-b-0 d-flex">
                                    <i _ngcontent-woo-c171 className="material-icons col-green psr-2">
                                        trending_up
                                    </i>
                                    10% Higher Then Last Month
                                </p>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-woo-c171 className="col-lg-3 col-md-3 col-sm-12">
                        <div _ngcontent-woo-c171 className="card card-statistic-2">
                            <div _ngcontent-woo-c171 className="clearfix">
                                <div _ngcontent-woo-c171 className="card-icon-only shadow-primary float-start">
                                    <img _ngcontent-woo-c171 alt="" src="assets/images/pages/img2.png" />
                                </div>
                                <div _ngcontent-woo-c171 className="card-right">
                                    <div _ngcontent-woo-c171>
                                        <h5 _ngcontent-woo-c171 className="float-end">
                                            Active Tickets
                                        </h5>
                                    </div>
                                    <div _ngcontent-woo-c171 className="col-green">
                                        <h3 _ngcontent-woo-c171 className="font-weight-bold float-end mb-0">
                                            650
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-woo-c171 className="card-content msl-4 mb-3">
                                <p _ngcontent-woo-c171 className="m-b-0 d-flex">
                                    <i _ngcontent-woo-c171 className="material-icons col-orange psr-2">
                                        trending_down
                                    </i>
                                    07% Less Then Last Month
                                </p>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-woo-c171 className="col-lg-3 col-md-3 col-sm-12">
                        <div _ngcontent-woo-c171 className="card card-statistic-2">
                            <div _ngcontent-woo-c171 className="clearfix">
                                <div _ngcontent-woo-c171 className="card-icon-only shadow-primary float-start">
                                    <img _ngcontent-woo-c171 alt="" src="assets/images/pages/img3.png" />
                                </div>
                                <div _ngcontent-woo-c171 className="card-right">
                                    <div _ngcontent-woo-c171>
                                        <h5 _ngcontent-woo-c171 className="float-end">
                                            Assigned Employee
                                        </h5>
                                    </div>
                                    <div _ngcontent-woo-c171 className="col-green">
                                        <h3 _ngcontent-woo-c171 className="font-weight-bold float-end mb-0">
                                            885
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-woo-c171 className="card-content msl-4 mb-3">
                                <p _ngcontent-woo-c171 className="m-b-0 d-flex">
                                    <i _ngcontent-woo-c171 className="material-icons col-green psr-2">
                                        trending_up
                                    </i>
                                    12% Higher Then Last Month
                                </p>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-woo-c171 className="col-lg-3 col-md-3 col-sm-12">
                        <div _ngcontent-woo-c171 className="card card-statistic-2">
                            <div _ngcontent-woo-c171 className="clearfix">
                                <div _ngcontent-woo-c171 className="card-icon-only shadow-primary float-start">
                                    <img _ngcontent-woo-c171 alt="" src="assets/images/pages/img4.png" />
                                </div>
                                <div _ngcontent-woo-c171 className="card-right">
                                    <div _ngcontent-woo-c171>
                                        <h5 _ngcontent-woo-c171 className="float-end">
                                            Total Payments
                                        </h5>
                                    </div>
                                    <div _ngcontent-woo-c171 className="col-green">
                                        <h3 _ngcontent-woo-c171 className="font-weight-bold float-end mb-0">
                                            $9,456
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-woo-c171 className="card-content msl-4 mb-3">
                                <p _ngcontent-woo-c171 className="m-b-0 d-flex">
                                    <i _ngcontent-woo-c171 className="material-icons col-orange psr-2">
                                        trending_down
                                    </i>
                                    22% Less Then Last Month
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div _ngcontent-woo-c171 className="row">
                    <div _ngcontent-woo-c171 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div _ngcontent-woo-c171 className="card">
                            <div _ngcontent-woo-c171 className="card-body">
                                <div _ngcontent-woo-c171 className="float-start">
                                    <h6 _ngcontent-woo-c171 className="text-muted">
                                        Project Hourly Work
                                    </h6>
                                    <h5 _ngcontent-woo-c171>
                                        My Shop App
                                        <span _ngcontent-woo-c171 className="text-muted font-12">
                                            (Android)
                                        </span>
                                    </h5>
                                </div>
                                <div _ngcontent-woo-c171 className="mb-5">
                                    <apx-chart _ngcontent-woo-c171 _nghost-woo-c160>
                                        <div _ngcontent-woo-c160 style={{ minHeight: '380px' }}>
                                            <div className="apexcharts-canvas apexchartsjj9cnabn apexcharts-theme-light" id="apexchartsjj9cnabn" style={{ width: '274px', height: '365px' }}>
                                                <svg className="apexcharts-svg apexcharts-zoomable" height={365} id="SvgjsSvg1295" style={{ background: 'transparent' }} transform="translate(0, 0)" version="1.1" width={274} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG1297" transform="translate(46.23958396911621, 30)">
                                                        <defs id="SvgjsDefs1296">
                                                            <clipPath id="gridRectMaskjj9cnabn">
                                                                <rect fill="#fff" height="281.8533312759399" id="SvgjsRect1305" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="226.7604160308838" x="-4.5" y="-2.5">
                                                                </rect>
                                                            </clipPath>
                                                            <clipPath id="forecastMaskjj9cnabn">
                                                            </clipPath>
                                                            <clipPath id="nonForecastMaskjj9cnabn">
                                                            </clipPath>
                                                            <clipPath id="gridRectMarkerMaskjj9cnabn">
                                                                <rect fill="#fff" height="312.8533312759399" id="SvgjsRect1306" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="253.7604160308838" x={-18} y={-18}>
                                                                </rect>
                                                            </clipPath>
                                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter1345" width="200%" x="-50%" y="-50%">
                                                                <feFlood floodColor="#000000" floodOpacity="0.2" id="SvgjsFeFlood1346" in="SourceGraphic" result="SvgjsFeFlood1346Out">
                                                                </feFlood>
                                                                <feComposite id="SvgjsFeComposite1347" in="SvgjsFeFlood1346Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite1347Out">
                                                                </feComposite>
                                                                <feOffset dx={7} dy={18} id="SvgjsFeOffset1348" in="SvgjsFeComposite1347Out" result="SvgjsFeOffset1348Out">
                                                                </feOffset>
                                                                <feGaussianBlur id="SvgjsFeGaussianBlur1349" in="SvgjsFeOffset1348Out" result="SvgjsFeGaussianBlur1349Out" stdDeviation={10}>
                                                                </feGaussianBlur>
                                                                <feMerge id="SvgjsFeMerge1350" in="SourceGraphic" result="SvgjsFeMerge1350Out">
                                                                    <feMergeNode id="SvgjsFeMergeNode1351" in="SvgjsFeGaussianBlur1349Out">
                                                                    </feMergeNode>
                                                                    <feMergeNode id="SvgjsFeMergeNode1352" in="[object Arguments]">
                                                                    </feMergeNode>
                                                                </feMerge>
                                                                <feBlend id="SvgjsFeBlend1353" in="SourceGraphic" in2="SvgjsFeMerge1350Out" mode="normal" result="SvgjsFeBlend1353Out">
                                                                </feBlend>
                                                            </filter>
                                                        </defs>
                                                        <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="276.8533312759399" id="SvgjsLine1304" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="276.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1366" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1368" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="36.293402671813965" x2="36.293402671813965" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1370" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="72.58680534362793" x2="72.58680534362793" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1372" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="108.8802080154419" x2="108.8802080154419" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1374" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="145.17361068725586" x2="145.17361068725586" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1376" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="181.46701335906982" x2="181.46701335906982" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1378" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="217.7604160308838" x2="217.7604160308838" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <g className="apexcharts-grid" id="SvgjsG1361">
                                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG1362">
                                                                <line className="apexcharts-gridline" id="SvgjsLine1380" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="217.7604160308838" y1="55.370666255187984" y2="55.370666255187984">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1381" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="217.7604160308838" y1="110.74133251037597" y2="110.74133251037597">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1382" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="217.7604160308838" y1="166.11199876556395" y2="166.11199876556395">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1383" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="217.7604160308838" y1="221.48266502075194" y2="221.48266502075194">
                                                                </line>
                                                            </g>
                                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG1363">
                                                                <line className="apexcharts-gridline" id="SvgjsLine1365" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1367" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="36.293402671813965" x2="36.293402671813965" y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1369" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="72.58680534362793" x2="72.58680534362793" y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1371" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="108.8802080154419" x2="108.8802080154419" y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1373" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="145.17361068725586" x2="145.17361068725586" y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1375" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="181.46701335906982" x2="181.46701335906982" y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1377" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="217.7604160308838" x2="217.7604160308838" y1={0} y2="276.8533312759399">
                                                                </line>
                                                            </g>
                                                            <line id="SvgjsLine1386" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="217.7604160308838" y1="276.8533312759399" y2="276.8533312759399">
                                                            </line>
                                                            <line id="SvgjsLine1385" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="276.8533312759399">
                                                            </line>
                                                        </g>
                                                        <g className="apexcharts-grid-borders" id="SvgjsG1364">
                                                            <line className="apexcharts-gridline" id="SvgjsLine1379" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="217.7604160308838" y1={0} y2={0}>
                                                            </line>
                                                            <line className="apexcharts-gridline" id="SvgjsLine1384" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="217.7604160308838" y1="276.8533312759399" y2="276.8533312759399">
                                                            </line>
                                                            <line id="SvgjsLine1417" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="217.7604160308838" y1="277.8533312759399" y2="277.8533312759399">
                                                            </line>
                                                        </g>
                                                        <g className="apexcharts-line-series apexcharts-plot-series" id="SvgjsG1307">
                                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG1308" rel={1} seriesname="Hours">
                                                                <path className="apexcharts-line" clipPath="url(#gridRectMaskjj9cnabn)" d="M 0 207.63999845695503C 12.702690935134887 207.63999845695503 23.590711736679076 124.58399907417311 36.293402671813965 124.58399907417311C 48.996093606948854 124.58399907417311 59.88411440849304 166.11199876556407 72.58680534362793 166.11199876556407C 85.28949627876281 166.11199876556407 96.17751708030701 207.63999845695503 108.8802080154419 207.63999845695503C 121.58289895057678 207.63999845695503 132.47091975212098 124.58399907417311 145.17361068725586 124.58399907417311C 157.87630162239074 124.58399907417311 168.76432242393494 249.167998148346 181.46701335906982 249.167998148346C 194.1697042942047 249.167998148346 205.0577250957489 55.3706662551881 217.7604160308838 55.3706662551881" fill="none" fillOpacity={1} fillRule="evenodd" filter="url(#SvgjsFilter1345)" id="SvgjsPath1344" index={0} pathfrom="M -1 1162.7839913589478 L -1 1162.7839913589478 L 36.293402671813965 1162.7839913589478 L 72.58680534362793 1162.7839913589478 L 108.8802080154419 1162.7839913589478 L 145.17361068725586 1162.7839913589478 L 181.46701335906982 1162.7839913589478 L 217.7604160308838 1162.7839913589478" pathto="M 0 207.63999845695503C 12.702690935134887 207.63999845695503 23.590711736679076 124.58399907417311 36.293402671813965 124.58399907417311C 48.996093606948854 124.58399907417311 59.88411440849304 166.11199876556407 72.58680534362793 166.11199876556407C 85.28949627876281 166.11199876556407 96.17751708030701 207.63999845695503 108.8802080154419 207.63999845695503C 121.58289895057678 207.63999845695503 132.47091975212098 124.58399907417311 145.17361068725586 124.58399907417311C 157.87630162239074 124.58399907417311 168.76432242393494 249.167998148346 181.46701335906982 249.167998148346C 194.1697042942047 249.167998148346 205.0577250957489 55.3706662551881 217.7604160308838 55.3706662551881" stroke="rgba(103,119,239,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5}>
                                                                </path>
                                                                <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG1309">
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskjj9cnabn)" id="SvgjsG1311">
                                                                        <circle className="apexcharts-marker no-pointer-events wlw188v7yj" cx={0} cy="207.63999845695503" default-marker-size={1} fill="#6777ef" fillOpacity={1} id="SvgjsCircle1312" index={0} j={0} r={1} rel={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                        <circle className="apexcharts-marker no-pointer-events wmv6pnh5zh" cx="36.293402671813965" cy="124.58399907417311" default-marker-size={1} fill="#6777ef" fillOpacity={1} id="SvgjsCircle1313" index={0} j={1} r={1} rel={1} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskjj9cnabn)" id="SvgjsG1319">
                                                                        <circle className="apexcharts-marker no-pointer-events w123j1aoi" cx="72.58680534362793" cy="166.11199876556407" default-marker-size={1} fill="#6777ef" fillOpacity={1} id="SvgjsCircle1320" index={0} j={2} r={1} rel={2} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskjj9cnabn)" id="SvgjsG1324">
                                                                        <circle className="apexcharts-marker no-pointer-events wb8nxz0sai" cx="108.8802080154419" cy="207.63999845695503" default-marker-size={1} fill="#6777ef" fillOpacity={1} id="SvgjsCircle1325" index={0} j={3} r={1} rel={3} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskjj9cnabn)" id="SvgjsG1329">
                                                                        <circle className="apexcharts-marker no-pointer-events w1lwrkt15" cx="145.17361068725586" cy="124.58399907417311" default-marker-size={1} fill="#6777ef" fillOpacity={1} id="SvgjsCircle1330" index={0} j={4} r={1} rel={4} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskjj9cnabn)" id="SvgjsG1334">
                                                                        <circle className="apexcharts-marker no-pointer-events wm2ortobj" cx="181.46701335906982" cy="249.167998148346" default-marker-size={1} fill="#6777ef" fillOpacity={1} id="SvgjsCircle1335" index={0} j={5} r={1} rel={5} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskjj9cnabn)" id="SvgjsG1339">
                                                                        <circle className="apexcharts-marker no-pointer-events wghuwwfrc" cx="217.7604160308838" cy="55.3706662551881" default-marker-size={1} fill="#6777ef" fillOpacity={1} id="SvgjsCircle1340" index={0} j={6} r={1} rel={6} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG1310">
                                                                <g className="apexcharts-data-labels" id="SvgjsG1314">
                                                                    <rect fill="#6777ef" height="15.333333969116211" id="SvgjsRect1354" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="-10.677083492279053" y="197.97332763671875">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx={0} cy="209.63999845695503" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1316" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x={0} y="209.63999845695503">
                                                                        69
                                                                    </text>
                                                                    <rect fill="#6777ef" height="15.333333969116211" id="SvgjsRect1355" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="25.616317749023438" y="114.91734313964844">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="36.293402671813965" cy="126.58399907417311" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1318" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="36.293402671813965" y="126.58399907417311">
                                                                        75
                                                                    </text>
                                                                </g>
                                                                <g className="apexcharts-data-labels" id="SvgjsG1321">
                                                                    <rect fill="#6777ef" height="15.333333969116211" id="SvgjsRect1356" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="61.90972137451172" y="156.44534301757812">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="72.58680534362793" cy="168.11199876556407" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1323" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="72.58680534362793" y="168.11199876556407">
                                                                        72
                                                                    </text>
                                                                </g>
                                                                <g className="apexcharts-data-labels" id="SvgjsG1326">
                                                                    <rect fill="#6777ef" height="15.333333969116211" id="SvgjsRect1357" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="98.203125" y="197.97332763671875">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="108.8802080154419" cy="209.63999845695503" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1328" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="108.8802080154419" y="209.63999845695503">
                                                                        69
                                                                    </text>
                                                                </g>
                                                                <g className="apexcharts-data-labels" id="SvgjsG1331">
                                                                    <rect fill="#6777ef" height="15.333333969116211" id="SvgjsRect1358" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="134.4965362548828" y="114.91734313964844">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="145.17361068725586" cy="126.58399907417311" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1333" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="145.17361068725586" y="126.58399907417311">
                                                                        75
                                                                    </text>
                                                                </g>
                                                                <g className="apexcharts-data-labels" id="SvgjsG1336">
                                                                    <rect fill="#6777ef" height="15.333333969116211" id="SvgjsRect1359" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="170.7899169921875" y="239.5013427734375">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="181.46701335906982" cy="251.167998148346" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1338" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="181.46701335906982" y="251.167998148346">
                                                                        66
                                                                    </text>
                                                                </g>
                                                                <g className="apexcharts-data-labels" id="SvgjsG1341">
                                                                    <rect fill="#6777ef" height="15.333333969116211" id="SvgjsRect1360" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="21.354166984558105" x="207.08334350585938" y="45.704002380371094">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="217.7604160308838" cy="57.3706662551881" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1343" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="217.7604160308838" y="57.3706662551881">
                                                                        80
                                                                    </text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <line className="apexcharts-ycrosshairs" id="SvgjsLine1387" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="217.7604160308838" y1={0} y2={0}>
                                                        </line>
                                                        <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine1388" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="217.7604160308838" y1={0} y2={0}>
                                                        </line>
                                                        <g className="apexcharts-yaxis-annotations" id="SvgjsG1389">
                                                        </g>
                                                        <g className="apexcharts-xaxis-annotations" id="SvgjsG1390">
                                                        </g>
                                                        <g className="apexcharts-point-annotations" id="SvgjsG1391">
                                                        </g>
                                                        <g className="apexcharts-xaxis" id="SvgjsG1392" transform="translate(0, 0)">
                                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG1393" transform="translate(0, -4)">
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1395" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x={0} y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1396">
                                                                        Jan
                                                                    </tspan>
                                                                    <title>
                                                                        Jan
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1398" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="36.293402671813965" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1399">
                                                                        Feb
                                                                    </tspan>
                                                                    <title>
                                                                        Feb
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1401" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="72.58680534362793" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1402">
                                                                        Mar
                                                                    </tspan>
                                                                    <title>
                                                                        Mar
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1404" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="108.8802080154419" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1405">
                                                                        Apr
                                                                    </tspan>
                                                                    <title>
                                                                        Apr
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1407" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="145.17361068725586" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1408">
                                                                        May
                                                                    </tspan>
                                                                    <title>
                                                                        May
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1410" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="181.46701335906982" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1411">
                                                                        Jun
                                                                    </tspan>
                                                                    <title>
                                                                        Jun
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1413" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="217.7604160308838" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1414">
                                                                        Jul
                                                                    </tspan>
                                                                    <title>
                                                                        Jul
                                                                    </title>
                                                                </text>
                                                            </g>
                                                            <g className="apexcharts-xaxis-title" id="SvgjsG1415">
                                                                <text className="apexcharts-text apexcharts-xaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={900} id="SvgjsText1416" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="108.8802080154419" y="329.6666660308838">
                                                                    Months
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect1440" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0}>
                                                        </rect>
                                                        <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect1441" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0}>
                                                        </rect>
                                                    </g>
                                                    <g className="apexcharts-annotations" id="SvgjsG1298">
                                                    </g>
                                                    <g className="apexcharts-yaxis" id="SvgjsG1418" rel={0} transform="translate(16.23958396911621, 0)">
                                                        <g className="apexcharts-yaxis-texts-g" id="SvgjsG1419">
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1421" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="31.5">
                                                                <tspan id="SvgjsTspan1422">
                                                                    84
                                                                </tspan>
                                                                <title>
                                                                    84
                                                                </title>
                                                            </text>
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1424" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="86.87066625518798">
                                                                <tspan id="SvgjsTspan1425">
                                                                    80
                                                                </tspan>
                                                                <title>
                                                                    80
                                                                </title>
                                                            </text>
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1427" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="142.24133251037597">
                                                                <tspan id="SvgjsTspan1428">
                                                                    76
                                                                </tspan>
                                                                <title>
                                                                    76
                                                                </title>
                                                            </text>
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1430" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="197.61199876556395">
                                                                <tspan id="SvgjsTspan1431">
                                                                    72
                                                                </tspan>
                                                                <title>
                                                                    72
                                                                </title>
                                                            </text>
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1433" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="252.98266502075194">
                                                                <tspan id="SvgjsTspan1434">
                                                                    68
                                                                </tspan>
                                                                <title>
                                                                    68
                                                                </title>
                                                            </text>
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1436" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="308.3533312759399">
                                                                <tspan id="SvgjsTspan1437">
                                                                    64
                                                                </tspan>
                                                                <title>
                                                                    64
                                                                </title>
                                                            </text>
                                                        </g>
                                                        <g className="apexcharts-yaxis-title" id="SvgjsG1438">
                                                            <text className="apexcharts-text apexcharts-yaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={900} id="SvgjsText1439" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" transform="rotate(-90 -6.6318359375 164.0933380126953)" x="10.923666000366211" y="168.42666563796996">
                                                                Hours
                                                            </text>
                                                        </g>
                                                    </g>
                                                    <rect fill="#fefefe" height={0} id="SvgjsRect1303" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0}>
                                                    </rect>
                                                </svg>
                                                <div className="apexcharts-legend" style={{ maxHeight: '182.5px' }}>
                                                </div>
                                                <div className="apexcharts-tooltip apexcharts-theme-dark">
                                                    <div className="apexcharts-tooltip-title" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                                                    </div>
                                                    <div className="apexcharts-tooltip-series-group" style={{ order: 1 }}>
                                                        <span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(103, 119, 239)' }}>
                                                        </span>
                                                        <div className="apexcharts-tooltip-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                                                            <div className="apexcharts-tooltip-y-group">
                                                                <span className="apexcharts-tooltip-text-y-label">
                                                                </span>
                                                                <span className="apexcharts-tooltip-text-y-value">
                                                                </span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-goals-group">
                                                                <span className="apexcharts-tooltip-text-goals-label">
                                                                </span>
                                                                <span className="apexcharts-tooltip-text-goals-value">
                                                                </span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-z-group">
                                                                <span className="apexcharts-tooltip-text-z-label">
                                                                </span>
                                                                <span className="apexcharts-tooltip-text-z-value">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                                                    <div className="apexcharts-xaxistooltip-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                                    <div className="apexcharts-yaxistooltip-text">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </apx-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-woo-c171 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div _ngcontent-woo-c171 className="card">
                            <div _ngcontent-woo-c171 className="card-body">
                                <div _ngcontent-woo-c171 className="float-start">
                                    <h6 _ngcontent-woo-c171 className="text-muted">
                                        Project Hourly Work
                                    </h6>
                                    <h5 _ngcontent-woo-c171>
                                        ERP System
                                        <span _ngcontent-woo-c171 className="text-muted font-12">
                                            (Java)
                                        </span>
                                    </h5>
                                </div>
                                <div _ngcontent-woo-c171 className="mb-5">
                                    <apx-chart _ngcontent-woo-c171 _nghost-woo-c160>
                                        <div _ngcontent-woo-c160 style={{ minHeight: '380px' }}>
                                            <div className="apexcharts-canvas apexcharts9sbk6s0u apexcharts-theme-light" id="apexcharts9sbk6s0u" style={{ width: '274px', height: '365px' }}>
                                                <svg className="apexcharts-svg apexcharts-zoomable" height={365} id="SvgjsSvg1442" style={{ background: 'transparent' }} transform="translate(0, 0)" version="1.1" width={274} xmlns="http://www.w3.org/2000/svg" xmlns-data="ApexChartsNS" xmlns-svgjs="http://svgjs.dev" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <g className="apexcharts-inner apexcharts-graphical" id="SvgjsG1444" transform="translate(52.35416793823242, 30)">
                                                        <defs id="SvgjsDefs1443">
                                                            <clipPath id="gridRectMask9sbk6s0u">
                                                                <rect fill="#fff" height="281.8533312759399" id="SvgjsRect1452" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="220.64583206176758" x="-4.5" y="-2.5">
                                                                </rect>
                                                            </clipPath>
                                                            <clipPath id="forecastMask9sbk6s0u">
                                                            </clipPath>
                                                            <clipPath id="nonForecastMask9sbk6s0u">
                                                            </clipPath>
                                                            <clipPath id="gridRectMarkerMask9sbk6s0u">
                                                                <rect fill="#fff" height="312.8533312759399" id="SvgjsRect1453" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width="247.64583206176758" x={-18} y={-18}>
                                                                </rect>
                                                            </clipPath>
                                                            <filter filterUnits="userSpaceOnUse" height="200%" id="SvgjsFilter1492" width="200%" x="-50%" y="-50%">
                                                                <feFlood floodColor="#000000" floodOpacity="0.2" id="SvgjsFeFlood1493" in="SourceGraphic" result="SvgjsFeFlood1493Out">
                                                                </feFlood>
                                                                <feComposite id="SvgjsFeComposite1494" in="SvgjsFeFlood1493Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite1494Out">
                                                                </feComposite>
                                                                <feOffset dx={7} dy={18} id="SvgjsFeOffset1495" in="SvgjsFeComposite1494Out" result="SvgjsFeOffset1495Out">
                                                                </feOffset>
                                                                <feGaussianBlur id="SvgjsFeGaussianBlur1496" in="SvgjsFeOffset1495Out" result="SvgjsFeGaussianBlur1496Out" stdDeviation={10}>
                                                                </feGaussianBlur>
                                                                <feMerge id="SvgjsFeMerge1497" in="SourceGraphic" result="SvgjsFeMerge1497Out">
                                                                    <feMergeNode id="SvgjsFeMergeNode1498" in="SvgjsFeGaussianBlur1496Out">
                                                                    </feMergeNode>
                                                                    <feMergeNode id="SvgjsFeMergeNode1499" in="[object Arguments]">
                                                                    </feMergeNode>
                                                                </feMerge>
                                                                <feBlend id="SvgjsFeBlend1500" in="SourceGraphic" in2="SvgjsFeMerge1497Out" mode="normal" result="SvgjsFeBlend1500Out">
                                                                </feBlend>
                                                            </filter>
                                                        </defs>
                                                        <line className="apexcharts-xcrosshairs" fill="#b1b9c4" fillOpacity="0.9" filter="none" height="276.8533312759399" id="SvgjsLine1451" stroke="#b6b6b6" strokeDasharray={3} strokeLinecap="butt" strokeWidth={1} width={1} x={0} x1={0} x2={0} y={0} y1={0} y2="276.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1513" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1515" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="35.27430534362793" x2="35.27430534362793" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1517" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="70.54861068725586" x2="70.54861068725586" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1519" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="105.82291603088379" x2="105.82291603088379" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1521" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="141.09722137451172" x2="141.09722137451172" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1523" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="176.37152671813965" x2="176.37152671813965" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <line className="apexcharts-xaxis-tick" id="SvgjsLine1525" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" x1="211.64583206176758" x2="211.64583206176758" y1="277.8533312759399" y2="283.8533312759399">
                                                        </line>
                                                        <g className="apexcharts-grid" id="SvgjsG1508">
                                                            <g className="apexcharts-gridlines-horizontal" id="SvgjsG1509">
                                                                <line className="apexcharts-gridline" id="SvgjsLine1527" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="55.370666255187984" y2="55.370666255187984">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1528" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="110.74133251037597" y2="110.74133251037597">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1529" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="166.11199876556395" y2="166.11199876556395">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1530" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="221.48266502075194" y2="221.48266502075194">
                                                                </line>
                                                            </g>
                                                            <g className="apexcharts-gridlines-vertical" id="SvgjsG1510">
                                                                <line className="apexcharts-gridline" id="SvgjsLine1512" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2={0} y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1514" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="35.27430534362793" x2="35.27430534362793" y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1516" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="70.54861068725586" x2="70.54861068725586" y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1518" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="105.82291603088379" x2="105.82291603088379" y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1520" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="141.09722137451172" x2="141.09722137451172" y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1522" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="176.37152671813965" x2="176.37152671813965" y1={0} y2="276.8533312759399">
                                                                </line>
                                                                <line className="apexcharts-gridline" id="SvgjsLine1524" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1="211.64583206176758" x2="211.64583206176758" y1={0} y2="276.8533312759399">
                                                                </line>
                                                            </g>
                                                            <line id="SvgjsLine1533" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="276.8533312759399" y2="276.8533312759399">
                                                            </line>
                                                            <line id="SvgjsLine1532" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" x1={0} x2={0} y1={1} y2="276.8533312759399">
                                                            </line>
                                                        </g>
                                                        <g className="apexcharts-grid-borders" id="SvgjsG1511">
                                                            <line className="apexcharts-gridline" id="SvgjsLine1526" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1={0} y2={0}>
                                                            </line>
                                                            <line className="apexcharts-gridline" id="SvgjsLine1531" stroke="#9aa0ac" strokeDasharray={1} strokeLinecap="butt" x1={0} x2="211.64583206176758" y1="276.8533312759399" y2="276.8533312759399">
                                                            </line>
                                                            <line id="SvgjsLine1564" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="211.64583206176758" y1="277.8533312759399" y2="277.8533312759399">
                                                            </line>
                                                        </g>
                                                        <g className="apexcharts-line-series apexcharts-plot-series" id="SvgjsG1454">
                                                            <g className="apexcharts-series" data-longestseries="true" data-realindex={0} id="SvgjsG1455" rel={1} seriesname="Hours">
                                                                <path className="apexcharts-line" clipPath="url(#gridRectMask9sbk6s0u)" d="M 0 243.63093152282704C 12.346006870269775 243.63093152282704 22.928298473358154 166.11199876556384 35.27430534362793 166.11199876556384C 47.620312213897705 166.11199876556384 58.202603816986084 55.37066625518787 70.54861068725586 55.37066625518787C 82.89461755752563 55.37066625518787 93.47690916061401 166.11199876556384 105.82291603088379 166.11199876556384C 118.16892290115356 166.11199876556384 128.75121450424194 110.74133251037597 141.09722137451172 110.74133251037597C 153.4432282447815 110.74133251037597 164.02551984786987 177.1861320166015 176.37152671813965 177.1861320166015C 188.71753358840942 177.1861320166015 199.2998251914978 99.6671992593383 211.64583206176758 99.6671992593383" fill="none" fillOpacity={1} fillRule="evenodd" filter="url(#SvgjsFilter1492)" id="SvgjsPath1491" index={0} pathfrom="M -1 1495.0079888900755 L -1 1495.0079888900755 L 35.27430534362793 1495.0079888900755 L 70.54861068725586 1495.0079888900755 L 105.82291603088379 1495.0079888900755 L 141.09722137451172 1495.0079888900755 L 176.37152671813965 1495.0079888900755 L 211.64583206176758 1495.0079888900755" pathto="M 0 243.63093152282704C 12.346006870269775 243.63093152282704 22.928298473358154 166.11199876556384 35.27430534362793 166.11199876556384C 47.620312213897705 166.11199876556384 58.202603816986084 55.37066625518787 70.54861068725586 55.37066625518787C 82.89461755752563 55.37066625518787 93.47690916061401 166.11199876556384 105.82291603088379 166.11199876556384C 118.16892290115356 166.11199876556384 128.75121450424194 110.74133251037597 141.09722137451172 110.74133251037597C 153.4432282447815 110.74133251037597 164.02551984786987 177.1861320166015 176.37152671813965 177.1861320166015C 188.71753358840942 177.1861320166015 199.2998251914978 99.6671992593383 211.64583206176758 99.6671992593383" stroke="rgba(151,109,160,0.85)" strokeDasharray={0} strokeLinecap="butt" strokeOpacity={1} strokeWidth={5}>
                                                                </path>
                                                                <g className="apexcharts-series-markers-wrap" data-realindex={0} id="SvgjsG1456">
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9sbk6s0u)" id="SvgjsG1458">
                                                                        <circle className="apexcharts-marker no-pointer-events wjaq6h6dx" cx={0} cy="243.63093152282704" default-marker-size={1} fill="#976da0" fillOpacity={1} id="SvgjsCircle1459" index={0} j={0} r={1} rel={0} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                        <circle className="apexcharts-marker no-pointer-events we9czxrcg" cx="35.27430534362793" cy="166.11199876556384" default-marker-size={1} fill="#976da0" fillOpacity={1} id="SvgjsCircle1460" index={0} j={1} r={1} rel={1} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9sbk6s0u)" id="SvgjsG1466">
                                                                        <circle className="apexcharts-marker no-pointer-events wljjj1hgo" cx="70.54861068725586" cy="55.37066625518787" default-marker-size={1} fill="#976da0" fillOpacity={1} id="SvgjsCircle1467" index={0} j={2} r={1} rel={2} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9sbk6s0u)" id="SvgjsG1471">
                                                                        <circle className="apexcharts-marker no-pointer-events wn311rfc" cx="105.82291603088379" cy="166.11199876556384" default-marker-size={1} fill="#976da0" fillOpacity={1} id="SvgjsCircle1472" index={0} j={3} r={1} rel={3} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9sbk6s0u)" id="SvgjsG1476">
                                                                        <circle className="apexcharts-marker no-pointer-events wrzhkfazx" cx="141.09722137451172" cy="110.74133251037597" default-marker-size={1} fill="#976da0" fillOpacity={1} id="SvgjsCircle1477" index={0} j={4} r={1} rel={4} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9sbk6s0u)" id="SvgjsG1481">
                                                                        <circle className="apexcharts-marker no-pointer-events w7dho3cv3" cx="176.37152671813965" cy="177.1861320166015" default-marker-size={1} fill="#976da0" fillOpacity={1} id="SvgjsCircle1482" index={0} j={5} r={1} rel={5} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                    <g className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMask9sbk6s0u)" id="SvgjsG1486">
                                                                        <circle className="apexcharts-marker no-pointer-events wq3f7uz7c" cx="211.64583206176758" cy="99.6671992593383" default-marker-size={1} fill="#976da0" fillOpacity={1} id="SvgjsCircle1487" index={0} j={6} r={1} rel={6} stroke="#ffffff" strokeOpacity="0.9" strokeWidth={2}>
                                                                        </circle>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g className="apexcharts-datalabels" data-realindex={0} id="SvgjsG1457">
                                                                <g className="apexcharts-data-labels" id="SvgjsG1461">
                                                                    <rect fill="#976da0" height="15.333333969116211" id="SvgjsRect1501" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="27.36458396911621" x="-13.682291984558105" y="233.9642791748047">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx={0} cy="245.63093152282704" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1463" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x={0} y="245.63093152282704">
                                                                        113
                                                                    </text>
                                                                    <rect fill="#976da0" height="15.333333969116211" id="SvgjsRect1502" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="21.258682250976562" y="156.44534301757812">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="35.27430534362793" cy="168.11199876556384" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1465" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="35.27430534362793" y="168.11199876556384">
                                                                        120
                                                                    </text>
                                                                </g>
                                                                <g className="apexcharts-data-labels" id="SvgjsG1468">
                                                                    <rect fill="#976da0" height="15.333333969116211" id="SvgjsRect1503" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="56.532989501953125" y="45.704002380371094">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="70.54861068725586" cy="57.37066625518787" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1470" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="70.54861068725586" y="57.37066625518787">
                                                                        130
                                                                    </text>
                                                                </g>
                                                                <g className="apexcharts-data-labels" id="SvgjsG1473">
                                                                    <rect fill="#976da0" height="15.333333969116211" id="SvgjsRect1504" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="91.80729675292969" y="156.44534301757812">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="105.82291603088379" cy="168.11199876556384" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1475" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="105.82291603088379" y="168.11199876556384">
                                                                        120
                                                                    </text>
                                                                </g>
                                                                <g className="apexcharts-data-labels" id="SvgjsG1478">
                                                                    <rect fill="#976da0" height="15.333333969116211" id="SvgjsRect1505" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="127.08160400390625" y="101.07466888427734">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="141.09722137451172" cy="112.74133251037597" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1480" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="141.09722137451172" y="112.74133251037597">
                                                                        125
                                                                    </text>
                                                                </g>
                                                                <g className="apexcharts-data-labels" id="SvgjsG1483">
                                                                    <rect fill="#976da0" height="15.333333969116211" id="SvgjsRect1506" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="27.36458396911621" x="162.68923950195312" y="167.5194549560547">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="176.37152671813965" cy="179.1861320166015" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1485" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="176.37152671813965" y="179.1861320166015">
                                                                        119
                                                                    </text>
                                                                </g>
                                                                <g className="apexcharts-data-labels" id="SvgjsG1488">
                                                                    <rect fill="#976da0" height="15.333333969116211" id="SvgjsRect1507" opacity="0.9" rx={2} ry={2} stroke="#ffffff" strokeDasharray={0} strokeWidth={1} width="28.03125" x="197.63021850585938" y="90.00053405761719">
                                                                    </rect>
                                                                    <text className="apexcharts-datalabel" cx="211.64583206176758" cy="101.6671992593383" dominantBaseline="auto" fill="#fff" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={600} id="SvgjsText1490" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="211.64583206176758" y="101.6671992593383">
                                                                        126
                                                                    </text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <line className="apexcharts-ycrosshairs" id="SvgjsLine1534" stroke="#b6b6b6" strokeDasharray={0} strokeLinecap="butt" strokeWidth={1} x1={0} x2="211.64583206176758" y1={0} y2={0}>
                                                        </line>
                                                        <line className="apexcharts-ycrosshairs-hidden" id="SvgjsLine1535" strokeDasharray={0} strokeLinecap="butt" strokeWidth={0} x1={0} x2="211.64583206176758" y1={0} y2={0}>
                                                        </line>
                                                        <g className="apexcharts-yaxis-annotations" id="SvgjsG1536">
                                                        </g>
                                                        <g className="apexcharts-xaxis-annotations" id="SvgjsG1537">
                                                        </g>
                                                        <g className="apexcharts-point-annotations" id="SvgjsG1538">
                                                        </g>
                                                        <g className="apexcharts-xaxis" id="SvgjsG1539" transform="translate(0, 0)">
                                                            <g className="apexcharts-xaxis-texts-g" id="SvgjsG1540" transform="translate(0, -4)">
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1542" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x={0} y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1543">
                                                                        Jan
                                                                    </tspan>
                                                                    <title>
                                                                        Jan
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1545" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="35.27430534362793" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1546">
                                                                        Feb
                                                                    </tspan>
                                                                    <title>
                                                                        Feb
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1548" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="70.54861068725586" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1549">
                                                                        Mar
                                                                    </tspan>
                                                                    <title>
                                                                        Mar
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1551" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="105.82291603088379" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1552">
                                                                        Apr
                                                                    </tspan>
                                                                    <title>
                                                                        Apr
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1554" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="141.09722137451172" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1555">
                                                                        May
                                                                    </tspan>
                                                                    <title>
                                                                        May
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1557" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="176.37152671813965" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1558">
                                                                        Jun
                                                                    </tspan>
                                                                    <title>
                                                                        Jun
                                                                    </title>
                                                                </text>
                                                                <text className="apexcharts-text apexcharts-xaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={400} id="SvgjsText1560" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="211.64583206176758" y="305.8533312759399">
                                                                    <tspan id="SvgjsTspan1561">
                                                                        Jul
                                                                    </tspan>
                                                                    <title>
                                                                        Jul
                                                                    </title>
                                                                </text>
                                                            </g>
                                                            <g className="apexcharts-xaxis-title" id="SvgjsG1562">
                                                                <text className="apexcharts-text apexcharts-xaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="12px" fontWeight={900} id="SvgjsText1563" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="middle" x="105.82291603088379" y="329.6666660308838">
                                                                    Months
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <rect className="apexcharts-zoom-rect" fill="#fefefe" height={0} id="SvgjsRect1587" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0}>
                                                        </rect>
                                                        <rect className="apexcharts-selection-rect" fill="#fefefe" height={0} id="SvgjsRect1588" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0}>
                                                        </rect>
                                                    </g>
                                                    <g className="apexcharts-annotations" id="SvgjsG1445">
                                                    </g>
                                                    <g className="apexcharts-yaxis" id="SvgjsG1565" rel={0} transform="translate(22.354167938232422, 0)">
                                                        <g className="apexcharts-yaxis-texts-g" id="SvgjsG1566">
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1568" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="31.5">
                                                                <tspan id="SvgjsTspan1569">
                                                                    135
                                                                </tspan>
                                                                <title>
                                                                    135
                                                                </title>
                                                            </text>
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1571" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="86.87066625518798">
                                                                <tspan id="SvgjsTspan1572">
                                                                    130
                                                                </tspan>
                                                                <title>
                                                                    130
                                                                </title>
                                                            </text>
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1574" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="142.24133251037597">
                                                                <tspan id="SvgjsTspan1575">
                                                                    125
                                                                </tspan>
                                                                <title>
                                                                    125
                                                                </title>
                                                            </text>
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1577" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="197.61199876556395">
                                                                <tspan id="SvgjsTspan1578">
                                                                    120
                                                                </tspan>
                                                                <title>
                                                                    120
                                                                </title>
                                                            </text>
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1580" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="252.98266502075194">
                                                                <tspan id="SvgjsTspan1581">
                                                                    115
                                                                </tspan>
                                                                <title>
                                                                    115
                                                                </title>
                                                            </text>
                                                            <text className="apexcharts-text apexcharts-yaxis-label" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={400} id="SvgjsText1583" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" x={20} y="308.3533312759399">
                                                                <tspan id="SvgjsTspan1584">
                                                                    110
                                                                </tspan>
                                                                <title>
                                                                    110
                                                                </title>
                                                            </text>
                                                        </g>
                                                        <g className="apexcharts-yaxis-title" id="SvgjsG1585">
                                                            <text className="apexcharts-text apexcharts-yaxis-title-text" dominantBaseline="auto" fill="#9aa0ac" fontFamily="Helvetica, Arial, sans-serif" fontSize="11px" fontWeight={900} id="SvgjsText1586" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} textAnchor="end" transform="rotate(-90 -12.746417999267578 164.0933380126953)" x="4.80908203125" y="168.42666563796996">
                                                                Hours
                                                            </text>
                                                        </g>
                                                    </g>
                                                    <rect fill="#fefefe" height={0} id="SvgjsRect1450" opacity={1} rx={0} ry={0} stroke="none" strokeDasharray={0} strokeWidth={0} width={0} x={0} y={0}>
                                                    </rect>
                                                </svg>
                                                <div className="apexcharts-legend" style={{ maxHeight: '182.5px' }}>
                                                </div>
                                                <div className="apexcharts-tooltip apexcharts-theme-dark">
                                                    <div className="apexcharts-tooltip-title" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                                                    </div>
                                                    <div className="apexcharts-tooltip-series-group" style={{ order: 1 }}>
                                                        <span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(151, 109, 160)' }}>
                                                        </span>
                                                        <div className="apexcharts-tooltip-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                                                            <div className="apexcharts-tooltip-y-group">
                                                                <span className="apexcharts-tooltip-text-y-label">
                                                                </span>
                                                                <span className="apexcharts-tooltip-text-y-value">
                                                                </span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-goals-group">
                                                                <span className="apexcharts-tooltip-text-goals-label">
                                                                </span>
                                                                <span className="apexcharts-tooltip-text-goals-value">
                                                                </span>
                                                            </div>
                                                            <div className="apexcharts-tooltip-z-group">
                                                                <span className="apexcharts-tooltip-text-z-label">
                                                                </span>
                                                                <span className="apexcharts-tooltip-text-z-value">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                                                    <div className="apexcharts-xaxistooltip-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                                    <div className="apexcharts-yaxistooltip-text">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </apx-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-woo-c171 className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div _ngcontent-woo-c171 className="card">
                            <div _ngcontent-woo-c171 className="header">
                                <h2 _ngcontent-woo-c171>
                                    Project Hours details
                                </h2>
                            </div>
                            <div _ngcontent-woo-c171 className="body">
                                <div _ngcontent-woo-c171 className="row">
                                    <div _ngcontent-woo-c171 className="col-sm-12">
                                        <div _ngcontent-woo-c171 className="d-flex justify-content-between mt-2 text-dark mb-2">
                                            <div _ngcontent-woo-c171>
                                                <span _ngcontent-woo-c171 className="fw-bold">
                                                    3487
                                                </span>
                                                Hours
                                            </div>
                                            <div _ngcontent-woo-c171>
                                                Expected: 10000
                                            </div>
                                        </div>
                                        <div _ngcontent-woo-c171 className="progress traffic-bar mb-2">
                                            <div _ngcontent-woo-c171 className="progress-bar bg-red" style={{ width: '33%' }}>
                                            </div>
                                            <div _ngcontent-woo-c171 className="progress-bar bg-blue" style={{ width: '25%' }}>
                                            </div>
                                            <div _ngcontent-woo-c171 className="progress-bar bg-amber" style={{ width: '12%' }}>
                                            </div>
                                            <div _ngcontent-woo-c171 className="progress-bar bg-purple" style={{ width: '10%' }}>
                                            </div>
                                            <div _ngcontent-woo-c171 className="progress-bar bg-green" style={{ width: '7%' }}>
                                            </div>
                                            <div _ngcontent-woo-c171 className="progress-bar bg-cyan" style={{ width: '13%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div _ngcontent-woo-c171 className="col-sm-12">
                                        <div _ngcontent-woo-c171 className="search-traffic">
                                            <div _ngcontent-woo-c171 className="d-flex justify-content-between mb-1 mt-2">
                                                <div _ngcontent-woo-c171 className="fw-bold">
                                                    Project Name
                                                </div>
                                                <div _ngcontent-woo-c171 className="fw-bold">
                                                    Completed
                                                </div>
                                            </div>
                                            <div _ngcontent-woo-c171 className="d-flex justify-content-between traffic-source">
                                                <div _ngcontent-woo-c171>
                                                    <span _ngcontent-woo-c171>
                                                        <i _ngcontent-woo-c171 className="fa fa-circle col-red msr-2">
                                                        </i>
                                                    </span>
                                                    Angular website
                                                </div>
                                                <div _ngcontent-woo-c171>
                                                    33%
                                                </div>
                                            </div>
                                            <div _ngcontent-woo-c171 className="d-flex justify-content-between traffic-source">
                                                <div _ngcontent-woo-c171>
                                                    <span _ngcontent-woo-c171>
                                                        <i _ngcontent-woo-c171 className="fa fa-circle col-blue msr-2">
                                                        </i>
                                                    </span>
                                                    Shopping App
                                                </div>
                                                <div _ngcontent-woo-c171>
                                                    25%
                                                </div>
                                            </div>
                                            <div _ngcontent-woo-c171 className="d-flex justify-content-between traffic-source">
                                                <div _ngcontent-woo-c171>
                                                    <span _ngcontent-woo-c171>
                                                        <i _ngcontent-woo-c171 className="fa fa-circle col-amber msr-2">
                                                        </i>
                                                    </span>
                                                    ERP system
                                                </div>
                                                <div _ngcontent-woo-c171>
                                                    12%
                                                </div>
                                            </div>
                                            <div _ngcontent-woo-c171 className="d-flex justify-content-between traffic-source">
                                                <div _ngcontent-woo-c171>
                                                    <span _ngcontent-woo-c171>
                                                        <i _ngcontent-woo-c171 className="fa fa-circle col-purple msr-2">
                                                        </i>
                                                    </span>
                                                    React admin panel
                                                </div>
                                                <div _ngcontent-woo-c171>
                                                    10%
                                                </div>
                                            </div>
                                            <div _ngcontent-woo-c171 className="d-flex justify-content-between traffic-source">
                                                <div _ngcontent-woo-c171>
                                                    <span _ngcontent-woo-c171>
                                                        <i _ngcontent-woo-c171 className="fa fa-circle col-green msr-2">
                                                        </i>
                                                    </span>
                                                    Api Integration
                                                </div>
                                                <div _ngcontent-woo-c171>
                                                    7%
                                                </div>
                                            </div>
                                            <div _ngcontent-woo-c171 className="d-flex justify-content-between traffic-source">
                                                <div _ngcontent-woo-c171>
                                                    <span _ngcontent-woo-c171>
                                                        <i _ngcontent-woo-c171 className="fa fa-circle col-cyan msr-2">
                                                        </i>
                                                    </span>
                                                    Email Marketing
                                                </div>
                                                <div _ngcontent-woo-c171>
                                                    13%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div _ngcontent-woo-c171 className="row clearfix">
                    <div _ngcontent-woo-c171 className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div _ngcontent-woo-c171 className="card">
                            <div _ngcontent-woo-c171 className="header">
                                <h2 _ngcontent-woo-c171>
                                    Invoices
                                </h2>
                            </div>
                            <div _ngcontent-woo-c171 className="tableBody">
                                <div _ngcontent-woo-c171 className="responsive_table">
                                    <table _ngcontent-woo-c171 className="table table-hover">
                                        <thead _ngcontent-woo-c171>
                                            <tr _ngcontent-woo-c171>
                                                <th _ngcontent-woo-c171>
                                                    Invoice No
                                                </th>
                                                <th _ngcontent-woo-c171>
                                                    Generated By
                                                </th>
                                                <th _ngcontent-woo-c171>
                                                    Due Date
                                                </th>
                                                <th _ngcontent-woo-c171>
                                                    Status
                                                </th>
                                                <th _ngcontent-woo-c171>
                                                    Total
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody _ngcontent-woo-c171>
                                            <tr _ngcontent-woo-c171>
                                                <td _ngcontent-woo-c171>
                                                    <a _ngcontent-woo-c171 href="#/admin/accounts/invoice">
                                                        #IN7865
                                                    </a>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <img _ngcontent-woo-c171 alt="" className="user_img" src="assets/images/user/user1.jpg" />
                                                    John Doe
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    12/05/2016
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <div _ngcontent-woo-c171 className="badge badge-solid-green">
                                                        Paid
                                                    </div>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    $500
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c171>
                                                <td _ngcontent-woo-c171>
                                                    <a _ngcontent-woo-c171 href="#/admin/accounts/invoice">
                                                        #IN2301
                                                    </a>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <img _ngcontent-woo-c171 alt="" className="user_img" src="assets/images/user/user2.jpg" />
                                                    Sarah Smith
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    31/03/2016
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <div _ngcontent-woo-c171 className="badge badge-solid-red">
                                                        Unpaid
                                                    </div>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    $372
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c171>
                                                <td _ngcontent-woo-c171>
                                                    <a _ngcontent-woo-c171 href="#/admin/accounts/invoice">
                                                        #IN7239
                                                    </a>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <img _ngcontent-woo-c171 alt="" className="user_img" src="assets/images/user/user3.jpg" />
                                                    Airi Satou
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    14/04/2017
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <div _ngcontent-woo-c171 className="badge badge-solid-orange">
                                                        Partially Paid
                                                    </div>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    $1038
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c171>
                                                <td _ngcontent-woo-c171>
                                                    <a _ngcontent-woo-c171 href="#/admin/accounts/invoice">
                                                        #IN1482
                                                    </a>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <img _ngcontent-woo-c171 alt="" className="user_img" src="assets/images/user/user4.jpg" />
                                                    Angelica Ramos
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    11/08/2017
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <div _ngcontent-woo-c171 className="badge badge-solid-green">
                                                        Paid
                                                    </div>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    $872
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c171>
                                                <td _ngcontent-woo-c171>
                                                    <a _ngcontent-woo-c171 href="#/admin/accounts/invoice">
                                                        #IN8526
                                                    </a>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <img _ngcontent-woo-c171 alt="" className="user_img" src="assets/images/user/user5.jpg" />
                                                    Ashton Cox
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    15/02/2018
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <div _ngcontent-woo-c171 className="badge badge-solid-red">
                                                        Unpaid
                                                    </div>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    $2398
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c171>
                                                <td _ngcontent-woo-c171>
                                                    <a _ngcontent-woo-c171 href="#/admin/accounts/invoice">
                                                        #IN2473
                                                    </a>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <img _ngcontent-woo-c171 alt="" className="user_img" src="assets/images/user/user6.jpg" />
                                                    Cara Stevens
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    28/01/2017
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <div _ngcontent-woo-c171 className="badge badge-solid-green">
                                                        Paid
                                                    </div>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    $834
                                                </td>
                                            </tr>
                                            <tr _ngcontent-woo-c171>
                                                <td _ngcontent-woo-c171>
                                                    <a _ngcontent-woo-c171 href="#/admin/accounts/invoice">
                                                        #IN7366
                                                    </a>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <img _ngcontent-woo-c171 alt="" className="user_img" src="assets/images/user/user7.jpg" />
                                                    Jacob Ryan
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    11/03/2017
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    <div _ngcontent-woo-c171 className="badge badge-solid-orange">
                                                        Partially Paid
                                                    </div>
                                                </td>
                                                <td _ngcontent-woo-c171>
                                                    $147
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-woo-c171 className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div _ngcontent-woo-c171 className="card">
                            <div _ngcontent-woo-c171 className="header">
                                <h2 _ngcontent-woo-c171>
                                    Customer Review
                                </h2>
                            </div>
                            <div _ngcontent-woo-c171 className="body">
                                <div _ngcontent-woo-c171 className="review-block">
                                    <div _ngcontent-woo-c171 className="row">
                                        <div _ngcontent-woo-c171 className="review-img">
                                            <img _ngcontent-woo-c171 alt="" src="assets/images/user/user1.jpg" />
                                        </div>
                                        <div _ngcontent-woo-c171 className="col">
                                            <h6 _ngcontent-woo-c171 className="m-b-0 m-t-5">
                                                Alis Smith
                                                <span _ngcontent-woo-c171 className="float-end m-r-10 text-muted">
                                                    a week ago
                                                </span>
                                            </h6>
                                            <i _ngcontent-woo-c171 className="material-icons">
                                                star
                                            </i>
                                            <i _ngcontent-woo-c171 className="material-icons">
                                                star
                                            </i>
                                            <i _ngcontent-woo-c171 className="material-icons">
                                                star
                                            </i>
                                            <i _ngcontent-woo-c171 className="material-icons">
                                                star_half
                                            </i>
                                            <i _ngcontent-woo-c171 className="material-icons">
                                                star_border
                                            </i>
                                            <p _ngcontent-woo-c171 className="m-t-10 m-b-15 text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel rutrum ex, at ornare mi. In quis scelerisque dui, eget rhoncus orci. Fusce et sodales ipsum.
                                            </p>
                                            <a _ngcontent-woo-c171 href="#!">
                                                <i _ngcontent-woo-c171 className="material-icons m-r-10">
                                                    thumb_up
                                                </i>
                                            </a>
                                            <a _ngcontent-woo-c171 href="#!">
                                                <i _ngcontent-woo-c171 className="material-icons m-r-10 col-red">
                                                    thumb_down
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                    <div _ngcontent-woo-c171 className="row">
                                        <div _ngcontent-woo-c171 className="review-img">
                                            <img _ngcontent-woo-c171 alt="" src="assets/images/user/user2.jpg" />
                                        </div>
                                        <div _ngcontent-woo-c171 className="col">
                                            <h6 _ngcontent-woo-c171 className="m-b-0 m-t-5">
                                                John Dio
                                                <span _ngcontent-woo-c171 className="float-end m-r-10 text-muted">
                                                    a week ago
                                                </span>
                                            </h6>
                                            <i _ngcontent-woo-c171 className="material-icons">
                                                star
                                            </i>
                                            <i _ngcontent-woo-c171 className="material-icons">
                                                star_half
                                            </i>
                                            <i _ngcontent-woo-c171 className="material-icons">
                                                star_border
                                            </i>
                                            <i _ngcontent-woo-c171 className="material-icons">
                                                star_border
                                            </i>
                                            <i _ngcontent-woo-c171 className="material-icons">
                                                star_border
                                            </i>
                                            <p _ngcontent-woo-c171 className="m-t-10 m-b-15 text-muted">
                                                Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida. Suspendisse ullamcorper justo vel porta imperdiet.
                                            </p>
                                            <a _ngcontent-woo-c171 href="#!">
                                                <i _ngcontent-woo-c171 className="material-icons m-r-10">
                                                    thumb_up
                                                </i>
                                            </a>
                                            <a _ngcontent-woo-c171 href="#!">
                                                <i _ngcontent-woo-c171 className="material-icons m-r-10 col-red">
                                                    thumb_down
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                    <div _ngcontent-woo-c171 className="text-center m-b-5">
                                        <a _ngcontent-woo-c171 className="b-b-primary text-primary" href="#!">
                                            View all Customer Reviews
                                        </a>
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


