import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../styles/colors";

export default function UploadCoffeeScreen() {
	return (
		<View style={styles.screen}>
			<Text>Upload Coffee Page</Text>
		</View>
	);
}

UploadCoffeeScreen.navigationOptions = {
	title: "Add a coffee",
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
