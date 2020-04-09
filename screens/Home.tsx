import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import CustomText from "../components/Common/CustomText";
import TextInput from "../components/Common/TextInput";
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
						<TextInput
							label="User email"
							value={email}
							placeholder="Enter your email"
							keyboardType="default"
							onChange={(email: string) => setEmail(email)}
						/>
						<TextInput
							label="User password"
							value={password}
							placeholder="Enter your password"
							keyboardType="default"
							onChange={(pwd: string) => setPassword(pwd)}
						/>
					</View>
					<View style={styles.formButtons}>
						<Button
							title="Login"
							onPress={() => {
								props.navigation.navigate({ routeName: "Coffees" });
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
