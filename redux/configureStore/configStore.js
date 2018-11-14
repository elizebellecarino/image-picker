import { combineReducers, createStore } from "redux";
import sharePlaceReducer from '../reducer/sharePlaceReducer';


const ReducerCombination = combineReducers({
    sharePlace: sharePlaceReducer
})

export default configure = () => {
    return createStore(ReducerCombination)
}