/** Single source of truth for company facts. Do not add unverified claims here. */
export const site = {
  name: 'Z Squared Solutions',
  tagline: 'Powering Your Next Stage of Growth.',
  email: 'zubair@z2solution.com',
  domain: 'www.z2solution.com',
  /** Markets the outreach targets. These are not office locations. */
  markets: ['United States', 'United Kingdom', 'Australia', 'Dubai & UAE'],
} as const

/** Mirrors the breakpoints documented in src/styles/tokens.css (CSS variables cannot be used in media queries). */
export const breakpoints = { sm: 480, md: 768, lg: 1024, xl: 1440 } as const
