import React from "react";
import { View, Button } from "react-native";
import CustomText from "../Common/CustomText";
import { useDispatch } from "react-redux";
import { toggleCoffeeModal } from "../../store/actions/coffee";

export default function AddCoffee() {
	const dispatch = useDispatch();
	return (
		<View>
			<CustomText>This is a new coffee</CustomText>
			<Button title="close" onPress={() => dispatch(toggleCoffeeModal())} />
		</View>
	);
}
