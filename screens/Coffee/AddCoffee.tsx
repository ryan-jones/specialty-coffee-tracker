import React from "react";
import { View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearNewCoffee, addNewCoffee } from "../../store/actions/newCoffee";
import ListItem from "../../components/Common/ListItem";
import CustomText from "../../components/Common/CustomText";
import CustomHeaderButton from "../../components/Common/HeaderButton";
import FormButtons from "../../components/Common/FormButtons";
import { NavigationParams } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../styles/colors";
import { IState } from "../../models/interfaces";

interface Props {
	navigation: NavigationParams;
}

export default function AddCoffeeScreen(props: Props) {
	const coffee = useSelector((state: IState) => state.newCoffee);
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
			text: "Basic Info*",
			completed: Boolean(coffee.name),
			required: true,
		},
		{
			navigateTo: "BrewMethods",
			text: "Brew Methods",
			required: false,
		},
		{
			navigateTo: "CoffeeNotes",
			text: "Flavour Notes",
			required: false,
		},
	];
	return (
		<View style={styles.screen}>
			<View style={styles.options}>
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
							<View style={styles.listItemContainer}>
								<View style={styles.textContainer}>
									<CustomText styles={styles.name}>{option.text}</CustomText>
									{!option.required && (
										<CustomText styles={styles.note}>(optional)</CustomText>
									)}
								</View>
								{option.completed && (
									<Ionicons name="md-checkmark-circle" size={22} />
								)}
							</View>
						</ListItem>
					</TouchableOpacity>
				))}
			</View>
			<FormButtons
				onCancel={onCancel}
				onForward={onSave}
				disabled={!Boolean(coffee.name)}
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
		justifyContent: "space-between",
		backgroundColor: COLORS.white,
		paddingBottom: 50,
	},
	options: {
		width: "100%",
	},
	listItemContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
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
	note: {
		fontSize: 12,
	},
});
