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
            <Card titulo="#04 - Desafio Número Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60}/>
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro titulo="Situação do Aluno" aluno="Itadori Yuji" nota={6.8} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
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