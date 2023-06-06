import axios from "axios"

const URL_BASE = 'http://localhost:3003/api'

export function pegaLista(){
    const request = axios.get(`${URL_BASE}/ciclosPagamento`)
    return{
        type: 'CICLOS_PAGAMENTO_OBTIDO',
        payload: request
    }
}