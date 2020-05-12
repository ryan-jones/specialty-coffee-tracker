import { PROFILE_LOAD_SUCCESS, UPDATE_PREFERENCES } from "../actions/profile";
import { IProfile } from "../../models/interfaces";

const initialState: IProfile = {
	name: "",
	userId: "",
	favoriteCoffees: [],
	favoriteRoasters: [],
	preferences: {
		colorScheme: "",
	},
	stats: [
		{
			text: "Coffees",
			value: 0,
		},
		{
			text: "Roasters",
			value: 0,
		},
		{
			text: "Regions",
			value: 0,
		},
	],
};

const profileReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case PROFILE_LOAD_SUCCESS:
			const newState = { ...action.payload };
			return newState;
		case UPDATE_PREFERENCES:
			return {
				...state,
				preferences: action.payload,
			};
		default:
			return state;
	}
};

export default profileReducer;
