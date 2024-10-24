export default {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages: [`en`, `ko`],
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        defaultLanguage: `en`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: ".",
        },
        pages: [
          {
            matchPath: "/:lang?",
            getLanguageFromPath: true,
          },
          {
            matchPath: "/:lang?/resume",
            getLanguageFromPath: true,
          },
        ],
      },
    },
  ],
};
