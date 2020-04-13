import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Platform, StyleSheet } from "react-native";
import { ICoffee } from "../models/interfaces";

interface Props {
	coffees: ICoffee[];
}
export default function Map({ coffees }: Props) {
	return (
		<MapView
			style={styles.map}
			mapType={Platform.OS === "ios" ? "satellite" : "standard"}
			initialRegion={{
				latitude: coffees[0].coordinates.latitude,
				longitude: coffees[0].coordinates.longitude,
				latitudeDelta: 0,
				longitudeDelta: 0,
			}}
		>
			{coffees.map((coffee: ICoffee) => (
				<Marker
					key={coffee.name}
					coordinate={coffee.coordinates}
					title={coffee.name}
				/>
			))}
		</MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%",
	},
});
