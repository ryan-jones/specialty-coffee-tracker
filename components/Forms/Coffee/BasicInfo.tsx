import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../../Common/CustomText";
import CustomTextInput from "../../Common/CustomTextInput";
import SelectProcess from "../../Coffee/Process/SelectProcess";
import AutoCompleteInput from "../../Common/AutoCompleteInput";
import { useDispatch } from "react-redux";
import useFormVars from "../../../hooks/useFormVars";
import FormButtons from "../../Common/FormButtons";

interface Props {
	btnLabel: string;
	onForward: () => void;
	onCancel: () => void;
	onSave?: () => void;
}

export default function BasicInfo({
	onForward,
	onCancel,
	btnLabel,
	onSave,
}: Props) {
	const { coffee, basicActionCreator } = useFormVars();
	const dispatch = useDispatch();

	const inputChangeHandler = useCallback(
		(inputIdentifier, inputValue) => {
			dispatch(basicActionCreator(inputIdentifier, inputValue));
		},
		[dispatch]
	);

	return (
		<View style={styles.container}>
			<CustomText styles={styles.header}>
				First, let's add the basic details
			</CustomText>
			<CustomTextInput
				id="name"
				label="name*"
				placeholder="name"
				keyboardType="default"
				initialValue={coffee.name}
				invalidWarning="A name must be provided"
				required
				onChangeText={inputChangeHandler}
			/>
			<AutoCompleteInput location={coffee.location} />

			<CustomTextInput
				id="description"
				label="description"
				initialValue={coffee.description}
				placeholder="Grown at an altitude of 5000m"
				onChangeText={inputChangeHandler}
			/>
			<SelectProcess process={coffee.process} />
			<FormButtons
				btnTitle={btnLabel}
				onForward={onForward}
				onCancel={onCancel}
				disabled={!coffee.name || !coffee.location}
			/>
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
