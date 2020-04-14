import React from "react";
import TextEllipsis from "./TextEllipsis";

interface Props {
	text: string;
	textStyles?: object;
	noteStyles?: object;
}

export default function TasteDescription(props: Props) {
	return (
		<TextEllipsis
			text={props.text}
			color="baseColor"
			containerStyles={props.noteStyles}
			textStyles={props.textStyles}
		/>
	);
}
