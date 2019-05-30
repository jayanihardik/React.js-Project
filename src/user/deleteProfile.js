import React, { Component } from 'react'
import { isAuthenticated, signout } from '../auth'
import { remove } from './userApi'
import { Redirect } from 'react-router-dom'

class DeleteProfile extends Component {

    state = {
        redirect: false
    }

    delete = () => {
        const token = isAuthenticated().token
        const userId = this.props.userId
        remove(userId, token).then(data => {
            if (data.error) {
                console.log("Error")
            } else {
                signout(() => console.log('User is Delete'))
                this.setState({ redirect: true })
            }
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <button className="btn btn-raised btn-danger mr-5" onClick={this.delete} > Delete </button>
        )

    }
}
export default DeleteProfile