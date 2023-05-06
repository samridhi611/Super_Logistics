import React , {useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Half from '../UI/Half';
import axios from 'axios';

const Authentication = () => {

  const [otp, setOtp] = useState("");
   
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
     e.preventDefault();

     const response = await axios.post('http://4.240.84.193/api/SuperAdmin/VerifyOTP', {
       user_id: localStorage.getItem('userId'),
       otp 
    }).catch(error => {
      console.error(error)
      alert('Enter Correct OTP')
     })

     if (response) {
      window.location.href = '/dashboard';
    }

    console.log(response);

     navigate("/")

  }
  
     
  return (
    <div className="row g-0 auth-wrapper">
        <Half/>
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
            <div className="d-flex flex-column align-content-end">
              <div className="auth-body mx-auto">
                <p>Enter OTP</p>
                <div className="auth-form-container text-start">
                  <form
                    className="auth-form"
                    autoComplete={"off"}
                    onSubmit={handleSubmit}
                  >

                    <div className="otp mb-3">
                      <div className="input-group">
                        <input
                          type="text"
                          name="otp"
                          id="setOTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        //   value={password}
                          placeholder="Enter OTP"
                          className='form-control'

                
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 theme-btn mx-auto"
                      >
                         Verify
                      </button>
                    </div>
                    </form>
              </div>   
              </div>
            </div>
        </div>
    </div>
  )
}

export default Authentication