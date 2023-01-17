import styled from "styled-components"
import { LinkHover } from "../hovers/hovers"


const Modal = (props,{children})=>{
    return (
        <ModalCon className={props.modal?"isOpen":""}>
            <Container>
                <button onClick={props.modalHandle}>X</button>
                <h1>ProyectoDalto</h1>
                <p>Proyecto educativo intensivo de programacion Web en el que se postularon alrededor de 13500 personas.</p>
                <LinkHover className ="link" href = "https://www.youtube.com/watch?v=3hj9jwBgOw0&ab_channel=SoyDalto" contenido = "Ver más"/>
                <ImagenesModal >
                    <img src="data:image/png;base64,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" alt="" />
                    <img src="https://softr-prod.imgix.net/applications/440cf135-5dc3-4893-973c-8d16d904045e/assets/638397f8-55fc-4d5c-a63f-693fbd892529.png" alt=""></img>
                    <svg xmlns="http://www.w3.org/2000/svg" width="113" height="36" viewBox="0 0 113 36"><path fill= "black" fillRule="evenodd" d="M91.505 35.522c-2.96-2.255-5.258-4.926-6.823-7.934-1.57-3.023-2.364-6.257-2.364-9.604 0-3.374.785-6.613 2.341-9.617 1.548-2.99 3.854-5.647 6.846-7.911L92.129 0l.25.338 1.777 2.522-.278.248c-2.508 2.26-4.172 4.438-5.163 6.671-.996 2.228-1.499 4.975-1.499 8.17 0 3.305.52 6.107 1.552 8.33 1.037 2.238 2.683 4.394 4.89 6.397l.498.41-.215.343L92.129 36l-.624-.478zm12.308 0l-.624.478-1.812-2.571-.216-.343.498-.41c2.207-2.003 3.854-4.16 4.89-6.397 1.032-2.223 1.552-5.025 1.552-8.33 0-3.195-.502-5.942-1.498-8.17-.992-2.233-2.656-4.411-5.164-6.671l-.278-.248 1.777-2.522.251-.338.624.456c2.992 2.264 5.298 4.92 6.845 7.911A20.71 20.71 0 0 1 113 17.984c0 3.347-.794 6.581-2.364 9.604-1.566 3.008-3.863 5.679-6.823 7.934zM6.047 18.008c0 2.467.655 4.474 1.97 6.026 1.35 1.57 3.05 2.35 5.1 2.35 2.19 0 3.961-.758 5.312-2.269 1.35-1.57 2.023-3.563 2.023-5.977 0-2.413-.673-4.402-2.023-5.972-1.35-1.533-3.105-2.3-5.258-2.3-2.032 0-3.732.776-5.1 2.327-1.35 1.57-2.024 3.505-2.024 5.815zM20.084 5.215h5.94v25.743h-5.94V28.26c-2.436 2.29-5.056 3.437-7.86 3.437-3.539 0-6.464-1.286-8.779-3.857C1.148 25.216 0 21.936 0 18.008c0-3.857 1.148-7.073 3.445-9.649 2.297-2.57 5.168-3.856 8.623-3.856 2.978 0 5.652 1.231 8.016 3.698V5.215zm13.405.22h5.913v2.3c1.09-1.145 2.037-1.98 2.93-2.277 2.772-.934 6.168-.289 8.927 1.263l-2.4 4.83c-1.122-.807-2.876-1.334-3.944-1.334-3.225 0-5.513 2.715-5.513 7.614v13.347h-5.913V5.435zm40.548.89v5.688c-1.822-2.147-5.913-2.147-7.335-2.147-2.225 0-4.073.785-5.545 2.355-1.471 1.565-2.207 3.532-2.207 5.89 0 2.414.709 4.399 2.126 5.95 1.44 1.548 3.27 2.323 5.496 2.323 1.417 0 5.823-.45 7.465-1.935v5.373c-2.4 1.25-4.8 1.876-7.2 1.876-3.962 0-7.277-1.285-9.937-3.857-2.665-2.593-3.997-5.81-3.997-9.648 0-3.843 1.35-7.082 4.046-9.725 2.7-2.643 6.012-3.965 9.937-3.965 2.525 0 4.908.604 7.15 1.822z"></path></svg>
                </ImagenesModal>
            </Container>
        </ModalCon>
    )
}

export default Modal

const ModalCon = styled.div`
    position: fixed;
    width: 100%;
    z-index: 999;
    min-height: 100vh;
    top: 0;
    left: 0;
    background-color: ${({theme}) => theme.blurFondo};
    display: none;
    &.isOpen{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const Container = styled.div`
    display: flex;
    width: 75vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    background-color: #ffffffa3;
    button{
        position: relative;
        background-color: transparent;
        border: none;
        font-size: .6em;
        font-weight: bolder;
        width: fit-content;
        left: 45%;
        margin: 2% 0;
        color: #1f1e1d;
    }
    h1{
        margin: 0;
        color: #1f1e1d;
    }
    p{
        color: #1f1e1d;
        font-size: .9em;
        text-align: center;
        margin: 0;
    }
    a{
        font-size: 1em;
        color: #1f1e1d;
    }
    @media (min-width: 505px){
        width: 75vw;
    }
    @media (min-width: 1024px){
        width: 1300px;
    }
`
const ImagenesModal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img{
        width: 20%;
    }
    svg{
        width: 20%;
    }
` 
