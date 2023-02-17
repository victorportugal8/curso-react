import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

const el = document.getElementById('root')
const tag = <strong>Olá React!</strong>

ReactDOM.render(<div>{tag}</div>, el) //1P: a mensagem; 2P: elemento onde a mensagem será injetada