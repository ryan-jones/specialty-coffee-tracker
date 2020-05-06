import { ICoffee, IRoaster } from "../models/interfaces";

export const COFFEES: ICoffee[] = [
	{
		name: "Una regla de Dios",
		location: "Mozonte, Nueva Segovia",
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
		methods: {
			chemex: {
				rating: 4.3,
				cases: [],
			},
			aeropress: {
				rating: 3.9,
				cases: [],
			},
			v60: {
				rating: 4.2,
				cases: [],
			},
			espresso: {
				rating: 0,
				cases: [],
			},
			frenchpress: {
				rating: 0,
				cases: [],
			},
		},
	},
	{
		name: "Etiopia Buriso Amaje",
		location: "Sidamo, Ethiopia",
		process: "natural",
		roaster: "Morrow Coffee",
		rating: "3.8",
		notes: ["papaya", "earl grey", "arandanos", "chocolate con leche"],
		coordinates: {
			latitude: 7.850021,
			longitude: 35.9432573,
		},
		methods: {
			chemex: {
				rating: 4.3,
				cases: [],
			},
			aeropress: {
				rating: 3.9,
				cases: [],
			},
			v60: {
				rating: 4.2,
				cases: [],
			},
			espresso: {
				rating: 0,
				cases: [],
			},
			frenchpress: {
				rating: 0,
				cases: [],
			},
		},
	},
	{
		name: "Guatemala Tata Nahual",
		location: "Acatenango, Guatemala",
		process: "washed",
		roaster: "Morrow Coffee",
		rating: "4.0",
		notes: ["frutas secos", "chocolate", "vanilla", "caramelo"],
		coordinates: {
			latitude: 14.5004814,
			longitude: -90.884421,
		},
		methods: {
			chemex: {
				rating: 4.3,
				cases: [],
			},
			aeropress: {
				rating: 3.9,
				cases: [],
			},
			v60: {
				rating: 4.2,
				cases: [],
			},
			espresso: {
				rating: 0,
				cases: [],
			},
			frenchpress: {
				rating: 0,
				cases: [],
			},
		},
	},
];

export const ROASTERS: IRoaster[] = [
	{
		name: "Morrow Coffee",
		city: "Barcelona",
		country: "Spain",
		postalCode: "08003",
		address: "Plaza España",
		rating: 4.4,
	},
	{
		name: "Right Side Coffee",
		city: "Casteldelfells",
		country: "Spain",
		postalCode: "08003",
		address: "Casteldelfells",
		rating: 4.2,
	},
	{
		name: "Satan Cafe",
		address: "Gothica",
		city: "Barcelona",
		country: "Spain",
		postalCode: "08001",
		rating: 3.9,
	},
];

export const METHODS = [
	"chemex",
	"v60",
	"espresso",
	"frenchpress",
	"aeropress",
	"syphon",
];
