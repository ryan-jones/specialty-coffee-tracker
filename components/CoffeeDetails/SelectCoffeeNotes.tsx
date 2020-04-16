import React, { useState } from "react";
import { View, Button, StyleSheet, TouchableOpacity } from "react-native";
import TextEllipsis from "../Common/TextEllipsis";
import CustomTextInput from "../Common/CustomTextInput";
import { Ionicons } from "@expo/vector-icons";

interface Props {
	notes: string[];
	dispatch: any;
}

interface INote {
	name: string;
	isSelected: boolean;
}

const DEFAULT_NOTES: INote[] = [
	{ name: "chocolate", isSelected: false },
	{ name: "bourbon", isSelected: false },
	{ name: "almond", isSelected: false },
	{ name: "citrus", isSelected: false },
	{ name: "floral", isSelected: false },
];

export default function SelectCoffeeNotes({ notes }: Props) {
	const initialNotes = notes.map((note) => ({ name: note, isSelected: true }));

	const [selectedNotes, setSelectedNotes] = useState([
		...initialNotes,
		...DEFAULT_NOTES,
	]);
	const [textValue, setTextValue] = useState("");

	const updateNotes = (note: INote) => {
		const updatedNotes = selectedNotes.map((selectedNote) =>
			selectedNote === note
				? { name: note.name, isSelected: !selectedNote.isSelected }
				: selectedNote
		);
		setSelectedNotes(updatedNotes);
	};
	const addNote = () => {
		const exists = selectedNotes.find(
			({ name }) => name === textValue.toLowerCase()
		);
		if (textValue && !exists) {
			const value = { name: textValue.toLowerCase(), isSelected: true };
			setSelectedNotes((sNotes) => [...sNotes, value]);
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.input}>
				<CustomTextInput
					label="add note"
					styles={{ width: "100%" }}
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
				{selectedNotes.map((note) => (
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
		width: "100%",
		marginVertical: 15,
		flexDirection: "row",
		justifyContent: "center",
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
