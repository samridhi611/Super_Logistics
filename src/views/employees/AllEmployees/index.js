import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from "react-dom";
import { useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { Button } from '@mui/material';
import '../../companies/AllCompanies/allcompanies.css';


const columns = ["Name", "Phone Number", "Email Id","Role"];

export const data = [
    [ "John Smith", "123-456-7890", "john.smith@example.com","Manager"],
    [ "Jane Doe", "555-555-1212", "jane.doe@example.com","Driver"],
    [ "Bob Johnson", "555-123-4567", "bob.johnson@example.com","Dispatcher"],
    [ "Alice Williams", "555-987-6543", "alice.williams@example.com","Worker"],
    [ "Michael Johnson", "123-123-1234", "michael.johnson@example.com","Manager"],
    [ "Catherine Lee", "555-234-5678", "catherine.lee@example.com","Manager"],
    [ "David Brown", "555-123-4567", "david.brown@example.com","Dispatcher"],
    [ "Sophia Davis", "555-111-2222", "sophia.davis@example.com","Worker"],
    [ "Robert Wilson", "555-222-3333", "robert.wilson@example.com","Worker"],
    [ "Emma Baker", "123-321-6548", "emma.baker@example.com","Manager"]
  ];

const options = {
    filterType: 'dropdown',
    responsive: 'simple',
   
  };


const AllEmployees = () => {

  const adminData = useSelector(state => state.adminData.adminData);
  const navigate = useNavigate();

  return (
    <>

    <MUIDataTable 
        title={"Employee List"} 
        data={data} 
        columns={columns} 
        options={options} 
        
      />
       <Button variant="contained" color="primary" onClick={() => navigate('./add-new-admins')}>
         + Add Employee
        </Button>
     </> 
  )
}

export default AllEmployees













