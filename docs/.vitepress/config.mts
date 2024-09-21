import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans",
  title: "Arcomua Docs",
  description: "Online documents for Arcomua Modpack.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '下载', link: 'https://arcomua.com/' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '快速开始', link: '/guide/start' },
          { text: '如何反馈', link: '/guide/feedback' }
        ]
      },
      {
        text: '整合包',
        items: [
          { text: 'Arcomua Cloth', link: '/packs/a-cloth' },
          { text: 'Arcomua Anvil', link: '/packs/a-anvil' },
          { text: 'Arcomua Lite', link: '/packs/a-lite' }
        ]
      },
      {
        text: '杂项',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Arcomua' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 100 100"><path fill="none" d="M0 0h100v100H0z"/><clipPath id="a"><path d="M100 0H0v100h100V0ZM46.002 49.295l.076 1.757 8.83 32.963 7.843-2.102-8.596-32.094 5.804-32.932-7.997-1.41-5.96 33.818Z"/></clipPath><g clip-path="url(#a)"><path fill="#00d845" d="M50 17c18.207 0 32.988 14.787 32.988 33S68.207 83 50 83 17.012 68.213 17.012 50 31.793 17 50 17Zm0 9c13.24 0 23.988 10.755 23.988 24S63.24 74 50 74 26.012 63.245 26.012 50 36.76 26 50 26Z"/></g><clipPath id="b"><path d="M0 0v46h50l1.368.241L99 63.578l-2.736 7.517L49.295 54H0v46h100V0H0Z"/></clipPath><g clip-path="url(#b)"><path fill="#00d845" d="M50 0c27.596 0 50 22.404 50 50s-22.404 50-50 50S0 77.596 0 50 22.404 0 50 0Zm0 9c22.629 0 41 18.371 41 41S72.629 91 50 91 9 72.629 9 50 27.371 9 50 9Z"/></g><clipPath id="c"><path d="M50 0c27.596 0 50 22.404 50 50s-22.404 50-50 50S0 77.596 0 50 22.404 0 50 0Zm0 39.549c5.768 0 10.451 4.683 10.451 10.451 0 5.768-4.683 10.451-10.451 10.451-5.768 0-10.451-4.683-10.451-10.451 0-5.768 4.683-10.451 10.451-10.451Z"/></clipPath><g clip-path="url(#c)"><path fill="none" stroke="#00d845" stroke-width="9" d="M50 50 5.171 75.882"/></g><clipPath id="d"><path d="M50 0c27.596 0 50 22.404 50 50s-22.404 50-50 50S0 77.596 0 50 22.404 0 50 0Zm0 25.36c13.599 0 24.64 11.041 24.64 24.64S63.599 74.64 50 74.64 25.36 63.599 25.36 50 36.401 25.36 50 25.36Z"/></clipPath><g clip-path="url(#d)"><path fill="none" stroke="#00d845" stroke-width="9" d="m50 50 50-13.397"/></g><path fill="#00d845" d="M37.243 52.746 35 45l8-9 11-3 4 4-6 6-4 1-3 4 1.12 4.24 3.112 3.09 4.964-.598 2.866-2.964 8.196-2.196 1.464 5.464-8.098 8.026L46.83 65.49l-5.587-5.815-4-6.929Z"/></svg>'
        },
        link: 'https://modrinth.com/organization/arcomua-team',
        ariaLabel: 'Modrinth Organization Link'
      }
    ]
  }
})