import { IMethod, IBrewCase } from "../models/interfaces";

export const setBrewMethodRatings = (method: IMethod): number => {
	const aggregate: number = method.cases.reduce(
		(aggregate: number, brewCase: IBrewCase) => aggregate + brewCase.rating,
		0
	);
	return aggregate / method.cases.length;
};

export const setCoffeeAverageRating = (ratedMethods: object): number => {
	const methods: IMethod[] = Object.values(ratedMethods).filter(
		({ rating }) => rating > 0
	);
	return (
		methods.reduce((aggregate: number, method: IMethod) => {
			return aggregate + Number(method.rating);
		}, 0) / methods.length
	);
};

export const get = (url: string): Promise<any> => {
	return fetch(url)
		.then((response: any) => {
			if (response.status === 200) {
				return response.json();
			}
			throw new Error(`Error of type ${response.status}`);
		})
		.catch((err) => console.error(err));
};
