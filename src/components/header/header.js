import styles from "./header.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>Elevators</div>
            <div className={styles.buttons}>
                <button className={styles.button}>Config</button>
                <button className={styles.button}>Controls</button>
                <button className={styles.button}>Statuses</button>
            </div>
        </header>
    )
}