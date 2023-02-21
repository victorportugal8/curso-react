import React from "react"
import IndiretaFilho from "./IndiretaFilho"

export default props =>{
    function fornecerInformacoes(nome, idade, forte){
        console.log(nome, idade, forte)
    }
    return(
        <div>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}