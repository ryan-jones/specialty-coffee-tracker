import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../styles/colors";

export default function RoasterDetailsScreen() {
	return (
		<View style={styles.screen}>
			<Text>Roaster Details Screen</Text>
		</View>
	);
}

RoasterDetailsScreen.navigationOptions = {};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
