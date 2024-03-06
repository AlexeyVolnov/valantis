import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {typeInitialState} from "./typeProductList.ts";
import ApiValantis from "../../../api/Api.ts";
import {T_get_idsParams} from "../../../api/typeApi.ts";


const initialState: typeInitialState = {
	productList: [],
	statusGetListProduct: null
}

export const getProduct = createAsyncThunk('productList/getProduct',
		async (params: T_get_idsParams) => (await ApiValantis.getProduct(params))
)

export const productList = createSlice({
	initialState,
	name: "productListReducer",
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(getProduct.pending, (state) => {
			state.statusGetListProduct = "loading"
		})
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.statusGetListProduct = "fulfilled"
			state.productList = action.payload
		})
		builder.addCase(getProduct.rejected, (state, action) => {
			state.statusGetListProduct = "error"
			throw new Error(`ошибка получения списка товаров: ${action?.error.message}`)
		})
	}
})

export default productList.reducer
