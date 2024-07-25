import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import * as en from "./en-US";
import * as ko from "./ko-KR";

const resources = {
  "ko-KR": { ...ko },
  "en-US": { ...en },
} as const;

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: {
      default: ["en-US"],
      "ko-KR": ["ko-KR"],
      ko: ["ko-KR"],
    },
    interpolation: {
      escapeValue: false,
    },
    ns: ["main"],
    defaultNS: "main",
  });

export default i18next;
