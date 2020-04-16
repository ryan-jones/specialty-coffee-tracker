import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ICoffee } from "../../models/interfaces";
import CustomText from "../Common/CustomText";
import { COLORS } from "../../styles/colors";
import Circle from "../Common/Circle";
import CoffeeNotes from "../CoffeeDetails/CoffeeNotes";
import ListItem from "../Common/ListItem";

interface Props extends ICoffee {
	onSelect: (coffee: any) => void;
}

export default function CoffeeListItem(props: Props) {
	const selectNotes = props.notes.slice(0, 3);
	return (
		<TouchableOpacity onPress={() => props.onSelect(props.name)}>
			<ListItem>
				<View style={styles.item}>
					<View style={styles.textContainer}>
						<CustomText styles={styles.name}>{props.name}</CustomText>
						<CustomText styles={styles.region}>
							{props.region}, {props.country}
						</CustomText>
						<CoffeeNotes
							notes={selectNotes}
							containerStyles={styles.notes}
							noteStyles={styles.note}
						/>
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
	notes: {
		marginHorizontal: 0,
		marginTop: 20,
		marginBottom: 0,
		width: "auto",
	},
	note: {
		margin: 0,
		marginRight: 5,
	},
});
