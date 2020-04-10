import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../styles/colors";

export default function CoffeeDetailsScreen() {
	return (
		<View style={styles.screen}>
			<Text>Coffee Details Screen</Text>
		</View>
	);
}

CoffeeDetailsScreen.navigationOptions = {
	headerStyle: {
		backgroundColor: COLORS.baseColor,
	},
	headerTintColor: COLORS.white,
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
