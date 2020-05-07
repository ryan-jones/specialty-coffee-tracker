import {
	ADD_COFFEE,
	COFFEES_LOADED,
	ERROR_LOADING_COFFEES,
	SELECT_COFFEE,
	CLEAR_SELECTED_COFFEE,
} from "../actions/coffees";

const initialState = {
	allCoffees: [],
	loaded: false,
	error: false,
	showModal: false,
	selectedCoffee: null,
};

const coffeeReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case COFFEES_LOADED:
			return {
				...state,
				loaded: true,
				allCoffees: action.payload,
			};
		case ERROR_LOADING_COFFEES:
			return {
				...state,
				error: true,
				loaded: true,
			};
		case ADD_COFFEE:
			return {
				...state,
				error: false,
				allCoffees: state.allCoffees.concat(action.payload),
			};
		case SELECT_COFFEE:
			return {
				...state,
				selectedCoffee: action.payload,
			};
		case CLEAR_SELECTED_COFFEE:
			return {
				...state,
				selectedCoffee: null,
			};

		default:
			return state;
	}
};

export default coffeeReducer;
