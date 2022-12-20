import { useState } from "react"
import styled from "styled-components"
import ImagenesSliders  from "../assets/Sliders/slidersInfo"

const extra = ImagenesSliders.proyectos

const Proyectos = () =>{
    const imagenes = [extra.mexican, extra.tetrisJs]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(imagenes[0])

    const seleccionarImagen = (index, image, next = true) =>{
        const condicion = next? index < image.length-1 : index > 0
        const proximaImagen = next? 
                                    condicion ? index + 1 : 0 
                                    : condicion ? index - 1 : image.length - 1;
        setSelectedImage(imagenes[proximaImagen])
        setSelectedIndex(proximaImagen)
    }

    const prev = () =>{
        seleccionarImagen(selectedIndex, imagenes, false)
    }
    const next = () =>{
        seleccionarImagen(selectedIndex, imagenes, true)
    }
    return (
        <Container>
            <img src= {selectedImage} alt="mocaso no cargo" ></img>
            <BotonIzquie onClick={prev}>{"<"}</BotonIzquie>
            <BotonDere onClick={next}>{">"}</BotonDere>
        </Container>
    )
}

export default Proyectos


const Container = styled.div`
    position: relative;
    height: 57vh;
    width: 100%;
    overflow: hidden;
    margin: 5vh 0;
    
    img{
        object-fit: contain;
        object-position: center;
        height: 100%;
        width: 100%;
    }
`
const BotonDere = styled.button`
        z-index: 4;
        position: absolute;
        top: 50%;
        right: 0;
`
const BotonIzquie = styled.button`
        z-index: 4;
        position: absolute;
        top: 50%;
        left: 0;
`