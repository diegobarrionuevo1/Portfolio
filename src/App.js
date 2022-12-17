import { Hero, Nav, Pildoras, SobreMi, Themes } from './components';
import styled, { ThemeProvider } from 'styled-components';
import { LinkHover } from './components/hovers/hovers';


function App() {
  const DivContainer = styled.div `
  background-color: ${({theme}) => theme.fondo};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(5px + 5vw);
  color: ${({theme}) => theme.texto} ;
  `

  return (
      <ThemeProvider theme={Themes["dark"]}>
        <DivContainer>
          <Nav/>
          <Hero/>
          <Pildoras/>
          
        </DivContainer>
      </ThemeProvider>
  );
}

export default App;
