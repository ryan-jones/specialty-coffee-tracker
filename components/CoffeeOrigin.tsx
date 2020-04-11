import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "./Common/CustomText";
import Map from "./Map";
import { ICoffee } from "../models/interfaces";

interface Props {
	coffee: ICoffee;
}
export default function CoffeeOrigin({ coffee }: Props) {
	return (
		<View style={styles.originContainer}>
			<CustomText styles={styles.text}>
				Origin: {coffee.region}, {coffee.country}
			</CustomText>
			<View style={styles.mapContainer}>
				<Map coffees={[coffee]} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	originContainer: {
		marginTop: 25,
		width: "100%",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
	},
	mapContainer: {
		marginVertical: 15,
		width: "100%",
		height: 400,
	},
});
