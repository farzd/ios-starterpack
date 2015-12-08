import { facebookLogin, facebookLogout } from '../utils/facebookAPI.js';

export function attempt() {
    return {
        type: 'LOADING'
    };
}

export function loggedin(id, name, profileURL, profileWidth, profileHeight) {
    return {
        type: 'LOGIN',
        id,
        name,
        profileURL,
        profileWidth,
        profileHeight,
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
            dispatch(loggedin(result.id, result.name, result.picture.data.url, result.picture.data.width, result.picture.data.height));
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
