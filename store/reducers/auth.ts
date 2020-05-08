import {
	LOGGING_IN,
	SIGNING_UP,
	SIGNUP_SUCCESS,
	LOGIN_SUCCESS,
	SIGNUP_ERROR,
	LOGIN_ERROR,
} from "../actions/auth";

const initialState = {
	loading: false,
	error: null,
};

const authReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LOGGING_IN:
		case SIGNING_UP:
			return {
				...state,
				loading: true,
			};
		case SIGNUP_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
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
