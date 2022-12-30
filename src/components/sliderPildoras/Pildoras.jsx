
import { useState } from "react"
import styled from "styled-components"
import { PocasPuntas } from "../assets/Detalles"
import sliderInfo from "../assets/Sliders/slidersInfo"

function Pildora(props){
    const setEstado= ()=>{
        return(props.handle(props.num))
    }
    return(
    <PildoraDiv  image={props.image} onClick={setEstado}  active = {(props.estado === props.num)} /* className= { (props.estado === props.num) ? "active" : ""} */>
                    <h1>{props.contenido}</h1>
    </PildoraDiv>
    )
}

const Pildoras = () =>{
    const imagenes = sliderInfo.pildoras
    const [pildor, setPildor] = useState(0)
    const activar = (num)=>{
        setPildor(num)
    }
    return(
        <>
        <ContainerDetalle>
            <PocasPuntas/>
        </ContainerDetalle>
        <Container>
            <Fondo></Fondo>
            <TextContainer>
                <h1>Habilidades</h1>
                <p>¡Siempre estoy aprendiendo algo nuevo!</p>
            </TextContainer>
            <a id='proyectos'></a>
            <ContainerPildoras>
                <Pildora  image={imagenes.html} handle={activar} contenido ="Html" num = {0} estado = {pildor}/>
                <Pildora  image={imagenes.css} handle={activar} contenido ="Css" num = {1} estado = {pildor} />
                <Pildora  image={imagenes.javascript} handle={activar} contenido ="Javascript" num = {2} estado = {pildor}/>
                <Pildora  image={imagenes.react} handle={activar} contenido ="React" num = {3} estado = {pildor}/>
                <Pildora  image={imagenes.node} handle={activar} contenido ="Node //inProcess//" num = {4} estado = {pildor}/>
            </ContainerPildoras>
        </Container>
        </>
    )
}

export default Pildoras

const ContainerDetalle = styled.div`
    position: relative;
    width: 100%;
    z-index: 0;
    div{
        top: -12vh;
        left: -8%;
        right: auto;
        position: absolute;
    }
`
const Fondo = styled.div`
    position: absolute;
    width:100% ;
    height: 100%;
    background-color: ${({theme}) => theme.blurFondo};
    z-index: -1;
    top: -3px;
    bottom: 0px;
    right: 0px;
    left: -3px;
`
const Container = styled.section`
    backdrop-filter: blur(2px);
    width: 100%;
    padding: 4vh 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ContainerPildoras = styled.div`
    width: 100%;
    display: flex;
    z-index: 1;
    @media (min-width: 768px){
        width: 80%;
        margin: 5vw 0vw 2vw 0vw;
        max-width: 1300px;
    }
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0;
    h1{
        width: 100%;
        font-family: ${({theme})=> theme.fuente.Italiana};
        font-size: 1.9em;
        font-weight: 300;
        color: ${({theme})=> (theme.texto)};
        margin: 0;
        z-index: 1;
    }
    p{
        width: 50%;
        text-align: right;
        font-family: ${({theme})=> theme.fuente.Italiana};
        font-size: .8em;
        font-weight: 300;
        color: ${({theme})=> (theme.texto)};
        margin: 0;
        margin-top: -10px;
        z-index: 1;
    }
`

const PildoraDiv = styled.div`
    height: 15vh;
    border-radius: 20px;
    margin: 3px;
    cursor: pointer;
    flex: ${(props)=> props.active? "10": "1"};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    transition: all 500ms ease-in-out;
    background-image: url('${(props)=>props.image}');
    filter: brightness(89%);
    overflow: hidden;
    @media (min-width: 768px){
        min-height: 220px;
    }

    h1{
        position: absolute;
        font-size: 1em;
        font-family: ${({theme})=> theme.fuente.Ubuntu};
        bottom: 20px;
        left: 20px;
        margin: 0;
        display: ${(props)=> props.active? "initial": "none"};
        text-shadow: 0px 0px 15px ${({theme}) => theme.noTexto};
    }
`