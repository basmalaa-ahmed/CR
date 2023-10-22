import React, { Component } from 'react'
import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';

export default class MastrtLayout extends Component {
  render() {
    return (
      <div>
      <Navbar/>
     <Outlet/>
       
     
       <Footer/>
      </div>
    )
  }
}
