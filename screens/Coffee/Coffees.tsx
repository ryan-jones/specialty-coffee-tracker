import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import CoffeeList from "../../components/Coffee/CoffeeList";
import { ICoffee, IState } from "../../models/interfaces";
import CustomHeaderButton from "../../components/Common/HeaderButton";
import MenuButton from "../../components/Common/MenuButton";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCoffee } from "../../store/actions/selectedCoffee";
import { fetchCoffees } from "../../store/actions/coffees";
import WarningMessage from "../../components/Common/WarningMessage";
import { NavigationParams } from "react-navigation";

interface Props {
	navigation: NavigationParams;
}

const CoffeesScreen = (props: Props) => {
	const dispatch = useDispatch();
	const coffees = useSelector((state: IState) => state.coffees);

	const fetchCoffeeList = () => {
		dispatch(fetchCoffees());
	};

	useEffect(() => {
		fetchCoffeeList();
		const pageLoad = props.navigation.addListener("willFocus", fetchCoffeeList);
		return () => pageLoad;
	}, []);

	const onSelectCoffee = (coffee: ICoffee) => {
		dispatch(setSelectedCoffee(coffee));
		props.navigation.navigate({
			routeName: "CoffeeDetails",
			params: {
				coffeeName: coffee.name,
			},
		});
	};

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
		<View style={styles.screen}>
			<CoffeeList onSelect={onSelectCoffee} coffees={coffees.allCoffees} />
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
				onPress={() => {
					navData.navigation.navigate({ routeName: "AddCoffee" });
				}}
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
	warning: {
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
});

export default CoffeesScreen;
