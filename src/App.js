import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Context from './util/AppContext';

function App() {
  const [countriesData, setCountriesData] = useState({});
  const [theme, setTheme] = useState(dark);

  const handleCountriesChange = useCallback(value => setCountriesData(value), [
    setCountriesData,
  ]);

  const toggleTheme = useCallback(
    () => setTheme(theme.title === 'light' ? dark : light),
    [theme, setTheme]
  );

  return (
    <Context.Provider
      value={{
        countriesData,
        setCountriesData: handleCountriesChange,
        toggleTheme,
        theme,
      }}
    >
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
