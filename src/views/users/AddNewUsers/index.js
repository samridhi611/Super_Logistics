import { useDispatch } from 'react-redux';
import React, { useState , useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CFormSelect ,CForm, CFormInput, CFormLabel,CRow,} from '@coreui/react'

const AddNewUsers = () => {


  const [value, setValue] = useState()
  const [inputData, setInputData] = useState({ name: '', phnNumber: '',email:'',role:''});
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
            setInputData({ name: '', phnNumber: '',email:'',role:''});
            setValidated(true)

            if(validated){
                const formData = new FormData(e.target);
            }

         console.log(inputData.name,inputData.phnNumber,inputData.email)
         
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
                  <PhoneInput id="phnNumber" required
                    defaultCountry="IN"
                    value={value} 
                    onChange={setValue} />
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
