export interface ICoffee {
	name: string;
	region: string;
	country: string;
	process: string;
	roaster: string;
	notes: string[];
	rating: string;
	methods: {
		chemex: IMethod;
		v60: IMethod;
		frenchPress: IMethod;
		espresso: IMethod;
		aeropress: IMethod;
	};
	description?: string;
	coordinates?: any;
}

export interface IRoaster {
	name: string;
	address: string;
	city: string;
	country: string;
	postalCode: string;
}

export interface IMethod {
	rating: number;
}
