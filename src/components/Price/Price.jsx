import React from 'react'
import style from './Price.module.css'
export default function Price() {
  return (
    <div>
      <section className='mt-5'> 
        <div className="container">
          <div className="row text-center">
            <h5 className={`mb-5`}>OUR PRICING</h5>
            <div className={`${style.item} col-md-4`}>
              <div className={`${style.head}`}>
                <span className={`${style.icon}`}><i class="fa-brands fa-gitlab"></i></span>
                <h3 className={`${style.title}`}>Free</h3>
                <h2>0<span>$</span></h2>
              </div>
              <div className={`${style.features}`}>
                <p>Any Ware Access</p>
              </div>
              <div className={`${style.features}`}>
                <p>10 GB Hosting</p>
              </div>
              <div className={`${style.features}`}>
                <p>-</p>
              </div>
              <div className={`${style.features}`}>
                <p>-</p>
              </div>
              <div className={`${style.features}`}>
                <p>-</p>
              </div>
              <div className="purch">
                <button className={`${style.btn} btn btn-outline-info text-dark px-4`}>purchaes</button>
              </div>
            </div>
            <div className={`${style.item} ${style.active} col-md-4`}>
              <div className={`${style.head}`}>
                <span className={`${style.icon}`}><i class="fa-regular fa-heart"></i></span>
                <h3 className={`${style.title}`}>Free</h3>
                <h2>0<span>$</span></h2>
              </div>
              <div className={`${style.features}`}>
                <p>Any Ware Access</p>
              </div>
              <div className={`${style.features}`}>
                <p>40 GB Hosting</p>
              </div>
              <div className={`${style.features}`}>
                <p>Import User Data</p>
              </div>
              <div className={`${style.features}`}>
                <p>Support 24/h</p>
              </div>
              <div className={`${style.features}`}>
                <p>-</p>
              </div>
              <div className="purch">
                <button className={`${style.btn} btn btn-info text-light px-4`}>purchaes</button>
              </div>
            </div>
            <div className={`${style.item} col-md-4`}>
              <div className={`${style.head}`}>
                <span className={`${style.icon}`}><i class="fa-solid fa-rocket"></i></span>
                <h3 className={`${style.title}`}>Free</h3>
                <h2>0<span>$</span></h2>
              </div>
              <div className={`${style.features}`}>
                <p>Any Ware Access</p>
              </div>
              <div className={`${style.features}`}>
                <p>100 GB Hosting</p>
              </div>
              <div className={`${style.features}`}>
                <p>Import User Data</p>
              </div>
              <div className={`${style.features}`}>
                <p>Support 24/h</p>
              </div>
              <div className={`${style.features}`}>
                <p>20 Unique Users</p>
              </div>
              <div className="purch">
                <button className={`${style.btnac} btn btn-outline-info text-dark px-4`}>purchaes</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
