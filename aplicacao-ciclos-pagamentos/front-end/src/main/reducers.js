import { combineReducers } from "redux"

const rootReducer = combineReducers({
    dashboard: () =>({sumario: {credito: 100, debito: 50}})
})

export default rootReducer