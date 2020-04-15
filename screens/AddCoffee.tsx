import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../styles/colors";
import { Navigation } from "../models/interfaces";
import ContentSection from "../components/Common/ContentSection";
import AddCoffee from "../components/AddCoffee/AddCoffee";

interface Props {
	navigation: Navigation;
}

export default function AddCoffeeScreen(props: Props) {
	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.imageContainer}></View>
				<ContentSection>
					<AddCoffee />
				</ContentSection>
			</View>
		</ScrollView>
	);
}

AddCoffeeScreen.navigationOptions = () => {
	return {
		headerTitle: "Add a new coffee",
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "black",
	},
	imageContainer: {
		height: 300,
	},
	circle: {
		position: "absolute",
		top: -80,
	},
	content: {
		backgroundColor: COLORS.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		width: "100%",
		height: "100%",
		alignItems: "center",
		padding: 15,
	},
	rating: {
		height: 70,
		color: COLORS.white,
		fontSize: 62,
		fontWeight: "bold",
	},
	name: {
		fontSize: 32,
		marginTop: 50,
		marginBottom: 15,
	},
	description: {
		fontStyle: "italic",
		fontSize: 15,
		textAlign: "center",
	},
	details: {
		width: "100%",
		justifyContent: "space-evenly",
	},
});
