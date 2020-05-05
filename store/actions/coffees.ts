import { ICoffee } from "../../models/interfaces";

export const ADD_COFFEE = "ADD_COFFEE";
export const CLEAR_ADD_COFFEE = "CLEAR_ADD_COFFEE";
export const UPDATE_COFFEE_NOTES = "UPDATE_COFFEE_NOTES";

export const addNewCoffee = (coffee: ICoffee) => {
	return { type: ADD_COFFEE, payload: coffee };
};

export const clearNewCoffee = () => {
	return { type: CLEAR_ADD_COFFEE };
};

export const updateCoffeeNotes = (notes: string[]) => {
	return { type: UPDATE_COFFEE_NOTES, payload: notes };
};
