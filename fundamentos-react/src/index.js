import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'

const el = document.getElementById('root')

ReactDOM.render( //1P: a mensagem; 2P: elemento onde a mensagem será injetada
    <App />, el
)