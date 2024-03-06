import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import productListReducer from "../reducers/productListReducer/productListReducer.ts";





export const store = configureStore({
	reducer: {
		productListReducer
	},
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
		ReturnType,
		RootState,
		unknown,
		Action<string>
>;