import { IMethod, IBrewCase, INote } from "../models/interfaces";

export const setBrewMethodRatings = (method: IMethod): number => {
	const aggregate: number = method.cases.reduce(
		(aggregate: number, brewCase: IBrewCase) => aggregate + brewCase.rating,
		0
	);
	return aggregate === 0 ? aggregate : aggregate / method.cases.length;
};

export const setCoffeeAverageRating = (ratedMethods: object): number => {
	const methods: IMethod[] = Object.values(ratedMethods).filter(
		({ rating }) => rating > 0
	);
	const aggregateValue = methods.reduce(
		(aggregate: number, method: IMethod) => {
			return aggregate + Number(method.rating);
		},
		0
	);
	return aggregateValue > 0 ? aggregateValue / methods.length : aggregateValue;
};

export const setSelectedNotes = (notes: INote[]): string[] =>
	notes.reduce((list: string[], note: INote) => {
		return note.isSelected ? list.concat(note.name) : list;
	}, []);

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
