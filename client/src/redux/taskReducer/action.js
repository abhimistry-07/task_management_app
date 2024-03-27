import axios from "axios";
import { ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS } from "../actionTypes";

let url = "http://localhost:8080";

export const addNewTask = (newTask) => async (dispatch) => {

    dispatch({ type: ADD_TASK_REQUEST });

    const data = JSON.parse(localStorage.getItem('user'));
    const token = data.token;

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        axios.post(`${url}/task/addTask`, newTask, config)
            .then((response) => {
                dispatch({ type: ADD_TASK_SUCCESS, payload: response.data.newTask });
            })
            .catch((error) => {
                console.log(error, 'action');
                dispatch({ type: ADD_TASK_FAILURE, payload: error.message });
            })
    } catch (error) {
        console.log(error, 'action');
        dispatch({ type: ADD_TASK_FAILURE, payload: error.message });
    }
};
