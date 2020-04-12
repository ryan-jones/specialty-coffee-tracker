import React from "react";
import { View, StyleSheet } from "react-native";
import { ROASTERS } from "../data";
import { IRoaster } from "../models/interfaces";
import RoasterList from "../components/RoasterList/RoasterList";

interface Props {
	navigation: any;
}

export default function RoastersScreen(props: Props) {
	const onSelectRoaster = (roaster: IRoaster) => {
		props.navigation.navigate({
			routeName: "RoasterDetails",
			params: { roaster },
		});
	};
	return (
		<View style={styles.screen}>
			<RoasterList roasters={ROASTERS} onSelect={onSelectRoaster} />
		</View>
	);
}

RoastersScreen.navigationOptions = {
	title: "Roasters",
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
});
