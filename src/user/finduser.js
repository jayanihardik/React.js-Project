import React, { Component } from 'react'
import { finduser, Follow } from "./userApi"
import defaultImage from "../image/blank.png"
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/index'
class FindUser extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            error: '',
            open: false
        }
    }

    clickfollow = (user, i) => {
        const userId = isAuthenticated().user._id
        const token = isAuthenticated().token
        Follow(userId, token, user._id).then(data => {
            if (data.error) {
                this.setState({ error: data.error })
            } else {
                let toFollow = this.state.users
                toFollow.splice(i, 1)
                this.setState = ({
                    users: toFollow,
                    open: true,
                    followMessage: `Following ${user.name}`
                })
            }
        })
    }

    componentDidMount() {
        const userId = isAuthenticated().user._id
        const token = isAuthenticated().token
        finduser(userId, token).then(data => {
            if (data.error) {
                console.log("Error")
            } else {
                this.setState({ users: data })
            }
        })

    }

    renderUsers = users => (

        <div className="row">
            {users.map((user, i) => (
                <div className="card col-md-4" style={{ width: "18 rem" }} key={i}>
                    <img className="card-img-top" src={`${process.env.REACT_APP_API}/user/photo/${user._id}`}
                        onError={i => { i.target.src = `${defaultImage}` }}
                        alt={user.name} style={{ width: '100%', height: '20vw' }} />

                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.email}</p>
                        <Link to={`user/${user._id}`}
                            className="btn btn-raised btn-primary btn-sm">
                            View Profile
                        </Link>
                        <button onClick={() => this.clickfollow(user, i)} className="btn btn-raised btn-info float-right btn-sm">Follow</button>
                    </div>

                </div>
            ))}
        </div>
    )

    render() {
        const { users, open, followMessage } = this.state
        return (
            <div className="container">
                <h1 className="mt-5 mb-5">
                    FindUser
               </h1>
                {open && (<div className="alert alert-success" >
                    <p> {followMessage}</p>
                </div>
                )}
                {this.renderUsers(users)}
            </div>
        )
    }
}
export default FindUser