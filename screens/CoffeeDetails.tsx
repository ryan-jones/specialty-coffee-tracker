import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../styles/colors";
import CustomText from "../components/Common/CustomText";
import { ICoffee } from "../models/interfaces";
import TasteDescription from "../components/Common/TasteDescription";

interface Props {
	navigation: any;
}

export default function CoffeeDetailsScreen(props: Props) {
	const coffee: ICoffee = props.navigation.getParam("coffee");
	return (
		<View style={styles.screen}>
			<View style={styles.imageContainer}></View>
			<View style={styles.content}>
				<View style={styles.headerContainer}>
					<View style={styles.header}>
						<CustomText styles={styles.rating}>{coffee.rating}</CustomText>
						<CustomText styles={{ fontSize: 12, color: COLORS.white }}>
							out of 5
						</CustomText>
					</View>
				</View>
				<CustomText styles={styles.name}>{coffee.name}</CustomText>
				{coffee.description && (
					<CustomText styles={styles.description}>
						"{coffee.description}"
					</CustomText>
				)}
				<View style={styles.notes}>
					{coffee.notes.map((note: string) => (
						<TasteDescription key={note} text={note} />
					))}
				</View>
				<View style={styles.details}>
					<CustomText>
						Origin: {coffee.region}, {coffee.country}
					</CustomText>
					<CustomText>Process: {coffee.process}</CustomText>
					<CustomText>Roasted by: {coffee.roaster}</CustomText>
				</View>
			</View>
		</View>
	);
}

CoffeeDetailsScreen.navigationOptions = {
	headerStyle: {
		backgroundColor: COLORS.baseColor,
	},
	headerTintColor: COLORS.white,
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
	content: {
		backgroundColor: COLORS.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		width: "100%",
		height: "100%",
		alignItems: "center",
		padding: 15,
	},
	headerContainer: {
		position: "absolute",
		top: -80,
		height: 140,
		width: 140,
		backgroundColor: COLORS.white,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 70,
		borderWidth: 1,
	},
	header: {
		height: 120,
		width: 120,
		alignItems: "center",
		backgroundColor: "black",
		borderRadius: 60,
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
	notes: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-evenly",
		margin: 15,
	},
	details: {
		width: "100%",
	},
});
