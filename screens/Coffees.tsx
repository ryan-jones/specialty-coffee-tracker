import React from "react";
import CustomText from "../components/Common/CustomText";
import { View, StyleSheet } from "react-native";
import CoffeeList from "../components/CoffeeList/CoffeeList";
import { COLORS } from "../styles/colors";
import { COFFEES } from "../data";

interface Props {
	navigation: any;
}

const CoffeesScreen = (props: Props) => {
	const onSelectCoffee = (coffee: any) => {
		props.navigation.navigate({ routeName: "CoffeeDetails" });
	};
	return (
		<View style={styles.screen}>
			<CustomText>Coffees Page</CustomText>
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
