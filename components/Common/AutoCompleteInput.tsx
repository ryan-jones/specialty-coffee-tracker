import React, { useState, useEffect } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { get } from "../../utils";
import { REACT_APP_API_KEY } from "react-native-dotenv";

interface Props {
	dispatch: any;
	location: string;
}
interface ISuggestion {
	description: string;
	id: string;
	placeId: string;
}
const url = "https://maps.googleapis.com/maps/api/place";

const key = REACT_APP_API_KEY;

export default function AutoCompleteInput({ location, dispatch }: Props) {
	const [input, setInput] = useState(location);
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(true);

	const onChangeText = (value: string) => {
		setShowSuggestions(true);
		setInput(value);
	};

	useEffect(() => {
		if (input) {
			get(
				`${url}/autocomplete/json?input=${input}&offset=3&types=(cities)&key=${key}`
			).then(({ predictions }: any) => {
				const newSuggestions = predictions.map((prediction: any) => ({
					description: prediction.description,
					id: prediction.id,
					placeId: prediction.place_id,
				}));
				setSuggestions(newSuggestions);
			});
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
		get(`${url}/details/json?place_id=${location.placeId}&key=${key}`).then(
			(response: any) => {
				dispatch({
					type: "UPDATE_LOCATION",
					payload: {
						coordinates: response.result.geometry.location,
						location: response.result.formatted_address,
					},
				});
				setShowSuggestions(false);
			}
		);
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
				{showSuggestions &&
					suggestions.map((suggestion: ISuggestion) => (
						<TouchableOpacity onPress={() => onSelectLocation(suggestion)}>
							<View style={styles.description}>
								<CustomText key={suggestion.id}>
									{suggestion.description}
								</CustomText>
							</View>
						</TouchableOpacity>
					))}
			</View>
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
		maxHeight: 100,
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
