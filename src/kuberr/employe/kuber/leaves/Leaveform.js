import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export default function Leaveform() {

    return (
        <Formik
            initialValues={{

                First_Name: "",
                Leave_type: "",
                Leave_from: "",
                Leave_to: "",
                no_of_days: "",
                status: "",
                Reason: "",
                upload_Image: "",




            }}
            validationSchema={
                yup.object({
                    First_Name: yup.string().required("First name is required"),
                    Leave_type: yup.string().required("Leave_type name is required"),
                    // Gender: yup.string().required("Gender is required"),
                    // Gender: yup.object().shape({ select: yup.string().required("Gender is Required") }),
                    Leave_from: yup.string().required("Leave_from is required"),
                    Leave_to: yup.string().required("Leave_to required"),
                    no_of_days: yup.string().required("no_of_days is required"),
                    status: yup.string().required("status required"),
                    Reason: yup.string().required("Reason is required"),
                    
                    upload_Image: yup.string().required("upload_Image is required")






                })
            }

            onSubmit={
                (values) => {
                    // alert(_id)
                    console.log(values)
                        .then(() => {
                            alert("update Successfully ");
                            // navigate("/emp-main-page");


                        })
                }
            }

        >

            {
                < Form >



                    <div className="p-4 mt-3">


                        <div className="row">
                            <div className="form-floating mt-2 col">
                                <Field type="text" className="form-control" name="First_Name" placeholder="First Name" />
                                <label className="ms-4">Name</label>
                                <p className="text-danger"><ErrorMessage name="First_Name" /></p>
                            </div>
                            <div className="form-floating mt-2 col">
                                <Field type="text" className="form-control" name="Leave_type" placeholder="Leave_type" />
                                <label className="ms-4">Leave Type </label>
                                <p className="text-danger"><ErrorMessage name="Leave_type" /></p>

                            </div>
                        </div>
                        <div className="row ">
                           
                            <div className="form-floating mt-2 col">
                                <Field type="date" className="form-control" name="Leave_from" placeholder="Leave_from" />
                                <label className="ms-4">Leave from</label>
                                <p className="text-danger"><ErrorMessage name="Leave_from" /></p>

                            </div>
                        
                            <div className="form-floating mt-2 col">
                                <Field type="date" className="form-control" name="Leave_to" placeholder="Leave_to" />
                                <label className="ms-4" >Leave to</label>
                                <p className="text-danger"><ErrorMessage name="Leave_to" /></p>

                            </div>
                            </div>
                        <div className="row">

                            <div className="form-floating mt-2 col">
                                <Field type="number" className="form-control" name="no_of_days" placeholder="no_of_days" />
                                <label className="ms-4">no of days</label>
                                <p className="text-danger"><ErrorMessage name="no_of_days" /></p>

                            </div>
                       
                        
                         
                            <div className="col mt-2">
                                <Field className="form-select" as="select" aria-label="Defult select example" name="status">
                                    <option value="-1">Status</option>
                                    <option value="job-rate">Approved</option>
                                    <option value="Fixxed-price">Reajected</option>
                                  

                                </Field>
                                <p className="text-danger"><ErrorMessage name="status" /></p>
                            </div>

                        </div>                      

                        </div>
                        <div className="textarea-container mt-4 ">
                                    <label>Reason</label>
                                    <Field className="mt-2" type="text" style={{width:"100%",height:"100px"}} rows={3} cols={98} name="Reason"></Field>
                                    <div className="text-danger">   <ErrorMessage name="Reason" /></div>
                                </div>
                         
                  

                     <div className="row">
                        <div className="form-floating mt-2">
                            <Field type="file" className="form-control" name="upload_Image" placeholder="upload Image" />

                            <p className="text-danger"><ErrorMessage name="upload_Image" /></p>

                        </div>


                        <div>
                            <button className="btn btn-primary mt-3 " type="submit">Submit</button>
                            <button className="btn btn-danger mt-3 ms-4" type="reset">Cancel</button>
                        </div>



                    </div>




                </Form >
            }
        </Formik >
    )
}