export function attemptingLogin() {
    return {
        type: 'ATTEMPTING_LOGIN'
    };
}

export function loggedin(id) {
    return {
        type: 'LOGIN',
        id
    };
}

export function logout() {
    return {
        type: 'LOGOUT'
    };
}

export function login() {
    return dispatch => {
        dispatch(attemptingLogin());

        setTimeout(function timeout() {
            dispatch(loggedin(1234));
        }, 1000);
    };
}
