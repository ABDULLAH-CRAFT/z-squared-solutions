import { Logo } from '@/components/brand/Logo'
import { modalNavItems } from '@/config/navigation'
import { site } from '@/config/site'
import { useModal } from '@/features/modals/useModal'
import styles from './Footer.module.css'

export function Footer() {
  const { openModal } = useModal()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Logo tone="light" />
            <p className={styles.tagline}>{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className={styles.heading}>Explore</h2>
            <ul className={styles.list}>
              {modalNavItems.map((item) => (
                <li key={item.modal}>
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={() => {
                      openModal(item.modal)
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={styles.heading}>Contact</h2>
            <a className={styles.mail} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          <div>
            <h2 className={styles.heading}>Target markets</h2>
            <ul className={styles.list}>
              {site.markets.map((market) => (
                <li key={market}>{market}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className={styles.msme}>
            <span className={styles.dot} aria-hidden="true" />
            MSME Registered
          </p>
        </div>
      </div>
    </footer>
  )
}
