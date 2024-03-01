import {createSlice} from "@reduxjs/toolkit";


type typeProductListInit  = {
	productList: number[]
}

const initialState: typeProductListInit = {
	productList: [5]
}

export const productListReducer = createSlice({
	initialState,
	name: '',
	reducers: {
		go(){}
	}
})

export default productListReducer.reducer

export const {go} = productListReducer.actions;
