import i18next from 'i18next'

import en from './en.json'

i18next.init({
  resources: { en: { translation: en } },
  fallbackLng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})
