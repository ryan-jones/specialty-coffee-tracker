import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../Common/CustomText";
import SelectBrewMethod from "../BrewMethods/AddBrewMethod/SelectBrewMethod";
import SelectCoffeeNotes from "../CoffeeDetails/SelectCoffeeNotes";
import BasicInfo from "../CoffeeDetails/BasicInfo";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../styles/colors";
import FormView from "../Common/FormView";
import { INote } from "../../models/interfaces";
import { addNewCoffee } from "../../store/actions/coffees";
import { clearNewCoffee } from "../../store/actions/newCoffee";
import { setSelectedNotes } from "../../utils";

interface Props {
	navigation: any;
}

export default function AddCoffee({ navigation }: Props) {
	const [showPage, setShowPage] = useState({
		coffeeDetails: true,
		brewMethods: false,
		notes: false,
	});
	const [notes, setNotes] = useState<INote[]>([]);
	const dispatch = useDispatch();
	const newCoffeeState: any = useSelector((state: any) => state.newCoffee);

	const onCancel = () => {
		dispatch(clearNewCoffee());
		navigation.goBack();
	};
	const onNavigate = (pageSettings: object) => {
		setShowPage((current) => ({ ...current, ...pageSettings }));
	};

	return (
		<View style={styles.container}>
			{showPage.coffeeDetails && (
				<BasicInfo
					btnLabel="Continue"
					stateSlice="newCoffee"
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
					<SelectBrewMethod />
				</FormView>
			)}
			{showPage.notes && (
				<FormView
					text={{ back: "< Back to brew methods", forward: "Save Coffee " }}
					onBack={() => onNavigate({ brewMethods: true, notes: false })}
					onForward={() => {
						dispatch(
							addNewCoffee({
								...newCoffeeState,
								notes: setSelectedNotes(notes),
							})
						);
						dispatch(clearNewCoffee());
						navigation.goBack();
					}}
					onCancel={onCancel}
				>
					<CustomText styles={styles.text}>
						Lastly, feel free to add some flavour notes
					</CustomText>
					<SelectCoffeeNotes update={setNotes} notes={notes} />
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
