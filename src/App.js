import { Footer, Hero, Nav, Pildoras, SobreMi, TargetasPro, Themes } from './components';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const DivContainer = styled.div `
  background-color: ${({theme}) => theme.fondo};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(5px + 5vw);
  color: ${({theme}) => theme.texto} ;
  overflow: hidden;
  @media (min-width: 1024px){
                font-size: calc(56px);
  }
  `

  
function App() {
  const [theme, setTheme] = useState ("dark")
  let themesCondition = theme==="light" ? "dark" : "light" 
  const changeTheme =()=>{
    setTheme(themesCondition)
  }
  return (
      <ThemeProvider theme={Themes[theme]}>
        <DivContainer>
          <Nav change = {changeTheme}/>
          <Hero/>
          <Pildoras/>
          <TargetasPro/>
          <SobreMi/>
          <Footer/>
        </DivContainer>
      </ThemeProvider>
  );
}

export default App;
