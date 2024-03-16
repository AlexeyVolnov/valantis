type T_intitialState = {
	brand: {
		currentBrand: string
		listBrand: { select: boolean, name: string }[] | []
	},
	price: {
		currentPrice: number
	}
	productName: string,
	filterList:[]
}