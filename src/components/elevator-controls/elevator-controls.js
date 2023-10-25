import React, { useState } from 'react';
import styles from "./elevator-control.module.css"

export const ElevatorControls = () => {
    const [pressedButton, setPressedButton] = useState(null);

    const handleButtonPress = (buttonNumber) => {
        setPressedButton(buttonNumber);
    };

    return (
        <div className={styles.container}>
            <div className={styles.windows}>
                <div className={styles.window}></div>
                <div className={styles.window}></div>
            </div>
            <div className={styles.buttonWrapper}>
                <div className={styles.buttonGrid}>
                    <button
                        className={`${styles.button} ${pressedButton === 1 ? styles.active : ''}`}
                        onClick={() => handleButtonPress(1)}
                    >
                        1
                    </button>
                    <button
                        className={`${styles.button} ${pressedButton === 2 ? styles.active : ''}`}
                        onClick={() => handleButtonPress(2)}
                    >
                        2
                    </button>
                    <button
                        className={`${styles.button} ${pressedButton === 3 ? styles.active : ''}`}
                        onClick={() => handleButtonPress(3)}
                    >
                        3
                    </button>
                    <button
                        className={`${styles.button} ${pressedButton === 4 ? styles.active : ''}`}
                        onClick={() => handleButtonPress(4)}
                    >
                        4
                    </button>
                    <button
                        className={`${styles.button} ${pressedButton === 5 ? styles.active : ''}`}
                        onClick={() => handleButtonPress(5)}
                    >
                        5
                    </button>
                    <button
                        className={`${styles.button} ${pressedButton === 6 ? styles.active : ''}`}
                        onClick={() => handleButtonPress(6)}
                    >
                        6
                    </button>
                    <button
                        className={`${styles.button} ${pressedButton === 7 ? styles.active : ''}`}
                        onClick={() => handleButtonPress(7)}
                    >
                        7
                    </button>
                    <button
                        className={`${styles.button} ${pressedButton === 8 ? styles.active : ''}`}
                        onClick={() => handleButtonPress(8)}
                    >
                        8
                    </button>
                    <button
                        className={`${styles.button} ${pressedButton === 9 ? styles.active : ''}`}
                        onClick={() => handleButtonPress(9)}
                    >
                        9
                    </button>
                </div>
            </div>
        </div>
    )
}