
import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logoPortfolioMayusculas.png'
import Hamburguesa from './hamburguesa'

const NavSolo = styled.nav`
    position: relative;
    width: 100vw;
`
const NavContainer = styled.div`
    height: 7vh;
    min-height: 55px;
    width: 100vw;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    z-index: 4;
    position: fixed;
    backdrop-filter:blur(4px);
    mix-blend-mode: hard-light;
    div{
        display: flex;
    }
    img{
        z-index:5;
        margin-left: 2vw;
    }
    a{
        color: ${({theme})=> theme.texto};
        font-family: ${({theme})=> theme.fuente.Ubuntu};
        text-decoration: none;
        margin: 1.5rem 0rem ;
        display: block;
        @media (min-width: 768px) {
            font-size: 1.5rem;
            position: initial;
            margin: 0px 10px;
            display: inline;
        }
    }
    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        margin-left: auto;
        margin-top: auto;
        text-align: center;
        @media (min-width: 768px) {
            position: initial;
            margin: 0;
            display: flex;
            align-items: center;
        }
    }
    .links.active{
        width: 100vw;
        top: 30vh;
        left: 0;
        right: 0;
        display: block;
    }
    .burguer_div{
        @media(min-width: 768px) {
            display: none;
        }
    }
`

const Nav = () =>{
    return(
        <NavSolo>
            <NavContainer>
                <img src={logo} alt = 'logo' id='logo'></img>
                <div className='links '>
                    <a href='/'>Inicio</a>
                    <a href='/'>Tecnologias</a>
                    <a href='/'>Proyectos</a>
                    <a href='/'>Sobre mi</a>
                    <a href='/'>Contacto</a>
                </div>
                <div className='burguer_div'>
                    <Hamburguesa></Hamburguesa>
                </div>
            </NavContainer>
        </NavSolo>
    )
}

export default Nav