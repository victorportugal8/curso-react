import React from "react"
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from "../dashboard/dashboard"
import Dashboard2 from "../dashboard2/dashboard2"
import CicloPagamento from "../cicloPagamento/cicloPagamento"

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/ciclosPagamento' component={CicloPagamento} />
        <Redirect from='*' to='/' />
    </Router>
)