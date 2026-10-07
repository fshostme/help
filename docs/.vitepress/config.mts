import { defineConfig } from 'vitepress'

// Shown at the bottom of every sidebar.
const footerLinks = [
  {
    text: 'Rent Pro Server',
    link: 'https://fshost.me/pro/pricing/'
  },
  {
    text: 'Back to FSHOST.me',
    link: 'https://fshost.me/'
  }
]

// Every game with its own section. Used by the Games menu in the top nav and by
// the game sidebars, so a new game only has to be added here.
const gameLinks = [
  { text: 'All Games', link: '/games/' },
  { text: 'Counter-Strike 2', link: '/games/cs2/' },
  { text: 'Counter-Strike 1.6', link: '/games/cs16/' },
  { text: 'Counter-Strike GO', link: '/games/csgo/' },
  { text: 'Call of Duty', link: '/games/cod/' },
  { text: 'Call of Duty 2', link: '/games/cod2/' },
  { text: 'Call of Duty 4: MW', link: '/games/cod4/' }
]

// Sidebar for a single game: its own pages first, then the list of other games.
function gameSidebar(title: string, items: { text: string, link: string }[]) {
  return [
    { text: title, items },
    { text: 'Other Games', collapsed: true, items: gameLinks },
    ...footerLinks
  ]
}

// The sidebar shown on general, network and server pages. Every one of those
// path prefixes uses this same list, so a page added here shows up on all of them.
const mainSidebar = [
  {
    text: 'General',
    collapsed: false,
    items: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'RCON', link: '/rcon' },
      { text: 'Account and Security', link: '/account' },
      { text: 'FAQ', link: '/faq' }
    ]
  },
  {
    text: 'Network',
    collapsed: false,
    items: [
      { text: 'Locations', link: '/network/locations' },
      { text: 'Ping Test', link: '/network/ping-test' },
      { text: 'MTR Report', link: '/network/mtr' }
    ]
  },
  {
    text: 'Servers',
    items: [
      { text: 'Free vs Pro', link: '/servers/free-vs-pro' },
      {
        text: 'Free',
        collapsed: true,
        items: [
          { text: 'Creating a Server', link: '/servers/free/creating-server' }
        ]
      },
      {
        text: 'Pro',
        collapsed: true,
        items: [
          { text: 'Creating a Server', link: '/servers/pro/creating-server' },
          { text: 'Server List', link: '/servers/pro/server-list' },
          { text: 'Managing Your Server', link: '/servers/pro/managing-server' },
          { text: 'Team Access', link: '/servers/pro/team-access' },
          { text: 'Billing and Top-Up', link: '/servers/pro/billing' },
          { text: 'Support Tickets', link: '/servers/pro/support' },
          { text: 'Server Moves', link: '/servers/pro/server-moves' },
          { text: 'FTP Access', link: '/servers/pro/ftp' },
          { text: 'File Manager', link: '/servers/pro/file-manager' },
          { text: 'Console Access', link: '/servers/pro/console' }
        ]
      }
    ]
  },
  ...footerLinks
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FSHOST Help",
  description: "Get help using FSHOST.me free/pro servers",
  base: '/',
  cleanUrls: true,

  // Reusable markdown fragments live in parts/ and are pulled into pages with
  // <!--@include: ./parts/_name.md-->. They are not pages of their own.
  srcExclude: ['**/parts/_*.md'],

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1b1b1d' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/fshost-logo-light.svg',
      dark: '/fshost-logo-dark.svg'
    },

    nav: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'RCON', link: '/rcon' },
      {
        text: 'Games',
        items: gameLinks
      },
      { text: 'Troubleshooting', link: '/troubleshooting/' },
      { text: 'News', link: '/news/' }
    ],

    sidebar: {
      '/': mainSidebar,
      '/servers/free/': mainSidebar,
      '/servers/pro/': mainSidebar,
      '/network/': mainSidebar,
      '/servers/': mainSidebar,
      '/games/': [
        {
          text: 'Supported Games',
          items: gameLinks
        },
        ...footerLinks
      ],
      '/games/cs16/': gameSidebar('Counter-Strike 1.6', [
        { text: 'Overview', link: '/games/cs16/' },
        { text: 'Become Admin', link: '/games/cs16/becomeadmin' },
        { text: 'RCON Commands', link: '/games/cs16/rcon' }
      ]),
      '/games/cod/': gameSidebar('Call of Duty', [
        { text: 'Overview', link: '/games/cod/' },
        { text: 'RCON Commands', link: '/games/cod/rcon' }
      ]),
      '/games/cod2/': gameSidebar('Call of Duty 2', [
        { text: 'Overview', link: '/games/cod2/' },
        { text: 'RCON Commands', link: '/games/cod2/rcon' }
      ]),
      '/games/cod4/': [
        {
          text: 'Call of Duty 4: MW',
          items: [
            { text: 'Overview', link: '/games/cod4/' },
            { text: 'RCON Commands', link: '/games/cod4/rcon' }
          ]
        },
        {
          text: 'Mods',
          collapsed: false,
          items: [
            { text: 'Promod LIVE', link: '/games/cod4/mods/promodlive' },
            { text: 'FPSChallenge.eu Promod', link: '/games/cod4/mods/fps-promod' },
            { text: 'GunGame', link: '/games/cod4/mods/gungame' },
            { text: 'CoDJumper', link: '/games/cod4/mods/codjumper' },
            { text: 'Stock Custom Maps', link: '/games/cod4/mods/stock-custom-maps' }
          ]
        },
        { text: 'Other Games', collapsed: true, items: gameLinks },
        ...footerLinks
      ],
      '/games/cs2/': [
        {
          text: 'CS2 Documentation',
          items: [
            { text: 'Overview', link: '/games/cs2/' }
          ]
        },
        {
          text: 'Commands',
          collapsed: false,
          items: [
            { text: 'Free Server Commands', link: '/games/cs2/commands-free' },
            { text: 'Pro Server Commands', link: '/games/cs2/commands' },
            { text: 'RCON Commands', link: '/games/cs2/rcon' }
          ]
        },
        {
          text: 'Server Management',
          collapsed: false,
          items: [
            { text: 'CSTV Broadcasting', link: '/games/cs2/cstv' },
            { text: 'Become Admin (Pro)', link: '/games/cs2/become-admin' },
            { text: 'Automation (Pro)', link: '/games/cs2/automation' }
          ]
        },
        {
          text: 'Plugins (Pro)',
          collapsed: false,
          items: [
            { text: 'Addons/Plugins Overview', link: '/games/cs2/plugins' },
            { text: 'CS2-SimpleAdmin', link: '/games/cs2/plugins/cs2-simpleadmin' },
            { text: 'AdminManager', link: '/games/cs2/plugins/adminmanager' },
            { text: 'MatchZy', link: '/games/cs2/plugins/matchzy' },
            { text: 'Deathmatch', link: '/games/cs2/plugins/deathmatch' },
            { text: 'Retakes', link: '/games/cs2/plugins/retakes' },
            { text: 'Prefire Practice', link: '/games/cs2/plugins/prefire' },
            { text: 'WeaponPaints (Skins)', link: '/games/cs2/plugins/weapon-skins' },
            { text: 'Custom Commands', link: '/games/cs2/plugins/customcommands' },
            { text: 'CSTV Discord', link: '/games/cs2/plugins/cstv-discord' },
            { text: 'Demo Monitor', link: '/games/cs2/plugins/demomonitor' },
            { text: 'TVFIX (CSTV Fix)', link: '/games/cs2/plugins/tvfix' }
          ]
        },
        ...footerLinks
      ],
      '/troubleshooting/': [
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Overview', link: '/troubleshooting/' },
            { text: 'Connection Problems', link: '/troubleshooting/connection' }
          ]
        },
        ...footerLinks
      ],
      '/news/': [
        {
          text: 'News & Updates',
          items: [
            { text: 'All News', link: '/news/' }
          ]
        },
        ...footerLinks
      ]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://fshost.me/discord' },
      { icon: 'x', link: 'https://x.com/fshostme' }
    ],

    footer: {
      message: 'FSHOST.me - Free and Premium Game Server Hosting',
      copyright: `Copyright © ${new Date().getFullYear()} FSHOST.me`
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/fshostme/help/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})
