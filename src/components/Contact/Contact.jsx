import React from 'react'
import style from './Contact.module.css';
import {Formik, useFormik} from "formik"
export default function Contact() {
  function validate(values){
    let errors={};
    if(!values.name){
      errors.name='Firstname is required.'
    }
    if(!values.email){
      errors.email='Valid email is required.'
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email='Valid email is required.'
    }
    if(!values.message){
      errors.message='Message.'
    }
    return errors;
  }
  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      subject:'',
      message:'',
        },
        validate,
        onSubmit:(values)=>{
          console.log(values)
        }
  })
  return (
    <div>
      <section>
        <div className="container">
          <div className="row text-center mt-5">
            <h5>GET IN TOUCH</h5>
            <div className="col-md-4">
              <span className={`${style.icon}`}><i class="fa-solid fa-mobile-screen"></i></span>
              <h6>PHONE</h6>
              <p className={`${style.text}`}>+20 01093081230</p>
            </div>
            <div className="col-md-4">
              <span className={`${style.icon}`}><i class="fa-solid fa-envelope-open"></i></span>
              <h6>MAIL</h6>
              <p className={`${style.text}`}>basmalaaahmed23@gmail.com</p>
            </div>
            <div className="col-md-4">
              <span className={`${style.icon}`}><i class="fa-solid fa-location-dot"></i></span>
              <h6>ADDRESS</h6>
              <p className={`${style.text}`}>Cairo</p>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
           <div className="row">
            <div className="col-md-6">
            <input type="text" placeholder='Name *' id='name' className='form-control my-3' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.onBlur} />
            {formik.errors.name && formik.errors.name ? <p className='text-danger'>{formik.errors.name}</p>: null} 
            </div>
            <div className="col-md-6">
            <input type="email" placeholder='Email *' id='email' className='form-control my-3'value={formik.values.email} onChange={formik.handleChange} onBlur={formik.onBlur} />
            {formik.errors.email && formik.touched.email ? <p className='text-danger'>{formik.errors.email}</p>: null} 
            </div>
           </div>
           <div className="row">
            <div className="col">   
              <input type="text" placeholder='Subject' id='subject' className='form-control my-3'value={formik.values.subject} onChange={formik.handleChange} /></div>
           </div>
           <div className="row">
            <div className="col">
            <input type="text" placeholder='Message *' id='message' className='form-control my-3'value={formik.values.message} onChange={formik.handleChange} onBlur={formik.onBlur} />
            {formik.errors.message && formik.touched.message ? <p className='text-danger'>{formik.errors.message}</p>: null} 
            </div>
           </div>
            <button className='btn btn-info text-light py-2 mx-auto'> SEND MESSAGE</button>
          </form>
        </div>
      </section>
    </div>
  )
}
