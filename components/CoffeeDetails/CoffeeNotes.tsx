import React from "react";
import { View, StyleSheet } from "react-native";
import TasteDescription from "../Common/TasteDescription";

interface Props {
	notes: string[];
	containerStyles?: object;
	noteStyles?: object;
}

export default function CoffeeNotes(props: Props) {
	return (
		<View style={{ ...styles.container, ...props.containerStyles }}>
			{props.notes.map((note: string) => (
				<TasteDescription
					key={note}
					text={note}
					noteStyles={props.noteStyles}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-evenly",
		margin: 15,
	},
});
