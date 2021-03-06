import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./navigation/navigator";
import { enableScreens } from "react-native-screens";
import store from "./store";
import { Provider } from "react-redux";

enableScreens();

const setFonts = () => {
	return Font.loadAsync({
		"main-en": require("./assets/fonts/BalooChettan2-Regular.ttf"),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading startAsync={setFonts} onFinish={() => setFontLoaded(true)} />
		);
	}
	return (
		<Provider store={store}>
			<Navigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
