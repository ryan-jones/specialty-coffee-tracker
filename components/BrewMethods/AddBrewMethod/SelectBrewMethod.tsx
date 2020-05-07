import React, { useState } from "react";
import { View, StyleSheet, Image, Modal } from "react-native";
import { METHODS } from "../../../data";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomText from "../../Common/CustomText";
import { IMethod } from "../../../models/interfaces";
import AddBrewMethod from "./AddBrewMethod";
import TextEllipsis from "../../Common/TextEllipsis";
import { useDispatch } from "react-redux";
import useFormVars from "../../../hooks/useFormVars";

const icons: any = {
	chemex: {
		selected: require("../../../assets/images/chemex-select.png"),
		unselected: require("../../../assets/images/chemex.png"),
	},
	v60: {
		selected: require("../../../assets/images/v60-select.png"),
		unselected: require("../../../assets/images/v60.png"),
	},
	espresso: {
		selected: require("../../../assets/images/espresso-select.png"),
		unselected: require("../../../assets/images/espresso.png"),
	},
	frenchpress: {
		selected: require("../../../assets/images/frenchpress-select.png"),
		unselected: require("../../../assets/images/frenchpress.png"),
	},
	syphon: {
		selected: require("../../../assets/images/syphon-select.png"),
		unselected: require("../../../assets/images/syphon.png"),
	},
	aeropress: {
		selected: require("../../../assets/images/aeropress-select.png"),
		unselected: require("../../../assets/images/aeropress.png"),
	},
};

export default function SelectBrewMethod() {
	const [showModal, setShowModal] = useState(false);
	const [selectedBrewMethod, setSelectedBrewMethod] = useState("");
	const dispatch = useDispatch();

	const { coffee, brewMethodActionCreator } = useFormVars();
	console.log("coffee in select brew method", coffee);
	const { methods } = coffee;

	const setIcon = (method: string) => {
		return Number(methods[method].rating) > 0
			? icons[method].selected
			: icons[method].unselected;
	};
	const addBrewMethod = (method: IMethod) => {
		dispatch(brewMethodActionCreator(method));
		setShowModal(false);
	};
	const onCancel = () => setShowModal(false);

	const hasCases = (method: string) => {
		return (
			methods[method] &&
			methods[method].cases &&
			methods[method].cases.length > 0
		);
	};

	return (
		<View style={styles.viewContainer}>
			<Modal visible={showModal} animationType="slide">
				<AddBrewMethod
					method={selectedBrewMethod}
					addBrewMethod={addBrewMethod}
					onCancel={onCancel}
					icon={selectedBrewMethod && icons[selectedBrewMethod].unselected}
				/>
			</Modal>
			<View style={styles.methodsContainer}>
				{METHODS.map((method: string) => (
					<TouchableOpacity
						key={method}
						onPress={() => {
							setSelectedBrewMethod(method);
							setShowModal(true);
						}}
					>
						<View style={styles.methodContainer}>
							<View style={styles.iconContainer}>
								{hasCases(method) && (
									<TextEllipsis
										containerStyles={styles.methodCases}
										text={methods[method].cases.length}
										color="baseColor"
									/>
								)}
								<Image style={styles.icon} source={setIcon(method)} />
							</View>
							<CustomText styles={styles.text}>{method}</CustomText>
							{methods[method] && (
								<CustomText styles={styles.text}>
									{methods[method].rating}
								</CustomText>
							)}
						</View>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		marginVertical: 25,
		width: "100%",
		alignItems: "center",
	},
	methodsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 15,
		width: "100%",
		flexGrow: 3,
		justifyContent: "space-evenly",
	},
	methodCases: {
		position: "absolute",
		top: -15,
		right: -10,
		width: 20,
		minWidth: 20,
		height: 20,
		borderRadius: 10,
		margin: 0,
		padding: 0,
	},
	text: {
		textAlign: "center",
	},
	methodContainer: {
		marginVertical: 15,
		width: 100,
		alignItems: "center",
	},
	iconContainer: {
		width: 50,
		height: 50,
		marginBottom: 5,
	},
	icon: {
		height: "100%",
		width: "100%",
	},
});
