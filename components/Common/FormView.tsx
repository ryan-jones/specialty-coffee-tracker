import React, { ReactNode } from "react";
import { View, StyleSheet, Button } from "react-native";
import ReturnFormButton from "./ReturnFormButton";
import FormButtons from "./FormButtons";
import useFormVars from "../../hooks/useFormVars";

interface Props {
	children: ReactNode;
	text: {
		forward: string;
		back: string;
	};
	onCancel: () => void;
	onBack: () => void;
	onForward: () => void;
	onSave?: () => void;
}

export default function FormView(props: Props) {
	const { type } = useFormVars();
	return (
		<View style={styles.formContainer}>
			<ReturnFormButton text={props.text.back} onPress={props.onBack} />
			{props.children}
			<FormButtons
				btnTitle={props.text.forward}
				onCancel={props.onCancel}
				onForward={props.onForward}
			/>
			{type === "edit" && props.onSave && (
				<Button title="Save Changes" onPress={props.onSave} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		width: "100%",
		height: "100%",
	},
});
