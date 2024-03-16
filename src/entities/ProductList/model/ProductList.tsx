import {FC, useEffect} from "react";
import style from './productList.module.scss'
import {useAppDispatch, useAppSelector} from "../../../redux/state/storeHooks.ts";
import {getProduct} from "../../../redux/reducers/productListReducer/productListReducer.ts";
import ProductCard from "../../ProductCard/model/ProductCard.tsx";
import {T_Product} from "../../../api/typeApi.ts";
import ProductCardLoader from "../../ProductCard/ui/ProductCardLoader.tsx";




const ProductList: FC = () => {
	// @ts-ignore
	const dispatch = useAppDispatch();
	const {limit, page,statusGetListProduct,productList} = useAppSelector(state => state.productListReducer)

	useEffect(() => {
		dispatch(getProduct({action: "get_ids", params: {limit: limit, offset: page * limit}}));
	}, [page])

	const arraySkeleton = Array.from({length: 10}, (_, index) => index)
	const filteredOnlyId = (array: T_Product[]): T_Product[] => {
		const temp = new Map()
		return array.filter(prod => (
				temp.has(prod.id)
						? false
						: temp.set(prod.id, 1) && true)
		)
	}
	return (
			<div className={style.productList}>
				{statusGetListProduct === 'loading' && arraySkeleton.map(skelet => <ProductCardLoader key={skelet}/>)}
				{statusGetListProduct === 'fulfilled' && filteredOnlyId(productList).map(product =>
						<ProductCard key={product.id} product={product}/>
				)
				}
			</div>
	)
}

export default ProductList