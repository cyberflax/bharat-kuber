import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { BillingClient } from "../client dashboard/billingg";
import { ClientChat } from "../client dashboard/chatt";
import { DashboardClient } from "../client dashboard/Daashboard";
import { Myprojeect } from "../client dashboard/Myprojeect";
import { ProjectInfo } from "../client dashboard/projectinfo";
import { ClientSetting } from "../client dashboard/settinggg";
import { TeckitDetails } from "../client dashboard/ticketdetailss";
import { Tickket } from "../client dashboard/tickett";




export function ClientDashBoard() {
    return (
        <>
        
                <div>
                    <Routes>
                        {/* <Route path="/" element={<DashboardClient />} /> */}
                        <Route path="/Billing" element={<BillingClient />} />
                        <Route path="/ClientChat" element={<ClientChat />} />
                        <Route path="/Clientdash" element={<DashboardClient />} />
                        <Route path="/ClienProject" element={<Myprojeect />} />
                        <Route path="/ProjectInfo" element={<ProjectInfo />} />
                        <Route path="/ClientSetting" element={<ClientSetting />} />
                        <Route path="/TeckitDetails" element={<TeckitDetails />} />
                        <Route path="/Clientticket" element={<Tickket />} />




                    </Routes>
                </div>


            {/* </BrowserRouter> */}



        </>
   )
}