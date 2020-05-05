import React from "react";
import { View, Button, StyleSheet } from "react-native";

interface Props {
	onCancel: () => void;
	onForward: () => void;
	btnTitle: string;
}

export default function FormButtons(props: Props) {
	return (
		<View style={styles.buttons}>
			<Button title="Cancel" onPress={props.onCancel} color="red" />
			<Button title={props.btnTitle} onPress={props.onForward} />
		</View>
	);
}

const styles = StyleSheet.create({
	buttons: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});
