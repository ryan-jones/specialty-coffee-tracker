import React from "react";
import { View, Button, StyleSheet } from "react-native";
import CustomText from "../Common/CustomText";
import CustomTextInput from "../Common/CustomTextInput";
import SelectProcess from "../Process/SelectProcess";

interface Props {
	onPress: () => void;
	dispatch: any;
	state: any;
	btnLabel: string;
}

export default function BasicInfo({
	onPress,
	dispatch,
	state,
	btnLabel,
}: Props) {
	const setDispatch = (type: string, payload: string) => {
		dispatch({ type, payload });
	};
	const isValid = (): boolean => {
		return state.name && state.country;
	};
	return (
		<View style={styles.container}>
			<CustomText styles={styles.header}>
				First, let's add the basic details
			</CustomText>
			<CustomTextInput
				label="name*"
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
				label="country*"
				value={state.country}
				onChangeText={(value: any) => setDispatch("UPDATE_COUNTRY", value)}
				placeholder="Colombia"
			/>
			<CustomTextInput
				label="description"
				value={state.description}
				placeholder="Grown at an altitude of 5000m"
				onChangeText={(value: any) => setDispatch("UPDATE_DESCRIPTION", value)}
			/>
			<SelectProcess process={state.process} dispatch={dispatch} />
			<View style={styles.button}>
				<Button title={btnLabel} onPress={onPress} disabled={!isValid()} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-evenly",
		width: "100%",
		height: "100%",
	},
	header: {
		marginVertical: 15,
		textAlign: "center",
		fontSize: 18,
	},
	button: {
		marginVertical: 15,
	},
});
