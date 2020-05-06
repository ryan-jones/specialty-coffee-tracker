import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	FlatList,
} from "react-native";
import { get } from "../../utils/http";
import { REACT_APP_API_KEY } from "react-native-dotenv";
import { useDispatch } from "react-redux";
import { updateNewCoffeeLocation } from "../../store/actions/newCoffee";
import CustomText from "./CustomText";

interface Props {
	location: string;
}
interface ISuggestion {
	description: string;
	id: string;
	placeId: string;
}
const url = "https://maps.googleapis.com/maps/api/place";

const key = REACT_APP_API_KEY;

export default function AutoCompleteInput({ location }: Props) {
	const [input, setInput] = useState(location);
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);
	const dispatch = useDispatch();

	const onChangeText = (value: string) => {
		setShowSuggestions(true);
		setInput(value);
	};

	useEffect(() => {
		if (input) {
			get(
				`${url}/autocomplete/json?input=${input}&offset=3&types=(cities)&key=${key}`
			)
				.then(({ predictions }: any) => {
					const newSuggestions = predictions.map((prediction: any) => ({
						description: prediction.description,
						id: prediction.id,
						placeId: prediction.place_id,
					}));
					setSuggestions(newSuggestions);
				})
				.catch((err) => setSuggestions([]));
		} else {
			setSuggestions([]);
		}
	}, [input]);

	useEffect(() => {
		if (location) {
			setInput(location);
		}
	}, [location]);

	const onSelectLocation = (location: ISuggestion) => {
		get(`${url}/details/json?place_id=${location.placeId}&key=${key}`)
			.then((response: any) => {
				if (showErrorMessage) setShowErrorMessage(false);
				setInput(location.description);
				dispatch(
					updateNewCoffeeLocation({
						coordinates: response.result.geometry.location,
						location: response.result.formatted_address,
					})
				);
			})
			.catch((err: Error) => {
				setInput(location.description);
				setShowErrorMessage(true);
			});
		setShowSuggestions(false);
	};

	return (
		<View style={styles.container}>
			<CustomText styles={styles.label}>Region</CustomText>
			<TextInput
				style={styles.input}
				placeholder="Sidamo, Ethiopia"
				onFocus={() => setInput("")}
				onChangeText={onChangeText}
				value={input}
			/>
			<View style={styles.suggestions}>
				{showSuggestions && (
					<FlatList
						data={suggestions}
						renderItem={({ item }) => (
							<TouchableOpacity onPress={() => onSelectLocation(item)}>
								<View style={styles.description}>
									<CustomText>{item.description}</CustomText>
								</View>
							</TouchableOpacity>
						)}
						keyExtractor={(suggestion: ISuggestion) => suggestion.id}
					/>
				)}
			</View>
			{showErrorMessage && (
				<CustomText>An error occurred while saving location data!</CustomText>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "auto",
	},
	label: {
		textAlign: "left",
	},
	input: {
		width: "100%",
		borderBottomWidth: 1,
		marginTop: 15,
	},
	suggestions: {
		marginTop: 0,
		maxHeight: 160,
		overflow: "scroll",
	},
	description: {
		paddingHorizontal: 5,
		paddingVertical: 10,
		width: "100%",
		borderBottomWidth: 1,
		borderBottomColor: "grey",
	},
});
