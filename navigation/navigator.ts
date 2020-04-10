import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";
import CoffeeDetailsScreen from "../screens/CoffeeDetails";
import CoffeesScreen from "../screens/Coffees";
import ProfileScreen from "../screens/Profile";
import RoastersScreen from "../screens/Roasters";
import RoasterDetailsScreen from "../screens/RoasterDetails";

const Navigator = createStackNavigator({
	Home: HomeScreen,
	CoffeeDetails: CoffeeDetailsScreen,
	Profile: ProfileScreen,
	Roasters: RoastersScreen,
	RoasterDetails: RoasterDetailsScreen,
	Coffees: CoffeesScreen,
});

export default createAppContainer(Navigator);
