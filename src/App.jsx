import React, { Component } from 'react'
import MasterLayout from './components/MasterLayout/MastrtLayout.jsx'
import {RouterProvider, createBrowserRouter, createHashRouter} from 'react-router-dom'
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Blog from './components/Blog/Blog.jsx';
import Contact from './components/Contact/Contact.jsx';
import Clients from './components/Clients/Clients.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Price from './components/Price/Price.jsx';
import Home from './components/Home/Home.jsx';

const router= createHashRouter([
  {path:'',element:<MasterLayout/>,children:[
    {path:'',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'services',element:<Services/>},
    {path:'blog',element:<Blog/>},
    {path:'contact',element:<Contact/>},
    {path:'clients',element:<Clients/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'price',element:<Price/>},
  ]}
]);
export default class App extends Component {
  render() {
    return (
      <div>
        <RouterProvider router={router}/>
      
       
      </div>
    )
  }
}

