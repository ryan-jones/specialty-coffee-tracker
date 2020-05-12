import React, { useState, useReducer, useCallback } from "react";
import { View, Button, StyleSheet, ActivityIndicator } from "react-native";
import CustomText from "../components/Common/CustomText";
import CustomTextInput from "../components/Common/CustomTextInput";
import { useDispatch, useSelector } from "react-redux";
import { signup, login } from "../store/actions/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { GRADIENTS, COLORS } from "../styles/colors";
import WarningMessage from "../components/Common/WarningMessage";
import { fetchProfileData } from "../store/actions/profile";
import { IState, IAuth } from "../models/interfaces";

interface Props {
	navigation: any;
}
const FORM_UPDATE = "FORM_UPDATE";
const initialState = {
	inputValues: {
		name: "",
		email: "",
		password: "",
	},
	inputValidities: {
		name: false,
		email: false,
		password: false,
	},
};

const formReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FORM_UPDATE:
			const updatedValues = {
				...state.inputValues,
				[action.input]: action.value,
			};
			const updatedValidities = {
				...state.inputValidities,
				[action.input]: action.isValid,
			};
			return {
				inputValidities: updatedValidities,
				inputValues: updatedValues,
			};
		default:
			return state;
	}
};

export default function AuthScreen(props: Props) {
	const authState: IAuth = useSelector((state: IState) => state.auth);
	const [isSignup, setIsSignup] = useState(false);
	const dispatch = useDispatch();

	const [formState, dispatchFormState] = useReducer(formReducer, initialState);

	const inputChangeHandler = useCallback(
		(input, inputValue, inputValidity) => {
			dispatchFormState({
				type: FORM_UPDATE,
				input,
				value: inputValue,
				isValid: inputValidity,
			});
		},
		[dispatchFormState]
	);

	const switchTitle = isSignup
		? "Already have an account? Click to login"
		: "Don't have an account yet? Click to signup";

	const authText = isSignup ? "Sign up" : "Login";

	const formIsValid = () => {
		const { email, password, name } = formState.inputValidities;
		return isSignup ? email && password && name : email && password;
	};

	return (
		<LinearGradient colors={GRADIENTS.baseColor} style={styles.gradient}>
			<CustomText
				styles={styles.header}
			>{`${authText} to get started`}</CustomText>
			<View style={styles.form}>
				<View style={styles.formInputs}>
					{authState.error && (
						<WarningMessage>Oops. Email or password was invalid</WarningMessage>
					)}
					{isSignup && (
						<CustomTextInput
							id="name"
							label="User name"
							placeholder="John Doe"
							keyboardType="default"
							invalidWarning="Please enter a name!"
							styles={styles.input}
							required
							onChangeText={inputChangeHandler}
						/>
					)}
					<CustomTextInput
						id="email"
						label="User email"
						placeholder="youremail@gmail.com"
						keyboardType="email-address"
						invalidWarning="Please enter a valid email"
						styles={styles.input}
						required
						onChangeText={inputChangeHandler}
					/>
					<CustomTextInput
						id="password"
						label="User password"
						placeholder="Enter your password"
						keyboardType="default"
						invalidWarning="Please enter a valid password"
						styles={styles.input}
						minLength={4}
						required
						onChangeText={inputChangeHandler}
						secureTextEntry
					/>
				</View>
				<View style={styles.formButtons}>
					{authState.loading ? (
						<ActivityIndicator size="large" />
					) : (
						<Button
							disabled={!formIsValid() || authState.error}
							title={authText}
							onPress={async () => {
								const action = isSignup ? signup : login;
								await dispatch(action(formState.inputValues));
								props.navigation.navigate("Home");
							}}
						/>
					)}
					<TouchableOpacity
						style={{ marginTop: 15 }}
						onPress={() => {
							setIsSignup((prev: boolean) => !prev);
						}}
					>
						<CustomText>{switchTitle}</CustomText>
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradient>
	);
}

AuthScreen.navigationOptions = {
	title: "Specialty Coffee",
};

const styles = StyleSheet.create({
	gradient: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
	},
	header: {
		color: COLORS.white,
		fontSize: 30,
		marginVertical: 15,
	},
	form: {
		width: "100%",
		backgroundColor: "white",
		borderRadius: 5,
		padding: 15,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 5,
		alignItems: "center",
	},
	formInputs: {
		width: "100%",
		padding: 15,
		alignItems: "center",
		justifyContent: "space-between",
	},
	input: {
		marginVertical: 15,
	},
	formButtons: {
		width: "100%",
		alignItems: "center",
	},
});
