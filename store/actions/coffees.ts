import { Dispatch } from "redux";
import { get } from "../../utils/http";
import { REACT_APP_API_URL } from "react-native-dotenv";

const url = REACT_APP_API_URL;

export const COFFEES_LOADED_SUCCESS = "COFFEES_LOADED_SUCCESS";
export const COFFEES_LOADED_ERROR = "COFFEES_LOADED_ERROR";
export const COFFEES_LOADING = "COFFEES_LOADING";

export const fetchCoffees = () => {
	return async (dispatch: Dispatch, getState: any) => {
		try {
			dispatch({ type: COFFEES_LOADING });
			const { userId, token } = getState().auth;
			const response = await get(`${url}/coffees/${userId}.json?auth=${token}`);
			const payload = response
				? Object.keys(response).map((key: string) => ({
						...response[key],
						id: key,
				  }))
				: [];
			dispatch({
				type: COFFEES_LOADED_SUCCESS,
				payload,
			});
		} catch (err) {
			dispatch({ type: COFFEES_LOADED_ERROR });
		}
	};
};
