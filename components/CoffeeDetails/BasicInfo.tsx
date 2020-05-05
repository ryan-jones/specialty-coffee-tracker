import React from "react";
import { View, Button, StyleSheet } from "react-native";
import CustomText from "../Common/CustomText";
import CustomTextInput from "../Common/CustomTextInput";
import SelectProcess from "../Process/SelectProcess";
import AutoCompleteInput from "../Common/AutoCompleteInput";
import {
	updateNewCoffeeName,
	updateNewCoffeeDescription,
} from "../../store/actions/newCoffee";
import { useDispatch, useSelector } from "react-redux";
import { ICoffee } from "../../models/interfaces";

interface Props {
	onPress: () => void;
	btnLabel: string;
}

export default function BasicInfo({ onPress, btnLabel }: Props) {
	const dispatch = useDispatch();
	const store: ICoffee = useSelector((state: any) => state.newCoffee);

	const isValid = () => store.name && store.location;
	return (
		<View style={styles.container}>
			<CustomText styles={styles.header}>
				First, let's add the basic details
			</CustomText>
			<CustomTextInput
				label="name*"
				value={store.name}
				onChangeText={(value: string) => dispatch(updateNewCoffeeName(value))}
				placeholder="name"
			/>
			<AutoCompleteInput location={store.location} />

			<CustomTextInput
				label="description"
				value={store.description}
				placeholder="Grown at an altitude of 5000m"
				onChangeText={(value: string) =>
					dispatch(updateNewCoffeeDescription(value))
				}
			/>
			<SelectProcess process={store.process} />
			<View style={styles.button}>
				<Button title={btnLabel} onPress={onPress} disabled={!isValid()} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-evenly",
		width: "100%",
		height: "100%",
	},
	header: {
		marginVertical: 15,
		textAlign: "center",
		fontSize: 18,
	},
	button: {
		marginVertical: 15,
	},
});
