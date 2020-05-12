import { ICoffee, INote, IMethod } from "../../models/interfaces";
import { put, get, patch, deleteValue } from "../../utils/http";
import { REACT_APP_API_URL } from "react-native-dotenv";
import { Dispatch } from "redux";

const url = REACT_APP_API_URL;

export const UPDATE_SELECTED_COFFEE_LOCATION =
	"UPDATE_SELECTED_COFFEE_LOCATION";
export const UPDATE_SELECTED_COFFEE_BREW_METHOD =
	"UPDATE_SELECTED_COFFEE_BREW_METHOD";
export const CLEAR_SELECTED_COFFEE = "CLEAR_SELECTED_COFFEE";
export const SET_SELECTED_COFFEE = "SET_SELECTED_COFFEE";
export const UPDATE_SELECTED_COFFEE_BASIC = "UPDATE_SELECTED_COFFEE_BASIC";
export const UPDATE_SELECTED_COFFEE_NOTES = "UPDATE_SELECTED_COFFEE_NOTES";
export const COFFEE_UPDATE_SUCCESS = "COFFEE_UPDATE_SUCCESS";
export const COFFEE_UPDATE_ERROR = "COFFEE_UPDATE_ERROR";
export const RESET_SELECTED_COFFEE = "RESET_SELECTED_COFFEE";
export const COFFEE_DELETE_SUCCESS = "COFFEE_DELETE_SUCCESS";
export const COFFEE_DELETE_ERROR = "COFFEE_DELETE_ERROR";

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

export const updateSelectedCoffeeNotes = (notes: INote[]) => {
	return { type: UPDATE_SELECTED_COFFEE_NOTES, payload: notes };
};

export const updateSelectedCoffeeBrewMethod = (method: IMethod) => {
	return { type: UPDATE_SELECTED_COFFEE_BREW_METHOD, payload: method };
};

export const clearSelectedCoffee = () => {
	return { type: CLEAR_SELECTED_COFFEE };
};

export const resetSelectedCoffee = () => {
	return { type: RESET_SELECTED_COFFEE };
};

export const setSelectedCoffee = (coffee: ICoffee) => {
	return async (dispatch: Dispatch, getState: any) => {
		const { token, userId } = getState().auth;
		const methods = await get(
			`${url}/brewMethods/${userId}/${coffee.id}.json?auth=${token}`
		);
		dispatch({
			type: SET_SELECTED_COFFEE,
			payload: { ...coffee, methods, id: coffee.id },
		});
	};
};

export const editSelectedCoffee = () => {
	return async (dispatch: Dispatch, getState: any) => {
		try {
			const { token, userId } = getState().auth;
			const coffee: ICoffee = getState().selectedCoffee.edited;

			await patch(`${url}/coffees/${userId}/${coffee.id}.json?auth=${token}`, {
				name: coffee.name,
				description: coffee.description,
				coordinates: coffee.coordinates,
				process: coffee.process,
				roaster: coffee.roaster,
				location: coffee.location,
				notes: coffee.notes,
				rating: coffee.rating,
			});
			await put(
				`${url}/brewMethods/${userId}/${coffee.id}.json?auth=${token}`,
				coffee.methods
			);
			dispatch({
				type: COFFEE_UPDATE_SUCCESS,
			});
			setSelectedCoffee(coffee);
		} catch (err) {
			dispatch({ type: COFFEE_UPDATE_ERROR });
		}
	};
};

export const deleteSelectedCoffee = () => {
	return async (dispatch: Dispatch, getState: any) => {
		try {
			const { token, userId } = getState().auth;
			const coffee: ICoffee = getState().selectedCoffee.edited;

			await deleteValue(
				`${url}/coffees/${userId}/${coffee.id}.json?auth=${token}`
			);
			await deleteValue(
				`${url}/brewMethods/${userId}/${coffee.id}.json?auth=${token}`
			);
			dispatch({
				type: COFFEE_DELETE_SUCCESS,
			});
		} catch (err) {
			dispatch({ type: COFFEE_DELETE_ERROR });
		}
	};
};
