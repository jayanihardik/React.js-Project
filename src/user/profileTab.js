import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import defaultImage from "../image/blank.png"

class ProfileTab extends Component {
    render() {
        const { following, followers } = this.props
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="text-primary">
                            Followers
                        </h3>
                        <hr />
                        {followers.map((person, i) => {
                            return <div key={i}>
                                <div>
                                    <Link to={`/user/${person._id}`}>
                                        <img style={{ borderRadius: "70%", border: "2px solid black" }} height="40px" width="40" className="float-left mr-2" onError={i => { i.target.src = `${defaultImage}` }} src={`${process.env.REACT_APP_API}/user/photo/${person._id} `} alt={person.name} />
                                        <div>
                                            <p className= "lead">{person.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="col-md-4">
                        <h3 className="text-primary">
                            Following
                        </h3>
                        <hr />
                        {following.map((person, i) => {
                            return <div key={i}>
                                <div>
                                    <Link to={`/user/${person._id}`}>
                                        <img style={{ borderRadius: "70%", border: "2px solid black" }} height="40px" width="40" className="float-left mr-2" onError={i => { i.target.src = `${defaultImage}` }} src={`${process.env.REACT_APP_API}/user/photo/${person._id} `} alt={person.name} />
                                        <div>
                                            <h5>{person.name}</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="col-md-4 ">
                        <div className="col-md-4">
                            <h3 className="text-primary">
                                post
                            </h3>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ProfileTab