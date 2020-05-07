import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import CoffeeListItem from "./CoffeeListItem";
import { ICoffee } from "../../models/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffees } from "../../store/actions/coffees";
import CustomText from "../Common/CustomText";
import WarningMessage from "../Common/WarningMessage";

interface Props {
	onSelect: (coffee: ICoffee) => void;
	navigation: any;
	styles?: any;
}

export default function CoffeeList(props: Props) {
	const coffees = useSelector((state: any) => state.coffees);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCoffees());
		// const pageLoad = props.navigation.addListener(
		// 	"willFocus",
		// 	dispatch(fetchCoffees())
		// );
		// return () => pageLoad.remove();
	}, []);

	if (!coffees.loaded) {
		return (
			<View style={styles.warning}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	if (coffees.error) {
		<View style={styles.warning}>
			<WarningMessage>
				Oh no... something happened when fetching your data
			</WarningMessage>
		</View>;
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
	warning: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
