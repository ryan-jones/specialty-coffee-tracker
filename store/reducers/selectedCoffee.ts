import { IMethod, IMethods } from "../../models/interfaces";
import { setBrewMethodRatings, setCoffeeAverageRating } from "../../utils";
import {
	UPDATE_SELECTED_COFFEE_LOCATION,
	UPDATE_SELECTED_COFFEE_BREW_METHOD,
	CLEAR_SELECTED_COFFEE,
	SET_SELECTED_COFFEE,
	UPDATE_SELECTED_COFFEE_BASIC,
} from "../actions/selectedCoffee";

export const initialState: any = null;

const selectedCoffeeReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_SELECTED_COFFEE:
			return action.payload;
		case UPDATE_SELECTED_COFFEE_BASIC:
			return {
				...state,
				[action.payload.key]: action.payload.value,
			};
		case UPDATE_SELECTED_COFFEE_LOCATION:
			const { location, coordinates } = action.payload;
			return {
				...state,
				coordinates,
				location,
			};
		case UPDATE_SELECTED_COFFEE_BREW_METHOD:
			const { name, brewCase } = action.payload;

			const updatedMethod: IMethod = {
				...state.methods[name],
				cases: [...state.methods[name].cases, brewCase],
			};
			updatedMethod.rating = setBrewMethodRatings(updatedMethod);

			const updatedMethods: IMethods = {
				...state.methods,
				[name]: {
					...updatedMethod,
				},
			};
			const newAverageRating: number = setCoffeeAverageRating(updatedMethods);
			return {
				...state,
				rating: newAverageRating,
				notes: [...state.notes, ...brewCase.notes],
				methods: updatedMethods,
			};
		case CLEAR_SELECTED_COFFEE:
			return initialState;
		default:
			return state;
	}
};

export default selectedCoffeeReducer;
