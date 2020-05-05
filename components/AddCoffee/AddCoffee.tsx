import React, { useReducer, useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../Common/CustomText";
import SelectBrewMethod from "../BrewMethods/AddBrewMethod/SelectBrewMethod";
import { ADD_COFFEE_STATE, addCoffeeReducer } from "./localStore";
import SelectCoffeeNotes from "../CoffeeDetails/SelectCoffeeNotes";
import BasicInfo from "../CoffeeDetails/BasicInfo";
import { useDispatch } from "react-redux";
import { COLORS } from "../../styles/colors";
import { addCoffee } from "../../store/actions/coffees";
import FormView from "../Common/FormView";

interface Props {
	navigation: any;
}

export default function AddCoffee({ navigation }: Props) {
	const [showPage, setShowPage] = useState({
		coffeeDetails: true,
		brewMethods: false,
		notes: false,
	});
	const dispatch = useDispatch();
	const [addCoffeeState, addCoffeeDispatch] = useReducer(
		addCoffeeReducer,
		ADD_COFFEE_STATE
	);
	const onCancel = () => {
		addCoffeeDispatch({ type: "CLEAR_ADD_COFFEE " });
		navigation.goBack();
	};
	const onNavigate = (pageSettings: object) => {
		setShowPage((current) => ({ ...current, ...pageSettings }));
	};

	const updateNotes = (notes: string[]) => {
		addCoffeeDispatch({ type: "UPDATE_COFFEE_NOTES", payload: notes });
	};

	return (
		<View style={styles.container}>
			{showPage.coffeeDetails && (
				<BasicInfo
					state={addCoffeeState}
					dispatch={addCoffeeDispatch}
					btnLabel="Continue"
					onPress={() =>
						onNavigate({ coffeeDetails: false, brewMethods: true })
					}
				/>
			)}
			{showPage.brewMethods && (
				<FormView
					text={{ back: "< Back to coffee details", forward: "Continue " }}
					onBack={() => onNavigate({ coffeeDetails: true, brewMethods: false })}
					onForward={() => onNavigate({ brewMethods: false, notes: true })}
					onCancel={onCancel}
				>
					<View>
						<CustomText styles={styles.text}>Already had a cup?</CustomText>
						<CustomText styles={styles.text}>
							It's optional to add some brewing details
						</CustomText>
					</View>
					<SelectBrewMethod
						dispatch={addCoffeeDispatch}
						methods={addCoffeeState.methods}
					/>
				</FormView>
			)}
			{showPage.notes && (
				<FormView
					text={{ back: "< Back to brew methods", forward: "Save Coffee " }}
					onBack={() => onNavigate({ brewMethods: true, notes: false })}
					onForward={() => {
						dispatch(addCoffee(addCoffeeState));
						navigation.goBack();
					}}
					onCancel={onCancel}
				>
					<CustomText styles={styles.text}>
						Lastly, feel free to add some flavour notes
					</CustomText>
					<SelectCoffeeNotes
						update={(notes: string[]) => updateNotes(notes)}
						notes={addCoffeeState.notes}
					/>
				</FormView>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
	},
	container: {
		flex: 1,
		borderWidth: 1,
		width: "100%",
		height: "100%",
		alignItems: "center",
		backgroundColor: COLORS.white,
		padding: 15,
	},
	header: {
		marginVertical: 15,
		textAlign: "center",
		fontSize: 18,
	},
	text: {
		textAlign: "center",
		fontSize: 18,
	},
});
