function loginReducer(state = {loggingIn: false, id: null}, action) {
    switch (action.type) {
    case 'ATTEMPTING_LOGIN':
        return Object.assign({}, state, {
            loggingIn: true,
        });

    case 'LOGIN':
        return Object.assign({}, state, {
            loggingIn: false,
            id: action.id
        });

    default:
        return state;
    }
}

export default function counter(state = {}, action) {
    return {
        login: loginReducer(state.login, action)
    };
}
