import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../styles/colors";
import CustomText from "../components/Common/CustomText";
import { ICoffee, Navigation } from "../models/interfaces";
import Process from "../components/Process/ShowProcess";
import Circle from "../components/Common/Circle";
import CoffeeNotes from "../components/CoffeeDetails/CoffeeNotes";
import BrewMethods from "../components/BrewMethods/ShowBrewMethods/BrewMethods";
import CoffeeOrigin from "../components/CoffeeDetails/CoffeeOrigin";
import ContentSection from "../components/Common/ContentSection";

interface Props {
	navigation: Navigation;
}

export default function CoffeeDetailsScreen(props: Props) {
	const coffee: ICoffee = props.navigation.getParam("coffee");
	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.imageContainer}></View>
				<ContentSection>
					<Circle containerStyles={styles.circle}>
						<CustomText styles={styles.rating}>{coffee.rating}</CustomText>
						<CustomText styles={{ fontSize: 12, color: COLORS.white }}>
							out of 5
						</CustomText>
					</Circle>
					<CustomText styles={styles.name}>{coffee.name}</CustomText>
					{coffee.description && (
						<CustomText styles={styles.description}>
							"{coffee.description}"
						</CustomText>
					)}
					<CoffeeNotes
						notes={coffee.notes}
						noteStyles={{ padding: 5, minWidth: 50 }}
					/>
					<BrewMethods methods={coffee.methods} />
					<View style={styles.details}>
						{/* <CustomText>Roasted by: {coffee.roaster}</CustomText> */}
						<Process process={coffee.process} />
						<CoffeeOrigin coffee={coffee} />
					</View>
				</ContentSection>
			</View>
		</ScrollView>
	);
}

CoffeeDetailsScreen.navigationOptions = (data: any) => {
	const title = data.navigation.getParam("coffee").name;
	return {
		headerTitle: title,
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
