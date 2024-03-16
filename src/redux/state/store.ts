import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import productListReducer from "../reducers/productListReducer/productListReducer.ts";
import productFilterReducer from "../reducers/productFilterReducer/productFilterReducer.ts";





export const store = configureStore({
	reducer: {
		productListReducer,
		productFilterReducer
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