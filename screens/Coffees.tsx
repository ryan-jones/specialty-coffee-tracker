import React from "react";
import { View, StyleSheet } from "react-native";
import CoffeeList from "../components/CoffeeList/CoffeeList";
import { COFFEES } from "../data";
import { ICoffee } from "../models/interfaces";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/Common/HeaderButton";

interface Props {
	navigation: any;
}

const CoffeesScreen = (props: Props) => {
	const onSelectCoffee = (coffee: ICoffee) => {
		props.navigation.navigate({
			routeName: "CoffeeDetails",
			params: { coffee },
		});
	};
	return (
		<View style={styles.screen}>
			<CoffeeList coffees={COFFEES} onSelect={onSelectCoffee} />
		</View>
	);
};

CoffeesScreen.navigationOptions = {
	title: "My Coffees",
	headerRight: () => (
		<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item
				iconName="ios-add-circle-outline"
				title="add coffee"
				onPress={() => {}}
			/>
		</HeaderButtons>
	),
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
});

export default CoffeesScreen;
