import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CoffeeListItem from "./CoffeeListItem";
import { ICoffee } from "../../models/interfaces";

interface Props {
	coffees: ICoffee[];
	onSelect: (coffee: any) => void;
}

export default function CoffeeList(props: Props) {
	return (
		<View style={styles.listContainer}>
			<ScrollView style={styles.scroll}>
				{props.coffees.map((coffee) => (
					<CoffeeListItem
						key={coffee.name}
						{...coffee}
						onSelect={props.onSelect}
					/>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		width: "100%",
	},
	scroll: {
		padding: 5,
	},
});
