import React, {Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { reduxForm, Field, formValueSelector } from "redux-form"

import labelAndInput from "../comum/form/labelAndInput"
import { init } from "./cicloPagamentoActions"
import ItemLista from "./itemLista"
import Sumario from './sumario'

class CicloPagamentoForm extends Component{
    render(){
        const {handleSubmit, readOnly, creditos, debitos} = this.props
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='nome' component={labelAndInput} label='Nome' cols='12 4' placeholder="Informe o nome" readOnly={readOnly} />
                    <Field name='mes' component={labelAndInput} type="number" label='Mês' cols='12 4' placeholder="Informe o mês" readOnly={readOnly} />
                    <Field name='ano' component={labelAndInput} type="number" label='Ano' cols='12 4' placeholder="Informe o ano" readOnly={readOnly} />
                    <Sumario credito={1000} debito={100} />
                    <ItemLista cols='12 6' list={creditos} readOnly={readOnly} field='creditos' legend='Créditos' />
                    <ItemLista cols='12 6' list={debitos} readOnly={readOnly} field='debitos' legend='Débitos' showStatus={true} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

CicloPagamentoForm = reduxForm({form: 'cicloPagamentoForm', destroyOnUnmount: false})(CicloPagamentoForm)

const selector = formValueSelector('cicloPagamentoForm')
const mapStateToProps = state =>({creditos: selector(state, 'creditos'), debitos: selector(state, 'debitos')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoForm)