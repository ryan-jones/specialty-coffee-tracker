import React from "react";
import { View, StyleSheet, Image } from "react-native";
import CustomText from "./Common/CustomText";
import { COLORS } from "../styles/colors";

interface Props {
	process: string;
}

const icons: any = {
	natural: {
		selected: require("../assets/images/sun-select.png"),
		unselected: require("../assets/images/sun.png"),
	},
	washed: {
		selected: require("../assets/images/washed-select.png"),
		unselected: require("../assets/images/washed.png"),
	},
	honey: {
		selected: require("../assets/images/honey-select.png"),
		unselected: require("../assets/images/honey.png"),
	},
};

export default function Process({ process }: Props) {
	const setIcon = (key: string) => {
		return key === process ? icons[key].selected : icons[key].unselected;
	};
	const setTextStyles = (key: string) => {
		return {
			textAlign: "center",
			color: key === process ? COLORS.baseColor : COLORS.black,
		};
	};
	return (
		<View style={styles.process}>
			<CustomText styles={styles.text}>Processing method:</CustomText>
			<View style={styles.icons}>
				{Object.keys(icons).map((key) => (
					<View key={key} style={styles.iconContainer}>
						<View style={{ width: "100%" }}>
							<Image style={styles.image} source={setIcon(key)} />
							<CustomText styles={setTextStyles(key)}>{key}</CustomText>
						</View>
					</View>
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
