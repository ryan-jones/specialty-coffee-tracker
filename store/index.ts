import coffeeReducer from "./reducers/coffees";
import roasterReducer from "./reducers/roasters";
import profileReducer from "./reducers/profile";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
	profile: profileReducer,
	coffees: coffeeReducer,
	roasters: roasterReducer,
});

const store = createStore(rootReducer);

export default store;
