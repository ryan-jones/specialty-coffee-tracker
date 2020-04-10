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
	const onSelectRoaster = (roaster: any) => {
		props.navigation.navigate({ routeName: "RoasterDetails" });
	};
	return (
		<View style={styles.screen}>
			<CustomText>Coffees Page</CustomText>
			<CoffeeList coffees={COFFEES} onSelect={onSelectRoaster} />
		</View>
	);
};

CoffeesScreen.navigationOptions = {
	title: "Saved Roasters",
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 15,
	},
});

export default CoffeesScreen;
