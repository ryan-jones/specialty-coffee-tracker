import React from "react";
import { View, StyleSheet } from "react-native";
import CoffeeListItem from "./CoffeeListItem";
import { ICoffee } from "../../models/interfaces";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
	coffees: ICoffee[];
	onSelect: (coffee: ICoffee) => void;
	styles?: object;
}

export default function CoffeeList(props: Props) {
	return (
		<View style={styles.listContainer}>
			<ScrollView>
				{props.coffees.map((coffee) => (
					<CoffeeListItem
						key={coffee.name}
						{...coffee}
						onSelect={() => props.onSelect(coffee)}
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
});
