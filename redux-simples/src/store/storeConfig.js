import {legacy_createStore as createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numeros: function(state, action){
        console.log(state, ' ', action)
        return{
            min: 1,
            max: 10
        }
    },
    nomes: function(state, action){
        console.log(state, ' ', action)
        return[
            'Gojo Satoru',
            'Yami Sukehiro',
            'Maki Zenin'
        ]
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig