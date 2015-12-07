export function attempt() {
    return {
        type: 'LOADING'
    };
}

export function loggedin(id) {
    return {
        type: 'LOGIN',
        id
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

        setTimeout(function timeout() {
            dispatch(loggedin(1234));
        }, 1000);
    };
}

export function logout() {
    return dispatch => {
        dispatch(attempt());

        setTimeout(function timeout() {
            dispatch(loggedout());
        }, 1000);
    };
}
