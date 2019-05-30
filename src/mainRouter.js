import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/home'
import Signup from './user/signup'
import Signin from './user/signin'
import Menu from './core/menu'
import Profile from './user/profile'
import User from './user/user'
import EditProfile from './user/editProfile';
import PrivteRouter from './auth/priveteRouter'
import FindUser from './user/finduser';
import NewPost from './post/newpost'
import SingalPost from './post/singalPost'

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Signin}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/post/:postId" component={SingalPost}></Route>
            <Route exact path="/signin" component={Signin}></Route>
            <PrivteRouter exact path="/home" component={Home}></PrivteRouter>
            <PrivteRouter exact path="/user" component={User}></PrivteRouter>
            <PrivteRouter exact path="/user/:userId" component={Profile}></PrivteRouter>
            <PrivteRouter exact path="/create/post" component={NewPost}></PrivteRouter>
            <PrivteRouter exact path="/user/edit/:userId" component={EditProfile}></PrivteRouter>
            <PrivteRouter exact path="/finduser" component={FindUser}></PrivteRouter>
        </Switch>
    </div>
)

export default MainRouter