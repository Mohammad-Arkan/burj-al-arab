import React from 'react';
import './img/header.png'
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icons/logo.png'
const Header = () => {
    return (
        <div>
            <div className='bg'>
                <div className='flex items-center gap-3 ml-48 pt-7 '>
                    <img className='logo' src={logo} alt="" />
                    <div className='nav-items'>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/book">Book</Link>
                    </div>                  
                </div>  
                <div className='title-container'>
                        <h1>Burj Al Arab</h1>
                        <h3>A global icon of Arabian luxury</h3>
                    </div>                                 
            </div>
            <div className=''></div>
        </div>
    );
};

export default Header;