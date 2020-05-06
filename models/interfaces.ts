import { NavigationScreenProp, NavigationState } from "react-navigation";

export interface ICoffee {
	id?: string;
	name: string;
	location: string;
	process: string;
	roaster: string;
	notes: string[];
	rating: string;
	methods: IMethods;
	description?: string;
	coordinates?: any;
}

export interface IRoaster {
	name: string;
	address: string;
	city: string;
	country: string;
	postalCode: string;
	rating: number;
}

export interface IMethods {
	[key: string]: IMethod;
}

export interface IMethod {
	rating: number | string;
	cases: IBrewCase[];
	notes?: string[];
}

export interface IBrewCase {
	water: number;
	grams: number;
	rating: number;
	description: string;
	notes: string[];
}

export type Navigation = NavigationScreenProp<NavigationState, any>;

export interface INote {
	name: string;
	isSelected: boolean;
}
