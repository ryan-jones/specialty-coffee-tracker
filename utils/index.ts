import { IMethod, IBrewCase } from "../models/interfaces";

export const setBrewMethodRatings = (method: IMethod): number => {
	const aggregate: number = method.cases.reduce(
		(aggregate, brewCase: IBrewCase) => aggregate + brewCase.rating,
		0
	);
	return aggregate / method.cases.length;
};

export const setCoffeeAverageRating = (ratedMethods: object): number => {
	const methods: IMethod[] = Object.values(ratedMethods).filter(
		(method) => method.rating > 0
	);
	return (
		methods.reduce((aggregate, method) => {
			return aggregate + Number(method.rating);
		}, 0) / methods.length
	);
};
