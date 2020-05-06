import { ADD_COFFEE, COFFEES_LOADED } from "../actions/coffees";

const initialState = {
	allCoffees: [],
	loaded: false,
	showModal: false,
};

const coffeeReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case COFFEES_LOADED:
			return {
				...state,
				loaded: true,
				allCoffees: action.payload,
			};
		case ADD_COFFEE:
			return {
				...state,
				allCoffees: state.allCoffees.concat(action.payload),
			};

		default:
			return state;
	}
};

export default coffeeReducer;
