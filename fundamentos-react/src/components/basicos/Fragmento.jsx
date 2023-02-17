import React from "react"

export default function Fragmento(props){
    return(
        /* <React.Fragment> aqui é PERMITIDO props
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment> */

        <> {/* aqui NÃO É PERMITIDO props */}
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    )
}