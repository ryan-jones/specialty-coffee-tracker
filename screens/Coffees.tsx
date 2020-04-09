import React from "react";
import CustomText from "../components/Common/CustomText";
import { View, StyleSheet } from "react-native";
import CoffeeList from "../components/CoffeeList/CoffeeList";

interface Props {
	navigation: any;
}

export default function Coffees(props: Props) {
	const onSelectCoffee = (coffee: any) => {
		props.navigation.navigate({ routeName: "CoffeeDetails" });
	};
	return (
		<View style={styles.screen}>
			<CustomText>Coffees Page</CustomText>
			<CoffeeList onSelect={onSelectCoffee} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 15,
	},
});
