import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {typeInitialState} from "./typeProductList.ts";
import ApiValantis from "../../../api/Api.ts";
import {T_get_idsParams} from "../../../api/typeApi.ts";
import {T_filter} from "../productFilterReducer/productFilterReducer.ts";


const initialState: typeInitialState = {
	productList: [],
	statusGetListProduct: null,
	limit: 50,
	page: 1,
}

export const getProduct = createAsyncThunk('productList/getProduct',
		async (params: T_get_idsParams) => {
			const result = await  ApiValantis.getProduct(params)
			return await result
		}
)

export const fetchProductFilter = createAsyncThunk('productFilterReducer/fetchProductFilter',
		async (filter:Partial<T_filter>) => {
			const {result} = await ApiValantis.getFilterProductIds(filter)
			const resultFilterList = await 	ApiValantis.getListProduct(result)
			return resultFilterList.result
		})

export const productList = createSlice({
	initialState,
	name: "productListReducer",
	reducers: {
		paginationOnChange(state, action) {
			state.page = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getProduct.pending, (state) => {
			state.statusGetListProduct = "loading"
		})
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.statusGetListProduct = "fulfilled"
			state.productList = action.payload
		})
		builder.addCase(fetchProductFilter.fulfilled, (state, action) => {
			state.productList = action.payload
		})
	}
})
export const {paginationOnChange} = productList.actions
export default productList.reducer
