import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"
export default class Navbar extends Component {
  
  render() {
   const navbarStyle =({isActive})=>{
    return {
      color : isActive ? '#00c0ce' :''
    }
   }
    return (
      <div>
        <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className={`${style.nav} navbar-brand`}>CR.</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink style={navbarStyle} className={`nav-link`} to={'home'}  >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navbarStyle}  className="nav-link" to={'about'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  style={navbarStyle}className="nav-link" to={'services'}>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navbarStyle} className="nav-link" to={'portfolio'}>Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navbarStyle} className="nav-link" to={'clients'}>Clients</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navbarStyle} className="nav-link" to={'price'}>Price</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navbarStyle} className="nav-link" to={'blog'}>Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navbarStyle} className="nav-link" to={'contact'}>Contact</NavLink>
        </li>
     
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}
