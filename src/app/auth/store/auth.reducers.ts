import * as authState from './auth.state';
import * as authActions from './auth.actions';


export function authReducer(state = authState.initialState, action: authActions.authActions) {
    switch (action.type) {
        case (authActions.SIGNUP):
        case (authActions.SIGNIN):
            return {
                ...state,
                authenticated: true
            }
            break;
            
        case authActions.LOGOUT:
            return {
                ...state, 
                authenticated: false,
                token: null
            }
            break;
        case authActions.SET_TOKEN:
            return {
                ...state,
                token: action.payload,
                authenticated: true
            }
            break;
        default:
            break;
    }
}