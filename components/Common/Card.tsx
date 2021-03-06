import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

interface Props {
	children: ReactNode;
	styles?: object;
}
export default function Card({ children, styles }: Props) {
	return <View style={{ ...localStyles.card, ...styles }}>{children}</View>;
}

const localStyles = StyleSheet.create({
	card: {
		width: "100%",
		minHeight: "50%",
		backgroundColor: "white",
		borderRadius: 5,
		padding: 15,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 5,
	},
});
