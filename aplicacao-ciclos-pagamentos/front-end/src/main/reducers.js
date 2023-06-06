import { combineReducers } from "redux"

import DashboardReducer from "../dashboard/dashboardReducer"
import TabReducer from "../comum/tab/tabReducer"
import CicloPagamentoReducer from "../cicloPagamento/cicloPagamentoReducer"

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    cicloPagamento: CicloPagamentoReducer
})

export default rootReducer