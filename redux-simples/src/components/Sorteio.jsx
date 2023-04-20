import Card from './Card'
import React from 'react'

export default props => {
    return(
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{4}</strong>                
                </span>
            </div>
        </Card>
    )
}