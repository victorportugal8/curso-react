import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action){
    switch(action.type){
        case 'numberAdd2':
            return{...state, number: state.number + 2}
        case 'login':
            return{...state, user: {name: action.payload}}
        case 'numberAddN':
            return{...state, number: action.payload}
        case 'numberMulti7':
            return{...state, number: state.number * 7}
        case 'numberDiv25':
            return{...state, number: state.number / 25}
        case 'numberParseInt':
            return{...state, number: parseInt(state.number)}
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />
            
            <SectionTitle title="Exercício #01" />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem Usuário</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Utahime Iori'})}>Logar</button>
                </div>
            </div>

            <SectionTitle title="Desafio" />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem Usuário</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'numberAddN', payload: state.number + 50})}>+50</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberMulti7'})}>*7</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberDiv25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberParseInt'})}>Int</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
        </div>
    )
}

export default UseReducer
