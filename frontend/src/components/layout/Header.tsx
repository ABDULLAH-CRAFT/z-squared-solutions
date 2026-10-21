
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'
import { buttonClasses } from '@/components/ui/buttonClasses'
import { navItems } from '@/config/navigation'
import styles from './Header.module.css'

const DESKTOP_QUERY = '(min-width: 1100px)'

function linkClass(
  { isActive }: { isActive: boolean },
  base: string,
  active: string,
): string {
  return isActive ? `${base} ${active}` : base
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const panelId = useId()
  const location = useLocation()

  // Close the menu whenever the visitor navigates.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Escape closes the mobile menu and restores focus.
  useEffect(() => {
    if (!menuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  // Close the mobile menu when switching to desktop.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY)

    function handleChange(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false)
    }

    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  // Prevent the menu from remaining open after clicking outside it.
  useEffect(() => {
    if (!menuOpen) return

    function handlePointerDown(event: PointerEvent) {
      const target = event.target
      if (!(target instanceof Node)) return

      if (
        !panelRef.current?.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [menuOpen])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link
          to="/"
          className={styles.brand}
          aria-label="Z Squared Solutions home"
          onClick={() => setMenuOpen(false)}
        >
          <Logo />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <ul className={styles.pill}>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={(state) =>
                    linkClass(
                      state,
                      styles.navLink ?? '',
                      styles.active ?? '',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link
            to="/contact"
            className={`${buttonClasses('primary', 'sm')} ${styles.cta}`}
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        ref={panelRef}
        id={panelId}
        className={styles.mobilePanel}
        hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileList}>
            {navItems.map((item, index) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={(state) =>
                    linkClass(
                      state,
                      styles.mobileLink ?? '',
                      styles.mobileActive ?? '',
                    )
                  }
                >
                  <span className={styles.mobileNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.label}</span>
                  <ArrowUpRight
                    className={styles.mobileArrow}
                    size={16}
                    aria-hidden="true"
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className={`${buttonClasses('primary', 'md')} ${styles.mobileCta}`}
            onClick={() => setMenuOpen(false)}
          >
            Start a conversation
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
