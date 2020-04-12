import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../styles/colors";

export default function CustomHeaderButton(props: any) {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={COLORS.white}
		/>
	);
}
