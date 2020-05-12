import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Platform, StyleSheet } from "react-native";
import { ICoffee } from "../models/interfaces";

interface Props {
	coffees: ICoffee[];
}
export default function Map({ coffees }: Props) {
	const coords = {
		latitude: coffees.length > 0 ? coffees[0].coordinates.latitude : 10,
		longitude: coffees.length > 0 ? coffees[0].coordinates.longitude : 10,
	};

	return (
		<MapView
			style={styles.map}
			mapType={Platform.OS === "ios" ? "satellite" : "standard"}
			initialRegion={{
				...coords,
				latitudeDelta: 0,
				longitudeDelta: 0,
			}}
		>
			{coffees.map((coffee: ICoffee) => {
				const coords = {
					latitude: coffee.coordinates.lat,
					longitude: coffee.coordinates.lng,
				};
				return (
					<Marker key={coffee.name} coordinate={coords} title={coffee.name} />
				);
			})}
		</MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%",
	},
});
