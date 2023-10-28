import React, { useEffect, useState } from 'react';

import styles from "./elevator-statuses.module.css"
import { getElevatorStatuses } from '../../services/services';

export const ElevatorStatuses = () => {
    const [elevatorsInfo, setElevatorsInfo] = useState([])

    useEffect(() => {
        getElevatorStatuses()
            .then(elevators => setElevatorsInfo(elevators.elevators_info))
    }, [])

    const directionMapper = {
        'up': "↑",
        'down': "↓",
        'idle': '-'
    }
    
    return (
        <div className={styles.container}>
            {elevatorsInfo.map((elevator, index) =>
            <div className={styles.windows} key={index}>
                <div className={styles.window}>{
                    <p className={styles.textInWindow}>{directionMapper[elevator[1]]}</p>
                }</div>
                <div className={styles.window}>{
                    <p className={styles.textInWindow}>{elevator[0]}</p>
                }</div>
            </div>)}
        </div>
    )
}