import * as types from '../example/types'

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS: {
            const newState = { ...state }
            newState.isLoggedIn = true
            newState.token = action.token
            newState.user = action.user
            return newState
        }

        case types.LOGIN_FAILURE: {
            const newState = { ...initialState }
            return newState
        }


        default:{
            return state;
        }
    }
}