<script setup lang="ts">
// "Still need help?" box shown under every guide. Hidden on the home page and
// on pages that set `pageHelp: false` in their frontmatter.
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const show = computed(() =>
  frontmatter.value.layout !== 'home' &&
  frontmatter.value.layout !== 'page' &&
  frontmatter.value.pageHelp !== false
)
</script>

<template>
  <div v-if="show" class="page-help">
    <p class="page-help-title">Still need help?</p>
    <p class="page-help-text">Search the site with Ctrl+K, or ask us. Pro customers get priority support through tickets.</p>
    <div class="page-help-links">
      <a href="/troubleshooting/">Troubleshooting</a>
      <a href="/faq">FAQ</a>
      <a href="https://fshost.me/discord" target="_blank" rel="noreferrer">Discord</a>
      <a href="https://fshost.me/pro/support" target="_blank" rel="noreferrer">Pro Support</a>
    </div>
  </div>
</template>
