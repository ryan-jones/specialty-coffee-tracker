import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import { COLORS } from "../../styles/colors";

interface Props {
	text: string | number;
	textStyles?: any;
	containerStyles?: any;
}

export default function TextEllipsis(props: Props) {
	return (
		<View style={{ ...styles.container, ...props.containerStyles }}>
			<CustomText styles={{ ...styles.text, ...props.textStyles }}>
				{props.text}
			</CustomText>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "auto",
		minWidth: 35,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		padding: 5,
		margin: 3,
	},
	text: {
		color: COLORS.white,
		fontSize: 8,
		textAlign: "center",
	},
});
