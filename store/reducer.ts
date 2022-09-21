import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import counterSlice from './features/counterSlice';
import clickedCharcterSlice from "./features/clickedCharcterSlice"

const combinedReducer = combineReducers({
    counter: counterSlice,
    clickedCharcter: clickedCharcterSlice,    
});

const rootReducer: typeof combinedReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState;
    } else {
        return combinedReducer(state, action)
    }
}
export default rootReducer;