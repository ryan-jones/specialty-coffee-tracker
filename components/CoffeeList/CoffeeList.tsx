import React from "react";
import { View, StyleSheet } from "react-native";
import CoffeeListItem from "./CoffeeListItem";
import { ICoffee } from "../../models/interfaces";

interface Props {
	coffees: ICoffee[];
	onSelect: (coffee: any) => void;
	styles?: any;
}

export default function CoffeeList(props: Props) {
	return (
		<View style={styles.listContainer}>
			{props.coffees.map((coffee) => (
				<CoffeeListItem
					key={coffee.name}
					{...coffee}
					onSelect={() => props.onSelect(coffee)}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		width: "100%",
		flexDirection: "row",
		marginVertical: 15,
		justifyContent: "space-evenly",
	},
});
