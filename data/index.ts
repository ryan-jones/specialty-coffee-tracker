import { ICoffee } from "../models/interfaces";

export const COFFEES: ICoffee[] = [
	{
		name: "Una regla de Dios",
		region: "Mozonte, Nueva Segovia",
		country: "Nicaragua",
		process: "washed",
		roaster: "Right Side",
		notes: ["kiwi", "grosella", "almendra"],
		rating: "4.5",
		description:
			"Luis Alberto Balladarez cultiva este lote de variedad SL28 a 1.500 msnm en Mozonte, Nueva Segovia, Nicaragua. Proceso Lavado.",
		coordinates: {
			latitude: 13.6595684,
			longitude: -86.4453649,
		},
	},
	{
		name: "Etiopia Buriso Amaje",
		region: "Sidamo",
		country: "Ethiopia",
		process: "natural",
		roaster: "Morrow Coffee",
		rating: "3.8",
		notes: ["papaya", "earl grey", "arandanos", "chocolate con leche"],
		coordinates: {
			latitude: 7.850021,
			longitude: 35.9432573,
		},
	},
	{
		name: "Guatemala Tata Nahual",
		region: "Acatenango",
		country: "Guatemala",
		process: "washed",
		roaster: "Morrow Coffee",
		rating: "4.0",
		notes: ["frutas secos", "chocolate", "vanilla", "caramelo"],
		coordinates: {
			latitude: 14.5004814,
			longitude: -90.884421,
		},
	},
];
