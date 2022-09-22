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
            <div class="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label class="menu__btn" for="menu__toggle">
                <span></span>
              </label>

              <ul class="menu__box">
              <li><a class="menu__item" href="#Quality" spy={true} smooth={true} offset={-100} duration={500}>Overview</a></li>
                <li><a class="menu__item" href="#building" spy={true} smooth={true} offset={-100} duration={500}>Highlights</a></li>
                <li><a class="menu__item" href="#mapreacg-sec" spy={true} smooth={true} offset={-100} duration={500}>Location</a></li>
                <li><a class="menu__item" href="#floorplan" spy={true} smooth={true} offset={-100} duration={500}>Floor Plan</a></li>
                <li><a class="menu__item" href="#gallery" spy={true} smooth={true} offset={-100} duration={500}>Gallery</a></li>
                <li><a class="menu__item" href="#AmenitiesDetails" spy={true} smooth={true} offset={-100} duration={500}>Amenities</a></li>
                <li><a class="menu__item" href="#Specifications" spy={true} smooth={true} offset={-100} duration={500}>Specifications</a></li> 
                <li><a class="menu__item" href="#Payment-sec" spy={true} smooth={true} offset={-100} duration={500}>Payment Plans</a></li>               
                <li><a class="menu__item" href="#timeline" spy={true} smooth={true} offset={-100} duration={500}>Construction Status</a></li>                              
              </ul>
            </div>
          </div>
          <div className='menu1 logoct'>
          <Link to="top-sections" spy={true} smooth={true}><img src={logomob1} alt='logo'></img></Link>              
          </div>
          <div className='menu1 btn-rt'>              
              <button className='get-btn'><Link to="connect" spy={true} smooth={true} offset={-100} duration={500} delay={1000}>GET IN TOUCH</Link></button>
          </div>
        </div>    
        </div>
      </div>  
       </header>      
       
    </div>  
  )
}

export default Mobmenu;
