import md5 from "md5";
import axios from "axios";

class Api {
	private readonly password: string;
	private readonly timestamp: string;
	public auth: string;
	public headers: {};
	public baseUrl: string

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

	getListId(params:getIdsParams) {
		const getListId = axios.post(ApiValantis.baseUrl, {action: 'get_ids', params,}, ApiValantis.headers)
		return getListId
	}
	getListProduct(params){
		const getListProduct = axios.post(ApiValantis.baseUrl, {action:"get_items", params,}, ApiValantis.headers)
		return getListProduct
	}

}

const ApiValantis = new Api()
export default ApiValantis

type getIdsParams = {
	offset: number,
	limit: number
}
