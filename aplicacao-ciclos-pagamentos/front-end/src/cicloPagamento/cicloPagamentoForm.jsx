import React, {Component} from "react"
import { reduxForm, Field } from "redux-form"

import labelAndInput from "../comum/form/labelAndInput"

class CicloPagamentoForm extends Component{
    render(){
        const {handleSubmit} = this.props
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='nome' component={labelAndInput} label='Nome' cols='12 4' placeholder="Informe o nome" />
                    <Field name='mes' component={labelAndInput} type="number" label='Mês' cols='12 4' placeholder="Informe o mês" />
                    <Field name='ano' component={labelAndInput} type="number" label='Ano' cols='12 4' placeholder="Informe o ano" />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'cicloPagamentoForm', destroyOnUnmount: false})(CicloPagamentoForm)