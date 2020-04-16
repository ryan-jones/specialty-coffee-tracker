import { ICoffee } from "../../models/interfaces";

export const ADD_COFFEE = "ADD_COFFEE";

export const addCoffee = (coffee: ICoffee) => {
	return { type: ADD_COFFEE, payload: coffee };
};
