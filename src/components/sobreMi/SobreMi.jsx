const { default: styled } = require("styled-components")

const SobreMi = () => {
    return(
        <Sobre>
            <h1>¡Hola!</h1>
            <div>
                
            <p>Soy un Estudiante de Ingeniería en Sistemas de Información seleccionado para Proyecto dalto.</p>  
            <p>Algo que nunca a cambiado en mi es la pasión que tengo por aprender, tengo una necesidad muy grande por entender como funciona todo, para que sirve y como puedo aplicarlo en mi vida o mi trabajo. Esto aplica para todo los ambitos de la vida pero principalmente en el software y en el emprendedurismo.</p>
            </div>

        </Sobre>
    )
}

export default SobreMi

const Sobre = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 25vh;
    overflow: hidden;
    background-color: ${({theme})=> theme.noFondo};
    border-radius: 0px 15px 0px 15px;
    div{
        display: flex;
    }
    h1{
        font-family: ${({theme})=> theme.fuente.Italiana};
        color: ${({theme})=> theme.noTexto};
        margin: 2vh 0  ;
    }
    
    p{
            margin: 0;
            color: ${({theme})=> theme.noTexto};
            font-family: ${({theme})=> theme.fuente.Italiana};
        }
    

`