import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from './logo.svg'
function Header() {

    return (
        <header>
            <h1 className='Logo'>
                <img alt='logo' src={logo} />
            </h1>
            <ul className='menu'>
                <li> <NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/a-propos">A Propos</NavLink></li>
            </ul>
        </header>
    )
}
export default Header;