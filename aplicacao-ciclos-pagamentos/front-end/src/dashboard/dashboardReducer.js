const INITIAL_STATE = {sumario: {credito: 0, debito: 0}}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'SUMARIO_PAGAMENTO_OBTIDO':
            return {...state, sumario: action.payload.data}
        default:
            return state
    }
}