import { Dispatch } from "redux";
import { REACT_APP_API_URL } from "react-native-dotenv";
import { patch, post, getAll } from "../../utils/http";
import { ICoffee } from "../../models/interfaces";
import { COFFEES_LOADED_SUCCESS } from "./coffees";

export const PROFILE_LOAD_SUCCESS = "PROFILE_LOAD_SUCCESS";
export const UPDATE_PREFERENCES = "UPDATE_PREFERENCES";
export const PROFILE_CREATE_SUCCESS = "PROFILE_CREATE_SUCCESS";
export const PROFILE_UPDATE_SUCCESS = "PROFILE_UPDATE_SUCCESS";

const url = REACT_APP_API_URL;

interface IProfileResponse {
	[key: string]: IProfileData;
}
interface ICoffeeResponse {
	[key: string]: ICoffee;
}

interface InsertProfileData {
	token: string;
	data: IProfileData;
}

interface IProfileData {
	userId?: string;
	name?: string;
	preferences?: any;
	favoriteCoffees?: {
		name: string;
		rating: string;
	}[];
	statistics?: any[];
}

export const fetchProfileData = () => {
	return async (dispatch: Dispatch, getState: any) => {
		const { userId, token } = getState().auth;
		try {
			const response: any[] = await getAll([
				`${url}/users.json?auth=${token}&orderBy="userId"&isEqualTo="${userId}"`,
				`${url}/coffees/${userId}.json?auth=${token}`,
			]);
			const profileResponse: IProfileResponse = response[0];
			const profile: IProfileData = Object.values(profileResponse)[0];
			const coffeeResponse: ICoffeeResponse = response[1];
			const coffees: ICoffee[] = coffeeResponse
				? Object.keys(coffeeResponse).map((key: string) => coffeeResponse[key])
				: [];
			const regions = coffees.reduce((regions: string[], coffee: ICoffee) => {
				return regions.find((region) => region === coffee.location)
					? regions
					: regions.concat(coffee.location);
			}, []);

			const payload: any = {
				...profile,
				coffees,
				favoriteCoffees: coffees
					.sort((a: ICoffee, b: ICoffee) => Number(a.rating) - Number(b.rating))
					.splice(0, 3),
				stats: [
					{
						text: "Coffees",
						value: coffees.length,
					},
					{
						text: "Roasters",
						value: 0,
					},
					{
						text: "Regions",
						value: regions.length,
					},
				],
			};

			dispatch({
				type: PROFILE_LOAD_SUCCESS,
				payload,
			});
			dispatch({
				type: COFFEES_LOADED_SUCCESS,
				payload: coffees,
			});
		} catch (err) {
			console.log("err in fetch profile data", err.message);
		}
	};
};

export const setProfileData = (profileData: InsertProfileData) => {
	return async (dispatch: any) => {
		try {
			await post(
				`${url}/users.json?auth=${profileData.token}`,
				profileData.data
			);
			dispatch({ type: PROFILE_CREATE_SUCCESS });
		} catch (err) {
			console.log("err in setProfileData", err);
		}
	};
};

export const updateProfileData = (profileData: IProfileData) => {
	return async (dispatch: any, getState: any) => {
		try {
			const { userId, token } = getState().auth;
			await patch(`${url}/users/${userId}.json?auth=${token}`, profileData);
			dispatch({ type: PROFILE_UPDATE_SUCCESS });
		} catch (err) {
			console.log("err in updateProfileData", err.json());
		}
	};
};
