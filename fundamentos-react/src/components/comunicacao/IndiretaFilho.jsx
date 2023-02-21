import React from "react"

export default props =>{
    const cb = props.quandoClicar
    return(
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('Isshin Kurosaki', 432, true)}>
                Fornecer Informações
            </button>
        </div>
    )
}