import React from "react";
import SelectCoffeeNotes from "../../../components/Coffee/CoffeeDetails/SelectCoffeeNotes";
import { View, StyleSheet } from "react-native";
import FormView from "../../../components/Common/FormView";
import CustomText from "../../../components/Common/CustomText";
import useFormVars from "../../../hooks/useFormVars";
import { useDispatch } from "react-redux";
import { clearNewCoffee } from "../../../store/actions/newCoffee";
import { NavigationParams } from "react-navigation";
import { INote } from "../../../models/interfaces";
import { COLORS } from "../../../styles/colors";

interface Props {
	navigation: NavigationParams;
}

export function CoffeeNotesScreen(props: Props) {
	const type = props.navigation.getParam("type");
	const { coffee, notesActionCreator } = useFormVars(type);
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<FormView
				text="Save coffee notes"
				onForward={() => props.navigation.goBack()}
				onCancel={() => {
					dispatch(clearNewCoffee());
					props.navigation.navigate("Coffees");
				}}
			>
				<View>
					<CustomText styles={styles.text}>Already had a cup?</CustomText>
					<CustomText styles={styles.text}>
						It's optional to add some brewing details
					</CustomText>
				</View>
				<SelectCoffeeNotes
					notes={coffee.notes}
					update={(notes: INote[]) => dispatch(notesActionCreator(notes))}
				/>
			</FormView>
		</View>
	);
}

CoffeeNotesScreen.navigationOptions = () => {
	return {
		headerTitle: "Basic Info",
	};
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-evenly",
		width: "100%",
		height: "100%",
		backgroundColor: COLORS.white,
		padding: 15,
	},
	text: {
		textAlign: "center",
		fontSize: 18,
	},
});
