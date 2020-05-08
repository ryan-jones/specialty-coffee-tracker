import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import BasicInfo from "./BasicInfo";
import FormView from "../../Common/FormView";
import CustomText from "../../Common/CustomText";
import SelectBrewMethod from "../../Coffee/BrewMethods/AddBrewMethod/SelectBrewMethod";
import SelectCoffeeNotes from "../../Coffee/CoffeeDetails/SelectCoffeeNotes";
import { INote } from "../../../models/interfaces";
import { COLORS } from "../../../styles/colors";

interface Props {
	onCancel: () => void;
	onSave: (notes?: INote[]) => void;
}
export default function CoffeeForm({ onCancel, onSave }: Props) {
	const [showPage, setShowPage] = useState({
		coffeeDetails: true,
		brewMethods: false,
		notes: false,
	});
	const [notes, setNotes] = useState<INote[]>([]);

	const onNavigate = (pageSettings: object) => {
		setShowPage((current) => ({ ...current, ...pageSettings }));
	};

	return (
		<View style={styles.container}>
			{showPage.coffeeDetails && (
				<BasicInfo
					btnLabel="Continue"
					onForward={() =>
						onNavigate({ coffeeDetails: false, brewMethods: true })
					}
					onCancel={onCancel}
					onSave={onSave}
				/>
			)}
			{showPage.brewMethods && (
				<FormView
					text={{ back: "< Back to coffee details", forward: "Continue " }}
					onBack={() => onNavigate({ coffeeDetails: true, brewMethods: false })}
					onForward={() => onNavigate({ brewMethods: false, notes: true })}
					onCancel={onCancel}
					onSave={onSave}
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
					onForward={() => onSave(notes)}
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
