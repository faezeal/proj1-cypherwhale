import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextFeild from './TextFeild';
import './TextFeild.css';
import { NavLink } from "react-router-dom";



// const passwordRules = /^(?=.*\d)(؟=.*[a-z])(?=.*[A-Z]).{5,}$/;



function Login() {
    const validate = Yup.object({
        firstName: Yup.string().max(10, 'حداکثر 10 کاراکتر').required("پر کردن این فیلد الزامی است"),
        lastName: Yup.string().max(10, 'حداکثر 10 کاراکتر').required("پر کردن این فیلد الزامی است"),
        email: Yup.string().email('ایمیل نامعتبر').required("پر کردن این فیلد الزامی است"),
        password: Yup.string().min(5).required("پر کردن این فیلد الزامی است")
        // .matches(passwordRules, 'حدقال از یک حرف بزرگ و عدد و کاراکتر استفاده شود')
    })
  return (
    <div>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}>
            {formik => (
                <div className='row d-flex bg-login mt-5 pt-5'>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <h3 className=' w-50 text-primary fs-1 position-absolute title d-flex justify-content-center register-title'>ورود</h3>
                        {/* {console.log(formik.values)} */}
                        <Form className='form-content d-flex flex-column'>
                            {/* <TextFeild label="نام" name="firstName" type="text" placeholder="نام" className="w-100 input" />
                            <TextFeild label="نام خانوادگی" name="lastName" type="text" placeholder="نام و نام خانوادگی" className="w-100 input" /> */}
                            <TextFeild label="ایمیل" name="email" type="email" placeholder="ایمیل" className="w-100 input" />
                            <TextFeild label="رمز عبور" name="password" type="password" placeholder="رمز عبور" className="w-100 input" />
                            <button className='btn btn-primary mt-3 p-2'>ورود</button>
                        </Form>
                        <span className='link-login d-flex justify-content-center'>قبلا ثبت نام نکردم</span>
                        <NavLink className='login-link' to="/registerAndLogin">ثبت نام</NavLink> 
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 d-flex justify-content-center align-items-center'>
                        <img src={`${process.env.PUBLIC_URL + '/assets/img/333.webp'}`} className="w-75 h-75 img"/>
                    </div>
                </div>     
            )}
        </Formik>
    </div>
  )
}

export default Login