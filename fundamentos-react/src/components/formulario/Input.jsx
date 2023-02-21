import "./Input.css"
import React, {useState} from "react"

export default props => {
    const [valor, setValor] = useState('Valor Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }
    return(
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{display: "flex", flexDirection: "column"}}>
                <span>Componente Controlado</span>
                <input value={valor} onChange={quandoMudar} />

                <span>Componente Somente Leitura</span>
                <input value={valor} readOnly />

                <span>Componente Não Controlado</span>
                <input value={undefined} />
            </div>
        </div>
    )
}