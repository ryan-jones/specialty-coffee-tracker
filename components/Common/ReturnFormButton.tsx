import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "./CustomText";

interface Props {
	text: string;
	onPress: () => void;
}

export default function ReturnFormButton({ text, onPress }: Props) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<CustomText styles={styles.return}>{text}</CustomText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "flex-start",
		marginBottom: 25,
	},
	return: {
		textAlign: "center",
	},
});
