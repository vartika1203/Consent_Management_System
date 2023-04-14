import React , {useState,useEffect} from 'react'
import "./HospitalComponents/HospitalStyle.css"
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from 'axios';




function DoctorDashboard(){

  const [patientDetails,setPatient]=useState([]);

  useEffect(() => {
  
    let practitionerAadhar='123412341234'
    axios.get(`http://localhost:9099/hospital/getPatientsByPractitionerAadhar/${practitionerAadhar}`).then((response) => {
      setPatient(response.data);
    });
  }, []);


return(
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          
          <Nav.Link href="/ConsentRequest">Request Consent</Nav.Link>
          
        </Nav>
        <Nav className="me-auto">
          
          <Nav.Link href="/ViewConsent">View Consent</Nav.Link>
          
        </Nav>
        <Nav className="me-auto">
          
          <Nav.Link href="/AddMedicalRecords">Add Medical Records</Nav.Link>
          
        </Nav>
        <Nav pullRight>
          <Nav.Link href="/" >Logout</Nav.Link>
         
        </Nav>

      

      </Navbar.Collapse>
    
  </Navbar>

  <center><h1 className='pageheading'>Welcome Practitioner</h1></center>

  <Container className="mt-5">
      
        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Patient"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary">
              Search
            </Button>
          </Form>
          <br></br>

          <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th>Patient Name</th>

          </tr>

        </thead>
        <tbody>
          {patientDetails.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.patientName}</td>
            </tr>
          ))}
        </tbody>
      </Table>

 
        
      
    </Container>

    </>
)

}

export default DoctorDashboard;