import { createStackNavigator } from "react-navigation-stack";
import { COLORS } from "../styles/colors";
import HomeScreen from "../screens/Home";
import CoffeeDetailsScreen from "../screens/CoffeeDetails";
import CoffeesScreen from "../screens/Coffees";
import ProfileScreen from "../screens/Profile";
import RoastersScreen from "../screens/Roasters";
import RoasterDetailsScreen from "../screens/RoasterDetails";

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: COLORS.baseColor,
	},
	headerTintColor: COLORS.white,
};

export const ProfileNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Profile: ProfileScreen,
	},
	{
		defaultNavigationOptions,
	}
);

export const RoasterNavigator = createStackNavigator(
	{
		Roasters: RoastersScreen,
		RoasterDetails: RoasterDetailsScreen,
	},
	{
		defaultNavigationOptions,
	}
);
export const CoffeeNavigator = createStackNavigator(
	{
		Coffees: CoffeesScreen,
		CoffeeDetails: CoffeeDetailsScreen,
	},
	{
		defaultNavigationOptions,
	}
);
