import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
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