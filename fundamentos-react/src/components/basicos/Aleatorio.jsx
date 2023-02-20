import React from "react"

export default (props) =>{
    const {min, max} = props
    /* let min = Math.ceil(props.min)
    let max = Math.floor(props.max) */
    let numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <div>
            <h2>Número Aleatório</h2>
            <p><strong>Valor mínimo: </strong>{min}</p>
            <p><strong>Valor máximo: </strong>{max}</p>
            <p><strong>Valor escolhido: </strong>{numAleatorio}</p>
        </div>
    )
}