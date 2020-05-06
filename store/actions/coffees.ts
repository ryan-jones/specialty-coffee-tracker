import { ICoffee } from "../../models/interfaces";
import { Dispatch } from "redux";
import { get, post } from "../../utils/http";
import { REACT_APP_API_URL } from "react-native-dotenv";

export const ADD_COFFEE = "ADD_COFFEE";
export const CLEAR_ADD_COFFEE = "CLEAR_ADD_COFFEE";
export const UPDATE_COFFEE_NOTES = "UPDATE_COFFEE_NOTES";
export const COFFEES_LOADED = "COFFEES_LOADED";

const url = REACT_APP_API_URL;

export const addNewCoffee = (coffee: ICoffee) => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await post(`${url}/coffees.json`, coffee);
			dispatch({ type: ADD_COFFEE, payload: coffee });
		} catch (err) {
			console.log("THERE WAS AN ERROR WHEN POSTING", err);
		}
	};
};

export const updateCoffeeNotes = (notes: string[]) => {
	return { type: UPDATE_COFFEE_NOTES, payload: notes };
};

export const fetchCoffees = () => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await get(`${url}/coffees.json`);
			dispatch({
				type: COFFEES_LOADED,
				payload: response
					? Object.keys(response).map((key: string) => ({
							id: key,
							...response[key],
					  }))
					: [],
			});
		} catch (err) {
			console.log("failed to load coffees", err);
		}
	};
};
