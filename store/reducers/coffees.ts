import { COFFEES } from "../../data";
import { TOGGLE_COFFEE_MODAL, ADD_COFFEE } from "../actions/coffee";

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

		case TOGGLE_COFFEE_MODAL:
			console.log("triggered");
			return {
				...state,
				showModal: !state.showModal,
			};
		default:
			return state;
	}
};

export default coffeeReducer;
