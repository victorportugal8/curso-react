import React, {Component} from "react"
import { Field } from "redux-form"

import Grid from '../comum/layout/grid'
import Input from "../comum/form/input"

class ListaCredito extends Component{
    renderRows(){
        const list = this.props.list || []
        return list.map((item, index) =>(
            <tr key={index}>
                <td><Field name={`creditos[${index}].nome`} component={Input} placeholder="Informe o nome" readOnly={this.props.readOnly} /></td>
                <td><Field name={`creditos[${index}].valor`} component={Input} placeholder="Informe o valor" readOnly={this.props.readOnly} /></td>
                <td></td>
            </tr>

        ))
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default ListaCredito