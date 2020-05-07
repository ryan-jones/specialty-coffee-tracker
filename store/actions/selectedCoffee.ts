import { ICoffee } from "../../models/interfaces";
import { put, get } from "../../utils/http";
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
export const RESET_SELECTED_COFFEE = "RESET_SELECTED_COFFEE";

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

export const resetSelectedCoffee = () => {
	return { type: RESET_SELECTED_COFFEE };
};

export const setSelectedCoffee = (coffee: ICoffee) => {
	return async (dispatch: any) => {
		const response = await get(`${url}/coffeeDetails/${coffee.id}.json`);
		dispatch({
			type: SET_SELECTED_COFFEE,
			payload: { ...response, id: coffee.id },
		});
	};
};

export const editSelectedCoffee = (coffee: ICoffee) => {
	console.log("the coffee being edited", coffee);
	return async (dispatch: any) => {
		try {
			await put(`${url}/coffeeDetails/${coffee.id}.json`, coffee);
			console.log("success!");
			dispatch({
				type: COFFEE_UPDATE_SUCCESS,
			});
			dispatch(setSelectedCoffee(coffee));
		} catch (err) {
			dispatch({ type: COFFEE_UPDATE_ERROR });
		}
	};
};
