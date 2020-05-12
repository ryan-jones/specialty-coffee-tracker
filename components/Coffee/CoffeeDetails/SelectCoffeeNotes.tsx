import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import TextEllipsis from "../../Common/TextEllipsis";
import { Ionicons } from "@expo/vector-icons";
import { INote } from "../../../models/interfaces";

interface Props {
	notes: string[];
	update: (notes: INote[]) => any;
}

const DEFAULT_NOTES: INote[] = [
	{ name: "chocolate", isSelected: false },
	{ name: "bourbon", isSelected: false },
	{ name: "almond", isSelected: false },
	{ name: "citrus", isSelected: false },
	{ name: "floral", isSelected: false },
];

export default function SelectCoffeeNotes({ notes, update }: Props) {
	const [textValue, setTextValue] = useState("");

	const selectableNotes: INote[] = notes.map((note: string) => ({
		name: note,
		isSelected: true,
	}));
	const updatedDefaultNotes: INote[] = DEFAULT_NOTES.map((note: INote) => {
		return {
			...note,
			isSelected: Boolean(
				selectableNotes.find((item: INote) => item.name === note.name)
			),
		};
	});
	const selectedNotes: INote[] = [
		...updatedDefaultNotes,
		...selectableNotes,
	].reduce((list: INote[], current: INote) => {
		return list.find((item: INote) => item.name === current.name)
			? list
			: list.concat(current);
	}, []);

	const updateNotes = (note: INote) => {
		const updatedNotes = selectedNotes.map((selectedNote: INote) =>
			selectedNote.name === note.name
				? { name: note.name, isSelected: !selectedNote.isSelected }
				: selectedNote
		);
		update(updatedNotes);
	};
	const addNote = () => {
		const exists = selectedNotes.find(
			({ name }: INote) => name === textValue.toLowerCase()
		);
		if (textValue && !exists) {
			const value = { name: textValue.toLowerCase(), isSelected: true };
			update([...selectedNotes, value]);
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.input}>
				<TextInput
					style={{ width: "100%" }}
					value={textValue}
					placeholder="chocolate"
					onChangeText={setTextValue}
				/>

				<View style={styles.button}>
					<TouchableOpacity onPress={addNote}>
						<Ionicons name="md-add-circle-outline" size={22} />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.notes}>
				{selectedNotes.map((note: INote) => (
					<TouchableOpacity key={note.name} onPress={() => updateNotes(note)}>
						<TextEllipsis
							text={note.name}
							color={note.isSelected ? "baseColor" : "black"}
						/>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		justifyContent: "space-evenly",
		alignItems: "center",
		padding: 15,
	},
	input: {
		marginVertical: 15,
		flexDirection: "row",
		justifyContent: "center",
	},
	label: {
		margin: 15,
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
	},
	notes: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		flexWrap: "wrap",
	},
});
