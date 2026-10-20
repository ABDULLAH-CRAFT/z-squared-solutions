import { Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { modalNavItems } from '@/config/navigation'
import type { ModalId } from '@/features/modals/modalTypes'
import { useModal } from '@/features/modals/useModal'
import styles from './Header.module.css'

const DESKTOP_QUERY = '(min-width: 900px)'

export function Header() {
  const { openModal } = useModal()
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

  function goHome() {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  function openFromMenu(id: ModalId) {
    // Focus the toggle first so focus returns somewhere visible when the modal closes.
    toggleRef.current?.focus()
    setMenuOpen(false)
    openModal(id)
  }

  const sectionItems = modalNavItems.filter((item) => item.modal !== 'contact')

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.brand} onClick={goHome} aria-label="Z Squared Solutions home">
          <Logo />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink} onClick={goHome}>
                Home
              </Link>
            </li>
            {sectionItems.map((item) => (
              <li key={item.modal}>
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={() => {
                    openModal(item.modal)
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <Button
                size="sm"
                onClick={() => {
                  openModal('contact')
                }}
              >
                Contact
              </Button>
            </li>
          </ul>
        </nav>

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
            <li>
              <Link to="/" className={styles.mobileLink} onClick={goHome}>
                Home
              </Link>
            </li>
            {sectionItems.map((item) => (
              <li key={item.modal}>
                <button
                  type="button"
                  className={styles.mobileLink}
                  onClick={() => {
                    openFromMenu(item.modal)
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                className={`${styles.mobileLink} ${styles.mobilePrimary}`}
                onClick={() => {
                  openFromMenu('contact')
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
