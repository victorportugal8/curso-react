import React, {useState} from "react"
import IndiretaFilho from "./IndiretaFilho"

export default props =>{
    const [nome, setNome] = useState('?') //retorna 1 array com 2pos: 1-> valor em si; 2-> fn usada para alterar o valor
    const [idade, setIdade] = useState('?')
    const [forte, setForte] = useState('?')
    function fornecerInformacoes(nome, idade, forte){
        setNome(nome)
        setIdade(idade)
        setForte(forte)
    }
    return(
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{forte ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}