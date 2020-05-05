import { ICoffee, IMethod } from "../../models/interfaces";
import { setBrewMethodRatings, setCoffeeAverageRating } from "../../utils";
import {
	UPDATE_NEW_COFFEE_NAME,
	UPDATE_NEW_COFFEE_REGION,
	UPDATE_NEW_COFFEE_COUNTRY,
	UPDATE_NEW_COFFEE_LOCATION,
	UPDATE_NEW_COFFEE_DESCRIPTION,
	UPDATE_NEW_COFFEE_PROCESS,
	UPDATE_NEW_COFFEE_BREW_METHOD,
} from "../actions/newCoffee";

export const initialState: ICoffee = {
	name: "",
	location: "",
	process: "",
	roaster: "",
	notes: [],
	rating: "",
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
		case UPDATE_NEW_COFFEE_NAME:
			return { ...state, name: action.payload };
		case UPDATE_NEW_COFFEE_REGION:
			return { ...state, region: action.payload };
		case UPDATE_NEW_COFFEE_COUNTRY:
			return { ...state, country: action.payload };
		case UPDATE_NEW_COFFEE_LOCATION:
			const { location, coordinates } = action.payload;
			return {
				...state,
				coordinates,
				location,
			};
		case UPDATE_NEW_COFFEE_DESCRIPTION:
			return { ...state, description: action.payload };
		case UPDATE_NEW_COFFEE_PROCESS:
			return { ...state, process: action.payload };
		case UPDATE_NEW_COFFEE_BREW_METHOD:
			const { name, brewCase } = action.payload;
			const updatedMethod: IMethod = {
				...state.methods[name],
				cases: [...state.methods[name].cases, brewCase],
			};
			updatedMethod.rating = setBrewMethodRatings(updatedMethod);

			const updatedMethods = {
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
		default:
			return state;
	}
};

export default addNewCoffeeReducer;
