import axios, { AxiosResponse } from "axios";

export const get = async (url: string): Promise<any> => {
	try {
		const response: AxiosResponse = await axios.get(url);
		return response.data;
	} catch (err) {
		throw Error(err);
	}
};

export const post = async (url: string, body: any): Promise<any> => {
	try {
		const response: AxiosResponse = await axios.post(url, body);
		return response.data;
	} catch (err) {
		throw Error(err);
	}
};
