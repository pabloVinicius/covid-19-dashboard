import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Context from './util/AppContext';
import usePersistedState from './util/usePersistedState';
import usePersistedLanguage from './util/usePersistedLanguage';

function App() {
  const [countriesData, setCountriesData] = useState({});
  const [dailyData, setDailyData] = useState({});
  const [theme, setTheme] = usePersistedState('theme', light);
  const [language, setLanguage] = usePersistedLanguage('language', 'ptBR');

  const { i18n } = useTranslation();

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

  const toggleLanguage = code => {
      const language = {
        'US': 'en',
        'BR': 'ptBR'
      }[code];

      setLanguage(language);
      i18n.changeLanguage(language);
    };

  return (
    <Context.Provider
      value={{
        countriesData,
        setCountriesData: handleCountriesChange,
        toggleTheme,
        theme,
        toggleLanguage,
        language,
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
