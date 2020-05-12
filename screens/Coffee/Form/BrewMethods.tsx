import React from "react";
import FormView from "../../../components/Common/FormView";
import { View, StyleSheet } from "react-native";
import CustomText from "../../../components/Common/CustomText";
import SelectBrewMethod from "../../../components/Coffee/BrewMethods/AddBrewMethod/SelectBrewMethod";
import useFormVars from "../../../hooks/useFormVars";
import { NavigationParams } from "react-navigation";
import { useDispatch } from "react-redux";
import { clearNewCoffee } from "../../../store/actions/newCoffee";
import { COLORS } from "../../../styles/colors";

interface Props {
	navigation: NavigationParams;
}

export default function BrewMethodsScreen(props: Props) {
	const type = props.navigation.getParam("type");
	const { coffee, brewMethodActionCreator } = useFormVars(type);
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<FormView
				text="Continue "
				onForward={() => props.navigation.goBack()}
				onCancel={() => {
					dispatch(clearNewCoffee());
					props.navigation.navigate("Coffees");
				}}
			>
				<View>
					<CustomText styles={styles.text}>Already had a cup?</CustomText>
					<CustomText styles={styles.text}>
						It's optional to add some brewing details
					</CustomText>
				</View>
				<SelectBrewMethod
					coffee={coffee}
					brewMethodActionCreator={brewMethodActionCreator}
				/>
			</FormView>
		</View>
	);
}

BrewMethodsScreen.navigationOptions = () => {
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
	text: {
		textAlign: "center",
		fontSize: 18,
	},
});
