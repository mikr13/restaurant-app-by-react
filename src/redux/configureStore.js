import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Dishes } from './dishes.reducer';
import { Comments } from './comments.reducer';
import { Leaders } from './leaders.reducer';
import { Promotions } from './promotions.reducer';
import { InitialFeedback } from './forms.reducer';

export const ConfigureStore = () => {
    const store = createStore(
        // Reducer, // reducer
        // initialState, // our initialState
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}