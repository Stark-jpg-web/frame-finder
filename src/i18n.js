import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from './locales/en/common.json'
import arCommon from './locales/ar/common.json'


const savedLanguage= localStorage.getItem('framefinder-language')||'en'

const changeDocumentDirection = (language) => {
 document.documentElement.lang=language
 document.documentElement.dir = language ==='ar'?'rtl':'ltr' 
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
    },
    ar: {
      common: arCommon,
    },
  },
  defaultNS: 'common',
  lng: savedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})
i18n.on('languageChanged', (language) => {
  localStorage.setItem('framefinder-language', language)
  changeDocumentDirection(language)
})

changeDocumentDirection(i18n.language)

export default i18n