import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import ReturnFormButton from "./ReturnFormButton";
import FormButtons from "./FormButtons";

interface Props {
	children: ReactNode;
	text: {
		forward: string;
		back: string;
	};
	onCancel: () => void;
	onBack: () => void;
	onForward: () => void;
}

export default function FormView(props: Props) {
	return (
		<View style={styles.formContainer}>
			<ReturnFormButton text={props.text.back} onPress={props.onBack} />
			{props.children}
			<FormButtons
				btnTitle={props.text.forward}
				onCancel={props.onCancel}
				onForward={props.onForward}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		width: "100%",
		height: "100%",
	},
});
