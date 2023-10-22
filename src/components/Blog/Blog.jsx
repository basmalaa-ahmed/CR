import React from 'react';
import image from '../../Assets/images/blog1.jpg';
import image1 from '../../Assets/images/blog2.jpg';
import image2 from '../../Assets/images/blog3.jpg'
import style from './Blog.module.css'

export default function Blog() {
  return (
    <div>
       <section className='mt-5'>
        <div className="container">
          <div className="row text-center mt-5">
            <h5>LATEST NEWS</h5>
            <div className={` col-md-4`}>
              <div className="image">
                <img className='w-100' src={image} alt="" />
              </div>
              <div className={`${style.content}`}>
                <h6 className='fs-5'>Web Design And Graphic</h6>
                <div className={`${style.date}`}> 
                <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                  <li className={`${style.datesp}`}><i className={`${style.icon} fa-regular fa-calendar-days`}></i> 6 august</li>
                  <li className={`${style.datesp}`}><i className={`${style.icon} fa-regular fa-folder-open`}></i> web</li>
                  <li className={`${style.datesp}`}><i className={`${style.icon} fa-regular  fa-comments`}></i> 3 comments</li>

                </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, in quodsi vulputate pro.ullamcorper a posuere rhoncus vel te, in quodsiUbique his dico vituperata ut.</p>
                  <span className={`${style.more}`}>Read More..</span>
              </div>
            </div>
            <div className={` col-md-4`}>
              <div className="image">
                <img className='w-100' src={image1} alt="" />
              </div>
              <div className={`${style.content}`}>
                <h6 className='fs-5'>Web Design And Graphic</h6>
                <div className={`${style.date}`}> 
                <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                  <li className={`${style.datesp}`}><i className={`${style.icon} fa-regular fa-calendar-days`}></i> 6 august</li>
                  <li className={`${style.datesp}`}><i className={`${style.icon} fa-regular fa-folder-open`}></i> web</li>
                  <li className={`${style.datesp}`}><i className={`${style.icon} fa-regular  fa-comments`}></i> 3 comments</li>

                </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, in quodsi vulputate pro.ullamcorper a posuere rhoncus vel te, in quodsiUbique his dico vituperata ut.</p>
                  <span className={`${style.more}`}>Read More..</span>
              </div>
            </div>
            <div className={` col-md-4`}>
              <div className="image">
                <img className='w-100' src={image2} alt="" />
              </div>
              <div className={`${style.content}`}>
                <h6 className='fs-5'>Web Design And Graphic</h6>
                <div className={`${style.date}`}> 
                <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                  <li className={`${style.datesp}`}><i className={`${style.icon} fa-regular fa-calendar-days`}></i> 6 august</li>
                  <li className={`${style.datesp}`}><i className={`${style.icon} fa-regular fa-folder-open`}></i> web</li>
                  <li className={`${style.datesp}`}><i className={`${style.icon} fa-regular  fa-comments`}></i> 3 comments</li>

                </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, in quodsi vulputate pro.ullamcorper a posuere rhoncus vel te, in quodsiUbique his dico vituperata ut.</p>
                  <span className={`${style.more}`}>Read More..</span>
              </div>
            </div>
          </div>
        </div>
       </section>
    </div>
  )
}
