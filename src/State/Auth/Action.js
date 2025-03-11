import axios from "axios";
import { 
  REGISTER_FAILURE, 
  REGISTER_REQUEST, 
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT 
} from "./ActionType";

// Define API URL
const API_BASE_URL = "http://localhost:5454";

// Register Actions
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }

    console.log("Registered User:", user);
    dispatch(registerSuccess(user));
  } catch (error) {
    const errorMessage = 
      error.response?.data?.message || 
      error.response?.statusText || 
      error.message || 
      "An unknown error occurred";

    dispatch(registerFailure(errorMessage));
  }
};

// Login Actions
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }

    console.log("Logged in User:", user);
    dispatch(loginSuccess(user));
  } catch (error) {
    const errorMessage = 
      error.response?.data?.message || 
      error.response?.statusText || 
      error.message || 
      "An unknown error occurred";

    dispatch(loginFailure(errorMessage));
  }
};

// Get User Actions
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const token = localStorage.getItem("jwt");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    console.log("Fetched User Profile:", response.data);
    dispatch(getUserSuccess(response.data));
  } catch (error) {
    const errorMessage = 
      error.response?.data?.message || 
      error.response?.statusText || 
      error.message || 
      "An unknown error occurred";

    dispatch(getUserFailure(errorMessage));
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt"); // Remove token on logout
  dispatch({ type: LOGOUT });
};
