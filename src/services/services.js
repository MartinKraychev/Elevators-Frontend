const BASE_URL = "http://localhost:8000/"

export const setConfig = async(body) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }

    await fetch(BASE_URL + 'config', requestOptions)
}

export const callElevator = async(body) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }

    const response = await fetch(BASE_URL + 'elevators', requestOptions)
    const result = await response.json()
    return result
}

export const getElevatorStatuses = async() => {
    const response = await fetch(BASE_URL + 'elevators')
    const result = await response.json()
    return result
}