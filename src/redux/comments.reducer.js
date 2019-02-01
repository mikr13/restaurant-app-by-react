import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './actionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case  ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length; // as we don't have server yet so this should serve as id
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}