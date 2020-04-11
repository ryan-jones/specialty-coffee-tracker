import React from "react";
import { View, StyleSheet, Image } from "react-native";
import CustomText from "../Common/CustomText";
import TextEllipsis from "../Common/TextEllipsis";
import { COLORS } from "../../styles/colors";

interface Props {
	name: string;
	rating: number;
}

const icons: any = {
	chemex: {
		selected: require("../../assets/images/chemex.png"),
		unselected: require("../../assets/images/chemex.png"),
	},
	v60: {
		selected: require("../../assets/images/v60-select.png"),
		unselected: require("../../assets/images/v60.png"),
	},
	espresso: {
		selected: require("../../assets/images/espresso-select.png"),
		unselected: require("../../assets/images/espresso.png"),
	},
	frenchPress: {
		selected: require("../../assets/images/frenchpress-select.png"),
		unselected: require("../../assets/images/frenchpress.png"),
	},
	syphon: {
		selected: require("../../assets/images/syphon-select.png"),
		unselected: require("../../assets/images/syphon.png"),
	},
	aeropress: {
		selected: require("../../assets/images/aeropress-select.png"),
		unselected: require("../../assets/images/aeropress.png"),
	},
};

export default function BrewMethod({ name, rating }: Props) {
	const setIcon = () => {
		return rating > 0 ? icons[name].selected : icons[name].unselected;
	};
	const setBackgroundColor = () => {
		return { backgroundColor: rating > 0 ? COLORS.baseColor : COLORS.black };
	};
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Image style={styles.icon} source={setIcon()} />
			</View>
			<TextEllipsis text={rating} containerStyles={setBackgroundColor()} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	iconContainer: {
		width: 50,
		height: 50,
		marginBottom: 5,
	},
	icon: {
		height: "100%",
		width: "100%",
	},
});
