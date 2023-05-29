import ReactDOM from 'react-dom';

// import "./register.css"/
import { Formik, Form, Field, ErrorMessage } from "formik"
// import axios from "axios"
import "./projectform.css"
import * as yup from "yup";


export function Projectform() {
    // const navigate = useNavigate()
    // const handleCancel = (values) => {

    // }
    return (
        <div className="container-fluid">

            <Formik
                initialValues={{
                    ProjectId: "",
                    ProjectTitle: "",
                    Department: "",
                    ProjectPriority: "",
                    Client: "",
                    Price: "",
                    Team: "",
                    StartDate: "",
                    EndDate: "",
                    WorkStatus: "",
                    Description: ""
                }}

                validationSchema={
                    yup.object({
                        ProjectId: yup.string().required("ProjectId Required"),
                        ProjectTitle: yup.string().required("ProjectId Required"),
                        Description: yup.string().required("Project Description Required"),
                        Department: yup.string().required("Select Department First"),
                        ProjectPriority: yup.string().required("Select ProjectPriority First"),
                        Client: yup.string().required("Client Name Required"),
                        Price: yup.string().required("Price Required"),
                        Team: yup.string().required(" Select Team"),
                        StartDate: yup.string().required("Select Start Date"),
                        EndDate: yup.string().required("Select Start Date"),
                        WorkStatus: yup.string().required("select work status"),
                    })
                }
                onSubmit={
                    (values) => {
                        console.log(values)
                        alert(JSON.stringify(values, null, 2))

                    }
                }


            >
                {
                    <Form className="d-flex justify-content-center col-12">

                        <div className="form-main" >
                            <div className="pro-form" style={{width:900}}>
                             

                                <div className="row">
                                    <div class="form-floating col mt-4">
                                        <Field type="text" className="form-control" name="ProjectId" placeholder="ProjectId*" />
                                        <label className="ms-3">ProjectId</label>
                                        <div className="text-danger">   <ErrorMessage name="ProjectId" /></div>
                                    </div>

                                    <div class="form-floating col mt-4">
                                        <Field type="text" className="form-control" name="ProjectTitle" placeholder="Project-Title*" />
                                        <label className="ms-3" >Project-Title</label>
                                        <div className="text-danger">   <ErrorMessage name="ProjectTitle" /></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div class="form-floating col mt-4">
                                        <Field className="form-select" as="select" name="Department">
                                            <option name="-1">select Department</option>
                                            <option name="Dep 1">Dep 1</option>
                                            <option name="Dep 2">Dep 2</option>
                                        </Field>
                                        <label className="ms-2">Department</label>
                                        <div className="text-danger">   <ErrorMessage name="Department" /></div>
                                    </div>
                                    <div class="form-floating col mt-4">

                                        <Field className="form-select" as="select" name="ProjectPriority">
                                            <option name="-1">select Project Priority</option>
                                            <option name=" Priority ">Priority 1</option>
                                            <option name="Priority-2">Priority 2</option>
                                        </Field>
                                        <label className="ms-2">Project Priority</label>
                                        <div className="text-danger">   <ErrorMessage name="ProjectPriority" /></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="form-floating col mt-4">
                                        <Field type="text" className="form-control" name="Client" placeholder="Client*" />
                                        <label className="ms-3">Client</label>
                                        <div className="text-danger">   <ErrorMessage name="Client" /></div>
                                    </div>

                                    <div class="form-floating col mt-4">
                                        <Field type="text" className="form-control" name="Price" placeholder="Price*" />
                                        <label className="ms-3" >Price</label>
                                        <div className="text-danger">   <ErrorMessage name="Price" /></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="form-floating col mt-4">
                                        <Field type="date" className="form-control" name="StartDate" placeholder="StartDate" />
                                        <label className="ms-3">Project StartDate</label>
                                        <div className="text-danger">   <ErrorMessage name="StartDate" /></div>
                                    </div>
                                    <div class="form-floating col mt-4">
                                        <Field type="date" className="form-control" name="EndDate" placeholder="EndDate" />
                                        <label className="ms-2">Project EndDate</label>
                                        <div className="text-danger">   <ErrorMessage name="EndDate" /></div>
                                    </div>


                                </div>
                                <div class="form-floating col mt-4">

                                    <Field className="form-select" as="select" name="Team">
                                        <option name="-1">Team</option>
                                        <option name="Team-1">Team 1</option>
                                        <option name="Team-2">Team 2</option>
                                    </Field>
                                    <label className="">Team</label>
                                    <div className="text-danger">   <ErrorMessage name="Team" /></div>
                                </div>
                                <div className="mt-4 d-flex ">
                                    <div className="">
                                        Work Status
                                    </div>
                                   
                                    <div className="form-check form-check-inline " style={{marginLeft:'30px'}}>
                                        <label label className="form-check-label" for="inlineRadio6">
                                    <Field type="radio" name="WorkStatus" value="Two" />
                                     <span style={{marginLeft:'50px'}}> Active</span>
                                    </label>             
                
                                        
                                    </div>
                                    <div className="form-check form-check-inline" style={{marginLeft:'30px'}}>                    
                                        <label label className="form-check-label" for="inlineRadio6">
                                    <Field type="radio" name="WorkStatus" value="Two" />
                                    <span style={{marginLeft:'50px'}}>Running</span>
                                    </label>
                                    </div>
                                    <div className="form-check form-check-inline " style={{marginLeft:'30px'}}>                                        
                                        <label label className="form-check-label" for="inlineRadio6">
                                    <Field type="radio" name="WorkStatus" value="Two" />
                                    <span style={{marginLeft:'50px'}}>Pending</span>
                                    </label>
                                    </div>
                                    <div className="form-check form-check-inline"style={{marginLeft:'30px'}}>
                                    <label label className="form-check-label" for="inlineRadio6">
                                    <Field type="radio" name="WorkStatus" value="Not Starred" />
                                    <span style={{marginLeft:'50px'}}>Not-Starred</span>
                                    </label>
                                    </div>
                                    <div className="form-check form-check-inline"style={{marginLeft:'30px'}}>
                                    <label label className="form-check-label" for="inlineRadio6">
                                    <Field type="radio" name="WorkStatus" value="Canceled" />
                                    <span style={{marginLeft:'50px'}}>Canceled</span>
                                    </label>
                                       
                                    </div>

                                </div>
                                <div className="text-danger">   <ErrorMessage name="WorkStatus" /></div>

                                <div className="textarea-container mt-4 ">
                                    <label>Project Description</label>
                                    <Field className="mt-2" type="text" style={{width:"100%",height:"100px"}} rows={3} cols={98} name="Description"></Field>
                                    <div className="text-danger">   <ErrorMessage name="Description" /></div>
                                </div>


                                <div className="mt-4 ">
                                    <div>
                                        <div className="ms-3">
                                            Select File
                                        </div>
                                        <div className="ms-1 mt-2 border border-dark" style={{ height: "80px" }}>
                                            <input className="mt-4 ms-3" name="file" type="file"></input>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mt-5">
                                    <button
                                        className="btn btn-success me-3 btn-block btn-lg gradient-custom-4 text-body">Submit</button>
                                    <button
                                        className="btn btn-danger btn-block btn-lg gradient-custom-4 text-body" type="reset" >Cancle</button>
                                </div>
                            </div>

                        </div>
                    </Form>
                }
            </Formik>

        </div >

    )
}