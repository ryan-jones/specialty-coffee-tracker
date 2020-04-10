import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ICoffee } from "../../../models/interfaces";
import CustomText from "../../Common/CustomText";
import Card from "../../Common/Card";
import TasteDescription from "../../Common/TasteDescription";

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
						<CustomText styles={{ fontWeight: "bold", fontSize: 18 }}>
							{props.name}
						</CustomText>
						<CustomText styles={styles.secondaryTxt}>
							{props.region}, {props.country}
						</CustomText>
					</View>
					<View style={styles.details}>
						<View style={styles.notes}>
							{displayedNotes.map((note: string) => (
								<TasteDescription key={note} text={note} />
							))}
						</View>
						<CustomText styles={styles.secondaryTxt}>
							{props.roaster}
						</CustomText>
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
	details: {
		maxWidth: "50%",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	secondaryTxt: {
		color: "grey",
	},
	notes: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: "100%",
		justifyContent: "flex-end",
	},
});
