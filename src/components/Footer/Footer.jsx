import React from 'react'
import {Link} from 'react-router-dom'
import style from './Footer.module.css'
 export default function Footer() {
  return (
    <div>
      <footer className={`${style.Footer} text-center mt-5`}>
        <h4 className={`${style.footer_logo}`}>CR.</h4>
          <ul className={`${style.social} text-center`}>
              <li className={`${style.icon}`}> <Link className={`${style.link}`} to={'https://www.facebook.com/'}><i class="fab fa-facebook"></i></Link></li>
              <li className={`${style.icon}`}> <Link className={`${style.link}`} to={'https://www.linkedin.com/in/basmala-ahmed-/'}><i class="fa-brands fa-linkedin"></i></Link></li>
              <li className={`${style.icon}`}> <Link className={`${style.link}`} to={'https://github.com/basmalaa-ahmed'}><i class="fa-brands fa-github"></i></Link></li>
          </ul>
        <div className={`${style.footer_sub}`}>
          <p>Copy Right © By Basmala 2023 | All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
