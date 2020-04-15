import React, { useState } from "react";
import {
	View,
	StyleSheet,
	ImageSourcePropType,
	Image,
	Button,
} from "react-native";
import CustomTextInput from "../../Common/CustomTextInput";

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
	const [notes, setNotes] = useState([]);
	const [rating, setRating] = useState("");
	const [description, setDescription] = useState("");

	const brewCase = {
		notes,
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
			<Button
				title="Add brew method"
				onPress={() => addBrewMethod({ brewCase, name: method })}
			/>
			<Button title="cancel" onPress={onCancel} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
	},
	image: {
		height: 50,
		width: 50,
	},
});
