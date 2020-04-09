import React from "react";
import CustomText from "../components/Common/CustomText";
import { View, StyleSheet } from "react-native";

export default function Coffees() {
	return (
		<View style={styles.screen}>
			<CustomText>Coffees Page</CustomText>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
