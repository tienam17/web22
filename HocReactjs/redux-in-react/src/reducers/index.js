import hobblyReducer from "./hobby";
import { combineReducers } from "redux";


const rootReducer =combineReducers({
    hobby:hobblyReducer,
    
})

export default rootReducer;