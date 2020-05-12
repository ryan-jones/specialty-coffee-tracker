import { IMethod, IMethods } from "../../models/interfaces";
import { setBrewMethodRatings, setCoffeeAverageRating } from "../../utils";
import {
	UPDATE_NEW_COFFEE_LOCATION,
	UPDATE_NEW_COFFEE_BREW_METHOD,
	CLEAR_NEW_COFFEE,
	UPDATE_NEW_COFFEE_BASIC,
	UPDATE_NEW_COFFEE_NOTES,
} from "../actions/newCoffee";

export const initialState: any = {
	name: "",
	location: "",
	process: "",
	roaster: "",
	notes: [],
	rating: "0",
	description: "",
	coordinates: {
		lat: null,
		lng: null,
	},
	methods: {
		chemex: {
			rating: 0,
			cases: [],
		},
		aeropress: {
			rating: 0,
			cases: [],
		},
		v60: {
			rating: 0,
			cases: [],
		},
		espresso: {
			rating: 0,
			cases: [],
		},
		frenchpress: {
			rating: 0,
			cases: [],
		},
		syphon: {
			rating: 0,
			cases: [],
		},
	},
};

const addNewCoffeeReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case UPDATE_NEW_COFFEE_BASIC:
			return {
				...state,
				[action.payload.key]: action.payload.value,
			};
		case UPDATE_NEW_COFFEE_LOCATION:
			const { location, coordinates } = action.payload;
			return {
				...state,
				coordinates,
				location,
			};
		case UPDATE_NEW_COFFEE_BREW_METHOD:
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
				notes: Array.from(new Set([...state.notes, ...brewCase.notes])),
				methods: updatedMethods,
			};
		case UPDATE_NEW_COFFEE_NOTES:
			return {
				...state,
				notes: Array.from(new Set([...state.notes, ...action.payload])),
			};
		case CLEAR_NEW_COFFEE:
			return initialState;
		default:
			return state;
	}
};

export default addNewCoffeeReducer;
