import { combineReducers } from "redux"
import {reducer as formReducer} from 'redux-form'

import DashboardReducer from "../dashboard/dashboardReducer"
import TabReducer from "../comum/tab/tabReducer"
import CicloPagamentoReducer from "../cicloPagamento/cicloPagamentoReducer"

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    cicloPagamento: CicloPagamentoReducer,
    form: formReducer
})

export default rootReducer