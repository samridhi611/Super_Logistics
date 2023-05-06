import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import { Button } from '@mui/material';
import '../../companies/AllCompanies/allcompanies.css';
import data from '../data';
import axios from 'axios';

const columns = ["Name", "Phone Number", "Email Id"];

const token = localStorage.getItem('token');
console.log(token)

const options = {
    filterType: 'dropdown',
    responsive: 'simple',
   
  };

const AllAdmins = () => {

//   const adminData = useSelector(state => state.adminData.adminData);
  const navigate = useNavigate();

  const [users, setUsers] = useState();

  useEffect(()=>{
      
    axios.get('http://4.240.84.193/api/SuperAdmin/Users',{
      headers: {
        Authorization: `bearer ${token}`
    }
    })
    .then(response=>{
      const datas = response;
      const filteredData = datas.data.map(item => ({
        name: item.name,
        contact : item.contact,
        email : item.email,
      }));
      console.log(filteredData);
      setUsers(filteredData);
   })
   .catch(error => {
      console.error(error)
      alert(error)
   })
},[token])

  return (
    <>

    <MUIDataTable 
        title={"Users List"} 
        data={users} 
        columns={columns} 
        options={options} 
        
      />
       <Button variant="contained" color="primary" onClick={() => navigate('./add-new-admins')}>
         + Add Admins
        </Button>
     </> 
  )
}

export default AllAdmins













