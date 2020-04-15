import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../Common/CustomText";
import Process from ".";

interface Props {
	process: string;
}
const icons = ["natural", "washed", "honey"];

export default function ShowProcesses({ process }: Props) {
	return (
		<View style={styles.process}>
			<CustomText styles={styles.text}>Processing method:</CustomText>
			<View style={styles.icons}>
				{icons.map((icon) => (
					<Process key={icon} name={icon} isSelected={icon === process} />
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	process: {
		width: "100%",
		height: 110,
		alignItems: "center",
		marginVertical: 15,
	},
	icons: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-evenly",
	},
	iconContainer: {
		flexDirection: "row",
		marginTop: 15,
		width: 50,
		height: 50,
		justifyContent: "space-evenly",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	text: {
		fontSize: 18,
	},
});
