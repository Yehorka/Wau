
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import ukTranslation from './locales/uk/translation.json';
import jaTranslation from './locales/ja/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      react: {
    useSuspense: false
  },
    resources: {
      en: {
        translation: enTranslation
      },
      uk: {
        translation: ukTranslation
      },
      ja: {
        translation: jaTranslation
      }
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
