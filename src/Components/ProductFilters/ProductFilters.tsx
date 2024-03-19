import {FC} from "react";
import style from './ProductFilters.module.scss'
import FilterControls from "../Filter/FilterControls/FilterControls.tsx";
import FilterListPrice from "../Filter/FilterListPrice/FilterListPrice.tsx";
import FilterListBrand from "../Filter/FilterListBrend/FilterListBrand.tsx";
import FilterNameProduct from "../Filter/FilterNameProduct/FilterNameProduct.tsx";
import store from "../../store/store.ts";



const ProductFilters: FC = () => {


	return (
			<div className={style.filterWrapper}>
				<FilterNameProduct/>
				<FilterControls nameControls={'Производитель'} filterList={<FilterListBrand/>}/>
				<FilterControls nameControls={'Цена'} filterList={<FilterListPrice/>}/>
				<div className={style.filterButtons}>
					<button className={style.applyButton} onClick={()=>store.fetchIds()}>Применить</button>
					<button className={style.resetButton} onClick={()=>store.resetFilters()}>Сбросить</button>
				</div>
			</div>
	)
}

export default ProductFilters