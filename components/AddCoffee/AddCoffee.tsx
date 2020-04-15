import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import CustomTextInput from "../Common/CustomTextInput";
import CustomText from "../Common/CustomText";
import SelectBrewMethod from "../BrewMethods/AddBrewMethod/SelectBrewMethod";
import { setBrewMethodRatings, setCoffeeAverageRating } from "../../utils";
import { IBrewCase, IMethod } from "../../models/interfaces";
import SelectProcess from "../Process/SelectProcess";

export default function AddCoffee() {
	const initialState: any = {
		name: "",
		region: "",
		country: "",
		process: "",
		roaster: "",
		notes: [],
		rating: "",
		description: "",
		coordinates: {
			lat: null,
			lng: null,
		},
		methods: {
			chemex: {
				rating: 0,
				cases: [],
			},
			aeropress: {
				rating: 0,
				cases: [],
			},
			v60: {
				rating: 0,
				cases: [],
			},
			espresso: {
				rating: 0,
				cases: [],
			},
			frenchpress: {
				rating: 0,
				cases: [],
			},
			syphon: {
				rating: 0,
				cases: [],
			},
		},
	};
	const reducer = (state: any, action: any) => {
		switch (action.type) {
			case "UPDATE_NAME":
				return { ...state, name: action.payload };
			case "UPDATE_REGION":
				return { ...state, region: action.payload };
			case "ADD_COFFEE_PROCESS":
				return { ...state, process: action.payload };
			case "ADD_BREW_METHOD":
				const { name, brewCase } = action.payload;
				const updatedMethod: IMethod = {
					...state.methods[name],
					cases: [...state.methods[name].cases, brewCase],
				};
				updatedMethod.rating = setBrewMethodRatings(updatedMethod);

				const updatedMethods = {
					...state.methods,
					[name]: {
						...updatedMethod,
					},
				};
				const newAverageRating: number = setCoffeeAverageRating(updatedMethods);
				return {
					...state,
					rating: newAverageRating,
					notes: [...state.notes, ...brewCase.notes],
					methods: updatedMethods,
				};
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const setDispatch = (type: string, payload: any) => {
		dispatch({ type, payload });
	};

	return (
		<View style={styles.container}>
			<CustomText>First, let's add the basic details</CustomText>
			<CustomText>{state.rating}</CustomText>
			<CustomTextInput
				label="name"
				value={state.name}
				onChangeText={(value: string) => setDispatch("UPDATE_NAME", value)}
				placeholder="name"
			/>
			<CustomTextInput
				label="region"
				value={state.region}
				onChangeText={(value: any) => setDispatch("UPDATE_REGION", value)}
				placeholder="Colombia"
			/>
			<CustomTextInput
				label="country"
				value={state.country}
				onChangeText={(value: any) => setDispatch("UPDATE_COUNTRY", value)}
				placeholder="Colombia"
			/>
			<SelectProcess process={state.process} dispatch={dispatch} />
			<CustomText styles={styles.text}>
				Have you tried out any brew methods yet?
			</CustomText>
			<SelectBrewMethod dispatch={dispatch} methods={state.methods} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		marginTop: 25,
	},
});
