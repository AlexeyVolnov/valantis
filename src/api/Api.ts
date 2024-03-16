import md5 from "md5";
import axios from "axios";
import {T_get_idsParams} from "./typeApi.ts";
import {T_filter} from "../redux/reducers/productFilterReducer/productFilterReducer.ts";


class Api {
	private readonly password: string;
	private readonly timestamp: string;
	public readonly auth: string;
	public readonly headers: {};
	public readonly baseUrl: string

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

	async getIds(params: T_get_idsParams):Promise<any> {
		try {
			const {data} = await axios.post(ApiValantis.baseUrl, params, ApiValantis.headers)
			return data
		} catch (error) {
			console.log('ошибка получения ids')
			return this.getIds(params)
		}
	}

	// @ts-ignore
	async getFilterProductIds(filter:Partial<T_filter>){
		try {
			const {data} = await axios.post(ApiValantis.baseUrl, {
				"action": "filter",
				"params": filter
			}, ApiValantis.headers)
			return data
		}catch (error){
			console.log('ошибка получения товаров')
			return this.getFilterProductIds(filter)
		}
	}

	async getListProduct(arrayIds: string[]):Promise<any> {
		try {
			const {data} = await axios.post(ApiValantis.baseUrl, {action: "get_items", params: {ids: arrayIds}}, ApiValantis.headers)
			return data
		}catch (error){
			console.log('ошибка получения товаров')
			return this.getListProduct(arrayIds)
		}
	}
	async getProduct(params: T_get_idsParams) {
		const getIds = await this.getIds(params)
		const productList = await this.getListProduct(getIds.result)
		return productList.result

	}

}

const ApiValantis = new Api()

export default ApiValantis
