import axios from "axios"

const URL_BASE = 'http://localhost:3003/api'

export function pegaSumario(){
    const request = axios.get(`${URL_BASE}/ciclosPagamento/sumario`)
    return{
        type: 'SUMARIO_PAGAMENTO_OBTIDO',
        payload: request
    }
}