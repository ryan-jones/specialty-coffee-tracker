import { IMethod, IMethods } from "../../models/interfaces";
import { setBrewMethodRatings, setCoffeeAverageRating } from "../../utils";
import {
	UPDATE_SELECTED_COFFEE_LOCATION,
	UPDATE_SELECTED_COFFEE_BREW_METHOD,
	CLEAR_SELECTED_COFFEE,
	SET_SELECTED_COFFEE,
	UPDATE_SELECTED_COFFEE_BASIC,
	RESET_SELECTED_COFFEE,
	UPDATE_SELECTED_COFFEE_NOTES,
} from "../actions/selectedCoffee";

export const initialState: any = {
	original: null,
	edited: null,
};

const selectedCoffeeReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_SELECTED_COFFEE:
			const newState = { ...action.payload };
			// firebase does not store empty arrays
			if (!newState.notes) {
				newState.notes = [];
			}
			return {
				original: newState,
				edited: newState,
			};
		case UPDATE_SELECTED_COFFEE_BASIC:
			return {
				...state,
				edited: {
					...state.edited,
					[action.payload.key]: action.payload.value,
				},
			};
		case UPDATE_SELECTED_COFFEE_LOCATION:
			const { location, coordinates } = action.payload;
			return {
				...state,
				edited: {
					...state.edited,
					coordinates,
					location,
				},
			};
		case UPDATE_SELECTED_COFFEE_BREW_METHOD:
			const { name, brewCase } = action.payload;
			const method = state.edited.methods[name];
			// firebase does not store empty array values
			const updatedMethod: IMethod = {
				...method,
				cases: method.cases ? [...method.cases, brewCase] : [brewCase],
			};
			updatedMethod.rating = setBrewMethodRatings(updatedMethod);

			const updatedMethods: IMethods = {
				...state.edited.methods,
				[name]: {
					...updatedMethod,
				},
			};
			const newAverageRating: number = setCoffeeAverageRating(updatedMethods);

			return {
				...state,
				edited: {
					...state.edited,
					rating: newAverageRating,
					notes: new Set([...state.edited.notes, ...brewCase.notes]),
					methods: updatedMethods,
				},
			};
		case UPDATE_SELECTED_COFFEE_NOTES:
			return {
				...state,
				edited: {
					notes: new Set([...state.edites.notes, ...action.payload]),
				},
			};
		case RESET_SELECTED_COFFEE:
			return {
				...state,
				edited: state.original,
			};
		case CLEAR_SELECTED_COFFEE:
			return initialState;
		default:
			return state;
	}
};

export default selectedCoffeeReducer;
