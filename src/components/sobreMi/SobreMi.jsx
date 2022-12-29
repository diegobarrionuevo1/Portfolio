import { useState } from "react"


const { default: styled } = require("styled-components")

const SobreMi = () => {
    const [click, setclick] = useState(false)
    const cambiar = ()=>{
        setclick(!click)
    }
    return(
        <Container estado={click}>
            <Sobre >
                <div>
                <h1>¡Hola!</h1> 
                <p>Soy un Estudiante de Ingeniería en Sistemas de Información seleccionado para Proyecto dalto.</p>
                </div>  
                <p>Algo que nunca a cambiado en mi es la pasión que tengo por aprender, tengo una necesidad muy grande por entender como funciona todo, para que sirve y como puedo aplicarlo en mi vida o mi trabajo. Esto aplica para todo los ambitos de la vida pero principalmente en el software y en el emprendedurismo.</p>
                <h2 onClick={()=>{cambiar()}}>Ver más</h2>
            </Sobre>
        </Container>
    )
}

export default SobreMi

const Container = styled.div`
    transition: max-height .8s ease-in-out;
    max-height: ${(props)=> props.estado ? "700px" : "150px"};
    background-color: ${({theme})=> theme.noFondo};
    margin-top: 12vh;
    overflow: hidden;
    position: relative;
    padding-top: 2vh;
    @media (min-width: 800px){
        max-height: ${(props)=> props.estado ? "1500px" : "220px"};
    }
    @media (min-width: 1440px){
        max-height: ${(props)=> props.estado ? "1500px" : "220px"};
    }
`

const Sobre = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    div{
        display: flex;
        h1{
            font-family: ${({theme})=> theme.fuente.Italiana};
            font-size: 1.9em;
            color: ${({theme})=> theme.noTexto};
            margin: 2vh;
        }
        p{
            margin: 1vw 1vw 0vw 4vw;
        }
    }
    p{
            margin: 0vw 1vw 9% 4vw;
            color: ${({theme})=> theme.noTexto};
            font-family: ${({theme})=> theme.fuente.Italiana};
        }
    h2{
        width: 100%;
        text-align: center;
        font-family: ${({theme})=> theme.fuente.Ubuntu};
        font-size: .9em;
        color: ${({theme})=> theme.noTexto};
        background-color: ${({theme})=> theme.noFondo};
        border-bottom: solid 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        cursor: pointer;

        &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 50%;
        height: 2px;
        background-color: #447fff;
        filter: saturate(200%);
        transform: scaleX(0);
        transform-origin: bottom left;
        transition: transform 0.3s;
        }
        &:after {
            content:'';
            position: absolute;
            bottom: 0;
            right: 0;
            left : 50%;
            height: 2px;
            background-color: #447fff;
            filter: saturate(200%);
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s;
        }

        &:hover {
            &:before {
                transform: scaleX(1);
            }

            &:after {
                transform: scaleX(1);
            }
        }
    }

`