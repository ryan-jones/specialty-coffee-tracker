import React from "react";
import { View, StyleSheet } from "react-native";
import CoffeeList from "../components/CoffeeList/CoffeeList";
import { COFFEES } from "../data";
import { ICoffee } from "../models/interfaces";

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
	title: "Saved Coffees",
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 15,
	},
});

export default CoffeesScreen;
