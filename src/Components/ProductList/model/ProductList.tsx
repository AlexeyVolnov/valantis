import {FC, useEffect} from "react";
import style from './productList.module.scss'
import ProductCard from "../../ProductCard/model/ProductCard.tsx";
import ProductCardLoader from "../../ProductCard/ui/ProductCardLoader.tsx";
import store from "../../../store/store.ts";
import {observer} from "mobx-react";


const ProductList: FC = observer(() => {
	const [page, statusGetListProduct, productList] = [
		store.navigation.page,
		store.statusGetListProduct,
		store.productList
	]
	useEffect(() => {
		store.fetchIds()
	}, [page])
	const arraySkeleton = Array.from({length: 50}, (_, index) => index)
	return (
			<div className={style.productList}>
				{statusGetListProduct === 'loading' && arraySkeleton.map(skelet => <ProductCardLoader key={skelet}/>)}
				{statusGetListProduct === 'fullfiled' && productList.length === 0 && <div>No Data</div>}
				{statusGetListProduct === 'fullfiled' && productList.map(product =><ProductCard key={product.id} product={product}/>)}
			</div>
	)
})

export default ProductList