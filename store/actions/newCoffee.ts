import { ICoffee } from "../../models/interfaces";
import { Dispatch } from "redux";
import { post } from "../../utils/http";
import { REACT_APP_API_URL } from "react-native-dotenv";

const url = REACT_APP_API_URL;

export const UPDATE_NEW_COFFEE_LOCATION = "UPDATE_NEW_COFFEE_LOCATION";
export const UPDATE_NEW_COFFEE_BREW_METHOD = "UPDATE_NEW_COFFEE_BREW_METHOD";
export const CLEAR_NEW_COFFEE = "CLEAR_NEW_COFFEE";
export const ADD_NEW_COFFEE_SUCCESS = "ADD_NEW_COFFEE_SUCCESS";
export const ADD_NEW_COFFEE_ERROR = "ADD_NEW_COFFEE_ERROR";
export const UPDATE_NEW_COFFEE_BASIC = "UPDATE_NEW_COFFEE_BASIC";

export const updateNewCoffeeBasic = (key: string, value: string) => {
	return { type: UPDATE_NEW_COFFEE_BASIC, payload: { key, name } };
};

export const updateNewCoffeeLocation = ({ location, coordinates }: any) => {
	return {
		type: UPDATE_NEW_COFFEE_LOCATION,
		payload: { location, coordinates },
	};
};

export const updateNewCoffeeBrewMethod = (method: any) => {
	return { type: UPDATE_NEW_COFFEE_BREW_METHOD, payload: method };
};

export const clearNewCoffee = () => {
	return { type: CLEAR_NEW_COFFEE };
};

export const addNewCoffee = (coffee: ICoffee) => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await post(`${url}/coffees.json`, coffee);
			dispatch({ type: ADD_NEW_COFFEE_SUCCESS });
		} catch (err) {
			throw Error(err);
		}
	};
};
