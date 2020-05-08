import React, { useReducer, useEffect } from "react";
import { View, TextInput, StyleSheet, KeyboardType } from "react-native";
import CustomText from "./CustomText";

interface Props {
	id: string;
	label: string;
	placeholder: string;
	onChangeText: (id: string, value: string, validity: boolean) => void;
	initialValue?: string;
	autoCapitalize?: any;
	minLength?: number;
	secureTextEntry?: boolean;
	required?: boolean;
	invalidWarning?: string;
	isValid?: boolean;
	styles?: object;
	keyboardType?: KeyboardType;
	onEndEditing?: () => void;
}

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state: any, action: any) => {
	switch (action.type) {
		case INPUT_CHANGE:
			return {
				...state,
				value: action.value,
				isValid: action.isValid,
			};
		case INPUT_BLUR:
			return {
				...state,
				touched: true,
			};
		default:
			return state;
	}
};

export default function CustomTextInput(props: Props) {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: props.initialValue ? props.initialValue : "",
		isValid: props.isValid,
		touched: false,
	});

	useEffect(() => {
		if (inputState.touched) {
			props.onChangeText(props.id, inputState.value, inputState.isValid);
		}
	}, [inputState, props.onChangeText, props.id]);

	const textChangeHandler = (text: string) => {
		const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let isValid = true;
		if (props.required && text.trim().length === 0) {
			isValid = false;
		}
		if (
			props.keyboardType === "email-address" &&
			!emailRegex.test(text.toLowerCase())
		) {
			isValid = false;
		}
		// if (props.min != null && +text < props.min) {
		//   isValid = false;
		// }
		// if (props.max != null && +text > props.max) {
		//   isValid = false;
		// }
		// if (props.minLength != null && text.length < props.minLength) {
		//   isValid = false;
		// }
		dispatch({ type: INPUT_CHANGE, value: text, isValid });
	};

	const lostFocusHandler = () => {
		dispatch({ type: INPUT_BLUR });
	};

	const inputProps = {
		label: props.label,
		value: inputState.value,
		placeholder: props.placeholder,
		onChangeText: textChangeHandler,
		onBlur: lostFocusHandler,
		keyboardType: props.keyboardType,
		onEndEditing: props.onEndEditing,
		required: props.required,
		secureTextEntry: props.secureTextEntry,
		minLength: props.minLength,
		autoCapitalize: props.autoCapitalize || "none",
	};
	return (
		<View style={{ ...styles.container, ...props.styles }}>
			<CustomText styles={styles.label}>{props.label}</CustomText>
			<TextInput style={styles.input} {...inputProps} />
			{!inputState.isValid && inputState.touched && (
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
