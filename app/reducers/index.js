function loginReducer(state = {loading: false, loggedIn: false, id: null}, action) {
    switch (action.type) {
    case 'LOADING':
        return Object.assign({}, state, {
            loading: true,
        });

    case 'LOGIN':
        return Object.assign({}, state, {
            loading: false,
            loggedIn: true,
            id: action.id,
        });

    case 'LOGOUT':
        return Object.assign({}, state, {
            loading: false,
            loggedIn: false
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
