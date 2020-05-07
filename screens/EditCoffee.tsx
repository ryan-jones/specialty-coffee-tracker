import React, { useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Navigation, INote, ICoffee } from "../models/interfaces";
import CoffeeForm from "../components/Forms/Coffee";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedNotes } from "../utils";
import FormContext from "../contexts/formContext";
import {
	editSelectedCoffee,
	resetSelectedCoffee,
} from "../store/actions/selectedCoffee";
import CustomHeaderButton from "../components/Common/HeaderButton";

interface Props {
	navigation: Navigation;
}

export default function EditCoffeeScreen(props: Props) {
	const selectedCoffee: ICoffee = useSelector(
		(state: any) => state.selectedCoffee.edited
	);

	const dispatch = useDispatch();

	const onCancel = () => {
		dispatch(resetSelectedCoffee());
		props.navigation.goBack();
	};

	const onSave = async (notes?: INote[]) => {
		try {
			const editedCoffee = { ...selectedCoffee };
			if (Array.isArray(notes)) {
				editedCoffee.notes = [
					...selectedCoffee.notes,
					...setSelectedNotes(notes),
				];
			}
			dispatch(editSelectedCoffee(editedCoffee));
			props.navigation.goBack();
		} catch (err) {
			Alert.alert("Coffee failed to save!");
		}
	};

	useEffect(() => {
		props.navigation.setParams({ onSave });
	}, []);
	return (
		<FormContext.Provider value={{ type: "edit" }}>
			<View style={styles.screen}>
				<CoffeeForm onCancel={onCancel} onSave={onSave} />
			</View>
		</FormContext.Provider>
	);
}

EditCoffeeScreen.navigationOptions = (data: any) => {
	const onSave = data.navigation.getParam("onSave");
	return {
		headerTitle: "Edit coffee",
		headerRight: () => (
			<CustomHeaderButton
				iconName="md-save"
				title="edit coffee"
				onPress={onSave}
			></CustomHeaderButton>
		),
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
