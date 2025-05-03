import en from './locales/en.json';
import es from './locales/es.json';
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    legacy: false, //porque estamos trabajando con la version mas reciente
    locale: 'en', //idioma por defecto
    globalInjection: true, //para poder usar $t en cualquier parte de la app
    messages: { en, es }

})

export default i18n;