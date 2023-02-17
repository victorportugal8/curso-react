import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

const el = document.getElementById('root')

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" aluno="Itadori Yuji" nota={6.8} />
        <Fragmento />
    </div>, 
    el
)//1P: a mensagem; 2P: elemento onde a mensagem será injetada