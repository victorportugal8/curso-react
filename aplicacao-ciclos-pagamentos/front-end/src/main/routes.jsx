import React from "react"
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import AuthOrApp from "./authOrApp"
import Dashboard from "../dashboard/dashboard"
import Dashboard2 from "../dashboard2/dashboard2"
import CicloPagamento from "../cicloPagamento/cicloPagamento"

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='ciclosPagamento' component={CicloPagamento} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)