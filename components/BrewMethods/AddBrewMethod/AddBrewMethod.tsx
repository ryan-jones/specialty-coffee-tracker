import React, { useState } from "react";
import { View, StyleSheet, ImageSourcePropType, Image } from "react-native";
import { INote } from "../../../models/interfaces";
import CustomTextInput from "../../Common/CustomTextInput";
import FormButtons from "../../Common/FormButtons";
import SelectCoffeeNotes from "../../CoffeeDetails/SelectCoffeeNotes";

interface Props {
	method: string;
	icon: ImageSourcePropType;
	addBrewMethod: (value: any) => void;
	onCancel: () => void;
}

export default function AddBrewMethod({
	method,
	icon,
	addBrewMethod,
	onCancel,
}: Props) {
	const [grams, setGrams] = useState("");
	const [water, setWater] = useState("");
	const [notes, setNotes] = useState<INote[]>([]);
	const [rating, setRating] = useState("");
	const [description, setDescription] = useState("");

	const brewCase = {
		notes: notes.map((n) => n.name),
		description,
		grams: Number(grams),
		water: Number(water),
		rating: Number(rating),
	};

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={icon} />
			<CustomTextInput
				label="# of grams"
				value={grams}
				onChangeText={setGrams}
				keyboardType="numeric"
				placeholder="0"
			/>
			<CustomTextInput
				label="ml of water"
				value={water}
				onChangeText={setWater}
				keyboardType="numeric"
				placeholder="0"
			/>
			<CustomTextInput
				label="rating"
				value={rating}
				keyboardType="numeric"
				onChangeText={setRating}
				placeholder="0"
			/>
			<CustomTextInput
				label="anything else you'd like to add"
				value={description}
				keyboardType="default"
				onChangeText={setDescription}
				placeholder="bloom at 50g for 45 seconds, followed by 100ml pours"
			/>
			<SelectCoffeeNotes notes={notes} update={setNotes} />
			<FormButtons
				btnTitle="Add method"
				onCancel={onCancel}
				onForward={() => addBrewMethod({ brewCase, name: method })}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "space-evenly",
		alignItems: "center",
		padding: 15,
	},
	image: {
		height: 50,
		width: 50,
	},
});
