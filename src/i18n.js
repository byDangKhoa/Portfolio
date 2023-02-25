/* eslint-disable prettier/prettier */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import vi from './locales/vi.json';
// import LanguageDetector from 'i18next-browser-languagedetector'
// import { useStore } from '~/redux/store';
// const store = useStore()
// window.userLang = navigator.language || navigator.userLanguage;
const resources = {
  vi: {
    translation: vi
  },
  en: {
    translation: en
  }
};

const availableLanguages = ['en', 'vi'];

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  // .use(LanguageDetector)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') === 'vi' ? 'vi' : 'en', //default language
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    supportedLngs: availableLanguages
  });

export default i18n;
