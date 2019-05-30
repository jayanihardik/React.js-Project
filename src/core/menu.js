import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, signout } from '../auth'

const isActive = (history, path) => {
    if (history.location.pathname === path)
        return { color: "#aeb5bb" }; else
        return { color: "#ffffff" }
};



const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            {!isAuthenticated() && (
                <>
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link" style={isActive(history, '/signin')} >Sign in</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link" style={isActive(history, '/signup')} >sign up</Link>
                    </li>
                </>
            )}

            {isAuthenticated() && (
                <>
                    <li className="nav-item">
                        <Link to="/home" className="nav-link active" style={isActive(history, '/')} >Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user" className="nav-link active" style={isActive(history, '/')} >User </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/finduser" className="nav-link active" style={isActive(history, '/')} >FindUser </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create/post" className="nav-link active" style={isActive(history, '/')} >Craete Post </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/user/${isAuthenticated().user._id}`} style={{ color: "#1ba4e6" }} className="nav-link">
                            {`hi ${isAuthenticated().user.name}`}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" style={isActive(history, '/signout'), {cursor : "pointer" , color : "#fff" }} onClick={() => signout(() => history.push('/'))} >logout </span>
                </li>
                </>
     )}
        </ul>
    </div >
)

export default withRouter(Menu)

