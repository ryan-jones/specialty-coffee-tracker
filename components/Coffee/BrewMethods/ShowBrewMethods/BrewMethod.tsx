import React from "react";
import { View, StyleSheet, Image } from "react-native";
import TextEllipsis from "../../../Common/TextEllipsis";
import { COLORS } from "../../../../styles/colors";

interface Props {
	name: string;
	rating: number | string;
}

const icons: any = {
	chemex: require("../../../../assets/images/chemex.png"),
	v60: require("../../../../assets/images/v60.png"),
	espresso: require("../../../../assets/images/espresso.png"),
	frenchpress: require("../../../../assets/images/frenchpress.png"),
	syphon: require("../../../../assets/images/syphon.png"),
	aeropress: require("../../../../assets/images/aeropress.png"),
};

export default function BrewMethod({ name, rating }: Props) {
	return (
		<View>
			<View style={styles.iconContainer}>
				<Image style={styles.icon} source={icons[name]} />
			</View>
			<TextEllipsis
				text={rating}
				color="baseColor"
				containerStyles={{ backgroundColor: COLORS.baseColor }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
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
