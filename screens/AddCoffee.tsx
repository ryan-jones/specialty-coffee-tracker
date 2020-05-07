import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Navigation, INote } from "../models/interfaces";
import CoffeeForm from "../components/Forms/Coffee";
import { useSelector, useDispatch } from "react-redux";
import { clearNewCoffee, addNewCoffee } from "../store/actions/newCoffee";
import { setSelectedNotes } from "../utils";
import FormContext from "../contexts/formContext";

interface Props {
	navigation: Navigation;
}

export default function AddCoffeeScreen(props: Props) {
	const newCoffeeState: any = useSelector((state: any) => state.newCoffee);
	const dispatch = useDispatch();

	const onCancel = () => {
		dispatch(clearNewCoffee());
		props.navigation.goBack();
	};

	const onSave = async (notes?: INote[]) => {
		try {
			dispatch(
				addNewCoffee({
					...newCoffeeState,
					notes: notes
						? [...newCoffeeState.notes, ...setSelectedNotes(notes)]
						: newCoffeeState.notes,
				})
			);
			dispatch(clearNewCoffee());
			props.navigation.goBack();
		} catch (err) {
			Alert.alert("Coffee failed to save!");
		}
	};
	return (
		<FormContext.Provider value={{ type: "add" }}>
			<View style={styles.screen}>
				<CoffeeForm onCancel={onCancel} onSave={onSave} />
			</View>
		</FormContext.Provider>
	);
}

AddCoffeeScreen.navigationOptions = () => {
	return {
		headerTitle: "Add a new coffee",
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
