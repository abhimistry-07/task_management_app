import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";


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
        default:
            return state;
    }
});