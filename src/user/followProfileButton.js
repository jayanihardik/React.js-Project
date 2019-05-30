import React, { Component } from 'react'
import { Follow , unFollow } from './userApi'

class FollowProfileButton extends Component {

    followClick = () => {
        this.props.onButtonClick(Follow)
    }
    unfollowClick = () => {
        this.props.onButtonClick(unFollow)
    }
    render() {
        return (
            <div className="d-inline-block mt-5">
                {!this.props.following ? (
                    <button onClick={this.followClick} className="btn btn-success btn-raised mr-5">
                     + Follow
                    </button>
                ) : (
                    <button onClick={this.unfollowClick} className="btn btn-warning btn-raised ">
                     - UNFollow
                    </button>
                    )}


            </div>
        )
    }
}
export default FollowProfileButton