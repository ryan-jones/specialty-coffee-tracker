import React, { useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import CoffeeList from "../components/CoffeeList/CoffeeList";
import { ICoffee, Navigation } from "../models/interfaces";
import CustomHeaderButton from "../components/Common/HeaderButton";
import MenuButton from "../components/Common/MenuButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleCoffeeModal } from "../store/actions/coffee";
import CardModal from "../components/Common/CardModal";
import AddCoffee from "../components/AddCoffee/AddCoffee";

interface Props {
	navigation: Navigation;
}

const CoffeesScreen = (props: Props) => {
	const { allCoffees, showModal } = useSelector((state: any) => state.coffees);
	const dispatch = useDispatch();

	const toggleModalHandler = useCallback(() => {
		dispatch(toggleCoffeeModal());
	}, [dispatch]);

	useEffect(() => {
		props.navigation.setParams({ toggleModal: toggleModalHandler });
	}, [toggleModalHandler]);

	const onSelectCoffee = (coffee: ICoffee) => {
		props.navigation.navigate({
			routeName: "CoffeeDetails",
			params: { coffee },
		});
	};
	return (
		<View style={styles.screen}>
			<CardModal visible={showModal}>
				<AddCoffee />
			</CardModal>
			<CoffeeList coffees={allCoffees} onSelect={onSelectCoffee} />
		</View>
	);
};

CoffeesScreen.navigationOptions = (navData: any) => {
	return {
		title: "My Coffees",
		headerRight: () => (
			<CustomHeaderButton
				iconName="ios-add-circle-outline"
				title="add coffee"
				onPress={navData.navigation.getParam("toggleModal")}
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
