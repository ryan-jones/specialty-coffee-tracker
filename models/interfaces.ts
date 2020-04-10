export interface ICoffee {
	name: string;
	region: string;
	country: string;
	process: string;
	roaster: string;
	notes: string[];
	description?: string;
}

export interface IRoaster {
	name: string;
	address: string;
	city: string;
	country: string;
	postalCode: string;
}
