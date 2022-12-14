import { Hero, Nav, Themes } from './components';
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
  `

  return (
    <div className="App">
      <ThemeProvider theme={Themes["dark"]}>
        <DivContainer>
          <Nav/>
          <Hero/>
          <Hero/>
          <Hero/>
          <Hero/>
          <Hero/>
        </DivContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
