import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import { COLORS } from "../../styles/colors";

interface Props {
	text: string;
}

export default function TasteDescription({ text }: Props) {
	return (
		<View style={styles.container}>
			<CustomText styles={styles.text}>{text}</CustomText>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "auto",
		minWidth: 35,
		backgroundColor: COLORS.baseColor,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		padding: 5,
		margin: 3,
	},
	text: {
		color: COLORS.white,
		fontSize: 8,
	},
});
