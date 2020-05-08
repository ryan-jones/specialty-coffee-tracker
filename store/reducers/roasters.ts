import { ADD_ROASTER, TOGGLE_ROASTER_MODAL } from "../actions/roasters";

const initialState = {
	allRoasters: [],
	showModal: false,
};

const roasterReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ADD_ROASTER:
			return {
				...state,
				allRoasters: state.allRoasters.concat(action.payload),
			};

		case TOGGLE_ROASTER_MODAL:
			return {
				...state,
				showModal: !state.showModal,
			};
		default:
			return state;
	}
};

export default roasterReducer;
