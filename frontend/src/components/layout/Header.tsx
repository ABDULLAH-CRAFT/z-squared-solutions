import { Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'
import { buttonClasses } from '@/components/ui/buttonClasses'
import { navItems } from '@/config/navigation'
import styles from './Header.module.css'

const DESKTOP_QUERY = '(min-width: 1100px)'

function linkClass({ isActive }: { isActive: boolean }, base: string, active: string): string {
  return isActive ? `${base} ${active}` : base
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  // Escape closes the mobile menu and returns focus to its toggle.
  useEffect(() => {
    if (!menuOpen) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  // Close the mobile menu if the viewport grows to desktop width.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY)
    function handleChange(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false)
    }
    query.addEventListener('change', handleChange)
    return () => {
      query.removeEventListener('change', handleChange)
    }
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.brand} onClick={closeMenu} aria-label="Z Squared Solutions home">
          <Logo />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.pill}>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={(state) => linkClass(state, styles.navLink ?? '', styles.active ?? '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className={`${buttonClasses('primary', 'sm')} ${styles.cta}`}>
          Let&apos;s Connect
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls={panelId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => {
            setMenuOpen((open) => !open)
          }}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div id={panelId} className={styles.mobilePanel} hidden={!menuOpen}>
        <nav aria-label="Mobile">
          <ul className={styles.mobileList}>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                  className={(state) =>
                    linkClass(state, styles.mobileLink ?? '', styles.mobileActive ?? '')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
