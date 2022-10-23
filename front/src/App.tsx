import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme'
import Landing from './pages/Landing';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  
  return (<>
      <ThemeProvider theme={isDarkTheme? darkTheme : lightTheme}>
        <GlobalStyle />
        <button className="" onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Trocar Tema
        </button>
        <Landing/>
        
      </ThemeProvider>
    </>
  );
}

export default App;
