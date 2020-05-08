import { post } from "../../utils/http";
import { REACT_APP_FIREBASE_KEY } from "react-native-dotenv";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGGING_IN = "LOGGING_IN";
export const SIGNING_UP = "SIGNING_UP";

export const signup = (email: string, password: string) => {
	return async (dispatch: any) => {
		try {
			dispatch({ type: SIGNING_UP });
			const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${REACT_APP_FIREBASE_KEY}`;
			const response = await post(url, {
				email,
				password,
				returnSecureToken: true,
			});
			dispatch({ type: SIGNUP_SUCCESS });
		} catch (err) {
			dispatch({ type: SIGNUP_ERROR, payload: err });
		}
	};
};

export const login = (email: string, password: string) => {
	return async (dispatch: any) => {
		try {
			dispatch({ type: LOGGING_IN });
			const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${REACT_APP_FIREBASE_KEY}
      `;
			const response = await post(url, {
				email,
				password,
				returnSecureToken: true,
			});
			dispatch({ type: LOGIN_SUCCESS });
		} catch (err) {
			dispatch({ type: LOGIN_ERROR, payload: err });
		}
	};
};
