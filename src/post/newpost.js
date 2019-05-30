import React, { Component } from 'react'
import { isAuthenticated } from '../auth/index'
import { create } from './apiPost'
import { Redirect } from 'react-router-dom'


class NewPost extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            body: '',
            photo: '',
            error: '',
            user: {},
            fileSize: 0,
            loading: false,
            redirectToprofile: false
        }
    }
    componentDidMount() {
        this.postData = new FormData()
        this.setState({ user: isAuthenticated().user })
    }
    handelChange = (name) => (event) => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        this.postData.set(name, value)
        this.setState({ [name]: value })
    }
    submit = event => {
        event.preventDefault()
        this.setState({ loading: true })
        const userId = isAuthenticated().user._id
        const token = isAuthenticated().token
        create(userId, token, this.postData).then(data => {
            if (data.error) {
                this.setState({
                    error: data.error,
                    loading: false
                })
            }
            else {
                this.setState({ loading: false, redirectToprofile: true ,  title: "", body: "", photo: "" })
            }
        })
    }
    newPostForm = (title, body) => (
        <form>
            <div className="input-field col s4">
                <input type="text" onChange={this.handelChange("title")} placeholder="Title" value={title} />
            </div>
            <div className="input-field col s8">
                <input type="email" onChange={this.handelChange("body")} placeholder="Body" value={body} />
            </div>
            <div className="input-field col s4">
                <input type="file" accept="image/*" onChange={this.handelChange("photo")} placeholder="Profile Photo" />
            </div>
            <div>
                <button className="btn waves-effect waves-light" onClick={this.submit} type="submit">Create Post
            </button>
            </div>
        </form>
    )
    render() {
        const { title, body, user, loading, redirectToprofile } = this.state
        if (redirectToprofile)
            return <Redirect to={`/user/${user.id}`} />
        return (
            <div className="container">
                <h1 className="mt-5 mb-5">Create Post </h1>
                {this.newPostForm(title, body)}
                {loading ? (<div className="jumbotron text-center">
                    <h2> Loading....</h2>
                </div>) : ("")}
            </div>
        )
    }
}

export default NewPost