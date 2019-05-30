import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { signin, authntication } from "../auth";

class Signin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
            open: false,
            redirectToReferer: false,
            loading: false
        }
    }

    handelChange = (email) => (event) => {
        this.setState({ [email]: event.target.value })
    }

    submit = event => {
        event.preventDefault()
        this.setState({ loading: true })
        const { email, password } = this.state
        const user = {
            email,
            password
        };
        signin(user).then(data => {
            if (data.error) {
                this.setState({
                    error: data.error,
                    loading: false
                })
            }
            else {
                authntication(data, () => {
                    this.setState({
                        redirectToReferer: true
                    })
                })
            }
        })
    }

    signinForm = (email, password) => (
        <form>
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
        const { email, password, error, open, redirectToReferer, loading } = this.state
        if (redirectToReferer) {
            return < Redirect to="/home" />
        }
        return (
            <div>
                <h2> Sign In</h2>
                <div className="alert  alert-danger" style={{ display: error ? "" : "none" }}> {error}</div>
                <div className="alert  alert-primary" style={{ display: open ? "" : "none" }}> Signin Sucessfull</div>
                {loading ? (<div className="jumbotron text-center">
                    <h2> Loading....</h2>
                </div>) : ("")}
                {this.signinForm(email, password)}
            </div>
        )
    }
}
export default Signin