const LOGGED_IN = "LOGGED_IN";

const initialState = {
	favCoffees: [],
	favRoasters: [],
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
			value: [],
		},
	],
};

const profileReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LOGGED_IN:
			return state;
		default:
			return state;
	}
};

export default profileReducer;
