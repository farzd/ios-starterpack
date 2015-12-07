import { facebookLogin, facebookLogout } from '../utils/facebookAPI.js';

export function attempt() {
    return {
        type: 'LOADING'
    };
}

export function loggedin(id, name) {
    return {
        type: 'LOGIN',
        id,
        name
    };
}

export function loggedout() {
    return {
        type: 'LOGOUT'
    };
}

export function login() {
    return dispatch => {
        dispatch(attempt());
        facebookLogin().then((result) => {
            dispatch(loggedin(result.id, result.name));
        }).catch(() => {
            // log error to user
            dispatch(loggedout());
        });
    };
}

export function logout() {
    return dispatch => {
        dispatch(attempt());
        facebookLogout().then(() => {
            dispatch(loggedout());
        });
    };
}
