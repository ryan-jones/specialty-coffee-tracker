import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";
import TextEllipsis from "./TextEllipsis";

interface Props {
	text: string;
	textStyles?: any;
	containerStyles?: any;
}

export default function TasteDescription(props: Props) {
	return (
		<TextEllipsis
			text={props.text}
			containerStyles={{
				...props.containerStyles,
				...styles.taste,
			}}
		/>
	);
}

const styles = StyleSheet.create({
	taste: {
		backgroundColor: COLORS.baseColor,
	},
});
