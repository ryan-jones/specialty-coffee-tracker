import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
	return (
		<View style={styles.screen}>
			<Text>Settings Screen</Text>
		</View>
	);
}

SettingsScreen.navigationOptions = {
	headerTitle: "Settings",
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
