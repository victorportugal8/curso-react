import React from "react"
import DiretaFilho from "./DiretaFilho"

export default props =>{
    return(
        <div>
            <DiretaFilho nome="Shunsui Kyoraku" idade={720} forte={true} />
            <DiretaFilho nome="Kon" idade={5} forte={false} />
        </div>
    )
}