import axios from "axios"
import { toastr } from "react-redux-toastr"
import {reset as resetForm, initialize} from 'redux-form'

import {showTabs, selectTab} from '../comum/tab/tabActions'

const URL_BASE = 'http://localhost:3003/api'
const VALORES_INICIAIS = {}

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
                dispatch(init())
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

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        pegaLista(),
        initialize('cicloPagamentoForm', VALORES_INICIAIS)
    ]
}