import React from 'react'
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';



function ViewRecords() {

  const [records, setRecords] = useState([]);


  useEffect(() => {

    const fetchRecord = async () => {
      const token = localStorage.getItem('authToken'); // get token from localStorage
      const id = localStorage.getItem('id');
      const headers = { Authorization: `Bearer ${token}` }; // add token to headers
      const { data } = await axios.get(`http://localhost:9099/hospital/record-mapping/${id}`, { headers });
      console.log(data);
      setRecords(data); 
    };
  
    fetchRecord();
  }, []);




  return (
    <>

      <center><h1 className='pageheading'>View Records</h1></center>


      <Table stripped bordered hover variant="dark" size="sm">
        <thead>
          <tr className='tablehead'>
            <th className='tabledata'>Record Id</th>
            <th className='tabledata'>Disease Name</th>
            <th className='tabledata'>Patient Aadhar</th>
            <th className='tabledata'>Priescription</th>
            <th className='tabledata'>Hospital Id</th>
            <th className='tabledata'>Practitioners Aadhar</th>

          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td className='tabledata'>{record.record_id}</td>
              <td className='tabledata'>{record.disease_name}</td>
              <td className='tabledata'>{record.patientAadhar}</td>
              <td className='tabledata'>{record.record}</td>
              <td className='tabledata'>{record.centralHospital.hospitalId}</td>
              <td className='tabledata'>{record.medicalPractitioner.practitionerAadhar}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ViewRecords;