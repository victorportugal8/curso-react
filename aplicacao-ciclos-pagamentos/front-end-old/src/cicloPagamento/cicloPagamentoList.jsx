import React, {Component} from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import {pegaLista, showUpdate, showDelete} from './cicloPagamentoActions'

class CicloPagamentoList extends Component{
    componentWillMount(){
        this.props.pegaLista()
    }
    renderRows(){
        const list = this.props.list || []
        return list.map(cp =>(
            <tr key={cp._id}>
                <td>{cp.nome}</td>
                <td>{cp.mes}</td>
                <td>{cp.ano}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(cicloPagamento)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(cicloPagamento)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
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
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state =>({list: state.cicloPagamento.list})
const mapDispatchToProps = dispatch => bindActionCreators({pegaLista, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoList)