import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import './Navbarmenu.css'
import logo from "../images/logo.png";
import Slidemain from '../Slidemain';
import {Link} from 'react-scroll';


const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className='header__middle'>
        <div className='container'>
            <div className='row'>
                <div className='header__middle__menus'>
                    <nav className='main-nav'>
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className='menubar__button' style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className='menubar__button' style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className='menu-item'>
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} spy={true} smooth={true} duration={1000} to='mainslide'> Overview </NavLink> 
                    </li>        
                    <li className='menu-item' ><Link onClick={toggleClass} activeClassName='is-active' to="Quality" spy={true} smooth={true} duration={1000}> Highlights </Link> </li>
                    <li className='menu-item' ><Link onClick={toggleClass} activeClassName='is-active' spy={true} smooth={true} duration={1000}  to='mapreacg-sec'> Location </Link> </li>
                    <li className='menu-item' ><Link onClick={toggleClass} activeClassName='is-active'  spy={true} smooth={true} duration={1000} to="plan"> Floor Plan  </Link> </li>
                    <li className='menu-item' ><Link onClick={toggleClass} activeClassName='is-active' to="gallery" spy={true} smooth={true} duration={1000}> Gallery </Link> </li>
                    <li className='menu-item' ><Link onClick={toggleClass} activeClassName='is-active' to="timeline" spy={true} smooth={true} duration={1000}> Construction Status  </Link> </li>
                    <li className='menu-item' ><Link onClick={toggleClass} activeClassName='is-active' to="contact" spy={true} smooth={true} duration={1000}> Connect With Us </Link> </li>                   
                    </ul>                    
                    </nav>     
                </div>  
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu
