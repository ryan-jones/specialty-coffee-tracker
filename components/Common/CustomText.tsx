import React, { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";

interface IProps {
	children: ReactNode;
	styles?: object;
}
export default function CustomText(props: IProps) {
	return (
		<Text style={{ ...styles.text, ...props.styles }}>{props.children}</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "main-en",
	},
});
