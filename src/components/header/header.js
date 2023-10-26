import { Link } from 'react-router-dom';

import styles from "./header.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
      <div className={styles.title}>Elevators</div>
      <div className={styles.buttons}>
        <Link to="/config" className={styles.button}>
          Config
        </Link>
        <Link to="/controls" className={styles.button}>
          Controls
        </Link>
        <Link to="/statuses" className={styles.button}>
          Statuses
        </Link>
      </div>
    </header>
    )
}