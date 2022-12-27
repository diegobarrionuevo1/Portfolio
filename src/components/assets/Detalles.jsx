import { useEffect, useState } from "react"
import styled from "styled-components"



export const MuchasPuntas = () =>{
    const [scrollY, setScrollY] = useState (0)
    useEffect(()=>{
        window.addEventListener("scroll",()=>setScrollY(window.pageYOffset *0.15))
    })
    return (
        <Container rotate = {scrollY}>
            <svg width="150" height="150" viewBox="0 0 442 407" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M255.358 86.4748L320 31.168L307.834 111.766L307.164 116.206L311.522 115.126L396.065 94.1778L345.245 159.999L342.325 163.781L347.001 164.768L431.966 182.689L354.165 218.964L349.765 221.016L353.568 224.033L419.774 276.573L332.501 275.057L327.855 274.976L329.693 279.243L362.165 354.611L285.297 315.365L281.427 313.389L280.951 317.708L272.007 398.856L223.443 330.724L221 327.296L218.557 330.724L169.993 398.856L161.049 317.708L160.573 313.389L156.703 315.365L79.8351 354.611L112.307 279.243L114.145 274.976L109.499 275.057L22.226 276.573L88.4322 224.033L92.2347 221.016L87.8351 218.964L10.0342 182.689L94.9993 164.768L99.6751 163.781L96.7547 159.999L45.9351 94.1778L130.478 115.126L134.836 116.206L134.166 111.766L122 31.1679L186.642 86.4748L189.867 89.2344L191.392 85.273L221 8.35136L250.608 85.273L252.133 89.2344L255.358 86.4748Z" stroke="#44BBFF" strokeWidth="6"/>
            </svg>
        </Container>
    )
}

export const  PocasPuntas = () =>{
    const [scrollY, setScrollY] = useState (0)
    useEffect(()=>{
        window.addEventListener("scroll",()=>setScrollY(window.pageYOffset *0.15))
    })
    return (
        <Container rotate = {scrollY}>
            <svg width="150" height="150" viewBox="0 0 434 393" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M217 7.92108L261.421 116.472L262.45 118.985L265.053 118.211L383.731 82.9124L320.521 182.375L318.894 184.935L321.471 186.534L424.701 250.564L301.66 266.613L298.797 266.986L299.06 269.862L309.646 385.313L218.983 305.434L217 303.687L215.017 305.434L124.354 385.313L134.94 269.862L135.203 266.986L132.34 266.613L9.29867 250.564L112.529 186.534L115.106 184.935L113.479 182.375L50.2692 82.9124L168.947 118.211L171.55 118.985L172.579 116.472L217 7.92108Z" stroke="#44BBFF" strokeWidth="6"/>
            </svg>
        </Container>
    )
}


const Container = styled.div.attrs(
    ({ rotate }) => ({
    style: {
        transform: "rotate(0deg)",
        transition: "all 0.3s ease-out",
        transform: "rotate("+ rotate +"deg)",
    }})
    )`
    width: auto;
    height: auto;
    display: flex;
    z-index: 0;
    position: absolute;
`
