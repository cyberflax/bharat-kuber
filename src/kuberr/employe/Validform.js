import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

 export default function Validform() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleCancel=()=>{
    setValidated("")
  }

  return (
  <div style={{alignItems:'center',margin:"20px"}}>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="md-3 " >
        <Form.Group as={Col}  xl="11" controlId="validationCustom01" >
          <Form.Label>Holiday No.</Form.Label>
          <Form.Control className='valid'
            required
            type="number"
            placeholder="Holiday No."
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} xl="11" controlId="validationCustom02">
          <Form.Label>Holiday Name</Form.Label>
          <Form.Control className='valid'
            required
            type="text"
            placeholder="Holiday name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} xl="11" controlId="validationCustom03">
          <Form.Label>Holiday Date</Form.Label>
          <Form.Control type="date" placeholder="date" className='valid' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
      <Row className="mb-3">
        <Form.Group as={Col} xl="11" controlId="validationCustom04">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Location" className='valid' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} xl="11" controlId="validationCustom05">
          <Form.Label>Shift</Form.Label>
          <Form.Control type="text" placeholder="Shift" className='valid' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid shift
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} xl="11" controlId="validationCustom06">
          <Form.Label>Details</Form.Label>
          <Form.Control type="text" placeholder="Details" className='valid' required />
          <Form.Control.Feedback type="invalid">
            Please provide a Details.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
     
      <Button type="submit">Submit form</Button>
      <Button className='ms-4 btn btn-danger' onClick={handleCancel}>Cancel</Button>
    </Form>
    </div>
  );
}

// render(<Validform />);