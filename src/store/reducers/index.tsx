import { combineReducers } from "redux"
import authReducer from "./authReducers"
import planReducers from "./planReducers"

const rootReducer = combineReducers({
  auth: authReducer,
  dailyPlan: planReducers,
})

export default rootReducer
