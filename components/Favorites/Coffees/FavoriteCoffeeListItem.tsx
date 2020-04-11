import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ICoffee } from "../../../models/interfaces";
import Circle from "../../Common/Circle";
import CustomText from "../../Common/CustomText";
import { COLORS } from "../../../styles/colors";

interface Props extends ICoffee {
	onSelect: (coffee: any) => void;
}

export default function FavoriteCoffeeListItem(props: Props) {
	return (
		<TouchableOpacity onPress={() => props.onSelect(props.name)}>
			<View style={styles.itemContainer}>
				<Circle
					containerStyles={styles.circleContainer}
					circleStyles={styles.circle}
				>
					<CustomText styles={styles.text}>{props.rating}</CustomText>
				</Circle>
				<View style={styles.textContainer}>
					<CustomText styles={styles.name}>{props.name}</CustomText>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	itemContainer: {
		maxWidth: 120,
		paddingHorizontal: 5,
		alignItems: "center",
	},
	circleContainer: {
		height: 40,
		width: 40,
		borderRadius: 20,
	},
	circle: {
		height: 40,
		width: 40,
		borderRadius: 20,
		padding: 5,
	},
	textContainer: {
		width: "100%",
	},
	text: {
		fontSize: 20,
		color: COLORS.white,
	},
	name: {
		fontWeight: "bold",
		fontSize: 16,
		textAlign: "center",
		flexWrap: "wrap",
	},
});
