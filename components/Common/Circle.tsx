import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, GRADIENTS } from "../../styles/colors";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
	children: any;
	containerStyles?: any;
	circleStyles?: any;
}

export default function Circle(props: Props) {
	return (
		<View style={{ ...styles.container, ...props.containerStyles }}>
			<LinearGradient
				colors={GRADIENTS.baseColor}
				style={{ ...styles.circle, ...props.circleStyles }}
			>
				{props.children}
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 140,
		width: 140,
		backgroundColor: COLORS.white,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 70,
		borderWidth: 1,
	},
	circle: {
		height: 120,
		width: 120,
		alignItems: "center",
		backgroundColor: COLORS.baseColor,
		borderRadius: 60,
	},
});
