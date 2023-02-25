import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButtons from './UseCallbackBtns'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback(function(delta){
        setCount(current => current + delta)
    }, [setCount]) //desde que setCount não seja modificado(o que não acontecerá normalmente), o retorno será o mesmo, porque a fn só é criado uma única vez

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!" />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
