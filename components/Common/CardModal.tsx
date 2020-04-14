import React, { ReactNode } from "react";
import Card from "./Card";
import { Modal, StyleSheet, View, SafeAreaView } from "react-native";
import { COLORS } from "../../styles/colors";

interface Props {
	visible: boolean;
	children: ReactNode;
}

export default function CardModal(props: Props) {
	return (
		<Modal visible={props.visible} animationType="slide">
			<SafeAreaView style={styles.container}>
				<View style={styles.modal}>
					<Card>{props.children}</Card>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.baseColor,
		padding: 0,
	},
	modal: {
		backgroundColor: COLORS.baseColor,
		padding: 15,
		height: "100%",
		width: "100%",
		borderColor: "black",
		justifyContent: "center",
		alignItems: "center",
	},
});
