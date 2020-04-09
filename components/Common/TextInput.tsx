import React from "react";
import { StyleSheet, View, TextInput, KeyboardType } from "react-native";
import CustomText from "./CustomText";

interface Props {
	label: string;
	value: string;
	placeholder: string;
	keyboardType: KeyboardType;
	onChange: (value: string) => void;
}
export default function TextFormInput(props: Props) {
	return (
		<View style={styles.inputContainer}>
			<CustomText styles={styles.label}>{props.label}</CustomText>
			<TextInput
				placeholder={props.placeholder}
				style={styles.input}
				value={props.value}
				keyboardType={props.keyboardType}
				onChangeText={props.onChange}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
		marginVertical: 10,
	},
	input: {
		width: "100%",
	},
	label: {
		marginBottom: 15,
	},
});
