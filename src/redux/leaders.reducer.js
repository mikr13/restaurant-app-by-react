import * as ActionTypes from './actionTypes';

export const Leaders = (state  = {
    isLoading: true,
    err: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADER:
            return { ...state, isLoading: false, err: null, leaders: action.payload };

        case ActionTypes.LEADER_LOADING:
            return { ...state, isLoading: true, err: null, leaders: [] }

        case ActionTypes.LEADER_FAILED:
            return { ...state, isLoading: false, err: action.payload };

        default:
          return state;
    }
};