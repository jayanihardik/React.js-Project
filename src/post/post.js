import React, { Component } from 'react'
import { List } from "./apiPost"
import { Link } from 'react-router-dom'
import defaultImage from "../image/blank.png"

class Post extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        List().then(data => {
            if (data.error) {
                console.log("Error")
            } else {
                this.setState({ posts: data })
            }
        })
    }

    renderPosts = posts => (
        <div className="row">
            {posts.map((post, i) => {
                const posterID = post.postedBy ? post.postedBy._id : "UnKnown"
                const posterName = post.postedBy ? post.postedBy.name : "UnKnown"
                return (
                    <div className="card col-md-4" key={i} >
                        <div className ="card-body">
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
            })
            }
        </div >
    )
    render() {
        const { posts } = this.state
        return (
            <div className="container">
                <h3 className="mt-8 mb-8">
                    Recent Posts
               </h3>
                {this.renderPosts(posts)}
            </div>
        )
    }
}
export default Post