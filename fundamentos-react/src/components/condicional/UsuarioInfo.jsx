import React from "react"
import If, {Else} from "./If"

export default props =>{
    const usuario = props.usuario || {}
    return(
        <div>
            <If teste={usuario && usuario.nome}>
                Seja bem-vindo(a), <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem-vindo(a), <strong>Estranho(a)</strong>!
                </Else>
            </If>
        </div>
    )
}