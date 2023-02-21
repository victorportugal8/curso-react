import React from "react"

export default props =>{
    const ehPar = props.numero % 2 === 0
    return(
        <div>
            <h2>Par ou Ímpar</h2>
            {ehPar ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}