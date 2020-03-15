import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Context from './util/AppContext';

function App() {
  const [countriesData, setCountriesData] = useState({});

  const handleCountriesChange = useCallback(value => setCountriesData(value), [
    setCountriesData,
  ]);

  return (
    <Context.Provider
      value={{ countriesData, setCountriesData: handleCountriesChange }}
    >
      <ThemeProvider theme={light}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
