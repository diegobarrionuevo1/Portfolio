import styled from "styled-components"

export const LinkHover = (props) =>{
    return(
        <DivCheto>
            <Link  href={props.href}> {props.contenido} </Link>
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

const Link = styled.a`
    color: ${({theme})=> theme.texto};
    font-family: ${({theme})=> theme.fuente.Ubuntu};
    text-decoration: none;
    display: block;
    @media (min-width: 768px) {
            font-size: 1.2rem;
            position: initial;
            display: inline;
    }
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
`