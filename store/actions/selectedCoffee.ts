import { ICoffee } from "../../models/interfaces";

export const UPDATE_SELECTED_COFFEE_NAME = "UPDATE_SELECTED_COFFEE_NAME";
export const UPDATE_SELECTED_COFFEE_REGION = "UPDATE_SELECTED_COFFEE_REGION";
export const UPDATE_SELECTED_COFFEE_COUNTRY = "UPDATE_SELECTED_COFFEE_COUNTRY";
export const UPDATE_SELECTED_COFFEE_LOCATION =
	"UPDATE_SELECTED_COFFEE_LOCATION";
export const UPDATE_SELECTED_COFFEE_DESCRIPTION =
	"UPDATE_SELECTED_COFFEE_DESCRIPTION";
export const UPDATE_SELECTED_COFFEE_PROCESS = "UPDATE_SELECTED_COFFEE_PROCESS";
export const UPDATE_SELECTED_COFFEE_BREW_METHOD =
	"UPDATE_SELECTED_COFFEE_BREW_METHOD";
export const CLEAR_SELECTED_COFFEE = "CLEAR_SELECTED_COFFEE";
export const SET_SELECTED_COFFEE = "SET_SELECTED_COFFEE";
export const UPDATE_SELECTED_COFFEE_BASIC = "UPDATE_SELECTED_COFFEE_BASIC";

export const updateSelectedCoffeeBasic = (key: string, value: string) => {
	return { type: UPDATE_SELECTED_COFFEE_BASIC, payload: { key, value } };
};

export const updateSelectedCoffeeName = (name: string) => {
	return { type: UPDATE_SELECTED_COFFEE_NAME, payload: name };
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

export const updateSelectedCoffeeDescription = (description: string) => {
	return { type: UPDATE_SELECTED_COFFEE_DESCRIPTION, payload: description };
};

export const updateSelectedCoffeeProcess = (process: string) => {
	return { type: UPDATE_SELECTED_COFFEE_PROCESS, payload: process };
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
