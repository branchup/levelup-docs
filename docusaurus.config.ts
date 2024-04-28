import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const URL = 'https://docs.levelup.plus';

const config: Config = {
  title: 'Level Up Documentation',
  url: URL,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  organizationName: 'branchup',
  projectName: 'levelup-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: true,
    },
    // parseFrontMatter: async params => {
    //   const result = await params.defaultParseFrontMatter(params);
    //   return result;
    // }
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        sitemap: {
          // lastmod: 'date',
          changefreq: 'monthly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'xp/docs',
        routeBasePath: 'xp/docs',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'xp-release-notes',
        path: 'xp/release-notes',
        routeBasePath: 'xp/release-notes',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'quest',
        path: 'quest/docs',
        routeBasePath: 'quest/docs',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'quest-release-notes',
        path: 'quest/release-notes',
        routeBasePath: 'quest/release-notes',
      },
    ],
  ],

  themeConfig: {
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
            to: '/xp/release-notes',
            position: 'left',
            label: 'Releases',
          },
        ],
        quest: [
          { type: 'html', position: 'left', value: '<strong>Quest</strong>' },
          {
            type: 'doc',
            docsPluginId: 'quest',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/quest/release-notes',
            position: 'left',
            label: 'Releases',
          },
        ],
      },
    },
    colorMode: {
      disableSwitch: true,
    },
    metadata: [
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: `${URL}/img/og.png` },
      { name: 'og:image:secure_url', content: `${URL}/img/og.png` },
      { name: 'twitter:image', content: `${URL}/img/og.png` },
      { name: 'twitter:site', content: `@BranchUpTech` },
      { name: 'twitter:creator', content: `@BranchUpTech` },
    ],
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
            {
              label: 'Release notes',
              to: '/xp/release-notes/',
            },
          ],
        },
        {
          title: 'Quest',
          items: [
            {
              label: 'Documentation',
              to: '/quest/docs/',
            },
            {
              label: 'Release notes',
              to: '/quest/release-notes/',
            },
          ],
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
      theme: lightTheme,
      darkTheme: darkTheme,
    },
  } satisfies Preset.ThemeConfig,
};

module.exports = config;
