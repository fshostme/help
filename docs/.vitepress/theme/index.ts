// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import GiveawayUnlock from './components/GiveawayUnlock.vue'
import NewsList from './components/NewsList.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('GiveawayUnlock', GiveawayUnlock)
    app.component('NewsList', NewsList)
  }
} satisfies Theme
