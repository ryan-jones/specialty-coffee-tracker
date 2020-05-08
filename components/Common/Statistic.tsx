import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import { COLORS } from "../../styles/colors";

interface Props {
	text: string;
	value: string | number;
}
export default function Statistic({ text, value }: Props) {
	return (
		<View style={styles.container}>
			<CustomText styles={styles.value}>{value}</CustomText>
			<CustomText styles={styles.text}>{text}</CustomText>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		paddingHorizontal: 10,
		flexWrap: "wrap",
	},
	value: {
		fontSize: 50,
		textAlign: "center",
		color: COLORS.baseColor,
	},
	text: {
		fontSize: 18,
		textAlign: "center",
	},
});
