import { facebookLogin, facebookLogout } from '../utils/facebookAPI.js';

export function attempt() {
    return {
        type: 'LOADING'
    };
}

export function errors(err) {
    return {
        type: 'ERROR',
        err
    };
}

export function loggedin() {
    return {
        type: 'LOGIN',
    };
}

export function loggedout() {
    return {
        type: 'LOGOUT'
    };
}

export function addUser(id, name, profileURL, profileWidth, profileHeight) {
    return {
        type: 'ADD_USER',
        id,
        name,
        profileURL,
        profileWidth,
        profileHeight
    };
}

export function login() {
    return dispatch => {
        dispatch(attempt());
        facebookLogin().then((result) => {
            dispatch(loggedin());
            dispatch(addUser(result.id, result.name, result.picture.data.url, result.picture.data.width, result.picture.data.height));
        }).catch((err) => {
            dispatch(errors(err));
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
