import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";
import { useNavigate,Link} from "react-router-dom";
import Form from "../utilities/Forms";
import Half from "../UI/Half";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  
  const authenticate = async (e) => {
    
    let link;

    e.preventDefault();

    const userType = document.querySelector('input[name="userType"]:checked').value;

    if (userType == 'superAdmin'){
          link = 'http://4.240.84.193/api/SuperAdmin/PlatformLogin'
    } else {
      link = 'http://4.240.84.193/api/Company/Login'
    }

    
    const response = await axios.post(link, {
      email,
      password,
    }).catch(error => {
      console.error(error)
      alert('Enter Correct Credentials')
     })

     localStorage.setItem('role',userType);

     const validate = validateLogin();

     console.log(response);

     localStorage.setItem('token', response.data.data.token);
     localStorage.setItem('userId', response.data.data.userId);
 

     if (validate) {
      setValidate({});
      setEmail("");
      setPassword("");
    }
   
     if (response.status) {
      window.location.href = '/otp';
    }

  };

  const validateLogin = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 8,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="row g-0 auth-wrapper">
      <Half/>
      <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <p>Login to your account</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={authenticate}
                // autoComplete={"off"}
              >
                <div className="d-flex" style={{justifyContent:'space-between'}}>
                    <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="userType"
                          id="superAdmin"
                          value="superAdmin"
                          required
                        />
                        <label className="form-check-label" htmlFor="superAdmin">
                          Super Admin
                        </label>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="userType"
                          id="companyAdmin"
                          value="companyAdmin"
                          required
                        />
                        <label className="form-check-label" htmlFor="companyAdmin">
                          Company Admin
                        </label>
                      </div>
                      </div>
                <div className="email mb-3">
                  <input
                    type="email"
                    className={`form-control ${
                      validate.validate && validate.validate.email
                        ? "is-invalid "
                        : ""
                    }`}
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.email
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ""}
                  </div>
                </div>

                <div className="password mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${
                        validate.validate && validate.validate.password
                          ? "is-invalid "
                          : ""
                      }`}
                      name="password"
                      id="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={(e) => togglePassword(e)}
                    >
                      <i
                        className={
                          showPassword ? "far fa-eye" : "far fa-eye-slash"
                        }
                      ></i>{" "}
                    </button>

                    <div
                      className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.password
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {validate.validate && validate.validate.password
                        ? validate.validate.password[0]
                        : ""}
                    </div>
                  </div>

                  <div className="extra mt-3 row justify-content-between">
                    <div className="col-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember"
                          checked={remember}
                          onChange={(e) => setRemember(e.currentTarget.checked)}
                        />
                        <label className="form-check-label" htmlFor="remember">
                          Remember me
                          
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="forgot-password text-end">
                        <Link to="/forgot-password">Forgot password?</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button 
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Log In
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Protected() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMessage(response.data.message);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
}

export default Login;
