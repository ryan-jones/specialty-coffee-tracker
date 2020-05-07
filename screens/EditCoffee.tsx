import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Navigation, INote, ICoffee } from "../models/interfaces";
import CoffeeForm from "../components/Forms/Coffee";
import { useDispatch, useSelector } from "react-redux";
import {
	editSelectedCoffee,
	clearSelectedCoffee,
} from "../store/actions/coffees";
import { setSelectedNotes } from "../utils";
import FormContext from "../contexts/formContext";

interface Props {
	navigation: Navigation;
}

export default function EditCoffeeScreen(props: Props) {
	const selectedCoffee: ICoffee = useSelector(
		(state: any) => state.coffees.selectedCoffee
	);

	const dispatch = useDispatch();

	const onCancel = () => {
		dispatch(clearSelectedCoffee());
		props.navigation.goBack();
	};

	const onSave = async (notes: INote[]) => {
		try {
			dispatch(
				editSelectedCoffee({
					...selectedCoffee,
					notes: [...selectedCoffee.notes, ...setSelectedNotes(notes)],
				})
			);
			dispatch(clearSelectedCoffee());
			props.navigation.goBack();
		} catch (err) {
			Alert.alert("Coffee failed to save!");
		}
	};
	return (
		<FormContext.Provider value={{ type: "edit" }}>
			<View style={styles.screen}>
				<CoffeeForm onCancel={onCancel} onSave={onSave} />
			</View>
		</FormContext.Provider>
	);
}

EditCoffeeScreen.navigationOptions = () => {
	return {
		headerTitle: "Edit coffee",
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	scroll: {
		flex: 1,
	},
});
