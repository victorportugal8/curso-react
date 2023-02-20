import React from "react"
import FamiliaMembro from "./FamiliaMembro"

export default props =>{
    return(
        <div>
            <FamiliaMembro nome="Mito" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Kushina" {...props} />
            <FamiliaMembro nome="Naruto" sobrenome={props.sobrenome} />
        </div>
    )
}