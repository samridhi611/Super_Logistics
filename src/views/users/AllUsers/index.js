import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import { Button } from '@mui/material';
import CIcon from '@coreui/icons-react';
import '../../companies/AllCompanies/allcompanies.css';

import { cilTrash } from '@coreui/icons'


const token = localStorage.getItem('token');
console.log(token)

const options = {
    filterType: 'dropdown',
    responsive: 'simple',
   
  };

const AllUsers = () => {

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
        'Name': item.name,
        'Phone Number' : item.contact,
        'Email Id': item.email,
      }));
      console.log(filteredData);
      setUsers(filteredData);
   })
   .catch(error => {
      console.error(error)
      alert(error)
   })
},[token])

const columns = [
  {
    name: 'Name',
    label: 'Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Phone Number',
    label: 'Phone Number',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Email Id',
    label: 'Email Id',
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

export default AllUsers













