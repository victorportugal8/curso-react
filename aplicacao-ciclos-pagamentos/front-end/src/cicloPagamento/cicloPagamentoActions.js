import axios from "axios"
import { toastr } from "react-redux-toastr"

const URL_BASE = 'http://localhost:3003/api'

export function pegaLista(){
    const request = axios.get(`${URL_BASE}/ciclosPagamento`)
    return{
        type: 'CICLOS_PAGAMENTO_OBTIDO',
        payload: request
    }
}

export function create(values){
    axios.post(`${URL_BASE}/ciclosPagamento`, values)
        .then(resp =>{
            toastr.success('Sucesso', 'Operação realizada com sucesso!')
        })
        .catch(e =>{
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    return{
        type: 'TEMP'
    }
}