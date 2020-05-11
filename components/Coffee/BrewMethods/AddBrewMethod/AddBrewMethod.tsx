import React, { useState } from "react";
import {
	View,
	StyleSheet,
	ImageSourcePropType,
	Image,
	TextInput,
} from "react-native";
import { INote } from "../../../../models/interfaces";
import CustomText from "../../../Common/CustomText";
import FormButtons from "../../../Common/FormButtons";
import SelectCoffeeNotes from "../../CoffeeDetails/SelectCoffeeNotes";
import { setSelectedNotes } from "../../../../utils";
import WarningMessage from "../../../Common/WarningMessage";

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
	const [rating, setRating] = useState("0");
	const [description, setDescription] = useState("");

	const brewCase = {
		notes: setSelectedNotes(notes),
		description,
		grams: Number(grams),
		water: Number(water),
		rating: Number(rating),
	};

	const isValid = (): boolean => {
		return Boolean(brewCase.grams && brewCase.water && brewCase.rating <= 5);
	};

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={icon} />
			<CustomText># of grams</CustomText>
			<TextInput
				value={grams}
				onChangeText={setGrams}
				keyboardType="numeric"
				placeholder="0"
			/>
			<CustomText>ml of water</CustomText>
			<TextInput
				value={water}
				onChangeText={setWater}
				keyboardType="numeric"
				placeholder="0"
			/>
			<CustomText>rating</CustomText>
			<TextInput
				value={rating}
				keyboardType="numeric"
				onChangeText={setRating}
				placeholder="0"
			/>
			{brewCase.rating > 5 && (
				<WarningMessage>Ratings are between 0-5</WarningMessage>
			)}
			<CustomText>anything else you'd like to add</CustomText>
			<TextInput
				value={description}
				keyboardType="default"
				onChangeText={setDescription}
				placeholder="bloom at 50g for 45 seconds, followed by 100ml pours"
			/>
			<SelectCoffeeNotes notes={notes} update={setNotes} />
			<FormButtons
				btnTitle="Add method"
				onCancel={onCancel}
				disabled={!isValid()}
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
