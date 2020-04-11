import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Common/Card";
import CustomText from "../components/Common/CustomText";
import FavoriteCoffeeList from "../components/Favorites/Coffees/FavoriteCoffeeList";
import { COFFEES, ROASTERS } from "../data";
import Map from "../components/Map";
import ContentSection from "../components/Common/ContentSection";
import FavoriteRoasterList from "../components/Favorites/Roasters/FavoriteRoasterList";

interface Props {
	navigation: any;
}

export default function ProfileScreen(props: Props) {
	const coffees = COFFEES.slice(0, 3);
	const roasters = ROASTERS.slice(0, 3);
	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.imageContainer}>
					<View style={styles.mapContainer}>
						<Map coffees={COFFEES} />
					</View>
				</View>
				<ContentSection>
					<View style={styles.favorites}>
						<CustomText>My Favorite Coffees</CustomText>
						<FavoriteCoffeeList
							coffees={coffees}
							textStyles={styles.text}
							navigation={props.navigation}
						/>
					</View>
					<View style={styles.favorites}>
						<CustomText>My Favorite Roasters</CustomText>
						<FavoriteRoasterList
							roasters={roasters}
							textStyles={styles.text}
							navigation={props.navigation}
						/>
					</View>
				</ContentSection>
			</View>
		</ScrollView>
	);
}

ProfileScreen.navigationOptions = {
	title: "Profile",
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	imageContainer: {
		height: 300,
		width: "100%",
	},
	favorites: {
		width: "100%",
		alignItems: "center",
		paddingHorizontal: 15,
		marginVertical: 15,
	},
	text: {
		textAlign: "right",
	},
	mapContainer: {
		width: "100%",
		height: 300,
	},
});
