import React from "react";
import { View, StyleSheet } from "react-native";
import CoffeeList from "../components/CoffeeList/CoffeeList";
import { COFFEES } from "../data";
import { ICoffee } from "../models/interfaces";
import CustomHeaderButton from "../components/Common/HeaderButton";
import MenuButton from "../components/Common/MenuButton";

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

CoffeesScreen.navigationOptions = (navData: any) => {
	return {
		title: "My Coffees",
		headerRight: () => (
			<CustomHeaderButton
				iconName="ios-add-circle-outline"
				title="add coffee"
				onPress={() => {}}
			></CustomHeaderButton>
		),
		headerLeft: () => <MenuButton navigation={navData.navigation} />,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
});

export default CoffeesScreen;
