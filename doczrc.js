/* eslint-disable import/no-extraneous-dependencies */

export default {
  title: 'Zepio Wallet',
  description: 'Zepio Wallet',
  themeConfig: {
    colors: {
      primary: 'tomato',
    },
  },
  public: 'config/docz/public',
  htmlContext: {
    favicon: 'public/favicon.ico',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=PT+Sans:400,700',
        },
      ],
    },
  },
};
