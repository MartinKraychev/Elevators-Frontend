import { useNavigate} from 'react-router-dom';

import styles from "./config.module.css"
import { setConfig } from "../../services/services"

export const Config = () => {
    const navigate = useNavigate()
    
    const elevator_numbers = [1, 2, 3, 4, 5]
    const request_body = {"elevators":{}}

    function onSubmit(event) {
        

        event.preventDefault();
        const formData = new FormData(event.target)

        for (let i = 1; i <= elevator_numbers.length; i++) {
            let minFloorValue = formData.get(`minFloor${i}`)
            let maxFloorValue = formData.get(`maxFloor${i}`)
            if (minFloorValue !== "" && maxFloorValue !== "") {
                request_body["elevators"][i] = [Number(minFloorValue), Number(maxFloorValue)]
            }
        }
        setConfig(request_body)
            .then(navigate('/controls'))
        event.target.reset()

    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Config</h2>
            <p className={styles.description}>Set the elevators and their limits</p>
            <p className={styles.description}>A minimum of 1 and maximum or 5 elevators can be set</p>
            <p className={styles.description}>Floors should range between 1 and 9 inclusive</p>

            <form className={styles.form} onSubmit={onSubmit}>
                {elevator_numbers.map((elevator) => (
                    <div className={styles.formRow} key={elevator}>
                        <label htmlFor={`elevator${elevator}`}>{`Elevator ${elevator}:`}</label>
                        <div>
                            <input type="number" name={`minFloor${elevator}`} placeholder="Min Floor Limit" />
                            <input type="number" name={`maxFloor${elevator}`} placeholder="Max Floor Limit" />
                        </div>
                    </div>
                ))}
                <button className={styles.submitButton}>Submit</button>
            </form>
        </div>
    )
}