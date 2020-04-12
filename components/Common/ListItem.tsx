import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

interface Props {
	children: any;
}
export default function ListItem({ children }: Props) {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 15,
		backgroundColor: COLORS.white,
		borderBottomColor: "grey",
		borderBottomWidth: 1,
	},
});
