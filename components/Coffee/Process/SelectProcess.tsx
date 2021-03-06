import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../../Common/CustomText";
import Process from ".";
import { useDispatch } from "react-redux";
import { Action } from "redux";

interface Props {
	process: string;
	basicActionCreator: (type: string, icon: string) => Action;
}

const icons = ["washed", "natural", "honey"];

export default function SelectProcess({ process, basicActionCreator }: Props) {
	const dispatch = useDispatch();
	return (
		<View style={styles.process}>
			<CustomText styles={styles.text}>Processing method:</CustomText>
			<View style={styles.icons}>
				{icons.map((icon) => (
					<TouchableOpacity
						key={icon}
						onPress={() => dispatch(basicActionCreator("process", icon))}
					>
						<Process name={icon} isSelected={icon === process} />
					</TouchableOpacity>
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
