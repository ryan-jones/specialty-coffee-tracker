import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";
import { COLORS } from "../styles/colors";
import { RoasterNavigator, CoffeeNavigator, ProfileNavigator } from "./stacks";

const tabs = {
	Profile: {
		screen: ProfileNavigator,
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

export const TabsNavigator =
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
						paddingTop: 10,
					},
					labelStyle: {
						fontFamily: "main-en",
					},
					inactiveTintColor: COLORS.black,
					activeTintColor: COLORS.white,
				},
		  });
