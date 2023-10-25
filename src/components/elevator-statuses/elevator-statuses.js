import styles from "./elevator-statuses.module.css"

export const ElevatorStatuses = () => {
    return (
        <div className={styles.container}>
            <div className={styles.windows}>
                <div className={styles.window}></div>
                <div className={styles.window}></div>
                <div className={styles.window}></div>
                <div className={styles.window}></div>
                <div className={styles.window}></div>
            </div>
        </div>
    )
}