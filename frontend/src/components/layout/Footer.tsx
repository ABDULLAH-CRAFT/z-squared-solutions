import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'
import { navItems } from '@/config/navigation'
import { site } from '@/config/site'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="bg-grid" aria-hidden="true" />
      <div className={`orb orb-red ${styles.orb}`} aria-hidden="true" />
      <span className={styles.watermark} aria-hidden="true">
        Z<sup>2</sup>
      </span>

      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Logo tone="light" />
            <p className={styles.tagline}>{site.tagline}</p>
            <a className={styles.mailPill} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className={styles.heading}>Explore</h2>
            <ul className={styles.list}>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link className={styles.link} to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={styles.heading}>Services</h2>
            <ul className={styles.list}>
              {site.services.map((service) => (
                <li key={service}>
                  <Link className={styles.link} to="/services">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
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
          <button
            type="button"
            className={styles.top}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
