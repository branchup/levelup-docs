// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Level Up Documentation',
  url: 'https://docs.levelup.plus',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'branchup', // Usually your GitHub org/user name.
  projectName: 'levelup-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        // pages: false,
        //       docs: {
        //         sidebarPath: require.resolve('./sidebars.js'),
        //         // Please change this to your repo.
        //         // Remove this to remove the "edit this page" links.
        //         editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //       },
        //       blog: {
        //         showReadingTime: true,
        //         // Please change this to your repo.
        //         // Remove this to remove the "edit this page" links.
        //         editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //       },
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
        path: 'xp/docs',
        routeBasePath: 'xp/docs',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'xp-release-notes',
        path: 'xp/release-notes',
        routeBasePath: 'xp/release-notes',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'quest',
    //     path: 'quest',
    //     routeBasePath: 'quest',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      levelup: {
        navbarItems: {
          xp: [
            { type: 'html', position: 'left', value: '<strong>XP</strong>' },
            {
              type: 'doc',
              docId: 'index',
              position: 'left',
              label: 'Docs',
            },
            {
              type: 'doc',
              docsPluginId: 'xp-release-notes',
              docId: 'index',
              position: 'left',
              label: 'Releases',
            },
          ],
          quest: [
            {
              type: 'doc',
              docsPluginId: 'quest',
              docId: 'test',
              position: 'left',
              label: 'Quest',
            },
          ],
        },
      },
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: '',

        logo: {
          alt: 'Level Up',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'XP',
            items: [
              {
                label: 'Documentation',
                to: '/xp/docs/',
              },
            ],
          },
          {
            title: 'Quest',
            items: [{ html: 'Coming soon...' }],
          },
          {
            title: 'Other resources',
            items: [
              { label: 'Contributing', href: 'https://github.com/branchup/levelup-docs' },
              { label: 'Website', href: 'https://levelup.plus' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Branch Up Pty Ltd`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
