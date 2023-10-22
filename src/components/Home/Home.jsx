import React  from 'react';
import style from './Home.module.css';
export default function Home() {

 
  return (
    <div>
     
      <section className={`${style.home} ${style.layout}  d-flex justify-content-start align-items-center`}>
      <div className="container">
      <div className={`${style.caption}`}>
          <h1 className={`${style.text}`}>WE ARE CREATIVE</h1>
          <h6 className={`${style.text6}`}>WE MAKE LOGOS BRANDS WEBSITES ALL THIS WITH LOVE</h6>
          <div className={`${style.button} btn btn-outline-light me-2`}>see more</div>
          <div className={`${style.button} btn btn-outline-info ms-2`}>VIEW WORK</div>
        </div>
      </div>
       
      </section>
    </div>
  )
}
