import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../styles/colors";
import Card from "../components/Common/Card";
import CustomText from "../components/Common/CustomText";
import CoffeeList from "../components/CoffeeList/CoffeeList";
import { COFFEES } from "../data";
import { ICoffee } from "../models/interfaces";

interface Props {
	navigation: any;
}

export default function ProfileScreen(props: Props) {
	const coffees = COFFEES.slice(0, 3);
	return (
		<View style={styles.screen}>
			<Card>
				<View>
					<CustomText>Welcome back!</CustomText>
					<CustomText>Favorite Coffees</CustomText>
					<CoffeeList
						coffees={coffees}
						onSelect={(coffee: ICoffee) =>
							props.navigation.navigate({
								routeName: "CoffeeDetails",
								params: { coffee },
							})
						}
					/>
				</View>
			</Card>
		</View>
	);
}

ProfileScreen.navigationOptions = {
	title: "Welcome!",
	headerStyle: {
		backgroundColor: COLORS.baseColor,
	},
	headerTintColor: COLORS.white,
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		padding: 15,
	},
});
