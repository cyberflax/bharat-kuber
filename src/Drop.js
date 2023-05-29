import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
// import a1 from "./kuber"./kuber/img/a2.png";
// import a3 from "./kuber/img/a3.png";
// import a4 from "./kuber/img/a4.jpg";
// import a5 from "./kuber/img/a5.png";
// import a6 from "./kuber/img/a6.png";
// import a7 from "./kuber/img/a7.png";
// import a8 from "./kuber/img/a8.png";
// import a9 from "./kuber/img/a9.png";
// import a10 from "./kuber/img/a10.png";
// import a11 from "./kuber/img/a11.png";
// import a12 from "./kuber/img/a12.png";
// import a13 from "./kuber/img/a13.png";
// import a14 from "./kuber/img/a14.png";
// import a15 from "./kuber/img/a15.png";
// import a16 from "./kuber/img/a16.png";
// import a17 from "./kuber/img/a17.webp";
// import a18 from "./kuber/img/a18.png";
// import a19 from "./kuber/img/a19.webp";
// import a20 from "./kuber/img/a20.jpg";
// import a21 from "./kuber/img/a21.png";
// import a22 from "./kuber/img/a22.png";
// import a23 from "./kuber/img/a23.png";
// import a24 from "./kuber/img/a24.jpg";
// import a25 from "./kuber/img/a25.png";
// import a26 from "./kuber/img/a26.png";
// import a27 from "./kuber/img/a27.png";
// import a28 from "./kuber/img/a28.jpg";
// import a29 from "./kuber/img/a29.png";

function Drop() {
  return (<>
   <div >
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0" >
        <Accordion.Header  >Dashboard</Accordion.Header>
        <Accordion.Body>
       
        <Dropdown.Item ><Link to="/Main" className='text-center link1'> Dashboard1</Link ></Dropdown.Item>
        {/* <Dropdown.Item ><Link to="/Dashboard2"className='link1'>Dashboard2</Link ></Dropdown.Item> */}
        

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Project</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Addproject" className='link1'>Add-project</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Allproject"className='link1'>All-project</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Estimate"className='link1'>Estimate</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/ProjectDetail"className='link1'>Project-Details</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="2">
        <Accordion.Header>Employees</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Addemploye" className='link1'>Add-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Allemploye"className='link1'>All-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editemploye"className='link1'>Edite-Employe</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Employeprofile"className='link1'>Employe-Profile</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="3">
        <Accordion.Header>Leave Management</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/LeaveRequest" className='link1'>All Leave Requests</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Leavesbalance"className='link1'>Leave Balance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Leavetype"className='link1'>Leave Types</Link ></Dropdown.Item>
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Holidays</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allholiday" className='link1'>All Holidays</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addholiday"className='link1'>Add Holiday</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editholiday"className='link1'>Edit Holiday</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Attendance</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Today" className='link1'>Today's Attendance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Employ"className='link1'>Employee Attendance</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Attendance"className='link1'>Attendance Sheet</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Clients</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allclient" className='link1'>All Clients</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addclient"className='link1'>Add Client</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editclient"className='link1'>Edit Client</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Accounts</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Allpayment" className='link1'>All Payments</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Addpayment"className='link1'>Add Payment</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Invoice"className='link1'>Invoice</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Payroll</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Employsalary" className='link1'>Employee Salary</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Payslip"className='link1'>Payslip</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Leaders</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Leads" className='link1'> Leaders</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>Jobs</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Job" className='link1'>Jobs List</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Resumes"className='link1'>Resumes</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Candidate"className='link1'>Candidates</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Shortlist"className='link1'>Shortlist Candidates</Link ></Dropdown.Item>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header>Reports</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Leavereport" className='link1'>Leave Report</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Expense"className='link1'>Expense Report</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/"className='link1'>Apps</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header><Link to="/Calander" className='link1'>calendar <span _ngcontent-sas-c132 className="badge bg-blue sidebar-badge float-end ng-star-inserted">
                                        New
                                      </span></Link ></Accordion.Header>
        
      </Accordion.Item>
      <Accordion.Item eventKey="13">
        <Accordion.Header><Link to="/Task" className='link1'>Task</Link ></Accordion.Header>
      
        </Accordion.Item>
      <Accordion.Item eventKey="14">
        <Accordion.Header><Link to="/Contact1" className='link1'>Contacts</Link ></Accordion.Header>
      
      </Accordion.Item>
      <Accordion.Item eventKey="15">
        <Accordion.Header> Email</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Inbox" className='link1'>Inbox</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Compose"className='link1'>Compose</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Mail"className='link1'> Read Email</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="16">
        <Accordion.Header>More Apps <span _ngcontent-sas-c132 className="badge bg-orange sidebar-badge float-end ng-star-inserted">
                                        4
                                      </span></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/" className='link1'> Chat</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Contact Grid</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Support</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/"className='link1'>Drag &amp; Drop</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="17">
        <Accordion.Header>Widgets</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Chart1" className='link1'> Chart Widget</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Data1" className='link1'> Data Widget</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/" className='link1'> Components</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="18">
        <Accordion.Header>User Interface (UI)</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Alert" className='link1'> Alerts</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Budge" className='link1'> Badges</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Chips" className='link1'> Chips</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Model"className='link1'> Modal</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Button"className='link1'>  Buttons</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Expansion"className='link1'> Expansion Panel</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Bottom"className='link1'> Bottom Sheet</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Dialogs"className='link1'> Dialogs</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Cards"className='link1'> Cards</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Labels"className='link1'> Labels</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/List1"className='link1'> List Group</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Snack"className='link1'> Snackbar</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Preload"className='link1'> Preloaders</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Progress"className='link1'> Progress Bars</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Tabs"className='link1'> Tabs</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Typography"className='link1'> Typography</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/Helper"className='link1'> Helper Classes</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="19">
        <Accordion.Header> Forms</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/formcantrol" className='link1'> Form Controls</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Advance" className='link1'> Advanced Controls</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Formex" className='link1'> Form Examples</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Formvalid" className='link1'> Form Validation</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Wizard" className='link1'> Form Wizard</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Editer" className='link1'>  Editors</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="20">
        <Accordion.Header>Tables</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Basic" className='link1'> Basic Tables</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Material1" className='link1'> Material Tables</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Ngx" className='link1'> ngx-datatable</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="21">
        <Accordion.Header> Medias</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Gallary" className='link1'> Image Gallery</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="22">
        <Accordion.Header> Charts<span _ngcontent-sas-c132 className="badge bg-green sidebar-badge float-end ng-star-inserted">
                                        7
                                      </span></Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Echart" className='link1'> Echart</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Apex" className='link1'>  Apex</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Chart" className='link1'>ChartJS</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Ngx" className='link1'>Ngx-Charts</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Gouge" className='link1'>Gauge</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="23">
        <Accordion.Header> Timeline</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Timeline" className='link1'> Timeline 1</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Timeline1" className='link1'> Timeline 2</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="24">
        <Accordion.Header> Icons</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Material" className='link1'> Material Icons</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Font" className='link1'> Font Awesome</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="25">
        <Accordion.Header> Authentication</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Signin" className='link1'> Sign In</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Signup" className='link1'> Sign Up</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Forget" className='link1'> Forgot Password</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Locked" className='link1'> Locked</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Page404" className='link1'> 404 - Not Found</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Page500" className='link1'> 500 - Server Error</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="26">
        <Accordion.Header>  Extra Pages</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Profile1" className='link1'>  Profile</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Princing" className='link1'> Pricing</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Invoice1" className='link1'> Invoice</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Faqs" className='link1'>  Faqs</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Blanck" className='link1'>Blank Page</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="27">
        <Accordion.Header>Maps</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/Google" className='link1'>Google Map</Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="28">
        <Accordion.Header>Multi level Menu</Accordion.Header>
        <Accordion.Body>
        <Dropdown.Item ><Link to="/First" className='link1'>First</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/First" className='link1'> Second</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Second" className='link1'>Second 1</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Second" className='link1'> Second 2</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Third" className='link1'>third 1</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to="/Third" className='link1'>third </Link ></Dropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Dropdown.Item ><Link to="/" className='link1'>Log out</Link ></Dropdown.Item>
        
    </Accordion>
    </div>
    </>
    
  );
}

export default Drop;