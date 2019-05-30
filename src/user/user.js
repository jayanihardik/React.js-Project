import React, { Component } from 'react'
import { List } from "./userApi"
import defaultImage from "../image/blank.png"
import { Link } from 'react-router-dom'

class User extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        List().then(data => {
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
                    onError= {i => {i.target.src = `${defaultImage}`}}
                    alt={user.name} style={{ width: '100%', height: '20vw' }} />

                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.email}</p>
                        <Link to={`user/${user._id}`}
                            className="btn btn-raised btn-primary btn-sm">
                            View Profile
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )

    render() {
        const { users } = this.state
        return (
            <div className="container">
                <h1 className="mt-5 mb-5">
                    User
               </h1>
                {this.renderUsers(users)}
            </div>
        )
    }
}
export default User