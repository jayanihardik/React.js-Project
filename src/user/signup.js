import React, { Component } from 'react'
import { signup } from '../auth'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            open: false,
            loading: false,
            redirectToReferer: false
        }
    }

    handelChange = (name) => (event) => {
        this.setState({ [name]: event.target.value })
    }

    submit = event => {
        event.preventDefault()
        this.setState({ loading: true })
        const { email, name, password } = this.state
        const user = {
            email,
            name,
            password
        };

        signup(user).then(data => {
            if (data.error)
                this.setState({
                    error: data.error,
                    loading: false
                })
            else this.setState({
                error: "",
                email: "",
                name: "",
                password: "",
                open: true,
                loading: false,
                redirectToReferer: true
            })
        }
        )

    }

    signupForm = (name, email, password) => (
        <form>
            <div className="input-field col s4">
                <input type="text" onChange={this.handelChange("name")} placeholder="Name" value={name} />
            </div>
            <div className="input-field col s8">
                <input type="email" onChange={this.handelChange("email")} placeholder="Email" value={email} />
            </div>
            <div className="input-field col s8 ">
                <input type="password" onChange={this.handelChange("password")} placeholder="Password" value={password} />
            </div>
            <div>
                <button className="btn waves-effect waves-light" onClick={this.submit} type="submit">Submit
            </button>
            </div>
        </form>
    )

    render() {
        const { name, email, password, error, open, loading, redirectToReferer } = this.state
        if (redirectToReferer) {
            return < Redirect to="/signin" />
        }
        return (
            <div>
                <h2> Sign UP</h2>
                <div className="alert  alert-danger" style={{ display: error ? "" : "none" }}> {error}</div>
                <div className="alert  alert-primary" style={{ display: open ? "" : "none" }}> Signup Sucessfull</div>
                {loading ? (<div className="jumbotron text-center">
                    <h2> Loading....</h2>
                </div>) : ("")}
                {this.signupForm(name, email, password)}
            </div>
        )
    }
}

export default Signup