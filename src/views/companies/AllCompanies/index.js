import React,{useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import data from '../data';
import './allcompanies.css';
import { Button } from '@mui/material';
import axios from 'axios';
import CIcon from '@coreui/icons-react';

import { cilTrash } from '@coreui/icons'

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
          "Company Name": item.company_name,
          "Contact Name": item.contact_name,
          "Contact Number": item.contact_number,
          "Email": item.email,
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

 const columns = [
  {
    name: "Company Name",
    label: "Company Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Contact Name",
    label: "Contact Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Contact Number",
    label: "Contact Number",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name:"Email" ,
    label: "Email",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Actions",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <button onClick={() => alert(`Clicked row ${tableMeta.rowIndex}`)} className='delete-btn'>
            <CIcon icon={cilTrash} customClassName="delete-icon" />
          </button>
        );
      }
    }
  },
];

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












