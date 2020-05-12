import React, { useEffect } from "react";
import {
	StyleSheet,
	View,
	ActivityIndicator,
	AsyncStorage,
} from "react-native";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/actions/auth";
import { validateDataFromStorage } from "../utils/storage";

export default function OnInitScreen(props: any) {
	const dispatch = useDispatch();
	useEffect(() => {
		const attemptLogin = async () => {
			const userData = await AsyncStorage.getItem("userData");
			const validData = validateDataFromStorage(userData);
			if (validData) {
				dispatch(authenticate(validData));
				props.navigation.navigate("Home");
			} else {
				props.navigation.navigate("Auth");
			}
		};
		attemptLogin();
	}, []);
	return (
		<View style={styles.screen}>
			<ActivityIndicator />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
