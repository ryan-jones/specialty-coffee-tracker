import React from "react";
import { View, StyleSheet } from "react-native";
import { IRoaster, Navigation } from "../models/interfaces";
import RoasterList from "../components/RoasterList/RoasterList";
import CustomHeaderButton from "../components/Common/HeaderButton";
import MenuButton from "../components/Common/MenuButton";
import { useSelector } from "react-redux";

interface Props {
	navigation: Navigation;
}

export default function RoastersScreen(props: Props) {
	const roasters = useSelector((state: any) => state.roasters.allRoasters);
	const onSelectRoaster = (roaster: IRoaster) => {
		props.navigation.navigate({
			routeName: "RoasterDetails",
			params: { roaster },
		});
	};
	return (
		<View style={styles.screen}>
			<RoasterList roasters={roasters} onSelect={onSelectRoaster} />
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
