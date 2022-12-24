
import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logoPortfolioMayusculas.png'
import Hamburguesa from './hamburguesa'
import { LinkHover } from '../hovers/hovers'

const NavSolo = styled.nav`
    position: relative;
    width: 100%;
`
const NavContainer = styled.div`
    height: 10vh;
    min-height: 55px;
    width: 100%;
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
        margin: 10px 0vw 0vw 2vw;
    }
    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        display: block;
        transition: all .6s ease;
        a{
            margin: 3vw;
        }
        @media (min-width: 768px) {
            position: initial;
            margin: 0px 3vw;
            display: flex;
            align-items: center;
        }
    }
    .links.active{
        width: 100%;
        top: 30vh;
        left: 0;
        right: 0;
    }
    .burguer_div{
        margin: 10px 0vw 0vw 2vw;
        @media(min-width: 768px) {
            display: none;
        }
    }
`
const BgMenu = styled.div`
    position: fixed;
    backdrop-filter:blur(4px);
    width: 100vw;
    height: 93vh;
    top: -700px;
    left: -2000px;
    border-radius: 0 0 60% 0;
    z-index: 3;
    transition: all .6s ease;
    &.active{
        top: 10vh; //tengo que hacer que tenga exacto el tamaño del nav para que no haya nada de diferencia
        left: 0;
    }
    @media(min-width: 768px) {
            display: none;
        }
`

const Nav = () =>{

    const [click, setClick] = useState(false )
    const hizoClick = () =>{
        // le cambia el valor al click
        setClick(!click)
    }

/*     window.addEventListener("resize",()=>{
        
        window.screen.width > 768 && click === true? (setClick(false)) : (setClick(click));
    }) */

    return(
        <NavSolo>
            <NavContainer>
                <img src={logo} alt = 'logo' id='logo'></img>
                <div className={`links ${click ? 'active' : ''}`}>
                    <LinkHover  hizoClick  = {hizoClick} contenido="Inicio" href = "#inicio" ></LinkHover>
                    <LinkHover  hizoClick  = {hizoClick} contenido="Habilidades" href = "#habilidades" ></LinkHover>
                    <LinkHover  hizoClick  = {hizoClick} contenido="Proyectos" href = "#proyectos" ></LinkHover>
                    <LinkHover  hizoClick  = {hizoClick} contenido="Sobre mi" href = "#sobreMi" ></LinkHover>
                    <LinkHover  hizoClick  = {hizoClick} contenido="Contacto" href = "#contacto" ></LinkHover>
                </div>
                <div className='burguer_div'>
                    <Hamburguesa clicked = {click} hizoClick  = {hizoClick}/>
                </div>
            </NavContainer>
            <BgMenu className={`initial ${click ? 'active' : ''}`}/> 
        </NavSolo>
    )
}

export default Nav