import { ICoffee, INote, IMethod } from "../../models/interfaces";
import { Dispatch, ActionCreator } from "redux";
import { post } from "../../utils/http";
import { REACT_APP_API_URL } from "react-native-dotenv";
import { setSelectedNotes } from "../../utils";

const url = REACT_APP_API_URL;

export const UPDATE_NEW_COFFEE_LOCATION = "UPDATE_NEW_COFFEE_LOCATION";
export const UPDATE_NEW_COFFEE_BREW_METHOD = "UPDATE_NEW_COFFEE_BREW_METHOD";
export const UPDATE_NEW_COFFEE_NOTES = "UPDATE_NEW_COFFEE_NOTES";
export const CLEAR_NEW_COFFEE = "CLEAR_NEW_COFFEE";
export const ADD_NEW_COFFEE_SUCCESS = "ADD_NEW_COFFEE_SUCCESS";
export const ADD_NEW_COFFEE_ERROR = "ADD_NEW_COFFEE_ERROR";
export const UPDATE_NEW_COFFEE_BASIC = "UPDATE_NEW_COFFEE_BASIC";

export const updateNewCoffeeBasic = (key: string, value: string) => {
	return { type: UPDATE_NEW_COFFEE_BASIC, payload: { key, value } };
};

export const updateNewCoffeeLocation = ({ location, coordinates }: any) => {
	return {
		type: UPDATE_NEW_COFFEE_LOCATION,
		payload: { location, coordinates },
	};
};

export const updateNewCoffeeBrewMethod = (method: IMethod) => {
	return { type: UPDATE_NEW_COFFEE_BREW_METHOD, payload: method };
};

export const clearNewCoffee = () => {
	return { type: CLEAR_NEW_COFFEE };
};

export const updateCoffeeNotes = (notes: INote[]) => {
	const storableNotes: string[] = setSelectedNotes(notes);
	return { type: UPDATE_NEW_COFFEE_NOTES, payload: storableNotes };
};

export const addNewCoffee = () => {
	return async (dispatch: Dispatch, getState: any) => {
		try {
			const { token, userId } = getState().auth;
			const coffee: ICoffee = getState().newCoffee;
			const response = await post(
				`${url}/coffees/${userId}.json?auth=${token}`,
				{
					name: coffee.name,
					description: coffee.description,
					coordinates: coffee.coordinates,
					process: coffee.process,
					roaster: coffee.roaster,
					location: coffee.location,
					notes: coffee.notes,
					rating: coffee.rating,
				}
			);
			await post(
				`${url}/brewMethods/${userId}/${response.name}.json?auth=${token}`,
				coffee.methods
			);
			dispatch({ type: ADD_NEW_COFFEE_SUCCESS });
		} catch (err) {
			throw Error(err);
		}
	};
};
