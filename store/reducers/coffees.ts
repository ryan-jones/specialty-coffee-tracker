import {
	COFFEES_LOADED_SUCCESS,
	COFFEES_LOADED_ERROR,
} from "../actions/coffees";

const initialState = {
	allCoffees: [],
	loaded: false,
	error: false,
	showModal: false,
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
		default:
			return state;
	}
};

export default coffeeReducer;
