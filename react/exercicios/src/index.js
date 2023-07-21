import React from 'react'
import ReactDOM from 'react-dom'

import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Saudacao tipo='Bom dia' nome='Satoru Gojo' />
        <hr />
        <Pai sobrenome="Son" nome="Goku">
            {/* Passando os componentes Filhos aqui */}
            <Filho nome="Gohan" />
            <Filho nome="Goku" />
            <Filho nome="Goten" />

        </Pai>
    </div>
, document.getElementById('root'))