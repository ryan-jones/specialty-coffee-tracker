import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CoffeeListItem from "./CoffeeListItem";
import { ICoffee } from "../../models/interfaces";
import CustomText from "../Common/CustomText";

interface Props {
	onSelect: (coffee: ICoffee) => void;
	coffees: ICoffee[];
	styles?: any;
}

export default function CoffeeList(props: Props) {
	return (
		<View style={styles.listContainer}>
			{props.coffees.length > 0 ? (
				<FlatList
					data={props.coffees}
					renderItem={({ item }: any) => (
						<CoffeeListItem
							key={item.name}
							{...item}
							onSelect={() => props.onSelect(item)}
						/>
					)}
					keyExtractor={(coffee: ICoffee) =>
						`${coffee.name}-${coffee.location}`
					}
				/>
			) : (
				<View style={styles.warning}>
					<CustomText>
						You don't any coffees saved yet! Try adding one
					</CustomText>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		width: "100%",
	},
	warning: {
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
});
