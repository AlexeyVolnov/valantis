import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import ApiValantis from "../../../api/Api.ts";


export const fetchAllBrands = createAsyncThunk('productFilterReducer/fetchBrand',
		async () => {
			const response = await axios.post(ApiValantis.baseUrl, {
				"action": "get_fields",
				"params": {"field": "brand", "offset": 1, "limit": 10000}
			}, ApiValantis.headers);
			return await response.data.result
		}
)
export type T_filter = {
	price:number,
	product:string,
	brand:string
}


const initialState: T_intitialState = {
	brand: {
		currentBrand: '',
		listBrand: []
	},
	price: {
		currentPrice: 0,
	},
	productName: '',
	filterList: []

}
const productFilterReducer = createSlice({
	name: "filter",
	reducers: {
		selectBrand(state, action) {
			state.brand.listBrand.forEach((brend) => {
				if (brend.name !== action.payload) brend.select = false
				if (brend.name === action.payload) {
					if (brend.select) {
						state.brand.currentBrand = ''
						brend.select = false
					} else {
						state.brand.currentBrand = brend.name
						brend.select = true
					}
				}
			})
		},
		inputProductName(state, action) {
			state.productName = action.payload
		},
		inputPrice(state, action) {
			state.price.currentPrice = action.payload
		},
		resetFilters(state) {
			state.brand.currentBrand = ''
			state.productName = ''
			state.price.currentPrice = 0
			state.brand.listBrand.forEach(brand=>brand.select=false)
		}
	},
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchAllBrands.fulfilled, (state, action) => {
			const tempCash = new Map()

			const filterBrand = action.payload.filter(
					(brand: string | null) => tempCash.has(brand) || brand === null
							? false
							: tempCash.set(brand, 1) && true)
			state.brand.listBrand = filterBrand.map((brand: string) => ({
				select: false,
				name: brand
			}))
		})
		builder.addCase(fetchAllBrands.rejected, (_, action) => {
			throw new Error(`ошибка получения данных в фильтр Brend ${action.error}`)
		})

	}
})
export const {resetFilters, selectBrand, inputProductName, inputPrice} = productFilterReducer.actions
export default productFilterReducer.reducer
