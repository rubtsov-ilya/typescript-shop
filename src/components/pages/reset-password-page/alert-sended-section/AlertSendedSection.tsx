import { FC } from 'react'
import styles from './AlertSendedSection.module.sass'
import { Link } from 'react-router-dom'

const AlertSendedSection: FC = () => {
  return (
    <section className={styles["alert-section"]}>
      <div className="container">
        <div className={styles["alert-section__content"]}>
          <div className={styles["alert-section__main-wrapper"]}>
            <h1 className={styles["alert-section__title"]}>Reset password now</h1>
            <div className={styles["alert"]}>
              <h2 className={styles["alert__title"]}>Check your email</h2>
              <hr className={styles["alert__line"]}></hr>
              <Link className={styles["alert__home-link"]} to={'/login'}>Return to sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlertSendedSection