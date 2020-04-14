import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import FavoriteCoffeeList from "../components/Favorites/Coffees/FavoriteCoffeeList";
import { COFFEES, ROASTERS } from "../data";
import Map from "../components/Map";
import ContentSection from "../components/Common/ContentSection";
import FavoriteRoasterList from "../components/Favorites/Roasters/FavoriteRoasterList";
import Statistic from "../components/Common/Statistic";
import MenuButton from "../components/Common/MenuButton";
import { useSelector } from "react-redux";
import { Navigation } from "../models/interfaces";

interface Props {
	navigation: Navigation;
}

export default function ProfileScreen(props: Props) {
	const { favCoffees, favRoasters, stats } = useSelector(
		(state: any) => state.profile
	);

	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.imageContainer}>
					<View style={styles.mapContainer}>
						<Map coffees={COFFEES} />
					</View>
				</View>
				<ContentSection>
					<View style={styles.statistics}>
						{stats.map((stat: any) => (
							<Statistic key={stat.text} text={stat.text} value={stat.value} />
						))}
					</View>
					<View style={styles.favorites}>
						<FavoriteCoffeeList
							coffees={favCoffees}
							textStyles={styles.text}
							navigation={props.navigation}
						/>
					</View>
					<View style={styles.favorites}>
						<FavoriteRoasterList
							roasters={favRoasters}
							textStyles={styles.text}
							navigation={props.navigation}
						/>
					</View>
				</ContentSection>
			</View>
		</ScrollView>
	);
}

ProfileScreen.navigationOptions = (navData: any) => {
	return {
		title: "Profile",
		headerLeft: () => <MenuButton navigation={navData.navigation} />,
	};
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
	statistics: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-evenly",
		paddingHorizontal: 15,
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
