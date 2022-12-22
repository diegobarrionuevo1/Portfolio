import styled from "styled-components";
import { MuchasPuntas } from "../assets/Detalles";

import info from "../assets/Sliders/slidersInfo"

const TarjetaProyecto = (props) =>{
    return(<>
            <SvgContainer >
                <MuchasPuntas derecha= {props.derecha}/>
            </SvgContainer>
            <Container>
                <Fondo></Fondo>
                <SegundoDiv derecha = {props.derecha}>
                    <h1 derecha = {props.derecha}>  {props.titulo}  </h1>
                    <p>{props.contenido}</p>
                </SegundoDiv>
                <img src={props.imagen} alt="" />
                <Numero derecha = {props.derecha}>  {props.numero}  </Numero>
            </Container>
        </>
    )
}

const TarjetasPro = () =>{
    return(
        <>
        <Titulo>Proyectos</Titulo>
        {TarjetaProyecto (  
            {
            titulo:"Mexican Chiles Grill",
            contenido : "Esta fue mi primer web. La hice dentro de #ProyectoDalto ", 
            imagen : info.proyectos.mexican,
            derecha : 0,
            numero : "01"
            }
        )}
        {TarjetaProyecto (  
            {
            titulo:"Tetris  (IN.PROCESS) ",
            contenido : "Este fue uno de los proyectos que mas aporto a mi entendimiento de JS", 
            imagen : info.proyectos.tetrisJs,
            derecha : 1,
            numero : "02"
            }
        )}
        <a id='sobreMi'></a>
        <a id='contacto'></a>
        </>
        

    )
}

export default TarjetasPro;

const Titulo = styled.div`
    font-family: ${({theme})=> theme.fuente.Italiana};
    font-size: 2.2em;
    color: ${({theme})=> (theme.texto)};
    width: 90%;
    margin: 5vh 0vh -5vh 0vh;
    display: flex;
`

const SvgContainer = styled.section`
    position: relative;
    div{
        top: 8vh;
        right: ${(props) => (props.children.props.derecha ? "15vw" : "-65vw")};
    }
`
const Fondo = styled.div`
    position: absolute;
    width:100% ;
    height: 100%;
    border-radius: 12px;
    background-color: #f6f6f610;
    z-index: -1;
    top: -3px;
    bottom: 0px;
    right: 0px;
    left: -3px;
`

const Container = styled.div`
    display: flex;
    width: 75vw;
    height: auto;
    flex-direction: column;
    padding: 5vw;
    border-radius: 12px;
    backdrop-filter: blur(2px);
    margin: 15vh 0 0;
`
const SegundoDiv= styled.div`
        position: relative;
        width: 100%;
        display: flex;
        justify-content: ${(props) => (props.derecha ? "flex-end" : "flex-start")};
        h1{
            position: absolute;
            font-family: ${({theme})=> theme.fuente.Italiana};
            font-size: 1.7em;
            font-weight: 500;
            top: -34vw;
            left:  ${(props) => (props.derecha ? "-9vw" : "20vw")};
            min-width: 85%;
            max-width: 86%;
            text-align:${(props) => (props.derecha ?  "start": "end" )};
        }
        p{
            font-family: ${({theme})=> theme.fuente.Italiana};
            font-size: .9em;
            text-align: ${(props) => (props.derecha ? "end" : "start")};
            max-width: 75%;
        }
    `
const Numero = styled.h1`
            position: absolute;
            font-family: ${({theme})=> theme.fuente.Ubuntu};
            font-size: 1.9em;
            font-weight: 100;
            bottom: -14vw;
            left:  -5vw;
            width: 108%;
            text-align:${(props) => (props.derecha ?  "start": "end" )};
`