import React from "react";
import { View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import {
	editSelectedCoffee,
	resetSelectedCoffee,
	deleteSelectedCoffee,
	clearSelectedCoffee,
} from "../../store/actions/selectedCoffee";
import CustomHeaderButton from "../../components/Common/HeaderButton";
import ListItem from "../../components/Common/ListItem";
import CustomText from "../../components/Common/CustomText";
import FormButtons from "../../components/Common/FormButtons";
import { NavigationParams } from "react-navigation";

interface Props {
	navigation: NavigationParams;
}

export default function EditCoffeeScreen(props: Props) {
	const dispatch = useDispatch();

	const onCancel = () => {
		dispatch(resetSelectedCoffee());
		props.navigation.goBack();
	};

	const onSave = async () => {
		try {
			await dispatch(editSelectedCoffee());
			dispatch(resetSelectedCoffee());
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
			navigateTo: "BrewMethod",
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
					style={{ width: "100%" }}
					onPress={() =>
						props.navigation.navigate({
							routeName: option.navigateTo,
							params: { type: "edit" },
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
				onDelete={async () => {
					await dispatch(deleteSelectedCoffee());
					dispatch(clearSelectedCoffee());
					Alert.alert("Coffee successfully deleted!");
					props.navigation.navigate("Coffees");
				}}
				btnTitle="Save coffee"
			/>
		</View>
	);
}

EditCoffeeScreen.navigationOptions = (data: any) => {
	// const onSave = data.navigation.getParam("onSave");
	return {
		headerTitle: "Edit coffee",
		headerRight: () => (
			<CustomHeaderButton
				iconName="md-save"
				title="edit coffee"
				onPress={() => {}}
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
