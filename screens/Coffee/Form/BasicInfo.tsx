import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import useFormVars from "../../../hooks/useFormVars";
import CustomText from "../../../components/Common/CustomText";
import CustomTextInput from "../../../components/Common/CustomTextInput";
import AutoCompleteInput from "../../../components/Common/AutoCompleteInput";
import SelectProcess from "../../../components/Coffee/Process/SelectProcess";
import FormButtons from "../../../components/Common/FormButtons";
import { NavigationParams } from "react-navigation";
import { clearNewCoffee } from "../../../store/actions/newCoffee";
import { COLORS } from "../../../styles/colors";

interface Props {
	navigation: NavigationParams;
}

export default function BasicInfoScreen({ navigation }: Props) {
	const type = navigation.getParam("type");
	const { coffee, basicActionCreator, locationActionCreator } = useFormVars(
		type
	);
	const dispatch = useDispatch();

	const inputChangeHandler = useCallback(
		(inputIdentifier, inputValue) => {
			dispatch(basicActionCreator(inputIdentifier, inputValue));
		},
		[dispatch]
	);

	return (
		<View style={styles.container}>
			<CustomText styles={styles.header}>
				First, let's add the basic details
			</CustomText>
			<CustomTextInput
				id="name"
				label="name*"
				placeholder="name"
				keyboardType="default"
				initialValue={coffee.name}
				invalidWarning="A name must be provided"
				required
				onChangeText={inputChangeHandler}
			/>
			<AutoCompleteInput
				location={coffee.location}
				locationActionCreator={locationActionCreator}
			/>

			<CustomTextInput
				id="description"
				label="description"
				initialValue={coffee.description}
				placeholder="Grown at an altitude of 5000m"
				onChangeText={inputChangeHandler}
			/>
			<SelectProcess
				process={coffee.process}
				basicActionCreator={basicActionCreator}
			/>
			<FormButtons
				btnTitle="Save Info"
				onForward={() => navigation.goBack()}
				onCancel={() => {
					dispatch(clearNewCoffee());
					navigation.navigate("Coffees");
				}}
				disabled={!coffee.name || !coffee.location}
			/>
		</View>
	);
}

BasicInfoScreen.navigationOptions = () => {
	return {
		headerTitle: "Basic Info",
	};
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-evenly",
		width: "100%",
		height: "100%",
		backgroundColor: COLORS.white,
		padding: 15,
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
