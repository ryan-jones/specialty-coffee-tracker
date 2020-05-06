import React from "react";
import { View, StyleSheet } from "react-native";
import CoffeeList from "../components/CoffeeList/CoffeeList";
import { ICoffee, Navigation } from "../models/interfaces";
import CustomHeaderButton from "../components/Common/HeaderButton";
import MenuButton from "../components/Common/MenuButton";

interface Props {
	navigation: Navigation;
}

const CoffeesScreen = (props: Props) => {
	const onSelectCoffee = (coffee: ICoffee) => {
		props.navigation.navigate({
			routeName: "CoffeeDetails",
			params: { coffee },
		});
	};

	return (
		<View style={styles.screen}>
			<CoffeeList onSelect={onSelectCoffee} />
		</View>
	);
};

CoffeesScreen.navigationOptions = (navData: any) => {
	return {
		title: "My Coffees",
		headerRight: () => (
			<CustomHeaderButton
				iconName="md-add-circle-outline"
				title="add coffee"
				onPress={() => navData.navigation.navigate({ routeName: "AddCoffee" })}
			></CustomHeaderButton>
		),
		headerLeft: () => <MenuButton navigation={navData.navigation} />,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		height: "100%",
		alignItems: "center",
	},
});

export default CoffeesScreen;
