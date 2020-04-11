import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

interface Props {
	children: any;
	containerStyles?: any;
	circleStyles?: any;
}

export default function Circle(props: Props) {
	return (
		<View style={styles.container}>
			<View style={styles.circle}>{props.children}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: -80,
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
