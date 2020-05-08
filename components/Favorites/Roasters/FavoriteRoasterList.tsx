import React from "react";
import { View, StyleSheet } from "react-native";
import { IRoaster } from "../../../models/interfaces";
import FavoriteRoasterListItem from "./FavoriteRoasterListItem";

interface Props {
	roasters: IRoaster[];
	navigation: any;
	textStyles?: object;
	listStyles?: object;
}

export default function FavoriteRoasterList(props: Props) {
	return (
		<View style={{ width: "100%", marginVertical: 15 }}>
			<View style={styles.listContainer}>
				{props.roasters.map((roaster) => (
					<FavoriteRoasterListItem
						key={roaster.name}
						{...roaster}
						onSelect={() =>
							props.navigation.navigate({
								routeName: "RoasterDetails",
								params: { roaster },
							})
						}
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		width: "100%",
		flexDirection: "row",
		marginVertical: 15,
		justifyContent: "space-between",
	},
	link: {
		width: "100%",
		marginTop: 5,
		alignItems: "flex-end",
	},
});
