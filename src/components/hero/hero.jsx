import { useState , useEffect} from 'react'
import styled from 'styled-components'


const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 15vh 0vw 12vh 0vw;
    line-height: 10vw;
    div{
        z-index: 1;
    }
`
const RenglonSuperior = styled.div.attrs(
    ({ trasladar }) => ({
    style: {
        transform: "rotate(0deg)",
        transition: "all 0.3s ease-out",
        transform: "translateX("+ trasladar +"px)",
    }}))``


const RenglonMedio =  styled.div.attrs(
    ({ trasladar }) => ({
    style: {
        transform: "rotate(0deg)",
        transition: "all 0.3s ease-out",
        transform: "translateX("+ trasladar +"px)",
    }}))``


const RenglonInferior =  styled.div.attrs(
    ({ trasladar }) => ({
    style: {
        transform: "translateX(0px)",
        transition: "all 0.3s ease-out",
        transform: "translateX("+ trasladar +"px)",
    }}))`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`
/* ------------------texto----------------------- */

const TextoPequeño = styled.span`
    font-size:calc((5px + 5vw)*1.2);
    margin-left: 5vw;
    font-family: ${({theme})=> theme.fuente.Italiana};
`
const TextoGrande = styled.span`
    font-size: calc((5px + 5vw)*1.94);
`
const TextoGrandeItalica = styled(TextoGrande)`
    font-family: ${({theme})=> theme.fuente.Italiana};
`

const TextoGrandeUbuntu= styled.span`
    font-size: calc((5px + 5vw)*2);
    font-family: ${({theme})=> theme.fuente.Ubuntu};
`

const Hero = ()=> {
    const [scrollY, setScrollY] = useState (0)
    useEffect(()=>{
        window.addEventListener("scroll",()=>setScrollY(window.pageYOffset *0.3))
    })

    return (<>
        <a id='inicio'></a>
        <HeroContainer >
            <RenglonSuperior trasladar={-scrollY}>
                <TextoGrandeItalica>Barrionuevo Diego,</TextoGrandeItalica>
            </RenglonSuperior>
            
            <RenglonMedio trasladar={scrollY*2}>
                <TextoGrandeUbuntu>Web </TextoGrandeUbuntu>
            </RenglonMedio>
            <a id='habilidades'></a>
            <RenglonInferior trasladar={-scrollY}>       
                <TextoGrandeUbuntu>Developer</TextoGrandeUbuntu>
                <TextoPequeño>Trainee</TextoPequeño>
            </RenglonInferior>
        </HeroContainer>
        
    </>)
}

export default Hero