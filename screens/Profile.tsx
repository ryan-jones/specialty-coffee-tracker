import React, { useEffect } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	ActivityIndicator,
	Dimensions,
} from "react-native";
import FavoriteCoffeeList from "../components/Favorites/Coffees/FavoriteCoffeeList";
import Map from "../components/Map";
import ContentSection from "../components/Common/ContentSection";
import FavoriteRoasterList from "../components/Favorites/Roasters/FavoriteRoasterList";
import Statistic from "../components/Common/Statistic";
import MenuButton from "../components/Common/MenuButton";
import { useSelector, useDispatch } from "react-redux";
import { Navigation } from "../models/interfaces";
import { fetchProfileData } from "../store/actions/profile";
import CustomText from "../components/Common/CustomText";

interface Props {
	navigation: Navigation;
}

export default function ProfileScreen(props: Props) {
	const dispatch = useDispatch();
	const { profile, auth, coffees } = useSelector((state: any) => state);

	useEffect(() => {
		if (auth.token) {
			dispatch(fetchProfileData());
		}
	}, [auth.token]);
	return (
		<ScrollView>
			{profile.userId ? (
				<View style={styles.screen}>
					<View style={styles.imageContainer}>
						<View style={styles.mapContainer}>
							<Map coffees={coffees.allCoffees} />
						</View>
					</View>
					<ContentSection>
						<CustomText>{profile.name}</CustomText>
						<View style={styles.statistics}>
							{profile.stats.map((stat: any) => (
								<Statistic
									key={stat.text}
									text={stat.text}
									value={stat.value}
								/>
							))}
						</View>
						<View style={styles.favorites}>
							<FavoriteCoffeeList
								coffees={profile.favoriteCoffees}
								textStyles={styles.text}
								navigation={props.navigation}
							/>
						</View>
						<View style={styles.favorites}>
							{/* <FavoriteRoasterList
							roasters={favRoasters}
							textStyles={styles.text}
							navigation={props.navigation}
						/> */}
						</View>
					</ContentSection>
				</View>
			) : (
				<View style={styles.loading}>
					<ActivityIndicator size="large" />
				</View>
			)}
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
	loading: {
		height: Dimensions.get("window").height - 75,
		justifyContent: "center",
	},
});
