import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Platform, StyleSheet } from "react-native";
import { ICoffee } from "../models/interfaces";

interface Props {
	coffee: ICoffee;
}
export default function Map({ coffee }: Props) {
	return (
		<MapView
			style={styles.map}
			mapType={Platform.OS === "ios" ? "satellite" : "standard"}
			initialRegion={{
				latitude: coffee.coordinates.latitude,
				longitude: coffee.coordinates.longitude,
				latitudeDelta: 0,
				longitudeDelta: 0,
			}}
		>
			<Marker coordinate={coffee.coordinates} title={coffee.name} />
		</MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%",
	},
});
