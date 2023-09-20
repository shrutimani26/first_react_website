import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =() => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    }; 

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

  return (
    <>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>

    <nav className="navbar">
        <div className = "navbar-container">
            <Link to="/" className ="navbar-logo">
                TRAVEL
            </Link>
            <div className='menu-icon' onClick = {handleClick}>
                <i className={click ? 'fa fas fa-times' : 'fa fas fa-bars'}/>
            </div>
            <ul className = {click ? 'nav-menu active' :'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className ='nav-links' onClick = {closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/services" className ='nav-links' onClick = {closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/products" className ='nav-links' onClick = {closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/sign-up" className ='nav-links-mobile' onClick = {closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
    </nav>
    
    </>
    
  )
}

export default Navbar;