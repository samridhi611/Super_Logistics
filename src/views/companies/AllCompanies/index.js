import React,{useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import data from '../data';
import './allcompanies.css';
import { Button } from '@mui/material';
import axios from 'axios';

const columns = ["Company Name", "GST Number", "Owner Name", "Primary Contact", "Email"];
const token = localStorage.getItem('token');
console.log(token)

const options = {
    filterType: 'dropdown',
    responsive: 'simple',
    serverSide: true
  };


const AllCompanies = () => {

  const navigate = useNavigate();

  const [companies,setCompanies]=useState([]);
  useEffect(()=>{
      
      axios.get('http://4.240.84.193/api/SuperAdmin/CompanyDetails',{
        headers: {
          Authorization: `bearer ${token}`
      }
      })
      .then(response=>{
        const datas = response;
        const filteredData = datas.data.map(item => ({
          cname: item.company_name,
          gstNumber: item.gst_number,
          name : item.contact_name,
          contact : item.contact_number,
          email : item.email,
        }));
        console.log(filteredData);
        setCompanies(filteredData);
     })
     .catch(error => {
        console.error(error)
        alert(error)
     })
  },[token])

  const handleNavigateToAddCompany = () => {
    navigate('/companies/add-new-companies');
 }

  return (
    <>
      <MUIDataTable 
        title={"Company List"} 
        data={companies} 
        columns={columns} 
        options={options} 
        
      />
       <Button variant="contained" color="primary" onClick={handleNavigateToAddCompany}>
         + Add Company
        </Button>
     </> 
  )
}

export default AllCompanies;












