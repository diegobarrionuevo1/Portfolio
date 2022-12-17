import styled from 'styled-components'


const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 15vh 0vw 6vh 0vw;
    line-height: 10vw;
`
const RenglonInferior = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`
/* ------------------texto----------------------- */

const TextoPequeño = styled.span`
    font-size: 1.2em;
    margin-left: 5vw;
    font-family: ${({theme})=> theme.fuente.Italiana};
`
const TextoGrande = styled.span`
    font-size: 1.94em;
`
const TextoGrandeItalica = styled(TextoGrande)`
    font-family: ${({theme})=> theme.fuente.Italiana};
`

const TextoGrandeUbuntu= styled.span`
    font-size: 2em;
    font-family: ${({theme})=> theme.fuente.Ubuntu};
`

const Hero = ()=> {
    return (
        <HeroContainer>
            <div>
                <TextoGrandeItalica>Barrionuevo Diego,</TextoGrandeItalica>
            </div>
            
            <div>
                <TextoGrandeUbuntu>Web </TextoGrandeUbuntu>
            </div>

            <RenglonInferior>       
                <TextoGrandeUbuntu>Developer</TextoGrandeUbuntu>
                <TextoPequeño>Trainee</TextoPequeño>
            </RenglonInferior>
        </HeroContainer>
    )
}

export default Hero