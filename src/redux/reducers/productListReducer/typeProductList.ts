import {T_Product} from "../../../api/typeApi.ts";

export type typeInitialState = {
	productList: T_Product[]|[],
	statusGetListProduct: "loading" | 'error' | "fulfilled" | null
}
