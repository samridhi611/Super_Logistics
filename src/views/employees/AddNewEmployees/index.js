import { useDispatch } from 'react-redux';
import React, { useState , useRef} from 'react'
import { useNavigate } from 'react-router-dom'
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
    CFormSelect
  } from '@coreui/react'

const AddNewCompanies = () => {

  const [inputData, setInputData] = useState({id:'', name: '', phnNumber: '',email:'',role:''});
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
            setInputData({ id : '' ,name: '', phnNumber: '',email:'',role:''});
            setValidated(true)

         console.log(inputData.name,inputData.phnNumber,inputData.email,inputData.role)
         
   }

  return (
  <div className='form-container'>
    <CForm onSubmit={submitHandler} noValidate
    validated={validated}>
     <CRow >
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Employee</strong>
          </CCardHeader>
          <CCardBody>
          <CRow className="mb-3">
                <CFormLabel htmlFor="id" className="col-sm-2 col-form-label">
                  Employee ID
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput
                    type="number"
                    id="id"
                    required
                    value={inputData.id} 
                    onChange={(e) => setInputData({ ...inputData, id: e.target.value })}
                  />
                </div>
              </CRow>
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
                  <CFormInput type="tel" id="phnNumber" required
                    value={inputData.phnNumber} 
                    onChange={(e) => setInputData({ ...inputData, phnNumber: e.target.value })} />
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
              <CRow className="mb-3">
                <CFormLabel htmlFor="role" className="col-sm-2 col-form-label">
                  Role
                </CFormLabel>
                <div className="col-sm-10">
                  {/* <CFormInput type="text" id="role" required
                    value={inputData.role} 
                    onChange={(e) => setInputData({ ...inputData, role: e.target.value })} /> */}
                    <CFormSelect 
                    value={inputData.role} 
                    aria-label="Default select example"
                    required
                    options={[
                        'Select a Role',
                        { label: 'Manager', value: 'Manager' },
                        { label: 'Dispatcher', value: 'Dispatcher' },
                        { label: 'Driver', value: 'Driver' },
                        { label: 'Worker', value: 'Worker' }
                    ]}
                    onChange={(e) => setInputData({ ...inputData, role: e.target.value })} />  
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
