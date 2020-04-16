import React, { ReactNode } from "react";
import { View, Button, StyleSheet } from "react-native";
import ReturnFormButton from "../Common/ReturnFormButton";

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
			<View style={styles.buttons}>
				<Button title="Cancel" onPress={props.onCancel} color="red" />
				<Button title={props.text.forward} onPress={props.onForward} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		width: "100%",
		height: "100%",
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});
