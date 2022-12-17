
import { useState } from "react"
import styled from "styled-components"
import sliderInfo from "../assets/Sliders/slidersInfo"


const Pildoras = () =>{
    const imagenes = sliderInfo.pildoras
    const [pildor, setPildor] = useState(0)
    
    return(
        <>
        <Container>
            <Titulo>Habilidades</Titulo>
            <ContainerPildoras>
                
                <PildoraDiv  image={imagenes.html} onClick={()=> setPildor(0)} className= { (pildor ===0) ? "active" : ""}>
                    <h1>Html</h1>
                </PildoraDiv>
                <PildoraDiv image={imagenes.css} onClick={()=> setPildor(1)} className= { (pildor ===1) ? "active" : ""}>
                    <h1>Css</h1>
                </PildoraDiv>
                <PildoraDiv image={imagenes.javascript} onClick={()=> setPildor(2)} className= { (pildor ===2) ? "active" : ""}>
                    <h1>Javascript</h1>
                </PildoraDiv>
                <PildoraDiv image={imagenes.react} onClick={()=> setPildor(3)} className= { (pildor ===3) ? "active" : ""}>
                    <h1>React</h1>
                </PildoraDiv>
                <PildoraDiv image={imagenes.node} onClick={()=> setPildor(4)} className= { (pildor ===4) ? "active" : ""}>
                    <h1>Node</h1>
                </PildoraDiv>
            </ContainerPildoras>
        </Container>
        </>
    )
}

export default Pildoras


const Container = styled.section`
    background-color: ${({theme})=> theme.fondo};
    width: 100%;
    padding: 4vh 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ContainerPildoras = styled.div`
    width: 100%;
    display: flex;
`
const Titulo = styled.div`
    font-family: ${({theme})=> theme.fuente.Italiana};
    font-size: 1.5em;
    color: ${({theme})=> (theme.texto)};
    width: auto;
    margin: 4vh 0vw;
    display: flex;
`

const PildoraDiv = styled.div`
    height: 20vh;
    border-radius: 20px;
    margin: 3px;
    cursor: pointer;
    flex: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    transition: all 500ms ease-in-out;
    background-image: url('${(props)=>props.image}');
    filter: brightness(79%);
    overflow: hidden;

    h1{
        position: absolute;
        font-size: 1em;
        font-family: ${({theme})=> theme.fuente.Ubuntu};
        bottom: 20px;
        left: 20px;
        margin: 0;
        display: none;
        text-shadow: 0px 0px 15px #000000;
    }
    &.active{
        flex: 10;
        h1{
            display: initial;
        }
    }
`