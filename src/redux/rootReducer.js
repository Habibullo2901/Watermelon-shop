import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";
import { cartReducer } from "./cartReducer";
import { cartPricer } from "./cartPricer";

const rootReducers = combineReducers({
    likeReducer: likeReducer,
    cartReducer: cartReducer,
    cartPricer: cartPricer
})

export { rootReducers }