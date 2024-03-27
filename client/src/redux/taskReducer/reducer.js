import { ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS } from "../actionTypes";


const initState = {
    isLoading: false,
    isError: false,
    errMsg: "",
    allTasks: [],
    task: {}
}

export const reducer = ((state = initState, action) => {
    switch (action.type) {
        case ADD_TASK_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                errMsg: "",
            }
        case ADD_TASK_SUCCESS:
            // console.log(action.payload, 'reducer');
            return {
                ...state,
                isLoading: false,
                isError: false,
                errMsg: "",
                allTasks: [...state.allTasks, action.payload]
            }
        case ADD_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errMsg: action.payload
            }
        default:
            return state;
    }
});