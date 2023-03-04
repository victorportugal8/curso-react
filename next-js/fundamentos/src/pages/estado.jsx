import Layout from "@/components/Layout"
import { useState } from "react"

export default function Estado(){
    const [numero, setNumero] = useState(0)

    function inc(){
        setNumero(numero + 1)
    }

    function dec(){
        setNumero(numero - 1)
    }

    return(
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={inc}>Incrementar</button>
            <button onClick={dec}>Decrementar</button>
        </Layout>
    )
}