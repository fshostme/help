// VitePress build-time data loader.
// Fetches the latest MatchZy release tag from the GitHub API at build time
// (server-side Node fetch — no browser CORS involved). Runs on every
// `vitepress build`/`dev`. Falls back to a pinned version if the API is
// unreachable so the docs never break the build.
//
// To refresh the shown version automatically when a new release is cut,
// trigger a docs rebuild from a GitHub "release" webhook.

const RELEASES_API =
  'https://api.github.com/repos/mrc4tt/MatchZy/releases/latest'
const RELEASES_PAGE = 'https://github.com/mrc4tt/MatchZy/releases'
const FALLBACK_VERSION = '0.8.51'

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
