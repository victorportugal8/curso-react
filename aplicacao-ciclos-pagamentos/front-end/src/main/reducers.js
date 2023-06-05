import { combineReducers } from "redux"

import DashboardReducer from "../dashboard/dashboardReducer"
import TabReducer from "../comum/tab/tabReducer"

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default rootReducer