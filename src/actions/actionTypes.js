//Login action types

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";


export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';

//This is the action which will dispatch when we will find the user using local storage jwt token

export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const LOG_OUT = "LOG_OUT";

export const CLEAR_AUTH_STATE = "CLEAR_AUTH_STATE";