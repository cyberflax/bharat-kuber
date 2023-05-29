import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CalenderComponent } from "../dashboard/calender/calendar";
import { AttendanceComponent } from "../dashboard/attendance/Attendancee";
import { LeavesComponent } from "../dashboard/My-leaves/Leavees";
import { ChatComponent } from "../dashboard/Chat/chatt";
import { ProjectComponent } from "../dashboard/My-project/Projeect"
import { TaskComponent } from "../dashboard/My-task/Mytask"
import { TeamComponent } from "../dashboard/My-team/Teaam"
import { EmployeDashBord } from "../dashboard/mainsection/employemain";
import { SettingComponent } from "../dashboard/Setting-Comp/setng";
import { ContactComponent } from "../dashboard/contact/Contacts";
import { ComposeComponent } from "../dashboard/compose/Composee";
import { InboxComponent } from "../dashboard/inbox/Inboxx";
import { ReadmailComponent } from "../dashboard/readmail/ReadEmail";
import { BillingClient } from "../client dashboard/billingg";
import { ClientChat } from "../client dashboard/chatt";
import { DashboardClient } from "../client dashboard/Daashboard";
import { Myprojeect } from "../client dashboard/Myprojeect";
import { ProjectInfo } from "../client dashboard/projectinfo";
import { ClientSetting } from "../client dashboard/settinggg";
import { TeckitDetails } from "../client dashboard/ticketdetailss";
import { Tickket } from "../client dashboard/tickett";
import Dashmain from "./firstlogpage";
import Dashboard from "../kuber/Dashboard";
import Dashboard2 from "../kuber/dashboard/Dashbord2";
import Invoice from "../kuber/account/Invoice";
import Addpayment from "../kuber/account/Addpayment";
import Allpayment from "../kuber/account/Allpayment";
// import Attendance from "../kuber/attandance/Attandance";
import Employ from "../kuber/attandance/Employ";
import Addclient from "../kuber/client/Addclient";
import Allclient from "../kuber/client/Allclient";
import Editclient from "../kuber/client/Editclient";
import Today from "../kuber/attandance/Today";
import Addemploye from "../kuber/employ/Addemploye";
import Allemploye from "../kuber/employ/Allemploye";
import Editemploye from "../kuber/employ/Editemploye";
import Employeprofile from "../kuber/employ/Employeprofile";
import Addholiday from "../kuber/holidays/Add-holiday";
import Allholiday from "../kuber/holidays/All-holiday";
import Editholiday from "../kuber/holidays/Edit-holiday";
import Candidate from "../kuber/job/Candidate";
import Job from "../kuber/job/Job";
import Resumes from "../kuber/job/Resumes";
import Shortlist from "../kuber/job/Shortlist";
import Leavesbalance from "../kuber/leaves/Leaves-balance";
import LeaveRequest from "../kuber/leaves/Leave-Request";
import Leavetype from "../kuber/leaves/Leave-type";
import Employsalary from "../kuber/payroll/Employ-salary";
import Payslip from "../kuber/payroll/Payslip";
import Addproject from "../kuber/project/Add-project";
import Allproject from "../kuber/project/All-project";
import Estimate from "../kuber/project/Estimate";
import Projectdetail from "../kuber/project/Projectdetail";
import Expense from "../kuber/report/Expense";
import Leavereport from "../kuber/report/Leavereport";
import Leads from "../kuber/Leads";
import Chat from "../kuber/apps/Chat";
import Contact from "../kuber/apps/Contact";
import Dragdrop from "../kuber/apps/Dragdrop";
import Support from "../kuber/apps/Support";
import Forget from "../kuber/author/Forget";
import Locked from "../kuber/author/Locked";
import Apex from "../kuber/charts/Apex";
import Model from "../kuber/ui/Model";
import Echart from "../kuber/charts/Echart";
import Gouge from "../kuber/charts/Gouge";
import Ngx from "../kuber/charts/Ngx";
import Compose from "../kuber/email/Compose";
import Inbox from "../kuber/email/Inbox";
import Mail from "../kuber/email/Mail";
import Editer from "../kuber/Form/Editer";
import Formex from "../kuber/Form/Formex";
import Formvalid from "../kuber/Form/Formvalid";
import Wizard from "../kuber/Form/Wizard";
import Material from "../kuber/Icon/material";
import Google from "../kuber/maps/Google";
import Gallary from "../kuber/media/Gallary";
import Second from "../kuber/multilevel/Second";
import First from "../kuber/multilevel/First";
import Third from "../kuber/multilevel/Third";
import Timeline from "../kuber/timeline/Timeline";
import Timeline1 from "../kuber/timeline/Timeline1";
import Chart1 from "../kuber/widget/Chart1";
import Calander from "../kuber/Calander";
import Contact1 from "../kuber/Contact1";
import Font from "../kuber/Icon/Font";
import Material1 from "../kuber/tables/Material1";
import Task from "../kuber/Task";
import Leaveform from "../kuber/leaves/Leaveform";
import Addform from "../kuber/leaves/Addform";
import Main from "../kuber/dashboard/Main";
import Atttendance from "../kuber/attandance/Attandance";
import Page404 from "../kuber/author/Page404";
import Page500 from "../kuber/author/Page500";
import Signin from "../kuber/author/Signin";
import Signup from "../kuber/author/Signup";
import { AdminCompose } from "../kuber/email/Compose";
import AdminInbox from "../kuber/email/Inbox";
import AdminMail from "../kuber/email/Mail";
import Data from "../kuber/widget/Data";
import AdminTask from "../kuber/Task";
import Signform from "../kuber/author/Signform";


export function MainComponent() {
    return (
        // <BrowserRouter>
        <div>
            
            <Routes>
                <Route path="/" element={<Dashmain />} />
                <Route path="/Attendance" element={<AttendanceComponent />} />
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
                <Route path="/Clientticket" element={<Tickket />} />
                <Route path="/logout" element={<Dashmain />} />


                <Route exact path="/Main" element={<Main />} />

                <Route exact path="/Dashboard" element={<Dashboard />} />
                <Route exact path="/Dashboard2" element={<Dashboard2 />} />
                <Route exact path="/Invoice" element={<Invoice />} />
                <Route exact path="/Addpayment" element={<Addpayment />} />
                <Route exact path="/Allpayment" element={<Allpayment />} />
                <Route exact path="/Atttendance" element={<Atttendance />} />
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
                <Route exact path="/Payslip" element={<Payslip/>} />
                <Route exact path="/Addproject" element={<Addproject />} />
                <Route exact path="/Allproject" element={<Allproject />} />
                <Route exact path="/Payslip" element={<Payslip />} />
                <Route exact path="/Estimate" element={<Estimate />} />
                <Route exact path="/Projectdetail" element={<Projectdetail />} />
                <Route exact path="/Expense" element={<Expense />} />
                <Route exact path="/Leavereport" element={<Leavereport />} />
                <Route exact path="/Leads" element={<Leads />} />
                <Route exact path="/Chat" element={<Chat />} />
                <Route exact path="/Widgetdata" element={<Data/>} />
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
                <Route exact path="/Admincompose" element={<AdminCompose />} />
                <Route exact path="/AdminInbox" element={<AdminInbox />} />
                <Route exact path="/AdminMail" element={<AdminMail />} />

                <Route exact path="/Editer" element={<Editer />} />
                <Route exact path="/Formex" element={<Formex />} />
                <Route exact path="/Formvalid" element={<Formvalid />} />
                <Route exact path="/Wizard" element={<Wizard />} />
                <Route exact path="/Material" element={<Material />} />
                <Route exact path="/Google" element={<Google />} />
                <Route exact path="/Gallary" element={<Gallary />} />
                <Route exact path="/Second" element={<Second />} />
                <Route exact path="/First" element={<First />} />
                <Route exact path="/Third" element={<Third />} />
                <Route exact path="/Material1" element={<Material1 />} />
                <Route exact path="/Timeline" element={<Timeline />} />
                <Route exact path="/Timeline1" element={<Timeline1 />} />
                <Route exact path="/Chart1" element={<Chart1 />} />
                <Route exact path="/Calander" element={<Calander />} />
                <Route exact path="/Contact1" element={<Contact1 />} />
                <Route exact path="/Font" element={<Font />} />
                <Route exact path="/Forget" element={<Forget />} />
                <Route exact path="/AdminTask" element={<AdminTask />} />
                <Route exact path="/Leaveform" element={<Leaveform />} />
                <Route exact path="/Addform" element={<Addform />} />
                <Route exact path="/Signform" element={<Signform />} />
                {/* <Route exact path="/Editattandance" element={<Editattandance />} /> */}



            </Routes>
        </div>

        // </BrowserRouter>
    )
}
