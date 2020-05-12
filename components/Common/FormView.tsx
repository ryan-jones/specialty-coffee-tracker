import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import FormButtons from "./FormButtons";

interface Props {
	children: ReactNode;
	text: string;
	onCancel: () => void;
	onForward: () => void;
}

export default function FormView(props: Props) {
	return (
		<View style={styles.formContainer}>
			{props.children}
			<FormButtons
				btnTitle={props.text}
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
