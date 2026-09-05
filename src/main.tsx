import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import i18n, { getLanguage } from "./locales";

async function main() {
  await i18n.changeLanguage(getLanguage(window.location.pathname));
  document.documentElement.lang = i18n.language;

  const root = document.getElementById("root") as HTMLElement;
  const app = (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  if (root.childElementCount > 0) {
    ReactDOM.hydrateRoot(root, app);
  } else {
    ReactDOM.createRoot(root).render(app);
  }
}

void main();
