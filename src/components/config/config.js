import styles from "./config.module.css"

export const Config = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Config</h2>
            <p className={styles.description}>Set the elevators and their limits</p>
            <p className={styles.description}>A minimum of 1 and maximum or 5 elevators can be set</p>
            <form className={styles.form}>
                <div className={styles.formRow}>
                    <label htmlFor="elevator1">Elevator 1:</label>
                    <div>
                        <input type="number" id="minFloor1" placeholder="Min Floor Limit" />
                        <input type="number" id="maxFloor1" placeholder="Max Floor Limit" />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="elevator2">Elevator 2:</label>
                    <div>
                        <input type="number" id="minFloor2" placeholder="Min Floor Limit" />
                        <input type="number" id="maxFloor2" placeholder="Max Floor Limit" />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="elevator3">Elevator 3:</label>
                    <div>
                        <input type="number" id="minFloor3" placeholder="Min Floor Limit" />
                        <input type="number" id="maxFloor3" placeholder="Max Floor Limit" />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="elevator4">Elevator 4:</label>
                    <div>
                        <input type="number" id="minFloor4" placeholder="Min Floor Limit" />
                        <input type="number" id="maxFloor4" placeholder="Max Floor Limit" />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <label htmlFor="elevator5">Elevator 5:</label>
                    <div>
                        <input type="number" id="minFloor5" placeholder="Min Floor Limit" />
                        <input type="number" id="maxFloor5" placeholder="Max Floor Limit" />
                    </div>
                </div>
            </form>
            <button className={styles.submitButton}>Submit</button>
        </div>
    )
}