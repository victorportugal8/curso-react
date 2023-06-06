import React, {Component} from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import {pegaLista} from './cicloPagamentoActions'

class CicloPagamentoList extends Component{
    componentWillMount(){
        this.props.pegaLista()
    }
    render(){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state =>({list: state.cicloPagamento.list})
const mapDispatchToProps = dispatch => bindActionCreators({pegaLista, dispatch})
export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoList)