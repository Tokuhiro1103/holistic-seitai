import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ja from './ja.json'
import en from './en.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ja: {
        translation: ja
      },
      en: {
        translation: en
      }
    },
    lng: 'ja', // デフォルト言語
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false // Reactは既にXSS対策されているため
    }
  })

export default i18n

