
import React, { useState } from 'react'
import styled from 'styled-components'
import Hamburguesa from './hamburguesa'
import { LinkHover } from '../hovers/hovers'
import { Logo, Switch } from '../assets/Detalles'

const NavSolo = styled.nav`
    position: relative;
    width: 100%;
`
const LogoContainer = styled.a`
    margin: 1.5vh 2vw;
    svg{
        width: auto;
        height: 9vh;
    }
    .stroke{
        stroke: ${({theme})=> theme.texto};
    }
    .fill{
        fill: ${({theme})=> theme.texto};
    } 
`

const NavContainer = styled.div`
    height: 12vh;
    min-height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 4;
    position: fixed;
    backdrop-filter:blur(4px);
    div{
        display: flex;
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
            margin: 3vw 0;
        }
        @media (min-width: 768px) {
            position: initial;
            margin: 0px 3vw;
            display: flex;
            align-items: center;
            a{
                margin: 0;
            }
        }
    }
    .links.active{
        width: 100%;
        top: 30vh;
        left: 0;
        right: 0;
        @media (min-width: 768px) {
            width: initial;
        }
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
        top: 12vh;
        left: 0;
    }
    @media(min-width: 768px) {
            display: none;
        }
`


const Nav = (props) =>{
    const [click, setClick] = useState(false )
    const hizoClick = () =>{
        // le cambia el valor al click
        setClick(!click)
    }
    return(
        <NavSolo>
            <NavContainer>
                <LogoContainer href = "#inicio">
                    <Logo></Logo>
                </LogoContainer>
                <div className={`links ${click ? 'active' : ''}`}>
                    <LinkHover  hizoClick  = {hizoClick} contenido="Inicio" href = "#inicio" ></LinkHover>
                    <LinkHover  hizoClick  = {hizoClick} contenido="Habilidades" href = "#habilidades" ></LinkHover>
                    <LinkHover  hizoClick  = {hizoClick} contenido="Proyectos" href = "#proyectos" ></LinkHover>
                    <LinkHover  hizoClick  = {hizoClick} contenido="Sobre mi" href = "#sobreMi" ></LinkHover>
                    <LinkHover  hizoClick  = {hizoClick} contenido="Contacto" href = "#contacto" ></LinkHover>
                    {/* este es el swich para el theme. Recibe una prop que le permite cambiar el tema al hacer click */}
                    <Switch change = {props.change}></Switch>
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