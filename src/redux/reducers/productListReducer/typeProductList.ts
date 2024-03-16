import {T_Product} from "../../../api/typeApi.ts";

export type typeInitialState = {
	productList: T_Product[]|[],
	statusGetListProduct: T_statusRequest,
	limit:number,
	page:number,
}
export type T_statusRequest = "loading" | 'error' | "fulfilled" | null