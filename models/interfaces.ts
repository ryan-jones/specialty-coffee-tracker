import { NavigationScreenProp, NavigationState } from "react-navigation";

export interface ICoffee {
	name: string;
	location: string;
	process: string;
	roaster: string;
	notes: string[];
	rating: string;
	methods: IMethods;
	id?: string;
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

export interface INote {
	name: string;
	isSelected: boolean;
}

export interface IPreferences {
	colorScheme: string;
}

export interface IStat {
	text: string;
	value: number;
}

export interface IProfile {
	name: string;
	userId: string;
	favoriteCoffees: ICoffee[];
	favoriteRoasters: any[];
	preferences: IPreferences;
	stats: IStat[];
}

export interface IAuth {
	loading: boolean;
	error: any;
	token: string | null;
	userId: string | null;
	refreshToken: string | null;
}

export interface IState {
	profile: IProfile;
	selectedCoffee: {
		original: ICoffee;
		edited: ICoffee;
	};
	newCoffee: ICoffee;
	coffees: {
		allCoffees: ICoffee[];
		loaded: boolean;
		error: boolean;
	};
	auth: IAuth;
	roasters: any;
}
