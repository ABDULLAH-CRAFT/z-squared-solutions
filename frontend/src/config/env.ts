/** Typed, centralised access to build-time environment variables. */
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim() ?? ''

export const env = {
  /** Empty string means no backend is configured, so the contact form uses the mailto fallback. */
  apiBaseUrl,
  hasBackend: apiBaseUrl.length > 0,
  siteUrl: import.meta.env.VITE_SITE_URL?.trim() ?? '',
} as const
