import {
	COFFEES_LOADED_SUCCESS,
	COFFEES_LOADED_ERROR,
	COFFEES_LOADING,
} from "../actions/coffees";

const initialState = {
	allCoffees: [],
	loaded: false,
	error: false,
};

const coffeeReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case COFFEES_LOADED_SUCCESS:
			return {
				...state,
				loaded: true,
				allCoffees: action.payload,
			};
		case COFFEES_LOADED_ERROR:
			return {
				...state,
				error: true,
				loaded: true,
			};
		case COFFEES_LOADING:
			return {
				...state,
				loaded: false,
			};
		default:
			return state;
	}
};

export default coffeeReducer;
