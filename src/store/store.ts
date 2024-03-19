import {makeAutoObservable, runInAction} from "mobx";
import {T_Product} from "../api/typeApi.ts";
import axios, {AxiosError, AxiosResponse} from "axios";
import ApiValantis from "../api/Api.ts";



export type T_filter = {
	price:number,
	product:string,
	brand:string
}
type T_statusQuery = 'loading' | 'error' | 'fullfiled'
type T_brand = {
	select: boolean,
	name: string
}

class Store {
	public productList: T_Product[] | []
	public listBrand: T_brand[] | []
	public filter: {
		filterProductPrice: number
		filterProductName: string
		filterProductBrand: string
	}
	public navigation: {
		page: number
		offset: number
		limit: number
	}
	public statusGetListProduct: T_statusQuery

	constructor() {
		makeAutoObservable(this)
		this.navigation = {
			page: 1,
			offset: 1,
			limit: 50
		}
		this.filter = {
			filterProductBrand: '',
			filterProductName: '',
			filterProductPrice: 0
		}
		this.listBrand = []
		this.productList = []
		this.statusGetListProduct = "loading"
	}

	setPage(page: number) {
		this.navigation.page = page
	}

	async fetchIds() {
		try {
			runInAction(() => this.statusGetListProduct = "loading")
			const filter: Partial<T_filter> = {}
			if (this.filter.filterProductBrand.length) {
				filter.brand = this.filter.filterProductBrand
			}
			if (this.filter.filterProductName.length) {
				filter.product = this.filter.filterProductName
			}
			if (this.filter.filterProductPrice !== null) {
				filter.price = this.filter.filterProductPrice
			}
			const isFilters = filter.brand || filter.price || filter.product
			const res = await axios.post(ApiValantis.baseUrl, {
				action: isFilters ? 'filter' : 'get_ids',
				params: isFilters ? filter : {offset: this.navigation.page, limit: this.navigation.limit}
			}, ApiValantis.headers)
			this.fetchProduct(res.data.result)
		} catch (error: AxiosError | unknown) {
			if (error instanceof AxiosError) {
				console.error(`была ошибка fetchIds, запрос будет отправлен повторно текст ошибки ${error.message}`)

				this.fetchIds()
			}
		}
	}

	async fetchProduct(arrayIds: string[]) {
		try {
			const response: AxiosResponse = await axios.post(ApiValantis.baseUrl, {
				action: "get_items",
				params: {"ids": arrayIds}
			}, ApiValantis.headers)
			this.setProductList(this.filterProductOnlyId(response.data.result))
			runInAction(() => this.statusGetListProduct = "fullfiled")
		} catch (error) {
			if (error instanceof AxiosError) {
				console.error(`была ошибка fetchProduct запрос будет отправлен повторно текст ошибки ${error.message}`)

				this.fetchProduct(arrayIds)
			}
		}
	}

	async fetchAllBrands() {
		try {
			const {data} = await axios.post(ApiValantis.baseUrl, {
				action: "get_fields",
				params: {field: "brand", offset: 1, limit: 1000}
			}, ApiValantis.headers)

			const filterAnTransformBrand = (arr: string[]):T_brand[] => {
				const hash = new Map()
				const result = []
				for(const brand of arr){
					if(brand!==null){
						if(!hash.has(brand)){
							result.push({select:false,name:brand})
							hash.set(brand,1)
						}
					}
				}
         return result
			}


			runInAction(() => this.listBrand = filterAnTransformBrand(data.result))
		} catch (error) {
			this.fetchAllBrands()
			console.error('ошибка получения брендов')
		}
	}

	selectBrand(brand:T_brand) {
		this.listBrand.forEach((item) => {
			if (item.name !== brand.name) item.select = false
			if (item.name === brand.name) {
				if (item.select) {
					this.filter.filterProductBrand = ''
					item.select = false
				} else {
					this.filter.filterProductBrand = brand.name
					item.select = true
				}
			}
		})
	}

	resetFilters() {
		this.filter.filterProductBrand=''
		this.filter.filterProductName=''
		this.filter.filterProductPrice=0
		this.listBrand.forEach(brand=>brand.select=false)
		this.fetchIds()
	}

	setProductList(productList: T_Product[] | []) {
		this.productList = productList
	}

	filterProductOnlyId(array: T_Product[]) {
		const cash = new Map()
		return array.filter(item => (
				cash.has(item.id)
						? false
						: cash.set(item.id, 1) && true)
		)
	}

	setFilterName(productName: string) {
		this.filter.filterProductName = productName.trim()
	}

	setFilterPrice(productPrice: number) {
		this.filter.filterProductPrice = productPrice

	}
}

export default new Store()