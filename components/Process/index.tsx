import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import CustomText from "../Common/CustomText";
import { COLORS } from "../../styles/colors";

interface Props {
	name: string;
	isSelected: boolean;
}

const icons: any = {
	natural: {
		selected: require("../../assets/images/sun-select.png"),
		unselected: require("../../assets/images/sun.png"),
	},
	washed: {
		selected: require("../../assets/images/washed-select.png"),
		unselected: require("../../assets/images/washed.png"),
	},
	honey: {
		selected: require("../../assets/images/honey-select.png"),
		unselected: require("../../assets/images/honey.png"),
	},
};

export default function Process({ name, isSelected }: Props) {
	const setIcon = (): ImageSourcePropType => {
		return isSelected ? icons[name].selected : icons[name].unselected;
	};
	const setTextStyles = (): object => {
		return {
			textAlign: "center",
			color: isSelected ? COLORS.baseColor : COLORS.black,
		};
	};
	return (
		<View style={styles.iconContainer}>
			<View style={{ width: "100%" }}>
				<Image style={styles.image} source={setIcon()} />
				<CustomText styles={setTextStyles()}>{name}</CustomText>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	iconContainer: {
		flexDirection: "row",
		marginVertical: 15,
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
