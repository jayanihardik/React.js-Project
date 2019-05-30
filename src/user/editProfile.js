import React, { Component } from 'react'
import { isAuthenticated } from '../auth/index'
import { read, update } from './userApi'
import { Redirect } from 'react-router-dom'
import defaultImage from "../image/blank.png"

class EditProfile extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            name: "",
            email: "",
            password: "",
            photo: "",
            about: "",
            redirectToprofile: false,
            loading: false
        }
    }

    init = userId => {
        const token = isAuthenticated().token
        read(userId, token)
            .then(data => {
                if (data.errpr) {
                    this.setState({ redirectToSignin: true })
                } else {
                    this.setState({
                        id: data._id,
                        name: data.name,
                        email: data.email,
                        about: data.about,
                        error: ''
                    })
                }

            })
    }

    componentDidMount() {
        this.userData = new FormData()
        const userId = this.props.match.params.userId
        this.init(userId)
    }

    handelChange = (name) => (event) => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        this.userData.set(name, value)
        this.setState({ [name]: value })
    }

    submit = event => {
        this.setState({ loading: true })
        event.preventDefault()
        this.setState({ loading: true })
        const userId = this.props.match.params.userId
        const token = isAuthenticated().token
        update(userId, token, this.userData).then(data => {
            if (data.error)
                this.setState({
                    error: data.error,
                    loading: false
                })
            else this.setState({
                redirectToprofile: true
            })
        })
    }

    signupForm = (name, email, about, password) => (
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
            <div className="input-field col s4">
                <input type="text" onChange={this.handelChange("about")} placeholder="About..." value={about} />
            </div>
            <div className="input-field col s4">
                <input type="file" accept="image/*" onChange={this.handelChange("photo")} placeholder="Profile Photo" />
            </div>
            <div>
                <button className="btn waves-effect waves-light" onClick={this.submit} type="submit">Update
            </button>
            </div>
        </form>
    )

    render() {
        const { id, name, email, loading, password, about, redirectToprofile } = this.state

        const photoUrl = id ? `${process.env.REACT_APP_API}/user/photo/${id}` : defaultImage

        if (redirectToprofile) {
            return <Redirect to={`/user/${id}`} />;
        }
        return (
            <div className="container">
                <h1 className="mt-5 mb-5"> Edit Profile </h1>
                <img src={photoUrl} alt={name}
                    onError={i => { i.target.src = `${defaultImage}` }} style={{ width: '25%', height: '14vw' }} />
                {this.signupForm(name, email, about, password)}

                {loading ? (<div className="jumbotron text-center">
                    <h2> Loading....</h2>
                </div>) : ("")}

            </div>
        )
    }
}
export default EditProfile