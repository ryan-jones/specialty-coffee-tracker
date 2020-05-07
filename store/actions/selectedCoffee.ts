import { ICoffee } from "../../models/interfaces";
import { Dispatch } from "redux";
import { put } from "../../utils/http";
import { REACT_APP_API_URL } from "react-native-dotenv";

const url = REACT_APP_API_URL;

export const UPDATE_SELECTED_COFFEE_LOCATION =
	"UPDATE_SELECTED_COFFEE_LOCATION";
export const UPDATE_SELECTED_COFFEE_BREW_METHOD =
	"UPDATE_SELECTED_COFFEE_BREW_METHOD";
export const CLEAR_SELECTED_COFFEE = "CLEAR_SELECTED_COFFEE";
export const SET_SELECTED_COFFEE = "SET_SELECTED_COFFEE";
export const UPDATE_SELECTED_COFFEE_BASIC = "UPDATE_SELECTED_COFFEE_BASIC";
export const COFFEE_UPDATE_SUCCESS = "COFFEE_UPDATE_SUCCESS";
export const COFFEE_UPDATE_ERROR = "COFFEE_UPDATE_ERROR";

export const updateSelectedCoffeeBasic = (key: string, value: string) => {
	return { type: UPDATE_SELECTED_COFFEE_BASIC, payload: { key, value } };
};

export const updateSelectedCoffeeLocation = ({
	location,
	coordinates,
}: any) => {
	return {
		type: UPDATE_SELECTED_COFFEE_LOCATION,
		payload: { location, coordinates },
	};
};

export const updateSelectedCoffeeBrewMethod = (method: any) => {
	return { type: UPDATE_SELECTED_COFFEE_BREW_METHOD, payload: method };
};

export const clearSelectedCoffee = () => {
	return { type: CLEAR_SELECTED_COFFEE };
};

export const setSelectedCoffee = (coffee: ICoffee) => {
	return { type: SET_SELECTED_COFFEE, payload: coffee };
};

export const editSelectedCoffee = (coffee: ICoffee) => {
	return async (dispatch: Dispatch) => {
		try {
			await put(`${url}/coffees/${coffee.id}.json`, coffee);
			dispatch({
				type: COFFEE_UPDATE_SUCCESS,
			});
		} catch (err) {
			dispatch({ type: COFFEE_UPDATE_ERROR });
		}
	};
};
