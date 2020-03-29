import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import en from '../locales/en.json';
import ptBR from '../locales/ptBR.json';

i18n
.use(initReactI18next)
.use(detector)
.init({
    resources: {
        en, 
        ptBR
    },
    fallbackLng: 'ptBR',
    debug: process.env.NODE_ENV !== 'production',
    ns: ['translations', 'languages'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;