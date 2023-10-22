import React from 'react'
import styl from './Clients.module.css'
import style from '../../App.css';

export default function Clients() {
  return (
    <div>
       <section className={`${styl.clients} ${styl.layout} mt-5`}>
        <div className="container">
       <div className="row">
        <div className="col-md">
          <div className="item text-center">
          <h5 className={`text-center ${styl.title}` }>TESTIMONIALS</h5>
          <span className='rounded-circle'><i className={` fa-solid fa-quote-right`}></i></span>
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
    <span ><i  className={`${styl.icon} fa-solid fa-angle-left`} ></i></span>
    

    </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
    <span><i className={`${styl.icon} fa-solid fa-angle-right`}></i></span>
    </button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='text-center text-light'>
     <h4 className={`${styl.text}`}>John Doe</h4>
     <p className='text-light'>Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!.</p>
     <h6>___ Google Inc. ___</h6>
     </div>
    </div>
    <div class="carousel-item">
     <div className='text-center text-light'>
     <h6 className={`${styl.text}`}>John Doe</h6>
     <p className='text-light'>Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!.</p>
     <h6>___ Google Inc. ___</h6>
     
     </div>
    </div>
   
  </div>

</div>
          </div>
        </div>
       </div>
        </div>
       </section>
    </div>
  )
}
