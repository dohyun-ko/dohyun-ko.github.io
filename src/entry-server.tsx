import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";
import App from "./App";
import i18n, { getLanguage } from "./locales";

export async function render(pathname: string) {
  const language = getLanguage(pathname);
  await i18n.changeLanguage(language);
  const sheet = new ServerStyleSheet();

  try {
    const html = renderToString(
      sheet.collectStyles(
        <React.StrictMode>
          <StaticRouter location={pathname}>
            <App />
          </StaticRouter>
        </React.StrictMode>,
      ),
    );
    return { html, styles: sheet.getStyleTags(), language };
  } finally {
    sheet.seal();
  }
}
