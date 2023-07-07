import React from "react"
import ReactDOM from "react-dom"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import Promise from "redux-promise"
import Multi from 'redux-multi'
import Thunk from 'redux-thunk'

import Routes from "./main/routes"
import Reducers from "./main/reducers"

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(Multi, Thunk, Promise)(createStore)(Reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('app'))