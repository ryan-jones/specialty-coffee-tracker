import { post } from "../../utils/http";
import { REACT_APP_FIREBASE_KEY } from "react-native-dotenv";
import { Dispatch } from "redux";
import { setProfileData } from "./profile";
import { AsyncStorage } from "react-native";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGGING_IN = "LOGGING_IN";
export const SIGNING_UP = "SIGNING_UP";

const url = "https://identitytoolkit.googleapis.com/v1/accounts";

interface IAuth {
	email: string;
	password: string;
	name: string;
}

export const loggingIn = () => {
	return { type: LOGGING_IN };
};

export const signup = ({ email, password, name }: IAuth) => {
	return async (dispatch: any) => {
		try {
			dispatch({ type: SIGNING_UP });
			const response = await post(
				`${url}:signUp?key=${REACT_APP_FIREBASE_KEY}`,
				{
					email,
					password,
					returnSecureToken: true,
				}
			);
			const { localId, idToken, refreshToken } = response;
			dispatch(authenticate({ refreshToken, userId: localId, token: idToken }));
			dispatch(
				setProfileData({
					data: {
						userId: response.localId,
						name,
						preferences: { colorScheme: "light" },
					},
					token: response.idToken,
				})
			);
			const expirationDate = new Date(
				new Date().getTime() + Number(response.expiresIn) * 1000
			).toISOString();
			saveData(
				response.idToken,
				response.localId,
				response.refreshToken,
				expirationDate
			);
		} catch (err) {
			console.log("err in signup", err);
			dispatch({ type: SIGNUP_ERROR, payload: err });
		}
	};
};

export const login = ({ email, password }: IAuth) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(loggingIn());
			const response = await post(
				`${url}:signInWithPassword?key=${REACT_APP_FIREBASE_KEY}
      `,
				{
					email,
					password,
					returnSecureToken: true,
				}
			);
			const { localId, idToken, refreshToken } = response;
			dispatch(authenticate({ refreshToken, userId: localId, token: idToken }));

			const expirationDate = new Date(
				new Date().getTime() + Number(response.expiresIn) * 1000
			).toISOString();
			saveData(
				response.idToken,
				response.localId,
				response.refreshToken,
				expirationDate
			);
		} catch (err) {
			dispatch({ type: LOGIN_ERROR, payload: err });
		}
	};
};

export const authenticate = (data: any) => {
	const { userId, token, refreshToken } = data;
	return {
		type: LOGIN_SUCCESS,
		payload: {
			userId,
			token,
			refreshToken,
		},
	};
};

export const saveData = (
	token: string,
	userId: string,
	refreshToken: string,
	expirationDate: string
) => {
	AsyncStorage.setItem(
		"userData",
		JSON.stringify({ token, userId, refreshToken, expirationDate })
	);
};
