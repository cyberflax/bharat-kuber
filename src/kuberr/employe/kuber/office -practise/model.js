import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as yup from "yup";
import Ad from "../img/Ad.png"


export function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    onsubmit=(value)=>{
console.log(value)
    }

    return (
        <Formik

            initialValues={{

                Title: "",
                Assigned_Name: "",
                Priority: "",
                Due_date: "",
                Event_Details: "",
                Note: "",
                
            }}
            validationSchema={
                yup.object({
                    Title: yup.string().required(" Title is required"),
                    Assigned_Name: yup.string().required("Assigned_Name  is required"),
                    Priority: yup.string().required("Priority  is required"),
                    Due_date: yup.string().required("Due_date is required"),
                    // Gender: yup.object().shape({ select: yup.string().required("Gender is Required") }),
                    Event_Details: yup.string().required("Event_Details is required"),
                    Note: yup.string().required("Note required"),
                   

                })
            }
        >
            <>
                <Button variant="light" onClick={handleShow} className="bi bi-pencil-square">
                <img style={{width:"30px",height:"30px"}} src={Ad}/>

                </Button>

                <Modal show={show} onHide={handleClose} className="w-100">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div className="p-4 mt-3">
                        < Form >
       
                                <div className="row ">
                                
                                <div className="form-floating mt-2 col">
                                        <Field type="text" className="form-control" name="Title" placeholder="Title" />
                                        <label className="ms-4"> Title</label>
                                        <p className="text-danger"><ErrorMessage name="Title" /></p>                                  
                                   </div>
                                   </div>
                                <div className="row">
                                <div className="col mt-2">
                                        <Field as="select" className="form-select form-control-lg" name="Assigned_Name">
                                            <option value="-1">Assigned Name</option>
                                            <option value="Full Time">Sarah Smith</option>
                                            <option vlaue="Part Time">John Deo</option>
                                            <option vlaue="Intership">Jens Brinker</option>
                                            <option vlaue="Other">Mark Hay</option>
                                            <option vlaue="Other">Anthony Davie</option>
                                            <option vlaue="Other">Sue Woodger</option>
                                                                                  

                                        </Field>
                                        <p className="text-danger"><ErrorMessage name="Assigned_Name" /></p>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col mt-2">
                                        <Field as="select" className="form-select form-control-lg" name="Priority">
                                            <option value="-1">Priority</option>
                                            <option value="Full Time">Low</option>
                                            <option vlaue="Part Time"> Normal</option>
                                            <option vlaue="Intership"> High</option>
                                            
                                                                                  

                                        </Field>
                                        <p className="text-danger"><ErrorMessage name="Priority" /></p>
                                    </div>

                                    <div className="form-floating mt-2 col">
                                        <Field type="date" className="form-control" name="Due_date" placeholder="Due_date" />
                                        <label className="ms-4">Due date</label>
                                        <p className="text-danger"><ErrorMessage name="Due_date" /></p>

                                    </div>
                                </div>
                                <div className="row">
                                {/* <div className="col mt-2">
                                        <Field as="select" className="form-select form-control-lg" name="Job_type">
                                            <option value="-1">Job_type</option>
                                            <option value="Full Time">Full Time</option>
                                            <option vlaue="Part Time">Part Time</option>
                                            <option vlaue="Intership">Intership</option>
                                            <option vlaue="Other">Other</option>
                                                                                  

                                        </Field>
                                        <p className="text-danger"><ErrorMessage name="Job_type" /></p>
                                    </div> */}
                                    <div className="form-floating mt-2 col">
                                        <Field type="text" className="form-control" name="Event_Details" placeholder="Event_Details" />
                                        <label className="ms-4">Event_Details</label>
                                        <p className="text-danger"><ErrorMessage name="Event_Details" /></p>

                                    </div>
                                    </div>
                                {/* <div className="row">
                                    <div className="form-floating mt-2 col">
                                        <Field type="text" className="form-control" name="Note" placeholder="Note" />
                                        <label className="ms-4"> Note</label>
                                        <p className="text-danger"><ErrorMessage name="Note" /></p>

                                    </div>

                                      </div>                        */}
                               
                                      <div>
                            <button className="btn btn-primary mt-3 " type="submit">Submit</button>
                            <button className="btn btn-danger mt-3 ms-4 " type="reset">Cancel</button>
                        </div>
                        </Form >
                            </div>

                    </Modal.Body>
                    
                       
                </Modal>
            </>
        </Formik>
    );
}

(<Example />);