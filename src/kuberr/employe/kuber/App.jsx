import React from "react";
// import "./adminone.css"
// import "./adminthree.css"
// import "./adminfour.css"
// import "./admintwo.css"
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Signup from "./author/Signup";
import Forget from "./author/Forget";
import Dashboard from "./Dashboard";
import Dashboard2 from "./dashboard/Dashbord2";
import Main from "./dashboard/Main";
import Estimate from "./project/Estimate";
import Projectdetail from "./project/Projectdetail";
import Expense from "./report/Expense";
import Leavereport from "./report/Leavereport";
import Leads from "./Leads";
import Chat from "./apps/Chat";
import Contact from "./apps/Contact";
import Dragdrop from "./apps/Dragdrop";
import Support from "./apps/Support";
import Locked from "./author/Locked";
import Page404 from "./author/Page404";
import Page500 from "./author/Page500";
import Signin from "./author/Signin";
import Apex from "./charts/Apex";
import Echart from "./charts/Echart";
import Gouge from "./charts/Gouge";
import Ngx from "./charts/Ngx";
import Compose from "./email/Compose";
import Inbox from "./email/Inbox";
import Mail from "./email/Mail";
import Editer from "./Form/Editer";
import Formcantrol from "./Form/Formcantrol";
import Formex from "./Form/Formex";
import Formvalid from "./Form/Formvalid";
import Wizard from "./Form/Wizard";
import Font from "./Icon/Font";
import Material from "./Icon/material";
import Google from "./maps/Google";
import Gallary from "./media/Gallary";
import Second from "./multilevel/Second";
import First from "./multilevel/First";
import Third from "./multilevel/Third";
import Basic from "./tables/Basic";
import Material1 from "./tables/Material1";
import Timeline from "./timeline/Timeline";
import Timeline1 from "./timeline/Timeline1";
import Data1 from "./widget/Data";
import Calander from "./Calander";
import Contact1 from "./Contact1";
import Employsalary from "./payroll/Employ-salary";
import Payslip from "./payroll/Payslip";
import Addproject from "./project/Add-project";
import Allproject from "./project/All-project";
import LeaveRequest from "./leaves/Leave-Request";
import Leavetype from "./leaves/Leave-type";
import Addpayment from "./account/Addpayment";
import Invoice from "./account/Invoice";
import Attendance from "./attandance/Attandance";
import Employ from "./attandance/Employ";
import Today from "./attandance/Today";
import Addclient from "./client/Addclient";
import Allclient from "./client/Allclient";
import Editclient from "./client/Editclient";
import Addemploye from "./employ/Addemploye";
import Allemploye from "./employ/Allemploye";
import Editemploye from "./employ/Editemploye";
import Employeprofile from "./employ/Employeprofile";
import Addholiday from "./holidays/Add-holiday";
import Allholiday from "./holidays/All-holiday";
import Editholiday from "./holidays/Edit-holiday";
import Candidate from "./job/Candidate";
import Job from "./job/Job";
import Resumes from "./job/Resumes";
import Shortlist from "./job/Shortlist";
import Leavesbalance from "./leaves/Leaves-balance";
import Allpayment from "./account/Allpayment";
import Task from "./Task";
import Model from "./ui/Model";
import Chart1 from "./widget/Chart1";
import Leaveform from "./leaves/Leaveform";
import Addform from "./leaves/Addform";
import Editattandance from "./attandance/Attandance";
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { CalenderComponent } from "../dashboard/calender/calendar";
// import { AttendanceComponent } from "../dashboard/attendance/Attendancee";
// import { LeavesComponent } from "../dashboard/My-leaves/Leavees";
// import { ChatComponent } from "../dashboard/Chat/chatt";
// import { ProjectComponent } from "../dashboard/My-project/Projeect"
// import { TaskComponent } from "../dashboard/My-task/Mytask"
// import { TeamComponent } from "../dashboard/My-team/Teaam"
// import { EmployeDashBord } from "../dashboard/mainsection/employemain";
// import { SettingComponent } from "../dashboard/Setting-Comp/setng";
// import { ContactComponent } from "../dashboard/contact/Contacts";
// import { ComposeComponent } from "../dashboard/compose/Composee";
// import { InboxComponent } from "../dashboard/inbox/Inboxx";
// import { ReadmailComponent } from "../dashboard/readmail/ReadEmail";
// import { BillingClient } from "../client dashboard/billingg";
// import { ClientChat } from "../client dashboard/chatt";
// import { DashboardClient } from "../client dashboard/Daashboard";
// import { Myprojeect } from "../client dashboard/Myprojeect";
// import { ProjectInfo } from "../client dashboard/projectinfo";
// import { ClientSetting } from "../client dashboard/settinggg";
// import { TeckitDetails } from "../client dashboard/ticketdetailss";
// import { Tickket } from "../client dashboard/tickett";
// import Dashmain from "./firstlogpage";

export default function AdminDash() {
  return (
    <>
      {/* <Bar/> */}
      {/* <Main/> */}


      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/Main" element={<Main />} />

        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/Forget" element={<Forget />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Dashboard2" element={<Dashboard2 />} />
        <Route exact path="/Invoice" element={<Invoice />} />
        <Route exact path="/Addpayment" element={<Addpayment />} />
        <Route exact path="/Allpayment" element={<Allpayment />} />
        <Route exact path="/Attendance" element={<Attendance />} />
        <Route exact path="/Employ" element={<Employ />} />
        <Route exact path="/Addclient" element={<Addclient />} />
        <Route exact path="/Allclient" element={<Allclient />} />
        <Route exact path="/Editclient" element={<Editclient />} />
        <Route exact path="/Today" element={<Today />} />
        <Route exact path="/Addemploye" element={<Addemploye />} />
        <Route exact path="/Allemploye" element={<Allemploye />} />
        <Route exact path="/Editemploye" element={<Editemploye />} />
        <Route exact path="/Employeprofile" element={<Employeprofile />} />
        <Route exact path="/Addholiday" element={<Addholiday />} />
        <Route exact path="/Allholiday" element={<Allholiday />} />
        <Route exact path="/Editholiday" element={<Editholiday />} />
        <Route exact path="/Candidate" element={<Candidate />} />
        <Route exact path="/Job" element={<Job />} />
        <Route exact path="/Resumes" element={<Resumes />} />
        <Route exact path="/Shortlist" element={<Shortlist />} />
        <Route exact path="/Leavesbalance" element={<Leavesbalance />} />
        <Route exact path="/LeaveRequest" element={<LeaveRequest />} />
        <Route exact path="/Leavetype" element={<Leavetype />} />
        <Route exact path="/Employsalary" element={<Employsalary />} />
        <Route exact path="/Payslip" element={<Payslip />} />
        <Route exact path="/Addproject" element={<Addproject />} />
        <Route exact path="/Allproject" element={<Allproject />} />
        <Route exact path="/Payslip" element={<Payslip />} />
        <Route exact path="/Estimate" element={<Estimate />} />
        <Route exact path="/Projectdetail" element={<Projectdetail />} />
        <Route exact path="/Expense" element={<Expense />} />
        <Route exact path="/Leavereport" element={<Leavereport />} />
        <Route exact path="/Leads" element={<Leads />} />
        <Route exact path="/Chat" element={<Chat />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Dragdrop" element={<Dragdrop />} />
        <Route exact path="/Support" element={<Support />} />
        <Route exact path="/Forget" element={<Forget />} />
        <Route exact path="/Locked" element={<Locked />} />
        <Route exact path="/Page404" element={<Page404 />} />
        <Route exact path="/Page500" element={<Page500 />} />
        <Route exact path="/Signin" element={<Signin />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Apex" element={<Apex />} />
        <Route exact path="/Model" element={<Model />} />
        <Route exact path="/Echart" element={<Echart />} />
        <Route exact path="/Gouge" element={<Gouge />} />
        <Route exact path="/Ngx" element={<Ngx />} />
        <Route exact path="/Compose" element={<Compose />} />
        <Route exact path="/Inbox" element={<Inbox />} />
        <Route exact path="/Mail" element={<Mail />} />

        <Route exact path="/Editer" element={<Editer />} />
        <Route exact path="/Formcantrol" element={<Formcantrol />} />
        <Route exact path="/Formex" element={<Formex />} />
        <Route exact path="/Formvalid" element={<Formvalid />} />
        <Route exact path="/Wizard" element={<Wizard />} />
        <Route exact path="/Material" element={<Material />} />
        <Route exact path="/Google" element={<Google />} />
        <Route exact path="/Gallary" element={<Gallary />} />
        <Route exact path="/Second" element={<Second />} />
        <Route exact path="/First" element={<First />} />
        <Route exact path="/Third" element={<Third />} />
        <Route exact path="/Basic" element={<Basic />} />
        <Route exact path="/Material1" element={<Material1 />} />
        <Route exact path="/Ngx" element={<Ngx />} />
        <Route exact path="/Timeline" element={<Timeline />} />
        <Route exact path="/Timeline1" element={<Timeline1 />} />
        <Route exact path="/Chart1" element={<Chart1 />} />
        <Route exact path="/Data1" element={<Data1 />} />
        <Route exact path="/Calander" element={<Calander />} />
        <Route exact path="/Contact1" element={<Contact1 />} />
        <Route exact path="/Font" element={<Font />} />
        <Route exact path="/Forget" element={<Forget />} />
        <Route exact path="/Task" element={<Task />} />
        <Route exact path="/Leaveform" element={<Leaveform />} />
        <Route exact path="/Addform" element={<Addform />} />
        <Route exact path="/Editattandance" element={<Editattandance />} />
        {/* <Route path="/Attendance" element={<AttendanceComponent />} />
        <Route path="/leaves" element={< LeavesComponent />} />
        <Route path="/chat" element={<ChatComponent />} />
        <Route path="/project" element={<ProjectComponent />} />
        <Route path="/task" element={<TaskComponent />} />
        <Route path="/Team" element={<TeamComponent />} />
        <Route path="/project" element={<ProjectComponent />} />
        <Route path="/setting" element={< SettingComponent />} />
        <Route path="/calender" element={< CalenderComponent />} />
        <Route path="/employedashboard" element={<EmployeDashBord />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/compose" element={<ComposeComponent />} />
        <Route path="/inbox" element={<InboxComponent />} />
        <Route path="/readmail" element={< ReadmailComponent />} />
        <Route path="/Billing" element={<BillingClient />} />
        <Route path="/ClientChat" element={<ClientChat />} />
        <Route path="/Clientdash" element={<DashboardClient />} />
        <Route path="/ClienProject" element={<Myprojeect />} />
        <Route path="/ProjectInfo" element={<ProjectInfo />} />
        <Route path="/ClientSetting" element={<ClientSetting />} />
        <Route path="/TeckitDetails" element={<TeckitDetails />} />
        <Route path="/Clientticket" element={<Tickket />} /> */}
        {/* <Route path="/logout" element={<Dashmain />} /> */}



      </Routes>

    </>

  );
};
