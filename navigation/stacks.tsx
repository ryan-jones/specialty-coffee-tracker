import { createStackNavigator } from "react-navigation-stack";
import { COLORS } from "../styles/colors";
import CoffeeDetailsScreen from "../screens/Coffee/CoffeeDetails";
import CoffeesScreen from "../screens/Coffee/Coffees";
import ProfileScreen from "../screens/Profile";
import RoastersScreen from "../screens/Roasters/Roasters";
import RoasterDetailsScreen from "../screens/Roasters/RoasterDetails";
import SettingsScreen from "../screens/Settings";
import AddCoffeeScreen from "../screens/Coffee/AddCoffee";
import EditCoffeeScreen from "../screens/Coffee/EditCoffee";
import AuthScreen from "../screens/Auth";
import BasicInfoScreen from "../screens/Coffee/Form/BasicInfo";
import BrewMethodsScreen from "../screens/Coffee/Form/BrewMethods";
import { CoffeeNotesScreen } from "../screens/Coffee/Form/CoffeeNotes";

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
		BasicInfo: BasicInfoScreen,
		BrewMethods: BrewMethodsScreen,
		CoffeeNotes: CoffeeNotesScreen,
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
