import md5 from "md5";
import axios from "axios";
import {T_get_idsParams, T_get_itemsParams} from "./typeApi.ts";

class Api {
	private readonly password: string;
	private readonly timestamp: string;
	private readonly auth: string;
	private readonly headers: {};
	private readonly baseUrl: string

	constructor() {
		this.password = 'Valantis';
		this.timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
		this.auth = md5(`${this.password}_${this.timestamp}`);
		this.baseUrl = 'http://api.valantis.store:40000/'
		this.headers = {
			headers: {
				"X-Auth": this.auth
			}
		}
	}

	getIds(params: T_get_idsParams) {
		return axios.post(ApiValantis.baseUrl, params, ApiValantis.headers)
	}

	getListProduct(arrayIds: string[]) {
		return axios.post(ApiValantis.baseUrl, {action: "get_items", params: {ids: arrayIds}}, ApiValantis.headers)
	}

	async getProduct(params: T_get_idsParams) {
		const getIds = await this.getIds(params)
		if (getIds.statusText === 'OK') {
			const productList = await this.getListProduct(getIds.data.result)
			if (productList.statusText === "OK") {
				return productList.data.result
			}
		}
	}

}

const ApiValantis = new Api()

export default ApiValantis
