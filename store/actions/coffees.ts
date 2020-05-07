import { ICoffee } from "../../models/interfaces";
import { Dispatch } from "redux";
import { get, post, put } from "../../utils/http";
import { REACT_APP_API_URL } from "react-native-dotenv";

export const ADD_COFFEE = "ADD_COFFEE";
export const CLEAR_ADD_COFFEE = "CLEAR_ADD_COFFEE";
export const UPDATE_COFFEE_NOTES = "UPDATE_COFFEE_NOTES";
export const COFFEES_LOADED = "COFFEES_LOADED";
export const ERROR_LOADING_COFFEES = "ERROR_LOADING_COFFEES";
export const ERROR_SAVING_COFFEE = "ERROR_SAVING_COFFEE";
export const COFFEE_UPDATE_SUCCESS = "COFFEE_UPDATE_SUCCESS";
export const COFFEE_UPDATE_ERROR = "COFFEE_UPDATE_ERROR";
export const SELECT_COFFEE = "SELECT_COFFEE";
export const CLEAR_SELECTED_COFFEE = "CLEAR_SELECTED_COFFEE";

const url = REACT_APP_API_URL;

export const addNewCoffee = (coffee: ICoffee) => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await post(`${url}/coffees.json`, coffee);
			dispatch({ type: ADD_COFFEE, payload: coffee });
		} catch (err) {
			throw Error(err);
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
			dispatch({ type: ERROR_LOADING_COFFEES });
		}
	};
};

export const editSelectedCoffee = (coffee: ICoffee) => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await put(`${url}/coffees.json`, coffee);
			dispatch({
				type: COFFEE_UPDATE_SUCCESS,
				payload: coffee,
			});
		} catch (err) {
			dispatch({ type: COFFEE_UPDATE_ERROR });
		}
	};
};

export const selectCoffee = (coffee: ICoffee) => {
	return { type: SELECT_COFFEE, payload: coffee };
};

export const clearSelectedCoffee = () => {
	return { type: CLEAR_SELECTED_COFFEE };
};
