import React, {useState, useContext, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme'
import Landing from './pages/Landing';
import { UserContext } from './context';

function App() {
  
  const {isDark,setIsDark} = useContext(UserContext)
  
  useEffect(() => {
  
  }, [setIsDark])
  

  return (<> 
    <ThemeProvider theme={isDark? darkTheme : lightTheme}>
      <button className="" onClick={() => setIsDark(!isDark)}>
          Trocar Tema
      </button>
      <GlobalStyle /> 
      <Landing/>
    </ThemeProvider>
  
    </>
  );
}

export default App;
