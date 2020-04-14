import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomText from "./CustomText";

interface Props {
	navigation: any;
	text: string;
	routeName: string;
	styles?: object;
}

export default function Link(props: Props) {
	return (
		<TouchableOpacity
			onPress={() => {
				props.navigation.navigate({
					routeName: props.routeName,
				});
			}}
		>
			<CustomText styles={props.styles}>{props.text}</CustomText>
		</TouchableOpacity>
	);
}
