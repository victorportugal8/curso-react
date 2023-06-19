import React, {Component} from "react"
import { Field } from "redux-form"

import Grid from '../comum/layout/grid'

class ListaCredito extends Component{
    renderRows(){
        return(
            <tr>
                <td><Field name='creditos[0].nome' component='input' /></td>
                <td><Field name='creditos[0].valor' component='input' /></td>
                <td></td>
            </tr>
        )
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