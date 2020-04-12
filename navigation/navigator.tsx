import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";
import CoffeeDetailsScreen from "../screens/CoffeeDetails";
import CoffeesScreen from "../screens/Coffees";
import ProfileScreen from "../screens/Profile";
import RoastersScreen from "../screens/Roasters";
import RoasterDetailsScreen from "../screens/RoasterDetails";
import { COLORS } from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: COLORS.baseColor,
	},
	headerTintColor: COLORS.white,
};

const Navigator = createStackNavigator(
	{
		Home: HomeScreen,
		CoffeeDetails: CoffeeDetailsScreen,
		Profile: ProfileScreen,
		Roasters: RoastersScreen,
		RoasterDetails: RoasterDetailsScreen,
		Coffees: CoffeesScreen,
	},
	{
		defaultNavigationOptions,
	}
);

const RoasterNavigator = createStackNavigator(
	{
		Roasters: RoastersScreen,
		RoasterDetails: RoasterDetailsScreen,
	},
	{
		defaultNavigationOptions,
	}
);
const CoffeeNavigator = createStackNavigator(
	{
		Coffees: CoffeesScreen,
		CoffeeDetails: CoffeeDetailsScreen,
	},
	{
		defaultNavigationOptions,
	}
);

const tabs = {
	Profile: {
		screen: Navigator,
		navigationOptions: {
			tabBarIcon: (tabInfo: any) => {
				return <Ionicons name="md-home" size={25} color={tabInfo.tintColor} />;
			},
			tabBarColor: COLORS.baseColor,
		},
	},
	Roasters: {
		screen: RoasterNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo: any) => {
				return (
					<Ionicons name="md-bonfire" size={25} color={tabInfo.tintColor} />
				);
			},
			tabBarColor: COLORS.baseColor,
		},
	},
	Coffees: {
		screen: CoffeeNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo: any) => {
				return <Ionicons name="md-cafe" size={25} color={tabInfo.tintColor} />;
			},
			tabBarColor: COLORS.baseColor,
		},
	},
};

const tabsNavigator =
	Platform.OS === "android"
		? createMaterialBottomTabNavigator(tabs, {
				activeColor: COLORS.white,
				inactiveColor: COLORS.black,
				shifting: true,
		  })
		: createBottomTabNavigator(tabs, {
				tabBarOptions: {
					tabStyle: {
						backgroundColor: COLORS.baseColor,
					},
					style: {
						backgroundColor: COLORS.baseColor,
					},
					inactiveTintColor: COLORS.black,
					activeTintColor: COLORS.white,
				},
		  });
export const appTabsNavigator = createAppContainer(Navigator);

export default createAppContainer(tabsNavigator);
