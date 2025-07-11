// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PILOS Infos',
  tagline: 'Online Informationen über PILOS',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/PILOS-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'THM-Health', // Usually your GitHub org/user name.
  projectName: 'PILOS-Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    //locales: ['de', 'en'],
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/user',
          routeBasePath: 'user',
          sidebarPath: require.resolve('./userSidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'admin',
        path: 'docs/admin',
        routeBasePath: 'admin',
        sidebarPath: require.resolve('./adminSidebars.js'),
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PILOS Infos',
        logo: {
          alt: 'Infos Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Benutzer Dokumentation',
          },
          /*
          {
            type: 'doc',
            docId: 'intro',
            docsPluginId: 'admin',
            position: 'left',
            label: 'Admin Dokumentation',
          }
           */
          {to: '/blog', label: 'Wartungsmeldungen', position: 'left'},
          {
            href: 'https://pilos.thm.de/',
            label: 'Weiter zu PILOS',
            position: 'right',
          },
          /*
          {
            type: 'localeDropdown',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Meta Open Source Logo',
          src: 'img/thm-ges-logo.svg',
          href: 'https://opensource.fb.com',
          width: 250,
        },
        links: [
          {
            title: 'Dokumentation',
            items: [
              {
                label: 'Benutzer',
                to: '/user/intro',
              },
                /*
              {
                label: 'Admin',
                to: '/admin/intro',
              },

                 */
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Email',
                href: 'mailto:pilos@thm.de',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/THM-Health/PILOS/issues',
              },
            ],
          },
          {
            title: 'Rechtliches',
            items: [
              {
                label: 'Impressum',
                href: 'https://www.thm.de/ges/impressum',
              },
              {
                label: 'Datenschutzerklärung',
                href: 'https://www.thm.de/ges/datenschutz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} THM`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '8DJRM5Z7JA',

        // Public API key: it is safe to commit it
        apiKey: 'ed9731bd4c3b0e6b1d6218003cb32ab1',

        indexName: 'pilos',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },

    }),
};

module.exports = config;
