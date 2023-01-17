import { useState } from "react"

import Modal from "../proyectoModal/Modal"


const { default: styled } = require("styled-components")

const SobreMi = () => {
    const [click, setclick] = useState(false)
    const cambiar = ()=>{
        setclick(!click)
    }
    const [modal, setModal] = useState(false)
    const modalHandle = ()=>{
        if (click){
                setModal(!modal)
        }
    }
    return(
        <Container estado={click}>
            <Sobre >
                <div className="primerDiv">
                <h1>¡Hola!</h1> 
                <p>Soy Diego, estudiante de Ingeniería en Sistemas de Información y seleccionado para <span onClick={() =>modalHandle()}>#ProyectoDalto.</span></p>
                </div>
                <Modal modal={modal} modalHandle={modalHandle}/>
                <p> Mi pasión por aprender me llevó al mundo del software, donde se adquiere constantemente nuevos conocimientos y habilidades.</p>
                <p className="pe">Agradezco tu visita a mi portfolio y si algo te interesa espero que me contactes!</p>
                <h2 onClick={()=>{cambiar()}}>{click?"Ver menos": "Ver más"}</h2>
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
    width: 100%;
    display: flex;
    justify-content: center;
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
    max-width: 1409px;
    .primerDiv{
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
            margin: 0vw 1vw 0 4vw;
            color: ${({theme})=> theme.noTexto};
            font-family: ${({theme})=> theme.fuente.Italiana};
            span{
                color:#44BBFF;
                cursor: pointer;
                text-decoration: underline;
                :hover{
                    color: #2678a7;
                }
            }
        }
    .pe{
        margin: 0vw 1vw 9% 4vw;
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
