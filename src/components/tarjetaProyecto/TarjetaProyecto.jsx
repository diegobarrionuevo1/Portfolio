import styled from "styled-components";
import { MuchasPuntas } from "../assets/Detalles";

import info from "../assets/Sliders/slidersInfo"

const TarjetaProyecto = (props) =>{
    return(<>
            <TotalTarjeta derecha= {props.derecha}>
                <SvgContainer >
                    <MuchasPuntas derecha= {props.derecha}/>
                </SvgContainer>
                <Container>
                    <Fondo></Fondo>
                    <SegundoDiv derecha = {props.derecha}>
                        <h1 derecha = {props.derecha}>  {props.titulo}  </h1>
                        <p>{props.contenido}</p>
                    </SegundoDiv>
                    <a href={props.link} target="_blank" rel="noreferrer">
                        <img src={props.imagen} alt="" />
                    </a>
                    <Numero derecha = {props.derecha}>  {props.numero}  </Numero>
                </Container>
            </TotalTarjeta>
        </>
    )
}

const TarjetasPro = () =>{
    return(
        <>
        <TotalContainer >
        <Titulo>Proyectos</Titulo>
        {TarjetaProyecto (  
            {
            titulo:"Mexican Chiles Grill",
            contenido : "Esta fue mi primer web. La hice dentro de #ProyectoDalto ", 
            imagen : info.proyectos.mexican,
            derecha : 0,
            numero : "01",
            link : "https://diegobarrionuevo1.github.io/Proyecto-individual-N-1/"
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
        {TarjetaProyecto (  
            {
            titulo:"Coffee Delivery",
            contenido : "Realizado con el objetivo de probar nuevas librerias.", 
            imagen : info.proyectos.cafe,
            derecha : 0,
            numero : "03",
            link:"https://delivery-cafe.vercel.app/"
            }
        )}
        </TotalContainer>
        <a id='sobreMi'></a>
        <a id='contacto'></a>
        </>
        

    )
}

export default TarjetasPro;

const TotalContainer = styled.div`
    max-width: 1024px;
    z-index: 2;
`
const TotalTarjeta = styled.div`
/*     @media (min-width: 1024px) {
        position: relative;
        right: ${(props) => (props.derecha ? "auto" : "-9%")};
        left: ${(props) => (props.derecha ? "-9%" : "auto")};
    } */
`


const Titulo = styled.div`
    font-family: ${({theme})=> theme.fuente.Italiana};
    font-size: 2.2em;
    color: ${({theme})=> (theme.texto)};
    width: 100%;
    margin: 15% 0 0 0;
    display: flex;
    justify-content: center;
`

const SvgContainer = styled.section`
    position: relative;
    width: 100%;
    z-index: -1;
    top: -10vh;
    div{
        position: absolute;
        right: ${(props) => (props.children.props.derecha ? "auto" : "-18%")};
        left: ${(props) => (props.children.props.derecha ? "-18%" : "auto")};
/*         @media (min-width: 1024px){
            top: -300px;
        } */
    }
`
const Fondo = styled.div`
    position: absolute;
    width:100% ;
    height: 100%;
    border-radius: 12px;
    background-color: ${({theme}) => theme.blurFondo};
    z-index: -1;
    top: -3px;
    bottom: 0px;
    right: 0px;
    left: -3px;
`

const Container = styled.div`
    display: flex;
    width: 75vw;
    max-height: 710px;
    flex-direction: column;
    padding: 5vw;
    border-radius: 12px;
    backdrop-filter: blur(2px);
    margin: 15vh 0 0;
    z-index: 2;
    a{
        display: flex;
        img{
            width: 100%;
            max-width: 730px;
        }
    }

    @media (min-width: 505px){
        margin: 25% 0 0 0;
        width: 65vw;
    }
    @media (min-width: 1024px){
        width: 664px;
        padding: 51px;
    }
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
            top: -84%;
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
            bottom: -16%;
            left:  -5%;
            width: 108%;
            text-align:${(props) => (props.derecha ?  "start": "end" )};
`