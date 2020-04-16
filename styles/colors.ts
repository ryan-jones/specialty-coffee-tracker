import Color from "color";

export const COLORS = {
	baseColor: "#ff6600",
	white: "#fff",
	black: "black",
};

export const GRADIENTS: any = {
	baseColor: [Color(COLORS.baseColor).lighten(0.35).hex(), COLORS.baseColor],
	white: [COLORS.white, Color(COLORS.white).darken(0.35).hex()],
	black: [Color(COLORS.black).lighten(0.35).hex(), COLORS.black],
};
