import React from "react";
import { View, StyleSheet } from "react-native";
import CoffeeListItem from "./CoffeeListItem";

interface Props {
	onSelect: (coffee: any) => void;
}

export default function CoffeeList(props: Props) {
	const coffees = [
		{
			name: "Una regla de Dios",
			region: "San Juan Region",
			country: "Guatemala",
			process: "washed",
			roaster: "Right Side",
		},
		{
			name: `Helen's Secret`,
			region: "Sidamo",
			country: "Ethiopia",
			process: "dry",
			roaster: "Morrow Coffee",
		},
		{
			name: `Sandy's Favorite`,
			region: "Yirgacheffe",
			country: "Ethiopia",
			process: "honey",
			roaster: "Cafe Red",
		},
	];

	return (
		<View style={styles.listContainer}>
			{coffees.map((coffee) => (
				<CoffeeListItem
					key={coffee.name}
					{...coffee}
					onSelect={props.onSelect}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		width: "100%",
		padding: 15,
	},
});
