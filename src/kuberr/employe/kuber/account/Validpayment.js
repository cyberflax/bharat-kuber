import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



 export default function Validpayment() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
   console.log(event);
    setValidated(true);
  };
  const handleCancel=()=>{

    setValidated("")
  }

  return (
  <div style={{width:"100%",padding:"40px"}}>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="md-3 " >
        <Form.Group as={Col}  xl="11" controlId="validationCustom01" >
          <Form.Label>Bill No.</Form.Label>
          <Form.Control className='valid'
            required
            type="number"
            placeholder="Bill No."
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} xl="11" controlId="validationCustom02">
          <Form.Label>Client Name</Form.Label>
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
          <Form.Label>Employe Name</Form.Label>
          <Form.Control type="text" placeholder="Employe Name" className='valid' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} xl="11" controlId="validationCustom04">
          <Form.Label>Payment Date</Form.Label>
          <Form.Control type="date" placeholder="date" className='valid' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
     
        <Row>
        <Form.Group as={Col} xl="11" controlId="validationCustom05">
          <Form.Label>Discount</Form.Label>
          <Form.Control type="text" placeholder="Discount" className='valid' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid shift
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} xl="11" controlId="validationCustom06">
          <Form.Label>Total Amount</Form.Label>
          <Form.Control type="text" placeholder="Total Amount" className='valid' required />
          <Form.Control.Feedback type="invalid">
            Please provide a Details.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} xl="11" controlId="validationCustom07">
          <Form.Label>Payment Methad</Form.Label>
          {/* <Form.Control type="select" placeholder="Payment Methad" className='valid' required /> */}
          {/* <Form.Control.Feedback type="invalid"> */}
          <Form.Select aria-label="Default select example" placeholder="Payment Methad" controlId="validationCustom08">
      
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <Form.Control.Feedback type="invalid">
          Payment Mathed is required
          </Form.Control.Feedback>
    </Form.Select>
          {/* </Form.Control.Feedback> */}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} xl="11" controlId="validationCustom08">
          <Form.Label>Payment Status </Form.Label>
          <Form.Control type="text" placeholder="Payment Status" className='valid' required />
          <Form.Control.Feedback type="invalid">
          Payment Status is required
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
     
      <Button type="submit">Submit form</Button>
      <Button className='ms-5 ' variant='danger' onClick={handleCancel}>Cancel</Button>
    </Form>
    
    </div>
  );
}

// render(<Validform />);