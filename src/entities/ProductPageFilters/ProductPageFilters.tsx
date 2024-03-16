import {FC} from "react";
import style from './ProductPageFilters.module.scss'
import FilterControls from "../Filter/FilterControls/FilterControls.tsx";
import FilterListPrice from "../Filter/FilterListPrice/FilterListPrice.tsx";
import FilterListBrand from "../Filter/FilterListBrend/FilterListBrand.tsx";
import FilterNameProduct from "../Filter/FilterNameProduct/FilterNameProduct.tsx";
import {useAppDispatch, useAppSelector} from "../../redux/state/storeHooks.ts";
import {resetFilters, T_filter} from "../../redux/reducers/productFilterReducer/productFilterReducer.ts";
import {fetchProductFilter, getProduct} from "../../redux/reducers/productListReducer/productListReducer.ts";



const ProductPageFilters: FC = () => {
	const dispatch = useAppDispatch()
	const price = useAppSelector(state=>state.productFilterReducer.price.currentPrice)
	const name = useAppSelector(state=>state.productFilterReducer.productName)
	const brand = useAppSelector(state=>state.productFilterReducer.brand.currentBrand)
	const {limit, page} = useAppSelector(state => state.productListReducer)


	const filterReset = () => {
		dispatch(resetFilters())
		dispatch(getProduct({action: "get_ids", params: {limit: limit, offset: page * limit}}));
	}
	const filter = ()=>{
		const filters:Partial<T_filter> = {};
		if(price>0){
			filters.price = price
		}
		if(brand.length){
			filters.brand = brand
		}
		if(name.length){
			filters.product = name
		}
		// @ts-ignore
		dispatch(fetchProductFilter(filters))
	}
	return (
			<div className={style.filterWrapper}>
				<FilterNameProduct/>
				<FilterControls nameControls={'Производитель'} filterList={<FilterListBrand/>}/>
				<FilterControls nameControls={'Цена'} filterList={<FilterListPrice/>}/>
				<div className={style.filterButtons}>
					<button className={style.applyButton} onClick={filter}>Применить</button>
					<button className={style.resetButton} onClick={filterReset}>Сбросить</button>
				</div>
			</div>
	)
}

export default ProductPageFilters