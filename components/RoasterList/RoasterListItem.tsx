import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { IRoaster } from "../../models/interfaces";
import CustomText from "../Common/CustomText";
import ListItem from "../Common/ListItem";
import { COLORS } from "../../styles/colors";
import Circle from "../Common/Circle";

interface Props extends IRoaster {
	onSelect: (coffee: any) => void;
}

export default function RoasterListItem(props: Props) {
	return (
		<TouchableOpacity onPress={() => props.onSelect(props.name)}>
			<ListItem>
				<View style={styles.item}>
					<View style={styles.textContainer}>
						<CustomText styles={styles.name}>{props.name}</CustomText>
						<CustomText styles={styles.region}>
							{props.city}, {props.country}
						</CustomText>
					</View>
					<View style={styles.rating}>
						<Circle
							containerStyles={styles.circleContainer}
							circleStyles={styles.circle}
						>
							<CustomText styles={styles.text}>{props.rating}</CustomText>
						</Circle>
					</View>
				</View>
			</ListItem>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	item: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rating: {
		justifyContent: "center",
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
		alignItems: "flex-start",
	},
	text: {
		fontSize: 20,
		color: COLORS.white,
	},
	name: {
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
		flexWrap: "wrap",
	},
	region: {
		fontSize: 12,
		textAlign: "center",
		color: "grey",
	},
});
