import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import { COLORS, GRADIENTS } from "../../styles/colors";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
	text: string | number;
	color: string;
	textStyles?: any;
	containerStyles?: any;
}

export default function TextEllipsis(props: Props) {
	return (
		<LinearGradient
			colors={GRADIENTS[props.color]}
			style={{ ...styles.container, ...props.containerStyles }}
		>
			<CustomText styles={{ ...styles.text, ...props.textStyles }}>
				{props.text}
			</CustomText>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "auto",
		minWidth: 35,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		padding: 5,
		margin: 3,
	},
	text: {
		color: COLORS.white,
		fontSize: 12,
		textAlign: "center",
	},
});
