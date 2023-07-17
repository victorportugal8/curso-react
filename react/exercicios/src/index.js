import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './components/BomDia'
import { BoaTarde, BoaNoite } from './components/Multiplos'

ReactDOM.render(
    <div>
        <BomDia nome='Satoru Gojo' />
        <BoaTarde nome='Son Goku' />
        <BoaNoite nome='Zaraki Kenpachi' />
    </div>
, document.getElementById('root'))