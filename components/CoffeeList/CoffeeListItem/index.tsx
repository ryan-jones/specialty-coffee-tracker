import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ICoffee } from "../../../models/interfaces";
import CustomText from "../../Common/CustomText";
import Card from "../../Common/Card";

interface Props extends ICoffee {
	onSelect: (coffee: any) => void;
}

export default function CoffeeListItem(props: Props) {
	return (
		<TouchableOpacity onPress={() => props.onSelect(props.name)}>
			<Card styles={{ marginVertical: 10 }}>
				<View style={styles.item}>
					<View style={styles.mainContent}>
						<CustomText styles={{ fontWeight: "bold", fontSize: 18 }}>
							{props.name}
						</CustomText>
						<CustomText styles={styles.secondaryTxt}>
							{props.roaster}
						</CustomText>
					</View>
					<View style={styles.details}>
						<CustomText styles={styles.secondaryTxt}>
							Process: {props.process}
						</CustomText>
						<CustomText styles={styles.secondaryTxt}>
							{props.region}, {props.country}
						</CustomText>
					</View>
				</View>
			</Card>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	item: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	mainContent: {
		maxWidth: "50%",
		justifyContent: "center",
	},
	details: {
		maxWidth: "50%",
		justifyContent: "center",
	},
	secondaryTxt: {
		color: "grey",
	},
});
