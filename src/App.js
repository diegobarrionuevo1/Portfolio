import { Footer, Hero, Nav, Pildoras, SobreMi, TargetasPro, Themes } from './components';
import styled, { ThemeProvider } from 'styled-components';

const DivContainer = styled.div `
  background-color: ${({theme}) => theme.fondo};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(5px + 5vw);
  color: ${({theme}) => theme.texto} ;
  overflow: hidden;
  `

  
function App() {
  return (
      <ThemeProvider theme={Themes["dark"]}>
        <DivContainer>
          <Nav/>
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
