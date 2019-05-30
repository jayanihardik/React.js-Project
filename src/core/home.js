import React, { Component } from 'react'
import Posts from '../post/post'
class Home extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Home </h1>
          <div className="container">
           <Posts /> 
          </div>
        </div>
      </div>

    )
  }
}
export default Home