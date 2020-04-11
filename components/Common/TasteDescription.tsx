import React from "react";
import TextEllipsis from "./TextEllipsis";

interface Props {
	text: string;
	textStyles?: any;
	containerStyles?: any;
}

export default function TasteDescription(props: Props) {
	return (
		<TextEllipsis
			text={props.text}
			color="baseColor"
			containerStyles={props.containerStyles}
		/>
	);
}
