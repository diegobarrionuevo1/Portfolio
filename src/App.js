import { Hero, Nav, Pildoras, Proyectos, SobreMi, TargetasPro, Themes } from './components';
import styled, { ThemeProvider } from 'styled-components';
function App() {
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

  return (
      <ThemeProvider theme={Themes["dark"]}>
        <DivContainer>
          <Nav/>
          <Hero/>
          <Pildoras/>
          <TargetasPro/>
        </DivContainer>
      </ThemeProvider>
  );
}

export default App;
