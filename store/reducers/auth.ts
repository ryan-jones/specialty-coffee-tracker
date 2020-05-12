import {
	LOGGING_IN,
	SIGNING_UP,
	LOGIN_SUCCESS,
	SIGNUP_ERROR,
	LOGIN_ERROR,
} from "../actions/auth";
import { IAuth } from "../../models/interfaces";

const initialState: IAuth = {
	loading: false,
	error: null,
	token: null,
	userId: null,
	refreshToken: null,
};

const authReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LOGGING_IN:
		case SIGNING_UP:
			return {
				...state,
				loading: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false,
			};
		case SIGNUP_ERROR:
		case LOGIN_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;
