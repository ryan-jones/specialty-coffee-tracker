import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import RoasterListItem from "./RoasterListItem";
import { IRoaster } from "../../models/interfaces";

interface Props {
	roasters: IRoaster[];
	onSelect: (Roaster: any) => void;
}

export default function RoasterList(props: Props) {
	return (
		<View style={styles.listContainer}>
			<ScrollView style={styles.scroll}>
				{props.roasters.map((roaster) => (
					<RoasterListItem
						key={roaster.name}
						{...roaster}
						onSelect={props.onSelect}
					/>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		width: "100%",
	},
	scroll: {
		padding: 15,
		borderColor: "black",
		borderWidth: 1,
	},
});
