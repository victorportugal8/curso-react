import "./App.css"
import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#04 - Desafio Número Aleatório">
                <Aleatorio min={1} max={60}/>
            </Card>
            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro">
                <ComParametro titulo="Situação do Aluno" aluno="Itadori Yuji" nota={6.8} />
            </Card>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

/* export default function App(props){
    return(
        <div id="app">
            <h1>Fundamentos React</h1>
            <Fragmento />
            <ComParametro titulo="Situação do Aluno" aluno="Itadori Yuji" nota={6.8} />
            <Primeiro></Primeiro>
        </div>
    )
} */