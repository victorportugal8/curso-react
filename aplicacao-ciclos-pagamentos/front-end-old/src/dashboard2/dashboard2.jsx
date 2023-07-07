import React, {Component} from "react"
import axios from "axios"


import ContentHeader from "../comum/template/contentHeader"
import Content from "../comum/template/content"
import ValueBox from "../comum/widget/valueBox"
import Row from "../comum/layout/row"

const URL_BASE = 'http://localhost:3003/api'

export default class Dashboard2 extends Component{
    constructor(props){
        super(props)
        this.state = {credito: 0, debito: 0}
    }

    componentWillMount(){
        axios.get(`${URL_BASE}/ciclosPagamento/sumario`)
            .then(resp => this.setState(resp.data))
    }

    render(){
        const {credito, debito} = this.state
        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 2.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credito}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debito}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credito - debito}`} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}