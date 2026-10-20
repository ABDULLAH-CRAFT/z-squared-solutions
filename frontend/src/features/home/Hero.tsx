import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useModal } from '@/features/modals/useModal'
import styles from './Hero.module.css'

export function Hero() {
  const { openModal } = useModal()

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`${styles.shape} ${styles.shapeNavy}`} aria-hidden="true" />
      <div className={`${styles.shape} ${styles.shapeRed}`} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>
          <Badge dot>MSME Registered</Badge>
          <h1 id="hero-heading" className={styles.headline}>
            Powering Your Next Stage of <span className={styles.accent}>Growth.</span>
          </h1>
          <p className={styles.lead}>
            Strategic lead generation, recruitment and sales development to help ambitious
            businesses reach the right decision makers and unlock new opportunities.
          </p>
          <div className={styles.actions}>
            <Button
              onClick={() => {
                openModal('contact')
              }}
            >
              Let's Connect
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                openModal('services')
              }}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
