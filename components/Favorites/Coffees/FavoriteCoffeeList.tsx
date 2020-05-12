import React from "react";
import { View, StyleSheet } from "react-native";
import FavoriteCoffeeListItem from "./FavoriteCoffeeListItem";
import { ICoffee } from "../../../models/interfaces";
import { NavigationParams } from "react-navigation";

interface Props {
	coffees: ICoffee[];
	navigation: NavigationParams;
	textStyles?: object;
	listStyles?: object;
}

export default function CoffeeList(props: Props) {
	return (
		<View style={{ width: "100%", marginVertical: 15 }}>
			<View style={styles.listContainer}>
				{props.coffees.map((coffee) => (
					<FavoriteCoffeeListItem
						key={coffee.name}
						{...coffee}
						onSelect={() =>
							props.navigation.navigate({
								routeName: "CoffeeDetails",
								params: { coffee },
							})
						}
					/>
				))}
			</View>
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
	link: {
		width: "100%",
		marginTop: 5,
		alignItems: "flex-end",
	},
});
