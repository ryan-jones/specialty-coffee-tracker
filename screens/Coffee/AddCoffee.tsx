import React from "react";
import { View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Navigation } from "../../models/interfaces";
import { useDispatch } from "react-redux";
import { clearNewCoffee, addNewCoffee } from "../../store/actions/newCoffee";
import ListItem from "../../components/Common/ListItem";
import CustomText from "../../components/Common/CustomText";
import CustomHeaderButton from "../../components/Common/HeaderButton";
import FormButtons from "../../components/Common/FormButtons";

interface Props {
	navigation: Navigation;
}

export default function AddCoffeeScreen(props: Props) {
	const dispatch = useDispatch();

	const onCancel = () => {
		dispatch(clearNewCoffee());
		props.navigation.goBack();
	};

	const onSave = async () => {
		try {
			await dispatch(addNewCoffee());
			dispatch(clearNewCoffee());
			props.navigation.goBack();
		} catch (err) {
			Alert.alert("Coffee failed to save!");
		}
	};
	const options = [
		{
			navigateTo: "BasicInfo",
			text: "Basic Info",
		},
		{
			navigateTo: "BrewMethods",
			text: "Brew Methods",
		},
		{
			navigateTo: "CoffeeNotes",
			text: "Flavour Notes",
		},
	];
	return (
		<View style={styles.screen}>
			{options.map((option) => (
				<TouchableOpacity
					key={option.text}
					style={{ width: "100%" }}
					onPress={() =>
						props.navigation.navigate({
							routeName: option.navigateTo,
							params: { type: "add" },
						})
					}
				>
					<ListItem>
						<View style={styles.textContainer}>
							<CustomText styles={styles.name}>{option.text}</CustomText>
						</View>
					</ListItem>
				</TouchableOpacity>
			))}
			<FormButtons
				onCancel={onCancel}
				onForward={onSave}
				btnTitle="Save coffee"
			/>
		</View>
	);
}

AddCoffeeScreen.navigationOptions = (data: any) => {
	return {
		headerTitle: "Add a new coffee",
		headerRight: () => (
			<CustomHeaderButton
				iconName="md-camera"
				title="edit coffee"
				onPress={() => {
					data.navigation.navigate({ routeName: "EditCoffee" });
				}}
			></CustomHeaderButton>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	item: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	textContainer: {
		alignItems: "flex-start",
		marginVertical: 50,
	},

	name: {
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
		flexWrap: "wrap",
	},
});
