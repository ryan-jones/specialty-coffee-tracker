import React from "react";
import { View, StyleSheet } from "react-native";
import { Navigation } from "../models/interfaces";
import AddCoffee from "../components/AddCoffee/AddCoffee";

interface Props {
	navigation: Navigation;
}

export default function AddCoffeeScreen(props: Props) {
	return (
		<View style={styles.screen}>
			<AddCoffee navigation={props.navigation} />
		</View>
	);
}

AddCoffeeScreen.navigationOptions = () => {
	return {
		headerTitle: "Add a new coffee",
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
});
