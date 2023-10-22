import React from 'react';
import style from '../../App.css'
import styl from './Portfolio.module.css';
import image1 from '../../Assets/images/gallary1.jpg'
import image2 from '../../Assets/images/gallary2.jpg'
import image3 from '../../Assets/images/gallary3.jpg'
import image4 from '../../Assets/images/gallary4.jpg'
import image5 from '../../Assets/images/gallary5.jpg'
import image6 from '../../Assets/images/gallary6.jpg'
export default function Portfolio() {
  return (
    <div>
       <section className='mt-5'>
        <div className="container">
        <h5 className='text-center'>SOME OF WORK</h5>
        <div className="row mt-5">
          <div className="col-md-4">
          <div className={`${styl.image}`}>
            <img className='w-100' src={image1} alt="" />
            <div className={`${styl.layout}`}>
             <div className="info text-center">
             <h6>web design</h6>
              <span className={`${styl.icon}`}><i class="fa-solid fa-magnifying-glass"></i></span>
              <span className={`${styl.icon}`}><i class="fa-solid fa-link"></i></span>
             </div>
            </div>
            </div>          </div>
          <div className={`col-md-4 ${style.hover}`}>
            <div className={`${styl.image}`}>
            <img className='w-100' src={image2} alt="" />
            <div className={`${styl.layout}`}>
             <div className="info text-center">
             <h6>web design</h6>
              <span className={`${styl.icon}`}><i class="fa-solid fa-magnifying-glass"></i></span>
              <span className={`${styl.icon}`}><i class="fa-solid fa-link"></i></span>
             </div>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className={`${styl.image}`}>
            <img className='w-100' src={image3} alt="" />
            <div className={`${styl.layout}`}>
             <div className="info text-center">
             <h6>web design</h6>
              <span className={`${styl.icon}`}><i class="fa-solid fa-magnifying-glass"></i></span>
              <span className={`${styl.icon}`}><i class="fa-solid fa-link"></i></span>
             </div>
            </div>
            </div>          </div>
          <div className="col-md-4">
          <div className={`${styl.image}`}>
            <img className='w-100' src={image4} alt="" />
            <div className={`${styl.layout}`}>
             <div className="info text-center">
             <h6>web design</h6>
              <span className={`${styl.icon}`}><i class="fa-solid fa-magnifying-glass"></i></span>
              <span className={`${styl.icon}`}><i class="fa-solid fa-link"></i></span>
             </div>
            </div>
            </div>          </div>
          <div className="col-md-4">
          <div className={`${styl.image}`}>
            <img className='w-100' src={image5} alt="" />
            <div className={`${styl.layout}`}>
             <div className="info text-center">
             <h6>web design</h6>
              <span className={`${styl.icon}`}><i class="fa-solid fa-magnifying-glass"></i></span>
              <span className={`${styl.icon}`}><i class="fa-solid fa-link"></i></span>
             </div>
            </div>
            </div>          </div>
          <div className="col-md-4">
          <div className={`${styl.image}`}>
            <img className='w-100' src={image6} alt="" />
            <div className={`${styl.layout}`}>
             <div className="info text-center">
             <h6>web design</h6>
              <span className={`${styl.icon}`}><i class="fa-solid fa-magnifying-glass"></i></span>
              <span className={`${styl.icon}`}><i class="fa-solid fa-link"></i></span>
             </div>
            </div>
            </div>          </div>
        </div>
        </div>
       </section>
    </div>
  )
}
