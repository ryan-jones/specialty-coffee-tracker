import React from "react";
import { View, StyleSheet } from "react-native";
import { ROASTERS } from "../data";
import { IRoaster } from "../models/interfaces";
import RoasterList from "../components/RoasterList/RoasterList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/Common/HeaderButton";
import MenuButton from "../components/Common/MenuButton";

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

RoastersScreen.navigationOptions = (navData: any) => {
	return {
		title: "Roasters",
		headerRight: () => (
			<CustomHeaderButton
				iconName="md-add-circle-outline"
				title="add roaster"
				onPress={() => {}}
			></CustomHeaderButton>
		),
		headerLeft: () => <MenuButton navigation={navData.navigation} />,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
});
