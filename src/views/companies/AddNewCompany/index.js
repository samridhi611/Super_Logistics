import { useDispatch } from 'react-redux';
import React, { useState , useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import  data  from '../data.js';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import 'react-phone-number-input/style.css'
import './addnewcompany.css'
import {  CButton, CCard, CCardBody,CCardHeader,CFormSelect, CCol, CForm, CFormInput, CFormLabel, CRow,} from '@coreui/react'

const AddNewCompanies = () => {

  const token = localStorage.getItem('token');
  console.log(token)
 
  const [bContact , setBContact] = useState('');
  const [pContact , setPContact] = useState('');
  const [inputData, setInputData] = useState({ companyName: '',businessType:'', gstNumber: '',businessAddress:'',primaryContactName : '',mail:'',noOfEmp:'' });

  const [validated, setValidated] = useState(false)

   const submitHandler = (e) =>{
         e.preventDefault();
         const form = e.currentTarget
            if (form.checkValidity() === false) {
                e.preventDefault()
                e.stopPropagation()
            }

            const data = {
              company_name : inputData.companyName,
              company_type : inputData.businessType,
              gst_number : inputData.gstNumber,
              company_contact_number :bContact,
              number_of_employees : inputData.noOfEmp,
              contact_number : pContact,
              contact_name : inputData.primaryContactName,
              company_address : inputData.businessAddress,
              email : inputData.mail
            };

            const headers = {
              'Authorization': `bearer ${token}`,
              'Content-Type': 'application/json'
            };

            axios.post("http://4.240.84.193/api/SuperAdmin/ComapanyRegistration", data, {headers})
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
           
            
            setValidated(true)

            if(validated){
  
                setInputData({ companyName: '',businessType:'', gstNumber: '',businessAddress:'', bContact: '',ownerName: '',primaryContactName : '',mail:'',noOfEmp:'' , ContactNumber :''});
                setBContact('');
                setPContact('');
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
            <strong>Add Company Form</strong>
          </CCardHeader>
          <CCardBody>
              <CRow className="mb-3">
                <CFormLabel htmlFor="companyName" className="col-sm-2 col-form-label">
                  Business Name
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput
                    type="text"
                    id="companyName"
                    required
                    value={inputData.companyName} 
                    onChange={(e) => setInputData({ ...inputData, companyName: e.target.value })}
                  />
                </div>
              </CRow>
              <CRow className='mb-3'>
                  <CFormLabel
                    htmlFor='businessType'
                    className='col-sm-2 col-form-label'
                  >
                    Business Type
                  </CFormLabel>
                  <div className='col-sm-10'>
                    <CFormSelect
                      id='businessType'
                      required
                      value={inputData.businessType}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          businessType: e.target.value,
                        })
                      }
                    >
                      <option value=''>Choose...</option>
                      <option value='Private Limited '>Private Limited </option>
                      <option value='Sole proprietorship'>Sole proprietorship</option>
                      <option value='Public Limited '>Public Limited </option>
                      <option value='LLP'>LLP </option>
                    </CFormSelect>
                  </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="gstNumber" className="col-sm-2 col-form-label">
                  GST Number
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="text" id="gstNumber" required
                    value={inputData.gstNumber} 
                    pattern="[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}"
                    onChange={(e) => setInputData({ ...inputData, gstNumber: e.target.value })} />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="businessAddress" className="col-sm-2 col-form-label">
                  Business Address
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="text" id="businessAddress" required
                    value={inputData.businessAddress} 
                    onChange={(e) => setInputData({ ...inputData, businessAddress: e.target.value })} />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="bContact" className="col-sm-2 col-form-label">
                  Business Contact Number
                </CFormLabel>
                <div className="col-sm-10">
                <PhoneInput
                        id="phnNumber"
                        defaultCountry="IN"
                        value={bContact} 
                        onChange={setBContact} 
                        className='phnClass'
                        maxLength={11}
                        inputProps={{
                          className: 'form-control'
                        }} 
                />
                </div>
              </CRow>
              
              <CRow className="mb-3">
                <CFormLabel htmlFor="primaryContact" className="col-sm-2 col-form-label">
                  Primary Contact Name
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="text" id="primaryContactName" required
                    value={inputData.primaryContactName} 
                    onChange={(e) => setInputData({ ...inputData, primaryContactName: e.target.value })}/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="ContactNumber" className="col-sm-2 col-form-label">
                   Contact Number
                </CFormLabel>
                <div className="col-sm-10">
                <PhoneInput
                        id="phnNumber"
                        defaultCountry="IN"
                        value={pContact} 
                        onChange={setPContact} 
                        className='phnClass'
                        maxLength={11}
                        inputProps={{
                          className: 'form-control'
                        }} 
                />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail" className="col-sm-2 col-form-label">
                  Email
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="email" id="inputEmail" required
                    value={inputData.mail} 
                    onChange={(e) => setInputData({ ...inputData, mail: e.target.value })} />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="noOfEmp" className="col-sm-2 col-form-label">
                  No. of Employees
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="number" id="noOfEmp" required
                    value={inputData.noOfEmp} 
                    onChange={(e) => setInputData({ ...inputData, noOfEmp: e.target.value })} />
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

export default AddNewCompanies
