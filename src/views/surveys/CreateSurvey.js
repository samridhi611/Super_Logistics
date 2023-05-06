import { useDispatch } from 'react-redux';
import React, { useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CRow,
    CDate
  } from '@coreui/react'
import DatePicker from '../UI/DatePicker';
import TimePick from '../UI/TimePick';

const data = [
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
  ]


const CreateSurvey = () => {

  const [inputData, setInputData] = useState({ cname: '', cphnNumber: '',cemail:'',movingFrom:'',movingTo:'',roomConfig:''});
  const dispatch = useDispatch();  
  const [validated, setValidated] = useState(false)

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
            setInputData({ cname: '', cphnNumber: '',cemail:'',movingFrom:'',movingTo:'',roomConfig:''});
            setValidated(true)

            if(validated){
                const formData = new FormData(e.target);
            }

         console.log(inputData.cname,inputData.phnNumber,inputData.email)
         
   }

  return (
  <div className='form-container'>
    <CForm onSubmit={submitHandler} noValidate
    validated={validated}>
     <CRow >
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create Survey</strong>
          </CCardHeader>
          <CCardBody>
              <CRow className="mb-3">
                <CFormLabel htmlFor="cname" className="col-sm-2 col-form-label">
                  Customer Name
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput
                    type="text"
                    id="cname"
                    required
                    value={inputData.cname} 
                    onChange={(e) => setInputData({ ...inputData, cname: e.target.value })}
                  />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="cphnNumber" className="col-sm-2 col-form-label">
                  Contact Number
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="tel" id="cphnNumber" required
                    value={inputData.cphnNumber} 
                    onChange={(e) => setInputData({ ...inputData, cphnNumber: e.target.value })} />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="cemail" className="col-sm-2 col-form-label">
                  Email ID
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput type="text" id="cemail" required
                    value={inputData.cemail} 
                    onChange={(e) => setInputData({ ...inputData, cemail: e.target.value })} />
                </div>
              </CRow>

              <CRow className="mb-3">
                <CFormLabel htmlFor="movingFrom" className="col-sm-2 col-form-label">
                  Moving From
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput
                    type="text"
                    id="movingFrom"
                    required
                    value={inputData.movingFrom} 
                    onChange={(e) => setInputData({ ...inputData, movingFrom: e.target.value })}
                  />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="movingTo" className="col-sm-2 col-form-label">
                  Moving To
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput
                    type="text"
                    id="movingTo"
                    required
                    value={inputData.movingTo} 
                    onChange={(e) => setInputData({ ...inputData, movingTo: e.target.value })}
                  />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="roomConfig" className="col-sm-2 col-form-label">
                  Room Configuration
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput
                    type="number"
                    id="roomConfig"
                    required
                    value={inputData.roomConfig} 
                    onChange={(e) => setInputData({ ...inputData, roomConfig: e.target.value })}
                    placeholder='2/3/4 BHK'
                  />
                </div>
              </CRow>

              <CRow className="mb-3">
                <CFormLabel htmlFor="shiftDate" className="col-sm-2 col-form-label">
                  Shifting Date
                </CFormLabel>
                <div className="col-sm-10">
                  <DatePicker/>
                </div>
               </CRow> 
            
               <CRow className="mb-3">
                <CFormLabel htmlFor="shiftTime" className="col-sm-2 col-form-label">
                  Shifting Time
                </CFormLabel>
                <div className="col-sm-10">
                  <TimePick/>
                </div>
              </CRow>

              <CRow className="mb-3">
                <CFormLabel htmlFor="assignTo" className="col-sm-2 col-form-label">
                  Assign To
                </CFormLabel>
                <div className="col-sm-10">
                <div className="col-sm-10">
                  <CFormInput
                    type="text"
                    id="roomConfig"
                    required
                    value={inputData.roomConfig} 
                    onChange={(e) => setInputData({ ...inputData, roomConfig: e.target.value })}
                  />
                </div>
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

export default CreateSurvey;
