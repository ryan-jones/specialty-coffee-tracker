import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import CoffeeListItem from "./CoffeeListItem";
import { ICoffee } from "../../models/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffees } from "../../store/actions/coffees";
import CustomText from "../Common/CustomText";

interface Props {
	onSelect: (coffee: ICoffee) => void;
	styles?: any;
}

export default function CoffeeList(props: Props) {
	const coffees = useSelector((state: any) => state.coffees);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCoffees());
	}, []);

	if (!coffees.loaded) {
		return (
			<View style={styles.loading}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<View style={styles.listContainer}>
			{coffees.allCoffees.length > 0 ? (
				<FlatList
					data={coffees.allCoffees}
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
	loading: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	warning: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
