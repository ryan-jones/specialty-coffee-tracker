import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../styles/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

interface Props {
	iconName: string;
	title: string;
	onPress: () => void;
}
const CustomButton = (props: any) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={COLORS.white}
		/>
	);
};

export default function (props: Props) {
	return (
		<HeaderButtons HeaderButtonComponent={CustomButton}>
			<Item {...props} />
		</HeaderButtons>
	);
}
