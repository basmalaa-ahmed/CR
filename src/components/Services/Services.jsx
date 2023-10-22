import React from 'react'
import style from './Services.module.css'
import styl from '../../App.css'

export default function Services() {
  return (
    <div>
      <section className='mt-5'>
        <div className="container text-center">
          <h5>OUR SERVICES</h5>
          <div className="row mt-5">
            <div className={`col-md-4 ${style.item}`}>
            <i className={`fa-solid fa-pencil ${style.icon}`}></i>
            <h6>GRAPHIC DESIGN</h6>
            <p >Lorem ipsum dolor sit amet, in quodsi vulputate pro. vel te, in quodsiUbique his dico vituperata ut.</p>
            </div>
            <div className={`col-md-4 ${style.item}`}>
            <i className={`fa-solid fa-laptop ${style.icon}`}></i>
            <h6>RESPONSIVE DESIGN</h6>
            <p  >Lorem ipsum dolor sit amet, in quodsi vulputate pro. vel te, in quodsiUbique his dico vituperata ut.</p>
            </div>
            <div className={`col-md-4 ${style.item}`}>
            <i className={`fa-solid fa-mobile-screen ${style.icon}`}></i>
            <h6>MOBILE APPS</h6>
            <p  >Lorem ipsum dolor sit amet, in quodsi vulputate pro. vel te, in quodsiUbique his dico vituperata ut.</p>
            </div>
            <div className={`col-md-4 ${style.item}`}>
            <i className={`fa-solid fa-pencil ${style.icon}`}></i>
            <h6>GRAPHIC DESIGN</h6>
            <p  >Lorem ipsum dolor sit amet, in quodsi vulputate pro. vel te, in quodsiUbique his dico vituperata ut.</p>
            </div>
            <div className={`col-md-4 ${style.item}`}>
            <i className={`fa-solid fa-pencil ${style.icon}`}></i>
            <h6>GRAPHIC DESIGN</h6>
            <p  >Lorem ipsum dolor sit amet, in quodsi vulputate pro. vel te, in quodsiUbique his dico vituperata ut.</p>
            </div>
            <div className={`col-md-4 ${style.item}`}>
            <i className={`fa-solid fa-chart-line ${style.icon}`}></i>
            <h6>seo</h6>
            <p  >Lorem ipsum dolor sit amet, in quodsi vulputate pro. vel te, in quodsiUbique his dico vituperata ut.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
