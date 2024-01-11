import React, { useState } from 'react';
import { useFormik } from 'formik';
import './AdminLogin.css';
import axios from 'axios'
import auth from '../../../api/authentication';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [loader,Setloader] = useState(false)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async values => {
      Setloader(true)
      const result = await auth.login(values)
      console.log("this is the result",result)
       
      if(result === null){
        Setloader(false)
        toast.warn("something went wrong please try again")
      }

      if(result.status === 200){
        Setloader(false);
        navigate('/')
        toast.success(result.data.message)
      }
       
      else{
        Setloader(false);
                toast.error(result.data.message)
      }
    
     
    },
    validate: values => {
      const errors = {};
      if (!values.username) {
        errors.username = 'username is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
          <form className="form-Admin" onSubmit={formik.handleSubmit}>
            <p className="form-title-Admin">Sign in to your account</p>
            <div className="input-container-Admin">
              <input
                type="text"
                placeholder="Enter username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.errors.username && <span className="error">{formik.errors.username}</span>}
            </div>
            <div className="input-container-Admin">
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && <span className="error">{formik.errors.password}</span>}
            </div>
            <button type="submit" className="submit-Admin">
            {loader?  (<div className="loader"></div>):"Login" }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
