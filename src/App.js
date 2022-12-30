import { Footer, Hero, Nav, Pildoras, SobreMi, TargetasPro, Themes } from './components';
import styled, { ThemeProvider } from 'styled-components';
import useThemeMode from './components/assets/Hooks/useThemeMode';

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
  const [theme, changeTheme] = useThemeMode ()
  console.log(theme)
  return (
      <ThemeProvider theme={{...Themes[theme]}}>
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
