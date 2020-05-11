import axios, { AxiosResponse } from "axios";

export const get = async (url: string): Promise<any> => {
	try {
		const response: AxiosResponse = await axios.get(url);
		return response.data;
	} catch (err) {
		throw Error(err);
	}
};

export const getAll = async (urls: string[]): Promise<any> => {
	try {
		const requests = urls.map((url: string) => axios.get(url));
		const response: any = await axios
			.all(requests)
			.then(axios.spread((...res) => res.map((r) => r.data)));
		return response;
	} catch (err) {
		console.log("err in getAll", err);
	}
};

export const post = async (url: string, body: any): Promise<any> => {
	try {
		const response: AxiosResponse = await axios.post(url, body);
		return response.data;
	} catch (error) {
		throw Error(error);
	}
};

export const put = async (url: string, body: any): Promise<any> => {
	try {
		const response: AxiosResponse = await axios.put(url, body);
		return response.data;
	} catch (err) {
		throw Error(err);
	}
};

export const patch = async (url: string, body: any): Promise<any> => {
	try {
		const response: AxiosResponse = await axios.patch(url, body);
		return response.data;
	} catch (err) {
		throw Error(err);
	}
};
