export type T_get_idsParams = {
	action: "get_ids",
	params: {
		offset: number,
		limit: number
	}
}
export type T_get_itemsParams = {
	action:"get_items",
	params:{
		ids:string[]
	}
}
export type T_Product ={
	id: string,
	product: string,
	brand: string|null,
	price:number
}