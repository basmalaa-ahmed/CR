import React from 'react';
import style from './About.module.css';

export default function About() {
  return (
    <div>
      <section className='mt-5'>
        <div className="container">
          <div className={`${style.main}`}>
            <p>LOREM IPSUM DOLOR SIT AMET, IN QUODSI VULPUTATE PRO. UBIQUE MALUISSET VEL TE, HIS DICO VITUPERATA UT. IN QUODSIUBIQUE MALUISSET VEL TE, HIS DICO VITUPERATA UT IN QUODSIUBIQUE. IN QUODSI VULPUTATE.</p>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 d-flex gap-4">
             <div className={`${style.icon}`}>
             <i className="fa-solid fa-pen-ruler"></i>
             </div>
             <div className="info">
              <h6 className={`${style.heading}`}>WEB DESIGN</h6>
              <p className={`${style.p}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
             </div>
            </div>
            <div className="col-md-4 d-flex gap-4">
             <div className={`${style.icon}`}>
             <i className="fa-solid fa-pen-ruler"></i>
             </div>
             <div className="info">
              <h6 className={`${style.heading}`}>WEB DESIGN</h6>
              <p className={`${style.p}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
             </div>
            </div>
            <div className="col-md-4 d-flex gap-4">
             <div className={`${style.icon}`}>
             <i className="fa-solid fa-pen-ruler"></i>
             </div>
             <div className="info">
              <h6 className={`${style.heading}`}>WEB DESIGN</h6>
              <p className={`${style.p}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
             </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-5'>
        <div className="container">
          <div className="row">
            <div className={`col-md-5 ${style.img}`}>
            </div>
            <div className="col-md-7">
              <div className="info">
                <div className="title">
                  <h5 className={`${style.title}`}>WHY CHOOSE US ?</h5>
                </div>
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class={`accordion-header ${style.header}`}>
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      WEB DESIGN
      </button>
    </h2>
    <div id="collapseOne" className={`accordion-collapse collapse show ${style.p}`} data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, his dico vituperata ut. in quodsiUbique maluisset vel te, his dico vituperata ut in quodsiUbique. in quodsi vulputate.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class={`accordion-header ${style.header}`}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      CREATIVE TEMPLATE
      </button>
    </h2>
    <div id="collapseTwo" className={`accordion-collapse collapse show ${style.p}`} data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, his dico vituperata ut. in quodsiUbique maluisset vel te, his dico vituperata ut in quodsiUbique. in quodsi vulputate.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class={`accordion-header ${style.header}`}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      UNLIMITED SUPPORT
      </button>
    </h2>
    <div id="collapseThree" className={`accordion-collapse collapse show ${style.p}`} data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, his dico vituperata ut. in quodsiUbique maluisset vel te, his dico vituperata ut in quodsiUbique. in quodsi vulputate.

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

