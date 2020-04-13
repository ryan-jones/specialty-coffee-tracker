import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MenuButton from "../components/Common/MenuButton";

export default function SettingsScreen() {
	return (
		<View style={styles.screen}>
			<Text>Settings Screen</Text>
		</View>
	);
}

SettingsScreen.navigationOptions = (navData: any) => {
	return {
		title: "Settings",
		headerLeft: () => <MenuButton navigation={navData.navigation} />,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
