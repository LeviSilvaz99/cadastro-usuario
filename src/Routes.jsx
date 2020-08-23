import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'


import Home from './pages/Home'
import User from './pages/User'
import UserCrud from './pages/User/UserCrud'
const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={User} />
        <Route path='/users/:idToUpdate' component={User} />
        <Redirect from='*' to='/' />
    </Switch>

);

export default Routes;
