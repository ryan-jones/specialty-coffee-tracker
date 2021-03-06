import React from "react";
import { View, Button, StyleSheet } from "react-native";

interface Props {
	onCancel: () => void;
	onForward: () => void;
	btnTitle: string;
	disabled?: any;
	onDelete?: () => void;
}

export default function FormButtons(props: Props) {
	return (
		<View style={styles.buttons}>
			<Button title="Cancel" onPress={props.onCancel} color="red" />
			<Button
				title={props.btnTitle}
				onPress={props.onForward}
				disabled={props.disabled}
			/>
			{props.onDelete && (
				<Button title="Delete Coffee" color="red" onPress={props.onDelete} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	buttons: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});
