import React from "react";
import { View, StyleSheet } from "react-native";
import BrewMethod from "./BrewMethod";
import { IMethod } from "../../models/interfaces";
import CustomText from "../Common/CustomText";

interface Props {
	methods: {
		[key: string]: IMethod;
	};
}

export default function BrewMethods({ methods }: Props) {
	return (
		<View style={styles.container}>
			<CustomText styles={styles.text}>Rating by brew method: </CustomText>
			<View style={styles.methodContainer}>
				{Object.keys(methods).map((key: string) => (
					<BrewMethod key={key} name={key} rating={methods[key].rating} />
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 25,
		width: "100%",
		alignItems: "center",
	},
	methodContainer: {
		flexDirection: "row",
		marginTop: 15,
		width: "100%",
		justifyContent: "space-evenly",
	},
	text: {
		fontSize: 18,
	},
});
