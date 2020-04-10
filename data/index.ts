import { ICoffee } from "../models/interfaces";

export const COFFEES: ICoffee[] = [
	{
		name: "Una regla de Dios",
		region: "Mozonte, Nueva Segovia",
		country: "Nicaragua",
		process: "washed",
		roaster: "Right Side",
		notes: ["kiwi", "grosella", "almendra"],
		description:
			"Luis Alberto Balladarez cultiva este lote de variedad SL28 a 1.500 msnm en Mozonte, Nueva Segovia, Nicaragua. Proceso Lavado.",
	},
	{
		name: "Etiopia Buriso Amaje",
		region: "Sidamo",
		country: "Ethiopia",
		process: "natural",
		roaster: "Morrow Coffee",
		notes: ["papaya", "earl grey", "arandanos", "chocolate con leche"],
	},
	{
		name: "Guatemala Tata Nahual",
		region: "Acatenango",
		country: "Guatemala",
		process: "washed",
		roaster: "Morrow Coffee",
		notes: ["frutas secos", "chocolate", "vanilla", "caramelo"],
	},
];
