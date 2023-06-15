import axios from "axios"
import { toastr } from "react-redux-toastr"
import {reset as resetForm, initialize} from 'redux-form'

import {showTabs, selectTab} from '../comum/tab/tabActions'

const URL_BASE = 'http://localhost:3003/api'

export function pegaLista(){
    const request = axios.get(`${URL_BASE}/ciclosPagamento`)
    return{
        type: 'CICLOS_PAGAMENTO_OBTIDO',
        payload: request
    }
}

export function create(values){
    return dispatch =>{
        axios.post(`${URL_BASE}/ciclosPagamento`, values)
            .then(resp =>{
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch([
                    resetForm('cicloPagamentoForm'),
                    pegaLista(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e =>{
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(cicloPagamento){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('cicloPagamentoForm', cicloPagamento)
    ]
}