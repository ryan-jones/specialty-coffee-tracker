import React, { ReactNode } from "react";
import CustomText from "./CustomText";
import { StyleSheet } from "react-native";

interface Props {
	children: ReactNode;
}

export default function WarningMessage({ children }: Props) {
	return <CustomText styles={styles.warning}>{children}</CustomText>;
}

const styles = StyleSheet.create({
	warning: {
		color: "red",
	},
});
