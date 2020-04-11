import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ICoffee } from "../../models/interfaces";
import CustomText from "../Common/CustomText";
import Card from "../Common/Card";
import CoffeeNotes from "../CoffeeNotes";

interface Props extends ICoffee {
	onSelect: (coffee: any) => void;
}

export default function CoffeeListItem(props: Props) {
	const displayedNotes = props.notes.slice(0, 3);
	return (
		<TouchableOpacity onPress={() => props.onSelect(props.name)}>
			<Card styles={{ marginVertical: 10 }}>
				<View style={styles.item}>
					<View style={styles.mainContent}>
						<CustomText styles={styles.name}>{props.name}</CustomText>
						<CustomText styles={styles.text}>
							{props.region}, {props.country}
						</CustomText>
					</View>
					<View style={styles.details}>
						<CoffeeNotes
							notes={displayedNotes}
							containerStyles={styles.notes}
						/>
						<CustomText styles={styles.text}>{props.roaster}</CustomText>
					</View>
				</View>
			</Card>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	item: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	mainContent: {
		maxWidth: "50%",
		justifyContent: "space-between",
	},
	name: {
		fontWeight: "bold",
		fontSize: 18,
	},
	details: {
		maxWidth: "50%",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	text: {
		color: "grey",
	},
	notes: {
		flexWrap: "wrap",
		justifyContent: "flex-end",
	},
});
