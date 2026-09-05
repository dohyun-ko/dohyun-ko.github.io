import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import * as en from "./en-US";
import * as ko from "./ko-KR";

const resources = {
  "ko-KR": { ...ko },
  "en-US": { ...en },
} as const;

export const getLanguage = (pathname: string) =>
  /^\/ko(?:\/|$)/.test(pathname) ? "ko-KR" : "en-US";

i18next.use(initReactI18next).init({
  resources,
  lng: "en-US",
  initImmediate: false,
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
