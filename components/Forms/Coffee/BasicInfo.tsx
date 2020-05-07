import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import CustomText from "../../Common/CustomText";
import CustomTextInput from "../../Common/CustomTextInput";
import SelectProcess from "../../Process/SelectProcess";
import AutoCompleteInput from "../../Common/AutoCompleteInput";
import {
	updateNewCoffeeName,
	updateNewCoffeeDescription,
} from "../../../store/actions/newCoffee";
import { useDispatch, useSelector } from "react-redux";
import { ICoffee } from "../../../models/interfaces";
import useFormVars from "../../../hooks/useFormVars";

interface Props {
	onPress: () => void;
	btnLabel: string;
}

export default function BasicInfo({ onPress, btnLabel }: Props) {
	const [isValidName, setIsValidName] = useState(true);
	const { coffee, basicActionCreator } = useFormVars();
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<CustomText styles={styles.header}>
				First, let's add the basic details
			</CustomText>
			<CustomTextInput
				label="name*"
				value={coffee.name}
				invalidWarning="A name must be provided"
				isValid={isValidName}
				onChangeText={(value: string) => {
					setIsValidName(value.trim().length > 0);
					dispatch(basicActionCreator("name", value));
				}}
				onEndEditing={() => {
					setIsValidName(coffee.name.trim().length > 0);
				}}
				placeholder="name"
			/>
			<AutoCompleteInput location={coffee.location} />

			<CustomTextInput
				label="description"
				value={coffee.description}
				placeholder="Grown at an altitude of 5000m"
				onChangeText={(value: string) =>
					dispatch(basicActionCreator("description", value))
				}
			/>
			<SelectProcess process={coffee.process} />
			<View style={styles.button}>
				<Button
					title={btnLabel}
					onPress={onPress}
					disabled={!coffee.name || !coffee.location}
				/>
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
