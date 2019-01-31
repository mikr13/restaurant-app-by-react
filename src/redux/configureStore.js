import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes.reducer';
import { Comments } from './comments.reducer';
import { Leaders } from './leaders.reducer';
import { Promotions } from './promotions.reducer';

export const ConfigureStore = () => {
    const store = createStore(
        // Reducer, // reducer
        // initialState, // our initialState
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
        })
    );

    return store;
}