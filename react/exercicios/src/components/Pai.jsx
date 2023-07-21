import React from "react"

import { childrenWithProps } from "../utility/util"

export default props =>
    <div>
        <h1>{props.sobrenome} {props.nome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* Colocando os componentes Filhos aqui */}
            {childrenWithProps(props)}
        </ul>
    </div>