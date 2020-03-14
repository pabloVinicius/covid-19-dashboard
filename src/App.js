import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
