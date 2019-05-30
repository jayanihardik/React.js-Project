import React, { Component } from 'react'
import { isAuthenticated } from '../auth'
import { Redirect } from 'react-router-dom'
import { read } from '../user/userApi'
import { Link } from 'react-router-dom'
import defaultImage from "../image/blank.png"
import DeleteProfile from './deleteProfile';
import FollowProfileButton from './followProfileButton'
import ProfileTab from './profileTab'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: { following: [], followers: [] },
            redirectToSignin: false,
            following: false,
            error: ''
        }
    }

    init = userId => {
        const token = isAuthenticated().token
        read(userId, token)
            .then(data => {
                if (data.errpr) {
                    this.setState({ redirectToSignin: true })

                } else {
                    let following = this.checkFollow(data)
                    this.setState({
                        following,
                        user: data
                    })
                }

            })
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        this.init(userId)
    }

    checkFollow = user => {
        const jwt = isAuthenticated()
        const match = user.followers.find(followers => {
            return followers._id === jwt._id
        })
        return match
    }

    componentWillReceiveProps(props) {
        const userId = props.match.params.userId
        this.init(userId)
    }

    clickFollowButton = callApi => {
        const userId = isAuthenticated().user._id
        const token = isAuthenticated().token
        callApi(userId, token, this.state.user._id).then(data => {
            if (data.error) {
                this.setState({ error: data.error })
            } else {
                this.setState({ user: data, following: !this.state.following })
            }
        })
    }

    render() {
        const { redirectToSignin, user } = this.state
        const photoUrl = user._id ? `${process.env.REACT_APP_API}/user/photo/${user._id}` : defaultImage

        if (redirectToSignin)
            return <Redirect to="/signin" />
        return (
            <div className="container">
                <h1 className="mt-5 mb-5"> Profile </h1>
                <div className="row">
                    <div className="col-md-6">
                        <img className="card-img-top" src={photoUrl} alt={user.name}
                            onError={i => { i.target.src = `${defaultImage}` }} style={{ width: '50%', height: '14vw' }} />
                    </div>
                    <div className="col-md-6">
                        <div className="lead mt-5 md-5">
                            <h5> <p> Hello  {user.name}</p> </h5>
                            <h6> <p> Email: {user.email}</p> </h6>
                            <h6> <p> Joined {new Date(user.created).toDateString()} </p> </h6>
                            <h6> <p> About..... {user.about}</p> </h6>
                        </div>
                        {isAuthenticated().user && isAuthenticated().user._id === user._id ? (
                            <div className="d-inline-block mt-5">
                                <Link className="btn btn-raised btn-succes mr-5" to={`/user/edit/${user._id}`}>
                                    Edit Profile
                                </Link>
                                <DeleteProfile userId={user._id} />
                            </div>
                        ) : (<FollowProfileButton following={this.state.following} onButtonClick={this.clickFollowButton} />)}
                      
                    </div>
                </div>
                <div className="row">
                    <div className="col md-12 mt-5 md-5">
                    <hr />
                        <ProfileTab followers={user.followers} following={user.following} /> 
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile