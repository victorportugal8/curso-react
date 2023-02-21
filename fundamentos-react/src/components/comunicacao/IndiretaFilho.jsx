import React from "react"

export default props =>{
    const cb = props.quandoClicar
    const gerarIdade = () => Math.floor(Math.random() * (1000 - 100 + 1)) + 100
    const gerarForca = () => Math.random() > 0.5
    return(
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('Isshin Kurosaki', gerarIdade(), gerarForca())}>
                Fornecer Informações
            </button>
        </div>
    )
}