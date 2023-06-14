import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
export default function CuberUpdate() {

    return (
        <Formik
            initialValues={{

                First_Name: "",
                Last_Name: "",
                Gender: "",
                Mobile: "",
                Password: "",
                Re_Enter_Password: "",
                Designation: "",
                Select_Department: "",
                Address: "",
                Email: "",
                Date: "",
                Education: "",
                upload_Image: "",
            }}
            validationSchema={
                yup.object({
                    First_Name: yup.string().required("First name is required"),
                    Last_Name: yup.string().required("Last name is required"),
                    Gender: yup.string().required("Gender is required"),
                    // Gender: yup.object().shape({ select: yup.string().required("Gender is Required") }),
                    Mobile: yup.string().required("Mobile is required"),
                    Password: yup.string().required("Password required"),
                    Re_Enter_Password: yup.string().required("Re-Enter password is required"),
                    Designation: yup.string().required("Designation required"),
                    Select_Department: yup.string().required("Select_Department is required"),
                    Address: yup.string().required("Address is required"),
                    Email: yup.string().required("Email is required"),
                    Date: yup.string().required("Date is required"),
                    Education: yup.string().required("Education is required"),
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
                                <label className="ms-4">First Name</label>
                                <p className="text-danger"><ErrorMessage name="First_Name" /></p>
                            </div>
                            <div className="form-floating mt-2 col">
                                <Field type="text" className="form-control" name="Last_Name" placeholder="Last" />
                                <label className="ms-4">Last Name</label>
                                <p className="text-danger"><ErrorMessage name="Last_Name" /></p>

                            </div>
                        </div>
                        <div className="row ">
                            <div className="col mt-2">
                                <Field as="select" className="form-select form-control-lg" name="Gender">
                                    <option value="-1">Gender</option>
                                    <option value="Male">Male</option>
                                    <option vlaue="Female">Female</option>

                                </Field>
                                <p className="text-danger"><ErrorMessage name="Gender" /></p>
                            </div>
                            <div className="form-floating mt-2 col">
                                <Field type="text" className="form-control" name="Mobile" placeholder="Mobile" />
                                <label className="ms-4">Mobile</label>
                                <p className="text-danger"><ErrorMessage name="Mobile" /></p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="form-floating mt-2 col">
                                <Field type="password" className="form-control" name="Password" placeholder="Password" />
                                <label className="ms-4" >Password</label>
                                <p className="text-danger"><ErrorMessage name="Password" /></p>

                            </div>

                            <div className="form-floating mt-2 col">
                                <Field type="password" className="form-control" name="Re_Enter_Password" placeholder="Re-Enter Password" />
                                <label className="ms-4">Re-Enter Password</label>
                                <p className="text-danger"><ErrorMessage name="Re_Enter_Password" /></p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="form-floating mt-2 col">
                                <Field type="text" className="form-control" name="Designation" placeholder="Designation" />
                                <label className="ms-4" >Designation</label>
                                <p className="text-danger"><ErrorMessage name="Designation" /></p>

                            </div>
                            <div className="col mt-2">
                                <Field className="form-select "  style={{height:"51px"}} as="select" aria-label="Defult select example" name="Select_Department">
                                    <option value="-1">Select Department</option>
                                    <option value="Developement">Developement</option>
                                    <option value="Female">Develop</option>

                                </Field>
                                <p className="text-danger"><ErrorMessage name="Select_Department" /></p>
                            </div>
                        </div>
                        <div className="form-floating mt-2  ">
                            <Field type="text" style={{ height: 100 }} className="form-control form-control-lg" name="Address" placeholder="Address" />
                            <label className="ms-2">Address</label>
                            <p className="text-danger"><ErrorMessage name="Address" /></p>

                        </div>
                        <div className="row">
                            <div className="form-floating mt-2 col">
                                <Field type="email" className="form-control" name="Email" placeholder="Email" />
                                <label className="ms-4">Email</label>
                                <p className="text-danger"><ErrorMessage name="Email" /></p>

                            </div>
                            <div className="form-floating mt-2 col">
                                <Field type="date" className="form-control" name="Date" placeholder="Date" />
                                <label className="ms-4">Date</label>
                                <p className="text-danger"><ErrorMessage name="Date" /></p>

                            </div>
                        </div>
                        <div className="form-floating mt-2">
                            <Field type="text" className="form-control" name="Education" placeholder="Education" />
                            <label className="ms-2">Education</label>
                            <p className="text-danger"><ErrorMessage name="Education" /></p>

                        </div>
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