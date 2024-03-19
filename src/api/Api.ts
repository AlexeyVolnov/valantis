import md5 from "md5";

class Api {
	private readonly password: string;
	private readonly timestamp: string;
	public readonly auth: string;
	public readonly headers: {
		headers:{
			"X-Auth":string
		}
	};
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
}

const ApiValantis = new Api()

export default ApiValantis
