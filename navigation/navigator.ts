import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";
import CoffeeDetailsScreen from "../screens/CoffeeDetails";
import CoffeesScreen from "../screens/Coffees";

const Navigator = createStackNavigator({
	Home: HomeScreen,
	CoffeeDetails: CoffeeDetailsScreen,
	Coffees: CoffeesScreen,
});

export default createAppContainer(Navigator);
