function loginReducer(state = {loading: false, loggedIn: false, id: null, name: null, profileURL: null, profileWidth: null, profileHeight: null}, action) {
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
            name: action.name,
            profileURL: action.profileURL,
            profileWidth: action.profileWidth,
            profileHeight: action.profileHeight
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
