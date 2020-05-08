import coffeeReducer from "./reducers/coffees";
import addNewCoffeeReducer from "./reducers/newCoffee";
import roasterReducer from "./reducers/roasters";
import profileReducer from "./reducers/profile";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import selectedCoffeeReducer from "./reducers/selectedCoffee";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
	profile: profileReducer,
	coffees: coffeeReducer,
	roasters: roasterReducer,
	newCoffee: addNewCoffeeReducer,
	selectedCoffee: selectedCoffeeReducer,
	auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
