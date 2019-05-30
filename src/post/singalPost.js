import React, { Component } from 'react'
import { singalPort } from './apiPost'
import { Link } from 'react-router-dom'
import defaultImage from "../image/blank.png"

class SingalPost extends Component {
    state = {
        post: '',
        error: ''
    }

    componentDidMount = () => {
        const postId = this.props.match.params.postId
        singalPort(postId).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                this.setState({ post: data })
            }
        })
    }

    renderpost = (post, i) => {
        const posterID = post.postedBy ? post.postedBy._id : "UnKnown"
        const posterName = post.postedBy ? post.postedBy.name : "UnKnown"
        return (
            <div className="card col-md-4" key={i} >
                <div className="card-body">
                    <img src={`${process.env.REACT_APP_API}/post/photo/${post._id}`} alt={post.title}
                        onError={i => i.target.src = `${defaultImage}`} className="img-thunbnail md-3"
                        style={{ height: "200px", width: "210px" }} />
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <p className="font-italic mark">
                        postedBy<Link to={`/user/${posterID}`} >{posterName} </Link>
                        on {new Date(post.created).toDateString()}
                    </p>
                    <Link to={`post/${post._id}`}
                        className="btn btn-raised btn-primary btn-sm">
                        Read More
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        const { post } = this.state
        return (
            <div>
                <h2>{post.title}</h2>
                {JSON.stringify(this.state.post)}
            </div>
        )
    }
}
export default SingalPost