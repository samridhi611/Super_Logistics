import React, { useState , useRef} from 'react'
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import 'react-phone-number-input/style.css'
import './addnewuser.css'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CFormSelect ,CForm, CFormInput, CFormLabel,CRow,} from '@coreui/react'

const AddNewUsers = () => {

  const token = localStorage.getItem('token');
  console.log(token)


  const [value, setValue] = useState()
  const [inputData, setInputData] = useState({ name: '', phnNumber: '',email:'',role:''});
  const [validated, setValidated] = useState(false)

   const submitHandler = (e) =>{
         e.preventDefault();
         const form = e.currentTarget
            if (form.checkValidity() === false) {
                e.preventDefault()
                e.stopPropagation()
            }

            

            const data = {
              name: inputData.name,
              email: inputData.email,
              role_id: inputData.role,
              contact: value,
            };

            const headers = {
              'Authorization': `bearer ${token}`,
              'Content-Type': 'application/json'
            };

            axios.post("http://4.240.84.193/api/SuperAdmin/PlatformUserRegistration", data, {headers})
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              console.log("Data posted successfully:", data);
              // add code to handle successful response
            })
            .catch((error) => {
              console.error("Error posting data:", error);
              // add code to handle error
            });

            
            setValidated(true);

            if(validated){
                  setInputData({ name: '', phnNumber: '',email:'',role:''}); 
                  setValue('');
            }
         
   }

  return (
  <div className='form-container'>
    <CForm onSubmit={submitHandler} noValidate
    validated={validated}>
     <CRow >
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add User Form</strong>
          </CCardHeader>
          <CCardBody>
              <CRow className="mb-3">
                <CFormLabel htmlFor="name" className="col-sm-2 col-form-label">
                  Name
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput
                    type="text"
                    id="name"
                    required
                    value={inputData.name} 
                    onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                  />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="phnNumber" className="col-sm-2 col-form-label">
                  Contact Number
                </CFormLabel>
                <div className="col-sm-10">
                <PhoneInput
                        id="phnNumber"
                        defaultCountry="IN"
                        value={value} 
                        onChange={setValue} 
                        className='phnClass'
                        maxLength={10}
                        inputProps={{
                          className: 'form-control'
                        }}
                 />

                {/* <CFormInput
                    type="tel"
                    id="contact"
                    required
                    value={inputData.phnNumber} 
                    onChange={(e) => setInputData({ ...inputData, phnNumber: e.target.value })}
                  /> */}

                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="email" className="col-sm-2 col-form-label">
                  Email ID
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="text" id="email" required
                    value={inputData.email} 
                    onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
                </div>
              </CRow>


              <CRow className='mb-3'>
                  <CFormLabel
                    htmlFor='role'
                    className='col-sm-2 col-form-label'
                  >
                    Role
                  </CFormLabel>
                  <div className='col-sm-10'>
                    <CFormSelect
                      id='role'
                      required
                      value={inputData.role}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          role: e.target.value,
                        })
                      }
                    >
                      <option value=''>Choose...</option>
                      <option value='A5DB0802-BEE5-ED11-8B19-58A0231DB7D9'>Owner</option>
                      <option value='A6DB0802-BEE5-ED11-8B19-58A0231DB7D9'>Manager</option>
                      <option value='088B3412-BEE5-ED11-8B19-58A0231DB7D9'>Viewer</option>
                    </CFormSelect>
                  </div>
                </CRow>

              
              <CCol xs={12}>
                 <CButton color="primary" type="submit">
                Submit form
            </CButton>
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </CForm>
  </div>
  )
}

export default AddNewUsers
