import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionTypes";
import axios from "axios";

let url = "http://localhost:8080"

export const login = (userData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await axios.post(`${url}/user/login`, userData, config);
        dispatch({ type: LOGIN_SUCCESS, payload: response });
        // console.log(response.data,'response');
        localStorage.setItem('user', JSON.stringify(response.data));
        alert("Login Successfull!");
    } catch (error) {
        // if (error.response && error.response.status === 401) {
        //     const errorMessage = error.response.data.msg;
        //     console.error('Unauthorized:', errorMessage);
        // } else {
        //     console.error('An error occurred:', error.message);
        // }
        dispatch({ type: LOGIN_FAILURE, payload: error });

        alert(error.response?.data.message);
    }
};

export const signup = (userData) => async (dispatch) => {

    dispatch({ type: SIGNUP_REQUEST });

    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await axios.post(`${url}/user/register`, userData, config);
        // console.log(response);
        dispatch({ type: SIGNUP_SUCCESS, payload: response })

        alert("Successfully created account.");

        return response;
    } catch (error) {
        dispatch({ type: SIGNUP_FAILURE, payload: error });
        alert(error.response?.data.message);
        throw error;
    }
};

export const updateProfile = (userData, id) => async (dispatch) => {

    // console.log(id, 'action file');
    localStorage.setItem('user', JSON.stringify(userData));

    const data = JSON.parse(localStorage.getItem('user'));
    const token = data.token;

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    try {
        const task = await axios.put(`${url}/user/update/${id}`, userData, config);
        // console.log(task.data);
    } catch (error) {
        console.log(error);
    }
}

export const logOut = () => (dispatch) => {
    try {
        dispatch({ type: LOGOUT_SUCCESS })
    } catch (error) {
        console.log(error);
    }
}