import React from "react";
import CustomHeaderButton from "./HeaderButton";
import { NavigationParams } from "react-navigation";

interface Props {
	navigation: NavigationParams;
}

export default function MenuButton(props: Props) {
	return (
		<CustomHeaderButton
			iconName="md-menu"
			title="menu"
			onPress={() => props.navigation.toggleDrawer()}
		></CustomHeaderButton>
	);
}
