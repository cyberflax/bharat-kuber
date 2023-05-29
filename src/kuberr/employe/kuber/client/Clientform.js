import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
export default function Clientform() {

    return (
        <Formik
            initialValues={{

                First_Name: "",
                Company_Name: "",
                Email: "",
                Mobile: "",
                Date: "",
                Currency: "",
                Billing_Methed: "",
                upload_Image: "",




            }}
            validationSchema={
                yup.object({
                    First_Name: yup.string().required("First name is required"),
                    Company_Name: yup.string().required("Company name is required"),
                    // Gender: yup.string().required("Gender is required"),
                    // Gender: yup.object().shape({ select: yup.string().required("Gender is Required") }),
                    Mobile: yup.string().required("Mobile is required"),
                    Email: yup.string().required("Email required"),
                    Date: yup.string().required("Date is required"),
                    Currency: yup.string().required("Currency required"),
                    Billing_Methed: yup.string().required("Billing_Methed is required"),
                    
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
                                <Field type="text" className="form-control" name="Company_Name" placeholder="Company_Name" />
                                <label className="ms-4">Company Name</label>
                                <p className="text-danger"><ErrorMessage name="Company_Name" /></p>

                            </div>
                        </div>
                        <div className="row ">
                           
                            <div className="form-floating mt-2 col">
                                <Field type="number" className="form-control" name="Mobile" placeholder="Mobile" />
                                <label className="ms-4">Mobile</label>
                                <p className="text-danger"><ErrorMessage name="Mobile" /></p>

                            </div>
                        
                            <div className="form-floating mt-2 col">
                                <Field type="email" className="form-control" name="Email" placeholder="Email" />
                                <label className="ms-4" >Email</label>
                                <p className="text-danger"><ErrorMessage name="Email" /></p>

                            </div>
                            </div>
                        <div className="row">

                            <div className="form-floating mt-2 col">
                                <Field type="date" className="form-control" name="Date" placeholder="Date" />
                                <label className="ms-4">Date</label>
                                <p className="text-danger"><ErrorMessage name="Date" /></p>

                            </div>
                       
                            <div className="form-floating mt-2 col">
                                <Field type="text" className="form-control" name="Currency" placeholder="Currency" />
                                <label className="ms-4" >Currency</label>
                                <p className="text-danger"><ErrorMessage name="Currency" /></p>

                            </div>
                            </div>
                        <div className="row">
                            <div className="col mt-2">
                                <Field className="form-select" as="select" aria-label="Defult select example" name="Billing_Methed">
                                    <option value="-1">Billing Mathed</option>
                                    <option value="job-rate">Hourly Job Rate</option>
                                    <option value="Fixxed-price">Fixed price</option>
                                    <option value="User-rate">Hourly User Rate</option>

                                </Field>
                                <p className="text-danger"><ErrorMessage name="Billing_Methed" /></p>
                            </div>

                        </div>
                       

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