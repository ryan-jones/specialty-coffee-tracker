import coffeeReducer from "./reducers/coffees";
import addNewCoffeeReducer from "./reducers/newCoffee";
import roasterReducer from "./reducers/roasters";
import profileReducer from "./reducers/profile";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	profile: profileReducer,
	coffees: coffeeReducer,
	roasters: roasterReducer,
	newCoffee: addNewCoffeeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
