import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import MenuButton from "../components/Common/MenuButton";
import CustomText from "../components/Common/CustomText";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileData, fetchProfileData } from "../store/actions/profile";
import { IState, IProfile } from "../models/interfaces";

export default function SettingsScreen() {
	const profile: IProfile = useSelector((state: IState) => state.profile);
	const dispatch = useDispatch();
	const [name, setName] = useState(profile.name);
	return (
		<View style={styles.screen}>
			<Text>Settings Screen</Text>
			<View>
				<CustomText>Change User Name</CustomText>
				<TextInput
					placeholder="John Doe"
					keyboardType="default"
					style={styles.input}
					value={name}
					onChangeText={setName}
				/>
				<Button
					title="Save Name"
					onPress={async () => {
						await dispatch(updateProfileData({ name }));
						dispatch(fetchProfileData());
					}}
				/>
			</View>
		</View>
	);
}

SettingsScreen.navigationOptions = (navData: any) => {
	return {
		title: "Settings",
		headerLeft: () => <MenuButton navigation={navData.navigation} />,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		marginVertical: 15,
	},
});
