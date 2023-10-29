const host = "http://localhost:8000/"


async function request(url, options) {
    try {
        const response = await fetch(host + url, options)
        // host + url = full address

        if (response.ok !== true) {
            const error = await response.json()
            const message = error.detail
            throw new Error(message)
        }

        if (response.status === 201) {
            //201 is no content status
            return response
        } else {
            return response.json()
        }

    } catch (error) {
        alert(error)
    }
}

function createOptions(method = 'get', data) {

    const options = {
        method,
        headers: {}
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    return options
}

export async function setConfig(body) {
    return request('config', createOptions('post', body))
}

export async function callElevator(body) {
    return request('elevators', createOptions('post', body))
}

export async function getElevatorStatuses() {
    return request('elevators', createOptions())
}

