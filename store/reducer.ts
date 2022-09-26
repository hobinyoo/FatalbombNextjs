import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import counterSlice from './features/counterSlice';
import clickedSwiperSlice from "./features/clickedSwiperSlice"

const combinedReducer = combineReducers({
    counter: counterSlice,
    clickedSwiper: clickedSwiperSlice,    
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