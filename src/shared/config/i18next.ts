import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

void i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: __IS__DEV__,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })


export default i18n
