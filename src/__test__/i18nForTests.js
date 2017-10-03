import i18n from '../app/i18n';

i18n
  .init({
    fallbackLng: 'cimode',
    debug: false,
    saveMissing: false,
    react: {
      wait: false,
      nsMode: 'fallback'
    }
  });


export default i18n;
