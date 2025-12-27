import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FSHOST Help",
  description: "Get help using FSHOST.me free/pro servers",
  base: '/',
  cleanUrls: true,

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
        items: [
          { text: 'All Games', link: '/games/' },
          { text: 'Counter-Strike 2', link: '/games/cs2/' }
        ]
      },
      { text: 'Troubleshooting', link: '/troubleshooting/' },
      { text: 'News', link: '/news/' }
    ],

    sidebar: {
      '/': [
        {
          text: 'General',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'RCON', link: '/rcon' },
            { text: 'FAQ', link: '/faq' }
          ]
        },
        {
          text: 'Network',
          collapsed: false,
          items: [
            { text: 'Locations', link: '/network/locations' },
            { text: 'Ping Test', link: '/network/ping-test' }
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
                { text: 'File Manager', link: '/servers/pro/file-manager' },
                { text: 'Console Access', link: '/servers/pro/console' }
              ]
            }
          ]
        },
        {
          text: 'Rent Pro Server',
          link: 'https://fshost.me/pro/pricing/'
        },
        {
          text: 'Back to FSHOST.me',
          link: 'https://fshost.me/'
        }
      ],
      '/servers/free/': [
        {
          text: 'General',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'RCON', link: '/rcon' },
            { text: 'FAQ', link: '/faq' }
          ]
        },
        {
          text: 'Network',
          collapsed: false,
          items: [
            { text: 'Locations', link: '/network/locations' },
            { text: 'Ping Test', link: '/network/ping-test' }
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
                { text: 'File Manager', link: '/servers/pro/file-manager' },
                { text: 'Console Access', link: '/servers/pro/console' }
              ]
            }
          ]
        },
        {
          text: 'Rent Pro Server',
          link: 'https://fshost.me/pro/pricing/'
        },
        {
          text: 'Back to FSHOST.me',
          link: 'https://fshost.me/'
        }
      ],
      '/servers/pro/': [
        {
          text: 'General',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'RCON', link: '/rcon' },
            { text: 'FAQ', link: '/faq' }
          ]
        },
        {
          text: 'Network',
          collapsed: false,
          items: [
            { text: 'Locations', link: '/network/locations' },
            { text: 'Ping Test', link: '/network/ping-test' }
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
                { text: 'Server Moves', link: '/servers/pro/server-moves' },
                { text: 'File Manager', link: '/servers/pro/file-manager' },
                { text: 'Console Access', link: '/servers/pro/console' }
              ]
            }
          ]
        },
        {
          text: 'Rent Pro Server',
          link: 'https://fshost.me/pro/pricing/'
        },
        {
          text: 'Back to FSHOST.me',
          link: 'https://fshost.me/'
        }
      ],
      '/network/': [
        {
          text: 'General',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'RCON', link: '/rcon' },
            { text: 'FAQ', link: '/faq' }
          ]
        },
        {
          text: 'Network',
          collapsed: false,
          items: [
            { text: 'Locations', link: '/network/locations' },
            { text: 'Ping Test', link: '/network/ping-test' }
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
                { text: 'File Manager', link: '/servers/pro/file-manager' },
                { text: 'Console Access', link: '/servers/pro/console' }
              ]
            }
          ]
        },
        {
          text: 'Rent Pro Server',
          link: 'https://fshost.me/pro/pricing/'
        },
        {
          text: 'Back to FSHOST.me',
          link: 'https://fshost.me/'
        }
      ],
      '/servers/': [
        {
          text: 'General',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'RCON', link: '/rcon' },
            { text: 'FAQ', link: '/faq' }
          ]
        },
        {
          text: 'Network',
          collapsed: false,
          items: [
            { text: 'Locations', link: '/network/locations' },
            { text: 'Ping Test', link: '/network/ping-test' }
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
                { text: 'File Manager', link: '/servers/pro/file-manager' },
                { text: 'Console Access', link: '/servers/pro/console' }
              ]
            }
          ]
        },
        {
          text: 'Rent Pro Server',
          link: 'https://fshost.me/pro/pricing/'
        },
        {
          text: 'Back to FSHOST.me',
          link: 'https://fshost.me/'
        }
      ],
      '/games/': [
        {
          text: 'Supported Games',
          items: [
            { text: 'All Games', link: '/games/' },
            { text: 'Counter-Strike 2', link: '/games/cs2/' }
          ]
        },
        {
          text: 'Rent Pro Server',
          link: 'https://fshost.me/pro/pricing/'
        },
        {
          text: 'Back to FSHOST.me',
          link: 'https://fshost.me/'
        }
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
            { text: 'Become Admin (Pro)', link: '/games/cs2/become-admin' }
          ]
        },
        {
          text: 'Plugins (Pro)',
          collapsed: false,
          items: [
            { text: 'Plugin Overview', link: '/games/cs2/plugins' },
            { text: 'CS2-SimpleAdmin', link: '/games/cs2/plugins/simpleadmin' },
            { text: 'MatchZy', link: '/games/cs2/plugins/matchzy' },
            { text: 'Deathmatch', link: '/games/cs2/plugins/deathmatch' },
            { text: 'Retakes', link: '/games/cs2/plugins/retakes' },
            { text: 'Prefire Practice', link: '/games/cs2/plugins/prefire-practice' },
            { text: 'WeaponPaints (Skins)', link: '/games/cs2/plugins/weapon-skins' },
            { text: 'CSTV Discord', link: '/games/cs2/plugins/cstv-discord' }
          ]
        },
        {
          text: 'Rent Pro Server',
          link: 'https://fshost.me/pro/pricing/'
        },
        {
          text: 'Back to FSHOST.me',
          link: 'https://fshost.me/'
        }
      ],
      '/troubleshooting/': [
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Overview', link: '/troubleshooting/' },
            { text: 'Connection Problems', link: '/troubleshooting/connection' }
          ]
        },
        {
          text: 'Rent Pro Server',
          link: 'https://fshost.me/pro/pricing/'
        },
        {
          text: 'Back to FSHOST.me',
          link: 'https://fshost.me/'
        }
      ],
      '/news/': [
        {
          text: 'News & Updates',
          items: [
            { text: 'All News', link: '/news/' }
          ]
        },
        {
          text: 'Rent Pro Server',
          link: 'https://fshost.me/pro/pricing/'
        },
        {
          text: 'Back to FSHOST.me',
          link: 'https://fshost.me/'
        }
      ]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://fshost.me/discord' },
      { icon: 'x', link: 'https://x.com/fshostme' }
    ],

    footer: {
      message: 'FSHOST.me - Free and Premium Game Server Hosting',
      copyright: 'Copyright © 2024 FSHOST.me'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/fshostme/help-fshost/edit/main/:path',
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
