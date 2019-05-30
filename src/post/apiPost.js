export const create = (userId, token, post) => {
    return fetch(`${process.env.REACT_APP_API}/post/new/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: post
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

export const List = () => {
    return fetch(`${process.env.REACT_APP_API}/posts`, {
        method: "Get",
        headers: {
            Accept: "application/json"
        },
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}
export const singalPort = postId => {
    return fetch(`${process.env.REACT_APP_API}/post/${postId}`, {
        method: "Get",
        headers: {
            Accept: "application/json"
        },
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}