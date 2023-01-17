import styled from "styled-components"

export const LinkHover = (props) =>{
    return(
        <DivCheto>
            <Links onClick={props.hizoClick || ""}  href={props.href || ""}> {props.contenido} </Links>
        </DivCheto>
    )
}



/*--------------------LINKSS------------------------------ */
const DivCheto = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0vw 1vw;
`

const Links = styled.a`
    color: ${({theme})=> theme.texto};
    font-family: ${({theme})=> theme.fuente.Ubuntu};
    text-decoration: none;
    display: block;
    font-size: 1.2em;
    @media (min-width: 768px) {        
            position: initial;
            display: inline;
            font-size: .4em;
    }
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 50%;
        height: 2px;
        background-color: #44BBFF;
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
        background-color: #44BBFF;
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
`
