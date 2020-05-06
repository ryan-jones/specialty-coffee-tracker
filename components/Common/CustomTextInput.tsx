import React from "react";
import { View, TextInput, StyleSheet, KeyboardType } from "react-native";
import CustomText from "./CustomText";

interface Props {
	label: string;
	value: string | undefined;
	placeholder: string;
	onChangeText: (value: any) => void;
	invalidWarning?: string;
	isValid?: boolean;
	styles?: object;
	keyboardType?: KeyboardType;
	onEndEditing?: () => void;
}

export default function CustomTextInput(props: Props) {
	const inputProps = {
		label: props.label,
		value: props.value,
		placeholder: props.placeholder,
		onChangeText: props.onChangeText,
		keyboardType: props.keyboardType,
		onEndEditing: props.onEndEditing,
	};
	return (
		<View style={{ ...styles.container, ...props.styles }}>
			<CustomText styles={styles.label}>{props.label}</CustomText>
			<TextInput style={styles.input} {...inputProps} />
			{props.invalidWarning && !props.isValid && (
				<CustomText styles={styles.warning}>{props.invalidWarning}</CustomText>
			)}
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
		marginTop: 15,
	},
	warning: {
		color: "red",
	},
});
