export interface ICoffee {
	name: string;
	region: string;
	country: string;
	process: string;
	roaster: string;
	notes: string[];
	rating: string;
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
