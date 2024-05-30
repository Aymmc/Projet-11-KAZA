import React from 'react'
import logo404 from './404.png'
import { NavLink } from 'react-router-dom';
import './NotFound.css'
function NotFound() {
    return (
        <>
            <section className='NotFound'>
                <img src={logo404} alt="logo 404"  />
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <li> <NavLink to="/">Retourner sur la page d’accueil</NavLink></li>
            </section>
        </>
    )
}
export default NotFound