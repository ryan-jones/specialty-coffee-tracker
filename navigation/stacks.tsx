import { createStackNavigator } from "react-navigation-stack";
import { COLORS } from "../styles/colors";
import CoffeeDetailsScreen from "../screens/CoffeeDetails";
import CoffeesScreen from "../screens/Coffees";
import ProfileScreen from "../screens/Profile";
import RoastersScreen from "../screens/Roasters";
import RoasterDetailsScreen from "../screens/RoasterDetails";
import SettingsScreen from "../screens/Settings";
import AddCoffeeScreen from "../screens/AddCoffee";
import EditCoffeeScreen from "../screens/EditCoffee";
import AuthScreen from "../screens/Auth";

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: COLORS.baseColor,
	},
	headerTintColor: COLORS.white,
};

export const ProfileNavigator = createStackNavigator(
	{
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
		AddCoffee: AddCoffeeScreen,
		EditCoffee: EditCoffeeScreen,
	},
	{
		defaultNavigationOptions,
		initialRouteName: "Coffees",
	}
);

export const SettingsNavigator = createStackNavigator(
	{
		Settings: SettingsScreen,
	},
	{
		defaultNavigationOptions,
	}
);

export const AuthNavigator = createStackNavigator(
	{
		Auth: AuthScreen,
	},
	{
		defaultNavigationOptions,
	}
);
