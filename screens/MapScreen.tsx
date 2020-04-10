import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../styles/colors";

export default function MapScreen() {
	return (
		<View style={styles.screen}>
			<Text>Map Page</Text>
		</View>
	);
}

MapScreen.navigationOptions = {
	title: "Regions",
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
