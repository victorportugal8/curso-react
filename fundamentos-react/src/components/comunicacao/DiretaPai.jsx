import React from "react"
import DiretaFilho from "./DiretaFilho"

export default props =>{
    return(
        <div>
            <DiretaFilho nome="Ichigo Kurosaki" idade={20} forte={true} />
            <DiretaFilho nome="Kon" idade={5} forte={false} />
        </div>
    )
}