"use client";

import { useEffect, type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/src/i18n/client";

export default function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const updateDocumentLanguage = (language: string) => {
      const locale = language.split("-")[0];
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
      window.localStorage.setItem("language", locale);
    };

    i18n.on("languageChanged", updateDocumentLanguage);
    const savedLanguage = window.localStorage.getItem("language");

    if (savedLanguage === "en" || savedLanguage === "fa") {
      void i18n.changeLanguage(savedLanguage);
    } else {
      updateDocumentLanguage(i18n.resolvedLanguage ?? i18n.language);
    }

    return () => {
      i18n.off("languageChanged", updateDocumentLanguage);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
