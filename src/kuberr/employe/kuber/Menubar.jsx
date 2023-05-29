import React from 'react';
import {CDBSidebar,CDBSidebarHeader,} from 'cdbreact';


const Menubar = () => {
return (
<div
style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
>
<CDBSidebar textColor="#333" backgroundColor="#fff">
<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
<a
href="/"
className="text-decoration-none"
style={{ color: 'inherit' }}
>
Cyber-Instant
</a>
</CDBSidebarHeader>


</CDBSidebar>
</div>
);
};
export default Menubar;