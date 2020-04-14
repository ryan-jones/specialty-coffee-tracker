import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { IRoaster } from "../../../models/interfaces";
import CustomText from "../../Common/CustomText";
import { COLORS } from "../../../styles/colors";

interface Props extends IRoaster {
	onSelect: (roaster: any) => void;
}

export default function FavoriteRoasterListItem(props: Props) {
	return (
		<TouchableOpacity onPress={() => props.onSelect(props.name)}>
			<View style={styles.textContainer}>
				<CustomText styles={styles.name}>{props.name}</CustomText>
				<CustomText styles={styles.address}>
					{props.city}, {props.country}
				</CustomText>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	itemContainer: {
		paddingHorizontal: 5,
		alignItems: "center",
	},
	textContainer: {
		width: "100%",
		alignItems: "center",
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
	address: {
		color: "grey",
		textAlign: "center",
		fontSize: 12,
	},
});
