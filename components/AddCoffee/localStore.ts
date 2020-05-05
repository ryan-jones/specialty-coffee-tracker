import { IMethod, ICoffee } from "../../models/interfaces";
import { setBrewMethodRatings, setCoffeeAverageRating } from "../../utils";

export const ADD_COFFEE_STATE: ICoffee = {
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
export const addCoffeeReducer = (state: any, action: any) => {
	switch (action.type) {
		case "UPDATE_NAME":
			return { ...state, name: action.payload };
		case "UPDATE_REGION":
			return { ...state, region: action.payload };
		case "UPDATE_COUNTRY":
			return { ...state, country: action.payload };
		case "UPDATE_LOCATION":
			const { location, coordinates } = action.payload;
			console.log("payload", action.payload);
			return {
				...state,
				coordinates,
				location,
			};
		case "UPDATE_DESCRIPTION":
			return { ...state, description: action.payload };
		case "SELECT_COFFEE_PROCESS":
			return { ...state, process: action.payload };
		case "ADD_BREW_METHOD":
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
