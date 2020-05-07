import { Dispatch } from "redux";
import { get } from "../../utils/http";
import { REACT_APP_API_URL } from "react-native-dotenv";

const url = REACT_APP_API_URL;

export const UPDATE_COFFEE_NOTES = "UPDATE_COFFEE_NOTES";
export const COFFEES_LOADED_SUCCESS = "COFFEES_LOADED_SUCCESS";
export const COFFEES_LOADED_ERROR = "COFFEES_LOADED_ERROR";

export const updateCoffeeNotes = (notes: string[]) => {
	return { type: UPDATE_COFFEE_NOTES, payload: notes };
};

export const fetchCoffees = () => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await get(`${url}/coffees.json`);
			dispatch({
				type: COFFEES_LOADED_SUCCESS,
				payload: response
					? Object.keys(response).map((key: string) => ({
							...response[key],
					  }))
					: [],
			});
		} catch (err) {
			dispatch({ type: COFFEES_LOADED_ERROR });
		}
	};
};
