import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Mobmenu.css';
import logomob from '../Components/images/Logo.svg'
import logomob1 from '../Components/images/Logo.svg'
import { Link } from 'react-scroll';

import * as Scroll from 'react-scroll';
import {Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Mobmenu = () => {
 // Sticky Menu Area
 useEffect(() => {
  window.addEventListener('scroll', isSticky);
  return () => {
      window.removeEventListener('scroll', isSticky);
  };
});

window.scrollTo({
  top: 0,
  behavior: "smooth"
});



     
/* Method that will fix header after a specific scrollable */
     const isSticky = (e) => {
          const header = document.querySelector('.header-section');
          const scrollTop = window.scrollY;
          scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
      };


  return (
    <div>  
       <header className="header-section  d-xl-block">
       <div id='Topmob-sec'>       
      <div className='container'>
        <div className='manu-grid'>
          <div className='menu1 menu_1'>          
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>

              <ul className="menu__box">
              <li><a className="menu__item" href="#Quality" smooth="true" offset={-70} duration={500}>Overview</a></li>
                <li><a className="menu__item" href="#mapreacg-sec" smooth="true" offset={-70} duration={500}>Location</a></li>
                <li><a className="menu__item" href="#floorplan" smooth="true" offset={-70} duration={500}>Floor Plan</a></li>
                <li><a className="menu__item" href="#gallery" smooth="true" offset={-70} duration={500}>Gallery</a></li>
                <li><a className="menu__item" href="#AmenitiesDetails" smooth="true" offset={-70} duration={500}>Amenities</a></li>
                <li><a className="menu__item" href="#Specifications" smooth="true" offset={-70} duration={500}>Specifications</a></li> 
                <li><a className="menu__item" href="#Payment-sec" smooth="true" offset={-70} duration={500}>Payment Plans</a></li>               
                <li><a className="menu__item" href="#timeline" smooth="true" offset={-70} duration={500}>Construction Status</a></li>                              
              </ul>
            </div>
          </div>
          <div className='menu1 logoct'>
          <Link to="top-sections" smooth="true" offset={-70} duration={800}><img src={logomob1} alt='logo'></img></Link>              
          </div>
          <div className='menu1 btn-rt'>              
              <button className='get-btn'><Link to="connect" smooth="true" offset={-60} duration={800}>GET IN TOUCH</Link></button>
          </div>
        </div>    
        </div>
      </div>  
       </header>    
       
    </div>  
  )
}

export default Mobmenu;
