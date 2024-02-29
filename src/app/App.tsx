import style from './App.module.scss'
import axios from 'axios'
import md5 from 'md5'
import ProductPages from "../pages/ProductPages/model/ProductPages.tsx";

function App() {


	const password = 'Valantis';
	const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');

	const xAuth = md5(`${password}_${timestamp}`)


	async function getData(Auth:string) {
		const data = await axios.post('http://api.valantis.store:40000/',
				{
					action: 'get_ids',
					params: {
						"offset": 1,
						"limit": 10
					},

				}, {
					headers: {
						"X-Auth": Auth
					}
				})
		console.log(data.data.result)
	}

	getData(xAuth)

	return (
			<div className={style.app}>
				 <ProductPages/>
			</div>
	)
}

export default App
