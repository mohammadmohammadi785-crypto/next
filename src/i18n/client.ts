import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import persian from "../../messages/fa.json";
import english from "../../messages/en.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: { navbar: english.navbar },
    fa: { navbar: persian.navbar },
  },
  lng: "en",
  fallbackLng: "en",
  defaultNS: "navbar",
  interpolation: { escapeValue: false },
});

export default i18n;
