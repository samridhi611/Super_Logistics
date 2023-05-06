import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Half from '../UI/Half';

const CreatePass = () => {
    
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  let password;
  //authenticating
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 8 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])(?=.*[a-z]).{8,}$/,
        'Password must contain at least 1 numeric, 1 capital letter, and 1 special character.'
      ),
    cpassword: Yup.string()
      .required("Confirm Password is required")
      .min(8, "Password length should be at least 8 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema)
  });
  password = watch("password", "");

  const onSubmit = (e) => {
    reset();
    console.log(e);
  };


  //show password or not
  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  //show Confirmed password pr not 

  const toggleConfirmPassword = (e) => {
    if (showConfirmPassword) {
      setShowConfirmPassword(false);
    } else {
      setShowConfirmPassword(true);
    }
  };

    return (
        <div className="row g-0 auth-wrapper">
            <Half/>
          <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
            <div className="d-flex flex-column align-content-end">
              <div className="auth-body mx-auto">
                <p>Create Password</p>
                <div className="auth-form-container text-start">
                  <form
                    className="auth-form"
                    // method="POST"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete={"off"}
                  >

                    <div className="password mb-3">
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className={`form-control ${
                            errors.password?.message ? "is-invalid " : ""
                          }`}
                          name="password"
                          id="password"
                        //   value={password}
                          placeholder="Password"
                        //   onChange={(e) => setPassword(e.target.value)}
                        // onSelectStart={(e) => e.preventDefault()} 
                        onCut={(e) => e.preventDefault()} 
                        onCopy={(e) => e.preventDefault()} 
                        onPaste={(e) => e.preventDefault()} 
                          {...register("password")}
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
                            errors.password?.message 
                              ? "d-block"
                              : "d-none"
                          }`}
                        >
                          {errors.password?.message}
                        </div>
                      </div>
                    </div>
                    <div className="password mb-3">
                      <div className="input-group">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className={`form-control ${
                            errors.cpassword?.message ? "is-invalid " : ""
                          }`}
                          name="confirmPassword"
                          id="confirmPassword"
                        //   value={confirmPassword}
                          placeholder="Confirm Password"
                        //   onChange={(e) => setConfirmPassword(e.target.value)}
                        // onSelectStart={(e) => e.preventDefault()} 
                        onCut={(e) => e.preventDefault()} 
                        onCopy={(e) => e.preventDefault()} 
                        onPaste={(e) => e.preventDefault()} 
                          {...register("cpassword")}
                        />
    
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm"
                          onClick={(e) => toggleConfirmPassword(e)}
                        >
                          <i
                            className={
                              showConfirmPassword ? "far fa-eye" : "far fa-eye-slash"
                            }
                          ></i>{" "}
                        </button>
    
                        <div
                          className={`invalid-feedback text-start ${
                            errors.cpassword?.message
                              ? "d-block"
                              : "d-none"
                          }`}
                        >
                          {errors.cpassword?.message}
                        </div>
                      </div>
    
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 theme-btn mx-auto"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default CreatePass