import React, {Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { pegaSumario } from "./dashboardActions"
import ContentHeader from "../comum/template/contentHeader"
import Content from "../comum/template/content"
import ValueBox from "../comum/widget/valueBox"
import Row from "../comum/layout/row"

class Dashboard extends Component{
    componentWillMount(){
        this.props.pegaSumario()
    }
    render(){
        const {credito, debito} = this.props.sumario
        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
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

const mapStateToProps = state =>({sumario: state.dashboard.sumario})
const mapDispatchToProps = dispatch =>bindActionCreators({pegaSumario}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)