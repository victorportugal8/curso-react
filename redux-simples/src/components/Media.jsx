import Card from './Card'
import React from 'react'

export default props => {
    return(
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{5}</strong>                
                </span>
            </div>
        </Card>
    )
}