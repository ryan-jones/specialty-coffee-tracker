import { COFFEES } from "../../data";
import { ADD_COFFEE } from "../actions/coffees";

const initialState = {
	allCoffees: COFFEES,
	showModal: false,
};

const coffeeReducer = (state = initialState, action: any) => {
	switch (action.type) {
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
