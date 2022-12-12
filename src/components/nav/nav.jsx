
import React from 'react'
import logo from '../assets/logoPortfolioMayusculas.png'
import './nav.css'

export const Nav = () =>{
    return(
        <nav>
            <div className='nav_container'>
                <img src={logo} alt = 'logo' id='logo'></img>
            </div>
        </nav>
    )
}