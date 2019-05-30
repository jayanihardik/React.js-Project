
export const signup = user => {
    return fetch(`${process.env.REACT_APP_API}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    }).then(response => {
        return response.json()
    }).catch(error =>
        console.log(error))
}

export const signin = user => {
    return fetch(`${process.env.REACT_APP_API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    }).then(response => {
        return response.json()
    }).catch(error =>
        console.log(error))
}

export const authntication = (jwt, next) => {
    if (typeof window !== undefined) {
        localStorage.setItem("jwt", JSON.stringify(jwt))
        next()
    }
}


export const isAuthenticated = () => {
    if (typeof window == undefined) {
        return false
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else {
        return false
    }
}

export const signout = (next) => {
    if (typeof window !== "undefined")
        localStorage.removeItem("jwt")
    next()
    return fetch(`${process.env.REACT_APP_API}/signout`, {
        method: "GET"
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err))
}























