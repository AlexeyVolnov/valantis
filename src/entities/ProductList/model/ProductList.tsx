import {FC, useEffect} from "react";
import style from './productList.module.scss'
import {useAppDispatch, useAppSelector} from "../../../redux/state/storeHooks.ts";
import {getProduct} from "../../../redux/reducers/productListReducer/productListReducer.ts";
import ProductCard from "../../ProductCard/model/ProductCard.tsx";
import ProductListLoader from "../ui/ProductListLoader.tsx";
import {T_Product} from "../../../api/typeApi.ts";


interface IProductListProps {

}


const ProductList: FC<IProductListProps> = ({}) => {
	// @ts-ignore
	const dispath = useAppDispatch();
	useEffect(() => {
		dispath(getProduct({action: "get_ids", params: {limit: 10, offset: 1}}));
	}, [])
	const {productList, statusGetListProduct} = useAppSelector(state => state.productListReducer)

	const filteredOnlyId = (array: T_Product[]): T_Product[] => {
		const temp: any = []
		return array.filter(prod => (
				temp.includes(prod.id)
						? false
						: temp.push(prod.id) && true)
		)
	}
	return (
			<div className={style.productList}>
				{statusGetListProduct === 'loading' && <ProductListLoader length={50}/>}
				{statusGetListProduct === 'fulfilled' && filteredOnlyId(productList).map(product =>
						<ProductCard key={product.id} product={product}/>
				)
				}
			</div>
	)
}

export default ProductList