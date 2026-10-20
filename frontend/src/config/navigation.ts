export interface NavItem {
  label: string
  to: string
}

/** Order matches the specified navigation: Home, Services, Industries, Our Approach, About Us, Contact. */
export const navItems: readonly NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Our Approach', to: '/our-approach' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
