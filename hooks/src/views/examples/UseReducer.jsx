import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import {initialState, reducer} from '../../store'
import {numberAdd2, numberMulti7, numberDiv25, numberParseInt, login} from '../../store/actions'

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
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => login(dispatch, 'Maki Zenin')}>Logar</button>
                </div>
            </div>

            <SectionTitle title="Desafio" />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem Usuário</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'numberAddN', payload: state.number + 50})}>+50</button>
                    <button className="btn" onClick={() => numberMulti7(dispatch)}>*7</button>
                    <button className="btn" onClick={() => numberDiv25(dispatch)}>/25</button>
                    <button className="btn" onClick={() => numberParseInt(dispatch)}>Int</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
