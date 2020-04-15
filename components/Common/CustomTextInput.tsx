import React from "react";
import { View, TextInput, StyleSheet, KeyboardType } from "react-native";
import CustomText from "./CustomText";

interface Props {
	label: string;
	value: string | undefined;
	placeholder: string;
	onChangeText: (value: any) => void;
	keyboardType?: KeyboardType;
}

export default function CustomTextInput(props: Props) {
	return (
		<View style={styles.container}>
			<CustomText styles={styles.label}>{props.label}</CustomText>
			<TextInput style={styles.input} {...props} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	label: {
		textAlign: "left",
	},
	input: {
		width: "100%",
		borderBottomWidth: 1,
		marginVertical: 15,
	},
});