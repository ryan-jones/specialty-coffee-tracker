import React from "react";
import { View, TextInput, StyleSheet, KeyboardType } from "react-native";
import CustomText from "./CustomText";

interface Props {
	label: string;
	value: string | undefined;
	placeholder: string;
	onChangeText: (value: any) => void;
	styles?: object;
	keyboardType?: KeyboardType;
}

export default function CustomTextInput(props: Props) {
	const { label, value, placeholder, onChangeText, keyboardType } = props;
	const inputProps = { label, value, placeholder, onChangeText, keyboardType };
	return (
		<View style={{ ...styles.container, ...props.styles }}>
			<CustomText styles={styles.label}>{props.label}</CustomText>
			<TextInput style={styles.input} {...inputProps} />
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
