import React from "react";
import CustomHeaderButton from "./HeaderButton";

interface Props {
	navigation: any;
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
