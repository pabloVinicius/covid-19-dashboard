import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Context from './util/AppContext';
import usePersistedState from './util/usePersistedState';

function App() {
  const [countriesData, setCountriesData] = useState({});
  const [dailyData, setDailyData] = useState({});
  const [theme, setTheme] = usePersistedState('theme', light);

  const handleCountriesChange = useCallback(value => setCountriesData(value), [
    setCountriesData,
  ]);

  const handleDailyChange = useCallback(value => setDailyData(value), [
    setDailyData,
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
        dailyData,
        setDailyData: handleDailyChange,
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
