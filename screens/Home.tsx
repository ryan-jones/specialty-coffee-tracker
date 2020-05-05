import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import CustomText from "../components/Common/CustomText";
import CustomTextInput from "../components/Common/CustomTextInput";
import Card from "../components/Common/Card";

interface Props {
	navigation: any;
}

export default function HomeScreen(props: Props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={styles.screen}>
			<CustomText styles={styles.header}>Welcome to Coffee Select!</CustomText>
			<Card>
				<View style={styles.form}>
					<CustomText>Log in to get started</CustomText>
					<View style={styles.formInputs}>
						<CustomTextInput
							label="User email"
							value={email}
							placeholder="Enter your email"
							keyboardType="default"
							onChangeText={(email: string) => setEmail(email)}
						/>
						<CustomTextInput
							label="User password"
							value={password}
							placeholder="Enter your password"
							keyboardType="default"
							onChangeText={(pwd: string) => setPassword(pwd)}
						/>
					</View>
					<View style={styles.formButtons}>
						<Button
							title="Login"
							onPress={() => {
								props.navigation.replace({ routeName: "Profile" });
							}}
						/>
						<Button
							title="Register"
							onPress={() => {
								// props.navigation.navigate({ routeName: "Coffees" });
							}}
						/>
					</View>
				</View>
			</Card>
		</View>
	);
}

HomeScreen.navigationOptions = {
	title: "Coffee Select",
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		padding: 15,
	},
	header: {
		marginBottom: 15,
	},
	form: {
		width: "100%",
		padding: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	formInputs: {
		width: "100%",
		padding: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	formButtons: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
	},
});
