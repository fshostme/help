<script setup lang="ts">
import { computed } from 'vue'

interface NewsArticle {
  title: string
  url: string
  date: string
  description: string
}

const modules = import.meta.glob('/news/*.md', { eager: true }) as Record<string, { __pageData: { title: string, frontmatter: { date?: string, description?: string } } }>

const news = computed<NewsArticle[]>(() => {
  return Object.entries(modules)
    .filter(([path]) => !path.endsWith('/index.md'))
    .map(([path, module]) => ({
      title: module.__pageData?.title || 'Untitled',
      url: path.replace(/\.md$/, ''),
      date: module.__pageData?.frontmatter?.date || '',
      description: module.__pageData?.frontmatter?.description || ''
    }))
    .sort((a, b) => {
      // Sort by date descending (newest first)
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return 0
    })
})
</script>

<template>
  <div class="news-list">
    <div v-if="news.length === 0" class="no-news">
      No news articles yet.
    </div>
    <article v-for="article in news" :key="article.url" class="news-item">
      <h2>
        <a :href="article.url">{{ article.title }}</a>
      </h2>
      <p v-if="article.date" class="date">{{ article.date }}</p>
      <p v-if="article.description" class="description">{{ article.description }}</p>
    </article>
  </div>
</template>

<style scoped>
.news-list {
  margin-top: 1.5rem;
}

.news-item {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.news-item:first-child {
  padding-top: 0;
}

.news-item:last-child {
  border-bottom: none;
}

.news-item h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}

.news-item h2 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.news-item h2 a:hover {
  color: var(--vp-c-brand-1);
}

.date {
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.description {
  margin: 0;
  color: var(--vp-c-text-2);
}

.no-news {
  color: var(--vp-c-text-2);
}
</style>
