import React from "react"

import Grid from "../comum/layout/grid"
import Row from '../comum/layout/row'
import ValueBox from '../comum/widget/valueBox'

export default ({credito, debito}) =>(
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credito}`} text='Total de Créditos' />
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debito}`} text='Total de Débitos' />
                <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credito - debito}`} text='Valor Consolidado' />
            </Row>
        </fieldset>
    </Grid>
)