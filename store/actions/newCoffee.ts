export const UPDATE_NEW_COFFEE_NAME = "UPDATE_NEW_COFFEE_NAME";
export const UPDATE_NEW_COFFEE_REGION = "UPDATE_NEW_COFFEE_REGION";
export const UPDATE_NEW_COFFEE_COUNTRY = "UPDATE_NEW_COFFEE_COUNTRY";
export const UPDATE_NEW_COFFEE_LOCATION = "UPDATE_NEW_COFFEE_LOCATION";
export const UPDATE_NEW_COFFEE_DESCRIPTION = "UPDATE_NEW_COFFEE_DESCRIPTION";
export const UPDATE_NEW_COFFEE_PROCESS = "UPDATE_NEW_COFFEE_PROCESS";
export const UPDATE_NEW_COFFEE_BREW_METHOD = "UPDATE_NEW_COFFEE_BREW_METHOD";
export const CLEAR_NEW_COFFEE = "CLEAR_NEW_COFFEE";

export const updateNewCoffeeName = (name: string) => {
	return { type: UPDATE_NEW_COFFEE_NAME, payload: name };
};

export const updateNewCoffeeRegion = (region: string) => {
	return { type: UPDATE_NEW_COFFEE_REGION, payload: region };
};

export const updateNewCoffeeCountry = (country: string) => {
	return { type: UPDATE_NEW_COFFEE_COUNTRY, payload: country };
};

export const updateNewCoffeeLocation = ({ location, coordinates }: any) => {
	return {
		type: UPDATE_NEW_COFFEE_LOCATION,
		payload: { location, coordinates },
	};
};

export const updateNewCoffeeDescription = (description: string) => {
	return { type: UPDATE_NEW_COFFEE_DESCRIPTION, payload: description };
};

export const updateNewCoffeeProcess = (process: string) => {
	return { type: UPDATE_NEW_COFFEE_PROCESS, payload: process };
};

export const updateNewCoffeeBrewMethod = (method: any) => {
	return { type: UPDATE_NEW_COFFEE_BREW_METHOD, payload: method };
};

export const clearNewCoffee = () => {
	return { type: CLEAR_NEW_COFFEE };
};
