import { useDispatch } from 'react-redux';
import React, { useState , useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import  data  from '../data.js';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
  } from '@coreui/react'

const AddNewCompanies = () => {

  const [inputData, setInputData] = useState({ companyName: '', gstNumber: '', ownerName: '',primaryContact: '',mail:'',noOfEmp:'' });
  const dispatch = useDispatch();  

  const navigate = useNavigate();
   
  const [validated, setValidated] = useState(false)

  const formRef = useRef(null);

   const submitHandler = (e) =>{
         e.preventDefault();
         const form = e.currentTarget
            if (form.checkValidity() === false) {
                e.preventDefault()
                e.stopPropagation()
            }

            dispatch({
                type: 'ADD_USER_DATA',
                payload: inputData
              });
            setInputData({ companyName: '', gstNumber: '', email: '' ,ownerName: '',primaryContact: '',mail:'',noOfEmp:''});
            setValidated(true)

            if(validated){
                const formData = new FormData(e.target);
                const newObject = [
                    // add properties to the object based on the form data
                        formData.get('companyName'),
                        formData.get('gstNumber'),
                        formData.get('ownerName'),
                        formData.get('primaryContact'),
                        formData.get('inputEmail'),
                        formData.get('noOfEmp'),
                    // etc.
                ]
                console.log(newObject);
                data.push(newObject);
                

                // const fs = require('fs');
                // fs.writeFileSync('./data.js', `export const data = ${JSON.stringify(data)}`);

            }

         console.log(data);
         console.log(inputData.companyName,inputData.gstNumber,inputData.noOfEmp,inputData.primaryContact,inputData.mail)
         
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
                  Company Name
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
              <CRow className="mb-3">
                <CFormLabel htmlFor="gstNumber" className="col-sm-2 col-form-label">
                  GST Number
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="text" id="gstNumber" required
                    value={inputData.gstNumber} 
                    onChange={(e) => setInputData({ ...inputData, gstNumber: e.target.value })} />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="ownerName" className="col-sm-2 col-form-label">
                  Owner Name
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="text" id="ownerName" required
                    value={inputData.ownerName} 
                    onChange={(e) => setInputData({ ...inputData, ownerName: e.target.value })} />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="primaryContact" className="col-sm-2 col-form-label">
                  Primary Contact
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="tel" id="primaryContact" required
                    value={inputData.primaryContact} 
                    onChange={(e) => setInputData({ ...inputData, primaryContact: e.target.value })}/>
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
              </CRow><CRow className="mb-3">
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
