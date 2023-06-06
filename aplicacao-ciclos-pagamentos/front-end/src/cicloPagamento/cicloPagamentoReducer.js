const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'CICLOS_PAGAMENTO_OBTIDO':
            return{...state, list: action.payload.data}
    }
}