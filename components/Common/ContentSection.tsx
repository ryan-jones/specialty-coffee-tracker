import React, { ReactNode } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../../styles/colors";

interface Props {
	children: ReactNode;
}
export default function ContentSection(props: Props) {
	return <View style={styles.content}>{props.children}</View>;
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: COLORS.white,
		position: "relative",
		top: -50,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		width: "100%",
		height: "100%",
		alignItems: "center",
		padding: 15,
	},
});
