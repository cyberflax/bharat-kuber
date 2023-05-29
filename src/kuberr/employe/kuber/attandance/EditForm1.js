import ReactDOM from 'react-dom';

// import "./register.css"/
import { Formik, Form, Field, ErrorMessage } from "formik"
// import axios from "axios"
// import "./projectform.css"
import * as yup from "yup";


export function EditForm() {
    // const navigate = useNavigate()
    // const handleCancel = (values) => {

    // }
    return (
        <div className="container-fluid">

            <Formik
                initialValues={{
                    Employ_Name: "",
                    EmployId: "",                   
                    Joining_date: "",
                    Department: "",
                    date: "",
                    Check_in: "",
                    Chek_out: "",
                    Working_Hours: "",
                    Shift: "",
                    Status: ""
                    
                }}

                validationSchema={
                    yup.object({
                        Employ_Name: yup.string().required("Employ_Name Required"),
                        EmployId: yup.string().required("EmployId Required"),                        
                        Joining_date: yup.string().required("Joining_date Description Required"),
                        Department: yup.string().required("Select Department First"),
                        date: yup.string().required("Select date First"),
                        Check_in: yup.string().required("Check_in-in Required"),
                        Chek_out: yup.string().required("Chek_out Required"),
                        Working_Hours: yup.string().required("Working_Hours Select Team"),
                        Shift: yup.string().required("Select Shift "),
                        Status: yup.string().required("Status Start Date"),
                        
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
                                        <Field type="text" className="form-control" name="Employ_Name" placeholder="Employ_Name" />
                                        <label className="ms-3" >Employe Name</label>
                                        <div className="text-danger">   <ErrorMessage name="Employ_Name" /></div>
                                    </div>
                                    <div class="form-floating col mt-4">
                                        <Field type="text" className="form-control" name="EmployId" placeholder="EmployId*" />
                                        <label className="ms-3">EmployId</label>
                                        <div className="text-danger">   <ErrorMessage name="EmployId" /></div>
                                    </div>

                                   
                                </div>
                                <div className="row">
                                    <div class="form-floating col mt-4">
                                        <Field type="date" className="form-control" name="Joining_date" placeholder="Joining_date" />
                                        <label className="ms-3">Joining Date</label>
                                        <div className="text-danger">   <ErrorMessage name="Joining_date" /></div>
                                    </div>
                                    <div class="form-floating col mt-4">
                                        <Field type="text" className="form-control" name="Department" placeholder="Department" />
                                        <label className="ms-2">Department </label>
                                        <div className="text-danger">   <ErrorMessage name="Department" /></div>
                                    </div>

                                <div className="row">
                                    <div class="form-floating col mt-4">
                                        <Field type="date" className="form-control" name="date" placeholder="date*" />
                                        <label className="ms-3">Date</label>
                                        <div className="text-danger">   <ErrorMessage name="date" /></div>
                                    </div>                                    
                                </div>
                                <div className="row">
                                    <div class="form-floating col mt-4">
                                        <Field type="time" className="form-control" name="Check_in" placeholder="Check_in" />
                                        <label className="ms-3">Check-in</label>
                                        <div className="text-danger">   <ErrorMessage name="Check_in" /></div>
                                    </div>
                                    <div class="form-floating col mt-4">
                                        <Field type="time" className="form-control" name="Chek_out" placeholder="Chek_out" />
                                        <label className="ms-2">Chek out </label>
                                        <div className="text-danger">   <ErrorMessage name="Chek_out" /></div>
                                    </div>
                                    <div class="form-floating col mt-4">
                                        <Field type="time" className="form-control" name="Working_Hours" placeholder="Working_Hours" />
                                        <label className="ms-2">Working Hours </label>
                                        <div className="text-danger">   <ErrorMessage name="Working_Hours" /></div>
                                    </div>                          


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
                                
                                <div className="row">
                                    <div class="form-floating col mt-4">
                                        <Field className="form-select" as="select" name="Shift">
                                            <option name="-1">Shift</option>
                                            <option name="Shift 1">Shift 1</option>
                                            <option name="Shift 2">Shift 2</option>
                                        </Field>
                                        <label className="ms-2">Department</label>
                                        <div className="text-danger">   <ErrorMessage name="Shift" /></div>
                                    </div>
                                    <div class="form-floating col mt-4">

                                        <Field className="form-select" as="select" name="Status">
                                            <option name="-1">Status</option>
                                            <option name=" present ">present</option>
                                            <option name="Leave">Leave</option>
                                            <option name="Weekend">Weekend</option>
                                        </Field>
                                        <label className="ms-2">Project Priority</label>
                                        <div className="text-danger">   <ErrorMessage name="Status" /></div>
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
                        </div>
                    </Form>
                }
            </Formik>

        </div >

    )
}