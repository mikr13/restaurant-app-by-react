import fetch from 'cross-fetch';

import * as ActionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

// function is returning another inner function (use of redux thunk)
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response; // make response available to the next .then
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => { // this is done if the server doesn't responds at all, worst case scenario
                var err = new Error(error.message);
                throw err;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (err) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: err
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
            return response;
            } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => {
                var err = new Error(error.message);
                throw err;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
                throw error;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const commentsFailed = (err) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: err
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
                var err = new Error(error.message);
                throw err;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (err) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: err
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});


export const fetchLeader = () => (dispatch) => {
    dispatch(leaderLoading());

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
                var err = new Error(error.message);
                throw err;
        })
        .then(response => response.json())
        .then(leader => dispatch(addLeader(leader)))
        .catch(error => dispatch(leaderFailed(error.message)));
}

export const leaderLoading = () => ({
    type: ActionTypes.LEADER_LOADING
});

export const leaderFailed = (err) => ({
    type: ActionTypes.LEADER_FAILED,
    payload: err
});

export const addLeader = (leader) => ({
    type: ActionTypes.ADD_LEADER,
    payload: leader
});


export const postFeedback = (firstname, lastname, telnum, email, agree, contacttype, message) => () => {

    const newFeedback = { // using es6 autoassignment here, we don't need to specify a:a now, we can simply write a in place
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contacttype,
        message
    };
    
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
                throw error;
        })
        .then(response => response.json())
        .then(response => { alert(JSON.stringify(response)); })
        .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};