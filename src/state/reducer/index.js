import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import save from "./saveReducer";

const reducers = combineReducers({
    amount: amountReducer,
    save:save
})
export default reducers;