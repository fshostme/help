// VitePress build-time data loader.
// Fetches the latest CounterStrikeSharp (FSHOST fork) release tag from the
// GitHub API at build time. Falls back to a pinned version if the API is
// unreachable or rate limited so the docs never break the build.

const RELEASES_API =
  'https://api.github.com/repos/mrc4tt/CounterStrikeSharp/releases/latest'
const RELEASES_PAGE = 'https://github.com/mrc4tt/CounterStrikeSharp/releases'
const FALLBACK_VERSION = '1.0.404'

export default {
  // Re-run the loader when this file changes.
  watch: [],
  async load() {
    try {
      const res = await fetch(RELEASES_API, {
        headers: { Accept: 'application/vnd.github+json' },
        signal: AbortSignal.timeout(10000),
      })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const json = await res.json()
      const tag = (json.tag_name || '').replace(/^v/, '')
      return {
        version: tag || FALLBACK_VERSION,
        url: json.html_url || RELEASES_PAGE,
      }
    } catch {
      return { version: FALLBACK_VERSION, url: RELEASES_PAGE }
    }
  },
}
