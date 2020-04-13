import { COFFEES, ROASTERS } from "../../data";
import { ICoffee } from "../../models/interfaces";

const LOGGED_IN = "LOGGED_IN";

const initialState = {
	favCoffees: COFFEES.slice(0, 3),
	favRoasters: ROASTERS.slice(0, 3),
	stats: [
		{
			text: "Coffees",
			value: COFFEES.length,
		},
		{
			text: "Roasters",
			value: ROASTERS.length,
		},
		{
			text: "Regions",
			value: COFFEES.reduce((list: string[], coffee: ICoffee) => {
				if (list.indexOf(coffee.country) > 0) {
					return list;
				}
				return list.concat(coffee.country);
			}, []).length,
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
