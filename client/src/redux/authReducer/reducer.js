import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionTypes";


const initState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    errMsg: "",
    user: {}
};

export const reducer = ((state = initState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_SUCCESS:
            console.log(action.payload.data);
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                user: action.payload.data,
                errMsg: "",
            }
        case LOGIN_FAILURE:
            console.log(action.payload.response.data.message);
            return {
                ...state,
                isLoading: false,
                isError: true,
                errMsg: action?.payload?.response?.data.message
            }
        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true, isError: false,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errMsg: action?.payload?.response?.data.message
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
            }
        default:
            return state;
    }
});